@echo off
echo 🔧 手动设置街舞人格测评系统
echo.

echo 选择操作：
echo 1. 安装前端依赖
echo 2. 安装后端依赖  
echo 3. 初始化数据库
echo 4. 启动前端服务器
echo 5. 启动后端服务器
echo 6. 全部执行
echo.

set /p choice=请输入选项 (1-6): 

if "%choice%"=="1" goto frontend
if "%choice%"=="2" goto backend
if "%choice%"=="3" goto database
if "%choice%"=="4" goto start_frontend
if "%choice%"=="5" goto start_backend
if "%choice%"=="6" goto all

goto end

:frontend
echo 📦 安装前端依赖...
cd frontend
npm install
cd ..
goto end

:backend
echo 📦 安装后端依赖...
cd backend
npm install
cd ..
goto end

:database
echo 🗄️ 初始化数据库...
cd backend
npm run db:generate
npm run db:push
npm run db:seed
cd ..
goto end

:start_frontend
echo 🚀 启动前端服务器...
cd frontend
npm run dev
goto end

:start_backend
echo 🚀 启动后端服务器...
cd backend
npm run dev
goto end

:all
echo 📦 安装前端依赖...
cd frontend
npm install
cd ..

echo 📦 安装后端依赖...
cd backend
npm install

echo 🗄️ 初始化数据库...
npm run db:generate
npm run db:push
npm run db:seed
cd ..

echo ✅ 设置完成！
echo.
echo 现在需要启动两个服务器：
echo 1. 再次运行此脚本，选择选项5启动后端
echo 2. 再次运行此脚本，选择选项4启动前端
echo.
echo 或者手动在两个命令窗口中运行：
echo 窗口1: cd backend ^& npm run dev
echo 窗口2: cd frontend ^& npm run dev

:end
echo.
pause