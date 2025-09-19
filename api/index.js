'use strict';

// Adapted for Vercel Serverless Functions with robust fallback mechanisms
const path = require('path');
let cachedApp = null;

// Try to load modules with multiple fallback strategies
async function loadModules() {
  try {
    // First try to load using CommonJS require
    const { NestFactory } = require('@nestjs/core');
    
    // Try to load from dist directory first (pre-built files)
    try {
      const distAppModulePath = path.join(__dirname, '../dist/app.module.js');
      const { AppModule } = require(distAppModulePath);
      return { NestFactory, AppModule };
    } catch (distError) {
      console.log('Dist module not found, attempting fallback strategies...');
      
      // Fallback strategy 1: Try to load with ts-node for TypeScript files
      try {
        // Set up environment for TypeScript
        process.env.TS_NODE_COMPILER_OPTIONS = JSON.stringify({
          "module": "CommonJS",
          "esModuleInterop": true,
          "skipLibCheck": true
        });
        
        // Register ts-node to handle TypeScript files
        require('ts-node/register');
        
        // Try to load TypeScript source files
        const srcAppModulePath = path.join(__dirname, '../src/app.module');
        const { AppModule } = require(srcAppModulePath);
        return { NestFactory, AppModule };
      } catch (tsNodeError) {
        // Log detailed errors for debugging
        console.error('Failed to load with ts-node:', tsNodeError);
        
        // Last resort: Return a simple Express app with basic functionality
        return createFallbackApp(NestFactory);
      }
    }
  } catch (error) {
    console.error('Critical error loading modules:', error);
    throw new Error(`Failed to load required modules: ${error.message}`);
  }
}

// Create a minimal fallback Express app when all other loading strategies fail
function createFallbackApp(NestFactory) {
  const express = require('express');
  const fallbackApp = express();
  
  // Set up basic routes for fallback
  fallbackApp.get('/', (req, res) => {
    res.status(200).send('Hongyuan VisionCraft - Smart Rendering Solutions');
  });
  
  fallbackApp.get('/sitemap.xml', (req, res) => {
    res.status(200).type('application/xml').send('<sitemap><url><loc>https://visioncraft.qzz.io</loc></url></sitemap>');
  });
  
  fallbackApp.get('/robots.txt', (req, res) => {
    res.status(200).send('User-agent: *\nAllow: /');
  });
  
  // Create a simple adapter to mimic NestJS HTTP adapter behavior
  const adapter = {
    getInstance: () => fallbackApp
  };
  
  // Return a mock AppModule and adapter
  return {
    NestFactory: {
      create: async () => ({
        getHttpAdapter: () => adapter,
        init: async () => {}
      })
    },
    AppModule: class MockAppModule {}
  };
}

// Initialize the NestJS application with error handling
async function initializeApp() {
  if (!cachedApp) {
    try {
      // Load necessary modules with fallbacks
      const { NestFactory, AppModule } = await loadModules();
      
      // Create and initialize the app
      const app = await NestFactory.create(AppModule);
      app.useLogger(false); // Disable logging
      await app.init();
      
      cachedApp = app;
    } catch (error) {
      console.error('Failed to initialize app, creating emergency fallback:', error);
      
      // Create a simple emergency Express fallback if all else fails
      const express = require('express');
      const emergencyApp = express();
      
      emergencyApp.all('*', (req, res) => {
        res.status(503).json({
          error: 'Service Unavailable',
          message: 'We are experiencing technical difficulties. Please try again later.'
        });
      });
      
      cachedApp = {
        getHttpAdapter: () => ({
          getInstance: () => emergencyApp
        })
      };
    }
  }
  return cachedApp;
}

// Main handler function for Vercel with enhanced error handling
module.exports = async (req, res) => {
  try {
    // Get the initialized app instance
    const app = await initializeApp();
    
    // Handle the request using NestJS's HTTP adapter
    const httpAdapter = app.getHttpAdapter();
    const server = httpAdapter.getInstance();
    
    // Use standard Express handling
    server(req, res);
  } catch (error) {
    console.error('Error handling request:', error);
    
    // Send detailed error response if headers not already sent
    if (!res.headersSent) {
      res.status(500).json({
        error: 'Internal Server Error',
        message: error.message || 'Unknown error',
        request: {
          method: req.method,
          url: req.url
        }
      });
    }
  }
};