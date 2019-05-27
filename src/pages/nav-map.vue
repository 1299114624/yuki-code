<template>
    <div class="nav-map">
        <div class="item" v-for="(item,i) in renderData" :key="i">
            <div class="head" :style="{background:'url(' + item.headImg + ') no-repeat 0 50%'}">
                {{item.headText}}
            </div>
            <div class="nav-map-content">
                <div class="con" v-for="(el,j) in linksFilter(item.links)" 
                :key="j" :style="{width:100/linksFilter(item.links).length + '%'}">
                    <div v-for="(e,k) in el" :key="k" @click="toPath(e.path)">{{e.title.split(" ")[1]}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const base_src = require("../assets/images/jibenxinxi.png")
const nav_src = require("../assets/images/jibenxinxi.png")
const iconArr = [
    {
        src: base_src,
        name: "基础控件"
    },
    {
        src: base_src,
        name: "容器"
    },
]
import navsData from '../components/nav.config.js'
import {mapState} from "vuex"
export default {
    data(){
        return{
            navsData,
            iconArr,
            renderData:[]
        }
    },
    computed:{
        ...mapState([
            "componentType"
        ])
    },
    watch:{
        componentType:{
            handler(){
                this.handlerData()
            }
        }
    },
    methods:{
        handlerData() {
            let curNavsData = this.navsData;
            let newRenderData1 = [];
            curNavsData = curNavsData.filter(item => {
                let tag = false;
                //过滤掉没有children及"开发指南",同时也根据version过滤
                let condition = item.children && item.children.length > 0 && item.name !== "开发指南";
                if(condition && this.componentType === "NC" && item.version === undefined) {
                    tag = true;
                } else if (condition && this.componentType === "FH" && item.version === "FH") {
                    tag = true;
                }
                return tag
            })
            curNavsData.forEach((el,i)=>{
                this.iconArr.forEach(e=>{
                    if(e.name === el.name){
                        newRenderData1.push({
                            headImg: e.src,
                            headText: el.name,
                            links: el.children
                        })
                    }
                })
            })
            this.renderData = newRenderData1;
        },
        toPath(path){
            let hasArr = location.hash.split("component");
            path = hasArr[0] + "component" + path;
            location.hash = path;
        },
        linksFilter(curLinks){
            //以4为单位切分数组,向上取整
            let sliceUnit = 4;
            let sliceLength = Math.ceil(curLinks.length / sliceUnit);
            let bacArr = [],start = 0, end = sliceUnit;
            for(let i = 0; i < sliceLength ; i++) {
                bacArr.push(curLinks.slice(start,end));
                start = start + sliceUnit;
                end = end + sliceUnit;
            }
            return bacArr
        }
    },
    created(){
        this.handlerData()
    }
}
</script>

<style lang="scss">
.nav-map{
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    padding-right: 0 !important;
    .head{
        height: 50px;
        line-height: 50px;
        padding-left: 60px;
        font-size: 24px;
        font-weight: 400;
        margin-bottom: 10px;
    }
    .item{
        width: 336px;
        height: 186px;
        box-sizing: border-box;
        padding-left: 30px;
    }
    .nav-map-content{
        font-size: 14px;
        display: flex;
        flex-wrap: wrap;
        .con div{
            margin: 10px 0;
            &:hover{
                color: #409eff;
                cursor: pointer;
            }
        }
    }
}
</style>

