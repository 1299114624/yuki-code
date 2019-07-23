<template>
    <div class="yuki-steps" :class="{clickable: clickable}">
        <div class="yuki-step" :class="{active: (item.index !== undefined ? item.index : index) === curStep}" v-for="(item,index) in steps" :key="item.index || index">
            <div class="step-tit" @click="onStepClick(item, index)">{{item.label || item}}</div>
            <div class="step-line">
                <span class="step-num" @click="onStepClick(item, index)">{{index + 1}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'YukiSteps',
    data() {
        return {
            curStep: this.activeStep === undefined ? this.value || 0 : this.activeStep
        }
    },
    props: {
        activeStep: {
            type: [String, Number]
        },
        value: {
            type: [String, Number]
        },
        steps: {
            type: Array,
            required: true
        },
        clickable: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        activeStep(value) {
            this.setCurStep(value)
        },
        value(value) {
            this.setCurStep(value)
        }
    },
    methods: {
        onStepClick(item, index) {
            if (!this.clickable) {
                return
            }
            let value = item.index || index
            if (this.curStep === value) {
                return
            }
            this.setCurStep(value)
            this.$emit('change', value)
        },
        setCurStep(step) {
            this.curStep = step
            this.$emit('input', step)
        }
    }
}
</script>

