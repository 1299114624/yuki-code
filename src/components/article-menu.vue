<template>
    <div class="article-menu" v-show="showTag" :style="{left:fixedLeft+'px'}">
        <div class="title">文章目录</div>
        <ul>
            <li v-for="(item,i) in curContent" :key="i"
            :class="{sBlue:classItem[i]}" @click="toPath(item,i)">
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    props:{
        //nav.search.js的zh-CN数组
        dataA:{
            type:Array
        },
        //zh_en_map对象
        dataB:{
            type:Object
        }
    },
    data(){
        return{
            curHash:"",
            fixedLeft:0,
            classItem:{},
            showTag:true,
            //锚点的中文数组
            curContent:[]
        }
    },
    methods:{
        getHash(){
            //拿到urlcomponent后面的值,如 /button
            let hasArr = location.hash.split('component')[1];
            if(/\#/.test(hasArr)){
                this.curHash = hasArr.split('#')[0]
            }else{
                this.curHash = hasArr
            }
        },
        toPath(item,index){
            this.classItem= [];
            //当前选中的锚点菜单高亮
            this.$set(this.classItem,index,true);
            let scroll = document.getElementsByClassName('el-scrollbar__wrap')[0];
            //当前选中锚点菜单对应的锚点offsetTop
            let toTop = document.getElementById(this.dataB[this.curHash][item]).offsetTop;
            scroll.scrollTop = toTop;
        },
        buildContentData(){
            let self = this;
            self.getHash();
            //zh-CN数组
            let getData = self.dataA;
            for(let i=0,l=getData.length;i<l;i++){
                if(getData[i].path){
                    if(getData[i].path === self.curHash){
                        self.curContent = getData[i].content;
                        break
                    }
                } else {
                    let curData = getData[i].children;
                    for(let i=0,l=curData.length;i<l;i++){
                        if(curData[i].path === self.curHash){
                            self.curContent = curData[i].content
                            break
                        }
                    }
                }
            }
            if(self.curHash == '/changelog' || self.curHash == '/nav-map'){
                self.showTag = false
            } else {
                self.showTag = true;
                self.initLeft()
            }
        },
        initLeft(){
            let domPageContainer = document.getElementsByClassName('page-container')[0];
            let domPageContent = document.getElementsByClassName('content')[0];
            let padd_left = window.getComputedStyle(domPageContent,null);
            let addLeft=0;
            if(window.innerWidth > 1400){
                addLeft = 30;
            } else {
                addLeft = 10;
            }
            this.fixedLeft =domPageContainer.offsetWidth + domPageContainer.offsetLeft - parseInt(padd_left.paddingRight) + addLeft;
        }
    },
    mounted(){
        this.$set(this.classItem,0,true);
        let self = this;
        self.buildContentData();
        window.addEventListener('hashchange',()=>{
            self.buildContentData()
        })
        let scroll = document.getElementsByClassName('el-scrollbar__wrap')[0];
        //滚动时给锚点菜单添加高亮
        scroll.addEventListener('scroll',()=>{
            //对吧所有锚点的offsetTop和curScrollTop,差值最小的标注高亮
            setTimeout(()=>{
                let curScrollTop = scroll.scrollTop;
                //存储所有元素的offsetTop
                let topArr =[];
                self.curContent.forEach(el=>{
                    let curEl = document.getElementById(this.dataB[this.curHash][el])
                    if(this.curHash !== '/nav-map' && curEl){
                        topArr.push(curEl.offsetTop)
                    }
                })
                //当大于两个元素时从第二个元素开始,比较curScrollTop和所有锚点的差值
                if(topArr.length > 1) {
                    let compareValArr = topArr.map((el,i)=>{
                        return {
                            val:Math.abs(curScrollTop-el),
                            index:i
                        }
                    })
                    //从小到大排序
                    compareValArr.sort(function(a,b){
                        return a.val - b.val
                    })
                    //取到差绝对值最小的锚点在数组里的位置
                    let minValIndex = compareValArr[0].index;
                    //取到最接近滚动位置的锚点的offsetTop
                    let minValElTop = topArr[minValIndex];
                    //过了差绝对值最小的锚点立刻让下一个锚点菜单高亮,保证在第一个和第二个锚点间滚动时始终让第二个锚点高亮
                    let lastIndex = minValIndex;
                    if(curScrollTop>minValElTop){
                        lastIndex = minValIndex + 1;
                    }
                    this.classItem = [];
                    this.$set(this.classItem,lastIndex,true)
                }
            },300)
        })
        window.addEventListener('resize',()=>{
            setTimeout(()=>{
                self.initLeft()
            },50)
        })
    },
    computed:{
        ...mapState([
            "routeChange"
        ])
    },
    watch:{
        routeChange(){
            this.buildContentData()
        }
    }
}
</script>

<style lang="scss">
.article-menu{
    position: fixed;
    top: 180px;
    color: #333;
    border-radius: 3px;
    font-size: 13px;
    background-color: transparent;
    z-index: 10;
    .sBlue{
        color: #3399ff;
    }
    .title{
        font-weight: bold;
        background-size: 14px 14px;
        padding-left: 20px;
    }
    ul{
        padding: 0;
        border-left: 1px solid #ebebeb;
        margin: 0;
        padding-left: 10px;
        margin-top: 10px;
        li{
            list-style-type: none;
            padding: 4px 0;
            font-size: 12px;
            &:first-child{
                padding-top: 0;
            }
            &:last-child{
                padding-bottom: 0;
            }
            &:hover{
                color: #3399ff;
                cursor: pointer;
            }
        }
    }
}
</style>

