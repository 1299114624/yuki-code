<template>
<router-view></router-view>
</template>

<script>
import info from './info.md'
export default {
  name: 'App',
  components:{
    info
  }
}
</script>

<style>
@import 'highlight.js/styles/color-brewer.css';
.hello{
  margin: 20px auto;
  width: 50%
}
a{
  color:#409eff;
  text-decoration: none;
}
code{
  background-color: #f9fafc;
  padding: 0 4px;
  border: 1px solid #eaeefb;
  border-radius: 4px;
}
.hljs{
  line-height: 1.8;
  font-family: Menlo,Monaco, Consolas,Courier,monospace;
  font-size: 12px;
  padding: 18px 24px;
  background-color: #fafafa;
  border: 1px solid #eaeefb;
  margin-bottom: 25px;
  border-radius: 4px;
  -webkit-font-smoothing:auto;
}
</style>

<style lang="scss">
@import './packages/theme-default/index.scss';
.demo-block{
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
  display: flex;
  &.hover{
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),0 2px 4px 0 rgba(232, 237, 250, 0.5);
  }
  .demo-button{
    float: right;
  }
  .source{
    padding: 10px;
    box-sizing: border-box;
    width: 50%;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #eaeefb
  }
  .show-demo{
    padding: 10px;
    background-color: #151a30;
    height: (100% -20px);
    flex-grow: 1;
  }
  .meta{
    background-color: #fafafa;
    transition: height 0.2s;
    display: flex;
    width: 50%;
    justify-content: space-between;
    flex-direction: column;
  }
  .description {
    padding: 10px 0 ;
    box-sizing: border-box;
    border-radius: 3px;
    font-size: 14px;
    line-height: 22px;
    color: #666;
    word-break: break-word;
    margin-top: 10px;
    background-color: #fff;
    p{
      margin: 0;
      line-height: 26px;
    }
    code {
      color: #5e6d82;
      background-color: #e6effb;
      margin: 0 4px;
      display: inline-block;
      padding: 1px 5px;
      font-size: 12px;
      border-radius: 3px;
      height: 18px;
      line-height: 18px;
    }
  }
  .highlight{
    // height: 100%;
    pre{
      margin: 0;
      height: 100%;
    }
    code.hljs{
      margin: 0;
      border: none;
      max-height: none;
      border-radius: 0;
      height: 100%;
      overflow: auto;
      box-sizing: border-box;
      padding: 18px;
      &::before{
        content: none
      }
    }
  }
}


html,body{
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: 'Helvetica Neue'
}
.page-component__content{
  h2{
    font-size: 28px;
    //不设margin: 0 会导致父级 content 及以上都带有margin-top这个值
    margin: 0;
    color: #1f2d3d
  }
  h3{
    font-size: 22px
  }
  h2,
  h3,
  h4,
  h5{
    font-weight: normal;
    color: #1f2d3d;
    &:hover a{
      opacity: 0.4
    }
    a{
      float: left;
      margin-left: -20px;
      opacity: 0;
      cursor: pointer;
      &:hover{
        opacity: 0.4;
      }
    }
  }
  p{
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5rem;
  }
  .demo{
    margin: 20px 0
  }
  .tip {
    padding: 8px 16px;
    background-color: #ecf8ff;
    border-radius: 4px;
    border-left: #50bfff 5px solid;
    margin:  20px 0;
    code{
      background-color: rgba(255, 255, 255, 0.7);
      color: #445368;
    }
  }
  .warning{
    padding: 8px 16px;
    background-color: #fff6f7;
    border-radius: 4px;
    border-left: 5px solid #fe6c6f;
    margin: 20px 0;
    code{
      background-color: rgba(255, 255, 255, 0.7);
      color: #445368;
    }
  }
}
// @media (max-width:1400px) {
//   .container,
//   .page-container{
//     width: 1200px
//   }
// }
@media (max-width:1200px) {
  .container,
  .page-container{
    width: 100%;
    // padding: 0 20px
  }
}
</style>

