(window.webpackJsonp=window.webpackJsonp||[]).push([[11,4,7],{372:function(t,e,n){var content=n(375);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("3a58cb65",content,!0,{sourceMap:!1})},373:function(t,e,n){var content=n(378);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("6ae3207a",content,!0,{sourceMap:!1})},374:function(t,e,n){"use strict";n(372)},375:function(t,e,n){var r=n(36)((function(i){return i[1]}));r.push([t.i,".card__title{font-size:var(--fs-large);padding:.25em}",""]),r.locals={},t.exports=r},377:function(t,e,n){"use strict";n(373)},378:function(t,e,n){var r=n(36)((function(i){return i[1]}));r.push([t.i,".card[data-v-689dcb44]{border-radius:var(--border-radius-medium);padding:.5rem}",""]),r.locals={},t.exports=r},379:function(t,e,n){"use strict";n.r(e);n(374);var r=n(12),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"card__title unselectable"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},380:function(t,e,n){"use strict";n.r(e);n(377);var r=n(12),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"card concave elevated"},[t._t("default")],2)}),[],!1,null,"689dcb44",null);e.default=component.exports},426:function(t,e,n){"use strict";n.r(e);var r=n(18),l=n(91),o=Object(r.a)({props:{notebooks:{type:Array,required:!0}},data:function(){return{title:l.b.notebooks.title}},methods:{getNotebookPath:l.a}}),c=n(12),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Card",[n("CardTitle",[t._v(t._s(t.$t(t.title)))]),t._v(" "),n("ul",t._l(t.notebooks,(function(e){return n("li",{key:e.id},[n("NuxtLink",{attrs:{to:t.localePath(t.getNotebookPath(e))}},[t._v("\n        "+t._s(e.name)+"\n      ")])],1)})),0)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardTitle:n(379).default,Card:n(380).default})}}]);