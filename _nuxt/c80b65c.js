(window.webpackJsonp=window.webpackJsonp||[]).push([[4,5,7,8,10,16,21],{395:function(t,e,n){var content=n(398);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("3a58cb65",content,!0,{sourceMap:!1})},396:function(t,e,n){var content=n(400);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("6ae3207a",content,!0,{sourceMap:!1})},397:function(t,e,n){"use strict";n(395)},398:function(t,e,n){var r=n(36)((function(i){return i[1]}));r.push([t.i,".card__title{font-size:var(--fs-large);padding:.25em}",""]),r.locals={},t.exports=r},399:function(t,e,n){"use strict";n(396)},400:function(t,e,n){var r=n(36)((function(i){return i[1]}));r.push([t.i,".card[data-v-689dcb44]{border-radius:var(--border-radius-medium);padding:.5rem}",""]),r.locals={},t.exports=r},401:function(t,e,n){"use strict";n.r(e);n(397);var r=n(10),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"card__title unselectable"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},402:function(t,e,n){"use strict";n.r(e);n(399);var r=n(10),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"card concave elevated"},[t._t("default")],2)}),[],!1,null,"689dcb44",null);e.default=component.exports},407:function(t,e,n){var content=n(423);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("66f13099",content,!0,{sourceMap:!1})},409:function(t,e,n){var content=n(427);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("52b86cd2",content,!0,{sourceMap:!1})},422:function(t,e,n){"use strict";n(407)},423:function(t,e,n){var r=n(36)((function(i){return i[1]}));r.push([t.i,".card__content[data-v-ccfef3e6]{padding:1rem}.card__title+.card__content[data-v-ccfef3e6]{padding-top:0}",""]),r.locals={},t.exports=r},426:function(t,e,n){"use strict";n(409)},427:function(t,e,n){var r=n(36)((function(i){return i[1]}));r.push([t.i,"input[type=number]{-moz-appearance:textfield}input::-webkit-inner-spin-button,input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}",""]),r.locals={},t.exports=r},432:function(t,e,n){"use strict";n.r(e);n(126);var r=n(16),l=Object(r.a)({props:{value:{type:Number,required:!0}}}),o=(n(426),n(10)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{attrs:{type:"number"},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",+e.target.value)}}})}),[],!1,null,null,null);e.default=component.exports},434:function(t,e,n){"use strict";n.r(e);n(422);var r=n(10),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"card__content"},[t._t("default")],2)}),[],!1,null,"ccfef3e6",null);e.default=component.exports},443:function(t,e,n){var content=n(456);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("92295eaa",content,!0,{sourceMap:!1})},449:function(t,e,n){"use strict";n.r(e),n.d(e,"colorModes",(function(){return r}));var r=["system","light","dark"],l={setup:function(t,e){return{colorModes:r}}},o=l,c=n(10),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("select",{directives:[{name:"model",rawName:"v-model",value:t.$colorMode.preference,expression:"$colorMode.preference"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.$colorMode,"preference",e.target.multiple?n:n[0])}}},t._l(t.colorModes,(function(e){return n("option",{key:e,domProps:{value:e}},[t._v("\n    "+t._s(t.$t("color-modes."+e))+"\n  ")])})),0)}),[],!1,null,null,null);e.default=component.exports},450:function(t,e,n){"use strict";n.r(e);var r=n(16),l=Object(r.a)({computed:{tabSize:{get:function(){return this.$store.getters["settings/tabSize"]},set:function(t){var e=t>=0?Math.round(t):0;this.$store.commit("settings/setTabSize",e)}}}}),o=n(10),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("NumberInput",{staticStyle:{"text-align":"center",width:"4rem"},attrs:{min:"0"},model:{value:t.tabSize,callback:function(e){t.tabSize=e},expression:"tabSize"}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NumberInput:n(432).default})},455:function(t,e,n){"use strict";n(443)},456:function(t,e,n){var r=n(36)((function(i){return i[1]}));r.push([t.i,".appearance-settings ul[data-v-4a33f2a0]{padding:0;margin:0}.appearance-settings li[data-v-4a33f2a0]{align-items:center;display:flex;gap:1rem;list-style:none}.appearance-settings li+li[data-v-4a33f2a0]{margin-top:1rem}",""]),r.locals={},t.exports=r},465:function(t,e,n){"use strict";n.r(e);n(455);var r=n(10),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Card",{staticClass:"appearance-settings"},[n("CardTitle",[t._v(t._s(t.$t("settings.appearance.title")))]),t._v(" "),n("CardContent",[n("ul",[n("li",[n("label",{attrs:{for:"color-mode"}},[t._v("\n          "+t._s(t.$t("settings.appearance.color-mode"))+"\n        ")]),t._v(" "),n("ColorModeSelect",{attrs:{id:"color-mode"}})],1),t._v(" "),n("li",[n("label",{attrs:{for:"tab-size"}},[t._v(t._s(t.$t("settings.appearance.tab-size")))]),t._v(" "),n("TabSizeInput",{attrs:{id:"tab-size"}})],1)])])],1)}),[],!1,null,"4a33f2a0",null);e.default=component.exports;installComponents(component,{CardTitle:n(401).default,ColorModeSelect:n(449).default,TabSizeInput:n(450).default,CardContent:n(434).default,Card:n(402).default})}}]);