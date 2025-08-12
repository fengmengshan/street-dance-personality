@echo off
echo 🚀 部署到GitHub - 让全世界访问你的网站
echo.

echo 📋 检查Git...
git --version >nul 2>&1
if errorlevel 1 (
    echo ❌ 请先安装Git: https://git-scm.com/
    pause
    exit /b 1
)

echo ✅ Git已安装
echo.

echo 🔧 初始化Git仓库...
git init
git add .
git commit -m "街舞人格测评系统 - 初始提交"

echo.
echo 📝 请按照以下步骤操作：
echo.
echo 1️⃣ 在浏览器中访问 https://github.com
echo 2️⃣ 点击右上角的 "+" 号，选择 "New repository"
echo 3️⃣ 仓库名建议填写: street-dance-personality
echo 4️⃣ 选择 "Public" (公开仓库)
echo 5️⃣ 不要勾选 "Add a README file"
echo 6️⃣ 点击 "Create repository"
echo.

set /p username="请输入你的GitHub用户名: "
set /p reponame="请输入仓库名称 (默认: street-dance-personality): "

if "%reponame%"=="" set reponame=street-dance-personality

echo.
echo 🔗 连接到GitHub仓库...
git remote add origin https://github.com/%username%/%reponame%.git
git branch -M main

echo.
echo 📤 推送代码到GitHub...
git push -u origin main

if errorlevel 1 (
    echo.
    echo ❌ 推送失败，可能需要身份验证
    echo 💡 解决方案：
    echo 1. 确保GitHub用户名正确
    echo 2. 可能需要设置Personal Access Token
    echo 3. 或者使用GitHub Desktop客户端
    echo.
    pause
    exit /b 1
)

echo.
echo ✅ 代码推送成功！
echo.
echo 🌐 现在设置GitHub Pages...
echo.
echo 📋 请在浏览器中完成以下步骤：
echo 1. 访问 https://github.com/%username%/%reponame%
echo 2. 点击 "Settings" 标签
echo 3. 在左侧菜单找到 "Pages"
echo 4. 在 "Source" 下选择 "Deploy from a branch"
echo 5. 选择 "main" 分支
echo 6. 选择 "/ (root)" 文件夹
echo 7. 点击 "Save"
echo.

echo ⏳ 等待部署完成（大约2-5分钟）...
echo.
echo 🎉 完成后，你的网站将在这里：
echo https://%username%.github.io/%reponame%
echo.

echo 📱 分享给朋友的链接：
echo https://%username%.github.io/%reponame%
echo.

pause