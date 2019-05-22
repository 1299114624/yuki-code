<template>
    <div class="side-nav">
        <div class="versions">
            <span class="title">控件类型</span>
            <el-radio-group v-model="radio">
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
                    v-for="item in navData"
                    :key="item.name"
                    :name='item.name'
                    :title="item.name"
                    >
                        <ul class="pure-menu-list sub-nav" v-if="item.children">
                            <li class="nav-item"
                            v-for="navItem in item.children"
                            :key="navItem.name"
                            >
                                <router-link v-text="navItem.title || navItem.name" :to='base + navItem.path'></router-link>
                            </li>
                        </ul>
                    </el-collapse-item>
                </el-collapse>
            </li>
        </ul>
    </div>
</template>

<script>
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
            activeName:''
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
            &:active{
                color: #409eff;
            }
        }
    }
}
</style>
