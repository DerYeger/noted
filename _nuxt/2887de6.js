(window.webpackJsonp=window.webpackJsonp||[]).push([[12,5,7,8,9,18],{393:function(t,e,n){var content=n(396);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("3a58cb65",content,!0,{sourceMap:!1})},394:function(t,e,n){var content=n(398);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("6ae3207a",content,!0,{sourceMap:!1})},395:function(t,e,n){"use strict";n(393)},396:function(t,e,n){var r=n(36)((function(i){return i[1]}));r.push([t.i,".card__title{font-size:var(--fs-large);padding:.25em}",""]),r.locals={},t.exports=r},397:function(t,e,n){"use strict";n(394)},398:function(t,e,n){var r=n(36)((function(i){return i[1]}));r.push([t.i,".card[data-v-689dcb44]{border-radius:var(--border-radius-medium);padding:.5rem}",""]),r.locals={},t.exports=r},399:function(t,e,n){"use strict";n.r(e);n(395);var r=n(10),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"card__title unselectable"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},400:function(t,e,n){"use strict";n.r(e);n(397);var r=n(10),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"card concave elevated"},[t._t("default")],2)}),[],!1,null,"689dcb44",null);e.default=component.exports},405:function(t,e,n){var content=n(422);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("66f13099",content,!0,{sourceMap:!1})},406:function(t,e,n){var content=n(424);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("cbedd926",content,!0,{sourceMap:!1})},421:function(t,e,n){"use strict";n(405)},422:function(t,e,n){var r=n(36)((function(i){return i[1]}));r.push([t.i,".card__content[data-v-ccfef3e6]{padding:1rem}.card__title+.card__content[data-v-ccfef3e6]{padding-top:0}",""]),r.locals={},t.exports=r},423:function(t,e,n){"use strict";n(406)},424:function(t,e,n){var r=n(36)((function(i){return i[1]}));r.push([t.i,'input[type=checkbox][data-v-59f11b65]{all:unset;background:var(--color-darken-3);border-radius:var(--border-radius-medium);box-shadow:var(--shadow-depressed);cursor:pointer;transition:background var(--anim-medium) ease}input[type=checkbox][data-v-59f11b65],input[type=checkbox][data-v-59f11b65]:checked:after{display:inline-flex;height:1rem;width:1rem}input[type=checkbox][data-v-59f11b65]:checked{background:var(--color-secondary);box-shadow:var(--shadow-elevated)}input[type=checkbox][data-v-59f11b65]:checked:after{align-items:center;content:"✕";font-size:var(--fs-small);justify-content:center;position:relative;text-align:center}',""]),r.locals={},t.exports=r},431:function(t,e,n){"use strict";n.r(e);var r=n(16),c=Object(r.a)({props:{value:{type:Boolean,required:!0}}}),l=(n(423),n(10)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{attrs:{type:"checkbox"},on:{change:function(e){return t.$emit("input",e.target.checked)}}})}),[],!1,null,"59f11b65",null);e.default=component.exports},434:function(t,e,n){"use strict";n.r(e);n(421);var r=n(10),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"card__content"},[t._t("default")],2)}),[],!1,null,"ccfef3e6",null);e.default=component.exports},448:function(t,e,n){var content=n(462);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("3889cfae",content,!0,{sourceMap:!1})},455:function(t,e,n){"use strict";n.r(e);var r=n(16),c=Object(r.a)({computed:{sanitize:{get:function(){return this.$store.getters["settings/sanitize"]},set:function(t){this.$store.commit("settings/setSanitize",t)}}}}),l=n(10),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("Checkbox",{model:{value:t.sanitize,callback:function(e){t.sanitize=e},expression:"sanitize"}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Checkbox:n(431).default})},461:function(t,e,n){"use strict";n(448)},462:function(t,e,n){var r=n(36)((function(i){return i[1]}));r.push([t.i,".general-settings ul[data-v-51ffec24]{padding:0;margin:0}.general-settings li[data-v-51ffec24]{align-items:center;display:flex;gap:1rem;list-style:none}.general-settings li+li[data-v-51ffec24]{margin-top:1rem}",""]),r.locals={},t.exports=r},470:function(t,e,n){"use strict";n.r(e);n(461);var r=n(10),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Card",{staticClass:"general-settings"},[n("CardTitle",[t._v(t._s(t.$t("settings.general.title")))]),t._v(" "),n("CardContent",[n("ul",[n("li",[n("label",{attrs:{for:"sanitize"}},[t._v("\n          "+t._s(t.$t("settings.general.sanitize"))+"\n        ")]),t._v(" "),n("SanitizeCheckbox",{attrs:{id:"sanitize"}})],1)])])],1)}),[],!1,null,"51ffec24",null);e.default=component.exports;installComponents(component,{CardTitle:n(399).default,SanitizeCheckbox:n(455).default,CardContent:n(434).default,Card:n(400).default})}}]);