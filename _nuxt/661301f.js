(window.webpackJsonp=window.webpackJsonp||[]).push([[19,4,5,7,10,12,16],{363:function(t,e,o){var content=o(366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(44).default)("3a58cb65",content,!0,{sourceMap:!1})},364:function(t,e,o){var content=o(369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(44).default)("223576c8",content,!0,{sourceMap:!1})},365:function(t,e,o){"use strict";o(363)},366:function(t,e,o){var n=o(43)((function(i){return i[1]}));n.push([t.i,".card__title{font-size:var(--fs-large);padding:.25em}",""]),n.locals={},t.exports=n},367:function(t,e,o){var content=o(376);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(44).default)("4bf908e1",content,!0,{sourceMap:!1})},368:function(t,e,o){"use strict";o(364)},369:function(t,e,o){var n=o(43)((function(i){return i[1]}));n.push([t.i,".card[data-v-0118e315]{border-radius:var(--border-radius-medium);padding:.5rem}",""]),n.locals={},t.exports=n},370:function(t,e,o){"use strict";o.r(e);o(365);var n=o(17),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"card__title unselectable"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},371:function(t,e,o){"use strict";o.r(e);o(368);var n=o(17),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"card elevated"},[t._t("default")],2)}),[],!1,null,"0118e315",null);e.default=component.exports},372:function(t,e,o){var content=o(379);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(44).default)("0352fa0e",content,!0,{sourceMap:!1})},375:function(t,e,o){"use strict";o(367)},376:function(t,e,o){var n=o(43)((function(i){return i[1]}));n.push([t.i,".card__actions[data-v-3ef54b5c]{display:flex;justify-content:flex-end;gap:.5rem}",""]),n.locals={},t.exports=n},377:function(t,e,o){"use strict";o.r(e);o(375);var n=o(17),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"card__actions"},[t._t("default")],2)}),[],!1,null,"3ef54b5c",null);e.default=component.exports},378:function(t,e,o){"use strict";o(372)},379:function(t,e,o){var n=o(43)((function(i){return i[1]}));n.push([t.i,".toolbar[data-v-69276813]{display:flex;flex-wrap:wrap;gap:.5rem}",""]),n.locals={},t.exports=n},388:function(t,e,o){"use strict";o.r(e);var n=o(18),r=o(88),l=Object(n.a)({props:{notebook:{type:Object,required:!0}},methods:{getNotebookPath:r.a}}),c=o(17),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Card",[o("CardTitle",[t._v(t._s(t.notebook.name))]),t._v(" "),o("CardActions",[o("Button",{attrs:{color:"warn"},on:{click:function(e){return t.$emit("delete",t.notebook.id)}}},[t._v("\n      "+t._s(t.$t("actions.delete"))+"\n    ")]),t._v(" "),o("NuxtLink",{attrs:{to:t.localePath(t.getNotebookPath(t.notebook))}},[o("Button",{attrs:{color:"secondary"}},[t._v("\n        "+t._s(t.$t("actions.open"))+"\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardTitle:o(370).default,Button:o(155).default,CardActions:o(377).default,Card:o(371).default})},391:function(t,e,o){"use strict";o.r(e);o(378);var n=o(17),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"toolbar"},[t._t("default")],2)}),[],!1,null,"69276813",null);e.default=component.exports},404:function(t,e,o){"use strict";o.r(e);var n=o(18),r=Object(n.a)({props:{notebooks:{type:Array,required:!0}}}),l=o(17),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("MasonryWall",{attrs:{items:t.notebooks,"column-width":300,padding:16},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item;return[o("NotebookCard",{attrs:{notebook:n},on:{delete:function(e){return t.$emit("delete",n.id)}}})]}}])})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NotebookCard:o(388).default})},413:function(t,e,o){"use strict";o.r(e);var n=o(18),r=Object(n.a)({computed:{notebooks:function(){return this.$store.getters["notebooks/all"]}},methods:{createNotebook:function(){this.$store.dispatch("createNotebook","New Notebook")},deleteNotebook:function(t){this.$store.commit("notebooks/remove",t)}}}),l=o(17),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pa-4"},[o("Toolbar",{staticClass:"mb-4"},[o("Button",{attrs:{color:"secondary"},on:{click:t.createNotebook}},[t._v("New")])],1),t._v(" "),o("NotebookWall",{attrs:{notebooks:t.notebooks},on:{delete:t.deleteNotebook}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:o(155).default,Toolbar:o(391).default,NotebookWall:o(404).default})}}]);