(window.webpackJsonp=window.webpackJsonp||[]).push([[23,18],{432:function(t,e,n){var content=n(450);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("6bf3040e",content,!0,{sourceMap:!1})},449:function(t,e,n){"use strict";n(432)},450:function(t,e,n){var r=n(34)(!1);r.push([t.i,"input[type=number]{-moz-appearance:textfield}input::-webkit-inner-spin-button,input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}",""]),t.exports=r},455:function(t,e,n){"use strict";n.r(e);n(101);var r=n(17),o=Object(r.a)({props:{value:{type:Number,required:!0}}}),l=(n(449),n(10)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{attrs:{type:"number"},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",+e.target.value)}}})}),[],!1,null,null,null);e.default=component.exports},475:function(t,e,n){"use strict";n.r(e);var r=n(17),o=Object(r.a)({computed:{tabSize:{get:function(){return this.$store.getters["settings/tabSize"]},set:function(t){var e=t>=0?Math.round(t):0;this.$store.commit("settings/setTabSize",e)}}}}),l=n(10),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("NumberInput",{staticStyle:{"text-align":"center",width:"4rem"},attrs:{min:"0"},model:{value:t.tabSize,callback:function(e){t.tabSize=e},expression:"tabSize"}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NumberInput:n(455).default})}}]);