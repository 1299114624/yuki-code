<template>
    <div class="side-nav">
        <div class="versions">
            <span class="title">控件类型</span>
            <el-radio-group v-model="radio" @change="radioChange">
                <el-radio label='NC'>NC版</el-radio>
                <el-radio label='FH'>峰会版</el-radio>
            </el-radio-group>
        </div>
        <div class="theme" v-show="radio==='NC'">
            <div class="title">控件风格</div>
            <div class="dark">深色</div>
            <div class="light">浅色</div>
        </div>
        <ul>
            <li class="nav-item">
                <el-collapse accordion v-model="activeName">
                    <el-collapse-item
                    v-for="(item,i) in navData"
                    :key="item.name"
                    :name='item.name'
                    :title="item.name"
                    :class="{itemLink:!item.children,sBlue:classItem[i]}"
                    @click.native="toPath(item.path,i)"
                    >
                        <ul class="pure-menu-list sub-nav" v-if="item.children">
                            <li class="nav-item"
                            v-for="(navItem,j) in item.children"
                            :key="navItem.name"
                            >
                                <router-link 
                                v-text="navItem.title || navItem.name" 
                                :to='base + navItem.path'
                                @click.native="routerLinkClick(i)"
                                active-class="active"
                                ></router-link>
                            </li>
                        </ul>
                    </el-collapse-item>
                </el-collapse>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    props:{
        data:Array,
        base:{
            type:String,
            default:""
        }
    },
    data(){
        return{
            radio:'NC',
            activeName:'',
            classItem:{}
        }
    },
    watch:{
        radio(val){
            this.updateComponentType(val)
        }
    },
    computed:{
        navData(){
            let curdata = this.data.filter(item => {
                let tag = false;
                if(this.radio === 'NC' && item.version === undefined) {
                    tag = true
                } else if(this.radio === 'FH' && item.version === 'FH') {
                    tag = true
                }
                return tag
            })
            return curdata
        }
    },
    methods:{
        ...mapMutations({
            updateComponentType:"UPDATE_COMPONENT_TYPE"
        }),
        radioChange(val){
            this.$router.push({path:'/component'})
        },
        toPath(path,index){
            if(path){
                this.classItem = {};
                this.$set(this.classItem, index, true);
                let hasArr = location.hash.split("component");
                path = hasArr[0] + "component" + path;
                location.hash = path;
            }
        },
        routerLinkClick(index){
            this.classItem = {};
            this.$set(this.classItem, index, true);
        }
    }
}
</script>

<style lang="scss">
.side-nav {
    width: 280px;
    box-sizing: border-box;
    color: #666;
    padding-right: 20px !important;
    .versions{
        font-size: 12px;
        margin-bottom: 20px;
        .title{
            margin-right: 16px;
        }
        .el-radio__label{
            font-size: 12px
        }
    }
    ul{
        overflow: hidden;
        padding: 0;
        margin: 0;
    }
    .theme{
        display: flex;
        padding: 0 0 10px 0;
        font-size: 12px;
        justify-content: flex-start;
        div{
            padding-left: 32px;
        }
        >.title{
            padding-left: 0px;
        }
        .isActive{
            color: #409eff
        }
        >div + div{
            position: relative;
            cursor: pointer;
            &:hover{
                color: #409eff
            }
            &::before{
                position: absolute;
                content: '';
                width: 10px;
                height: 10px;
                background-color: #666;
                border: 1px solid #666;
                top: 2px;
                left: 16px;
            }
        }
        .light::before{
            background: #fff;
            border: 1px solid #ccc
        }
    }
    .nav-item{
        .el-collapse-item__header {
            background-color: transparent;
        }
        .el-collapse-item__wrap {
            background-color: transparent;
        }
        .el-collapse-item.is-active{
            div[role='tab']{
                border-bottom: 1px solid rgba(204,204,204,1)
            }
            .el-collapse-item__content{
                padding-bottom: 0
            }
        }
        a{
            text-decoration: none;
            display: block;
            height: 48px;
            line-height: 48px;
            color: #666;
            font-size: 14px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-weight: normal;
            text-indent: 20px;
            border-bottom: 1px solid rgba(204,204,204,1);
            &:hover,
            &.active{
                color: #409eff;
            }
        }
        .itemLink{
            .el-collapse-item__arrow{
                display: none;
            }
            div[role="tabpanel"]{
                display: none;
            }
            .el-collapse-item__header {
                background-color: rgba(243,245,246,1) !important;
            }
        }
        .sBlue .el-collapse-item__header{
            color: #409eff !important;
        }
    }
}
</style>
