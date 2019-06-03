<template>
    <div class="yuki-transfer">
        <transfer-tree ref="leftTree" :title="leftTitle" :data="data.spareList" @check="getStatus"></transfer-tree>
        <div class="action-container">
            <el-button v-for="list in actionList" 
            :key="list.type" 
            class="yuki-button"
            :disabled="isDisabled(list.type)"
            @click.native="transferDom(list)"
            ref="list.type">
                <i :class="list.icon"></i>
            </el-button>
        </div>
        <transfer-tree ref="rightTree" :title="rightTitle" :data="data.checkedList" @check="getStatus"></transfer-tree>
    </div>
</template>

<script>
import TransferTree from './transfer-tree'
export default {
    name:'YukiTransfer',
    components:{
        TransferTree
    },
    props:{
        data:{
            type:Object
        }
    },
    data(){
        return{
            rightTitle:'选择',
            leftTitle:'可用的',
            isMounted:false,
            saveActive:{}
        }
    },
    methods:{
        getStatus(){
            this.isMounted = true;
        },
        isDisabled(type){
            // console.log(3333,this.isMounted)
            //isMounted在组件的data属性中,每次更新会触发当前组件update和render(),而disabled属性绑定上了isDisabled这个函数,所以就自动执行了
            if(!this.isMounted) {
                return true
            }
            let tree = type === 'checked' ? 'leftTree' : 'rightTree';
            //getCheckedNodes这个方法每次执行会调用组件的updated,因此也会调用isDisabled这个方法而重置disabled的状态
            //如果组件不写this.$refs[tree].$refs.tree.getCheckedNodes()这个方法那么tree的点击事件是不会触发本组件的update
            //结论:当前组件内包含其它组件的data属性里面的某个值,该值变化时会触发当前组件的updated周期,即使在console.log里包含也会触发
            // console.log(this.$refs[tree].isChecked)
            return this.$refs[tree].$refs.tree.getCheckedNodes().length === 0
        },
        transferDom(item){
            let transferTree = item.type === 'checked' ? 'leftTree' : 'rightTree';
            let activeTree = item.type === 'checked' ? 'rightTree' : 'leftTree';
            const nodes = this.$refs[transferTree].$refs.tree.getCheckedNodes(true);
            this.saveActive = {
                type:item.type,
                activeList:this.$refs[activeTree].$refs.tree.getCheckedNodes()
            }
            this.$refs[transferTree].$refs.tree.setCheckedNodes([]);
            this.$emit('change',item.type,nodes)
            console.log(nodes)
        }
    },
    beforeCreate(){
        this.actionList = [{
            type:'checked',
            icon:'el-icon-d-arrow-right'
        },{
            type:'remove',
            icon:'el-icon-d-arrow-left'
        }]
    },
    // updated(){
    //     console.log('updated')
    // }
    watch:{
        'data.spareList':function(val){
            
        }
    }
}
</script>

<style>

</style>
