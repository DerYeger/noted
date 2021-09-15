(window.webpackJsonp=window.webpackJsonp||[]).push([[11,3,5,10],{331:function(t,e,o){var content=o(337);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(85).default)("09b4d7ac",content,!0,{sourceMap:!1})},332:function(t,e,o){"use strict";o.r(e);var n=o(86),r=Object(n.a)({props:{color:{type:String,default:"secondary"}},computed:{colorVar:function(){return"var(--color-".concat(this.color,")")}}}),l=(o(336),o(55)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"darken-on-focus",style:{background:t.colorVar},on:{click:function(e){return t.$emit("click")}}},[t._t("default")],2)}),[],!1,null,"98ab809a",null);e.default=component.exports;installComponents(component,{Button:o(332).default})},333:function(t,e,o){var content=o(339);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(85).default)("bd1e72ce",content,!0,{sourceMap:!1})},336:function(t,e,o){"use strict";o(331)},337:function(t,e,o){var n=o(46)(!1);n.push([t.i,"\nbutton[data-v-98ab809a] {\n  border: none;\n  border-radius: var(--border-radius-medium);\n  color: var(--text-primary);\n  cursor: pointer;\n  padding: 0.5em 1em;\n}\n",""]),t.exports=n},338:function(t,e,o){"use strict";o(333)},339:function(t,e,o){var n=o(46)(!1);n.push([t.i,"\n.toolbar[data-v-8cbaf614] {\n  background: var(--color-darken-2);\n  display: flex;\n  flex-wrap: wrap;\n  padding-bottom: 1rem;\n  padding-right: 1rem;\n}\n.toolbar > *[data-v-8cbaf614] {\n  margin-left: 1rem;\n  margin-top: 1rem;\n  font-size: 0.8rem;\n}\n",""]),t.exports=n},340:function(t,e,o){var content=o(352);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(85).default)("493a9535",content,!0,{sourceMap:!1})},350:function(t,e,o){"use strict";o.r(e);o(338);var n=o(55),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"toolbar"},[t._t("default")],2)}),[],!1,null,"8cbaf614",null);e.default=component.exports},351:function(t,e,o){"use strict";o(340)},352:function(t,e,o){var n=o(46)(!1);n.push([t.i,"\ndiv[data-v-383eccb6] {\n  color: var(--text-primary);\n  background: var(--color-secondary);\n  border-radius: var(--border-radius-medium);\n  padding: 0.5rem;\n}\n",""]),t.exports=n},362:function(t,e,o){"use strict";o.r(e);var n=o(86),r=Object(n.a)({props:{notebook:{type:Object,required:!0}}}),l=(o(351),o(55)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("p",[t._v(t._s(t.notebook.name))]),t._v(" "),o("NuxtLink",{attrs:{to:"/notebooks/"+t.notebook.id}},[o("Button",{attrs:{color:"primary"}},[t._v("Open")])],1)],1)}),[],!1,null,"383eccb6",null);e.default=component.exports;installComponents(component,{Button:o(332).default})},370:function(t,e,o){"use strict";o.r(e);var n=o(86),r=o(138),l=Object(n.a)({computed:{notebooks:function(){return this.$store.getters["notebooks/all"]}},methods:{createNotebook:function(){this.$store.dispatch("createNotebook",{name:Object(r.a)(),content:""})},deleteAll:function(){this.$store.dispatch("notebooks/reset")}}}),c=o(55),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Toolbar",[o("Button",{on:{click:t.createNotebook}},[t._v("New")]),t._v(" "),o("Button",{on:{click:t.deleteAll}},[t._v("Delete all")])],1),t._v(" "),o("masonry-wall",{staticClass:"pa-4",attrs:{items:t.notebooks,"column-width":300,padding:16},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.item;return[o("NotebookCard",{attrs:{notebook:e}})]}}])})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:o(332).default,Toolbar:o(350).default,NotebookCard:o(362).default})}}]);