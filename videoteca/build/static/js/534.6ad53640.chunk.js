/*! For license information please see 534.6ad53640.chunk.js.LICENSE.txt */
(self.webpackChunkvideoteca_frontend=self.webpackChunkvideoteca_frontend||[]).push([[534],{3712:function(n,t,e){"use strict";var r=e(7462),i=e(5987),u=e(4942),o=e(2791),a=e(8182),c=e(8317),s=e(1122),f=o.forwardRef((function(n,t){var e=n.classes,u=n.className,c=n.component,f=void 0===c?"div":c,d=n.disableGutters,l=void 0!==d&&d,v=n.fixed,p=void 0!==v&&v,m=n.maxWidth,b=void 0===m?"lg":m,g=(0,i.Z)(n,["classes","className","component","disableGutters","fixed","maxWidth"]);return o.createElement(f,(0,r.Z)({className:(0,a.Z)(e.root,u,p&&e.fixed,l&&e.disableGutters,!1!==b&&e["maxWidth".concat((0,s.Z)(String(b)))]),ref:t},g))}));t.Z=(0,c.Z)((function(n){return{root:(0,u.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:n.spacing(2),paddingRight:n.spacing(2),display:"block"},n.breakpoints.up("sm"),{paddingLeft:n.spacing(3),paddingRight:n.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(n.breakpoints.values).reduce((function(t,e){var r=n.breakpoints.values[e];return 0!==r&&(t[n.breakpoints.up(e)]={maxWidth:r}),t}),{}),maxWidthXs:(0,u.Z)({},n.breakpoints.up("xs"),{maxWidth:Math.max(n.breakpoints.values.xs,444)}),maxWidthSm:(0,u.Z)({},n.breakpoints.up("sm"),{maxWidth:n.breakpoints.values.sm}),maxWidthMd:(0,u.Z)({},n.breakpoints.up("md"),{maxWidth:n.breakpoints.values.md}),maxWidthLg:(0,u.Z)({},n.breakpoints.up("lg"),{maxWidth:n.breakpoints.values.lg}),maxWidthXl:(0,u.Z)({},n.breakpoints.up("xl"),{maxWidth:n.breakpoints.values.xl})}}),{name:"MuiContainer"})(f)},8633:function(n,t,e){"use strict";e.d(t,{Z:function(){return i}});var r=e(2791);function i(){return(0,r.useState)(null)}},7904:function(n,t,e){"use strict";var r=e(2791);t.Z=function(n){var t=(0,r.useRef)(n);return(0,r.useEffect)((function(){t.current=n}),[n]),t}},9007:function(n,t,e){"use strict";e.d(t,{Z:function(){return u}});var r=e(2791),i=e(7904);function u(n){var t=(0,i.Z)(n);return(0,r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},3201:function(n,t,e){"use strict";var r=e(2791),i=function(n){return n&&"function"!==typeof n?function(t){n.current=t}:n};t.Z=function(n,t){return(0,r.useMemo)((function(){return function(n,t){var e=i(n),r=i(t);return function(n){e&&e(n),r&&r(n)}}(n,t)}),[n,t])}},5746:function(n,t,e){"use strict";e.d(t,{Z:function(){return i}});var r=e(2791);function i(){var n=(0,r.useRef)(!0),t=(0,r.useRef)((function(){return n.current}));return(0,r.useEffect)((function(){return n.current=!0,function(){n.current=!1}}),[]),t.current}},2803:function(n,t,e){"use strict";e.d(t,{Z:function(){return i}});var r=e(2791);function i(n){var t=(0,r.useRef)(null);return(0,r.useEffect)((function(){t.current=n})),t.current}},1683:function(n,t,e){"use strict";e.d(t,{Z:function(){return i}});var r=e(2791);function i(n){var t=function(n){var t=(0,r.useRef)(n);return t.current=n,t}(n);(0,r.useEffect)((function(){return function(){return t.current()}}),[])}},5341:function(n,t,e){"use strict";e.d(t,{FT:function(){return a}});var r=e(9439),i=e(2791),u=e(184),o=["as","disabled"];function a(n){var t=n.tagName,e=n.disabled,r=n.href,i=n.target,u=n.rel,o=n.role,a=n.onClick,c=n.tabIndex,s=void 0===c?0:c,f=n.type;t||(t=null!=r||null!=i||null!=u?"a":"button");var d={tagName:t};if("button"===t)return[{type:f||"button",disabled:e},d];var l=function(n){(e||"a"===t&&function(n){return!n||"#"===n.trim()}(r))&&n.preventDefault(),e?n.stopPropagation():null==a||a(n)};return"a"===t&&(r||(r="#"),e&&(r=void 0)),[{role:null!=o?o:"button",disabled:void 0,tabIndex:e?void 0:s,href:r,target:"a"===t?i:void 0,"aria-disabled":e||void 0,rel:"a"===t?u:void 0,onClick:l,onKeyDown:function(n){" "===n.key&&(n.preventDefault(),l(n))}},d]}var c=i.forwardRef((function(n,t){var e=n.as,i=n.disabled,c=function(n,t){if(null==n)return{};var e,r,i={},u=Object.keys(n);for(r=0;r<u.length;r++)e=u[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,o),s=a(Object.assign({tagName:e,disabled:i},c)),f=(0,r.Z)(s,2),d=f[0],l=f[1].tagName;return(0,u.jsx)(l,Object.assign({},c,d,{ref:t}))}));c.displayName="Button"},1694:function(n,t){var e;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var n=[],t=0;t<arguments.length;t++){var e=arguments[t];if(e){var u=typeof e;if("string"===u||"number"===u)n.push(e);else if(Array.isArray(e)){if(e.length){var o=i.apply(null,e);o&&n.push(o)}}else if("object"===u){if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]")){n.push(e.toString());continue}for(var a in e)r.call(e,a)&&e[a]&&n.push(a)}}}return n.join(" ")}n.exports?(i.default=i,n.exports=i):void 0===(e=function(){return i}.apply(t,[]))||(n.exports=e)}()},3070:function(n,t,e){"use strict";var r=e(7357),i=!1,u=!1;try{var o={get passive(){return i=!0},get once(){return u=i=!0}};r.Z&&(window.addEventListener("test",o,o),window.removeEventListener("test",o,!0))}catch(a){}t.ZP=function(n,t,e,r){if(r&&"boolean"!==typeof r&&!u){var o=r.once,a=r.capture,c=e;!u&&o&&(c=e.__once||function n(r){this.removeEventListener(t,n,a),e.call(this,r)},e.__once=c),n.addEventListener(t,c,i?r:a)}n.addEventListener(t,e,r)}},7357:function(n,t){"use strict";t.Z=!("undefined"===typeof window||!window.document||!window.document.createElement)},5427:function(n,t,e){"use strict";e.d(t,{Z:function(){return s}});var r=e(8376);function i(n,t){return function(n){var t=(0,r.Z)(n);return t&&t.defaultView||window}(n).getComputedStyle(n,t)}var u=/([A-Z])/g;var o=/^ms-/;function a(n){return function(n){return n.replace(u,"-$1").toLowerCase()}(n).replace(o,"-ms-")}var c=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var s=function(n,t){var e="",r="";if("string"===typeof t)return n.style.getPropertyValue(a(t))||i(n).getPropertyValue(a(t));Object.keys(t).forEach((function(i){var u=t[i];u||0===u?!function(n){return!(!n||!c.test(n))}(i)?e+=a(i)+": "+u+";":r+=i+"("+u+") ":n.style.removeProperty(a(i))})),r&&(e+="transform: "+r+";"),n.style.cssText+=";"+e}},2899:function(n,t,e){"use strict";var r=e(3070),i=e(6382);t.Z=function(n,t,e,u){return(0,r.ZP)(n,t,e,u),function(){(0,i.Z)(n,t,e,u)}}},8376:function(n,t,e){"use strict";function r(n){return n&&n.ownerDocument||document}e.d(t,{Z:function(){return r}})},6382:function(n,t){"use strict";t.Z=function(n,t,e,r){var i=r&&"boolean"!==typeof r?r.capture:r;n.removeEventListener(t,e,i),e.__once&&n.removeEventListener(t,e.__once,i)}},3690:function(n,t,e){"use strict";e.d(t,{Z:function(){return o}});var r=e(5427),i=e(2899);function u(n,t,e){void 0===e&&(e=5);var r=!1,u=setTimeout((function(){r||function(n,t,e,r){if(void 0===e&&(e=!1),void 0===r&&(r=!0),n){var i=document.createEvent("HTMLEvents");i.initEvent(t,e,r),n.dispatchEvent(i)}}(n,"transitionend",!0)}),t+e),o=(0,i.Z)(n,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(u),o()}}function o(n,t,e,o){null==e&&(e=function(n){var t=(0,r.Z)(n,"transitionDuration")||"",e=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*e}(n)||0);var a=u(n,e,o),c=(0,i.Z)(n,"transitionend",t);return function(){a(),c()}}},1701:function(n,t,e){"use strict";e.d(t,{Ed:function(){return u},UI:function(){return i},XW:function(){return o}});var r=e(2791);function i(n,t){var e=0;return r.Children.map(n,(function(n){return r.isValidElement(n)?t(n,e++):n}))}function u(n,t){var e=0;r.Children.forEach(n,(function(n){r.isValidElement(n)&&t(n,e++)}))}function o(n,t){return r.Children.toArray(n).some((function(n){return r.isValidElement(n)&&n.type===t}))}},162:function(n,t,e){"use strict";e.d(t,{SC:function(){return s},pi:function(){return a},vE:function(){return o},zG:function(){return c}});var r=e(2791),i=(e(184),["xxl","xl","lg","md","sm","xs"]),u=r.createContext({prefixes:{},breakpoints:i,minBreakpoint:"xs"});u.Consumer,u.Provider;function o(n,t){var e=(0,r.useContext)(u).prefixes;return n||e[t]||t}function a(){return(0,r.useContext)(u).breakpoints}function c(){return(0,r.useContext)(u).minBreakpoint}function s(){return"rtl"===(0,r.useContext)(u).dir}},4083:function(n,t,e){"use strict";e.d(t,{Z:function(){return d}});var r=e(1413),i=e(5987),u=e(2791),o=e(6752),a=e(3201),c=e(4164);var s=e(184),f=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children","childRef"],d=u.forwardRef((function(n,t){var e=n.onEnter,d=n.onEntering,l=n.onEntered,v=n.onExit,p=n.onExiting,m=n.onExited,b=n.addEndListener,g=n.children,x=n.childRef,Z=(0,i.Z)(n,f),h=(0,u.useRef)(null),E=(0,a.Z)(h,x),y=function(n){var t;E((t=n)&&"setState"in t?c.findDOMNode(t):null!=t?t:null)},k=function(n){return function(t){n&&h.current&&n(h.current,t)}},C=(0,u.useCallback)(k(e),[e]),w=(0,u.useCallback)(k(d),[d]),L=(0,u.useCallback)(k(l),[l]),R=(0,u.useCallback)(k(v),[v]),W=(0,u.useCallback)(k(p),[p]),N=(0,u.useCallback)(k(m),[m]),P=(0,u.useCallback)(k(b),[b]);return(0,s.jsx)(o.ZP,(0,r.Z)((0,r.Z)({ref:t},Z),{},{onEnter:C,onEntered:L,onEntering:w,onExit:R,onExited:N,onExiting:W,addEndListener:P,nodeRef:h,children:"function"===typeof g?function(n,t){return g(n,(0,r.Z)((0,r.Z)({},t),{},{ref:y}))}:u.cloneElement(g,{ref:y})}))}))},6543:function(n,t,e){"use strict";e.d(t,{Z:function(){return v}});var r=e(1413),i=e(5987),u=e(1694),o=e.n(u),a=/-(.)/g;var c=e(2791),s=e(162),f=e(184),d=["className","bsPrefix","as"],l=function(n){return n[0].toUpperCase()+(t=n,t.replace(a,(function(n,t){return t.toUpperCase()}))).slice(1);var t};function v(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.displayName,u=void 0===e?l(n):e,a=t.Component,v=t.defaultProps,p=c.forwardRef((function(t,e){var u=t.className,c=t.bsPrefix,l=t.as,v=void 0===l?a||"div":l,p=(0,i.Z)(t,d),m=(0,s.vE)(c,n);return(0,f.jsx)(v,(0,r.Z)({ref:e,className:o()(u,m)},p))}));return p.defaultProps=v,p.displayName=u,p}},1380:function(n,t,e){"use strict";e.d(t,{Z:function(){return o}});var r=e(5427),i=e(3690);function u(n,t){var e=(0,r.Z)(n,t)||"",i=-1===e.indexOf("ms")?1e3:1;return parseFloat(e)*i}function o(n,t){var e=u(n,"transitionDuration"),r=u(n,"transitionDelay"),o=(0,i.Z)(n,(function(e){e.target===n&&(o(),t(e))}),e+r)}},7202:function(n,t,e){"use strict";function r(n){n.offsetHeight}e.d(t,{Z:function(){return r}})},831:function(n,t,e){"use strict";function r(n){var t,e,i="";if("string"==typeof n||"number"==typeof n)i+=n;else if("object"==typeof n)if(Array.isArray(n)){var u=n.length;for(t=0;t<u;t++)n[t]&&(e=r(n[t]))&&(i&&(i+=" "),i+=e)}else for(e in n)n[e]&&(i&&(i+=" "),i+=e);return i}t.Z=function(){for(var n,t,e=0,i="",u=arguments.length;e<u;e++)(n=arguments[e])&&(t=r(n))&&(i&&(i+=" "),i+=t);return i}}}]);
//# sourceMappingURL=534.6ad53640.chunk.js.map