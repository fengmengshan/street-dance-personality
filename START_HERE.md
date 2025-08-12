# 🎭 街舞人格测评系统 - 立即开始！

## 🚀 最简单的启动方法

### 方法1：一键启动（推荐）
双击运行 `quick-start.bat` 文件，会自动打开两个命令窗口：
- 一个运行后端服务器
- 一个运行前端服务器

### 方法2：手动启动
打开两个命令行窗口：

**窗口1 - 启动后端：**
```bash
cd backend
npm install
npm run db:generate
npm run db:push  
npm run db:seed
npm run dev
```

**窗口2 - 启动前端：**
```bash
cd frontend
npm install
npm run dev
```

## 🌐 访问网站

启动成功后，打开浏览器访问：
**http://localhost:3000**

## 🎯 体验流程

1. 点击"开始测评"
2. 回答62道街舞相关问题
3. 获得你的专属人格类型
4. 查看详细分析和建议
5. 分享给朋友

## 🛠️ 如果遇到问题

1. **端口被占用**：关闭占用3000或8000端口的程序
2. **依赖安装失败**：确保网络连接正常，Node.js版本 >= 18
3. **数据库错误**：删除 `backend/prisma/dev.db` 文件后重新运行

---

**准备好发现你的街舞人格了吗？** 🕺💃

点击 `quick-start.bat` 开始吧！