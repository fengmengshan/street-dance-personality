@echo off
echo 🔧 修复GitHub Pages部署问题
echo.

echo 📦 安装前端依赖...
cd frontend
call npm install

echo 🏗️ 构建静态网站...
call npm run build

echo 📁 准备GitHub Pages文件...
cd ..

REM 创建docs目录用于GitHub Pages
if exist "docs" rmdir /s /q docs
mkdir docs

REM 复制构建文件到docs目录
xcopy /E /Y frontend\dist\* docs\

REM 创建.nojekyll文件
echo. > docs\.nojekyll

REM 创建CNAME文件（如果需要自定义域名）
REM echo your-domain.com > docs\CNAME

echo 📤 提交更改...
git add .
git commit -m "修复GitHub Pages - 添加构建文件"
git push origin main

echo.
echo ✅ 修复完成！
echo.
echo 📋 现在请在GitHub设置中：
echo 1. 访问 https://github.com/fengmengshan/street-dance-personality/settings/pages
echo 2. Source 选择 "Deploy from a branch"
echo 3. Branch 选择 "main"
echo 4. Folder 选择 "/docs"
echo 5. 点击 Save
echo.
echo ⏳ 等待几分钟后访问：
echo https://fengmengshan.github.io/street-dance-personality
echo.
pause