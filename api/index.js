'use strict';

// Adapted for Vercel Serverless Functions
const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('../dist/app.module');

// Create a singleton instance of the NestJS app
let cachedApp = null;

// Initialize the NestJS application
async function initializeApp() {
  if (!cachedApp) {
    const app = await NestFactory.create(AppModule);
    // Disable NestJS built-in logger to prevent log flooding
    app.useLogger(false);
    // Don't call app.listen() in serverless environment
    await app.init();
    cachedApp = app;
  }
  return cachedApp;
}

// Main handler function for Vercel
module.exports = async (req, res) => {
  try {
    // Get the initialized app instance
    const app = await initializeApp();
    
    // Handle the request using NestJS's HTTP adapter
    // This will route the request to the appropriate controller
    const httpAdapter = app.getHttpAdapter();
    const server = httpAdapter.getInstance();
    
    // Pass the request to the Express server
    server(req, res);
  } catch (error) {
    console.error('Error handling request:', error);
    res.status(500).send('Internal Server Error');
  }
};