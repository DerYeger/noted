(window.webpackJsonp=window.webpackJsonp||[]).push([[9,3,4,5,7],{362:function(t,e,n){var content=n(366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(44).default)("1ffaf681",content,!0,{sourceMap:!1})},363:function(t,e,n){var content=n(368);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(44).default)("333000e4",content,!0,{sourceMap:!1})},364:function(t,e,n){var content=n(375);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(44).default)("3ab9b1fd",content,!0,{sourceMap:!1})},365:function(t,e,n){"use strict";n(362)},366:function(t,e,n){var o=n(43)(!1);o.push([t.i,".card__title{font-size:var(--fs-large);padding:.25em}",""]),t.exports=o},367:function(t,e,n){"use strict";n(363)},368:function(t,e,n){var o=n(43)(!1);o.push([t.i,".card[data-v-0118e315]{border-radius:var(--border-radius-medium);padding:.5rem}",""]),t.exports=o},372:function(t,e,n){"use strict";n.r(e);n(365);var o=n(17),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"card__title unselectable"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},373:function(t,e,n){"use strict";n.r(e);n(367);var o=n(17),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"card elevated"},[t._t("default")],2)}),[],!1,null,"0118e315",null);e.default=component.exports},374:function(t,e,n){"use strict";n(364)},375:function(t,e,n){var o=n(43)(!1);o.push([t.i,".card__actions[data-v-3ef54b5c]{display:flex;justify-content:flex-end;grid-gap:.5rem;gap:.5rem}",""]),t.exports=o},376:function(t,e,n){"use strict";n.r(e);n(374);var o=n(17),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"card__actions"},[t._t("default")],2)}),[],!1,null,"3ef54b5c",null);e.default=component.exports},385:function(t,e,n){"use strict";n.r(e);var o=n(22),r=n(88),l=Object(o.a)({props:{notebook:{type:Object,required:!0}},methods:{getNotebookPath:r.a}}),c=n(17),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Card",[n("CardTitle",[t._v(t._s(t.notebook.name))]),t._v(" "),n("CardActions",[n("Button",{attrs:{color:"warn"},on:{click:function(e){return t.$emit("delete",t.notebook.id)}}},[t._v("\n      "+t._s(t.$t("actions.delete"))+"\n    ")]),t._v(" "),n("NuxtLink",{attrs:{to:t.localePath(t.getNotebookPath(t.notebook))}},[n("Button",{attrs:{color:"secondary"}},[t._v("\n        "+t._s(t.$t("actions.open"))+"\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardTitle:n(372).default,Button:n(155).default,CardActions:n(376).default,Card:n(373).default})},397:function(t,e,n){"use strict";n.r(e);var o=n(22),r=Object(o.a)({props:{notebooks:{type:Array,required:!0}}}),l=n(17),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("MasonryWall",{attrs:{items:t.notebooks,"column-width":300,padding:16},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.item;return[n("NotebookCard",{attrs:{notebook:o},on:{delete:function(e){return t.$emit("delete",o.id)}}})]}}])})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NotebookCard:n(385).default})}}]);