(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{347:function(e,n,t){var content=t(358);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(85).default)("3e4b66b2",content,!0,{sourceMap:!1})},357:function(e,n,t){"use strict";t(347)},358:function(e,n,t){var r=t(46)(!1);r.push([e.i,"\n.tabs[data-v-535ce578] {\n  display: flex;\n  flex-direction: column;\n}\n.tabs__header[data-v-535ce578] {\n  display: flex;\n  flex-wrap: nowrap;\n  list-style: none;\n  margin: 0;\n  min-height: 4.125rem;\n  padding: 1rem;\n  overflow-x: auto;\n}\nli[data-v-535ce578] {\n  color: var(--text-primary);\n  cursor: pointer;\n  background: var(--color-lighten-2);\n  border-radius: var(--border-radius-medium);\n  display: flex;\n  justify-content: center;\n  min-width: 6rem;\n  text-align: center;\n  white-space: nowrap;\n  margin-left: 1rem;\n}\nli > span[data-v-535ce578] {\n  margin: 0.5rem 1rem 0.5rem 1rem;\n}\nli.selected[data-v-535ce578] {\n  background: var(--color-lighten-3);\n}\nli.add[data-v-535ce578] {\n  min-width: unset;\n}\n",""]),e.exports=r},365:function(e,n,t){"use strict";t.r(n);var r={props:{mode:{type:String,default:"light"}},data:function(){return{selectedIndex:0,tabs:[]}},created:function(){this.tabs=this.$children},mounted:function(){this.selectTab(0)},methods:{selectTab:function(i){var e=this.tabs[this.selectedIndex];void 0!==e&&(e.isActive=!1),this.selectedIndex=i;var n=this.tabs[this.selectedIndex];void 0!==n&&(n.isActive=!0)}}},c=(t(357),t(55)),component=Object(c.a)(r,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"tabs"},[t("ul",{staticClass:"tabs__header"},[e._l(e.tabs,(function(n,r){return t("li",{key:n.id,staticClass:"darken-on-focus",class:{selected:r===e.selectedIndex},on:{click:function(n){return e.selectTab(r)}}},[t("span",[e._v(e._s(n.title))])])})),e._v(" "),t("li",{staticClass:"darken-on-focus add",on:{click:function(n){return e.$emit("add")}}},[t("span",[e._v("+")])])],2),e._v(" "),e._t("default")],2)}),[],!1,null,"535ce578",null);n.default=component.exports}}]);