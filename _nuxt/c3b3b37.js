(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{334:function(e,t,n){var content=n(343);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(85).default)("2bdeb63a",content,!0,{sourceMap:!1})},342:function(e,t,n){"use strict";n(334)},343:function(e,t,n){var r=n(46)(!1);r.push([e.i,"\n.editor[data-v-0eb2b666] {\n  display: block;\n  background: transparent;\n  border: none;\n  color: var(--text-primary);\n  height: 100%;\n  padding: 1rem;\n  resize: none;\n  overflow-wrap: normal;\n  overflow-x: auto;\n  width: 100%;\n}\n.editor[data-v-0eb2b666]:focus-visible {\n  outline: none;\n}\n",""]),e.exports=r},348:function(e,t,n){"use strict";n.r(t);var r=n(86),o=Object(r.a)({props:{value:{type:String,required:!0}},computed:{textArea:function(){return this.$refs.textarea}},mounted:function(){this.textArea.addEventListener("keydown",this.handleTabInput)},beforeDestroy:function(){this.textArea.removeEventListener("keydown",this.handleTabInput)},methods:{handleTabInput:function(e){if("Tab"===e.key){e.preventDefault();var t=e.target,n=t.selectionStart,r=t.selectionEnd,o=t.value;t.value=o.substring(0,n)+"\t"+o.substring(r),t.selectionStart=t.selectionEnd=n+1}}}}),l=(n(342),n(55)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("textarea",{ref:"textarea",staticClass:"editor",attrs:{placeholder:"Start typing...",wrap:"off"},domProps:{value:e.value},on:{input:function(t){return t.preventDefault(),e.$emit("input",t.target.value)}}})}),[],!1,null,"0eb2b666",null);t.default=component.exports}}]);