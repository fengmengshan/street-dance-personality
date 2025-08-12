@echo off
echo 🎭 街舞人格测评系统 - 简单启动
echo.

echo 📦 安装前端依赖...
cd frontend
call npm install
cd ..

echo.
echo 📦 安装后端依赖...
cd backend
call npm install

echo.
echo 🗄️ 初始化数据库...
call npm run db:generate
call npm run db:push
call npm run db:seed

echo.
echo 🚀 启动后端服务器...
start "后端服务器" cmd /k "cd /d %~dp0backend & npm run dev"

echo.
echo ⏳ 等待3秒...
timeout /t 3 /nobreak > nul

echo.
echo 🚀 启动前端服务器...
cd ../frontend
start "前端服务器" cmd /k "cd /d %~dp0frontend & npm run dev"

echo.
echo ✅ 启动完成！
echo.
echo 前端地址: http://localhost:3000
echo 后端API: http://localhost:8000
echo.
echo 两个服务器窗口已打开，请保持运行状态
echo 按任意键关闭此窗口...
pause > nul