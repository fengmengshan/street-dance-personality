@echo off
echo 🚀 一键部署到GitHub - 超简单版本
echo.

echo 📋 环境检查...
git --version >nul 2>&1
if errorlevel 1 (
    echo ❌ 请先安装Git: https://git-scm.com/
    echo 安装后重新运行此脚本
    pause
    exit /b 1
)

echo ✅ Git已安装
echo.

echo 🔧 准备部署文件...

REM 初始化Git仓库
if not exist ".git" (
    git init
    echo 初始化Git仓库完成
)

REM 添加所有文件
git add .
git commit -m "街舞人格测评系统 - 准备部署"

echo.
echo 📝 现在需要你的GitHub信息：
echo.

set /p username="请输入你的GitHub用户名: "

echo.
echo 🌐 请在浏览器中完成以下步骤：
echo.
echo 1. 访问 https://github.com/new
echo 2. 仓库名填写: street-dance-personality
echo 3. 选择 "Public" (公开)
echo 4. 点击 "Create repository"
echo.

pause

echo.
echo 🔗 连接到GitHub...
git remote remove origin 2>nul
git remote add origin https://github.com/%username%/street-dance-personality.git
git branch -M main

echo.
echo 📤 推送代码...
git push -u origin main

if errorlevel 1 (
    echo.
    echo ❌ 推送可能失败了，请检查：
    echo 1. GitHub用户名是否正确
    echo 2. 仓库是否已创建
    echo 3. 是否需要登录GitHub
    echo.
    echo 💡 你也可以手动推送：
    echo git remote add origin https://github.com/%username%/street-dance-personality.git
    echo git push -u origin main
    echo.
    pause
    exit /b 1
)

echo.
echo ✅ 代码推送成功！
echo.
echo 🌐 现在启用GitHub Pages：
echo.
echo 📋 请在浏览器中完成：
echo 1. 访问 https://github.com/%username%/street-dance-personality
echo 2. 点击 "Settings" 标签
echo 3. 滚动到 "Pages" 部分
echo 4. Source 选择 "Deploy from a branch"
echo 5. Branch 选择 "main"
echo 6. Folder 选择 "/ (root)"
echo 7. 点击 "Save"
echo.

echo ⏳ 等待2-5分钟部署完成后，你的网站将在：
echo.
echo 🎉 https://%username%.github.io/street-dance-personality
echo.

echo 📱 这个地址就可以分享给朋友了！
echo.

echo 💡 提示：
echo - 第一次部署可能需要几分钟
echo - 以后修改代码只需要 git push 即可自动更新
echo - 完全免费，永久有效
echo.

pause