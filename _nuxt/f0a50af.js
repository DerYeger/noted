(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{144:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(360);function o(){return Object(n.a)()}},149:function(e,t,r){"use strict";t.a=function(e,t){t("host","https://noted.yeger.eu")}},150:function(e,t,r){"use strict";var n=r(151),o=r(113);r(331),r(332),r(333),r(334),r(335),r(336),r(337),r(338),r(339),r(340),r(341),r(342),r(343),r(344),r(345),r(346),r(347),r(348),r(349),r(350),r(351),r(352),r(353),r(354),r(355);n.setOptions({highlight:function(code,e){return o.languages[e]?o.highlight(code,o.languages[e],e):code}}),t.a=function(e,t){t("md",n.parse)}},152:function(e,t,r){"use strict";var n=r(1),o=r(225);n.default.use(o.a)},153:function(e,t,r){"use strict";var n=r(226);t.a=function(e){Object(n.a)()(e.store)}},154:function(e,t,r){"use strict";var n=r(6);r(41);function o(){return(o=Object(n.a)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.$workbox;case 2:if(r=e.sent){e.next=6;break}return console.debug("Workbox couldn't be loaded."),e.abrupt("return");case 6:r.addEventListener("installed",(function(e){if(console.log(e.isUpdate),!0===e.isUpdate)return console.debug("There is an update for the PWA, reloading..."),void window.location.reload();console.debug("The PWA is on the latest version.")}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.a=function(e){return o.apply(this,arguments)}},155:function(e,t,r){"use strict";r.r(t);var n=r(18),o=Object(n.a)({props:{color:{type:String,default:"lighten-3"},small:{type:Boolean,default:!1}},computed:{colorVar:function(){return"var(--color-".concat(this.color,")")}}}),l=(r(303),r(17)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("button",{staticClass:"darken-on-focus unselectable",class:{small:e.small},style:{"--button-color":e.colorVar},on:{click:function(t){return e.$emit("click")}}},[e._t("default")],2)}),[],!1,null,"c2c710aa",null);t.default=component.exports;installComponents(component,{Button:r(155).default})},208:function(e,t,r){var content=r(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(44).default)("2129e0fa",content,!0,{sourceMap:!1})},210:function(e,t,r){var content=r(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(44).default)("3c59b68d",content,!0,{sourceMap:!1})},211:function(e,t,r){var content=r(302);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(44).default)("0123588a",content,!0,{sourceMap:!1})},212:function(e,t,r){var content=r(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(44).default)("152ef7f0",content,!0,{sourceMap:!1})},213:function(e,t,r){var content=r(306);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(44).default)("5d8130fa",content,!0,{sourceMap:!1})},214:function(e,t,r){var content=r(308);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(44).default)("3c915f20",content,!0,{sourceMap:!1})},215:function(e,t,r){var content=r(310);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(44).default)("298df948",content,!0,{sourceMap:!1})},216:function(e,t,r){var content=r(312);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(44).default)("44c19b66",content,!0,{sourceMap:!1})},217:function(e,t,r){"use strict";r.r(t);var n=r(18),o=Object(n.a)({props:{value:{type:Boolean,required:!0}}}),l=(r(301),r(17)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"hamburger unselectable",class:{hamburger__active:e.value},on:{click:function(t){return e.$emit("input",!e.value)}}},[r("div",{staticClass:"hamburger__top"}),e._v(" "),r("div",{staticClass:"hamburger__middle"}),e._v(" "),r("div",{staticClass:"hamburger__bottom"})])}),[],!1,null,"1341ab98",null);t.default=component.exports;installComponents(component,{Button:r(155).default})},229:function(e,t,r){"use strict";var n=r(18),o=Object(n.a)({data:function(){return{sidebarOpen:!1}}}),l=(r(299),r(17)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("AppWrapper",[r("AppHeader",[r("HamburgerButton",{staticStyle:{margin:"0 1rem 0 0.5rem"},model:{value:e.sidebarOpen,callback:function(t){e.sidebarOpen=t},expression:"sidebarOpen"}})],1),e._v(" "),r("div",{staticClass:"app__content"},[r("AppSidebar",{model:{value:e.sidebarOpen,callback:function(t){e.sidebarOpen=t},expression:"sidebarOpen"}}),e._v(" "),r("main",{staticClass:"depressed",class:{"rounded-top-left":e.sidebarOpen}},[r("Nuxt")],1)],1)],1)}),[],!1,null,"0ab943a9",null);t.a=component.exports;installComponents(component,{HamburgerButton:r(217).default,AppHeader:r(359).default,AppSidebar:r(356).default,AppWrapper:r(358).default})},231:function(e,t,r){r(232),r(233),e.exports=r(236)},290:function(e,t,r){"use strict";r(208)},291:function(e,t,r){var n=r(43)((function(i){return i[1]}));n.push([e.i,".app__error[data-v-4d55bfde]{align-items:center;display:flex;flex-direction:column;justify-content:center;height:100%;width:100%}",""]),n.locals={},e.exports=n},297:function(e,t,r){var content=r(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(44).default)("17bc9ac2",content,!0,{sourceMap:!1})},298:function(e,t,r){var n=r(43)((function(i){return i[1]}));n.push([e.i,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */*,:after,:before{box-sizing:border-box}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:border-box;height:0;overflow:visible}pre{font-family:monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}:root{--prism-green:#6a8759;--prism-orange:#cc7832;--prism-white:var(--text-primary);--prism-yellow:#ffc66d;--prism-foreground:var(--prism-white);--prism-background:transparent;--prism-comment:var(--color-lighten-4);--prism-string:var(--prism-green);--prism-literal:var(--prism-orange);--prism-keyword:var(--prism-orange);--prism-function:var(--prism-yellow);--prism-deleted:#a14f55;--prism-class:#2b91af;--prism-builtin:#a52727;--prism-property:var(--prism-yellow);--prism-namespace:#c96880;--prism-punctuation:var(--prism-white);--prism-decorator:#bd8f8f;--prism-json-property:#698c96;--prism-tab-size:var(--tab-size)}pre{border-radius:var(--border-radius-medium);padding:1em;overflow-x:auto}:root{--anim-medium:0.25s;--anim-short:0.1s;--border-radius-medium:0.25rem;--border-radius-large:0.5rem;--border-radius-xl:1.5rem;--color-background:#403235;--color-primary:#462a39;--color-secondary:#637949;--color-secondary-darken:#39462a;--color-darken-1:rgba(0,0,0,0.2);--color-darken-2:rgba(0,0,0,0.3);--color-darken-3:rgba(0,0,0,0.4);--color-lighten-1:hsla(0,0%,100%,0.05);--color-lighten-2:hsla(0,0%,100%,0.1);--color-lighten-3:hsla(0,0%,100%,0.2);--color-lighten-4:hsla(0,0%,100%,0.3);--color-warn:#bf3f3f;--fs-large:1.25rem;--fs-medium:1rem;--fs-small:0.8rem;--glass-blur:0.25rem;--shadow-depressed:0.5rem 0.5rem 0.75rem 0 var(--color-darken-3) inset,-0.125rem -0.125rem 1rem 0 var(--color-lighten-1) inset;--shadow-elevated:0.5rem 0.5rem 0.75rem 0 var(--color-darken-2),-0.125rem -0.125rem 1rem 0 var(--color-lighten-2);--text-primary:#fff}.dark-mode{--color-background:#212121}.darken-on-focus{transition:filter .25s ease}.darken-on-focus:focus-visible,.darken-on-focus:hover{filter:brightness(80%)}.glass{filter:blur(var(--glass-blur))}.glass-backdrop{backdrop-filter:blur(var(--glass-blur))}.elevated,pre{box-shadow:var(--shadow-elevated)}.depressed{box-shadow:var(--shadow-depressed)}::-webkit-scrollbar{width:.5rem;height:.5rem}::-webkit-scrollbar-track{border-radius:var(--border-radius-medium);box-shadow:inset 0 0 6px rgba(0,0,0,.3)}::-webkit-scrollbar-thumb{background:var(--color-lighten-3);border-radius:var(--border-radius-medium);transition:background .25s ease}::-webkit-scrollbar-thumb:hover{background:var(--color-lighten-4)}body::-webkit-scrollbar-track{background:var(--color-primary);border-radius:0}h1,h2,h3,h4,h5,p{margin-top:0}a{color:var(--text-primary)}.text--secondary,input::placeholder,textarea::placeholder{color:var(--color-lighten-4);font-style:italic}.h-100{height:100%}.d-flex{display:flex}.flex-column{flex-direction:column}.ma-4{margin:1rem}.mx-4{margin-left:1rem;margin-right:1rem}.my-4{margin-bottom:1rem}.mt-4,.my-4{margin-top:1rem}.mb-4{margin-bottom:1rem}.pa-4{padding:1rem}.px-4{padding-left:1rem;padding-right:1rem}.py-4{padding-bottom:1rem}.pt-4,.py-4{padding-top:1rem}.pb-4{padding-bottom:1rem}#__layout,#__nuxt,body,html{height:100%}body{background:var(--color-background);color:var(--text-primary)}:not(:is(pre *,code *)){font-family:"Roboto",sans-serif}.splitpanes__splitter{background:var(--color-lighten-2);border-radius:var(--border-radius-large) 0 0 0;cursor:col-resize;position:relative;touch-action:none;width:1rem}.splitpanes__splitter:after,.splitpanes__splitter:before{background:var(--color-lighten-4);content:"";height:2rem;left:50%;position:absolute;top:50%;transform:translateY(-50%);width:1px}.splitpanes__splitter:before{margin-left:-2px}.splitpanes__splitter:after{margin-left:1px}.unselectable{-webkit-touch-callout:none!important;-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.no-touch-callout{-webkit-touch-callout:none}',""]),n.locals={},e.exports=n},299:function(e,t,r){"use strict";r(210)},300:function(e,t,r){var n=r(43)((function(i){return i[1]}));n.push([e.i,".app__content[data-v-0ab943a9]{display:flex;flex-grow:1;overflow-y:auto;width:100%}main[data-v-0ab943a9]{background:var(--color-lighten-1);flex-grow:1;height:100%;overflow-x:hidden;transition:var(--anim-medium)}@media only screen and (min-width:601px){.rounded-top-left[data-v-0ab943a9]{border-top-left-radius:var(--border-radius-large)}}",""]),n.locals={},e.exports=n},301:function(e,t,r){"use strict";r(211)},302:function(e,t,r){var n=r(43)((function(i){return i[1]}));n.push([e.i,".hamburger[data-v-1341ab98]{--hamburger-height:1.5rem;--hamburger-part-height:calc(var(--hamburger-height)/8);--hamburger-part-margin:calc(var(--hamburger-height)/5 - var(--hamburger-part-height)*3/5);--hamburger-width:1.25rem;all:unset;cursor:pointer;display:inline-flex;flex-direction:column;height:var(--hamburger-height);justify-content:space-evenly;width:var(--hamburger-width)}.hamburger__bottom[data-v-1341ab98],.hamburger__middle[data-v-1341ab98],.hamburger__top[data-v-1341ab98]{background-color:var(--text-primary);border-radius:var(--border-radius-large);filter:brightness(90%);height:var(--hamburger-part-height);margin-bottom:var(--hamburger-part-margin);margin-top:var(--hamburger-part-margin);transform-origin:50% 50%;transition:var(--anim-medium);width:var(--hamburger-width)}.hamburger__active .hamburger__top[data-v-1341ab98]{transform:translateY(calc(var(--hamburger-height)/3)) rotate(45deg)}.hamburger__active .hamburger__middle[data-v-1341ab98]{opacity:0;transform:scaleX(0)}.hamburger__active .hamburger__bottom[data-v-1341ab98]{transform:translateY(calc(var(--hamburger-height)/-3)) rotate(-45deg)}",""]),n.locals={},e.exports=n},303:function(e,t,r){"use strict";r(212)},304:function(e,t,r){var n=r(43)((function(i){return i[1]}));n.push([e.i,"button[data-v-c2c710aa]{background:var(--button-color);border:none;border-radius:var(--border-radius-medium);color:var(--text-primary);cursor:pointer;min-width:4em;padding:.5em 1em}.card__actions button[data-v-c2c710aa],.toolbar button[data-v-c2c710aa],button.small[data-v-c2c710aa]{font-size:var(--fs-small)}",""]),n.locals={},e.exports=n},305:function(e,t,r){"use strict";r(213)},306:function(e,t,r){var n=r(43)((function(i){return i[1]}));n.push([e.i,".app__header[data-v-4a91a2f8]{align-items:center;display:flex;padding:.75em}.app__header h1[data-v-4a91a2f8]{font-size:var(--fs-large);margin:0}",""]),n.locals={},e.exports=n},307:function(e,t,r){"use strict";r(214)},308:function(e,t,r){var n=r(43)((function(i){return i[1]}));n.push([e.i,".app__sidebar[data-v-f7bbb570]{height:100%}.close-button[data-v-f7bbb570]{position:fixed;top:1rem;right:1rem}@media only screen and (max-width:600px){.app__sidebar[data-v-f7bbb570]{background:var(--color-background);inset:0;position:absolute;z-index:42}.app__sidebar[data-v-f7bbb570]:not(.open){display:none}.app__sidebar nav[data-v-f7bbb570]{position:fixed;bottom:0;left:0;right:0}}@media only screen and (min-width:601px){.app__sidebar[data-v-f7bbb570]{transform:translateX(0);transition:padding-left var(--anim-medium) ease,padding-right var(--anim-medium) ease,width var(--anim-medium) ease,transform var(--anim-medium) ease}.app__sidebar.closed[data-v-f7bbb570]{overflow:hidden;padding-left:0;padding-right:0;transform:translateX(-100%);width:0}.close-button[data-v-f7bbb570]{display:none}}",""]),n.locals={},e.exports=n},309:function(e,t,r){"use strict";r(215)},310:function(e,t,r){var n=r(43)((function(i){return i[1]}));n.push([e.i,".app__navigation ul[data-v-575d989f]{display:flex;flex-direction:column;margin:0;padding:0 1rem 1rem 0;height:100%}.app__navigation li[data-v-575d989f]{display:inline-block;list-style:none;margin-top:1rem}.app__navigation a[data-v-575d989f]{border-bottom-right-radius:var(--border-radius-xl);border-top-right-radius:var(--border-radius-xl);color:var(--text-primary);display:block;margin-left:-1rem;padding:.75em 2rem;transition:background var(--anim-medium) ease;text-decoration:none}.app__navigation a[data-v-575d989f]:focus-visible,.app__navigation a[data-v-575d989f]:hover{background:var(--color-lighten-2)}.app__navigation a.nuxt-link-exact-active[data-v-575d989f]{background:var(--color-lighten-3)}.source-link[data-v-575d989f]{font-size:var(--fs-small);margin-top:2rem}",""]),n.locals={},e.exports=n},311:function(e,t,r){"use strict";r(216)},312:function(e,t,r){var n=r(43)((function(i){return i[1]}));n.push([e.i,".app__wrapper[data-v-4b312bdf]{display:flex;flex-direction:column;height:100%}",""]),n.locals={},e.exports=n},313:function(e,t,r){"use strict";r.r(t),r.d(t,"actions",(function(){return o}));var n=r(144),o={reset:function(e){var t=e.dispatch;t("notebooks/reset"),t("settings/reset")},createNotebook:function(e,t){var r=e.commit,o=Object(n.a)(),l=Object(n.a)(),section={id:l,name:"New Section",notebookId:o,content:""};r("notebooks/add",{id:o,name:t,sectionIds:[l]}),r("sections/add",section)}}},314:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return d})),r.d(t,"actions",(function(){return f})),r.d(t,"getters",(function(){return m})),r.d(t,"mutations",(function(){return h}));r(315),r(23),r(28),r(51),r(15),r(24),r(26),r(140),r(141);var n=r(1),o=r(222),l=r.n(o);function c(e){return e.replaceAll(" ","_")}var d=function(){return Object.create(null)},f={download:function(e,t){var r=e.rootGetters,n=r["notebooks/byId"](t),o=r["sections/byNotebookId"](t),d=new l.a,f="".concat(c(n.name),".zip");o.forEach((function(section){for(var e="".concat(c(section.name),".md"),t=1;e in d.files;)e="".concat(c(section.name),"_").concat(t,".md"),t+=1;d.file(e,section.content)})),d.generateAsync({type:"blob"}).then((function(e){var link=document.createElement("a");link.href=URL.createObjectURL(e),link.download=f,link.click(),URL.revokeObjectURL(link.href)}))},reset:function(e){(0,e.commit)("removeAll")}},m={all:function(e){return Object.values(e)},byId:function(e){return function(t){return e[t]}}},h={add:function(e,t){n.default.set(e,t.id,t)},remove:function(e,t){n.default.delete(e,t)},removeAll:function(e){Object.values(e).forEach((function(t){return n.default.delete(e,t.id)}))}}},321:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return o})),r.d(t,"actions",(function(){return l})),r.d(t,"getters",(function(){return c})),r.d(t,"mutations",(function(){return d}));r(141),r(30),r(28);var n=r(1),o=function(){return Object.create(null)},l={reset:function(e){(0,e.commit)("removeAll")}},c={all:function(e){return Object.values(e)},byId:function(e){return function(t){return e[t]}},byNotebookId:function(e){return function(t){return Object.values(e).filter((function(section){return section.notebookId===t}))}}},d={add:function(e,section){n.default.set(e,section.id,section)},remove:function(e,t){n.default.delete(e,t)},removeAll:function(e){Object.values(e).forEach((function(section){return n.default.delete(e,section.id)}))}}},322:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return n})),r.d(t,"getters",(function(){return o})),r.d(t,"mutations",(function(){return l}));var n=function(){return{tabSize:10}},o={tabSize:function(e){return e.tabSize}},l={setTabSize:function(e,t){e.tabSize=t}}},356:function(e,t,r){"use strict";r.r(t);var n=r(18),o=Object(n.a)({props:{value:{type:Boolean,required:!0}}}),l=(r(307),r(17)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("aside",{staticClass:"app__sidebar",class:{open:e.value,closed:!e.value}},[r("HamburgerButton",{staticClass:"close-button",attrs:{value:e.value},on:{input:function(t){return e.$emit("input",!e.value)}}}),e._v(" "),r("AppNavigation")],1)}),[],!1,null,"f7bbb570",null);t.default=component.exports;installComponents(component,{HamburgerButton:r(217).default,AppNavigation:r(357).default})},357:function(e,t,r){"use strict";r.r(t);var n=r(18),o=r(88),l=Object(n.a)({data:function(){return{routes:o.b}}}),c=(r(309),r(17)),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"app__navigation"},[r("ul",[e._l(e.routes,(function(t){return r("li",{key:t.path},[r("NuxtLink",{staticClass:"elevated no-touch-callout unselectable",attrs:{to:e.localePath(t.path)}},[e._v("\n        "+e._s(e.$t(t.title))+"\n      ")])],1)})),e._v(" "),r("li",[r("a",{staticClass:"elevated no-touch-callout source-link unselectable",attrs:{href:"https://github.com/DerYeger/noted",rel:"noopener",target:"_blank"}},[e._v("\n        "+e._s(e.$t("misc.source-code"))+"\n      ")])])],2)])}),[],!1,null,"575d989f",null);t.default=component.exports},358:function(e,t,r){"use strict";r.r(t);var n=r(18),o=Object(n.a)({computed:{tabSize:function(){return this.$store.getters["settings/tabSize"]}}}),l=(r(311),r(17)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"app__wrapper",style:{"--tab-size":e.tabSize}},[e._t("default")],2)}),[],!1,null,"4b312bdf",null);t.default=component.exports},359:function(e,t,r){"use strict";r.r(t);r(305);var n=r(17),component=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"app__header"},[e._t("default"),e._v(" "),r("h1",{staticClass:"unselectable"},[e._v(e._s(e.$t("app.title")))])],2)}),[],!1,null,"4a91a2f8",null);t.default=component.exports},58:function(e,t,r){"use strict";var n=r(18),o=r(88),l=Object(n.a)({props:{error:{type:Object,required:!0}},data:function(){return{homeRoute:o.b.home}},head:function(){var e=this.error;return{title:404===e.statusCode?"404":e.message}}}),c=l,d=(r(290),r(17)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app__error"},[e.error&&404===e.error.statusCode?r("h1",{staticClass:"text--secondary"},[e._v("\n    404\n  ")]):r("h1",{staticClass:"text--secondary"},[e._v("\n    "+e._s(e.error.message)+"\n  ")]),e._v(" "),r("NuxtLink",{attrs:{to:e.localePath(e.homeRoute.path)}},[e._v("\n    "+e._s(e.$t(e.homeRoute.title))+"\n  ")])],1)}),[],!1,null,"4d55bfde",null);t.a=component.exports},88:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}));r(51);var n={home:{title:"routes.home",path:"/"},notebooks:{title:"routes.notebooks",path:"/notebooks"},settings:{title:"routes.settings",path:"/settings"}};function o(e){return"".concat(n.notebooks.path,"/").concat(e.id)}}},[[231,21,2,22]]]);