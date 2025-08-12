@echo off
echo ⚡ 超快部署 - 5分钟让全世界访问你的网站
echo.

echo 🔍 检查ngrok是否存在...
if exist "ngrok.exe" (
    echo ✅ 找到ngrok
) else (
    echo ❌ 未找到ngrok.exe
    echo.
    echo 📥 请下载ngrok：
    echo 1. 访问 https://ngrok.com/download
    echo 2. 下载Windows版本
    echo 3. 解压ngrok.exe到当前文件夹
    echo 4. 重新运行此脚本
    echo.
    pause
    exit /b 1
)

echo.
echo 🚀 启动本地服务器...
start "后端" cmd /k "cd backend && npm run dev"
timeout /t 5 /nobreak > nul

start "前端" cmd /k "cd frontend && npm run dev"
timeout /t 8 /nobreak > nul

echo.
echo 🌐 启动ngrok内网穿透...
echo 正在创建公网访问地址...
start "ngrok" cmd /k "ngrok http 3000"

echo.
echo ✅ 部署完成！
echo.
echo 📋 接下来的步骤：
echo 1. 等待ngrok窗口显示网址（大约30秒）
echo 2. 复制 https://xxxxx.ngrok.io 这样的网址
echo 3. 分享给朋友即可访问！
echo.
echo 💡 提示：
echo - 保持所有窗口开启
echo - 免费版ngrok每次重启网址会变化
echo - 想要固定网址请注册ngrok账号
echo.
pause