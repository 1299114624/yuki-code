<template>
<div class="yuki-transfer-tree">
    <div class="transfer-header">
        <el-checkbox
        @change="change"
        class="yuki-checkbox"
        v-model="isChecked"
        :indeterminate="isIndeterminate">
        {{selectAll}}
        </el-checkbox>
        <span class="header-label">{{title}}</span>
    </div>
    <el-tree class="yuki-tree tree-body"
    :data="data"
    show-checkbox
    default-expand-all
    node-key="id"
    ref="tree"
    highlight-current
    :props="defaultProps"
    @check-change="handleCheckChange"
    >  
    </el-tree>
</div>
</template>

<script>
export default {
    name:'YukiTransferTree',
    data(){
        return{
            selectAll:'选择所有',
            defaultProps:{
                children:'children',
                label:'label'
            },
            isChecked:false,
            isIndeterminate:false
        }
    },
    props:{
        data:{
            type:Array
        },
        title:{
            type:String
        }
    },
    methods:{
        change(val){
            let data = val === false ? [] : this.data;
            this.$refs.tree.setCheckedNodes(data)
        },
        handleCheckChange(){
            const chkLength = this.$refs.tree.getCheckedNodes().length;
            const length = this.getDataLength(this.data);
            // console.log(this.$refs.tree.getCheckedNodes())
            if(chkLength === length) {
                this.isIndeterminate = false;
                this.isChecked = true;
            } else if(chkLength !== 0 && chkLength < length) {
                //控制tree选择了但没选完时,选择所有的checkbox样式
                this.isChecked = false;
                this.isIndeterminate = true;
            } else {
                this.isChecked = false;
                this.isIndeterminate = false;
            }
            this.$emit('check',true)
        },
        getDataLength(data){
            const queue = [...data];
            const result = [];
            //深度遍历的长度
            while(true){
                const next= queue.shift()
                if(!next){
                    break
                }
                result.push(next)
                if(Array.isArray(next.children)){
                    queue.push(...next.children)
                }
            }
            // console.log(this.data,result)
            return result.length
        },
        sayHi(){
            console.log('hi')
        }
    },
    watch:{
        'data':function(val){
            this.isIndeterminate = false;
            this.isChecked = false;
        }
    }
}
</script>

<style>

</style>
