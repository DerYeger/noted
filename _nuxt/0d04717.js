(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{384:function(e,t,r){var content=r(394);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(37).default)("bdd4b080",content,!0,{sourceMap:!1})},393:function(e,t,r){"use strict";r(384)},394:function(e,t,r){var n=r(36)((function(i){return i[1]}));n.push([e.i,".editor[data-v-3ffab00f]{display:block;background:transparent;border:none;color:var(--text-primary);height:100%;padding:1rem;resize:none;overflow-wrap:normal;overflow-x:auto;width:100%}.editor[data-v-3ffab00f]:focus-visible{outline:none}",""]),n.locals={},e.exports=n},400:function(e,t,r){"use strict";r.r(t);var n=r(18),o=Object(n.a)({props:{value:{type:String,required:!0}},computed:{textArea:function(){return this.$refs.textarea}},mounted:function(){this.textArea.addEventListener("keydown",this.$indentHandler)},beforeDestroy:function(){this.textArea.removeEventListener("keydown",this.$indentHandler)}}),l=(r(393),r(12)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("textarea",{ref:"textarea",staticClass:"editor",attrs:{placeholder:e.$t("editor.placeholder"),wrap:"off"},domProps:{value:e.value},on:{input:function(t){return t.preventDefault(),e.$emit("input",t.target.value)}}})}),[],!1,null,"3ffab00f",null);t.default=component.exports}}]);