## Radio 单选按钮
<script>
export default{
    data() {
        return {
            radio: '1'
        }
    }
}
</script>
<style>
.demo-radio {
    .source {
        position: relative
    }
}
.demo-box.demo-alert .el-alert{
    margin: 20px 0 0;
}
.demo-box.demo-alert.el-alert:first-child {
    margin: 0;
}
</style>

### 基本用法

在 `el-radio` 根组件上加上类 `yuki-radio` 即可.

::: demo
```html
<div>
    <el-radio class="yuki-radio" v-model="radio" label="1">备选项</el-radio>
    <el-radio class="yuki-radio" v-model="radio" label="2">备选项</el-radio>
    <el-radio class="yuki-radio" v-model="radio" label="3" :disabled="true">备选项</el-radio>
</div>
<script>
export default {
    data() {
        return {
            radio: '1'
        }
    }
}
</script>
```

:::


### Radio Attributes
|参数       |说明       |类型       |可选值     |默认值     |
|-----------|-----------|-----------|----------|----------|
|label      |Radio的value|string/number/boolean|    -   |   -   |
|disabled   |是否禁用   |boolean    |    -      |   false   |
|border     |是否显示边框|boolean    |    -      |   false   |
|size     |Radio的尺寸,仅在border为真时有效|string    |medium/smal/mini|   -   |
|name     |原生name属性|string    |    -      |   -   |

### Radio Events
|事件名称       |说明       |回调参数       |
|--------------|-----------|--------------|
|change    |绑定值变化时触发的事件|选中的Radio label值|

### Radio-group Attributes
|参数       |说明       |类型       |可选值     |默认值     |
|-----------|-----------|-----------|----------|----------|
|size      |单选框组尺寸,仅对按钮形式的Radio或带有边框的Radio有效|string|medium/small/mini|   -   |
|disabled   |是否禁用   |boolean    |    -      |   false   |
|name     |原生name属性|string    |    -      |   -   |