(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{152:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(390);function o(){return Object(n.a)()}},157:function(e,t,r){"use strict";t.a=function(e,t){t("host","https://noted.yeger.eu")}},158:function(e,t,r){"use strict";var n=r(1),o=r(244),c=r(245),l=r(246);r(356);n.default.component("CloseIcon",o.a),n.default.component("OpenInNewIcon",c.a),n.default.component("PlusIcon",l.a)},159:function(e,t,r){"use strict";var n=r(248);t.a=function(e,t){t("indentHandler",n.a)}},160:function(e,t,r){"use strict";var n=r(161),o=r(122);r(358),r(359),r(360),r(361),r(362),r(363),r(364),r(365),r(366),r(367),r(368),r(369),r(370),r(371),r(372),r(373),r(374),r(375),r(376),r(377),r(378),r(379),r(380),r(381),r(382);n.setOptions({highlight:function(code,e){return o.languages[e]?o.highlight(code,o.languages[e],e):code}}),t.a=function(e,t){t("md",n.parse)}},162:function(e,t,r){"use strict";var n=r(1),o=r(239);n.default.use(o.a)},163:function(e,t,r){"use strict";var n=r(240);t.a=function(e){Object(n.a)()(e.store)}},164:function(e,t,r){"use strict";var n=r(6);r(47);function o(){return(o=Object(n.a)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.$workbox;case 2:if(r=e.sent){e.next=6;break}return console.debug("Workbox couldn't be loaded."),e.abrupt("return");case 6:r.addEventListener("installed",(function(e){if(console.log(e.isUpdate),!0===e.isUpdate)return console.debug("There is an update for the PWA, reloading..."),void window.location.reload();console.debug("The PWA is on the latest version.")}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.a=function(e){return o.apply(this,arguments)}},165:function(e,t,r){"use strict";r.r(t);var n=r(16),o=Object(n.a)({props:{color:{type:String,default:"lighten-3"},small:{type:Boolean,default:!1}},computed:{colorVar:function(){return"var(--color-".concat(this.color,")")}}}),c=(r(325),r(10)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("button",{staticClass:"darken-on-focus unselectable",class:{"text--small":e.small},style:{"--button-color":e.colorVar},on:{click:function(t){return e.$emit("click")}}},[e._t("default")],2)}),[],!1,null,"a5979d8e",null);t.default=component.exports;installComponents(component,{Button:r(165).default})},221:function(e,t,r){var content=r(313);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(37).default)("8c990344",content,!0,{sourceMap:!1})},223:function(e,t,r){var content=r(322);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(37).default)("39580d38",content,!0,{sourceMap:!1})},224:function(e,t,r){var content=r(324);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(37).default)("0123588a",content,!0,{sourceMap:!1})},225:function(e,t,r){var content=r(326);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(37).default)("3a408f18",content,!0,{sourceMap:!1})},226:function(e,t,r){var content=r(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(37).default)("5d8130fa",content,!0,{sourceMap:!1})},227:function(e,t,r){var content=r(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(37).default)("aa54f44c",content,!0,{sourceMap:!1})},228:function(e,t,r){var content=r(332);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(37).default)("0a26af21",content,!0,{sourceMap:!1})},229:function(e,t,r){var content=r(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(37).default)("b2d7b3be",content,!0,{sourceMap:!1})},230:function(e,t,r){var content=r(336);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(37).default)("44c19b66",content,!0,{sourceMap:!1})},243:function(e,t,r){"use strict";r(40);var n=r(16),o=Object(n.a)({data:function(){return{sidebarOpen:!1}},head:function(){var path=1===this.$route.path.length?"":this.$route.path;return{htmlAttrs:{lang:this.$i18n.locale},meta:[{hid:"description",name:"description",content:this.$t("meta.description")}],link:[{rel:"canonical",href:"".concat(this.$host).concat(path,"/")}]}}}),c=(r(321),r(10)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("AppWrapper",{class:{"sidebar-open":e.sidebarOpen}},[r("ClientOnly",[r("ThemeColorSetter")],1),e._v(" "),r("AppHeader",[r("HamburgerButton",{staticStyle:{margin:"0 1rem 0 0.5rem"},attrs:{"aria-label":e.$t("actions.toggle-menu")},model:{value:e.sidebarOpen,callback:function(t){e.sidebarOpen=t},expression:"sidebarOpen"}})],1),e._v(" "),r("div",{staticClass:"app__content"},[r("AppSidebar",{model:{value:e.sidebarOpen,callback:function(t){e.sidebarOpen=t},expression:"sidebarOpen"}}),e._v(" "),r("main",{staticClass:"depressed"},[r("Nuxt")],1)],1)],1)}),[],!1,null,"0bc65b59",null);t.a=component.exports;installComponents(component,{ThemeColorSetter:r(388).default,HamburgerButton:r(383).default,AppHeader:r(389).default,AppSidebar:r(384).default,AppWrapper:r(387).default})},249:function(e,t,r){r(250),r(251),e.exports=r(254)},312:function(e,t,r){"use strict";r(221)},313:function(e,t,r){var n=r(36)((function(i){return i[1]}));n.push([e.i,".app__error[data-v-42a56400]{align-items:center;display:flex;flex-direction:column;justify-content:center;height:100%;width:100%}",""]),n.locals={},e.exports=n},319:function(e,t,r){var content=r(320);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(37).default)("17bc9ac2",content,!0,{sourceMap:!1})},320:function(e,t,r){var n=r(36)((function(i){return i[1]}));n.push([e.i,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */*,:after,:before{box-sizing:border-box}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:border-box;height:0;overflow:visible}pre{font-family:monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}:root{--prism-green:#6a8759;--prism-orange:#cc7832;--prism-white:var(--text-primary);--prism-yellow:#ffc66d;--prism-foreground:var(--prism-white);--prism-background:transparent;--prism-comment:var(--color-lighten-4);--prism-string:var(--prism-green);--prism-literal:var(--prism-orange);--prism-keyword:var(--prism-orange);--prism-function:var(--prism-yellow);--prism-deleted:#a14f55;--prism-class:var(--prism-white);--prism-builtin:var(--prism-yellow);--prism-property:var(--prism-yellow);--prism-namespace:#c96880;--prism-punctuation:var(--prism-white);--prism-decorator:#bd8f8f;--prism-json-property:#698c96}pre{border-radius:var(--border-radius-medium);padding:1em;overflow-x:auto}:root{--anim-medium:0.25s;--anim-short:0.1s;--background-concave:linear-gradient(145deg,var(--color-darken-1),var(--color-lighten-1));--background-convex:linear-gradient(145deg,var(--color-lighten-1),var(--color-darken-1));--border-radius-medium:0.25rem;--border-radius-large:0.5rem;--border-radius-xl:1.5rem;--color-background:#403235;--color-primary:#403235;--color-secondary:#637949;--color-secondary-darken:#39462a;--color-darken-1:rgba(0,0,0,0.2);--color-darken-2:rgba(0,0,0,0.3);--color-darken-3:rgba(0,0,0,0.4);--color-lighten-1:hsla(0,0%,100%,0.05);--color-lighten-2:hsla(0,0%,100%,0.1);--color-lighten-3:hsla(0,0%,100%,0.2);--color-lighten-4:hsla(0,0%,100%,0.3);--color-warn:#bf3f3f;--fs-large:1.25rem;--fs-medium:1rem;--fs-small:0.8rem;--glass-blur:0.25rem;--shadow-depressed:0.5rem 0.5rem 0.75rem 0 var(--color-darken-3) inset,-0.125rem -0.125rem 1rem 0 var(--color-lighten-1) inset;--shadow-elevated:0.5rem 0.5rem 0.75rem 0 var(--color-darken-2),-0.125rem -0.125rem 1rem 0 var(--color-lighten-2);--text-primary:#fff}.dark-mode{--color-background:#212121}.darken-on-focus{transition:filter .25s ease}.darken-on-focus:focus-visible,.darken-on-focus:hover{filter:brightness(80%)}.glass{filter:blur(var(--glass-blur))}.glass-backdrop{backdrop-filter:blur(var(--glass-blur))}.elevated,pre{box-shadow:var(--shadow-elevated)}.depressed{box-shadow:var(--shadow-depressed)}.concave{background:var(--background-concave)}.convex{background:var(--background-convex)}::-webkit-scrollbar{width:.5rem;height:.5rem}::-webkit-scrollbar-track{border-radius:var(--border-radius-medium);box-shadow:inset 0 0 6px rgba(0,0,0,.3)}::-webkit-scrollbar-thumb{background:var(--color-lighten-3);border-radius:var(--border-radius-medium);transition:background .25s ease}::-webkit-scrollbar-thumb:hover{background:var(--color-lighten-4)}body::-webkit-scrollbar-track{background:var(--color-background);border-radius:0}h1,h2,h3,h4,h5,p{margin-top:0}a{color:var(--text-primary);text-decoration:none}.text--secondary,input::placeholder,textarea::placeholder{color:var(--color-lighten-4);font-style:italic}.text--small{font-size:var(--fs-small)}.h-100{height:100%}.d-flex{display:flex}.flex-column{flex-direction:column}.ma-4{margin:1rem}.mx-4{margin-left:1rem;margin-right:1rem}.my-4{margin-bottom:1rem}.mt-4,.my-4{margin-top:1rem}.mt-n4{margin-top:-1rem}.mb-4{margin-bottom:1rem}.pa-4{padding:1rem}.px-4{padding-left:1rem;padding-right:1rem}.py-4{padding-bottom:1rem}.pt-4,.py-4{padding-top:1rem}.pb-4{padding-bottom:1rem}#__layout,#__nuxt,body,html{height:100%}body{background:var(--color-background);color:var(--text-primary);transition:background var(--anim-medium) ease,color var(--anim-medium) ease}:not(:is(pre *,code *)){font-family:"Roboto",sans-serif}.splitpanes__splitter{background:var(--color-lighten-2);border-radius:var(--border-radius-large) 0 0 0;cursor:col-resize;position:relative;touch-action:none;width:1rem}.splitpanes__splitter:after,.splitpanes__splitter:before{background:var(--color-lighten-4);content:"";height:2rem;left:50%;position:absolute;top:50%;transform:translateY(-50%);width:1px}.splitpanes__splitter:before{margin-left:-2px}.splitpanes__splitter:after{margin-left:1px}.unselectable{-webkit-touch-callout:none!important;-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}a,button,div,input,select,textarea{-webkit-tap-highlight-color:rgba(0,0,0,0)}*+.material-design-icon{margin-left:.5rem}.material-design-icon__svg{bottom:0!important}input,select{all:unset;background:var(--background-concave);border-radius:var(--border-radius-large);box-shadow:var(--shadow-depressed);min-width:4rem;padding:.5em 1em}select{cursor:pointer;text-align:center}select option{background:var(--color-background)}',""]),n.locals={},e.exports=n},321:function(e,t,r){"use strict";r(223)},322:function(e,t,r){var n=r(36)((function(i){return i[1]}));n.push([e.i,".app__content[data-v-0bc65b59]{display:flex;width:100%}.app__content[data-v-0bc65b59],main[data-v-0bc65b59]{flex-grow:1;overflow-y:auto}main[data-v-0bc65b59]{background:var(--color-lighten-1);height:100%;overflow-x:hidden;transition:position var(--anim-medium) ease,transform var(--anim-medium) ease,width var(--anim-medium) ease;transform:translateX(0)}@media only screen and (max-width:600px){.sidebar-open[data-v-0bc65b59]{overflow-x:hidden}.sidebar-open main[data-v-0bc65b59]{position:absolute;transform:translateX(100%);inset:0;width:0}}@media only screen and (min-width:601px){.sidebar-open main[data-v-0bc65b59]{border-top-left-radius:var(--border-radius-large)}}",""]),n.locals={},e.exports=n},323:function(e,t,r){"use strict";r(224)},324:function(e,t,r){var n=r(36)((function(i){return i[1]}));n.push([e.i,".hamburger[data-v-1341ab98]{--hamburger-height:1.5rem;--hamburger-part-height:calc(var(--hamburger-height)/8);--hamburger-part-margin:calc(var(--hamburger-height)/5 - var(--hamburger-part-height)*3/5);--hamburger-width:1.25rem;all:unset;cursor:pointer;display:inline-flex;flex-direction:column;height:var(--hamburger-height);justify-content:space-evenly;width:var(--hamburger-width)}.hamburger__bottom[data-v-1341ab98],.hamburger__middle[data-v-1341ab98],.hamburger__top[data-v-1341ab98]{background-color:var(--text-primary);border-radius:var(--border-radius-large);filter:brightness(90%);height:var(--hamburger-part-height);margin-bottom:var(--hamburger-part-margin);margin-top:var(--hamburger-part-margin);transform-origin:50% 50%;transition:var(--anim-medium);width:var(--hamburger-width)}.hamburger__active .hamburger__top[data-v-1341ab98]{transform:translateY(calc(var(--hamburger-height)/3)) rotate(45deg)}.hamburger__active .hamburger__middle[data-v-1341ab98]{opacity:0;transform:scaleX(0)}.hamburger__active .hamburger__bottom[data-v-1341ab98]{transform:translateY(calc(var(--hamburger-height)/-3)) rotate(-45deg)}",""]),n.locals={},e.exports=n},325:function(e,t,r){"use strict";r(225)},326:function(e,t,r){var n=r(36)((function(i){return i[1]}));n.push([e.i,"button[data-v-a5979d8e]{align-items:center;background:var(--button-color);border:none;border-radius:var(--border-radius-medium);color:var(--text-primary);cursor:pointer;display:inline-flex;justify-content:center;height:100%;min-width:max(4em,-moz-fit-content);min-width:max(4em,fit-content);padding:.5em 1em}",""]),n.locals={},e.exports=n},327:function(e,t,r){"use strict";r(226)},328:function(e,t,r){var n=r(36)((function(i){return i[1]}));n.push([e.i,".app__header[data-v-4a91a2f8]{align-items:center;display:flex;padding:.75em}.app__header h1[data-v-4a91a2f8]{font-size:var(--fs-large);margin:0}",""]),n.locals={},e.exports=n},329:function(e,t,r){"use strict";r(227)},330:function(e,t,r){var n=r(36)((function(i){return i[1]}));n.push([e.i,".app__sidebar[data-v-3a00b9f8]{height:100%;overflow-y:auto;transform:translateX(0);transition:padding-left var(--anim-medium) ease,padding-right var(--anim-medium) ease,transform var(--anim-medium) ease,width var(--anim-medium) ease}.app__sidebar.closed[data-v-3a00b9f8]{overflow-x:hidden;padding-left:0;padding-right:0;transform:translateX(-100%);width:0}@media only screen and (max-width:600px){.app__sidebar[data-v-3a00b9f8]{width:100vw}}",""]),n.locals={},e.exports=n},331:function(e,t,r){"use strict";r(228)},332:function(e,t,r){var n=r(36)((function(i){return i[1]}));n.push([e.i,".app__navigation ul[data-v-5784ee60]{display:flex;flex-direction:column;height:100%;margin:0;padding:0 1rem 1rem 0}",""]),n.locals={},e.exports=n},333:function(e,t,r){"use strict";r(229)},334:function(e,t,r){var n=r(36)((function(i){return i[1]}));n.push([e.i,".nav_item[data-v-6b164c4c]{display:inline-block;list-style:none;margin-top:1rem}.nav-item a[data-v-6b164c4c]{background:var(--background-concave);border-bottom-right-radius:var(--border-radius-xl);border-top-right-radius:var(--border-radius-xl);color:var(--text-primary);display:flex;justify-content:space-between;margin-left:-1rem;margin-top:1rem;padding:.75em 2rem;transition:background var(--anim-medium) ease}.nav-item a[data-v-6b164c4c]:focus-visible,.nav-item a[data-v-6b164c4c]:hover{background:var(--color-lighten-2)}.nav-item a.nuxt-link-exact-active[data-v-6b164c4c]{background:var(--color-lighten-3)}.nav-item a.standalone[data-v-6b164c4c]{margin-top:3rem}.nav-item a.sub-route[data-v-6b164c4c]{font-size:var(--fs-small)}.nav-item:first-child a[data-v-6b164c4c]{margin-top:1rem}.nav-item a .material-design-icon[data-v-6b164c4c]{font-size:var(--fs-small);position:absolute;right:2rem}",""]),n.locals={},e.exports=n},335:function(e,t,r){"use strict";r(230)},336:function(e,t,r){var n=r(36)((function(i){return i[1]}));n.push([e.i,".app__wrapper[data-v-4b312bdf]{display:flex;flex-direction:column;height:100%}",""]),n.locals={},e.exports=n},337:function(e,t,r){"use strict";r.r(t),r.d(t,"actions",(function(){return o}));var n=r(152),o={reset:function(e){var t=e.dispatch;t("notebooks/reset"),t("settings/reset")},createNotebook:function(e,t){var r=e.commit,o=Object(n.a)(),c=Object(n.a)(),section={id:c,name:"New Section",notebookId:o,content:""};r("notebooks/add",{id:o,name:t,sectionIds:[c],lastEdit:Date.now()}),r("sections/add",section)}}},338:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return h})),r.d(t,"actions",(function(){return v})),r.d(t,"getters",(function(){return _})),r.d(t,"mutations",(function(){return x}));var n=r(20),o=(r(339),r(24),r(31),r(40),r(18),r(27),r(29),r(148),r(149),r(35),r(231),r(34),r(23),r(33),r(49),r(50),r(1)),c=r(236),l=r.n(c);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function f(e){return e.replaceAll(" ","_")}var h=function(){return Object.create(null)},v={download:function(e,t){var r=e.rootGetters,n=r["notebooks/byId"](t),o=r["sections/byNotebookId"](t),c=new l.a,d="".concat(f(n.name),".zip");o.forEach((function(section){for(var e="".concat(f(section.name),".md"),t=1;e in c.files;)e="".concat(f(section.name),"_").concat(t,".md"),t+=1;c.file(e,section.content)})),c.generateAsync({type:"blob"}).then((function(e){var link=document.createElement("a");link.href=URL.createObjectURL(e),link.download=d,link.click(),URL.revokeObjectURL(link.href)}))},reset:function(e){(0,e.commit)("removeAll")}},_={all:function(e){return Object.values(e)},byId:function(e){return function(t){return e[t]}},recent:function(e){return function(t){return Object.values(e).sort((function(a,b){return a.lastEdit-b.lastEdit})).reverse().slice(0,t)}}},x={add:function(e,t){o.default.set(e,t.id,m(m({},t),{},{lastEdit:Date.now()}))},remove:function(e,t){o.default.delete(e,t)},removeAll:function(e){Object.values(e).forEach((function(t){return o.default.delete(e,t.id)}))},updateLastEdit:function(e,t){e[t].lastEdit=Date.now()}}},349:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return o})),r.d(t,"actions",(function(){return c})),r.d(t,"getters",(function(){return l})),r.d(t,"mutations",(function(){return d}));r(149),r(33),r(31);var n=r(1),o=function(){return Object.create(null)},c={reset:function(e){(0,e.commit)("removeAll")}},l={all:function(e){return Object.values(e)},byId:function(e){return function(t){return e[t]}},byNotebookId:function(e){return function(t){return Object.values(e).filter((function(section){return section.notebookId===t}))}}},d={add:function(e,section){n.default.set(e,section.id,section)},remove:function(e,t){n.default.delete(e,t)},removeAll:function(e){Object.values(e).forEach((function(section){return n.default.delete(e,section.id)}))}}},350:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return n})),r.d(t,"getters",(function(){return o})),r.d(t,"mutations",(function(){return c}));var n=function(){return{sanitize:!0,tabSize:4}},o={sanitize:function(e){return e.sanitize},tabSize:function(e){return e.tabSize}},c={setSanitize:function(e,t){e.sanitize=t},setTabSize:function(e,t){e.tabSize=t}}},383:function(e,t,r){"use strict";r.r(t);var n=r(16),o=Object(n.a)({props:{value:{type:Boolean,required:!0}}}),c=(r(323),r(10)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"hamburger unselectable",class:{hamburger__active:e.value},on:{click:function(t){return e.$emit("input",!e.value)}}},[r("div",{staticClass:"hamburger__top"}),e._v(" "),r("div",{staticClass:"hamburger__middle"}),e._v(" "),r("div",{staticClass:"hamburger__bottom"})])}),[],!1,null,"1341ab98",null);t.default=component.exports;installComponents(component,{Button:r(165).default})},384:function(e,t,r){"use strict";r.r(t);var n=r(16),o=Object(n.a)({props:{value:{type:Boolean,required:!0}},methods:{closeIfMobile:function(){window.innerWidth<=600&&this.$emit("input",!1)}}}),c=(r(329),r(10)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("aside",{staticClass:"app__sidebar",class:{open:e.value,closed:!e.value}},[r("ClientOnly",[r("AppNavigation",{on:{navigate:e.closeIfMobile}})],1)],1)}),[],!1,null,"3a00b9f8",null);t.default=component.exports;installComponents(component,{AppNavigation:r(385).default})},385:function(e,t,r){"use strict";r.r(t);var n=r(71),o=(r(41),r(24),r(40),r(16)),c=r(59),l=Object(o.a)({computed:{routes:function(){var e=this,t=this.$store.getters["notebooks/recent"](3).map((function(t){return{title:t.name,path:e.localePath(Object(c.a)(t)),external:!1,subRoute:!0,dynamic:!0}}));return[c.b.home,c.b.notebooks].concat(Object(n.a)(t),[c.b.settings,c.b.source])}}}),d=(r(331),r(10)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"app__navigation"},[r("ul",e._l(e.routes,(function(t){return r("NavItem",{key:t.path,attrs:{route:t},on:{navigate:function(t){return e.$emit("navigate")}}})})),1)])}),[],!1,null,"5784ee60",null);t.default=component.exports;installComponents(component,{NavItem:r(386).default})},386:function(e,t,r){"use strict";r.r(t);var n=r(16),o=Object(n.a)({props:{route:{type:Object,required:!0}}}),c=(r(333),r(10)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",{staticClass:"nav-item"},[e.route.external?r("a",{staticClass:"elevated sub-route unselectable",class:{standalone:!e.route.subRoute,"sub-route":e.route.subRoute},attrs:{href:e.route.path,rel:"noopener",target:"_blank"},on:{click:function(t){return e.$emit("navigate")}}},[e._v("\n    "+e._s(e.route.dynamic?e.route.title:e.$t(e.route.title))+"\n    "),e.route.external?r("OpenInNewIcon"):e._e()],1):r("NuxtLink",{staticClass:"elevated unselectable",class:{standalone:!e.route.subRoute,"sub-route":e.route.subRoute},attrs:{to:e.localePath(e.route.path)},nativeOn:{click:function(t){return e.$emit("navigate")}}},[e._v("\n    "+e._s(e.route.dynamic?e.route.title:e.$t(e.route.title))+"\n    "),e.route.external?r("OpenInNewIcon"):e._e()],1)],1)}),[],!1,null,"6b164c4c",null);t.default=component.exports},387:function(e,t,r){"use strict";r.r(t);var n=r(16),o=Object(n.a)({computed:{tabSize:function(){return this.$store.getters["settings/tabSize"]}}}),c=(r(335),r(10)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"app__wrapper",style:{"--tab-size":e.tabSize}},[e._t("default")],2)}),[],!1,null,"4b312bdf",null);t.default=component.exports},388:function(e,t,r){"use strict";r.r(t);var n=r(16),o=Object(n.a)({head:function(){return{meta:[{hid:"theme-color",name:"theme-color",content:this.themeColor}]}},computed:{themeColor:function(){this.$colorMode.preference;return getComputedStyle(document.body).getPropertyValue("--color-background")}}}),c=r(10),component=Object(c.a)(o,undefined,undefined,!1,null,null,null);t.default=component.exports},389:function(e,t,r){"use strict";r.r(t);r(327);var n=r(10),component=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"app__header"},[e._t("default"),e._v(" "),r("h1",{staticClass:"unselectable"},[e._v(e._s(e.$t("app.title")))])],2)}),[],!1,null,"4a91a2f8",null);t.default=component.exports},59:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}));r(40);var n={home:{title:"routes.home",path:"/",external:!1,subRoute:!1,dynamic:!1},notebooks:{title:"routes.notebooks",path:"/notebooks",external:!1,subRoute:!1,dynamic:!1},settings:{title:"routes.settings",path:"/settings",external:!1,subRoute:!1,dynamic:!1},source:{title:"routes.source",path:"https://github.com/DerYeger/noted",external:!0,subRoute:!0,dynamic:!1}};function o(e){return"".concat(n.notebooks.path,"/").concat(e.id)}},64:function(e,t,r){"use strict";var n=r(16),o=r(59),c=Object(n.a)({props:{error:{type:Object,required:!0}},data:function(){return{homeRoute:o.b.home}},head:function(){return{title:404===this.error.statusCode?"404":this.error.message}}}),l=(r(312),r(10)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app__error"},[e.error&&404===e.error.statusCode?r("h1",{staticClass:"text--secondary"},[e._v("\n    404\n  ")]):r("h1",{staticClass:"text--secondary"},[e._v("\n    "+e._s(e.error.message)+"\n  ")]),e._v(" "),r("NuxtLink",{attrs:{to:e.localePath(e.homeRoute.path)}},[e._v("\n    "+e._s(e.$t(e.homeRoute.title))+"\n  ")])],1)}),[],!1,null,"42a56400",null);t.a=component.exports}},[[249,28,3,29]]]);