(window.webpackJsonp=window.webpackJsonp||[]).push([[18,13,14,15,16],{381:function(t,e,n){var content=n(388);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("0352fa0e",content,!0,{sourceMap:!1})},382:function(t,e,n){var content=n(392);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("68991507",content,!0,{sourceMap:!1})},383:function(t,e,n){var content=n(394);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("a44ee586",content,!0,{sourceMap:!1})},387:function(t,e,n){"use strict";n(381)},388:function(t,e,n){var o=n(36)((function(i){return i[1]}));o.push([t.i,".toolbar[data-v-69276813]{display:flex;flex-wrap:wrap;gap:.5rem}",""]),o.locals={},t.exports=o},389:function(t,e,n){var content=n(403);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("7eebfde6",content,!0,{sourceMap:!1})},390:function(t,e,n){var content=n(405);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("164cfd3c",content,!0,{sourceMap:!1})},391:function(t,e,n){"use strict";n(382)},392:function(t,e,n){var o=n(36)((function(i){return i[1]}));o.push([t.i,".editor[data-v-fd708fd8]{display:block;background:transparent;border:none;color:var(--text-primary);height:100%;padding:1rem;resize:none;overflow-wrap:normal;overflow-x:auto;width:100%}.editor[data-v-fd708fd8]:focus-visible{outline:none}",""]),o.locals={},t.exports=o},393:function(t,e,n){"use strict";n(383)},394:function(t,e,n){var o=n(36)((function(i){return i[1]}));o.push([t.i,".render-view{background:var(--color-lighten-1);padding:1rem;min-height:100%}.render-view>:first-child{margin-top:0}",""]),o.locals={},t.exports=o},398:function(t,e,n){"use strict";n.r(e);var o=n(18),r=n(401),c=Object(o.a)({props:{value:{type:String,required:!0}},computed:{textArea:function(){return this.$refs.textarea}},mounted:function(){this.textArea.addEventListener("keydown",r.a)},beforeDestroy:function(){this.textArea.removeEventListener("keydown",r.a)}}),l=(n(391),n(12)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("textarea",{ref:"textarea",staticClass:"editor",attrs:{placeholder:t.$t("editor.placeholder"),wrap:"off"},domProps:{value:t.value},on:{input:function(e){return e.preventDefault(),t.$emit("input",e.target.value)}}})}),[],!1,null,"fd708fd8",null);e.default=component.exports},399:function(t,e,n){"use strict";n.r(e);var o=n(18),r=Object(o.a)({props:{input:{type:String,required:!0}},computed:{htmlOutput:function(){return this.$md(this.input)}}}),c=(n(393),n(12)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"render-view",domProps:{innerHTML:t._s(t.htmlOutput)}})}),[],!1,null,null,null);e.default=component.exports},400:function(t,e,n){"use strict";n.r(e);n(387);var o=n(12),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"toolbar"},[t._t("default")],2)}),[],!1,null,"69276813",null);e.default=component.exports},402:function(t,e,n){"use strict";n(389)},403:function(t,e,n){var o=n(36)((function(i){return i[1]}));o.push([t.i,"nav[data-v-6876893a]{overflow-x:auto;overflow-y:hidden;padding-bottom:.75rem;width:100%}ul[data-v-6876893a]{display:flex;flex-wrap:nowrap;gap:.5rem;list-style:none;margin:0;padding:0}li[data-v-6876893a]{text-align:center;white-space:nowrap}li.selected button[data-v-6876893a]{background:var(--color-lighten-2)}",""]),o.locals={},t.exports=o},404:function(t,e,n){"use strict";n(390)},405:function(t,e,n){var o=n(36)((function(i){return i[1]}));o.push([t.i,".splitpanes{flex-grow:1;overflow-y:auto}.container>*{flex-grow:1}.pane{overflow-y:auto}",""]),o.locals={},t.exports=o},414:function(t,e,n){"use strict";n.r(e);var o=n(18),r=Object(o.a)({props:{tabs:{type:Array,required:!0},value:{type:String,required:!0}}}),c=(n(402),n(12)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("ul",[t._l(t.tabs,(function(e){return n("li",{key:e.id,class:{selected:e.id===t.value},on:{click:function(n){return t.$emit("input",e.id)},contextmenu:function(n){return n.preventDefault(),t.$emit("menu",e.id)}}},[n("Button",{attrs:{small:""}},[t._v(t._s(e.title))])],1)})),t._v(" "),n("li",{on:{click:function(e){return t.$emit("add")}}},[n("Button",{attrs:{small:""}},[n("PlusIcon")],1)],1)],2)])}),[],!1,null,"6876893a",null);e.default=component.exports;installComponents(component,{Button:n(158).default})},415:function(t,e,n){"use strict";n.r(e);n(32),n(22),n(31),n(53),n(29),n(54);var o=n(21),r=n(18),c=n(410);n(411);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=Object(r.a)({components:{Splitpanes:c.Splitpanes,Pane:c.Pane},props:{id:{type:String,required:!0}},computed:{section:function(){return this.$store.getters["sections/byId"](this.id)},content:{get:function(){return this.section.content},set:function(t){this.$store.commit("sections/add",d(d({},this.section),{},{content:t}))}}}}),v=(n(404),n(12)),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("splitpanes",{staticClass:"splitpanes"},[n("pane",{staticClass:"pane",attrs:{"min-size":0}},[n("Editor",{model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),t._v(" "),n("pane",{staticClass:"pane",attrs:{"min-size":0}},[n("RenderView",{attrs:{input:t.content}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Editor:n(398).default,RenderView:n(399).default})},424:function(t,e,n){"use strict";n.r(e);n(45),n(23);var o=n(18),r=n(146),c=n(91),l=Object(o.a)({validate:function(t){var e=t.i18n,n=t.params;if(!(void 0!==t.store.getters["notebooks/byId"](n.slug))){var o=e.t("error.notebooks.not-found",[n.slug]);throw new Error(o)}return!0},data:function(){return{notebooksRoute:c.b.notebooks,tab:""}},computed:{notebookId:function(){return this.$route.params.slug},notebook:function(){return this.$store.getters["notebooks/byId"](this.notebookId)},sections:function(){return this.$store.getters["sections/byNotebookId"](this.notebookId)},tabs:function(){return this.sections.map((function(section){return{id:section.id,title:section.name}}))},currentSection:function(){return this.$store.getters["sections/byId"](this.tab)}},mounted:function(){this.sections.length>0&&(this.tab=this.sections[0].id)},methods:{createNewSection:function(){var section={id:Object(r.a)(),content:"",name:"New Section",notebookId:this.notebookId};this.$store.commit("sections/add",section)},onMenu:function(t){this.$store.commit("sections/remove",t)},download:function(){this.$store.dispatch("notebooks/download",this.notebookId)}}}),d=n(12),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ClientOnly",[n("div",{staticClass:"h-100 d-flex flex-column"},[n("Toolbar",{staticClass:"ma-4"},[n("NuxtLink",{attrs:{to:t.localePath(t.notebooksRoute.path)}},[n("Button",{attrs:{color:"warn"}},[t._v("\n          "+t._s(t.$t("actions.close"))+"\n        ")])],1),t._v(" "),n("Button",{attrs:{color:"secondary"},on:{click:t.download}},[t._v("\n        "+t._s(t.$t("actions.download"))+"\n      ")])],1),t._v(" "),n("TabNavigation",{staticClass:"mx-4 mb-4",attrs:{tabs:t.tabs},on:{add:t.createNewSection,menu:t.onMenu},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}}),t._v(" "),t.currentSection?n("SectionViewer",{attrs:{id:t.currentSection.id}}):t._e()],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(158).default,Toolbar:n(400).default,TabNavigation:n(414).default,SectionViewer:n(415).default})}}]);