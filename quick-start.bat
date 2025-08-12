@echo off
echo 🎭 街舞人格测评系统 - 快速启动
echo.

echo 📦 安装前端依赖...
cd frontend
call npm install
if errorlevel 1 (
    echo ❌ 前端依赖安装失败
    pause
    exit /b 1
)

echo.
echo 📦 安装后端依赖...
cd ../backend
call npm install
if errorlevel 1 (
    echo ❌ 后端依赖安装失败
    pause
    exit /b 1
)

echo.
echo 🗄️ 初始化数据库...
call npm run db:generate
call npm run db:push
call npm run db:seed

echo.
echo 🚀 启动后端服务器...
start "后端服务器" cmd /k "npm run dev"

echo.
echo ⏳ 等待后端启动...
timeout /t 5 /nobreak > nul

echo.
echo 🚀 启动前端服务器...
cd ../frontend
start "前端服务器" cmd /k "npm run dev"

echo.
echo ✅ 启动完成！
echo 前端地址: http://localhost:3000
echo 后端API: http://localhost:8000
echo.
echo 按任意键关闭此窗口...
pause > nul