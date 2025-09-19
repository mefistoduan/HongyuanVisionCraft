'use strict';

// Adapted for Vercel Serverless Functions
let NestFactory;
let AppModule;
let cachedApp = null;

// 尝试动态导入所需模块
async function loadModules() {
  try {
    // 首先尝试从已构建的JavaScript文件导入
    const nestCore = await import('@nestjs/core');
    NestFactory = nestCore.NestFactory;
    
    try {
      // 尝试从dist目录导入（生产环境）
      const appModule = await import('../dist/app.module');
      AppModule = appModule.AppModule;
    } catch (distError) {
      console.log('Failed to import from dist, trying to import TypeScript source...');
      // 如果dist目录不存在，尝试直接导入TypeScript源代码（构建过程中）
      try {
        // 设置环境变量以支持TypeScript导入
        process.env.TS_NODE_COMPILER_OPTIONS = JSON.stringify({
          "module": "commonjs",
          "esModuleInterop": true
        });
        
        // 动态导入ts-node以支持TypeScript
        await import('ts-node/register');
        
        // 导入TypeScript源代码
        const appModule = await import('../src/app.module');
        AppModule = appModule.AppModule;
      } catch (srcError) {
        console.error('Failed to import modules:', srcError);
        throw new Error('Failed to load required modules');
      }
    }
  } catch (error) {
    console.error('Error loading modules:', error);
    throw error;
  }
}

// Initialize the NestJS application
async function initializeApp() {
  if (!cachedApp) {
    // 确保模块已加载
    if (!NestFactory || !AppModule) {
      await loadModules();
    }
    
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