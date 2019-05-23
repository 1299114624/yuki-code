<template>
   <el-scrollbar class="page-component__scroll" ref="componentScrollBar">
       <searchColor :placeholderTitle='"搜索控件"' :title='"控件库"' :level="2"/>
       <div class="page-container page-component">
            <el-scrollbar class="page-component__nav">
                <side-nav :data="navsData" :base = "'/component'"/>
                <article-menu
                :dataA='curSearchData'
                :dataB="searchData['zh_en_map']"
                v-if="curSearchData[0]"
                ></article-menu>
            </el-scrollbar>
            <div class="page-component__content">
                <router-view class="content"></router-view>
            </div>
            <transition name="back-to-fade">
                <div class="page-component-up"
                :class="{'hover':hover}"
                v-show="showBackToTop"
                @mouseenter="hover = true"
                @mouseleave="hover = false"
                @click="toTop"
                >
                    <i class="el-icon-caret-top"></i>
                </div>
            </transition>
       </div>
   </el-scrollbar>
</template>

<script>
import navsData from './nav.config.js'
import searchData from './nav.search.js'
import searchColor from './search-color'
import articleMenu from './article-menu'
import {mapState} from 'vuex'
export default {
    components:{
        searchColor,
        articleMenu
    },
    data() {
        return {
            navsData,
            searchData,
            curSearchData:[],
            showBackToTop:false,
            hover:false
        }
    },
    computed:{
        ...mapState(["componentType"])
    },
    mounted(){
        this.handleCurSearchData();
        this.scroll = document.getElementsByClassName('el-scrollbar__wrap')[0];
        this.scroll.addEventListener('scroll',()=>{
            this.showBackToTop = this.scroll.scrollTop>=0.5*document.body.clientHeight
        })
    },
    watch:{
        componentType(){
            this.handleCurSearchData()
        }
    },
    methods:{
        toTop(){
            this.scroll.scrollTop = 0
        },
        handleCurSearchData(){
            this.curSearchData = this.searchData['zh-CN'].filter(item=>{
                let tag = false;
                if(this.componentType === 'NC' && item.version === null){
                    tag = true;
                } else if(this.componentType === item.version){
                    tag = true;
                }
                return tag
            })
            console.log('1111111curSearchData',this.curSearchData)
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
    >.el-scrollbar__wrap{
        >.el-scrollbar__view{
            position: relative;
        }
    }
    .el-scrollbar__wrap {
        overflow-x: auto;
        overflow-y: auto;
        height: 100%;
    }
    .el-scrollbar__view {
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
    .page-component__content{
        padding-left: 295px;
        padding-bottom: 100px;
        height: 100%;
        box-sizing: border-box;
    }
    .content{
        padding-right: 300px;
        padding-bottom: 20px;
        >h1:first-child{
            margin-top: 0
        }
        >{
            h3{
                margin: 55px 0 20px;
            }
            table{
                border-collapse: collapse;
                width: 100%;
                background-color: #fff;
                font-size: 14px;
                margin-bottom: 45px;
                line-height: 1.5rem;
                strong{
                    font-weight: normal
                }
                td,
                th{
                    border-bottom: 1px solid #d8d8d8;
                    padding: 15px;
                    max-width: 250px
                }
                th{
                    text-align-last: left;
                    white-space: nowrap;
                    color:#666;
                    font-weight: normal;
                }
                td{
                    color: #333;
                }
                th:first-child,
                td:first-child{
                    padding-left: 10px;
                }
            }
            ul:not(.timeline){
                margin:10px 0;
                padding: 0 0 0 20px;
                font-size: 14px;
                color: #5e6d82;
                line-height: 2em;
            }
        }
    }
    .page-component-up{
        background-color: #fff;
        position: fixed;
        right: 100px;
        bottom: 150px;
        width: 40px;
        height: 40px;
        border-radius: 20px;
        cursor: pointer;
        box-shadow: 0 0 6px rgba(0,0,0,0.22);
        i{
            color: #4093ff;
            display: block;
            line-height: 40px;
            text-align: center;
            font-size: 18px;
        }
        &:hover{
            opacity: 1;
        }
    }
    .back-to-fade-enter-active,
    .back-to-fade-leave-active{
        transition: all 0.3s;
    }
    .back-to-fade-enter,
    .back-to-fade-leave-to{
        transform: translateY(-30px);
        opacity: 0;
    }
}
</style>

