(window.webpackJsonp=window.webpackJsonp||[]).push([[1,12,19],{449:function(e,t,n){var content=n(458);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(35).default)("4237e96e",content,!0,{sourceMap:!1})},457:function(e,t,n){"use strict";n(449)},458:function(e,t,n){var r=n(34)(!1);r.push([e.i,".render-view{background:var(--color-lighten-1);min-height:100%;padding:1rem}.render-view>:first-child{margin-top:0}.render-view a{text-decoration:underline}",""]),e.exports=r},463:function(e,t,n){var content=n(479);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(35).default)("43e61508",content,!0,{sourceMap:!1})},468:function(e,t,n){"use strict";n.r(t);var r=n(17),o=n(473),l=n.n(o),h=Object(r.a)({props:{input:{type:String,required:!0},sanitize:{type:Boolean,default:!1}},computed:{htmlOutput:function(){var e=this.$md(this.input);return this.sanitize?l.a.sanitize(e):e}}}),d=(n(457),n(9)),component=Object(d.a)(h,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"render-view",domProps:{innerHTML:e._s(e.htmlOutput)}})}),[],!1,null,null,null);t.default=component.exports},478:function(e,t,n){"use strict";n(463)},479:function(e,t,n){var r=n(34)(!1);r.push([e.i,".editor[data-v-41b3aa2a]{display:block;background:transparent;border:none;color:var(--text-primary);height:100%;padding:1rem;resize:none;overflow-wrap:normal;overflow-x:auto;tab-size:var(--tab-size);width:100%}.editor[data-v-41b3aa2a]:focus-visible{outline:none}",""]),e.exports=r},482:function(e,t,n){var content=n(501);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(35).default)("e307d75a",content,!0,{sourceMap:!1})},489:function(e,t,n){"use strict";n.r(t);var r=n(17),o=Object(r.a)({props:{value:{type:String,required:!0}},computed:{textArea:function(){return this.$refs.textarea}},mounted:function(){this.textArea.addEventListener("keydown",this.$indentHandler)},beforeDestroy:function(){this.textArea.removeEventListener("keydown",this.$indentHandler)}}),l=(n(478),n(9)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("textarea",{ref:"textarea",staticClass:"editor",attrs:{placeholder:e.$t("editor.placeholder"),wrap:"off"},domProps:{value:e.value},on:{input:function(t){return t.preventDefault(),e.$emit("input",t.target.value)}}})}),[],!1,null,"41b3aa2a",null);t.default=component.exports},498:function(e,t,n){var content=n(499);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(35).default)("143cbdd0",content,!0,{sourceMap:!1})},499:function(e,t,n){var r=n(34)(!1);r.push([e.i,'.splitpanes{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;height:100%}.splitpanes--vertical{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.splitpanes--horizontal{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.splitpanes--dragging *{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.splitpanes__pane{width:100%;height:100%;overflow:hidden}.splitpanes--vertical .splitpanes__pane{-webkit-transition:width .2s ease-out;-o-transition:width .2s ease-out;transition:width .2s ease-out}.splitpanes--horizontal .splitpanes__pane{-webkit-transition:height .2s ease-out;-o-transition:height .2s ease-out;transition:height .2s ease-out}.splitpanes--dragging .splitpanes__pane{-webkit-transition:none;-o-transition:none;transition:none}.splitpanes__splitter{-ms-touch-action:none;touch-action:none}.splitpanes--vertical>.splitpanes__splitter{min-width:1px;cursor:col-resize}.splitpanes--horizontal>.splitpanes__splitter{min-height:1px;cursor:row-resize}.splitpanes.default-theme .splitpanes__pane{background-color:#f2f2f2}.splitpanes.default-theme .splitpanes__splitter{background-color:#fff;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;-ms-flex-negative:0;flex-shrink:0}.splitpanes.default-theme .splitpanes__splitter:after,.splitpanes.default-theme .splitpanes__splitter:before{content:"";position:absolute;top:50%;left:50%;background-color:rgba(0,0,0,.14901960784313725);-webkit-transition:background-color .3s;-o-transition:background-color .3s;transition:background-color .3s}.splitpanes.default-theme .splitpanes__splitter:hover:after,.splitpanes.default-theme .splitpanes__splitter:hover:before{background-color:rgba(0,0,0,.25098039215686274)}.splitpanes.default-theme .splitpanes__splitter:first-child{cursor:auto}.default-theme.splitpanes .splitpanes .splitpanes__splitter{z-index:1}.default-theme.splitpanes--vertical>.splitpanes__splitter,.default-theme .splitpanes--vertical>.splitpanes__splitter{width:7px;border-left:1px solid #eee;margin-left:-1px}.default-theme.splitpanes--vertical>.splitpanes__splitter:after,.default-theme .splitpanes--vertical>.splitpanes__splitter:after,.default-theme.splitpanes--vertical>.splitpanes__splitter:before,.default-theme .splitpanes--vertical>.splitpanes__splitter:before{-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:1px;height:30px}.default-theme.splitpanes--vertical>.splitpanes__splitter:before,.default-theme .splitpanes--vertical>.splitpanes__splitter:before{margin-left:-2px}.default-theme.splitpanes--vertical>.splitpanes__splitter:after,.default-theme .splitpanes--vertical>.splitpanes__splitter:after{margin-left:1px}.default-theme.splitpanes--horizontal>.splitpanes__splitter,.default-theme .splitpanes--horizontal>.splitpanes__splitter{height:7px;border-top:1px solid #eee;margin-top:-1px}.default-theme.splitpanes--horizontal>.splitpanes__splitter:after,.default-theme .splitpanes--horizontal>.splitpanes__splitter:after,.default-theme.splitpanes--horizontal>.splitpanes__splitter:before,.default-theme .splitpanes--horizontal>.splitpanes__splitter:before{-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translate(-50%);width:30px;height:1px}.default-theme.splitpanes--horizontal>.splitpanes__splitter:before,.default-theme .splitpanes--horizontal>.splitpanes__splitter:before{margin-top:-2px}.default-theme.splitpanes--horizontal>.splitpanes__splitter:after,.default-theme .splitpanes--horizontal>.splitpanes__splitter:after{margin-top:1px}',""]),e.exports=r},500:function(e,t,n){"use strict";n(482)},501:function(e,t,n){var r=n(34)(!1);r.push([e.i,".splitpanes{flex-grow:1;overflow-y:auto}.container>*{flex-grow:1}.pane{overflow-y:auto}",""]),e.exports=r},506:function(e,t,n){"use strict";n.r(t);n(40),n(28),n(37),n(16),n(55),n(36),n(56);var r=n(24),o=n(17),l=Object.defineProperty,h=Object.defineProperties,d=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,z=(a,b)=>{for(var e in b||(b={}))m.call(b,e)&&v(a,e,b[e]);if(c)for(var e of c(b))f.call(b,e)&&v(a,e,b[e]);return a};function x(e,t,n,r,o,l,h,d){var c,m="function"==typeof e?e.options:e;if(t&&(m.render=t,m.staticRenderFns=n,m._compiled=!0),r&&(m.functional=!0),l&&(m._scopeId="data-v-"+l),h?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(h)},m._ssrRegister=c):o&&(c=d?function(){o.call(this,(m.functional?this.parent:this).$root.$options.shadowRoot)}:o),c)if(m.functional){m._injectStyles=c;var f=m.render;m.render=function(e,t){return c.call(t),f(e,t)}}else{var v=m.beforeCreate;m.beforeCreate=v?[].concat(v,c):[c]}return{exports:e,options:m}}const _={name:"splitpanes",props:{horizontal:{type:Boolean},pushOtherPanes:{type:Boolean,default:!0},dblClickSplitter:{type:Boolean,default:!0},rtl:{type:Boolean,default:!1},firstSplitter:{type:Boolean}},provide(){return{requestUpdate:this.requestUpdate,onPaneAdd:this.onPaneAdd,onPaneRemove:this.onPaneRemove,onPaneClick:this.onPaneClick}},data:()=>({container:null,ready:!1,panes:[],touch:{mouseDown:!1,dragging:!1,activeSplitter:null},splitterTaps:{splitter:null,timeoutId:null}}),computed:{panesCount(){return this.panes.length},indexedPanes(){return this.panes.reduce(((e,t)=>(e[t.id]=t)&&e),{})}},methods:{updatePaneComponents(){this.panes.forEach((e=>{e.update&&e.update({[this.horizontal?"height":"width"]:`${this.indexedPanes[e.id].size}%`})}))},bindEvents(){document.addEventListener("mousemove",this.onMouseMove,{passive:!1}),document.addEventListener("mouseup",this.onMouseUp),"ontouchstart"in window&&(document.addEventListener("touchmove",this.onMouseMove,{passive:!1}),document.addEventListener("touchend",this.onMouseUp))},unbindEvents(){document.removeEventListener("mousemove",this.onMouseMove,{passive:!1}),document.removeEventListener("mouseup",this.onMouseUp),"ontouchstart"in window&&(document.removeEventListener("touchmove",this.onMouseMove,{passive:!1}),document.removeEventListener("touchend",this.onMouseUp))},onMouseDown(e,t){this.bindEvents(),this.touch.mouseDown=!0,this.touch.activeSplitter=t},onMouseMove(e){this.touch.mouseDown&&(e.preventDefault(),this.touch.dragging=!0,this.calculatePanesSize(this.getCurrentMouseDrag(e)),this.$emit("resize",this.panes.map((e=>({min:e.min,max:e.max,size:e.size})))))},onMouseUp(){this.touch.dragging&&this.$emit("resized",this.panes.map((e=>({min:e.min,max:e.max,size:e.size})))),this.touch.mouseDown=!1,setTimeout((()=>{this.touch.dragging=!1,this.unbindEvents()}),100)},onSplitterClick(e,t){"ontouchstart"in window&&(e.preventDefault(),this.dblClickSplitter&&(this.splitterTaps.splitter===t?(clearTimeout(this.splitterTaps.timeoutId),this.splitterTaps.timeoutId=null,this.onSplitterDblClick(e,t),this.splitterTaps.splitter=null):(this.splitterTaps.splitter=t,this.splitterTaps.timeoutId=setTimeout((()=>{this.splitterTaps.splitter=null}),500)))),this.touch.dragging||this.$emit("splitter-click",this.panes[t])},onSplitterDblClick(e,t){let n=0;this.panes=this.panes.map(((e,i)=>(e.size=i===t?e.max:e.min,i!==t&&(n+=e.min),e))),this.panes[t].size-=n,this.$emit("pane-maximize",this.panes[t])},onPaneClick(e,t){this.$emit("pane-click",this.indexedPanes[t])},getCurrentMouseDrag(e){const rect=this.container.getBoundingClientRect(),{clientX:t,clientY:n}="ontouchstart"in window&&e.touches?e.touches[0]:e;return{x:t-rect.left,y:n-rect.top}},getCurrentDragPercentage(e){e=e[this.horizontal?"y":"x"];const t=this.container[this.horizontal?"clientHeight":"clientWidth"];return this.rtl&&!this.horizontal&&(e=t-e),100*e/t},calculatePanesSize(e){const t=this.touch.activeSplitter;let n={prevPanesSize:this.sumPrevPanesSize(t),nextPanesSize:this.sumNextPanesSize(t),prevReachedMinPanes:0,nextReachedMinPanes:0};const r=0+(this.pushOtherPanes?0:n.prevPanesSize),o=100-(this.pushOtherPanes?0:n.nextPanesSize),l=Math.max(Math.min(this.getCurrentDragPercentage(e),o),r);let h=[t,t+1],d=this.panes[h[0]]||null,c=this.panes[h[1]]||null;const m=d.max<100&&l>=d.max+n.prevPanesSize,f=c.max<100&&l<=100-(c.max+this.sumNextPanesSize(t+1));if(m||f)m?(d.size=d.max,c.size=Math.max(100-d.max-n.prevPanesSize-n.nextPanesSize,0)):(d.size=Math.max(100-c.max-n.prevPanesSize-this.sumNextPanesSize(t+1),0),c.size=c.max);else{if(this.pushOtherPanes){const e=this.doPushOtherPanes(n,l);if(!e)return;({sums:n,panesToResize:h}=e),d=this.panes[h[0]]||null,c=this.panes[h[1]]||null}null!==d&&(d.size=Math.min(Math.max(l-n.prevPanesSize-n.prevReachedMinPanes,d.min),d.max)),null!==c&&(c.size=Math.min(Math.max(100-l-n.nextPanesSize-n.nextReachedMinPanes,c.min),c.max))}},doPushOtherPanes(e,t){const n=this.touch.activeSplitter,r=[n,n+1];return t<e.prevPanesSize+this.panes[r[0]].min&&(r[0]=this.findPrevExpandedPane(n).index,e.prevReachedMinPanes=0,r[0]<n&&this.panes.forEach(((t,i)=>{i>r[0]&&i<=n&&(t.size=t.min,e.prevReachedMinPanes+=t.min)})),e.prevPanesSize=this.sumPrevPanesSize(r[0]),void 0===r[0])?(e.prevReachedMinPanes=0,this.panes[0].size=this.panes[0].min,this.panes.forEach(((t,i)=>{i>0&&i<=n&&(t.size=t.min,e.prevReachedMinPanes+=t.min)})),this.panes[r[1]].size=100-e.prevReachedMinPanes-this.panes[0].min-e.prevPanesSize-e.nextPanesSize,null):t>100-e.nextPanesSize-this.panes[r[1]].min&&(r[1]=this.findNextExpandedPane(n).index,e.nextReachedMinPanes=0,r[1]>n+1&&this.panes.forEach(((t,i)=>{i>n&&i<r[1]&&(t.size=t.min,e.nextReachedMinPanes+=t.min)})),e.nextPanesSize=this.sumNextPanesSize(r[1]-1),void 0===r[1])?(e.nextReachedMinPanes=0,this.panes[this.panesCount-1].size=this.panes[this.panesCount-1].min,this.panes.forEach(((t,i)=>{i<this.panesCount-1&&i>=n+1&&(t.size=t.min,e.nextReachedMinPanes+=t.min)})),this.panes[r[0]].size=100-e.prevPanesSize-e.nextReachedMinPanes-this.panes[this.panesCount-1].min-e.nextPanesSize,null):{sums:e,panesToResize:r}},sumPrevPanesSize(e){return this.panes.reduce(((t,n,i)=>t+(i<e?n.size:0)),0)},sumNextPanesSize(e){return this.panes.reduce(((t,n,i)=>t+(i>e+1?n.size:0)),0)},findPrevExpandedPane(e){return[...this.panes].reverse().find((p=>p.index<e&&p.size>p.min))||{}},findNextExpandedPane(e){return this.panes.find((p=>p.index>e+1&&p.size>p.min))||{}},checkSplitpanesNodes(){Array.from(this.container.children).forEach((e=>{const t=e.classList.contains("splitpanes__pane"),n=e.classList.contains("splitpanes__splitter");if(!t&&!n)return e.parentNode.removeChild(e),void console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed.")}))},addSplitter(e,t,n=!1){const r=e-1,o=document.createElement("div");o.classList.add("splitpanes__splitter"),n||(o.onmousedown=e=>this.onMouseDown(e,r),"undefined"!=typeof window&&"ontouchstart"in window&&(o.ontouchstart=e=>this.onMouseDown(e,r)),o.onclick=e=>this.onSplitterClick(e,r+1)),this.dblClickSplitter&&(o.ondblclick=e=>this.onSplitterDblClick(e,r+1)),t.parentNode.insertBefore(o,t)},removeSplitter(e){e.onmousedown=void 0,e.onclick=void 0,e.ondblclick=void 0,e.parentNode.removeChild(e)},redoSplitters(){const e=Array.from(this.container.children);e.forEach((e=>{e.className.includes("splitpanes__splitter")&&this.removeSplitter(e)}));let t=0;e.forEach((e=>{e.className.includes("splitpanes__pane")&&(!t&&this.firstSplitter?this.addSplitter(t,e,!0):t&&this.addSplitter(t,e),t++)}))},requestUpdate(e){var t=e,{target:n}=t,r=((source,e)=>{var t={};for(var n in source)m.call(source,n)&&e.indexOf(n)<0&&(t[n]=source[n]);if(null!=source&&c)for(var n of c(source))e.indexOf(n)<0&&f.call(source,n)&&(t[n]=source[n]);return t})(t,["target"]);const o=this.indexedPanes[n._uid];Object.entries(r).forEach((([e,t])=>o[e]=t))},onPaneAdd(e){let t=-1;Array.from(e.$el.parentNode.children).some((n=>(n.className.includes("splitpanes__pane")&&t++,n===e.$el)));const n=parseFloat(e.minSize),r=parseFloat(e.maxSize);this.panes.splice(t,0,{id:e._uid,index:t,min:isNaN(n)?0:n,max:isNaN(r)?100:r,size:null===e.size?null:parseFloat(e.size),givenSize:e.size,update:e.update}),this.panes.forEach(((p,i)=>p.index=i)),this.ready&&this.$nextTick((()=>{this.redoSplitters(),this.resetPaneSizes({addedPane:this.panes[t]}),this.$emit("pane-add",{index:t,panes:this.panes.map((e=>({min:e.min,max:e.max,size:e.size})))})}))},onPaneRemove(e){const t=this.panes.findIndex((p=>p.id===e._uid)),n=this.panes.splice(t,1)[0];this.panes.forEach(((p,i)=>p.index=i)),this.$nextTick((()=>{var a,b;this.redoSplitters(),this.resetPaneSizes({removedPane:(a=z({},n),b={index:t},h(a,d(b)))}),this.$emit("pane-remove",{removed:n,panes:this.panes.map((e=>({min:e.min,max:e.max,size:e.size})))})}))},resetPaneSizes(e={}){e.addedPane||e.removedPane?this.panes.some((e=>null!==e.givenSize||e.min||e.max<100))?this.equalizeAfterAddOrRemove(e):this.equalize():this.initialPanesSizing(),this.ready&&this.$emit("resized",this.panes.map((e=>({min:e.min,max:e.max,size:e.size}))))},equalize(){const e=100/this.panesCount;let t=0,n=[],r=[];this.panes.forEach((o=>{o.size=Math.max(Math.min(e,o.max),o.min),t-=o.size,o.size>=o.max&&n.push(o.id),o.size<=o.min&&r.push(o.id)})),t>.1&&this.readjustSizes(t,n,r)},initialPanesSizing(){this.panesCount;let e=100,t=[],n=[],r=0;this.panes.forEach((o=>{e-=o.size,null!==o.size&&r++,o.size>=o.max&&t.push(o.id),o.size<=o.min&&n.push(o.id)}));let o=100;e>.1&&(this.panes.forEach((t=>{null===t.size&&(t.size=Math.max(Math.min(e/(this.panesCount-r),t.max),t.min)),o-=t.size})),o>.1&&this.readjustSizes(e,t,n))},equalizeAfterAddOrRemove({addedPane:e,removedPane:t}={}){let n=100/this.panesCount,r=0,o=[],l=[];e&&null!==e.givenSize&&(n=(100-e.givenSize)/(this.panesCount-1)),this.panes.forEach((e=>{r-=e.size,e.size>=e.max&&o.push(e.id),e.size<=e.min&&l.push(e.id)})),Math.abs(r)<.1||(this.panes.forEach((t=>{e&&null!==e.givenSize&&e.id===t.id||(t.size=Math.max(Math.min(n,t.max),t.min)),r-=t.size,t.size>=t.max&&o.push(t.id),t.size<=t.min&&l.push(t.id)})),r>.1&&this.readjustSizes(r,o,l))},readjustSizes(e,t,n){let r;r=e>0?e/(this.panesCount-t.length):e/(this.panesCount-n.length),this.panes.forEach(((o,i)=>{if(e>0&&!t.includes(o.id)){const t=Math.max(Math.min(o.size+r,o.max),o.min),n=t-o.size;e-=n,o.size=t}else if(!n.includes(o.id)){const t=Math.max(Math.min(o.size+r,o.max),o.min),n=t-o.size;e-=n,o.size=t}o.update({[this.horizontal?"height":"width"]:`${this.indexedPanes[o.id].size}%`})})),Math.abs(e)>.1&&this.$nextTick((()=>{this.ready&&console.warn("Splitpanes: Could not resize panes correctly due to their constraints.")}))}},watch:{panes:{deep:!0,immediate:!1,handler(){this.updatePaneComponents()}},horizontal(){this.updatePaneComponents()},firstSplitter(){this.redoSplitters()},dblClickSplitter(e){[...this.container.querySelectorAll(".splitpanes__splitter")].forEach(((t,i)=>{t.ondblclick=e?e=>this.onSplitterDblClick(e,i):void 0}))}},beforeDestroy(){this.ready=!1},mounted(){this.container=this.$refs.container,this.checkSplitpanesNodes(),this.redoSplitters(),this.resetPaneSizes(),this.$emit("ready"),this.ready=!0},render(e){return e("div",{ref:"container",class:["splitpanes","splitpanes--"+(this.horizontal?"horizontal":"vertical"),{"splitpanes--dragging":this.touch.dragging}]},this.$slots.default)}};const P={};var S=x(_,undefined,undefined,!1,w,null,null,null);function w(e){for(let e in P)this[e]=P[e]}var y=function(){return S.exports}();const M={};var k=x({name:"pane",inject:["requestUpdate","onPaneAdd","onPaneRemove","onPaneClick"],props:{size:{type:[Number,String],default:null},minSize:{type:[Number,String],default:0},maxSize:{type:[Number,String],default:100}},data:()=>({style:{}}),mounted(){this.onPaneAdd(this)},beforeDestroy(){this.onPaneRemove(this)},methods:{update(style){this.style=style}},computed:{sizeNumber(){return this.size||0===this.size?parseFloat(this.size):null},minSizeNumber(){return parseFloat(this.minSize)},maxSizeNumber(){return parseFloat(this.maxSize)}},watch:{sizeNumber(e){this.requestUpdate({target:this,size:e})},minSizeNumber(e){this.requestUpdate({target:this,min:e})},maxSizeNumber(e){this.requestUpdate({target:this,max:e})}}},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"splitpanes__pane",style:e.style,on:{click:function(t){return e.onPaneClick(t,e._uid)}}},[e._t("default")],2)}),[],!1,C,null,null,null);function C(e){for(let e in M)this[e]=M[e]}var E=function(){return k.exports}();n(498);function O(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function $(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var j=Object(o.a)({components:{Splitpanes:y,Pane:E},props:{id:{type:String,required:!0}},computed:{section:function(){return this.$store.getters["sections/byId"](this.id)},content:{get:function(){return this.section.content},set:function(e){this.$store.commit("sections/add",$($({},this.section),{},{content:e})),this.$store.commit("notebooks/updateLastEdit",this.section.notebookId)}},sanitize:function(){return this.$store.getters["settings/sanitize"]}}}),N=(n(500),n(9)),component=Object(N.a)(j,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("splitpanes",{staticClass:"splitpanes"},[n("pane",{staticClass:"pane",attrs:{"min-size":0}},[n("Editor",{model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1),e._v(" "),n("pane",{staticClass:"pane",attrs:{"min-size":0}},[n("RenderView",{attrs:{input:e.content,sanitize:e.sanitize}})],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Editor:n(489).default,RenderView:n(468).default})}}]);