webpackJsonp([2],{IQrF:function(t,e){},kNBv:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("Dd8w"),a=n.n(s),i=n("NYxO"),o={props:{dataA:{type:Array},dataB:{type:Object}},data:function(){return{curHash:"",fixedLeft:0,classItem:{},showTag:!0,curContent:[]}},methods:{getHash:function(){var t=location.hash.split("component")[1];/\#/.test(t)?this.curHash=t.split("#")[0]:this.curHash=t},toPath:function(t,e){this.classItem=[],this.$set(this.classItem,e,!0);var n=document.getElementsByClassName("el-scrollbar__wrap")[0],s=document.getElementById(this.dataB[this.curHash][t]).offsetTop;n.scrollTop=s},buildContentData:function(){this.getHash();for(var t=this.dataA,e=0,n=t.length;e<n;e++)if(t[e].path){if(t[e].path===this.curHash){this.curContent=t[e].content;break}}else for(var s=t[e].children,a=0,i=s.length;a<i;a++)if(s[a].path===this.curHash){this.curContent=s[a].content;break}"/changelog"==this.curHash||"/nav-map"==this.curHash?this.showTag=!1:(this.showTag=!0,this.initLeft())},initLeft:function(){var t=document.getElementsByClassName("page-container")[0],e=document.getElementsByClassName("content")[0],n=window.getComputedStyle(e,null),s=0;s=window.innerWidth>1400?30:10,this.fixedLeft=t.offsetWidth+t.offsetLeft-parseInt(n.paddingRight)+s}},mounted:function(){var t=this;this.$set(this.classItem,0,!0);var e=this;e.buildContentData(),window.addEventListener("hashchange",function(){e.buildContentData()});var n=document.getElementsByClassName("el-scrollbar__wrap")[0];n.addEventListener("scroll",function(){setTimeout(function(){var s=n.scrollTop,a=[];if(e.curContent.forEach(function(e){var n=document.getElementById(t.dataB[t.curHash][e]);"/nav-map"!==t.curHash&&n&&a.push(n.offsetTop)}),a.length>1){var i=a.map(function(t,e){return{val:Math.abs(s-t),index:e}});i.sort(function(t,e){return t.val-e.val});var o=i[0].index,r=a[o],c=o;s>r&&(c=o+1),t.classItem=[],t.$set(t.classItem,c,!0)}},300)}),window.addEventListener("resize",function(){setTimeout(function(){e.initLeft()},50)})},computed:a()({},Object(i.c)(["routeChange"])),watch:{routeChange:function(){this.buildContentData()}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.showTag,expression:"showTag"}],staticClass:"article-menu",style:{left:t.fixedLeft+"px"}},[n("div",{staticClass:"title"},[t._v("文章目录")]),t._v(" "),n("ul",t._l(t.curContent,function(e,s){return n("li",{key:s,class:{sBlue:t.classItem[s]},on:{click:function(n){return t.toPath(e,s)}}},[t._v("\n            "+t._s(e)+"\n        ")])}),0)])},staticRenderFns:[]};var c=n("VU/8")(o,r,!1,function(t){n("IQrF")},null,null);e.default=c.exports}});
//# sourceMappingURL=2.js.map