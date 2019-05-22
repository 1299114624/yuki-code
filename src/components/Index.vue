<template>
   <el-scrollbar class="page-component__scroll" ref="componentScrollBar">
       <searchColor :placeholderTitle='"搜索控件"' :title='"控件库"' :level="2"/>
       <div class="page-container page-component">
            <el-scrollbar class="page-component__nav">
                <side-nav :data="navsData" :base = "'/component'"/>
            </el-scrollbar>
            <div class="page-component__content">
                <router-view class="contents"></router-view>
            </div>
       </div>
   </el-scrollbar>
</template>

<script>
import navsData from './nav.config.js'
import searchColor from './search-color'
export default {
    components:{
        searchColor
    },
    data() {
        return {
            navsData
        }
    }
}
</script>

<style lang="scss">

.page-component__scroll {
    height: calc(100% - 130px);
    overflow-y: auto;
    padding-top: 130px;
    background-color: #fff;
    .el-scroll__wrap {
        overflow: auto;
        height: 100%;
    }
    .el-scroll__view {
        height: 100%;
    }
}
.page-component {
    box-sizing: border-box;
    height: 100%;
    .page-component__nav {
        width: 280px;
        position: fixed;
        background:  linear-gradient(
            90deg,
            rgba(243,245,246,1) 0%,
            rgba(243,245,246,1) 0%,
            rgba(243,245,246,1) 93%,
            rgba(228,232,233,1) 100%,
            rgba(228,232,233,1) 100%
        );
        top: 0;
        bottom: 0;
        transition: padding-top 0.3s;
        .el-scroll__wrap {
            height: 100%;
        }
    }
    .side-nav{
        height: 100%;
        padding: 140px 28px 50px 35px
    }
}
.page-component__content{
    padding-left: 295px;
    padding-bottom: 100px;
    height: 100%;
    box-sizing: boder-box
}
</style>

