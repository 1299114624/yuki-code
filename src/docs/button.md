<style>
.demo-box.demo-button{
    .el-row{
        margin-bottpm:20px;
        &:last-child{
            margin-bottom:0;
        }
    }
}
</style>
## Button 按钮
常用的操作按钮, 在默认类型按钮上加类`yuki-button`即可.
&emsp;&emsp;

### 基础用法
:::demo

```html
<div>
<el-button class='yuki-button'>普通按钮</el-button>
<el-button class='yuki-button enhance'>强调按钮</el-button>
<yuki-button>普通按钮</yuki-button>
</div>
```


:::
### 禁用状态
按钮不可用状态.

:::demo 你可以使用`disabled`属性来定义按钮是否可用,它接受一个`Boolean`值

```html
<el-button class='yuki-button' disabled>默认按钮</el-button>
```


:::
### 按钮组
以按钮组的方式出现,常用语多项类似操作.

:::demo 使用`<el-button-group>`标签来嵌套你的按钮.

```html
<el-button-group>
    <el-button class='yuki-button'>上一页</el-button>
    <el-button class='yuki-button'>下一页</el-button>
</el-button-group>
```


:::
### 加载中
点击按钮后进行数据加载操作,在按钮上显示加载状态.

:::demo 要设置为loading状态,只要设置`loading`属性为`true`即可.

```html
<el-button class='yuki-button' :loading='true'>加载中</el-button>
```


:::
### Attributes
|参数   |说明   |类型   |可选值     |默认值 |
|-------|-------|-------|----------|-------|
|size   |尺寸   |string   |medium/small/mini     |- |
|type   |类型   |string   |primary/success/warning/danger/info/text     |- |
|plain  |是否朴素|boolean   |-      |flase|
|round  |是否圆角按钮|boolean   |-      |flase|
|circle  |是否圆形按钮|boolean   |-      |flase|
|loading  |是否加载中状态|boolean   |-      |flase|
|disabled  |是否禁用状态|boolean   |-      |flase|
|icon  |图标类名|string   |-      |-    |
|autofocus  |是否默认聚焦|boolean   |-      |flase|
|native-type  |原生type属性|string   |button/submit/reset|button|