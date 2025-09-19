'use strict';

// Adapted for Vercel Serverless Functions
const path = require('path');
let cachedApp = null;

// 尝试动态导入所需模块
async function loadModules() {
  try {
    // 使用require来导入@nestjs/core，避免ESM导入问题
    const { NestFactory } = require('@nestjs/core');
    
    // 获取dist/app.module.js的绝对路径
    const distAppModulePath = path.join(__dirname, '../dist/app.module.js');
    
    // 使用require来导入已构建的模块
    const { AppModule } = require(distAppModulePath);
    
    return { NestFactory, AppModule };
  } catch (error) {
    console.error('Error loading modules:', error);
    throw new Error(`Failed to load required modules: ${error.message}`);
  }
}

// Initialize the NestJS application
async function initializeApp() {
  if (!cachedApp) {
    // 加载必要的模块
    const { NestFactory, AppModule } = await loadModules();
    
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
    const httpAdapter = app.getHttpAdapter();
    
    // 获取Express服务器实例
    const server = httpAdapter.getInstance();
    
    // 使用标准的Express处理方式
    server(req, res);
  } catch (error) {
    console.error('Error handling request:', error);
    
    // Send more detailed error response for debugging
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