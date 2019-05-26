## Webpack 配置

默认情况下用 vue-cli 生成的项目不需要修改配置, 有特殊场景的情况下需要修改.

### 使用 jsp 模板

我们项目大多是使用 jsp 作为入口文件, 将脚手架生成的 index.html 改为 index.jsp 做如下修改

1. 创建一份 index.html 的副本, 然后将副本的扩展名改为 jsp.

2. 在 /build/webpack.prod.config.js 中的 HtmlWebpackPlugin 修改为如下配置.

    ```javascript
    new HtmlWebpackPlugin({
        filename: 'index.jsp',
        template: 'index.jsp',
        inject: true,
        minify: {
            removeComments: false,
            collapseWhitespace: false,
            removeAttributeQuotes: false
        },
        chunksSortMode: 'dependency',
    }),
    ```

3. 在 /build/webpack.base.config.js 中的 rules 里添加如下代码

    ```json
    module:{
        rules:[
            ...,
            {
                test: /\.jsp$/,
                loader: 'html-loader'
            }
        ]
    }
    ```

4. 安装 html-loader

    在项目运行如下代码:
    ```shell
    npm install html-loader --save-dev
    ```

5. 然后就可在 index.jsp 中写 jsp 语法

### 有三方件依赖 vue 模块

有些三方件在代码中写了 `import Vue from 'vue'` 的语句

由于我们是通过 CDN 将 vue 引入, 导致上面语句报错(找不到对应模块), 此时需要修改 `build/webpack.base.conf.js` 文件

```javascript
module.exports = {
    entry: {

    },
    // 增加这个配置
    externals: {
        'window.Vue'
    },
    // ------------
    module: {

    }
}
```

之后就可以通过 `import Vue from 'vue'` 引入全局命名空间下的 window.Vue

了解更多请查看 [webpack 官方文档](https://doc.webpack-china.org/configuration/externals/#externals)