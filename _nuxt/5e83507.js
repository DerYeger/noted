(window.webpackJsonp=window.webpackJsonp||[]).push([[18,9],{413:function(e,t,n){var content=n(430);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(34).default)("cbedd926",content,!0,{sourceMap:!1})},429:function(e,t,n){"use strict";n(413)},430:function(e,t,n){var r=n(33)((function(i){return i[1]}));r.push([e.i,'input[type=checkbox][data-v-59f11b65]{all:unset;background:var(--color-darken-3);border-radius:var(--border-radius-medium);box-shadow:var(--shadow-depressed);cursor:pointer;transition:background var(--anim-medium) ease}input[type=checkbox][data-v-59f11b65],input[type=checkbox][data-v-59f11b65]:checked:after{display:inline-flex;height:1rem;width:1rem}input[type=checkbox][data-v-59f11b65]:checked{background:var(--color-secondary);box-shadow:var(--shadow-elevated)}input[type=checkbox][data-v-59f11b65]:checked:after{align-items:center;content:"✕";font-size:var(--fs-small);justify-content:center;position:relative;text-align:center}',""]),r.locals={},e.exports=r},436:function(e,t,n){"use strict";n.r(t);var r=n(14),o=Object(r.a)({props:{value:{type:Boolean,required:!0}}}),c=(n(429),n(7)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{attrs:{type:"checkbox"},on:{change:function(t){return e.$emit("input",t.target.checked)}}})}),[],!1,null,"59f11b65",null);t.default=component.exports},456:function(e,t,n){"use strict";n.r(t);var r=n(14),o=Object(r.a)({computed:{sanitize:{get:function(){return this.$store.getters["settings/sanitize"]},set:function(e){this.$store.commit("settings/setSanitize",e)}}}}),c=n(7),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("Checkbox",{model:{value:e.sanitize,callback:function(t){e.sanitize=t},expression:"sanitize"}})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Checkbox:n(436).default})}}]);