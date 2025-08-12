#!/usr/bin/env node

const https = require('https');
const http = require('http');

// 检查URL是否可访问
function checkUrl(url) {
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;
    
    client.get(url, (res) => {
      resolve({
        url,
        status: res.statusCode,
        success: res.statusCode >= 200 && res.statusCode < 400
      });
    }).on('error', (err) => {
      resolve({
        url,
        status: 'ERROR',
        success: false,
        error: err.message
      });
    });
  });
}

async function checkDeployment() {
  console.log('🔍 检查部署状态...\n');

  // 这里替换为你的实际部署URL
  const urls = [
    'https://your-frontend.vercel.app',
    'https://your-backend.railway.app/health',
    'https://your-backend.railway.app/api/personality-types'
  ];

  for (const url of urls) {
    const result = await checkUrl(url);
    
    if (result.success) {
      console.log(`✅ ${result.url} - 状态: ${result.status}`);
    } else {
      console.log(`❌ ${result.url} - 状态: ${result.status}`);
      if (result.error) {
        console.log(`   错误: ${result.error}`);
      }
    }
  }

  console.log('\n🎯 部署检查完成！');
  console.log('如果看到❌，请检查对应的服务是否正常运行。');
}

checkDeployment();