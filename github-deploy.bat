@echo off
echo 🐙 GitHub Pages部署 - 完全免费的永久网址
echo.

echo 📋 检查Git...
git --version >nul 2>&1
if errorlevel 1 (
    echo ❌ 请先安装Git: https://git-scm.com/
    pause
    exit /b 1
)

echo.
echo 📦 准备部署文件...

echo 创建GitHub Pages配置...
echo. > .nojekyll

echo 构建前端...
cd frontend
call npm run build
cd ..

echo 复制构建文件...
if not exist "docs" mkdir docs
xcopy /E /Y frontend\dist\* docs\

echo.
echo 📤 推送到GitHub...
git add .
git commit -m "部署到GitHub Pages"

echo.
echo ✅ 准备完成！
echo.
echo 📋 接下来的步骤：
echo 1. 推送代码：git push origin main
echo 2. 访问GitHub仓库设置
echo 3. 找到Pages设置
echo 4. 选择 "Deploy from a branch"
echo 5. 选择 "main" 分支的 "/docs" 文件夹
echo 6. 等待几分钟部署完成
echo.
echo 🌐 你的网站将在这里：
echo https://你的用户名.github.io/仓库名
echo.
pause