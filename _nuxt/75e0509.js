(window.webpackJsonp=window.webpackJsonp||[]).push([[8,3,5],{362:function(t,e,r){var content=r(366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(44).default)("1ffaf681",content,!0,{sourceMap:!1})},363:function(t,e,r){var content=r(368);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(44).default)("333000e4",content,!0,{sourceMap:!1})},365:function(t,e,r){"use strict";r(362)},366:function(t,e,r){var n=r(43)(!1);n.push([t.i,".card__title{font-size:var(--fs-large);padding:.25em}",""]),t.exports=n},367:function(t,e,r){"use strict";r(363)},368:function(t,e,r){var n=r(43)(!1);n.push([t.i,".card[data-v-0118e315]{border-radius:var(--border-radius-medium);padding:.5rem}",""]),t.exports=n},372:function(t,e,r){"use strict";r.r(e);r(365);var n=r(17),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"card__title unselectable"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},373:function(t,e,r){"use strict";r.r(e);r(367);var n=r(17),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"card elevated"},[t._t("default")],2)}),[],!1,null,"0118e315",null);e.default=component.exports},407:function(t,e,r){"use strict";r.r(e);var n=r(22),l=r(88),o=Object(n.a)({props:{notebooks:{type:Array,required:!0}},data:function(){return{title:l.b.notebooks.title}},methods:{getNotebookPath:l.a}}),c=r(17),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Card",[r("CardTitle",[t._v(t._s(t.$t(t.title)))]),t._v(" "),r("ul",t._l(t.notebooks,(function(e){return r("li",{key:e.id},[r("NuxtLink",{attrs:{to:t.localePath(t.getNotebookPath(e))}},[t._v("\n        "+t._s(e.name)+"\n      ")])],1)})),0)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardTitle:r(372).default,Card:r(373).default})}}]);