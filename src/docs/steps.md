<script>
import { Notification } from 'element-ui'
export default {
    data() {
        return {
            steps: ['第一步', '第二步', '第三步'],
            steps1: [
                {label: '第一步', id: 'one'},
                {label: '第二步', id: 'two'},
                {label: '第三步', id: 'three'}
            ],
            activeStep: 0,
            activeStep1: 2
        }
    },
    mounted() {
        setTimeout(() => {
            this.activeStep = 2
        }, 5000)
    },
    methods: {
        onChange(value) {
            Notification.success({
                message: 'Step:' + value,
                offset: 100
            })
        }
    }
}
</script>

## Steps 步骤条

点击返回上一层区域，回调用 `right-change` 事件

### 基本用法

:::demo
```html
<yuki-steps :steps="steps" v-model="activeStep"></yuki-steps>

<script>
export default {
    data() {
        return {
            steps: ['第一步', '第二步', '第三步'],
            activeStep: 0
        }
    },
    mounted() {
        setTimeout(() => {
            this.activeStep = 2
        }, 5000)
    }
}
</script>
```
:::

### 可点击

:::demo
```html
<yuki-steps :steps="steps" @change="onChange" :active-step="activeStep" clickable></yuki-steps>

<script>
export default {
    data() {
        return {
            steps: ['第一步', '第二步', '第三步'],
            activeStep: 0
        }
    },
    methods: {
        onChange(value) {
            Notification.success({
                message: 'Step:' + value,
                offset: 100
            })
        }
    }
}
</script>
```
:::

### 自定义 Step 的 Index

**推荐使用这种方式，尤其是有动态改变的步骤数量的情况**

:::demo
```html
<yuki-steps :steps="steps1" @change="onChange" :active-step="activeStep1" clickable></yuki-steps>

<script>
export default {
    data() {
        return {
            steps1: [
                {label: '第一步', id: 'one'},
                {label: '第二步', id: 'two'},
                {label: '第三步', id: 'three'}
            ],
            activeStep1: 2
        }
    },
    methods: {
        onChange(value) {
            Notification.success({
                message: 'Step:' + value,
                offset: 100
            })
        }
    }
}
</script>
```
:::