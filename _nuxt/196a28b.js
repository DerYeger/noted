(window.webpackJsonp=window.webpackJsonp||[]).push([[13,5,6,8],{393:function(t,e,n){var content=n(396);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("3a58cb65",content,!0,{sourceMap:!1})},394:function(t,e,n){var content=n(398);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("6ae3207a",content,!0,{sourceMap:!1})},395:function(t,e,n){"use strict";n(393)},396:function(t,e,n){var o=n(36)((function(i){return i[1]}));o.push([t.i,".card__title{font-size:var(--fs-large);padding:.25em}",""]),o.locals={},t.exports=o},397:function(t,e,n){"use strict";n(394)},398:function(t,e,n){var o=n(36)((function(i){return i[1]}));o.push([t.i,".card[data-v-689dcb44]{border-radius:var(--border-radius-medium);padding:.5rem}",""]),o.locals={},t.exports=o},399:function(t,e,n){"use strict";n.r(e);n(395);var o=n(10),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"card__title unselectable"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},400:function(t,e,n){"use strict";n.r(e);n(397);var o=n(10),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"card concave elevated"},[t._t("default")],2)}),[],!1,null,"689dcb44",null);e.default=component.exports},401:function(t,e,n){var content=n(409);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("4bf908e1",content,!0,{sourceMap:!1})},408:function(t,e,n){"use strict";n(401)},409:function(t,e,n){var o=n(36)((function(i){return i[1]}));o.push([t.i,".card__actions[data-v-3ef54b5c]{display:flex;justify-content:flex-end;gap:.5rem}",""]),o.locals={},t.exports=o},410:function(t,e,n){"use strict";n.r(e);n(408);var o=n(10),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"card__actions"},[t._t("default")],2)}),[],!1,null,"3ef54b5c",null);e.default=component.exports},425:function(t,e,n){"use strict";n.r(e);var o=n(16),r=n(59),l=Object(o.a)({props:{notebook:{type:Object,required:!0}},methods:{getNotebookPath:r.a}}),c=n(10),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Card",[n("CardTitle",[t._v(t._s(t.notebook.name))]),t._v(" "),n("CardActions",[n("Button",{attrs:{color:"warn"},on:{click:function(e){return t.$emit("delete",t.notebook.id)}}},[t._v("\n      "+t._s(t.$t("actions.delete"))+"\n    ")]),t._v(" "),n("NuxtLink",{attrs:{to:t.localePath(t.getNotebookPath(t.notebook))}},[n("Button",{attrs:{color:"secondary"}},[t._v("\n        "+t._s(t.$t("actions.open"))+"\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardTitle:n(399).default,Button:n(165).default,CardActions:n(410).default,Card:n(400).default})}}]);