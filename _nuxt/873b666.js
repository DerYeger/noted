(window.webpackJsonp=window.webpackJsonp||[]).push([[4,5,7,8,11,18,22],{460:function(t,e,n){var content=n(463);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("262cbb2b",content,!0,{sourceMap:!1})},461:function(t,e,n){var content=n(467);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("1ad90054",content,!0,{sourceMap:!1})},462:function(t,e,n){"use strict";n(460)},463:function(t,e,n){var r=n(32)((function(i){return i[1]}));r.push([t.i,".card[data-v-689dcb44]{border-radius:var(--border-radius-medium);padding:.5rem}",""]),r.locals={},t.exports=r},464:function(t,e,n){"use strict";n.r(e);n(462);var r=n(7),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"card concave elevated"},[t._t("default")],2)}),[],!1,null,"689dcb44",null);e.default=component.exports},465:function(t,e,n){var content=n(472);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("4d19c18a",content,!0,{sourceMap:!1})},466:function(t,e,n){"use strict";n(461)},467:function(t,e,n){var r=n(32)((function(i){return i[1]}));r.push([t.i,".card__title{font-size:var(--fs-large);padding:.25em}",""]),r.locals={},t.exports=r},468:function(t,e,n){"use strict";n.r(e);n(466);var r=n(7),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"card__title unselectable"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},471:function(t,e,n){"use strict";n(465)},472:function(t,e,n){var r=n(32)((function(i){return i[1]}));r.push([t.i,".card__content[data-v-ccfef3e6]{padding:1rem}.card__title+.card__content[data-v-ccfef3e6]{padding-top:0}",""]),r.locals={},t.exports=r},476:function(t,e,n){var content=n(491);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("5ec644f0",content,!0,{sourceMap:!1})},477:function(t,e,n){"use strict";n.r(e);n(471);var r=n(7),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"card__content"},[t._t("default")],2)}),[],!1,null,"ccfef3e6",null);e.default=component.exports},490:function(t,e,n){"use strict";n(476)},491:function(t,e,n){var r=n(32)((function(i){return i[1]}));r.push([t.i,"input[type=number]{-moz-appearance:textfield}input::-webkit-inner-spin-button,input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}",""]),r.locals={},t.exports=r},495:function(t,e,n){"use strict";n.r(e);n(114);var r=n(14),l=Object(r.a)({props:{value:{type:Number,required:!0}}}),o=(n(490),n(7)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{attrs:{type:"number"},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",+e.target.value)}}})}),[],!1,null,null,null);e.default=component.exports},507:function(t,e,n){var content=n(527);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("49d0a65c",content,!0,{sourceMap:!1})},514:function(t,e,n){"use strict";n.r(e);var r={setup:function(t,e){return{colorModes:["system","light","dark"]}}},l=r,o=n(7),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("select",{directives:[{name:"model",rawName:"v-model",value:t.$colorMode.preference,expression:"$colorMode.preference"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.$colorMode,"preference",e.target.multiple?n:n[0])}}},t._l(t.colorModes,(function(e){return n("option",{key:e,domProps:{value:e}},[t._v("\n    "+t._s(t.$t("color-modes."+e))+"\n  ")])})),0)}),[],!1,null,null,null);e.default=component.exports},515:function(t,e,n){"use strict";n.r(e);var r=n(14),l=Object(r.a)({computed:{tabSize:{get:function(){return this.$store.getters["settings/tabSize"]},set:function(t){var e=t>=0?Math.round(t):0;this.$store.commit("settings/setTabSize",e)}}}}),o=n(7),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("NumberInput",{staticStyle:{"text-align":"center",width:"4rem"},attrs:{min:"0"},model:{value:t.tabSize,callback:function(e){t.tabSize=e},expression:"tabSize"}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NumberInput:n(495).default})},526:function(t,e,n){"use strict";n(507)},527:function(t,e,n){var r=n(32)((function(i){return i[1]}));r.push([t.i,".appearance-settings ul[data-v-4a33f2a0]{padding:0;margin:0}.appearance-settings li[data-v-4a33f2a0]{align-items:center;display:flex;gap:1rem;list-style:none}.appearance-settings li+li[data-v-4a33f2a0]{margin-top:1rem}",""]),r.locals={},t.exports=r},538:function(t,e,n){"use strict";n.r(e);n(526);var r=n(7),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Card",{staticClass:"appearance-settings"},[n("CardTitle",[t._v(t._s(t.$t("settings.appearance.title")))]),t._v(" "),n("CardContent",[n("ul",[n("li",[n("label",{attrs:{for:"color-mode"}},[t._v("\n          "+t._s(t.$t("settings.appearance.color-mode"))+"\n        ")]),t._v(" "),n("ColorModeSelect",{attrs:{id:"color-mode"}})],1),t._v(" "),n("li",[n("label",{attrs:{for:"tab-size"}},[t._v(t._s(t.$t("settings.appearance.tab-size")))]),t._v(" "),n("TabSizeInput",{attrs:{id:"tab-size"}})],1)])])],1)}),[],!1,null,"4a33f2a0",null);e.default=component.exports;installComponents(component,{CardTitle:n(468).default,ColorModeSelect:n(514).default,TabSizeInput:n(515).default,CardContent:n(477).default,Card:n(464).default})}}]);