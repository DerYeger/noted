(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{406:function(t,e,n){var content=n(421);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("a44ee586",content,!0,{sourceMap:!1})},420:function(t,e,n){"use strict";n(406)},421:function(t,e,n){var r=n(36)((function(i){return i[1]}));r.push([t.i,".render-view{background:var(--color-lighten-1);min-height:100%;padding:1rem}.render-view>:first-child{margin-top:0}",""]),r.locals={},t.exports=r},430:function(t,e,n){"use strict";n.r(e);var r=n(16),o=n(439),c=n.n(o),l=Object(r.a)({props:{input:{type:String,required:!0}},computed:{htmlOutput:function(){var t=this.$md(this.input);return this.$store.getters["settings/sanitize"]?c.a.sanitize(t):t}}}),d=(n(420),n(10)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"render-view",domProps:{innerHTML:t._s(t.htmlOutput)}})}),[],!1,null,null,null);e.default=component.exports}}]);