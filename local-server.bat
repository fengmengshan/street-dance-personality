@echo off
echo 🚀 启动本地街舞人格测评系统...
echo.
echo 正在启动本地服务器...
cd docs
echo 服务器地址: http://localhost:8080
echo 按 Ctrl+C 停止服务器
echo.
python -m http.server 8080