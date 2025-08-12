@echo off
echo 🧪 测试街舞人格测评系统
echo.

echo 📋 检查Node.js版本...
node --version
if errorlevel 1 (
    echo ❌ 请先安装Node.js (版本 >= 18)
    echo 下载地址: https://nodejs.org/
    pause
    exit /b 1
)

echo.
echo 📦 安装根目录依赖...
npm install

echo.
echo 📦 安装前端依赖...
cd frontend
npm install
if errorlevel 1 (
    echo ❌ 前端依赖安装失败
    cd ..
    pause
    exit /b 1
)

echo.
echo 📦 安装后端依赖...
cd ../backend
npm install
if errorlevel 1 (
    echo ❌ 后端依赖安装失败
    cd ..
    pause
    exit /b 1
)

echo.
echo 🗄️ 设置数据库...
npm run db:generate
npm run db:push
npm run db:seed

echo.
echo ✅ 系统准备完成！
echo.
echo 现在可以启动系统了：
echo 1. 双击 quick-start.bat 一键启动
echo 2. 或者手动启动前后端服务器
echo.
echo 启动后访问: http://localhost:3000
echo.
pause