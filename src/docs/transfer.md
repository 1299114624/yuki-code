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
                ],
                type:''
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
        }
    }
}
</script>

# test
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
                ],
                type:''
            }
        }
    },
    methods:{
        change(type,data) {
            if(data){
                console.log(222,data.id,data)
                let newData = []
                this.data.spareList.push(...data);
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
            }
        },
        include(val,data) {
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
        }
    }
}
</script>
```

<style>
.demo-block{
    max-height:400px;
}
.demo-block .source {
    width:78%;
}
.demo-block .meta .highlight{
    max-height:400px;
    overflow:auto;
}
</style>