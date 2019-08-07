<template>
    <div class="demo-block" :class="[blockClass]">
        <div class="source">
            <slot name="source"/>
            <div class="description" v-if="$slots.default">
                <slot/>
            </div>
        </div>
        <div class="meta" ref="meta">
            <slot name="highlight"/>
            <div class="demo-block-control" ref="control" :class="{'is-fixed': fixedControl}" @click="isExpanded = !isExpanded">
                <div class="hide-icon" v-show="hideIcon">
                    <transition name="arrow-slide">
                        <i :class="[iconClass, {'hovering': true}]"></i>
                    </transition>
                    <transition name="text-slide">
                        <span>{{ controlText }}</span>
                    </transition>
                </div>
                <transition name="text-slide">
                    <el-button
                        size="small"
                        type="text"
                        class="control-button"
                        :class="{ctrLeft: ctrLeft}"
                        @click.stop="goJsfiddle">
                        在线运行
                    </el-button>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fixedControl: false,
            isExpanded: false,
            hideIcon: false,
            ctrLeft: false
        }
    },
    props:{
        jsfiddle:{
            type:Object
        },
        content:{
            type:Object
        }
    },
    mounted(){
        // console.log(this.jsfiddle,this.content)
        this.$nextTick(() => {
            let highlight = this.$el.getElementsByClassName('highlight')[0]
            if (this.$el.getElementsByClassName('description').length === 0) {
                highlight.style.width = '100%'
                highlight.borderRight = 'none'
            }
        })
        let self = this;
        window.addEventListener('resize', function() {
            setTimeout(() => {
                self.resizeCompute()
            }, 50)
        })
        this.resizeCompute()
    },
    computed:{
        blockClass(){
            return `demo-${this.$router.currentRoute.path.split('/').pop()}`
        },
        blockControl(){
            return this.$el.getElementsByClassName('demo-block-control')[0]
        },
        controlText(){
            return this.isExpanded ? '隐藏代码' : '显示代码'
        },
        iconClass(){
            return this.isExpanded ? 'el-icon-caret-top' : 'el-icon-caret-bottom'
        },
        sourceArea(){
            return this.$el.getElementsByClassName('source')[0]
        },
        codeArea(){
            return this.$el.getElementsByClassName('meta')[0]
        },
        highlight(){
            return this.$el.getElementsByClassName('highlight')[0]
        },
    },
    watch:{
        isExpanded(val) {
            this.highlight.style.height = val ? 'auto' : '0px';
            // 动态设置 固定底部 隐藏代码 以及 在线运行 的宽度
            if (val) {
                this.blockControl.style.width = this.codeArea.offsetWidth + 'px';
            }
            if (!val) {
                this.fixedControl = false;
                this.$refs.control.style.left = '0'
                this.removeScrollHandler()
                return
            }
            setTimeout(() => {
                this.scrollParent = document.querySelector('.page-component__scroll > .el-scrollbar__wrap')
                this.scrollParent && this.scrollParent.addEventListener('scroll', this.scrollHandler)
                this.scrollHandler()
            }, 200)
        }
    },
    methods: {
        goJsfiddle() {
            const { script, html, style } = this.jsfiddle
            this.$bus.$emit('showEditor', this.jsfiddle)
        },
        resizeCompute() {
            let bodyWidth = document.getElementsByTagName("body")[0].clientWidth;
            if (bodyWidth < 1400) {
                this.hideIcon = true;
                this.ctrLeft = true;
                this.isExpanded = false;
                this.highlight.style.height = '0px';
                this.codeArea.style.height = 'auto'
            } else {
                this.hideIcon = false;
                this.ctrLeft = false;
                this.highlight.style.height = 'calc(100% - 43px)';
                this.blockControl.style.width = 'auto';
                this.autoHeight();
            }
        },
        autoHeight() {
            //判断 source 的高度如果大于500px 代码块高度等于 source 高
            let componentHeight = this.sourceArea.childNodes[0].childNodes[0].clientWidth;
            let level = 500;
            let tag1 = componentHeight > level;
            let tag2 = this.codeAreaHeight > level;
            if (tag1 && tag2 && componentHeight >= this.codeAreaHeight) {
                this.codeArea.style.height = componentHeight + 48 + 'px';
            }
            if (tag1 && tag2 && componentHeight < this.codeAreaHeight) {
                this.codeArea.style.height = componentHeight + 48 + 'px';
            }
            if (!tag1) {
                if (tag2) {
                    this.codeArea.style.height = '500px';
                } else {
                    this.codeArea.style.height = 'auto';
                }
            }
        },
        scrollHandler() {
            const { top, bottom, left } = this.$refs.meta.getBoundingClientRect()
            this.fixedControl = bottom > document.documentElement.clientHeight && top + 44 <= document.documentElement.clientHeight
            this.$refs.control.style.left = this.fixedControl ? `${left}px` : '0'
        },
        removeScrollHandler() {
            this.scrollParent && this.scrollParent.removeEventListener('scroll', this.scrollHandler)
        }
    }
}
</script>
