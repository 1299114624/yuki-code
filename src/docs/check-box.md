<script>
const cityOptions = ['上海','北京','广州','深圳']
module.exports = {
    data() {
        return {
            checked: true,
            checkList: ['选中且禁用', '复选框 A'],
            checkAll: false,
            checkedCities: ['上海', '北京'],
            cities: cityOptions,
            isIndeterminate: true,
        }
    },
    methods:{
        handleCheckAllChange(val) {
            this.checkedCities = val ? cityOptions : [];
            this.isIndeterminate = false;
        },
        handleCheckedCitiesChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.cities.length
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
        }
    }
}
</script>

<style>
.demo-check-box .source{
    position: relative;
}
.demo-check-box .yuki-checkbox{
    margin-bottom: 10px;
}
.demo-box.demo-alert .el-alert{
    margin: 20px 0 0;
}
.demo-box.demo-alert .el-alert:first-child{
    margin: 0;
}
</style>
## Checkbox 多选框

在 `el-checkbox` 根组件上加上类 `yuki-checkbox` 即可.

### 基础用法

单独使用可以表示两种状态之间的切换, 写在标签中的内容为 checkbox 按钮后的介绍.

:::demo 在 `el-checkbox` 元素中定义 `v-model` 绑定变量, 单一的 `checkbox` 中, 默认绑定变量的值会是 `Boolean`, 选中为 `true`.

```html
<el-checkbox class="yuki-checkbox" v-model="checked">备选项</el-checkbox>
<script>
export default {
    data() {
        return {
            checked: true
        }
    }
}
</script>
```

:::

### 多选框组

适用于多个勾选框绑定到同一个数组的情景, 通过是否勾选来表示这一组选项中选中的项.

:::demo `checkbox-group` 元素能把多个 checkbox 管理为一组, 只需要在 Group 中使用 `v-model` 绑定 `Array` 类型的变量即可. `el-checkbox` 的 `label` 属性是该 checkbox 对应的值, 若该标签中无内容, 则该属性也充当 checkbox 按钮后的介绍. `label` 与数组中的元素值相对应, 如果存在指定的值则为选中状态, 否则为不选中.

```html
<el-checkbox-group v-model="checkList">
    <el-checkbox class="yuki-checkbox" label="复选框 A"></el-checkbox>
    <el-checkbox class="yuki-checkbox" label="复选框 B"></el-checkbox>
    <el-checkbox class="yuki-checkbox" label="复选框 C"></el-checkbox>
    <el-checkbox class="yuki-checkbox" label="禁用" disabled></el-checkbox>
    <el-checkbox class="yuki-checkbox" label="选中且禁用" disabled></el-checkbox>
</el-checkbox-group>

<script>
export default = {
    data() {
        return {
            checkList: ['选中且禁用', '复选框 A']
        }
    }
}
</script>
```

:::

### Indeterminate 状态

`indeterminate` 属性用以表示 checkbox 的不确定状态, 一般用于实现全选的效果.

:::demo

```html
<el-checkbox class="yuki-checkbox" :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
<div style="margin:15px 0"></div>
<el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
    <el-checkbox class="yuki-checkbox" v-for="city in cities" :label="city" :key="city"></el-checkbox>
</el-checkbox-group>
<script>
const cityOptions = ['上海','北京','广州','深圳']
export default = {
    data() {
        return {
            checkAll: false,
            checkedCities: ['上海', '北京'],
            cities: cityOptions,
            isIndeterminate: true,
        }
    },
    methods:{
        handleCheckAllChange(val) {
            this.checkedCities = val ? cityOptions : [];
            this.isIndeterminate = false;
        },
        handleCheckedCitiesChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.cities.length
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
        }
    }
}
</script>
```

:::

### 可选项目数量的限制

使用 `min` 和 `max` 属性能够限制可以被勾选的项目的数量.

:::demo

```html
<el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange" :min="1" :max="2">
    <el-checkbox class="yuki-checkbox" v-for="city in cities" :label="city" :key="city"></el-checkbox>
</el-checkbox-group>
<script>
const cityOptions = ['上海','北京','广州','深圳']
export default = {
    data() {
        return {
            checkedCities: ['上海', '北京'],
            cities: cityOptions,
        }
    }
}
</script>
```