(window.webpackJsonp=window.webpackJsonp||[]).push([[16,5,8],{460:function(t,e,n){var content=n(463);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("262cbb2b",content,!0,{sourceMap:!1})},461:function(t,e,n){var content=n(467);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("1ad90054",content,!0,{sourceMap:!1})},462:function(t,e,n){"use strict";n(460)},463:function(t,e,n){var r=n(32)((function(i){return i[1]}));r.push([t.i,".card[data-v-689dcb44]{border-radius:var(--border-radius-medium);padding:.5rem}",""]),r.locals={},t.exports=r},464:function(t,e,n){"use strict";n.r(e);n(462);var r=n(7),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"card concave elevated"},[t._t("default")],2)}),[],!1,null,"689dcb44",null);e.default=component.exports},466:function(t,e,n){"use strict";n(461)},467:function(t,e,n){var r=n(32)((function(i){return i[1]}));r.push([t.i,".card__title{font-size:var(--fs-large);padding:.25em}",""]),r.locals={},t.exports=r},468:function(t,e,n){"use strict";n.r(e);n(466);var r=n(7),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"card__title unselectable"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},537:function(t,e,n){"use strict";n.r(e);var r=n(14),l=n(62),o=Object(r.a)({props:{notebooks:{type:Array,required:!0}},data:function(){return{title:l.b.notebooks.title}},methods:{getNotebookPath:l.a}}),c=n(7),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Card",[n("CardTitle",[t._v(t._s(t.$t(t.title)))]),t._v(" "),n("ul",t._l(t.notebooks,(function(e){return n("li",{key:e.id},[n("NuxtLink",{attrs:{to:t.localePath(t.getNotebookPath(e))}},[t._v("\n        "+t._s(e.name)+"\n      ")])],1)})),0)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardTitle:n(468).default,Card:n(464).default})}}]);