<template>
    <el-button class="yuki-button" @click="click">
        <slot/>
    </el-button>
</template>

<script>
export default {
    name:'YukiButton',
    methods:{
        click(){
            console.log('6666')
        }
    }
}
</script>

