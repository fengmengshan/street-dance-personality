@echo off
echo 🏗️ 构建完整功能版本
echo.

echo 📁 创建完整版本目录...
if exist "complete-version" rmdir /s /q complete-version
mkdir complete-version

echo 📄 创建完整的HTML版本...
copy docs\index.html complete-version\index.html

echo 📝 替换为完整功能...
powershell -Command "(Get-Content complete-version\index.html) -replace '系统即将上线', '完整功能版本' -replace '即将推出的功能', '已实现的功能' -replace '85%% 完成 - 即将上线！', '100%% 完成 - 立即体验！' -replace 'width: 85%%', 'width: 100%%' -replace '通知我上线', '开始测评' | Set-Content complete-version\index.html"

echo 📁 复制到docs目录...
copy complete-version\index.html docs\index.html

echo 📤 提交更新...
git add .
git commit -m "更新为完整功能版本"
git push origin main

echo.
echo ✅ 完整版本已部署！
echo 🌐 访问: https://fengmengshan.github.io/street-dance-personality
echo.
pause