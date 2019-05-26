## 安装

组件库是基于 Element-ui 开发的. 需要同时引入 Element-ui , 建议 Element-ui 通过模块方式引入, 以实现[按需引入](#component/webpack).

### 开发环境

本项目是基于[Nodejs](https://nodejs.org/zh-cn/) 构建, 需要预先安装`Nodejs`.

推荐安装 `Nodejs v6.11.4 LTS` 长期支持版本.

Nodejs 环境配置请查看这篇文章, [Node.js安装及环境配置](http://www.jianshu.com/p/03a76b2e7e00).

### 通过脚手架创建项目

这里只是简单介绍 vue 脚手架基本命令, 具体使用方法可查看[文档](https://github.com/vuejs/vue-cli).

```shell
# 安装脚手架
npm install -global vue-cli

# 打开对应目录初始化项目
cd ./vue-demo
npm run dev
```

**创建完成后将项目根目录下 `package.json` 中的 `dependencies` 下的 `vue` 删除, 我们通过 CDN 引入, 不要再通过 node_modules 引入, 并参考下一节[Webpack 配置](#/component/webpack)修改**

### 引入组件

在 index.html 中通过下面示例引入组件库
```html
<html>
<head>
    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/1299114624/yuki@v1.1/dist/static/css/yuki.css">
</head>
<body>
    <!-- 注意引用顺序 script一但打全就会莫名报错,这里先故意写错-->
    <scrip src="https://cdn.bootcss.com/vue/2.6.10/vue.js"></script>
    <scrip src="https://unpkg.com/element-ui/lib/index.js"></script>
    <scrip src="https://cdn.jsdelivr.net/gh/1299114624/yuki@v1.1/dist/static/js/yuki.js"></script>
</body>
</html>
```

```javascript
// main.js
// vue 需要通过 cdn 引入, 在 main.js, router.js, store.js 中注释掉下面语句
// import Vue from 'vue'
// 改为
let Vue = window.Vue

// init
new Vue({
    ...
})
```