(window.webpackJsonp=window.webpackJsonp||[]).push([[26,5,6,8,13,15,23],{400:function(t,e,o){var content=o(403);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(34).default)("3a58cb65",content,!0,{sourceMap:!1})},401:function(t,e,o){var content=o(405);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(34).default)("6ae3207a",content,!0,{sourceMap:!1})},402:function(t,e,o){"use strict";o(400)},403:function(t,e,o){var n=o(33)((function(i){return i[1]}));n.push([t.i,".card__title{font-size:var(--fs-large);padding:.25em}",""]),n.locals={},t.exports=n},404:function(t,e,o){"use strict";o(401)},405:function(t,e,o){var n=o(33)((function(i){return i[1]}));n.push([t.i,".card[data-v-689dcb44]{border-radius:var(--border-radius-medium);padding:.5rem}",""]),n.locals={},t.exports=n},406:function(t,e,o){"use strict";o.r(e);o(402);var n=o(7),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"card__title unselectable"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},407:function(t,e,o){"use strict";o.r(e);o(404);var n=o(7),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"card concave elevated"},[t._t("default")],2)}),[],!1,null,"689dcb44",null);e.default=component.exports},408:function(t,e,o){var content=o(417);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(34).default)("663bda42",content,!0,{sourceMap:!1})},409:function(t,e,o){var content=o(420);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(34).default)("129303dc",content,!0,{sourceMap:!1})},415:function(t,e,o){"use strict";function n(title,t){var e="Noted | ".concat(title);return[{hid:"description",name:"description",content:t},{hid:"twitter:title",name:"twitter:title",content:e},{hid:"twitter:description",name:"twitter:description",content:t},{hid:"twitter:image:alt",name:"twitter:image:alt",content:e},{hid:"og:title",property:"og:title",content:e},{hid:"og:description",property:"og:description",content:t},{hid:"og:image:alt",property:"og:image:alt",content:e}]}o.d(e,"a",(function(){return n}))},416:function(t,e,o){"use strict";o(408)},417:function(t,e,o){var n=o(33)((function(i){return i[1]}));n.push([t.i,".card__actions[data-v-43357354]{display:flex;justify-content:flex-end;gap:.5rem}",""]),n.locals={},t.exports=n},418:function(t,e,o){"use strict";o.r(e);o(416);var n=o(7),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"card__actions text--small"},[t._t("default")],2)}),[],!1,null,"43357354",null);e.default=component.exports},419:function(t,e,o){"use strict";o(409)},420:function(t,e,o){var n=o(33)((function(i){return i[1]}));n.push([t.i,".toolbar__container[data-v-3c8694c8]{overflow-x:auto;overflow-y:hidden;padding-bottom:.5rem}.toolbar[data-v-3c8694c8]{display:flex;flex-wrap:nowrap;gap:.5rem;margin-left:1rem;margin-right:1rem}",""]),n.locals={},t.exports=n},433:function(t,e,o){"use strict";o.r(e);var n=o(14),r=o(58),l=Object(n.a)({props:{notebook:{type:Object,required:!0}},methods:{getNotebookPath:r.a}}),c=o(7),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Card",[o("CardTitle",[t._v(t._s(t.notebook.name))]),t._v(" "),o("CardActions",[o("Button",{attrs:{color:"warn"},on:{click:function(e){return t.$emit("delete",t.notebook.id)}}},[t._v("\n      "+t._s(t.$t("actions.delete"))+"\n    ")]),t._v(" "),o("NuxtLink",{attrs:{to:t.localePath(t.getNotebookPath(t.notebook))}},[o("Button",{attrs:{color:"secondary"}},[t._v("\n        "+t._s(t.$t("actions.open"))+"\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardTitle:o(406).default,Button:o(166).default,CardActions:o(418).default,Card:o(407).default})},438:function(t,e,o){"use strict";o.r(e);o(419);var n=o(7),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"toolbar__container"},[o("div",{staticClass:"toolbar text--small"},[t._t("default")],2)])}),[],!1,null,"3c8694c8",null);e.default=component.exports},450:function(t,e,o){"use strict";o.r(e);var n=o(14),r=Object(n.a)({props:{notebooks:{type:Array,required:!0}}}),l=o(7),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("MasonryWall",{attrs:{items:t.notebooks,"column-width":300,gap:16},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item;return[o("NotebookCard",{attrs:{notebook:n},on:{delete:function(e){return t.$emit("delete",n.id)}}})]}}])})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NotebookCard:o(433).default})},465:function(t,e,o){"use strict";o.r(e);var n=o(70),r=o(14),meta=o(415),l=o(58),c=Object(r.a)({head:function(){var title=this.$t(l.b.notebooks.title),t=this.$t("meta.description");return{title:title,meta:Object(n.a)(Object(meta.a)(title,t))}},computed:{notebooks:function(){return this.$store.getters["notebooks/all"]}},methods:{createNotebook:function(){var t=this.$t("editor.notebooks.new");this.$store.dispatch("createNotebook",t)},deleteNotebook:function(t){this.$store.commit("notebooks/remove",t)}}}),d=o(7),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"my-4"},[o("Toolbar",{staticClass:"mb-4"},[o("Button",{attrs:{color:"secondary"},on:{click:t.createNotebook}},[t._v("\n      "+t._s(t.$t("actions.new"))+"\n    ")])],1),t._v(" "),o("NotebookWall",{staticClass:"ma-4",attrs:{notebooks:t.notebooks},on:{delete:t.deleteNotebook}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:o(166).default,Toolbar:o(438).default,NotebookWall:o(450).default})}}]);