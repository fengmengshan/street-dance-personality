@echo off
echo 📦 创建独立版本 - 无需服务器的纯前端版本
echo.

echo 🔧 修改前端配置，使其可以独立运行...

echo 创建独立版本目录...
if not exist "standalone" mkdir standalone
if not exist "standalone\src" mkdir standalone\src
if not exist "standalone\src\data" mkdir standalone\src\data

echo 复制前端文件...
xcopy /E /Y frontend\* standalone\

echo 创建本地数据文件...
copy backend\src\data\questions.ts standalone\src\data\
copy backend\src\models\PersonalityType.ts standalone\src\data\

echo 修改API调用为本地数据...
echo // 本地数据版本 > standalone\src\services\localApi.ts

echo.
echo ✅ 独立版本创建完成！
echo.
echo 📋 使用方法：
echo 1. cd standalone
echo 2. npm install
echo 3. npm run build
echo 4. 将dist文件夹上传到任何静态网站托管服务
echo.
echo 🌐 推荐的免费托管服务：
echo - GitHub Pages
echo - Netlify
echo - Vercel
echo - Surge.sh
echo.
pause