<template>
    <div>
        <h1>
            本应搞个使用说明,但先在此简单说下怎么用
        </h1>
        <div>
            vue和yuki的js均通过cdn引入,index.html里引入js
        </div>
        <div>https://cdn.bootcss.com/vue/2.6.10/vue.js</div>
        <div>https://cdn.jsdelivr.net/gh/1299114624/yuki@v1.1/dist/static/js/yuki.js</div>
        <div>index.html里引入css</div>
        <div>https://cdn.jsdelivr.net/gh/1299114624/yuki@v1.1/dist/static/css/yuki.css</div>
        <div>
            在vue2.0项目中build目录下的webpack.base.conf.js里加上:externals: {vue: 'window.Vue'},再运行项目即可
        </div>
        <div>目前只做了一个button按钮,使用说明详见左侧菜单栏</div>
        <div>目前字体图标打包路径有点问题
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
