@echo off
echo 🚀 Vercel一键部署 - 3分钟获得永久网址
echo.

echo 📋 检查Node.js...
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ 请先安装Node.js: https://nodejs.org/
    pause
    exit /b 1
)

echo.
echo 📦 安装Vercel CLI...
npm install -g vercel

echo.
echo 🚀 开始部署...
echo 请按照提示操作：
echo 1. 选择 "Link to existing project" 或 "Create new project"
echo 2. 输入项目名称
echo 3. 等待部署完成
echo.

cd frontend
vercel --prod

echo.
echo ✅ 部署完成！
echo 你的网站已经上线，可以全球访问了！
echo.
pause