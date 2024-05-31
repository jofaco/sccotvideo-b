/*! For license information please see 474.0d9537d0.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkvideoteca_frontend=self.webpackChunkvideoteca_frontend||[]).push([[474],{8302:function(e,t,n){var r=n(7462),o=n(5987),i=n(2791),a=n(8182),u=n(8317),c=n(1122),l={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},s=i.forwardRef((function(e,t){var n=e.align,u=void 0===n?"inherit":n,s=e.classes,f=e.className,d=e.color,h=void 0===d?"initial":d,v=e.component,p=e.display,m=void 0===p?"initial":p,y=e.gutterBottom,g=void 0!==y&&y,w=e.noWrap,b=void 0!==w&&w,k=e.paragraph,E=void 0!==k&&k,T=e.variant,P=void 0===T?"body1":T,x=e.variantMapping,M=void 0===x?l:x,N=(0,o.Z)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),_=v||(E?"p":M[P]||l[P])||"span";return i.createElement(_,(0,r.Z)({className:(0,a.Z)(s.root,f,"inherit"!==P&&s[P],"initial"!==h&&s["color".concat((0,c.Z)(h))],b&&s.noWrap,g&&s.gutterBottom,E&&s.paragraph,"inherit"!==u&&s["align".concat((0,c.Z)(u))],"initial"!==m&&s["display".concat((0,c.Z)(m))]),ref:t},N))}));t.Z=(0,u.Z)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(s)},151:function(e,t,n){var r=n(4836);t.Z=void 0;var o=r(n(5649)),i=n(184),a=(0,o.default)((0,i.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");t.Z=a},1444:function(e,t,n){var r=n(4836);t.Z=void 0;var o=r(n(5649)),i=n(184),a=(0,o.default)((0,i.jsx)("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");t.Z=a},4554:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7462),o=n(3366),i=n(2791),a=n(8182),u=n(2421),c=n(104),l=n(8519),s=n(886),f=n(184),d=["className","component"];var h=n(5902),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.defaultTheme,n=e.defaultClassName,h=void 0===n?"MuiBox-root":n,v=e.generateClassName,p=(0,u.ZP)("div",{shouldForwardProp:function(e){return"theme"!==e&&"sx"!==e&&"as"!==e}})(c.Z),m=i.forwardRef((function(e,n){var i=(0,s.Z)(t),u=(0,l.Z)(e),c=u.className,m=u.component,y=void 0===m?"div":m,g=(0,o.Z)(u,d);return(0,f.jsx)(p,(0,r.Z)({as:y,ref:n,className:(0,a.Z)(c,v?v(h):h),theme:i},g))}));return m}({defaultTheme:(0,n(7107).Z)(),defaultClassName:"MuiBox-root",generateClassName:h.Z.generate}),p=v},3767:function(e,t,n){var r=n(4942),o=n(3366),i=n(7462),a=n(2791),u=n(1184),c=n(5682),l=n(8519),s=n(2466),f=n(7630),d=n(1046),h=n(184),v=["component","direction","spacing","divider","children"];function p(e,t){var n=a.Children.toArray(e).filter(Boolean);return n.reduce((function(e,r,o){return e.push(r),o<n.length-1&&e.push(a.cloneElement(t,{key:"separator-".concat(o)})),e}),[])}var m=(0,f.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return[t.root]}})((function(e){var t=e.ownerState,n=e.theme,o=(0,i.Z)({display:"flex",flexDirection:"column"},(0,u.k9)({theme:n},(0,u.P$)({values:t.direction,breakpoints:n.breakpoints.values}),(function(e){return{flexDirection:e}})));if(t.spacing){var a=(0,c.hB)(n),l=Object.keys(n.breakpoints.values).reduce((function(e,n){return("object"===typeof t.spacing&&null!=t.spacing[n]||"object"===typeof t.direction&&null!=t.direction[n])&&(e[n]=!0),e}),{}),f=(0,u.P$)({values:t.direction,base:l}),d=(0,u.P$)({values:t.spacing,base:l});"object"===typeof f&&Object.keys(f).forEach((function(e,t,n){if(!f[e]){var r=t>0?f[n[t-1]]:"column";f[e]=r}}));o=(0,s.Z)(o,(0,u.k9)({theme:n},d,(function(e,n){return{"& > :not(style) + :not(style)":(0,r.Z)({margin:0},"margin".concat((o=n?f[n]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o])),(0,c.NA)(a,e))};var o})))}return o=(0,u.dt)(n.breakpoints,o)})),y=a.forwardRef((function(e,t){var n=(0,d.Z)({props:e,name:"MuiStack"}),r=(0,l.Z)(n),a=r.component,u=void 0===a?"div":a,c=r.direction,s=void 0===c?"column":c,f=r.spacing,y=void 0===f?0:f,g=r.divider,w=r.children,b=(0,o.Z)(r,v),k={direction:s,spacing:y};return(0,h.jsx)(m,(0,i.Z)({as:u,ownerState:k,ref:t},b,{children:g?p(w,g):w}))}));t.Z=y},90:function(e,t,n){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i="undefined"!==typeof n.g&&"[object global]"==={}.toString.call(n.g);function a(e,t){return 0===e.indexOf(t.toLowerCase())?e:"".concat(t.toLowerCase()).concat(e.substr(0,1).toUpperCase()).concat(e.substr(1))}function u(e){return Boolean(e&&1===e.nodeType&&"nodeName"in e&&e.ownerDocument&&e.ownerDocument.defaultView)}function c(e){return!isNaN(parseFloat(e))&&isFinite(e)&&Math.floor(e)==e}function l(e){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)}function s(e){return/^https:\/\/player\.vimeo\.com\/video\/\d+/.test(e)}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,n=e.url,r=t||n;if(!r)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(c(r))return"https://vimeo.com/".concat(r);if(l(r))return r.replace("http:","https:");if(t)throw new TypeError("\u201c".concat(t,"\u201d is not a valid video id."));throw new TypeError("\u201c".concat(r,"\u201d is not a vimeo.com url."))}var d="undefined"!==typeof Array.prototype.indexOf,h="undefined"!==typeof window&&"undefined"!==typeof window.postMessage;if(!i&&(!d||!h))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var v="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{};!function(e){if(!e.WeakMap){var t=Object.prototype.hasOwnProperty,n=Object.defineProperty&&function(){try{return 1===Object.defineProperty({},"x",{value:1}).x}catch(e){}}(),r=function(e,t,r){n?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:r}):e[t]=r};e.WeakMap=function(){function e(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");if(r(this,"_id",i("_WeakMap")),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}function n(e,n){if(!o(e)||!t.call(e,"_id"))throw new TypeError(n+" method called on incompatible receiver "+typeof e)}function i(e){return e+"_"+a()+"."+a()}function a(){return Math.random().toString().substring(2)}return r(e.prototype,"delete",(function(e){if(n(this,"delete"),!o(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)&&(delete e[this._id],!0)})),r(e.prototype,"get",(function(e){if(n(this,"get"),o(e)){var t=e[this._id];return t&&t[0]===e?t[1]:void 0}})),r(e.prototype,"has",(function(e){if(n(this,"has"),!o(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)})),r(e.prototype,"set",(function(e,t){if(n(this,"set"),!o(e))throw new TypeError("Invalid value used as weak map key");var i=e[this._id];return i&&i[0]===e?(i[1]=t,this):(r(e,this._id,[e,t]),this)})),r(e,"_polyfill",!0),e}()}function o(e){return Object(e)===e}}("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:v);var p,m,y=(p=function(e){var t,n,r;r=function(){var e,t,n,r=Object.prototype.toString,o="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{}),e=function(e,t,n,r){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:!1!==r})}}catch(m){e=function(e,t,n){return e[t]=n,e}}function i(e,r){n.add(e,r),t||(t=o(n.drain))}function a(e){var t,n=typeof e;return null==e||"object"!=n&&"function"!=n||(t=e.then),"function"==typeof t&&t}function u(){for(var e=0;e<this.chain.length;e++)c(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function c(e,t,n){var r,o;try{!1===t?n.reject(e.msg):(r=!0===t?e.msg:t.call(void 0,e.msg))===n.promise?n.reject(TypeError("Promise-chain cycle")):(o=a(r))?o.call(r,n.resolve,n.reject):n.resolve(r)}catch(m){n.reject(m)}}function l(e){var t,n=this;if(!n.triggered){n.triggered=!0,n.def&&(n=n.def);try{(t=a(e))?i((function(){var r=new d(n);try{t.call(e,(function(){l.apply(r,arguments)}),(function(){s.apply(r,arguments)}))}catch(m){s.call(r,m)}})):(n.msg=e,n.state=1,n.chain.length>0&&i(u,n))}catch(m){s.call(new d(n),m)}}}function s(e){var t=this;t.triggered||(t.triggered=!0,t.def&&(t=t.def),t.msg=e,t.state=2,t.chain.length>0&&i(u,t))}function f(e,t,n,r){for(var o=0;o<t.length;o++)!function(o){e.resolve(t[o]).then((function(e){n(o,e)}),r)}(o)}function d(e){this.def=e,this.triggered=!1}function h(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function v(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var t=new h(this);this.then=function(e,n){var r={success:"function"!=typeof e||e,failure:"function"==typeof n&&n};return r.promise=new this.constructor((function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");r.resolve=e,r.reject=t})),t.chain.push(r),0!==t.state&&i(u,t),r.promise},this.catch=function(e){return this.then(void 0,e)};try{e.call(void 0,(function(e){l.call(t,e)}),(function(e){s.call(t,e)}))}catch(m){s.call(t,m)}}n=function(){var e,n,r;function o(e,t){this.fn=e,this.self=t,this.next=void 0}return{add:function(t,i){r=new o(t,i),n?n.next=r:e=r,n=r,r=void 0},drain:function(){var r=e;for(e=n=t=void 0;r;)r.fn.call(r.self),r=r.next}}}();var p=e({},"constructor",v,!1);return v.prototype=p,e(p,"__NPO__",0,!1),e(v,"resolve",(function(e){return e&&"object"==typeof e&&1===e.__NPO__?e:new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");t(e)}))})),e(v,"reject",(function(e){return new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");n(e)}))})),e(v,"all",(function(e){var t=this;return"[object Array]"!=r.call(e)?t.reject(TypeError("Not an array")):0===e.length?t.resolve([]):new t((function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");var o=e.length,i=Array(o),a=0;f(t,e,(function(e,t){i[e]=t,++a===o&&n(i)}),r)}))})),e(v,"race",(function(e){var t=this;return"[object Array]"!=r.call(e)?t.reject(TypeError("Not an array")):new t((function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");f(t,e,(function(e,t){n(t)}),r)}))})),v},(n=v)[t="Promise"]=n[t]||r(),e.exports&&(e.exports=n[t])},p(m={exports:{}},m.exports),m.exports),g=new WeakMap;function w(e,t,n){var r=g.get(e.element)||{};t in r||(r[t]=[]),r[t].push(n),g.set(e.element,r)}function b(e,t){return(g.get(e.element)||{})[t]||[]}function k(e,t,n){var r=g.get(e.element)||{};if(!r[t])return!0;if(!n)return r[t]=[],g.set(e.element,r),!0;var o=r[t].indexOf(n);return-1!==o&&r[t].splice(o,1),g.set(e.element,r),r[t]&&0===r[t].length}function E(e,t){var n=g.get(e);g.set(t,n),g.delete(e)}function T(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){return console.warn(t),{}}return e}function P(e,t,n){if(e.element.contentWindow&&e.element.contentWindow.postMessage){var r={method:t};void 0!==n&&(r.value=n);var o=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));o>=8&&o<10&&(r=JSON.stringify(r)),e.element.contentWindow.postMessage(r,e.origin)}}function x(e,t){var n,r=[];if((t=T(t)).event){if("error"===t.event)b(e,t.data.method).forEach((function(n){var r=new Error(t.data.message);r.name=t.data.name,n.reject(r),k(e,t.data.method,n)}));r=b(e,"event:".concat(t.event)),n=t.data}else if(t.method){var o=function(e,t){var n=b(e,t);if(n.length<1)return!1;var r=n.shift();return k(e,t,r),r}(e,t.method);o&&(r.push(o),n=t.value)}r.forEach((function(t){try{if("function"===typeof t)return void t.call(e,n);t.resolve(n)}catch(r){}}))}var M=["autopause","autoplay","background","byline","color","controls","dnt","height","id","interactive_params","keyboard","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","texttrack","title","transparent","url","width"];function N(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return M.reduce((function(t,n){var r=e.getAttribute("data-vimeo-".concat(n));return(r||""===r)&&(t[n]=""===r?1:r),t}),t)}function _(e,t){var n=e.html;if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var r=document.createElement("div");return r.innerHTML=n,t.appendChild(r.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function C(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return new Promise((function(r,o){if(!l(e))throw new TypeError("\u201c".concat(e,"\u201d is not a vimeo.com url."));var i="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e));for(var a in t)t.hasOwnProperty(a)&&(i+="&".concat(a,"=").concat(encodeURIComponent(t[a])));var u="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;u.open("GET",i,!0),u.onload=function(){if(404!==u.status)if(403!==u.status)try{var t=JSON.parse(u.responseText);if(403===t.domain_status_code)return _(t,n),void o(new Error("\u201c".concat(e,"\u201d is not embeddable.")));r(t)}catch(i){o(i)}else o(new Error("\u201c".concat(e,"\u201d is not embeddable.")));else o(new Error("\u201c".concat(e,"\u201d was not found.")))},u.onerror=function(){var e=u.status?" (".concat(u.status,")"):"";o(new Error("There was an error fetching the embed code from Vimeo".concat(e,".")))},u.send()}))}var j=new WeakMap,F=new WeakMap,S={},A=function(){function e(t){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(r(this,e),window.jQuery&&t instanceof jQuery&&(t.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),t=t[0]),"undefined"!==typeof document&&"string"===typeof t&&(t=document.getElementById(t)),!u(t))throw new TypeError("You must pass either a valid element or a valid id.");if("IFRAME"!==t.nodeName){var i=t.querySelector("iframe");i&&(t=i)}if("IFRAME"===t.nodeName&&!l(t.getAttribute("src")||""))throw new Error("The player element passed isn\u2019t a Vimeo embed.");if(j.has(t))return j.get(t);this._window=t.ownerDocument.defaultView,this.element=t,this.origin="*";var a=new y((function(e,r){if(n._onMessage=function(t){if(l(t.origin)&&n.element.contentWindow===t.source){"*"===n.origin&&(n.origin=t.origin);var o=T(t.data);if(o&&"error"===o.event&&o.data&&"ready"===o.data.method){var i=new Error(o.data.message);return i.name=o.data.name,void r(i)}var a=o&&"ready"===o.event,u=o&&"ping"===o.method;if(a||u)return n.element.setAttribute("data-ready","true"),void e();x(n,o)}},n._window.addEventListener("message",n._onMessage),"IFRAME"!==n.element.nodeName){var i=N(t,o);C(f(i),i,t).then((function(e){var r=_(e,t);return n.element=r,n._originalElement=t,E(t,r),j.set(n.element,n),e})).catch(r)}}));if(F.set(this,a),j.set(this.element,this),"IFRAME"===this.element.nodeName&&P(this,"ping"),S.isEnabled){var c=function(){return S.exit()};this.fullscreenchangeHandler=function(){S.isFullscreen?w(n,"event:exitFullscreen",c):k(n,"event:exitFullscreen",c),n.ready().then((function(){P(n,"fullscreenchange",S.isFullscreen)}))},S.on("fullscreenchange",this.fullscreenchangeHandler)}return this}var t,n,i;return t=e,n=[{key:"callMethod",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new y((function(r,o){return t.ready().then((function(){w(t,e,{resolve:r,reject:o}),P(t,e,n)})).catch(o)}))}},{key:"get",value:function(e){var t=this;return new y((function(n,r){return e=a(e,"get"),t.ready().then((function(){w(t,e,{resolve:n,reject:r}),P(t,e)})).catch(r)}))}},{key:"set",value:function(e,t){var n=this;return new y((function(r,o){if(e=a(e,"set"),void 0===t||null===t)throw new TypeError("There must be a value to set.");return n.ready().then((function(){w(n,e,{resolve:r,reject:o}),P(n,e,t)})).catch(o)}))}},{key:"on",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(!t)throw new TypeError("You must pass a callback function.");if("function"!==typeof t)throw new TypeError("The callback must be a function.");0===b(this,"event:".concat(e)).length&&this.callMethod("addEventListener",e).catch((function(){})),w(this,"event:".concat(e),t)}},{key:"off",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!==typeof t)throw new TypeError("The callback must be a function.");k(this,"event:".concat(e),t)&&this.callMethod("removeEventListener",e).catch((function(e){}))}},{key:"loadVideo",value:function(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function(){var e=F.get(this)||new y((function(e,t){t(new Error("Unknown player. Probably unloaded."))}));return y.resolve(e)}},{key:"addCuePoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.callMethod("addCuePoint",{time:e,data:t})}},{key:"removeCuePoint",value:function(e){return this.callMethod("removeCuePoint",e)}},{key:"enableTextTrack",value:function(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"requestFullscreen",value:function(){return S.isEnabled?S.request(this.element):this.callMethod("requestFullscreen")}},{key:"exitFullscreen",value:function(){return S.isEnabled?S.exit():this.callMethod("exitFullscreen")}},{key:"getFullscreen",value:function(){return S.isEnabled?y.resolve(S.isFullscreen):this.get("fullscreen")}},{key:"requestPictureInPicture",value:function(){return this.callMethod("requestPictureInPicture")}},{key:"exitPictureInPicture",value:function(){return this.callMethod("exitPictureInPicture")}},{key:"getPictureInPicture",value:function(){return this.get("pictureInPicture")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var e=this;return new y((function(t){if(F.delete(e),j.delete(e.element),e._originalElement&&(j.delete(e._originalElement),e._originalElement.removeAttribute("data-vimeo-initialized")),e.element&&"IFRAME"===e.element.nodeName&&e.element.parentNode&&(e.element.parentNode.parentNode&&e._originalElement&&e._originalElement!==e.element.parentNode?e.element.parentNode.parentNode.removeChild(e.element.parentNode):e.element.parentNode.removeChild(e.element)),e.element&&"DIV"===e.element.nodeName&&e.element.parentNode){e.element.removeAttribute("data-vimeo-initialized");var n=e.element.querySelector("iframe");n&&n.parentNode&&(n.parentNode.parentNode&&e._originalElement&&e._originalElement!==n.parentNode?n.parentNode.parentNode.removeChild(n.parentNode):n.parentNode.removeChild(n))}e._window.removeEventListener("message",e._onMessage),S.isEnabled&&S.off("fullscreenchange",e.fullscreenchangeHandler),t()}))}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(e){return this.set("autopause",e)}},{key:"getBuffered",value:function(){return this.get("buffered")}},{key:"getCameraProps",value:function(){return this.get("cameraProps")}},{key:"setCameraProps",value:function(e){return this.set("cameraProps",e)}},{key:"getChapters",value:function(){return this.get("chapters")}},{key:"getCurrentChapter",value:function(){return this.get("currentChapter")}},{key:"getColor",value:function(){return this.get("color")}},{key:"setColor",value:function(e){return this.set("color",e)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(e){return this.set("currentTime",e)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(e){return this.set("loop",e)}},{key:"setMuted",value:function(e){return this.set("muted",e)}},{key:"getMuted",value:function(){return this.get("muted")}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(e){return this.set("playbackRate",e)}},{key:"getPlayed",value:function(){return this.get("played")}},{key:"getQualities",value:function(){return this.get("qualities")}},{key:"getQuality",value:function(){return this.get("quality")}},{key:"setQuality",value:function(e){return this.set("quality",e)}},{key:"getSeekable",value:function(){return this.get("seekable")}},{key:"getSeeking",value:function(){return this.get("seeking")}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(e){return this.set("volume",e)}}],n&&o(t.prototype,n),i&&o(t,i),e}();i||(S=function(){var e=function(){for(var e,t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n=0,r=t.length,o={};n<r;n++)if((e=t[n])&&e[1]in document){for(n=0;n<e.length;n++)o[t[0][n]]=e[n];return o}return!1}(),t={fullscreenchange:e.fullscreenchange,fullscreenerror:e.fullscreenerror},n={request:function(t){return new Promise((function(r,o){var i=function e(){n.off("fullscreenchange",e),r()};n.on("fullscreenchange",i);var a=(t=t||document.documentElement)[e.requestFullscreen]();a instanceof Promise&&a.then(i).catch(o)}))},exit:function(){return new Promise((function(t,r){if(n.isFullscreen){var o=function e(){n.off("fullscreenchange",e),t()};n.on("fullscreenchange",o);var i=document[e.exitFullscreen]();i instanceof Promise&&i.then(o).catch(r)}else t()}))},on:function(e,n){var r=t[e];r&&document.addEventListener(r,n)},off:function(e,n){var r=t[e];r&&document.removeEventListener(r,n)}};return Object.defineProperties(n,{isFullscreen:{get:function(){return Boolean(document[e.fullscreenElement])}},element:{enumerable:!0,get:function(){return document[e.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(document[e.fullscreenEnabled])}}}),n}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),n=function(e){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(e))};t.forEach((function(e){try{if(null!==e.getAttribute("data-vimeo-defer"))return;var t=N(e);C(f(t),t,e).then((function(t){return _(t,e)})).catch(n)}catch(r){n(r)}}))}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!window.VimeoPlayerResizeEmbeds_){window.VimeoPlayerResizeEmbeds_=!0;var t=function(t){if(l(t.origin)&&t.data&&"spacechange"===t.data.event)for(var n=e.querySelectorAll("iframe"),r=0;r<n.length;r++)if(n[r].contentWindow===t.source){n[r].parentElement.style.paddingBottom="".concat(t.data.data[0].bottom,"px");break}};window.addEventListener("message",t)}}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!window.VimeoSeoMetadataAppended){window.VimeoSeoMetadataAppended=!0;var t=function(t){if(l(t.origin)){var n=T(t.data);if(n&&"ready"===n.event)for(var r=e.querySelectorAll("iframe"),o=0;o<r.length;o++){var i=r[o],a=i.contentWindow===t.source;s(i.src)&&a&&new A(i).callMethod("appendVideoMetadata",window.location.href)}}};window.addEventListener("message",t)}}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!window.VimeoCheckedUrlTimeParam){window.VimeoCheckedUrlTimeParam=!0;var t=function(e){"console"in window&&console.error&&console.error("There was an error getting video Id: ".concat(e))},n=function(n){if(l(n.origin)){var r=T(n.data);if(r&&"ready"===r.event)for(var o=e.querySelectorAll("iframe"),i=0;i<o.length;i++){var a=o[i],u=a.contentWindow===n.source;s(a.src)&&u&&function(){var e=new A(a);e.getVideoId().then((function(t){var n=new RegExp("[?&]vimeo_t_".concat(t,"=([^&#]*)")).exec(window.location.href);if(n&&n[1]){var r=decodeURI(n[1]);e.setCurrentTime(r)}})).catch(t)}()}}};window.addEventListener("message",n)}}()),t.Z=A}}]);
//# sourceMappingURL=474.0d9537d0.chunk.js.map