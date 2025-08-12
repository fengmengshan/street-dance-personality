# 使用Node.js 18官方镜像
FROM node:18-alpine

# 设置工作目录
WORKDIR /app

# 复制package文件
COPY package*.json ./

# 安装依赖
RUN npm ci --only=production

# 复制源代码
COPY . .

# 生成Prisma客户端
RUN npx prisma generate

# 构建应用
RUN npm run build

# 暴露端口
EXPOSE 8000

# 设置环境变量
ENV NODE_ENV=production

# 启动应用
CMD ["npm", "start"]