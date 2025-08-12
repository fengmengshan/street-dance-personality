@echo off
echo 🎭 自动启动街舞人格测评系统
echo.

echo 🚀 启动后端服务器...
start "后端服务器" cmd /k "cd backend && npm run dev"

echo ⏳ 等待后端启动...
timeout /t 3 /nobreak > nul

echo 🚀 启动前端服务器...
start "前端服务器" cmd /k "cd frontend && npm run dev"

echo ⏳ 等待前端启动...
timeout /t 5 /nobreak > nul

echo 🌐 正在打开浏览器...
start http://localhost:3000

echo.
echo ✅ 系统启动完成！
echo 📍 网站地址: http://localhost:3000
echo 📍 后端API: http://localhost:8000
echo.
echo 两个服务器窗口已打开，请保持运行状态
echo 如果网站没有自动打开，请手动访问: http://localhost:3000
echo.
pause