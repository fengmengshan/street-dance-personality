@echo off
echo 📱 局域网分享 - 让同一WiFi的朋友访问
echo.

echo 🚀 启动服务器...
start "后端" cmd /k "cd backend && npm run dev"
timeout /t 5 /nobreak > nul

start "前端" cmd /k "cd frontend && npm run dev"
timeout /t 5 /nobreak > nul

echo.
echo 🔍 获取本机IP地址...
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4"') do (
    set ip=%%a
    set ip=!ip: =!
    goto :found
)

:found
echo.
echo ✅ 服务器启动完成！
echo.
echo 📋 分享信息：
echo 网站地址：http://%ip%:3000
echo.
echo 📱 告诉朋友：
echo 1. 确保在同一WiFi网络
echo 2. 在浏览器输入：http://%ip%:3000
echo 3. 开始测评！
echo.
echo 💡 提示：
echo - 只有同一WiFi下的设备能访问
echo - 保持电脑开机和网络连接
echo - 如果无法访问，检查防火墙设置
echo.
pause