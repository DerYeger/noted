(window.webpackJsonp=window.webpackJsonp||[]).push([[21,12,19],{414:function(t,e,n){var content=n(425);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("a44ee586",content,!0,{sourceMap:!1})},420:function(t,e,n){var content=n(436);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("6b621b4b",content,!0,{sourceMap:!1})},424:function(t,e,n){"use strict";n(414)},425:function(t,e,n){var r=n(31)((function(i){return i[1]}));r.push([t.i,".render-view{background:var(--color-lighten-1);min-height:100%;padding:1rem}.render-view>:first-child{margin-top:0}",""]),r.locals={},t.exports=r},428:function(t,e,n){"use strict";n.r(e);var r=n(14),o=n(441),c=n.n(o),l=Object(r.a)({props:{input:{type:String,required:!0},sanitize:{type:Boolean,default:!1}},computed:{htmlOutput:function(){var t=this.$md(this.input);return this.sanitize?c.a.sanitize(t):t}}}),d=(n(424),n(7)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"render-view",domProps:{innerHTML:t._s(t.htmlOutput)}})}),[],!1,null,null,null);e.default=component.exports},434:function(t,e,n){var content=n(452);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("164cfd3c",content,!0,{sourceMap:!1})},435:function(t,e,n){"use strict";n(420)},436:function(t,e,n){var r=n(31)((function(i){return i[1]}));r.push([t.i,".editor[data-v-41b3aa2a]{display:block;background:transparent;border:none;color:var(--text-primary);height:100%;padding:1rem;resize:none;overflow-wrap:normal;overflow-x:auto;tab-size:var(--tab-size);width:100%}.editor[data-v-41b3aa2a]:focus-visible{outline:none}",""]),r.locals={},t.exports=r},443:function(t,e,n){"use strict";n.r(e);var r=n(14),o=Object(r.a)({props:{value:{type:String,required:!0}},computed:{textArea:function(){return this.$refs.textarea}},mounted:function(){this.textArea.addEventListener("keydown",this.$indentHandler)},beforeDestroy:function(){this.textArea.removeEventListener("keydown",this.$indentHandler)}}),c=(n(435),n(7)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("textarea",{ref:"textarea",staticClass:"editor",attrs:{placeholder:t.$t("editor.placeholder"),wrap:"off"},domProps:{value:t.value},on:{input:function(e){return e.preventDefault(),t.$emit("input",e.target.value)}}})}),[],!1,null,"41b3aa2a",null);e.default=component.exports},451:function(t,e,n){"use strict";n(434)},452:function(t,e,n){var r=n(31)((function(i){return i[1]}));r.push([t.i,".splitpanes{flex-grow:1;overflow-y:auto}.container>*{flex-grow:1}.pane{overflow-y:auto}",""]),r.locals={},t.exports=r},463:function(t,e,n){"use strict";n.r(e);n(36),n(23),n(35),n(48),n(33),n(49);var r=n(20),o=n(14),c=n(455);n(456);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=Object(o.a)({components:{Splitpanes:c.Splitpanes,Pane:c.Pane},props:{id:{type:String,required:!0}},computed:{section:function(){return this.$store.getters["sections/byId"](this.id)},content:{get:function(){return this.section.content},set:function(t){this.$store.commit("sections/add",d(d({},this.section),{},{content:t})),this.$store.commit("notebooks/updateLastEdit",this.section.notebookId)}},sanitize:function(){return this.$store.getters["settings/sanitize"]}}}),v=(n(451),n(7)),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("splitpanes",{staticClass:"splitpanes"},[n("pane",{staticClass:"pane",attrs:{"min-size":0}},[n("Editor",{model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),t._v(" "),n("pane",{staticClass:"pane",attrs:{"min-size":0}},[n("RenderView",{attrs:{input:t.content,sanitize:t.sanitize}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Editor:n(443).default,RenderView:n(428).default})}}]);