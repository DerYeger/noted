(window.webpackJsonp=window.webpackJsonp||[]).push([[14,5,7,8,9,10,20],{436:function(t,e,n){var content=n(439);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("262cbb2b",content,!0,{sourceMap:!1})},437:function(t,e,n){var content=n(443);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("1ad90054",content,!0,{sourceMap:!1})},438:function(t,e,n){"use strict";n(436)},439:function(t,e,n){var r=n(34)(!1);r.push([t.i,".card[data-v-689dcb44]{border-radius:var(--border-radius-medium);padding:.5rem}",""]),t.exports=r},440:function(t,e,n){"use strict";n.r(e);n(438);var r=n(9),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"card concave elevated"},[t._t("default")],2)}),[],!1,null,"689dcb44",null);e.default=component.exports},441:function(t,e,n){var content=n(448);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("4d19c18a",content,!0,{sourceMap:!1})},442:function(t,e,n){"use strict";n(437)},443:function(t,e,n){var r=n(34)(!1);r.push([t.i,".card__title{font-size:var(--fs-large);padding:.25em}",""]),t.exports=r},444:function(t,e,n){"use strict";n.r(e);n(442);var r=n(9),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"card__title unselectable"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},447:function(t,e,n){"use strict";n(441)},448:function(t,e,n){var r=n(34)(!1);r.push([t.i,".card__content[data-v-ccfef3e6]{padding:1rem}.card__title+.card__content[data-v-ccfef3e6]{padding-top:0}",""]),t.exports=r},451:function(t,e,n){var content=n(465);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("309cea4c",content,!0,{sourceMap:!1})},453:function(t,e,n){"use strict";n.r(e);n(447);var r=n(9),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"card__content"},[t._t("default")],2)}),[],!1,null,"ccfef3e6",null);e.default=component.exports},464:function(t,e,n){"use strict";n(451)},465:function(t,e,n){var r=n(34)(!1);r.push([t.i,'input[type=checkbox][data-v-15cb19b2]{all:unset;background:var(--color-darken-3);border-radius:var(--border-radius-medium);box-shadow:var(--shadow-depressed);cursor:pointer;transition:background var(--anim-medium) ease}input[type=checkbox][data-v-15cb19b2],input[type=checkbox][data-v-15cb19b2]:checked:after{display:inline-flex;height:1rem;width:1rem}input[type=checkbox][data-v-15cb19b2]:checked{background:var(--color-secondary);box-shadow:var(--shadow-elevated)}input[type=checkbox][data-v-15cb19b2]:checked:after{align-items:center;content:"✕";font-size:var(--fs-small);justify-content:center;position:relative;text-align:center}',""]),t.exports=r},470:function(t,e,n){"use strict";n.r(e);var r=n(17),c=Object(r.a)({props:{value:{type:Boolean,required:!0}}}),l=(n(464),n(9)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{attrs:{type:"checkbox"},domProps:{checked:t.value},on:{change:function(e){return t.$emit("input",e.target.checked)}}})}),[],!1,null,"15cb19b2",null);e.default=component.exports},484:function(t,e,n){var content=n(505);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("40072eee",content,!0,{sourceMap:!1})},492:function(t,e,n){"use strict";n.r(e);var r=n(17),c=Object(r.a)({computed:{sanitize:{get:function(){return this.$store.getters["settings/sanitize"]},set:function(t){this.$store.commit("settings/setSanitize",t)}}}}),l=n(9),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("Checkbox",{model:{value:t.sanitize,callback:function(e){t.sanitize=e},expression:"sanitize"}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Checkbox:n(470).default})},493:function(t,e,n){"use strict";n.r(e);var r=n(17),c=Object(r.a)({methods:{clearData:function(){this.$store.dispatch("reset")}}}),l=n(9),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("Button",{attrs:{color:"warn",small:""},on:{click:t.clearData}},[t._v("\n  "+t._s(t.$t("settings.general.clear-data"))+"\n")])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(179).default})},504:function(t,e,n){"use strict";n(484)},505:function(t,e,n){var r=n(34)(!1);r.push([t.i,".general-settings ul[data-v-e20ab9c6]{padding:0;margin:0}.general-settings li[data-v-e20ab9c6]{align-items:center;display:flex;gap:1rem;list-style:none}.general-settings li+li[data-v-e20ab9c6]{margin-top:1rem}",""]),t.exports=r},515:function(t,e,n){"use strict";n.r(e);n(504);var r=n(9),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Card",{staticClass:"general-settings"},[n("CardTitle",[t._v(t._s(t.$t("settings.general.title")))]),t._v(" "),n("CardContent",[n("ul",[n("li",[n("label",{attrs:{for:"sanitize"}},[t._v("\n          "+t._s(t.$t("settings.general.sanitize"))+"\n        ")]),t._v(" "),n("SanitizeCheckbox",{attrs:{id:"sanitize"}})],1),t._v(" "),n("li",[n("ClearDataButton")],1)])])],1)}),[],!1,null,"e20ab9c6",null);e.default=component.exports;installComponents(component,{CardTitle:n(444).default,SanitizeCheckbox:n(492).default,ClearDataButton:n(493).default,CardContent:n(453).default,Card:n(440).default})}}]);