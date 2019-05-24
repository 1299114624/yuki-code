<script>
export default {
    props:{
        data:{
            type:Array
        },
        val:String,
        level:Number
    },
    data(){
        return{
            useSearchVal:"",
            resBack:[]
        }
    },
    computed:{
        searchVal1(){
            return this.val.trim();
        }
    },
    watch:{
        searchVal1(val){
            this.useSearchVal = val;
        }
    },
    mounted(){
        // console.log(this.data)
        let self = this;
        document.onclick= function(e){
            let check = e.target.parentNode && e.target.parentNode.parentNode;
            if(e.target.id != 'searchInput' && check &&check.id != 'searchDropMenu') {
                self.$parent.searchVal = ""
            }
        }
    },
    methods:{
        clickFun(e){
            let parentNode = e.currentTarget.parentNode;
            let eCount = parentNode.childNodes;
            // console.log('childNode',eCount)
            let index = 0;
            for(var i=0 ; i < eCount.length ; i++) {
                if(e.currentTarget == eCount[i]) {
                    index = i;
                    break
                }
            }
            this.$parent.handle(this.resBack[index])
        },
        splitArr(val,matchVal,fullVal,parentName){
            let splitTag = "~(^_^)~";
            splitTag += splitTag;
            //originMatchval : "Button 按钮"
            let originMatchval = matchVal;
            //caFullVal  :   "~(^_^)~~(^_^)~b~(^_^)~~(^_^)~utton 按钮"
            let caFullVal = matchVal.replace(new RegExp(val,"gi"),splitTag + val + splitTag);
            let caNameArr = caFullVal.split(splitTag);
            // 去掉split后的前后空格
            //caNameArr  :  ['b','utton 按钮']
            if(caNameArr.length > 0 && caNameArr[0] === "") {
                caNameArr.shift()
            }
            if(caNameArr.length > 0 && caNameArr[caNameArr.length - 1] === "") {
                caNameArr.pop()
            }
            //如果输入的为小写字母,会把匹配的大写字符替换掉,所以要把原来大写字母还原回来
            let newCaNameArr = [];
            //newCaNameArr  :  ['B','utton 按钮']
            caNameArr.map((el,i,arr) => {
                newCaNameArr.push(
                    originMatchval.substring(
                        // 两次循环分别得到 0 1 和 1 9  
                        arr.slice(0,i).join("").length , arr.slice(0,i + 1).join("").length
                    )
                )
                // console.log(arr.slice(0,i).join("").length,arr.slice(0,i + 1).join("").length)
            })
            if(fullVal.pathStr) {
                newCaNameArr.unshift(fullVal.pathStr)
            }
            return {
                path: fullVal.path,
                nameArr: newCaNameArr,
                // name:parentName
            }
        }
    },
    render(createElement,context){
        //以back数组内每个对象的nameArr数组依次拼接成字符串来渲染
        let self = this;
        let back = [];
        let searchVal = this.val.trim();
        //   输入的字符串,如  b
        let re = new RegExp(searchVal,"gi");
        this.data.map((item,i)=>{
            //第一层
            if(item.path){
                let matchVal = item.name;
                let parentName =item.name;
                let fullVal = {
                    pathStr:"",
                    path:[item.path]
                };
                let searchIndex = item.name.search(re);
                if(searchIndex !== -1 && searchVal) {
                    back.push(this.splitArr(searchVal,matchVal,fullVal,parentName))
                }
            } else {
                //第二层
                item.children.map(el => {
                    if(el.title){
                        //matchVal : Button 按钮
                        let matchVal = el.title;
                        //parentName : 基础控件
                        let parentName = item.name;
                        let fullVal = {
                            pathStr: `${item.name}>`,
                            //path  : /button
                            path:[el.path]
                        };
                        //re为输入的字符串,如  'b'
                        let searchIndex = matchVal.search(re);
                        if(searchIndex !== -1 && searchVal) {
                            back.push(this.splitArr(searchVal,matchVal,fullVal,parentName))
                        }
                    }
                })
            }
        })
        if(this.level !== 2){}
        if(back.length === 0) {
            back.push({
                // name:"无匹配数据",
                nameArr:["无匹配数据"]
            })
        }
        //提供点击时跳转的数据
        this.resBack = back;
        return createElement(
            "div",
            {
                'class':{
                    dropMenu:true,
                    checkShow:!this.useSearchVal
                },
                attrs:{
                    id:'searchDropMenu'
                },
            },
            [
                createElement('ul',back.map(item=>{
                    return createElement(
                        'li',
                        {
                            on:{
                                click:this.clickFun
                            }
                        },
                        item.nameArr.map(e=>{
                            return createElement(
                                'span',
                                {
                                    'class':{
                                        sColor:e.toLowerCase() === searchVal.toLowerCase()
                                    }
                                },e
                            )
                        })
                    )
                }))
            ]
        )
    }
}
</script>

<style lang="scss">
.dropMenu{
    max-height: 450px;
    overflow-y: auto;
    color: #fff;
    font-size: 12px;
    position: fixed;
    width: 520px;
    $inputWidth:260px;
    left: calc(50% - #{$inputWidth});
    top: 69px;
    box-sizing: border-box;
    background: #181e39;
    border: 1px solid #60b0ff;
    padding: 4px;
    z-index: 1000;
    &.checkShow{
        display: none;
    }
    .sColor{
        color: #ff4097;
        font-weight: bold;
    }
    ul{
        margin: 0;
        padding: 0;
        li{
            list-style-type: none;
            padding: 0 10px;
            height: 37px;
            line-height: 37px;
            cursor: pointer;
            transition: font-size 0.3s;
            &:hover{
                background-color: #272f56;
                font-size: 14px
            }
            &+li{
                border-top: 1px solid #151a33;
            }
        }
    }
}
</style>

