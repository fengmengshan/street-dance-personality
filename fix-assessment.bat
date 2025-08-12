@echo off
echo 🔧 修复测评页面问题
echo.

echo 停止现有服务器...
taskkill /f /im node.exe >nul 2>&1

echo 等待3秒...
timeout /t 3 /nobreak >nul

echo 启动后端服务器...
start "后端" cmd /k "cd backend && npm run dev"

echo 等待后端启动...
timeout /t 5 /nobreak >nul

echo 启动前端服务器...
start "前端" cmd /k "cd frontend && npm run dev"

echo 等待前端启动...
timeout /t 5 /nobreak >nul

echo 打开浏览器...
start http://localhost:3000

echo.
echo ✅ 修复完成！现在测试一下测评功能
echo 如果还有问题，请检查浏览器控制台的调试信息
pause