(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{141:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var o=t(329);function r(){return Object(o.a)()}},146:function(n,e,t){"use strict";e.a=function(n,e){e("host","https://noted.yeger.eu")}},147:function(n,e,t){"use strict";var o=t(148),r=t(109);t(303),t(304),t(305),t(306),t(307),t(308),t(309),t(310),t(311),t(312),t(313),t(314),t(315),t(316),t(317),t(318),t(319),t(320),t(321),t(322),t(323),t(324),t(325),t(326),t(327);o.setOptions({highlight:function(code,n){return r.languages[n]?r.highlight(code,r.languages[n],n):code}}),e.a=function(n,e){e("md",o.parse)}},149:function(n,e,t){"use strict";var o=t(1),r=t(211);o.default.use(r.a)},150:function(n,e,t){"use strict";var o=t(212);e.a=function(n){Object(o.a)()(n.store)}},151:function(n,e,t){"use strict";var o=t(6);t(38);function r(){return(r=Object(o.a)(regeneratorRuntime.mark((function n(e){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,window.$workbox;case 2:if(t=n.sent){n.next=6;break}return console.debug("Workbox couldn't be loaded."),n.abrupt("return");case 6:t.addEventListener("installed",(function(n){if(console.log(n.isUpdate),!0===n.isUpdate)return console.debug("There is an update for the PWA, reloading..."),void window.location.reload();console.debug("The PWA is on the latest version.")}));case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}e.a=function(n){return r.apply(this,arguments)}},187:function(n,e,t){var content=t(257);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(85).default)("ada0ae4e",content,!0,{sourceMap:!1})},215:function(n,e,t){"use strict";var o=t(55),component=Object(o.a)({},(function(){var n=this.$createElement,e=this._self._c||n;return e("app-frame",[e("nuxt")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{AppFrame:t(328).default})},217:function(n,e,t){t(218),t(219),n.exports=t(223)},248:function(n,e,t){var content=t(249);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(85).default)("f52d43e0",content,!0,{sourceMap:!1})},249:function(n,e,t){var o=t(46),r=t(250),c=t(251),l=t(252),d=t(253),f=t(254),m=t(255),h=o(!1);h.i(r),h.i(c),h.i(l),h.i(d),h.i(f),h.i(m),h.push([n.i,"html,\nbody,\n#__nuxt,\n#__layout {\n  height: 100%;\n}\n\n*:not(:is(pre *, code *)) {\n  font-family: 'Roboto', sans-serif;\n}\n\n.splitpanes__splitter {\n  background: var(--color-lighten-2);\n  border-radius: var(--border-radius-large) 0 0 0;\n  cursor: col-resize;\n  position: relative;\n  touch-action: none;\n  width: 1rem;\n}\n\n.splitpanes__splitter::before,\n.splitpanes__splitter::after {\n  background: var(--color-lighten-4);\n  content: \"\";\n  height: 2rem;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 1px;\n\n}\n\n.splitpanes__splitter::before {\n  margin-left: -2px;\n}\n\n.splitpanes__splitter::after {\n  margin-left: 1px;\n}\n",""]),n.exports=h},250:function(n,e,t){var o=t(46)(!1);o.push([n.i,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n*,\n::after,\n::before {\n  box-sizing: border-box;\n}\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: border-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]),n.exports=o},251:function(n,e,t){var o=t(46)(!1);o.push([n.i,'/**\n * Darcula theme\n *\n * Adapted from a theme based on:\n * IntelliJ Darcula Theme (https://github.com/bulenkov/Darcula)\n *\n * @author Alexandre Paradis <service.paradis@gmail.com>\n * @version 1.0\n */\n\ncode[class*="language-"],\npre[class*="language-"] {\n  color: #a9b7c6;\n  font-family: Consolas, Monaco, \'Andale Mono\', monospace;\n  direction: ltr;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  line-height: 1.5;\n  -moz-tab-size: var(--tab-size);\n  -o-tab-size: var(--tab-size);\n  tab-size: var(--tab-size);\n  -webkit-hyphens: none;\n  -moz-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none;\n}\n\n/* Code blocks */\npre[class*="language-"] {\n  border-radius: var(--border-radius-medium);\n  margin: .5em 0;\n  padding: 1em;\n  overflow: auto;\n}\n\n:not(pre) > code[class*="language-"],\npre[class*="language-"] {\n  background: #2b2b2b;\n}\n\npre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,\ncode[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {\n  color: inherit;\n  background: rgba(33, 66, 131, .85);\n}\n\npre[class*="language-"]::selection, pre[class*="language-"] ::selection,\ncode[class*="language-"]::selection, code[class*="language-"] ::selection {\n  color: inherit;\n  background: rgba(33, 66, 131, .85);\n}\n\n/* Inline code */\n:not(pre) > code[class*="language-"] {\n  padding: .1em;\n  border-radius: .3em;\n}\n\n.token.comment,\n.token.prolog,\n.token.cdata {\n  color: #808080;\n}\n\n.token.delimiter,\n.token.boolean,\n.token.keyword,\n.token.selector,\n.token.important,\n.token.atrule {\n  color: #cc7832;\n}\n\n.token.operator,\n.token.punctuation,\n.token.attr-name {\n  color: #a9b7c6;\n}\n\n.token.tag,\n.token.tag .punctuation,\n.token.doctype,\n.token.builtin {\n  color: #e8bf6a;\n}\n\n.token.entity,\n.token.number,\n.token.symbol {\n  color: #6897bb;\n}\n\n.token.property,\n.token.constant,\n.token.variable {\n  color: #9876aa;\n}\n\n.token.string,\n.token.char {\n  color: #6a8759;\n}\n\n.token.attr-value,\n.token.attr-value .punctuation {\n  color: #a5c261;\n}\n\n.token.attr-value .punctuation:first-child {\n  color: #a9b7c6;\n}\n\n.token.url {\n  color: #287bde;\n  text-decoration: underline;\n}\n\n.token.function {\n  color: #ffc66d;\n}\n\n.token.regex {\n  background: #364135;\n}\n\n.token.bold {\n  font-weight: bold;\n}\n\n.token.italic {\n  font-style: italic;\n}\n\n.token.inserted {\n  background: #294436;\n}\n\n.token.deleted {\n  background: #484a4a;\n}\n\ncode.language-css .token.property,\ncode.language-css .token.property + .token.punctuation {\n  color: #a9b7c6;\n}\n\ncode.language-css .token.id {\n  color: #ffc66d;\n}\n\ncode.language-css .token.selector > .token.class,\ncode.language-css .token.selector > .token.attribute,\ncode.language-css .token.selector > .token.pseudo-class,\ncode.language-css .token.selector > .token.pseudo-element {\n  color: #ffc66d;\n}\n',""]),n.exports=o},252:function(n,e,t){var o=t(46)(!1);o.push([n.i,":root {\n  --color-primary: #21141B;\n  --color-secondary: #379C6F;\n  --color-darken-1: rgba(0, 0, 0, 0.2);\n  --color-darken-2: rgba(0, 0, 0, 0.3);\n  --color-lighten-1: rgba(255, 255, 255, 0.05);\n  --color-lighten-2: rgba(255, 255, 255, 0.1);\n  --color-lighten-3: rgba(255, 255, 255, 0.2);\n  --color-lighten-4: rgba(255, 255, 255, 0.3);\n  --border-radius-medium: 4px;\n  --border-radius-large: 8px;\n  --tab-size: 4;\n  --text-primary: white;\n}\n\n.darken-on-focus {\n  transition: filter 0.25s ease;\n}\n\n.darken-on-focus:focus-visible,\n.darken-on-focus:hover {\n  filter: brightness(80%);\n}\n",""]),n.exports=o},253:function(n,e,t){var o=t(46)(!1);o.push([n.i,"::-webkit-scrollbar {\n  width: 0.5rem;\n  height: 0.5rem;\n}\n\n::-webkit-scrollbar-track {\n  border-radius: var(--border-radius-medium);\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n}\n\n::-webkit-scrollbar-thumb {\n  background: var(--color-lighten-3);\n  border-radius: var(--border-radius-medium);\n  transition: background 0.25s ease;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: var(--color-lighten-4);\n}\n\nbody::-webkit-scrollbar-track {\n  background: var(--color-primary);\n  border-radius: 0;\n}\n",""]),n.exports=o},254:function(n,e,t){var o=t(46)(!1);o.push([n.i,"h1,\nh2,\nh3,\nh4,\nh5,\np {\n  margin-top: 0;\n}\n",""]),n.exports=o},255:function(n,e,t){var o=t(46)(!1);o.push([n.i,"/* Sizing */\n\n.h-100 {\n  height: 100%;\n}\n\n/* Display */\n\n.d-flex {\n  display: flex;\n}\n\n.flex-column {\n  flex-direction: column;\n}\n\n/* Margin */\n\n.ma-4 {\n  margin: 1rem;\n}\n\n.mx-4 {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n\n.my-4 {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n\n/* Padding */\n\n.pa-4 {\n  padding: 1rem;\n}\n\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\n.pt-4 {\n  padding-top: 1rem;\n}\n\n.pb-4 {\n  padding-bottom: 1rem;\n}\n",""]),n.exports=o},256:function(n,e,t){"use strict";t(187)},257:function(n,e,t){var o=t(46)(!1);o.push([n.i,"\nmain[data-v-3dae9630] {\n  background: var(--color-primary);\n  height: 100%;\n}\n",""]),n.exports=o},258:function(n,e,t){"use strict";t.r(e),t.d(e,"actions",(function(){return r}));var o=t(141),r={reset:function(n){var e=n.dispatch;e("notebooks/reset"),e("settings/reset")},createNotebook:function(n,e){var t=n.commit,r=Object(o.a)(),c=Object(o.a)(),section={id:c,name:"New Section",notebookId:r,content:""};t("notebooks/add",{id:r,name:e,sectionIds:[c]}),t("sections/add",section)}}},259:function(n,e,t){"use strict";t.r(e),t.d(e,"state",(function(){return r})),t.d(e,"actions",(function(){return c})),t.d(e,"getters",(function(){return l})),t.d(e,"mutations",(function(){return d}));t(138),t(27);var o=t(1),r=function(){return Object.create(null)},c={reset:function(n){(0,n.commit)("removeAll")}},l={all:function(n){return Object.values(n)},byId:function(n){return function(e){return n[e]}}},d={add:function(n,e){o.default.set(n,e.id,e)},remove:function(n,e){o.default.delete(n,e.id)},removeAll:function(n){Object.values(n).forEach((function(e){return o.default.delete(n,e.id)}))}}},260:function(n,e,t){"use strict";t.r(e),t.d(e,"state",(function(){return r})),t.d(e,"actions",(function(){return c})),t.d(e,"getters",(function(){return l})),t.d(e,"mutations",(function(){return d}));t(138),t(31),t(27);var o=t(1),r=function(){return Object.create(null)},c={reset:function(n){(0,n.commit)("removeAll")}},l={all:function(n){return Object.values(n)},byId:function(n){return function(e){return n[e]}},byNotebookId:function(n){return function(e){return Object.values(n).filter((function(section){return section.notebookId===e}))}}},d={add:function(n,section){o.default.set(n,section.id,section)},remove:function(n,e){o.default.delete(n,e)},removeAll:function(n){Object.values(n).forEach((function(section){return o.default.delete(n,section.id)}))}}},328:function(n,e,t){"use strict";t.r(e);t(256);var o=t(55),component=Object(o.a)({},(function(){var n=this,e=n.$createElement;return(n._self._c||e)("main",[n._t("default")],2)}),[],!1,null,"3dae9630",null);e.default=component.exports}},[[217,12,2,13]]]);