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
        const changeLog = this.$refs.changeLog;
        const changeLogNodes = changeLog.$el.children;
        console.log(changeLogNodes)
        let a = changeLogNodes[1].querySelector('a');
        a && a.remove();
        let release = changeLogNodes[1].textContent.trim();
        this.release = release;
        let fragments = `<li><h3><a href="https://cdn.jsdelivr.net/gh/1299114624/yuki@v${release}/dist/static/js/yuki.js"
        target="_blank">${release}</a></h3>`;
        for(let len = changeLogNodes.length, i = 2 ; i < len ; i++) {
            let node = changeLogNodes[i];
            //移除每个H3中的a标签,以便获取H3的textContent
            a = changeLogNodes[i].querySelector('a');
            a && a.getAttribute('class') == 'header-anchor' && a.remove();
            if(node.tagName !== 'H3') {
                fragments += changeLogNodes[i].outerHTML;
            } else {
                release = changeLogNodes[i].textContent.trim();
                fragments += `</li><li><h3><a href="https://cdn.jsdelivr.net/gh/1299114624/yuki@v${release}/dist/static/js/yuki.js"
                target="_blank">${release}</a></h3>`;
            }
        }
        fragments = fragments.replace(/#(\d+)/g,'<a href="#" target="_blank">#$1</a>');
        // fragments = fragments.replace(/@(\w+)/g,'<a href="#" target="_blank">@$1</a>');
        this.$refs.timeline.innerHTML = `${fragments}</li>`;
        changeLog.$el.remove();
    }
}
</script>

<style lang="scss">
.page-changelog{
    padding-bottom: 100px;
    .fr{
        float: right;
        padding: 0;
        a{
            display: block;
            padding: 10px 15px;
            color: #333;
        }
        &:hover a {
            color: #409EFF;
        }
    }
    .heading{
        font-size: 24px;
        margin-bottom: 60px;
        color: #333;
    }
    .timeline{
        padding: 0;
        padding-bottom: 10px;
        position: relative;
        color: #5e6d82;
        >li{
            list-style: none;
            position: relative;
            padding-bottom: 15px;
            line-height: 1.8;
            border: 1px solid #ddd;
            border-radius: 4px;
            &:not(:last-child){
                margin-bottom: 50px;
            }
        }
        ul{
            padding: 30px 30px 15px;
        }
        li li{
            font-size: 16px;
            list-style: none;
            padding-left: 20px;
            padding-bottom: 5px;
            color: #333;
            word-break: break-all;
        }
        i{
            padding: 0 20px;
            display: inline-block;
        }
        p{
            margin: 0;
        }
        em{
            position: absolute;
            right: 30px;
            top: 23px;
            font-style: normal;
            font-size: 16px;
            color: #666;
        }
        h3{
            margin: 0;
            padding: 15px 30px;
            border-bottom: 1px solid #ddd;
            font-size: 20px;
            color: #333;
            font-weight: bold;
            a{
                opacity: 1;
                float: none;
                font-size: 20px;
                margin-left: 0;
                color: #333;
            }
        }
        h4{
            margin: 0;
            margin-bottom: -10px;
            font-size: 18px;
            padding-left: 54px;
            padding-top: 30px;
            font-weight: bold;
        }
    }
}
</style>

