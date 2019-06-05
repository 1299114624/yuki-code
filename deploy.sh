#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build


git add .
git commit -m 'deploy'

# 如果你想要部署到 https://USERNAME.github.io
git push 