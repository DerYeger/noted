(window.webpackJsonp=window.webpackJsonp||[]).push([[20,9,14,15,16,18],{384:function(t,e,n){var content=n(393);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("0352fa0e",content,!0,{sourceMap:!1})},385:function(t,e,n){var content=n(397);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("6b621b4b",content,!0,{sourceMap:!1})},386:function(t,e,n){var content=n(399);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("a44ee586",content,!0,{sourceMap:!1})},388:function(t,e,n){"use strict";function o(title,t){var e="Noted | ".concat(title);return[{hid:"description",name:"description",content:t},{hid:"twitter:title",name:"twitter:title",content:e},{hid:"twitter:description",name:"twitter:description",content:t},{hid:"twitter:image:alt",name:"twitter:image:alt",content:e},{hid:"og:title",property:"og:title",content:e},{hid:"og:description",property:"og:description",content:t},{hid:"og:image:alt",property:"og:image:alt",content:e}]}n.d(e,"a",(function(){return o}))},392:function(t,e,n){"use strict";n(384)},393:function(t,e,n){var o=n(36)((function(i){return i[1]}));o.push([t.i,".toolbar[data-v-69276813]{display:flex;flex-wrap:wrap;gap:.5rem}",""]),o.locals={},t.exports=o},394:function(t,e,n){var content=n(410);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("7eebfde6",content,!0,{sourceMap:!1})},395:function(t,e,n){var content=n(412);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("164cfd3c",content,!0,{sourceMap:!1})},396:function(t,e,n){"use strict";n(385)},397:function(t,e,n){var o=n(36)((function(i){return i[1]}));o.push([t.i,".editor[data-v-41b3aa2a]{display:block;background:transparent;border:none;color:var(--text-primary);height:100%;padding:1rem;resize:none;overflow-wrap:normal;overflow-x:auto;tab-size:var(--tab-size);width:100%}.editor[data-v-41b3aa2a]:focus-visible{outline:none}",""]),o.locals={},t.exports=o},398:function(t,e,n){"use strict";n(386)},399:function(t,e,n){var o=n(36)((function(i){return i[1]}));o.push([t.i,".render-view{background:var(--color-lighten-1);min-height:100%;padding:1rem}.render-view>:first-child{margin-top:0}",""]),o.locals={},t.exports=o},405:function(t,e,n){"use strict";n.r(e);var o=n(17),r=Object(o.a)({props:{value:{type:String,required:!0}},computed:{textArea:function(){return this.$refs.textarea}},mounted:function(){this.textArea.addEventListener("keydown",this.$indentHandler)},beforeDestroy:function(){this.textArea.removeEventListener("keydown",this.$indentHandler)}}),c=(n(396),n(12)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("textarea",{ref:"textarea",staticClass:"editor",attrs:{placeholder:t.$t("editor.placeholder"),wrap:"off"},domProps:{value:t.value},on:{input:function(e){return e.preventDefault(),t.$emit("input",e.target.value)}}})}),[],!1,null,"41b3aa2a",null);e.default=component.exports},406:function(t,e,n){"use strict";n.r(e);var o=n(17),r=Object(o.a)({props:{input:{type:String,required:!0}},computed:{htmlOutput:function(){return this.$md(this.input)}}}),c=(n(398),n(12)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"render-view",domProps:{innerHTML:t._s(t.htmlOutput)}})}),[],!1,null,null,null);e.default=component.exports},408:function(t,e,n){"use strict";n.r(e);n(392);var o=n(12),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"toolbar"},[t._t("default")],2)}),[],!1,null,"69276813",null);e.default=component.exports},409:function(t,e,n){"use strict";n(394)},410:function(t,e,n){var o=n(36)((function(i){return i[1]}));o.push([t.i,"nav[data-v-6876893a]{overflow-x:auto;overflow-y:hidden;padding-bottom:.75rem;width:100%}ul[data-v-6876893a]{display:flex;flex-wrap:nowrap;gap:.5rem;list-style:none;margin:0;padding:0}li[data-v-6876893a]{text-align:center;white-space:nowrap}li.selected button[data-v-6876893a]{background:var(--color-lighten-2)}",""]),o.locals={},t.exports=o},411:function(t,e,n){"use strict";n(395)},412:function(t,e,n){var o=n(36)((function(i){return i[1]}));o.push([t.i,".splitpanes{flex-grow:1;overflow-y:auto}.container>*{flex-grow:1}.pane{overflow-y:auto}",""]),o.locals={},t.exports=o},417:function(t,e,n){var content=n(428);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("223577a2",content,!0,{sourceMap:!1})},422:function(t,e,n){"use strict";n.r(e);var o=n(17),r=Object(o.a)({props:{tabs:{type:Array,required:!0},value:{type:String,required:!0}}}),c=(n(409),n(12)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("ul",[t._l(t.tabs,(function(e){return n("li",{key:e.id,class:{selected:e.id===t.value},on:{click:function(n){return t.$emit("input",e.id)},contextmenu:function(n){return n.preventDefault(),t.$emit("menu",e.id)}}},[n("Button",{attrs:{small:""}},[t._v(t._s(e.title))])],1)})),t._v(" "),n("li",{on:{click:function(e){return t.$emit("add")}}},[n("Button",{attrs:{small:""}},[n("PlusIcon")],1)],1)],2)])}),[],!1,null,"6876893a",null);e.default=component.exports;installComponents(component,{Button:n(159).default})},423:function(t,e,n){"use strict";n.r(e);n(32),n(22),n(31),n(53),n(29),n(54);var o=n(21),r=n(17),c=n(418);n(419);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=Object(r.a)({components:{Splitpanes:c.Splitpanes,Pane:c.Pane},props:{id:{type:String,required:!0}},computed:{section:function(){return this.$store.getters["sections/byId"](this.id)},content:{get:function(){return this.section.content},set:function(t){this.$store.commit("sections/add",d(d({},this.section),{},{content:t}))}}}}),v=(n(411),n(12)),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("splitpanes",{staticClass:"splitpanes"},[n("pane",{staticClass:"pane",attrs:{"min-size":0}},[n("Editor",{model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),t._v(" "),n("pane",{staticClass:"pane",attrs:{"min-size":0}},[n("RenderView",{attrs:{input:t.content}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Editor:n(405).default,RenderView:n(406).default})},427:function(t,e,n){"use strict";n(417)},428:function(t,e,n){var o=n(36)((function(i){return i[1]}));o.push([t.i,".section-placeholder[data-v-f9495858]{align-items:center;display:flex;flex-grow:1;justify-content:center}",""]),o.locals={},t.exports=o},435:function(t,e,n){"use strict";n.r(e);var o=n(73),r=(n(23),n(46),n(17)),c=n(146),l=n(91),meta=n(388),d=Object(r.a)({validate:function(t){var e=t.i18n,n=t.params;if(!(void 0!==t.store.getters["notebooks/byId"](n.slug))){var o=e.t("error.notebooks.not-found",[n.slug]);throw new Error(o)}return!0},data:function(){return{notebooksRoute:l.b.notebooks,tab:""}},head:function(){var title=this.notebook.name,t=this.$t("meta.description");return{title:title,meta:Object(o.a)(Object(meta.a)(title,t))}},computed:{notebookId:function(){return this.$route.params.slug},notebook:function(){return this.$store.getters["notebooks/byId"](this.notebookId)},sections:function(){return this.$store.getters["sections/byNotebookId"](this.notebookId)},tabs:function(){return this.sections.map((function(section){return{id:section.id,title:section.name}}))},currentSection:function(){return this.$store.getters["sections/byId"](this.tab)}},mounted:function(){this.sections.length>0&&(this.tab=this.sections[0].id)},methods:{createNewSection:function(){var t=this.$t("editor.sections.new"),section={id:Object(c.a)(),content:"",name:t,notebookId:this.notebookId};this.$store.commit("sections/add",section),this.tab=section.id},onMenu:function(t){this.$store.commit("sections/remove",t)},download:function(){this.$store.dispatch("notebooks/download",this.notebookId)}}}),f=(n(427),n(12)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ClientOnly",[n("div",{staticClass:"h-100 d-flex flex-column"},[n("Toolbar",{staticClass:"ma-4"},[n("NuxtLink",{attrs:{to:t.localePath(t.notebooksRoute.path)}},[n("Button",{attrs:{color:"warn"}},[t._v("\n          "+t._s(t.$t("actions.close"))+"\n        ")])],1),t._v(" "),n("Button",{attrs:{color:"secondary"},on:{click:t.download}},[t._v("\n        "+t._s(t.$t("actions.download"))+"\n      ")])],1),t._v(" "),n("TabNavigation",{staticClass:"mx-4 mb-4",attrs:{tabs:t.tabs},on:{add:t.createNewSection,menu:t.onMenu},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}}),t._v(" "),t.currentSection?n("SectionViewer",{attrs:{id:t.currentSection.id}}):n("div",{staticClass:"section-placeholder text--secondary"},[t._v("\n      "+t._s(t.$t("editor.notebooks.empty"))+"\n    ")])],1)])}),[],!1,null,"f9495858",null);e.default=component.exports;installComponents(component,{Button:n(159).default,Toolbar:n(408).default,TabNavigation:n(422).default,SectionViewer:n(423).default})}}]);