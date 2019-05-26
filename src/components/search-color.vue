<template>
    <div class="search-md">
        <div class="head-icon" @click="click">{{title}}</div>
        <el-input id="searchInput" :placeholder="placeholderTitle" clearable v-model="searchVal">
            <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <put-color :val='searchVal' :data='data' :level='level'></put-color>
    </div>
</template>

<script>
// dropMenu菜单
import putColor from './put-color'
export default {
    components:{
        putColor
    },
    props:{
        data:{
            type:Array
        },
        placeholderTitle: String,
        title: String,
        level:{
            type:Number,
            default:3
        }
    },
    data() {
        return {
            searchVal: ""
        }
    },
    methods:{
        handle(val) {
            this.$emit('change',val);
            this.searchVal = ""
        },
        click(){
            this.$emit('clickIcon');
        }
    }
}
</script>

<style lang="scss">
.search-md {
    background-color: rgba(36,42,72,1);
    box-sizing: border-box;
    width: 100%;
    height: 130px;
    $inputWidth:260px;
    padding: 30px calc(50% - #{$inputWidth}) 60px;
    position: fixed;
    top: 0;
    z-index: 1000;
    &::after{
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 30px;
        margin-left: 280px;
        background-color: #fff;
    }
    .el-input .el-input__inner{
        height: 40px;
        background-color: rgba(24,31,62,0.8);
        border-color: #4b5375;
        font-size: 14px;
        color: #fff;
        padding: 0 10px;
        &:focus{
            border-color: #60b0ff;
            color: #d6d9ed
        }
    }
    .head-icon{
        position: absolute;
        left: 0;
        top: 0;
        padding-left: 95px;
        cursor: pointer;
        color: #3dcca6;
        height: 100%;
        font-weight: bold;
        font-size: 22px;
        display: flex;
        align-items: center;
        background: url('../assets/logo.png') no-repeat 0 50%
    }
}
</style>

