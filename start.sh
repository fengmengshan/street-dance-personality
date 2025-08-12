#!/bin/bash

echo "🎭 街舞人格测评系统启动脚本"
echo ""

echo "📦 安装依赖..."
npm run install:all
if [ $? -ne 0 ]; then
    echo "❌ 依赖安装失败"
    exit 1
fi

echo ""
echo "🗄️ 初始化数据库..."
cd backend
npm run db:generate
npm run db:push
npm run db:seed
cd ..

echo ""
echo "🚀 启动开发服务器..."
echo "前端地址: http://localhost:3000"
echo "后端API: http://localhost:8000"
echo ""
echo "按 Ctrl+C 停止服务器"
echo ""

npm run dev