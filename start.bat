@echo off
echo 🎭 街舞人格测评系统启动脚本
echo.

echo 📦 安装依赖...
call npm run install:all
if errorlevel 1 (
    echo ❌ 依赖安装失败
    pause
    exit /b 1
)

echo.
echo 🗄️ 初始化数据库...
cd backend
call npm run db:generate
call npm run db:push
call npm run db:seed
cd ..

echo.
echo 🚀 启动开发服务器...
echo 前端地址: http://localhost:3000
echo 后端API: http://localhost:8000
echo.
echo 按 Ctrl+C 停止服务器
echo.

call npm run dev