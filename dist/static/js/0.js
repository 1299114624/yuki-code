webpackJsonp([0,1,2,3,4],{"42Hy":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Dd8w"),s=a.n(n),r=a("XDkD"),o=a("HPne"),c=a("Udlf"),i=a("kNBv"),l=a("NYxO"),u={components:{searchColor:c.default,articleMenu:i.default},data:function(){return{navsData:r.default,searchData:o.default,curSearchData:[],showBackToTop:!1,hover:!1}},computed:s()({},Object(l.c)(["componentType"])),mounted:function(){var t=this;this.handleCurSearchData(),this.scroll=document.getElementsByClassName("el-scrollbar__wrap")[0],this.scroll.addEventListener("scroll",function(){t.showBackToTop=t.scroll.scrollTop>=.5*document.body.clientHeight})},watch:{componentType:function(){this.handleCurSearchData()}},methods:{toTop:function(){this.scroll.scrollTop=0},handleCurSearchData:function(){var t=this;this.curSearchData=this.searchData["zh-CN"].filter(function(e){var a=!1;return"NC"===t.componentType&&null===e.version?a=!0:t.componentType===e.version&&(a=!0),a}),console.log("1111111curSearchData",this.curSearchData)},clickIcon:function(){this.$router.push({path:"/nav-map"})},changePath:function(t){if(t.path){var e=t.path[0];e=location.hash.split("component")[0]+"component"+e,location.hash=e}}}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-scrollbar",{ref:"componentScrollBar",staticClass:"page-component__scroll"},[a("searchColor",{attrs:{placeholderTitle:"搜索控件",title:"控件库",level:2,data:t.curSearchData},on:{clickIcon:t.clickIcon,change:t.changePath}}),t._v(" "),a("div",{staticClass:"page-container page-component"},[a("el-scrollbar",{staticClass:"page-component__nav"},[a("side-nav",{attrs:{data:t.navsData,base:"/component"}}),t._v(" "),t.curSearchData[0]?a("article-menu",{attrs:{dataA:t.curSearchData,dataB:t.searchData.zh_en_map}}):t._e()],1),t._v(" "),a("div",{staticClass:"page-component__content"},[a("router-view",{staticClass:"content"})],1),t._v(" "),a("transition",{attrs:{name:"back-to-fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showBackToTop,expression:"showBackToTop"}],staticClass:"page-component-up",class:{hover:t.hover},on:{mouseenter:function(e){t.hover=!0},mouseleave:function(e){t.hover=!1},click:t.toTop}},[a("i",{staticClass:"el-icon-caret-top"})])])],1)],1)},staticRenderFns:[]};var p=a("VU/8")(u,h,!1,function(t){a("SNsF")},null,null);e.default=p.exports},HPne:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={"zh-CN":[{name:"更新日志",path:"/changelog",version:null,content:[]},{name:"开发指南",version:null,children:[{title:"installation 开始",path:"/installation",content:[]},{title:"color 色彩",path:"/color",content:[]}]},{name:"基础控件",version:null,children:[{title:"Button 按钮",path:"/button",content:["Button 按钮","基础用法","禁用状态","按钮组","加载中","Attributes"]},{title:"Input 输入框",path:"/input",content:[]}]},{name:"容器",version:null,children:[{title:"Panel 主面板",path:"/panel",content:[]},{title:"Collapse 折叠面板",path:"/collapse",content:[]}]}],zh_en_map:{"/button":{"Button 按钮":"button-an-niu","基础用法":"ji-chu-yong-fa","禁用状态":"jin-yong-zhuang-tai","按钮组":"an-niu-zu","加载中":"jia-zai-zhong",Attributes:"attributes"}}}},MomX:function(t,e){},QUGd:function(t,e){},SNsF:function(t,e){},Udlf:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={components:{putColor:a("x9zP").default},props:{data:{type:Array},placeholderTitle:String,title:String,level:{type:Number,default:3}},data:function(){return{searchVal:""}},methods:{handle:function(t){this.$emit("change",t),this.searchVal=""},click:function(){this.$emit("clickIcon")}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search-md"},[a("div",{staticClass:"head-icon",on:{click:t.click}},[t._v(t._s(t.title))]),t._v(" "),a("el-input",{attrs:{id:"searchInput",placeholder:t.placeholderTitle,clearable:""},model:{value:t.searchVal,callback:function(e){t.searchVal=e},expression:"searchVal"}},[a("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},slot:"suffix"})]),t._v(" "),a("put-color",{attrs:{val:t.searchVal,data:t.data,level:t.level}})],1)},staticRenderFns:[]};var r=a("VU/8")(n,s,!1,function(t){a("QUGd")},null,null);e.default=r.exports},kNBv:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Dd8w"),s=a.n(n),r=a("NYxO"),o={props:{dataA:{type:Array},dataB:{type:Object}},data:function(){return{curHash:"",fixedLeft:0,classItem:{},showTag:!0,curContent:[]}},methods:{getHash:function(){var t=location.hash.split("component")[1];/\#/.test(t)?this.curHash=t.split("#")[0]:this.curHash=t},toPath:function(t,e){this.classItem=[],this.$set(this.classItem,e,!0);var a=document.getElementsByClassName("el-scrollbar__wrap")[0],n=document.getElementById(this.dataB[this.curHash][t]).offsetTop;a.scrollTop=n},buildContentData:function(){this.getHash();for(var t=this.dataA,e=0,a=t.length;e<a;e++)if(t[e].path){if(t[e].path===this.curHash){this.curContent=t[e].content;break}}else for(var n=t[e].children,s=0,r=n.length;s<r;s++)if(n[s].path===this.curHash){this.curContent=n[s].content;break}"/changelog"==this.curHash||"/nav-map"==this.curHash?this.showTag=!1:(this.showTag=!0,this.initLeft())},initLeft:function(){var t=document.getElementsByClassName("page-container")[0],e=document.getElementsByClassName("content")[0],a=window.getComputedStyle(e,null),n=0;n=window.innerWidth>1400?30:10,this.fixedLeft=t.offsetWidth+t.offsetLeft-parseInt(a.paddingRight)+n}},mounted:function(){var t=this;this.$set(this.classItem,0,!0);var e=this;e.buildContentData(),window.addEventListener("hashchange",function(){e.buildContentData()});var a=document.getElementsByClassName("el-scrollbar__wrap")[0];a.addEventListener("scroll",function(){setTimeout(function(){var n=a.scrollTop,s=[];if(e.curContent.forEach(function(e){var a=document.getElementById(t.dataB[t.curHash][e]);"/nav-map"!==t.curHash&&a&&s.push(a.offsetTop)}),s.length>1){var r=s.map(function(t,e){return{val:Math.abs(n-t),index:e}});r.sort(function(t,e){return t.val-e.val});var o=r[0].index,c=s[o],i=o;n>c&&(i=o+1),t.classItem=[],t.$set(t.classItem,i,!0)}},300)}),window.addEventListener("resize",function(){setTimeout(function(){e.initLeft()},50)})},computed:s()({},Object(r.c)(["routeChange"])),watch:{routeChange:function(){this.buildContentData()}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.showTag,expression:"showTag"}],staticClass:"article-menu",style:{left:t.fixedLeft+"px"}},[a("div",{staticClass:"title"},[t._v("文章目录")]),t._v(" "),a("ul",t._l(t.curContent,function(e,n){return a("li",{key:n,class:{sBlue:t.classItem[n]},on:{click:function(a){return t.toPath(e,n)}}},[t._v("\n            "+t._s(e)+"\n        ")])}),0)])},staticRenderFns:[]};var i=a("VU/8")(o,c,!1,function(t){a("pzDa")},null,null);e.default=i.exports},pzDa:function(t,e){},x9zP:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={props:{data:{type:Array},val:String,level:Number},data:function(){return{useSearchVal:"",resBack:[]}},computed:{searchVal1:function(){return this.val.trim()}},watch:{searchVal1:function(t){this.useSearchVal=t}},mounted:function(){var t=this;document.onclick=function(e){var a=e.target.parentNode&&e.target.parentNode.parentNode;"searchInput"!=e.target.id&&a&&"searchDropMenu"!=a.id&&(t.$parent.searchVal="")}},methods:{clickFun:function(t){for(var e=t.currentTarget.parentNode.childNodes,a=0,n=0;n<e.length;n++)if(t.currentTarget==e[n]){a=n;break}this.$parent.handle(this.resBack[a])},splitArr:function(t,e,a,n){var s="~(^_^)~";s+=s;var r=e,o=e.replace(new RegExp(t,"gi"),s+t+s).split(s);o.length>0&&""===o[0]&&o.shift(),o.length>0&&""===o[o.length-1]&&o.pop();var c=[];return o.map(function(t,e,a){c.push(r.substring(a.slice(0,e).join("").length,a.slice(0,e+1).join("").length))}),a.pathStr&&c.unshift(a.pathStr),{path:a.path,nameArr:c}}},render:function(t,e){var a=this,n=[],s=this.val.trim(),r=new RegExp(s,"gi");return this.data.map(function(t,e){if(t.path){var o=t.name,c=t.name,i={pathStr:"",path:[t.path]};-1!==t.name.search(r)&&s&&n.push(a.splitArr(s,o,i,c))}else t.children.map(function(e){if(e.title){var o=e.title,c=t.name,i={pathStr:t.name+">",path:[e.path]};-1!==o.search(r)&&s&&n.push(a.splitArr(s,o,i,c))}})}),this.level,0===n.length&&n.push({nameArr:["无匹配数据"]}),this.resBack=n,t("div",{class:{dropMenu:!0,checkShow:!this.useSearchVal},attrs:{id:"searchDropMenu"}},[t("ul",n.map(function(e){return t("li",{on:{click:a.clickFun}},e.nameArr.map(function(e){return t("span",{class:{sColor:e.toLowerCase()===s.toLowerCase()}},e)}))}))])}};var s=a("VU/8")(n,null,!1,function(t){a("MomX")},null,null);e.default=s.exports}});
//# sourceMappingURL=0.js.map