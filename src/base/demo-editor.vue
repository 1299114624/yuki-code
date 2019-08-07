<template>
    <div class="editor" v-show="isShow">
        <el-button type="text" class="editor-close" @click="isShow = false">返回</el-button>
        <el-button size="mini" type="primary" class="editor-run" @click="run">运行</el-button>
        <div class="editor-content">
            <div class="editor-code editor-comp">
                <el-tabs type="card" v-model="activeName" style="height: 100%;">
                    <el-tab-pane label="HTML" name="HTML" style="height: 100%;">
                        <div id="editor1" style="height: 100%;"></div>
                    </el-tab-pane>
                    <el-tab-pane label="JavaScript" name="JavaScript" style="height: 100%;">
                        <div id="editor2" style="height: 100%;"></div>
                    </el-tab-pane>
                </el-tabs>
            </div>
            <Com :config='config' class="editor-demo editor-comp"></Con>
        </div>
    </div>
</template>

<script>
import Com from './com'
export default {
    data() {
        return {
            config: null,
            isShow: false,
            editor1: null,
            editor2: null,
            activeName: 'HTML',
        }
    },
    components: {
        Com
    },
    created() {
        this.start()
    },
    watch: {
        isShow: function(val) {
            if (val === true) {
                this.start()
            }
        }
    },
    methods: {
        start() {
            this.$bus.$on('showEditor', ({script, html, style}) => {
                html = html.trim()
                html && ((html = html.replace(/^\<html\>/, '<div>\n')), (html = html.replace(/\<\/html\>$/, '</div>')))
                html && ((html = html.replace(/\<body\>/, '')), (html = html.replace(/\<\/body\>/, '')))
                html && ((html = html.replace(/\<head\>/, '')), (html = html.replace(/\<\/head\>/, '')))
                script && (script = script.replace(/export default/, ''))
                this.editor1 = window.ace.edit('editor1')
                this.editor1.session.setMode('ace/mode/html')
                this.editor1.setValue(html)
                this.editor1.setOptions({
                    enableBasicAutocompletion: true,
                    enableSnippets: true,
                    enableLiveAutocompletion: false
                })
                this.editor2 = window.ace.edit('editor2')
                this.editor2.session.setMode('ace/mode/javascript')
                let config = ''
                if (script) {
                    config = script
                } else {
                    config = ''
                }
                this.editor2.setValue(config)
                this.editor2.setOptions({
                    enableBasicAutocompletion: true,
                    enableSnippets: true,
                    enableLiveAutocompletion: false
                })
                this.$nextTick(() => {
                    this.run(html, script)
                })
            })
        },
        run(html, script) {
            let c = this.editor2.getValue() || script
            if (c) {
                try {
                    c = eval('(+c+)')
                    this.isShow = truec.template = this.editor1.getValue() || html
                    this.config = {
                        ...c
                    }
                }
                catch (error) {
                    alert('代码错误:' + error.message)
                }
                return
            }
            this.isShow = true
            this.config = {
                template: this.editor1.getValue() || html
            }
        }
    }
}
</script>

<style lang="scss">
.editor {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 2000;
    .el-tabs__content {
        height: calc(100% - 41px) !important;
    }
    .el-tabs__header {
        margin: 0;
    }
    .editor-content {
        height: 100%;
        box-sizing: border-box;
        border-top: 50px solid transparent;
        border-bottom: 30px solid transparent;
        background: #fff;
        .editor-comp {
            height: 100%;
        }
        .editor-code {
            width: 45%;
            float: left;
            box-shadow: 1px 1px 3px #d6e2ef;
            #editor1,
            #editor2 {
                height: calc(100% - 21px);
            }
        }
    }
    .editor-demo {
        margin-left: 46%;
        background-color: #1f2025;
        position: relative;
        overflow: hidden;
        overflow-y: auto;
        box-shadow: 1px 1px 3px #1c1e25;
    }
    .editor-close {
        position: absolute;
        left: 20px;
        top: 20px;
        display: inline-block;
        font-size: 16px;
        color: #409eff;
        cursor: pointer;
    }
    .editor-run {
        position: absolute;
        left: 45%;
        top: 20px;
        display: inline-block;
    }
}
</style>

