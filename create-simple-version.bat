@echo off
echo 🔧 创建简化版本 - 避免构建错误
echo.

echo 📁 创建简化版本目录...
if exist "simple-version" rmdir /s /q simple-version
mkdir simple-version

echo 📄 创建简单的HTML版本...
echo ^<!DOCTYPE html^> > simple-version\index.html
echo ^<html lang="zh-CN"^> >> simple-version\index.html
echo ^<head^> >> simple-version\index.html
echo     ^<meta charset="UTF-8"^> >> simple-version\index.html
echo     ^<meta name="viewport" content="width=device-width, initial-scale=1.0"^> >> simple-version\index.html
echo     ^<title^>街舞人格测评系统^</title^> >> simple-version\index.html
echo     ^<script src="https://cdn.tailwindcss.com"^>^</script^> >> simple-version\index.html
echo     ^<style^> >> simple-version\index.html
echo         body { background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%); } >> simple-version\index.html
echo         .card { background: linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%); } >> simple-version\index.html
echo     ^</style^> >> simple-version\index.html
echo ^</head^> >> simple-version\index.html
echo ^<body class="min-h-screen text-white"^> >> simple-version\index.html
echo     ^<div class="container mx-auto px-4 py-8"^> >> simple-version\index.html
echo         ^<div class="text-center mb-12"^> >> simple-version\index.html
echo             ^<h1 class="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"^>街舞人格测评系统^</h1^> >> simple-version\index.html
echo             ^<p class="text-xl text-gray-300"^>发现你的街舞灵魂^</p^> >> simple-version\index.html
echo         ^</div^> >> simple-version\index.html
echo         ^<div class="max-w-2xl mx-auto card rounded-2xl p-8"^> >> simple-version\index.html
echo             ^<h2 class="text-2xl font-bold mb-6"^>系统正在开发中...^</h2^> >> simple-version\index.html
echo             ^<p class="text-gray-300 mb-6"^>我们正在为你打造最棒的街舞人格测评体验！^</p^> >> simple-version\index.html
echo             ^<div class="bg-purple-500/20 border border-purple-500/30 rounded-lg p-4"^> >> simple-version\index.html
echo                 ^<h3 class="font-bold mb-2"^>即将推出的功能：^</h3^> >> simple-version\index.html
echo                 ^<ul class="list-disc list-inside space-y-1 text-sm"^> >> simple-version\index.html
echo                     ^<li^>62道专业街舞题目^</li^> >> simple-version\index.html
echo                     ^<li^>12种创新人格类型^</li^> >> simple-version\index.html
echo                     ^<li^>科学的心理分析^</li^> >> simple-version\index.html
echo                     ^<li^>个性化舞种推荐^</li^> >> simple-version\index.html
echo                 ^</ul^> >> simple-version\index.html
echo             ^</div^> >> simple-version\index.html
echo         ^</div^> >> simple-version\index.html
echo     ^</div^> >> simple-version\index.html
echo ^</body^> >> simple-version\index.html
echo ^</html^> >> simple-version\index.html

echo 📁 复制到docs目录...
if exist "docs" rmdir /s /q docs
mkdir docs
xcopy /E /Y simple-version\* docs\

echo 📄 创建.nojekyll文件...
echo. > docs\.nojekyll

echo 📤 提交到GitHub...
git add .
git commit -m "添加简化版本 - 修复部署问题"
git push origin main

echo.
echo ✅ 简化版本创建完成！
echo.
echo 📋 现在在GitHub设置中：
echo 1. 访问 https://github.com/fengmengshan/street-dance-personality/settings/pages
echo 2. Source: Deploy from a branch
echo 3. Branch: main
echo 4. Folder: /docs
echo 5. 点击 Save
echo.
echo 🌐 网站将在这里：https://fengmengshan.github.io/street-dance-personality
echo.
pause