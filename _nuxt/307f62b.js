(window.webpackJsonp=window.webpackJsonp||[]).push([[16,3,4,5,7,9,13],{352:function(t,e,o){var content=o(356);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(49).default)("1ffaf681",content,!0,{sourceMap:!1})},353:function(t,e,o){var content=o(358);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(49).default)("76d58e68",content,!0,{sourceMap:!1})},354:function(t,e,o){var content=o(365);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(49).default)("3b22d07f",content,!0,{sourceMap:!1})},355:function(t,e,o){"use strict";o(352)},356:function(t,e,o){var n=o(48)(!1);n.push([t.i,".card__title{font-size:var(--fs-large);padding:.25em}",""]),t.exports=n},357:function(t,e,o){"use strict";o(353)},358:function(t,e,o){var n=o(48)(!1);n.push([t.i,".card[data-v-0d031e2e]{background:var(--color-lighten-2);border-radius:var(--border-radius-medium);padding:.5rem}",""]),t.exports=n},359:function(t,e,o){var content=o(368);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(49).default)("e159c92a",content,!0,{sourceMap:!1})},362:function(t,e,o){"use strict";o.r(e);o(355);var n=o(17),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"card__title unselectable"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},363:function(t,e,o){"use strict";o.r(e);o(357);var n=o(17),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"card"},[t._t("default")],2)}),[],!1,null,"0d031e2e",null);e.default=component.exports},364:function(t,e,o){"use strict";o(354)},365:function(t,e,o){var n=o(48)(!1);n.push([t.i,".card__actions[data-v-27087e22]{display:flex;justify-content:flex-end}.card__actions[data-v-27087e22]>:not(:first-child){margin-left:.5rem}",""]),t.exports=n},366:function(t,e,o){"use strict";o.r(e);o(364);var n=o(17),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"card__actions"},[t._t("default")],2)}),[],!1,null,"27087e22",null);e.default=component.exports},367:function(t,e,o){"use strict";o(359)},368:function(t,e,o){var n=o(48)(!1);n.push([t.i,".toolbar[data-v-6f0aaaf0]{background:var(--color-darken-2);display:flex;flex-wrap:wrap;padding-bottom:1rem;padding-right:1rem}.toolbar>*[data-v-6f0aaaf0]{margin-left:1rem;margin-top:1rem}",""]),t.exports=n},375:function(t,e,o){"use strict";o.r(e);var n=o(20),r=o(88),l=Object(n.a)({props:{notebook:{type:Object,required:!0}},methods:{getNotebookPath:r.a}}),c=o(17),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Card",[o("CardTitle",[t._v(t._s(t.notebook.name))]),t._v(" "),o("CardActions",[o("Button",{attrs:{color:"warn"},on:{click:function(e){return t.$emit("delete",t.notebook.id)}}},[t._v("\n      "+t._s(t.$t("actions.delete"))+"\n    ")]),t._v(" "),o("NuxtLink",{attrs:{to:t.localePath(t.getNotebookPath(t.notebook))}},[o("Button",{attrs:{color:"secondary"}},[t._v("\n        "+t._s(t.$t("actions.open"))+"\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardTitle:o(362).default,Button:o(113).default,CardActions:o(366).default,Card:o(363).default})},378:function(t,e,o){"use strict";o.r(e);o(367);var n=o(17),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"toolbar"},[t._t("default")],2)}),[],!1,null,"6f0aaaf0",null);e.default=component.exports},386:function(t,e,o){"use strict";o.r(e);var n=o(20),r=Object(n.a)({props:{notebooks:{type:Array,required:!0}}}),l=o(17),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("MasonryWall",{staticClass:"pa-4",attrs:{items:t.notebooks,"column-width":300,padding:16},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item;return[o("NotebookCard",{attrs:{notebook:n},on:{delete:function(e){return t.$emit("delete",n.id)}}})]}}])})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NotebookCard:o(375).default})},393:function(t,e,o){"use strict";o.r(e);var n=o(20),r=Object(n.a)({computed:{notebooks:function(){return this.$store.getters["notebooks/all"]}},methods:{createNotebook:function(){this.$store.dispatch("createNotebook","New Notebook")},deleteNotebook:function(t){this.$store.commit("notebooks/remove",t)},deleteAll:function(){this.$store.dispatch("notebooks/reset")}}}),l=o(17),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Toolbar",[o("Button",{attrs:{color:"secondary"},on:{click:t.createNotebook}},[t._v("New")]),t._v(" "),o("Button",{attrs:{color:"warn"},on:{click:t.deleteAll}},[t._v("Delete all")])],1),t._v(" "),o("NotebookWall",{attrs:{notebooks:t.notebooks},on:{delete:t.deleteNotebook}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:o(113).default,Toolbar:o(378).default,NotebookWall:o(386).default})}}]);