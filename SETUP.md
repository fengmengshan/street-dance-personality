# 🎭 街舞人格测评系统 - 快速启动指南

## 🚀 一键启动（推荐）

### Windows用户
双击运行 `start.bat` 文件，脚本会自动：
1. 安装所有依赖
2. 初始化数据库
3. 启动开发服务器

### Mac/Linux用户
在终端中运行：
```bash
./start.sh
```

## 📋 手动启动步骤

如果自动脚本遇到问题，可以按以下步骤手动启动：

### 1. 安装依赖
```bash
# 安装根目录依赖
npm install

# 安装前端依赖
cd frontend
npm install

# 安装后端依赖
cd ../backend
npm install
cd ..
```

### 2. 初始化数据库
```bash
cd backend
npm run db:generate
npm run db:push
npm run db:seed
cd ..
```

### 3. 启动服务
```bash
# 同时启动前后端
npm run dev

# 或者分别启动
npm run dev:frontend  # 前端: http://localhost:3000
npm run dev:backend   # 后端: http://localhost:8000
```

## 🌐 访问地址

启动成功后，在浏览器中访问：
- **前端网站**: http://localhost:3000
- **后端API**: http://localhost:8000

## 🎯 使用流程

1. 打开 http://localhost:3000
2. 点击"开始测评"
3. 回答62道题目
4. 查看你的街舞人格类型
5. 分享结果给朋友

## 🛠️ 故障排除

### 端口被占用
如果3000或8000端口被占用，可以：
- 关闭占用端口的程序
- 或修改配置文件中的端口号

### 数据库问题
如果遇到数据库错误：
```bash
cd backend
rm -f prisma/dev.db  # 删除数据库文件
npm run db:push      # 重新创建
npm run db:seed      # 重新填充数据
```

### 依赖安装失败
确保Node.js版本 >= 18，然后：
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

## 📞 需要帮助？

如果遇到问题，请检查：
1. Node.js版本是否 >= 18
2. 网络连接是否正常
3. 端口3000和8000是否被占用

---

**准备好探索你的街舞人格了吗？** 🕺💃