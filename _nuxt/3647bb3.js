(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{144:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var o=r(359);function n(){return Object(o.a)()}},149:function(e,t,r){"use strict";t.a=function(e,t){t("host","https://noted.yeger.eu")}},150:function(e,t,r){"use strict";var o=r(151),n=r(113);r(330),r(331),r(332),r(333),r(334),r(335),r(336),r(337),r(338),r(339),r(340),r(341),r(342),r(343),r(344),r(345),r(346),r(347),r(348),r(349),r(350),r(351),r(352),r(353),r(354);o.setOptions({highlight:function(code,e){return n.languages[e]?n.highlight(code,n.languages[e],e):code}}),t.a=function(e,t){t("md",o.parse)}},152:function(e,t,r){"use strict";var o=r(1),n=r(224);o.default.use(n.a)},153:function(e,t,r){"use strict";var o=r(225);t.a=function(e){Object(o.a)()(e.store)}},154:function(e,t,r){"use strict";var o=r(6);r(41);function n(){return(n=Object(o.a)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.$workbox;case 2:if(r=e.sent){e.next=6;break}return console.debug("Workbox couldn't be loaded."),e.abrupt("return");case 6:r.addEventListener("installed",(function(e){if(console.log(e.isUpdate),!0===e.isUpdate)return console.debug("There is an update for the PWA, reloading..."),void window.location.reload();console.debug("The PWA is on the latest version.")}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.a=function(e){return n.apply(this,arguments)}},155:function(e,t,r){"use strict";r.r(t);var o=r(22),n=Object(o.a)({props:{color:{type:String,default:"lighten-3"},small:{type:Boolean,default:!1}},computed:{colorVar:function(){return"var(--color-".concat(this.color,")")}}}),l=(r(302),r(17)),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("button",{staticClass:"darken-on-focus unselectable",class:{small:e.small},style:{"--button-color":e.colorVar},on:{click:function(t){return e.$emit("click")}}},[e._t("default")],2)}),[],!1,null,"c2c710aa",null);t.default=component.exports;installComponents(component,{Button:r(155).default})},208:function(e,t,r){var content=r(290);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(44).default)("108285f6",content,!0,{sourceMap:!1})},210:function(e,t,r){var content=r(299);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(44).default)("7bbccf23",content,!0,{sourceMap:!1})},211:function(e,t,r){var content=r(301);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(44).default)("da1bbe52",content,!0,{sourceMap:!1})},212:function(e,t,r){var content=r(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(44).default)("9941d7e8",content,!0,{sourceMap:!1})},213:function(e,t,r){var content=r(305);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(44).default)("7fffdec2",content,!0,{sourceMap:!1})},214:function(e,t,r){var content=r(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(44).default)("4571fdba",content,!0,{sourceMap:!1})},215:function(e,t,r){var content=r(309);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(44).default)("2f947d0c",content,!0,{sourceMap:!1})},216:function(e,t,r){var content=r(311);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(44).default)("3fd27c0f",content,!0,{sourceMap:!1})},217:function(e,t,r){"use strict";r.r(t);var o=r(22),n=Object(o.a)({props:{value:{type:Boolean,required:!0}}}),l=(r(300),r(17)),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"hamburger unselectable",class:{hamburger__active:e.value},on:{click:function(t){return e.$emit("input",!e.value)}}},[r("div",{staticClass:"hamburger__top"}),e._v(" "),r("div",{staticClass:"hamburger__middle"}),e._v(" "),r("div",{staticClass:"hamburger__bottom"})])}),[],!1,null,"1341ab98",null);t.default=component.exports;installComponents(component,{Button:r(155).default})},228:function(e,t,r){"use strict";var o=r(22),n=Object(o.a)({data:function(){return{sidebarOpen:!1}}}),l=(r(298),r(17)),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("AppWrapper",[r("AppHeader",{class:{"glass-mobile":e.sidebarOpen}},[r("HamburgerButton",{staticStyle:{margin:"0 1rem 0 0.5rem"},model:{value:e.sidebarOpen,callback:function(t){e.sidebarOpen=t},expression:"sidebarOpen"}})],1),e._v(" "),r("div",{staticClass:"app__content"},[r("AppSidebar",{model:{value:e.sidebarOpen,callback:function(t){e.sidebarOpen=t},expression:"sidebarOpen"}}),e._v(" "),r("main",{staticClass:"depressed",class:{"glass-mobile":e.sidebarOpen,"rounded-top-left":e.sidebarOpen}},[r("Nuxt")],1)],1)],1)}),[],!1,null,"70e562f4",null);t.a=component.exports;installComponents(component,{HamburgerButton:r(217).default,AppHeader:r(357).default,AppSidebar:r(355).default,AppWrapper:r(358).default})},230:function(e,t,r){r(231),r(232),e.exports=r(235)},289:function(e,t,r){"use strict";r(208)},290:function(e,t,r){var o=r(43)(!1);o.push([e.i,".app__error[data-v-4d55bfde]{align-items:center;display:flex;flex-direction:column;justify-content:center;height:100%;width:100%}",""]),e.exports=o},296:function(e,t,r){var content=r(297);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(44).default)("f52d43e0",content,!0,{sourceMap:!1})},297:function(e,t,r){var o=r(43)(!1);o.push([e.i,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */*,:after,:before{box-sizing:border-box}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:border-box;height:0;overflow:visible}pre{font-family:monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}:root{--prism-green:#6a8759;--prism-orange:#cc7832;--prism-white:var(--text-primary);--prism-yellow:#ffc66d;--prism-foreground:var(--prism-white);--prism-background:transparent;--prism-comment:var(--color-lighten-4);--prism-string:var(--prism-green);--prism-literal:var(--prism-orange);--prism-keyword:var(--prism-orange);--prism-function:var(--prism-yellow);--prism-deleted:#a14f55;--prism-class:#2b91af;--prism-builtin:#a52727;--prism-property:var(--prism-yellow);--prism-namespace:#c96880;--prism-punctuation:var(--prism-white);--prism-decorator:#bd8f8f;--prism-json-property:#698c96;--prism-tab-size:var(--tab-size)}pre{border-radius:.25rem;border-radius:var(--border-radius-medium);padding:1em;overflow-x:auto}:root{--anim-medium:0.25s;--anim-short:0.1s;--border-radius-medium:0.25rem;--border-radius-large:0.5rem;--border-radius-xl:1.5rem;--color-primary:#462a39;--color-secondary:#637949;--color-secondary-darken:#39462a;--color-darken-1:rgba(0,0,0,0.2);--color-darken-2:rgba(0,0,0,0.3);--color-darken-3:rgba(0,0,0,0.4);--color-lighten-1:hsla(0,0%,100%,0.05);--color-lighten-2:hsla(0,0%,100%,0.1);--color-lighten-3:hsla(0,0%,100%,0.2);--color-lighten-4:hsla(0,0%,100%,0.3);--color-warn:#bf3f3f;--fs-large:1.25rem;--fs-medium:1rem;--fs-small:0.8rem;--glass-blur:0.25rem;--tab-size:4;--text-primary:#fff}.darken-on-focus{transition:filter .25s ease}.darken-on-focus.focus-visible,.darken-on-focus:focus-visible,.darken-on-focus:hover{filter:brightness(80%)}.glass{filter:blur(.25rem);filter:blur(var(--glass-blur))}.glass-backdrop{-webkit-backdrop-filter:blur(.25rem);backdrop-filter:blur(.25rem);-webkit-backdrop-filter:blur(var(--glass-blur));backdrop-filter:blur(var(--glass-blur))}@media only screen and (max-width:600px){.glass-mobile{filter:blur(.25rem);filter:blur(var(--glass-blur))}}.elevated,pre{box-shadow:.5rem .5rem .75rem 0 rgba(0,0,0,.3),-.125rem -.125rem 1rem 0 hsla(0,0%,100%,.1);box-shadow:.5rem .5rem .75rem 0 var(--color-darken-2),-.125rem -.125rem 1rem 0 var(--color-lighten-2)}.depressed{box-shadow:inset .5rem .5rem .75rem 0 rgba(0,0,0,.4),inset -.125rem -.125rem 1rem 0 hsla(0,0%,100%,.05);box-shadow:.5rem .5rem .75rem 0 var(--color-darken-3) inset,-.125rem -.125rem 1rem 0 var(--color-lighten-1) inset}::-webkit-scrollbar{width:.5rem;height:.5rem}::-webkit-scrollbar-track{box-shadow:inset 0 0 6px rgba(0,0,0,.3)}::-webkit-scrollbar-thumb,::-webkit-scrollbar-track{border-radius:.25rem;border-radius:var(--border-radius-medium)}::-webkit-scrollbar-thumb{background:hsla(0,0%,100%,.2);background:var(--color-lighten-3);-webkit-transition:background .25s ease;transition:background .25s ease}::-webkit-scrollbar-thumb:hover{background:hsla(0,0%,100%,.3);background:var(--color-lighten-4)}body::-webkit-scrollbar-track{background:#462a39;background:var(--color-primary);border-radius:0}h1,h2,h3,h4,h5,p{margin-top:0}a{color:#fff;color:var(--text-primary)}input::-moz-placeholder,textarea::-moz-placeholder{color:hsla(0,0%,100%,.3);color:var(--color-lighten-4);font-style:italic}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:hsla(0,0%,100%,.3);color:var(--color-lighten-4);font-style:italic}.text--secondary,input::placeholder,textarea::placeholder{color:hsla(0,0%,100%,.3);color:var(--color-lighten-4);font-style:italic}.h-100{height:100%}.d-flex{display:flex}.flex-column{flex-direction:column}.ma-4{margin:1rem}.mx-4{margin-left:1rem;margin-right:1rem}.my-4{margin-top:1rem}.mb-4,.my-4{margin-bottom:1rem}.pa-4{padding:1rem}.px-4{padding-left:1rem;padding-right:1rem}.py-4{padding-bottom:1rem}.pt-4,.py-4{padding-top:1rem}.pb-4{padding-bottom:1rem}#__layout,#__nuxt,body,html{height:100%}body{background:conic-gradient(from 3rad at 105%,at 50%,#462a39,#39462a);background:conic-gradient(from 3rad at 105% 50%,#462a39,#39462a);background:conic-gradient(from 3rad at 105%,at 50%,var(--color-primary),var(--color-secondary-darken));background:conic-gradient(from 3rad at 105% 50%,var(--color-primary),var(--color-secondary-darken));color:#fff;color:var(--text-primary)}:not(:is(pre *,code *)){font-family:"Roboto",sans-serif}.splitpanes__splitter{background:hsla(0,0%,100%,.1);background:var(--color-lighten-2);border-radius:.5rem 0 0 0;border-radius:var(--border-radius-large) 0 0 0;cursor:col-resize;position:relative;touch-action:none;width:1rem}.splitpanes__splitter:after,.splitpanes__splitter:before{background:hsla(0,0%,100%,.3);background:var(--color-lighten-4);content:"";height:2rem;left:50%;position:absolute;top:50%;transform:translateY(-50%);width:1px}.splitpanes__splitter:before{margin-left:-2px}.splitpanes__splitter:after{margin-left:1px}.unselectable{-webkit-touch-callout:none!important;-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}',""]),e.exports=o},298:function(e,t,r){"use strict";r(210)},299:function(e,t,r){var o=r(43)(!1);o.push([e.i,".app__content[data-v-70e562f4]{display:flex;flex-grow:1;overflow-y:auto;width:100%}main[data-v-70e562f4]{background:var(--color-lighten-1);flex-grow:1;height:100%;overflow-x:hidden;transition:var(--anim-medium)}@media only screen and (min-width:601px){.rounded-top-left[data-v-70e562f4]{border-top-left-radius:var(--border-radius-large)}}",""]),e.exports=o},300:function(e,t,r){"use strict";r(211)},301:function(e,t,r){var o=r(43)(!1);o.push([e.i,".hamburger[data-v-1341ab98]{--hamburger-height:1.5rem;--hamburger-part-height:calc(var(--hamburger-height)/8);--hamburger-part-margin:calc(var(--hamburger-height)/5 - var(--hamburger-part-height)*3/5);--hamburger-width:1.25rem;all:unset;cursor:pointer;display:inline-flex;flex-direction:column;height:var(--hamburger-height);justify-content:space-evenly;width:var(--hamburger-width)}.hamburger__bottom[data-v-1341ab98],.hamburger__middle[data-v-1341ab98],.hamburger__top[data-v-1341ab98]{background-color:var(--text-primary);border-radius:var(--border-radius-large);filter:brightness(90%);height:var(--hamburger-part-height);margin-bottom:var(--hamburger-part-margin);margin-top:var(--hamburger-part-margin);transform-origin:50% 50%;transition:var(--anim-medium);width:var(--hamburger-width)}.hamburger__active .hamburger__top[data-v-1341ab98]{transform:translateY(calc(var(--hamburger-height)/3)) rotate(45deg)}.hamburger__active .hamburger__middle[data-v-1341ab98]{opacity:0;transform:scaleX(0)}.hamburger__active .hamburger__bottom[data-v-1341ab98]{transform:translateY(calc(var(--hamburger-height)/-3)) rotate(-45deg)}",""]),e.exports=o},302:function(e,t,r){"use strict";r(212)},303:function(e,t,r){var o=r(43)(!1);o.push([e.i,"button[data-v-c2c710aa]{background:var(--button-color);border:none;border-radius:var(--border-radius-medium);color:var(--text-primary);cursor:pointer;min-width:4em;padding:.5em 1em}.card__actions button[data-v-c2c710aa],.toolbar button[data-v-c2c710aa],button.small[data-v-c2c710aa]{font-size:var(--fs-small)}",""]),e.exports=o},304:function(e,t,r){"use strict";r(213)},305:function(e,t,r){var o=r(43)(!1);o.push([e.i,".app__header[data-v-4a91a2f8]{align-items:center;display:flex;padding:.75em}.app__header h1[data-v-4a91a2f8]{font-size:var(--fs-large);margin:0}",""]),e.exports=o},306:function(e,t,r){"use strict";r(214)},307:function(e,t,r){var o=r(43)(!1);o.push([e.i,".app__sidebar[data-v-250f5de8]{height:100%}.close-button[data-v-250f5de8]{position:fixed;top:1rem;right:1rem}@media only screen and (max-width:600px){.app__sidebar[data-v-250f5de8]{background:var(--color-darken-2);top:0;right:0;bottom:0;left:0;position:absolute;z-index:42}.app__sidebar nav[data-v-250f5de8]{position:fixed;bottom:0;left:0;right:0}.app__sidebar[data-v-250f5de8]:not(.open){display:none}}@media only screen and (min-width:601px){.app__sidebar[data-v-250f5de8]{transform:translateX(0);transition:padding-left var(--anim-medium) ease,padding-right var(--anim-medium) ease,width var(--anim-medium) ease,transform var(--anim-medium) ease}.app__sidebar.closed[data-v-250f5de8]{overflow:hidden;padding-left:0;padding-right:0;transform:translateX(-100%);width:0}.close-button[data-v-250f5de8]{display:none}}",""]),e.exports=o},308:function(e,t,r){"use strict";r(215)},309:function(e,t,r){var o=r(43)(!1);o.push([e.i,".app__navigation ul[data-v-94d1e96c]{display:flex;flex-direction:column;margin:0;padding:0 1rem 1rem 0;height:100%}.app__navigation li[data-v-94d1e96c]{display:inline-block;list-style:none;margin-top:1rem}.app__navigation a[data-v-94d1e96c]{border-bottom-right-radius:var(--border-radius-xl);border-top-right-radius:var(--border-radius-xl);color:var(--text-primary);display:block;padding:.75em 2em .75em 1em;transition:background var(--anim-medium) ease;text-decoration:none}.app__navigation a.focus-visible[data-v-94d1e96c],.app__navigation a[data-v-94d1e96c]:focus-visible,.app__navigation a[data-v-94d1e96c]:hover{background:var(--color-lighten-2)}.app__navigation a.nuxt-link-exact-active[data-v-94d1e96c]{background:var(--color-lighten-3)}",""]),e.exports=o},310:function(e,t,r){"use strict";r(216)},311:function(e,t,r){var o=r(43)(!1);o.push([e.i,".app__wrapper[data-v-79edebf8]{display:flex;flex-direction:column;height:100%}",""]),e.exports=o},312:function(e,t,r){"use strict";r.r(t),r.d(t,"actions",(function(){return n}));var o=r(144),n={reset:function(e){var t=e.dispatch;t("notebooks/reset"),t("settings/reset")},createNotebook:function(e,t){var r=e.commit,n=Object(o.a)(),l=Object(o.a)(),section={id:l,name:"New Section",notebookId:n,content:""};r("notebooks/add",{id:n,name:t,sectionIds:[l]}),r("sections/add",section)}}},313:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return d})),r.d(t,"actions",(function(){return m})),r.d(t,"getters",(function(){return f})),r.d(t,"mutations",(function(){return h}));r(314),r(20),r(29),r(51),r(15),r(21),r(25),r(140),r(141);var o=r(1),n=r(222),l=r.n(n);function c(e){return e.replaceAll(" ","_")}var d=function(){return Object.create(null)},m={download:function(e,t){var r=e.rootGetters,o=r["notebooks/byId"](t),n=r["sections/byNotebookId"](t),d=new l.a,m="".concat(c(o.name),".zip");n.forEach((function(section){for(var e="".concat(c(section.name),".md"),t=1;e in d.files;)e="".concat(c(section.name),"_").concat(t,".md"),t+=1;d.file(e,section.content)})),d.generateAsync({type:"blob"}).then((function(e){var link=document.createElement("a");link.href=URL.createObjectURL(e),link.download=m,link.click(),URL.revokeObjectURL(link.href)}))},reset:function(e){(0,e.commit)("removeAll")}},f={all:function(e){return Object.values(e)},byId:function(e){return function(t){return e[t]}}},h={add:function(e,t){o.default.set(e,t.id,t)},remove:function(e,t){o.default.delete(e,t)},removeAll:function(e){Object.values(e).forEach((function(t){return o.default.delete(e,t.id)}))}}},320:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return n})),r.d(t,"actions",(function(){return l})),r.d(t,"getters",(function(){return c})),r.d(t,"mutations",(function(){return d}));r(141),r(33),r(29);var o=r(1),n=function(){return Object.create(null)},l={reset:function(e){(0,e.commit)("removeAll")}},c={all:function(e){return Object.values(e)},byId:function(e){return function(t){return e[t]}},byNotebookId:function(e){return function(t){return Object.values(e).filter((function(section){return section.notebookId===t}))}}},d={add:function(e,section){o.default.set(e,section.id,section)},remove:function(e,t){o.default.delete(e,t)},removeAll:function(e){Object.values(e).forEach((function(section){return o.default.delete(e,section.id)}))}}},321:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return o}));var o=function(){return{}}},355:function(e,t,r){"use strict";r.r(t);var o=r(22),n=Object(o.a)({props:{value:{type:Boolean,required:!0}}}),l=(r(306),r(17)),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("aside",{staticClass:"app__sidebar",class:{open:e.value,closed:!e.value}},[r("HamburgerButton",{staticClass:"close-button",attrs:{value:e.value},on:{input:function(t){return e.$emit("input",!e.value)}}}),e._v(" "),r("AppNavigation")],1)}),[],!1,null,"250f5de8",null);t.default=component.exports;installComponents(component,{HamburgerButton:r(217).default,AppNavigation:r(356).default})},356:function(e,t,r){"use strict";r.r(t);var o=r(22),n=r(88),l=Object(o.a)({data:function(){return{routes:n.b}}}),c=(r(308),r(17)),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"app__navigation"},[r("ul",e._l(e.routes,(function(t){return r("li",{key:t.path},[r("NuxtLink",{staticClass:"elevated unselectable",attrs:{to:e.localePath(t.path)}},[e._v("\n        "+e._s(e.$t(t.title))+"\n      ")])],1)})),0)])}),[],!1,null,"94d1e96c",null);t.default=component.exports},357:function(e,t,r){"use strict";r.r(t);r(304);var o=r(17),component=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"app__header"},[e._t("default"),e._v(" "),r("h1",{staticClass:"unselectable"},[e._v(e._s(e.$t("app.title")))])],2)}),[],!1,null,"4a91a2f8",null);t.default=component.exports},358:function(e,t,r){"use strict";r.r(t);r(310);var o=r(17),component=Object(o.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"app__wrapper"},[e._t("default")],2)}),[],!1,null,"79edebf8",null);t.default=component.exports},58:function(e,t,r){"use strict";var o=r(22),n=r(88),l=Object(o.a)({props:{error:{type:Object,required:!0}},data:function(){return{homeRoute:n.b.home}},head:function(){var e=this.error;return{title:404===e.statusCode?"404":e.message}}}),c=l,d=(r(289),r(17)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app__error"},[e.error&&404===e.error.statusCode?r("h1",{staticClass:"text--secondary"},[e._v("\n    404\n  ")]):r("h1",{staticClass:"text--secondary"},[e._v("\n    "+e._s(e.error.message)+"\n  ")]),e._v(" "),r("NuxtLink",{attrs:{to:e.localePath(e.homeRoute.path)}},[e._v("\n    "+e._s(e.$t(e.homeRoute.title))+"\n  ")])],1)}),[],!1,null,"4d55bfde",null);t.a=component.exports},88:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return n}));r(51);var o={home:{title:"routes.home",path:"/"},notebooks:{title:"routes.notebooks",path:"/notebooks"},settings:{title:"routes.settings",path:"/settings"}};function n(e){return"".concat(o.notebooks.path,"/").concat(e.id)}}},[[230,18,2,19]]]);