(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{447:function(e,o,r){"use strict";r.r(o),r.d(o,"colorModes",(function(){return n}));var n=["system","light","dark"],t={setup:function(e,o){return{colorModes:n}}},l=t,c=r(10),component=Object(c.a)(l,(function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("select",{directives:[{name:"model",rawName:"v-model",value:e.$colorMode.preference,expression:"$colorMode.preference"}],on:{change:function(o){var r=Array.prototype.filter.call(o.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.$colorMode,"preference",o.target.multiple?r:r[0])}}},e._l(e.colorModes,(function(o){return r("option",{key:o,domProps:{value:o}},[e._v("\n    "+e._s(e.$t("color-modes."+o))+"\n  ")])})),0)}),[],!1,null,null,null);o.default=component.exports}}]);