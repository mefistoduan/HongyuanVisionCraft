'use strict';

// 导出一个兼容Vercel Serverless Functions的handler
module.exports = async (req, res) => {
  // 动态导入NestJS应用程序
  const { bootstrap } = require('../dist/main.js');
  
  try {
    // 启动NestJS应用程序
    await bootstrap();
    
    // Vercel会自动处理HTTP请求
    res.status(200).send('NestJS application is running on Vercel');
  } catch (error) {
    console.error('Error starting NestJS application:', error);
    res.status(500).send('Internal Server Error');
  }
};