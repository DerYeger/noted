(window.webpackJsonp=window.webpackJsonp||[]).push([[16,5,8],{436:function(t,e,r){var content=r(439);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(35).default)("262cbb2b",content,!0,{sourceMap:!1})},437:function(t,e,r){var content=r(443);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(35).default)("1ad90054",content,!0,{sourceMap:!1})},438:function(t,e,r){"use strict";r(436)},439:function(t,e,r){var n=r(34)(!1);n.push([t.i,".card[data-v-689dcb44]{border-radius:var(--border-radius-medium);padding:.5rem}",""]),t.exports=n},440:function(t,e,r){"use strict";r.r(e);r(438);var n=r(9),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"card concave elevated"},[t._t("default")],2)}),[],!1,null,"689dcb44",null);e.default=component.exports},442:function(t,e,r){"use strict";r(437)},443:function(t,e,r){var n=r(34)(!1);n.push([t.i,".card__title{font-size:var(--fs-large);padding:.25em}",""]),t.exports=n},444:function(t,e,r){"use strict";r.r(e);r(442);var n=r(9),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"card__title unselectable"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},513:function(t,e,r){"use strict";r.r(e);var n=r(17),l=r(59),o=Object(n.a)({props:{notebooks:{type:Array,required:!0}},data:function(){return{title:l.b.notebooks.title}},methods:{getNotebookPath:l.a}}),c=r(9),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Card",[r("CardTitle",[t._v(t._s(t.$t(t.title)))]),t._v(" "),r("ul",t._l(t.notebooks,(function(e){return r("li",{key:e.id},[r("NuxtLink",{attrs:{to:t.localePath(t.getNotebookPath(e))}},[t._v("\n        "+t._s(e.name)+"\n      ")])],1)})),0)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardTitle:r(444).default,Card:r(440).default})}}]);