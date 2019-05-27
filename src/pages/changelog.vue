<template>
    <div class="page-changelog">
        <div class="heading">
            <el-button class="fr">
                <a href="">Release 地址</a>
            </el-button>
            更新日志
        </div>
        <ul class="timeline" ref="timeline"></ul>
        <change-log ref="changeLog"/>
    </div>
</template>

<script>
import ChangeLog from './CHANGELOG.md'
export default {
    components:{
        ChangeLog
    },
    data(){
        return {
            count:3,
            release:""
        }
    },
    mounted(){

    }
}
</script>

<style>

</style>
