@echo off
echo 🌐 街舞人格测评系统 - 部署准备
echo.

echo 📋 检查Git是否安装...
git --version >nul 2>&1
if errorlevel 1 (
    echo ❌ 请先安装Git: https://git-scm.com/
    pause
    exit /b 1
)

echo.
echo 📦 初始化Git仓库...
git init
git add .
git commit -m "街舞人格测评系统 - 准备部署"

echo.
echo 🔧 创建生产环境配置...

echo NODE_ENV=production > backend\.env.production
echo JWT_SECRET=street-dance-super-secret-production-key-2024 >> backend\.env.production
echo FRONTEND_URL=https://your-domain.vercel.app >> backend\.env.production

echo VITE_API_URL=https://your-backend.railway.app/api > frontend\.env.production

echo.
echo ✅ 部署准备完成！
echo.
echo 📋 接下来的步骤：
echo 1. 在GitHub创建新仓库
echo 2. 运行: git remote add origin https://github.com/你的用户名/仓库名.git
echo 3. 运行: git push -u origin main
echo 4. 访问 Railway.app 部署后端
echo 5. 访问 Vercel.com 部署前端
echo.
echo 📖 详细步骤请查看 "部署指南.md"
echo.
pause