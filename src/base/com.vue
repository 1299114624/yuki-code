<template>
    <div ref="con">
    </div>
</template>

<script>
import Vue from 'vue'
import echarts from 'echarts/lib/echarts'
export default {
    data() {
        return {
            vm: null
        }
    },
    props: {
        config: Object
    },
    watch: {
        config() {
            this.renderComponent()
        }
    },
    methods: {
        renderComponent() {
            let config = this.config
            if (!config || !config.template) {
                return
            }
            if (this.vm) {
                this.vm.$destroy()
            }
            let vm = (this.vm = new Vue(config).$mount())
            this.$refs.con.innerHTML = ''
            this.$refs.con.appendChild(vm.$el)
            let ecEls = this.$el.querySelectorAll('.echarts')
            for (let index = 0; index < ecEls.length; index++) {
                const element = ecEls[index]
                let ec = echarts.getInstanceByDom(element)
                ec && ec.resize()
            }
        }
    },
    mounted() {
        this.renderComponent()
    },
    beforeDestroy() {
        this.vm && this.vm.$destroy()
    }
}
</script>

