(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{387:function(e,o,r){var content=r(400);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(44).default)("32e5f663",content,!0,{sourceMap:!1})},399:function(e,o,r){"use strict";r(387)},400:function(e,o,r){var t=r(43)((function(i){return i[1]}));t.push([e.i,".color-mode-select[data-v-42e9289f]{all:unset;border-radius:var(--border-radius-large);box-shadow:var(--shadow-depressed);min-width:4rem;padding:.5em;text-align:center}",""]),t.locals={},e.exports=t},407:function(e,o,r){"use strict";r.r(o),r.d(o,"colorModes",(function(){return t}));var t=["system","light","dark"],n={setup:function(e,o){return{colorModes:t}}},l=n,c=(r(399),r(17)),component=Object(c.a)(l,(function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("select",{directives:[{name:"model",rawName:"v-model",value:e.$colorMode.preference,expression:"$colorMode.preference"}],staticClass:"color-mode-select",on:{change:function(o){var r=Array.prototype.filter.call(o.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.$colorMode,"preference",o.target.multiple?r:r[0])}}},e._l(e.colorModes,(function(o){return r("option",{key:o,domProps:{value:o}},[e._v("\n    "+e._s(e.$t("color-modes."+o))+"\n  ")])})),0)}),[],!1,null,"42e9289f",null);o.default=component.exports}}]);