webpackJsonp([2],{ucxA:function(t,e){},x9zP:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={props:{data:{type:Array},val:String,level:Number},data:function(){return{useSearchVal:"",resBack:[]}},computed:{searchVal1:function(){return this.val.trim()}},watch:{searchVal1:function(t){this.useSearchVal=t}},mounted:function(){var t=this;document.onclick=function(e){var r=e.target.parentNode&&e.target.parentNode.parentNode;"searchInput"!=e.target.id&&r&&"searchDropMenu"!=r.id&&(t.$parent.searchVal="")}},methods:{clickFun:function(t){for(var e=t.currentTarget.parentNode.childNodes,r=0,a=0;a<e.length;a++)if(t.currentTarget==e[a]){r=a;break}this.$parent.handle(this.resBack[r])},splitArr:function(t,e,r,a){var n="~(^_^)~";n+=n;var i=e,c=e.replace(new RegExp(t,"gi"),n+t+n).split(n);c.length>0&&""===c[0]&&c.shift(),c.length>0&&""===c[c.length-1]&&c.pop();var s=[];return c.map(function(t,e,r){s.push(i.substring(r.slice(0,e).join("").length,r.slice(0,e+1).join("").length))}),r.pathStr&&s.unshift(r.pathStr),{path:r.path,nameArr:s}}},render:function(t,e){var r=this,a=[],n=this.val.trim(),i=new RegExp(n,"gi");return this.data.map(function(t,e){if(t.path){var c=t.name,s=t.name,h={pathStr:"",path:[t.path]};-1!==t.name.search(i)&&n&&a.push(r.splitArr(n,c,h,s))}else t.children.map(function(e){if(e.title){var c=e.title,s=t.name,h={pathStr:t.name+">",path:[e.path]};-1!==c.search(i)&&n&&a.push(r.splitArr(n,c,h,s))}})}),this.level,0===a.length&&a.push({nameArr:["无匹配数据"]}),this.resBack=a,t("div",{class:{dropMenu:!0,checkShow:!this.useSearchVal},attrs:{id:"searchDropMenu"}},[t("ul",a.map(function(e){return t("li",{on:{click:r.clickFun}},e.nameArr.map(function(e){return t("span",{class:{sColor:e.toLowerCase()===n.toLowerCase()}},e)}))}))])}};var n=r("VU/8")(a,null,!1,function(t){r("ucxA")},null,null);e.default=n.exports}});
//# sourceMappingURL=2.js.map