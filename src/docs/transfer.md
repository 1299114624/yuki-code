# test
:::demo

```html
<yuki-transfer :data="data"/>
<script>
export default {
    data() {
        return {
            data: {
                spareList:
                [{
                id: 1,
                label: '备选 1',
                }, {
                id: 2,
                label: '备选 2',
                children:[
                    {
                        id: 7,
                        label: '备选 7',
                        
                    },
                    {
                        id: 8,
                        label: '备选 8',
                    }
                ]
                }, {
                id: 3,
                label: '备选 3',
                }]
                ,
                checkedList:
                [{
                id: 4,
                label: '备选 4',
                }, {
                id: 5,
                label: '备选 5',
                }, {
                id: 6,
                label: '备选 6',
                }]
                ,
                type:''
            }
        }
    }
}
</script>
```