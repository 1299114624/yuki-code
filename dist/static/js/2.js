webpackJsonp([2],{kNBv:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Dd8w"),s=n.n(a),i=n("NYxO"),o={props:{dataA:{type:Array},dataB:{type:Object}},data:function(){return{curHash:"",fixedLeft:0,classItem:{},showTag:!0,curContent:[]}},methods:{getHash:function(){var t=location.hash.split("component")[1];/\#/.test(t)?this.curHash=t.split("#")[0]:this.curHash=t},toPath:function(t,e){this.classItem=[],this.$set(this.classItem,e,!0);var n=document.getElementsByClassName("el-scrollbar__wrap")[0],a=document.getElementById(this.dataB[this.curHash][t]).offsetTop;n.scrollTop=a},buildContentData:function(){this.getHash();for(var t=this.dataA,e=0,n=t.length;e<n;e++)if(t[e].path){if(t[e].path===this.curHash){this.curContent=t[e].content;break}}else for(var a=t[e].children,s=0,i=a.length;s<i;s++)if(a[s].path===this.curHash){this.curContent=a[s].content;break}"/changelog"==this.curHash||"/nav-map"==this.curHash?this.showTag=!1:(this.showTag=!0,this.initLeft())},initLeft:function(){var t=document.getElementsByClassName("page-container")[0],e=document.getElementsByClassName("content")[0],n=window.getComputedStyle(e,null),a=0;a=window.innerWidth>1400?30:10,this.fixedLeft=t.offsetWidth+t.offsetLeft-parseInt(n.paddingRight)+a}},mounted:function(){var t=this;this.$set(this.classItem,0,!0);var e=this;e.buildContentData(),window.addEventListener("hashchange",function(){e.buildContentData()});var n=document.getElementsByClassName("el-scrollbar__wrap")[0];n.addEventListener("scroll",function(){setTimeout(function(){var a=n.scrollTop,s=[];if(e.curContent.forEach(function(e){var n=document.getElementById(t.dataB[t.curHash][e]);"/nav-map"!==t.curHash&&n&&s.push(n.offsetTop)}),s.length>1){var i=s.map(function(t,e){return{val:Math.abs(a-t),index:e}});i.sort(function(t,e){return t.val-e.val});var o=i[0].index,c=s[o],r=o;a>c&&(r=o+1),t.classItem=[],t.$set(t.classItem,r,!0)}},300)}),window.addEventListener("resize",function(){setTimeout(function(){e.initLeft()},50)})},computed:s()({},Object(i.c)(["routeChange"])),watch:{routeChange:function(){this.buildContentData()}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.showTag,expression:"showTag"}],staticClass:"article-menu",style:{left:t.fixedLeft+"px"}},[n("div",{staticClass:"title"},[t._v("文章目录")]),t._v(" "),n("ul",t._l(t.curContent,function(e,a){return n("li",{key:a,class:{sBlue:t.classItem[a]},on:{click:function(n){return t.toPath(e,a)}}},[t._v("\n            "+t._s(e)+"\n        ")])}),0)])},staticRenderFns:[]};var r=n("VU/8")(o,c,!1,function(t){n("pzDa")},null,null);e.default=r.exports},pzDa:function(t,e){}});
//# sourceMappingURL=2.js.map