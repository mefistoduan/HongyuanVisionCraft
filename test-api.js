'use strict';

// 简单的测试脚本，用于模拟Vercel环境调用api/index.js
const http = require('http');
const apiHandler = require('./api/index');

// 创建模拟的请求和响应对象
const mockReq = {
  method: 'GET',
  url: '/',
  headers: {},
  query: {},
};

const mockRes = {
  statusCode: 200,
  headers: {},
  headersSent: false,
  status: function(code) {
    this.statusCode = code;
    return this;
  },
  send: function(body) {
    console.log('Response status:', this.statusCode);
    console.log('Response body:', body);
    this.headersSent = true;
  },
  json: function(body) {
    console.log('Response status:', this.statusCode);
    console.log('Response JSON:', JSON.stringify(body, null, 2));
    this.headersSent = true;
  },
  setHeader: function(name, value) {
    this.headers[name] = value;
  },
};

// 执行API处理函数
console.log('Testing API handler...');
async function runTest() {
  try {
    await apiHandler(mockReq, mockRes);
    console.log('Test completed successfully');
    process.exit(0);
  } catch (err) {
    console.error('Test failed:', err);
    console.error('Test error stack:', err.stack);
    process.exit(1);
  }
}

runTest();