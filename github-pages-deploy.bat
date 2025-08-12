@echo off
echo 🚀 GitHub Pages 完整部署方案
echo.

echo 📋 检查环境...
git --version >nul 2>&1
if errorlevel 1 (
    echo ❌ 请先安装Git: https://git-scm.com/
    pause
    exit /b 1
)

node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ 请先安装Node.js: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ 环境检查通过
echo.

echo 🔧 创建纯前端版本...

REM 创建独立版本目录
if exist "github-pages" rmdir /s /q github-pages
mkdir github-pages
cd github-pages

echo 📦 初始化项目...
echo {> package.json
echo   "name": "street-dance-personality",>> package.json
echo   "version": "1.0.0",>> package.json
echo   "type": "module",>> package.json
echo   "scripts": {>> package.json
echo     "dev": "vite",>> package.json
echo     "build": "vite build",>> package.json
echo     "preview": "vite preview">> package.json
echo   },>> package.json
echo   "dependencies": {>> package.json
echo     "react": "^18.2.0",>> package.json
echo     "react-dom": "^18.2.0",>> package.json
echo     "react-router-dom": "^6.20.1",>> package.json
echo     "framer-motion": "^10.16.5",>> package.json
echo     "lucide-react": "^0.294.0",>> package.json
echo     "chart.js": "^4.4.0",>> package.json
echo     "react-chartjs-2": "^5.2.0">> package.json
echo   },>> package.json
echo   "devDependencies": {>> package.json
echo     "@types/react": "^18.2.37",>> package.json
echo     "@types/react-dom": "^18.2.15",>> package.json
echo     "@vitejs/plugin-react": "^4.1.1",>> package.json
echo     "autoprefixer": "^10.4.16",>> package.json
echo     "postcss": "^8.4.31",>> package.json
echo     "tailwindcss": "^3.3.5",>> package.json
echo     "typescript": "^5.2.2",>> package.json
echo     "vite": "^4.5.0">> package.json
echo   }>> package.json
echo }>> package.json

echo 📁 复制前端文件...
xcopy /E /Y ..\frontend\src .\src\
xcopy /Y ..\frontend\index.html .\
xcopy /Y ..\frontend\tailwind.config.js .\
xcopy /Y ..\frontend\tsconfig.json .\
xcopy /Y ..\frontend\vite.config.ts .\
xcopy /Y ..\frontend\postcss.config.js .\

echo 🔧 修改为纯前端版本...
REM 这里需要修改API调用为本地数据

echo 📦 安装依赖...
call npm install

echo 🏗️ 构建项目...
call npm run build

echo 📁 准备GitHub Pages...
cd ..

echo 🔧 初始化Git...
git init
echo node_modules/ > .gitignore
echo dist/ >> .gitignore
echo *.log >> .gitignore

git add .
git commit -m "街舞人格测评系统 - GitHub Pages版本"

echo.
echo 📝 请按照以下步骤操作：
echo.
echo 1️⃣ 在浏览器访问 https://github.com/new
echo 2️⃣ 仓库名: street-dance-personality
echo 3️⃣ 选择 Public
echo 4️⃣ 点击 Create repository
echo.

set /p username="请输入你的GitHub用户名: "

echo.
echo 🔗 连接GitHub...
git remote add origin https://github.com/%username%/street-dance-personality.git
git branch -M main
git push -u origin main

echo.
echo 📄 创建GitHub Pages分支...
git checkout --orphan gh-pages
git rm -rf .
xcopy /E /Y github-pages\dist\* .\
echo. > .nojekyll

git add .
git commit -m "GitHub Pages部署"
git push origin gh-pages

echo.
echo ✅ 部署完成！
echo.
echo 🌐 你的网站地址：
echo https://%username%.github.io/street-dance-personality
echo.
echo 📱 现在可以分享给朋友了！
echo.
pause