<script>
export default{
    data() {
        return {
            data: {
                spareList:[
                {
                id: 1,
                label: '空间维度',
                }, 
                {
                id: 2,
                label: '住户数',
                }, 
                {
                id: 3,
                label: '大户',
                },
                {
                id: 4,
                label: '中小企业',
                },
                {
                id: 5,
                label: '住户密度',
                },
                ],
                checkedList:[
                {
                id: 6,
                label: '消费维度',
                }, 
                {
                id: 7,
                label: '终端无线流量',
                }, 
                {
                id: 8,
                label: '无限上网时长',
                },
                ]
            },
            dataTest: {
                spareList:[
                {
                    id: 1,
                    label: '空间维度',
                    children: [
                        {
                        id: 9,
                        label: '空间 2-1',
                        }, 
                        {
                        id: 10,
                        label: '空间 2-2',
                        }, 
                        {
                        id: 11,
                        label: '空间 2-3',
                        }, 
                    ]
                    }, 
                    {
                    id: 2,
                    label: '住户数',
                    children: [
                        {
                        id: 12,
                        label: '住户 2-1',
                        }
                    ]
                    }, 
                    {
                    id: 3,
                    label: '大户',
                    },
                    {
                    id: 4,
                    label: '中小企业',
                    },
                    {
                    id: 5,
                    label: '住户密度',
                }
                ],
                checkedList:[
                ]
            }
        }
    },
    methods:{
        change(type,data) {
            //相当触发了getter
            data = JSON.parse(JSON.stringify(data))
            console.log(222,data.id,data)
            let newData = []
            if(type === 'checked') {
                this.data.checkedList.push(...data);
                this.data.spareList.forEach(res=>{
                    if(this.isInclude(res,data)){
                        newData.push(res)
                    }
                })
                this.data.spareList = [...newData]
            } else{
                this.data.spareList.push(...data);
                this.data.checkedList.forEach(res=>{
                    if(this.isInclude(res,data)){
                        newData.push(res)
                    }
                })
                this.data.checkedList = [...newData]
            }
        },
        isInclude(val,data) {
            let count = 0;
            data.forEach(res=>{
                if(val.id === res.id){
                    count++
                }
            })
            if(count>0){
                return false
            }
            return true
        },
        newObjFunc(dataObj,dataArg){
            let curObj = null;
            if(dataObj.id === dataArg.id){
                curObj = {
                    id: dataObj.id,
                    label: dataObj.label
                }
            } else if(dataObj.children) {
                dataObj.children.forEach(el=>{
                    if(dataArg.id === el.id){
                        curObj = {
                            id: dataObj.id,
                            label: dataObj.label,
                            children:[{
                                id: dataArg.id,
                                label: dataArg.label,
                            }]
                        }
                    }
                })
            }
            return curObj
        },
        remove(targetArr,compareObj){
            targetArr.forEach((el,index)=>{
                if(el.id == compareObj.id && !compareObj.children){
                    targetArr.splice(index,1)
                } else if(el.id == compareObj.id && compareObj.children && el.children) {
                    el.children.forEach((e,i)=>{
                        compareObj.children.forEach((a,b)=>{
                            if(e.id === a.id){
                                el.children.splice(i,1)
                            }
                        })
                    })
                    if(el.children.length === 0){
                        //如果子集为空,也要删掉父级
                        targetArr.splice(index,1)
                    }
                }
            })
        },
        add(targetArr,compareObj){
            //往目标数据新增数据
            let checkLevel1 = false;
            let checkIndex = 0;
            targetArr.forEach((e,i)=>{
                if(e.id === compareObj.id){
                    let checkLevel1 = true;
                    let checkIndex = i;
                }
            })
            if(checkLevel1){
                if(compareObj.children){
                    let cLevel1 = false;
                    let cIndex = 0;
                    targetArr[checkIndex].children.forEach((e,i)=>{
                        if(e.id === compareObj.children[0].id){
                            cLevel1 = true;
                            cIndex = i
                        }
                    })
                    if(!cLevel1){
                        targetArr[checkIndex].children.push(compareObj.children[0])
                    }
                }
            }else{
                targetArr.push(compareObj)
            }
        },
        change1(type,data){
            console.log('2222checkData',data)
            let handleData = (curData,targetData,checkData) => {
                checkData.forEach(element=>{
                    curData.forEach(el=>{
                        let compareObj = this.newObjFunc(el,element)
                        if(compareObj){
                            console.log('1111',compareObj)
                            //删除原有数组中的compareObj,将选中的数据添加到目标数组
                            this.remove(curData,compareObj);
                            this.add(targetData,compareObj);
                        }
                    })
                })
            }
            //在左边增加,右边不变
            if(type === "checked"){
                handleData(this.dataTest.spareList,this.dataTest.checkedList,data)
            } else {
                handleData(this.dataTest.checkedList,this.dataTest.spareList,data)
            }
        }
    }
}
</script>

<style>
.demo-block{
    max-height:400px;
}
.demo-block.demo-transfer .source {
    width:78%;
}
</style>

## Transfer 双向选择器

### 基础用法

:::demo

```html
<yuki-transfer :data="data" @change="change"/>
<script>
export default {
    data() {
        return {
            data: {
                spareList:[
                {
                id: 1,
                label: '空间维度',
                }, 
                {
                id: 2,
                label: '住户数',
                }, 
                {
                id: 3,
                label: '大户',
                },
                {
                id: 4,
                label: '中小企业',
                },
                {
                id: 5,
                label: '住户密度',
                },
                ],
                checkedList:[
                {
                id: 6,
                label: '消费维度',
                }, 
                {
                id: 7,
                label: '终端无线流量',
                }, 
                {
                id: 8,
                label: '无限上网时长',
                },
                ]
            }
        }
    },
    methods:{
        change(type,data) {
            //相当触发了getter
            data = JSON.parse(JSON.stringify(data))
            console.log(222,data.id,data)
            let newData = []
            if(type === 'checked') {
                this.data.checkedList.push(...data);
                this.data.spareList.forEach(res=>{
                    if(this.isInclude(res,data)){
                        newData.push(res)
                    }
                })
                this.data.spareList = [...newData]
            } else{
                this.data.spareList.push(...data);
                this.data.checkedList.forEach(res=>{
                    if(this.isInclude(res,data)){
                        newData.push(res)
                    }
                })
                this.data.checkedList = [...newData]
            }
        },
        isInclude(val,data) {
            let count = 0;
            data.forEach(res=>{
                if(val.id === res.id){
                    count++
                }
            })
            if(count>0){
                return false
            }
            return true
        },
    }
}
</script>
```

:::

<!-- ### 二级

:::demo

```html
<yuki-transfer :data="dataTest" @change="change1">
</yuki-transfer>

<script>
export default {
    data() {
        return {
            dataTest: {
                spareList:[
                {
                    id: 1,
                    label: '空间维度',
                    children: [
                        {
                        id: 9,
                        label: '空间 2-1',
                        }, 
                        {
                        id: 10,
                        label: '空间 2-2',
                        }, 
                        {
                        id: 11,
                        label: '空间 2-3',
                        }, 
                    ]
                    }, 
                    {
                    id: 2,
                    label: '住户数',
                    children: [
                        {
                        id: 12,
                        label: '住户 2-1',
                        }
                    ]
                    }, 
                    {
                    id: 3,
                    label: '大户',
                    },
                    {
                    id: 4,
                    label: '中小企业',
                    },
                    {
                    id: 5,
                    label: '住户密度',
                }
                ],
                checkedList:[
                ]
            }
        }
    },
    methods: {
        newObjFunc(dataObj,dataArg){
            let curObj = null;
            if(dataObj.id === dataArg.id){
                curObj = {
                    id: dataObj.id,
                    label: dataObj.label
                }
            } else if(dataObj.children) {
                dataObj.children.forEach(el=>{
                    if(dataArg.id === el.id){
                        curObj = {
                            id: dataObj.id,
                            label: dataObj.label,
                            children:[{
                                id: dataArg.id,
                                label: dataArg.label,
                            }]
                        }
                    }
                })
            }
            return curObj
        },
        remove(targetArr,compareObj){
            targetArr.forEach((el,index)=>{
                if(el.id == compareObj.id && !compareObj.children){
                    targetArr.splice(index,1)
                } else if(el.id == compareObj.id && compareObj.children && el.children) {
                    el.children.forEach((e,i)=>{
                        compareObj.children.forEach((a,b)=>{
                            if(e.id === a.id){
                                el.children.splice(i,1)
                            }
                        })
                    })
                    if(el.children.length === 0){
                        //如果子集为空,也要删掉父级
                        targetArr.splice(index,1)
                    }
                }
            })
        },
        add(targetArr,compareObj){
            //往目标数据新增数据
            let checkLevel1 = false;
            let checkIndex = 0;
            targetArr.forEach((e,i)=>{
                if(e.id === compareObj.id){
                    let checkLevel1 = true;
                    let checkIndex = i;
                }
            })
            if(checkLevel1){
                if(compareObj.children){
                    let cLevel1 = false;
                    let cIndex = 0;
                    targetArr[checkIndex].children.forEach((e,i)=>{
                        if(e.id === compareObj.children[0].id){
                            cLevel1 = true;
                            cIndex = i
                        }
                    })
                    if(!cLevel1){
                        targetArr[checkIndex].children.push(compareObj.children[0])
                    }
                }
            }else{
                targetArr.push(compareObj)
            }
        },
        change1(type,data){
            console.log('2222checkData',data)
            let handleData = (curData,targetData,checkData) => {
                checkData.forEach(element=>{
                    curData.forEach(el=>{
                        let compareObj = this.newObjFunc(el,element)
                        if(compareObj){
                            console.log('1111',compareObj)
                            //删除原有数组中的compareObj,将选中的数据添加到目标数组
                            this.remove(curData,compareObj);
                            this.add(targetData,compareObj);
                        }
                    })
                })
            }
            //在左边增加,右边不变
            if(type === "checked"){
                handleData(this.dataTest.spareList,this.dataTest.checkedList,data)
            } else {
                handleData(this.dataTest.checkedList,this.dataTest.spareList,data)
            }
        }
    }
}
</script>

``` -->
:::

### Attributes
|参数   |说明   |类型   |可选值     |默认值 |
|-------|-------|-------|----------|-------|
|data   |双向选择器数据   |Object   |-   |- |

### Data
|参数   |说明   |类型   |可选值     |默认值 |
|-------|-------|-------|----------|-------|
|spareList   |左侧备选项数据   |Array|-   |- |
|checkedList   |右侧已选项数据   |Array|-   |- |

### Events
|参数   |说明   |回调参数
|-------|-------|-------|
|change|按钮点击回调|type 和 data. type: 按钮点击事件类型, type 为 checked 表示从备选项移至已选项, type 为 remove 表示从已选项移至备选项. data: 选中的数据|