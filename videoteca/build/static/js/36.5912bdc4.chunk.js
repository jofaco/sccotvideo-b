(self.webpackChunkvideoteca_frontend=self.webpackChunkvideoteca_frontend||[]).push([[36],{7087:function(e,t,r){!function(){var t={181:function(e,t,r){var n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,a="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,l="object"==typeof self&&self&&self.Object===Object&&self,s=a||l||Function("return this")(),f=Object.prototype.toString,p=Math.max,y=Math.min,b=function(){return s.Date.now()};function d(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==f.call(e)}(e))return NaN;if(d(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=d(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var r=i.test(e);return r||u.test(e)?c(e.slice(2),r?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,r){var n,o,i,u,c,a,l=0,s=!1,f=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var r=n,i=o;return n=o=void 0,l=t,u=e.apply(i,r)}function O(e){var r=e-a;return void 0===a||r>=t||r<0||f&&e-l>=i}function w(){var e=b();if(O(e))return g(e);c=setTimeout(w,function(e){var r=t-(e-a);return f?y(r,i-(e-l)):r}(e))}function g(e){return c=void 0,v&&n?m(e):(n=o=void 0,u)}function P(){var e=b(),r=O(e);if(n=arguments,o=this,a=e,r){if(void 0===c)return function(e){return l=e,c=setTimeout(w,t),s?m(e):u}(a);if(f)return c=setTimeout(w,t),m(a)}return void 0===c&&(c=setTimeout(w,t)),u}return t=h(t)||0,d(r)&&(s=!!r.leading,i=(f="maxWait"in r)?p(h(r.maxWait)||0,t):i,v="trailing"in r?!!r.trailing:v),P.cancel=function(){void 0!==c&&clearTimeout(c),l=0,n=a=o=c=void 0},P.flush=function(){return void 0===c?u:g(b())},P}},858:function(e,t,r){var n="Expected a function",o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,a=parseInt,l="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,s="object"==typeof self&&self&&self.Object===Object&&self,f=l||s||Function("return this")(),p=Object.prototype.toString,y=Math.max,b=Math.min,d=function(){return f.Date.now()};function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==p.call(e)}(e))return NaN;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var r=u.test(e);return r||c.test(e)?a(e.slice(2),r?2:8):i.test(e)?NaN:+e}e.exports=function(e,t,r){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(n);return h(r)&&(o="leading"in r?!!r.leading:o,i="trailing"in r?!!r.trailing:i),function(e,t,r){var o,i,u,c,a,l,s=0,f=!1,p=!1,m=!0;if("function"!=typeof e)throw new TypeError(n);function O(t){var r=o,n=i;return o=i=void 0,s=t,c=e.apply(n,r)}function w(e){var r=e-l;return void 0===l||r>=t||r<0||p&&e-s>=u}function g(){var e=d();if(w(e))return P(e);a=setTimeout(g,function(e){var r=t-(e-l);return p?b(r,u-(e-s)):r}(e))}function P(e){return a=void 0,m&&o?O(e):(o=i=void 0,c)}function j(){var e=d(),r=w(e);if(o=arguments,i=this,l=e,r){if(void 0===a)return function(e){return s=e,a=setTimeout(g,t),f?O(e):c}(l);if(p)return a=setTimeout(g,t),O(l)}return void 0===a&&(a=setTimeout(g,t)),c}return t=v(t)||0,h(r)&&(f=!!r.leading,u=(p="maxWait"in r)?y(v(r.maxWait)||0,t):u,m="trailing"in r?!!r.trailing:m),j.cancel=function(){void 0!==a&&clearTimeout(a),s=0,o=l=i=a=void 0},j.flush=function(){return void 0===a?c:P(d())},j}(e,t,{leading:o,maxWait:t,trailing:i})}},694:function(e,t,r){"use strict";var n=r(925);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,u){if(u!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},556:function(e,t,r){e.exports=r(694)()},925:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};(function(){"use strict";o.r(i),o.d(i,{LazyLoadComponent:function(){return Q},LazyLoadImage:function(){return fe},trackWindowScroll:function(){return N}});var e=r(2791),t=o.n(e),n=o(556);function u(){return"undefined"!=typeof window&&"IntersectionObserver"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e,t,r){return(t=s(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e){var t=function(e,t){if("object"!=c(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==c(t)?t:t+""}function f(e,t,r){return t=y(t),function(e,t){if(t&&("object"==c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,p()?Reflect.construct(t,r||[],y(e).constructor):t.apply(e,r))}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}var d=function(e){e.forEach((function(e){e.isIntersecting&&e.target.onVisible()}))},h={},v=function(e){function r(e){var t;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=f(this,r,[e])).supportsObserver=!e.scrollPosition&&e.useIntersectionObserver&&u(),t.supportsObserver){var n=e.threshold;t.observer=function(e){return h[e]=h[e]||new IntersectionObserver(d,{rootMargin:e+"px"}),h[e]}(n)}return t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(r,e),n=r,o=[{key:"componentDidMount",value:function(){this.placeholder&&this.observer&&(this.placeholder.onVisible=this.props.onVisible,this.observer.observe(this.placeholder)),this.supportsObserver||this.updateVisibility()}},{key:"componentWillUnmount",value:function(){this.observer&&this.placeholder&&this.observer.unobserve(this.placeholder)}},{key:"componentDidUpdate",value:function(){this.supportsObserver||this.updateVisibility()}},{key:"getPlaceholderBoundingBox",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.scrollPosition,t=this.placeholder.getBoundingClientRect(),r=this.placeholder.style,n=parseInt(r.getPropertyValue("margin-left"),10)||0,o=parseInt(r.getPropertyValue("margin-top"),10)||0;return{bottom:e.y+t.bottom+o,left:e.x+t.left+n,right:e.x+t.right+n,top:e.y+t.top+o}}},{key:"isPlaceholderInViewport",value:function(){if("undefined"==typeof window||!this.placeholder)return!1;var e=this.props,t=e.scrollPosition,r=e.threshold,n=this.getPlaceholderBoundingBox(t),o=t.y+window.innerHeight,i=t.x,u=t.x+window.innerWidth,c=t.y;return Boolean(c-r<=n.bottom&&o+r>=n.top&&i-r<=n.right&&u+r>=n.left)}},{key:"updateVisibility",value:function(){this.isPlaceholderInViewport()&&this.props.onVisible()}},{key:"render",value:function(){var e=this,r=this.props,n=r.className,o=r.height,i=r.placeholder,u=r.style,c=r.width;if(i&&"function"!=typeof i.type)return t().cloneElement(i,{ref:function(t){return e.placeholder=t}});var s=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({display:"inline-block"},u);return void 0!==c&&(s.width=c),void 0!==o&&(s.height=o),t().createElement("span",{className:n,ref:function(t){return e.placeholder=t},style:s},i)}}],o&&function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,s(n.key),n)}}(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,o}(t().Component);v.propTypes={onVisible:n.PropTypes.func.isRequired,className:n.PropTypes.string,height:n.PropTypes.oneOfType([n.PropTypes.number,n.PropTypes.string]),placeholder:n.PropTypes.element,threshold:n.PropTypes.number,useIntersectionObserver:n.PropTypes.bool,scrollPosition:n.PropTypes.shape({x:n.PropTypes.number.isRequired,y:n.PropTypes.number.isRequired}),width:n.PropTypes.oneOfType([n.PropTypes.number,n.PropTypes.string])},v.defaultProps={className:"",placeholder:null,threshold:100,useIntersectionObserver:!0};var m=v,O=o(181),w=o.n(O),g=o(858),P=o.n(g),j=function(e){var t=getComputedStyle(e,null);return t.getPropertyValue("overflow")+t.getPropertyValue("overflow-y")+t.getPropertyValue("overflow-x")},T=function(e){if(!(e instanceof HTMLElement))return window;for(var t=e;t&&t instanceof HTMLElement;){if(/(scroll|auto)/.test(j(t)))return t;t=t.parentNode}return window};function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}var E=["delayMethod","delayTime"];function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_.apply(null,arguments)}function L(e){var t=function(e,t){if("object"!=S(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=S(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==S(t)?t:t+""}function I(e,t,r){return t=D(t),k(e,x()?Reflect.construct(t,r||[],D(e).constructor):t.apply(e,r))}function k(e,t){if(t&&("object"==S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function x(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(x=function(){return!!e})()}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}function C(e,t){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},C(e,t)}var R=function(){return"undefined"==typeof window?0:window.scrollX||window.pageXOffset},B=function(){return"undefined"==typeof window?0:window.scrollY||window.pageYOffset},N=function(e){var r=function(r){function n(e){var r;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(r=I(this,n,[e])).useIntersectionObserver=e.useIntersectionObserver&&u(),r.useIntersectionObserver)return k(r);var o=r.onChangeScroll.bind(r);return"debounce"===e.delayMethod?r.delayedScroll=w()(o,e.delayTime):"throttle"===e.delayMethod&&(r.delayedScroll=P()(o,e.delayTime)),r.state={scrollPosition:{x:R(),y:B()}},r.baseComponentRef=t().createRef(),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(n,r),o=n,i=[{key:"componentDidMount",value:function(){this.addListeners()}},{key:"componentWillUnmount",value:function(){this.removeListeners()}},{key:"componentDidUpdate",value:function(){"undefined"==typeof window||this.useIntersectionObserver||T(this.baseComponentRef.current)!==this.scrollElement&&(this.removeListeners(),this.addListeners())}},{key:"addListeners",value:function(){"undefined"==typeof window||this.useIntersectionObserver||(this.scrollElement=T(this.baseComponentRef.current),this.scrollElement.addEventListener("scroll",this.delayedScroll,{passive:!0}),window.addEventListener("resize",this.delayedScroll,{passive:!0}),this.scrollElement!==window&&window.addEventListener("scroll",this.delayedScroll,{passive:!0}))}},{key:"removeListeners",value:function(){"undefined"==typeof window||this.useIntersectionObserver||(this.scrollElement.removeEventListener("scroll",this.delayedScroll),window.removeEventListener("resize",this.delayedScroll),this.scrollElement!==window&&window.removeEventListener("scroll",this.delayedScroll))}},{key:"onChangeScroll",value:function(){this.useIntersectionObserver||this.setState({scrollPosition:{x:R(),y:B()}})}},{key:"render",value:function(){var r=this.props,n=(r.delayMethod,r.delayTime,function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(r,E)),o=this.useIntersectionObserver?null:this.state.scrollPosition;return t().createElement(e,_({forwardRef:this.baseComponentRef,scrollPosition:o},n))}}],i&&function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,L(n.key),n)}}(o.prototype,i),Object.defineProperty(o,"prototype",{writable:!1}),o;var o,i}(t().Component);return r.propTypes={delayMethod:n.PropTypes.oneOf(["debounce","throttle"]),delayTime:n.PropTypes.number,useIntersectionObserver:n.PropTypes.bool},r.defaultProps={delayMethod:"throttle",delayTime:300,useIntersectionObserver:!0},r};function M(e){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(e)}function V(e){var t=function(e,t){if("object"!=M(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=M(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==M(t)?t:t+""}function W(e,t,r){return t=$(t),function(e,t){if(t&&("object"==M(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,z()?Reflect.construct(t,r||[],$(e).constructor):t.apply(e,r))}function z(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(z=function(){return!!e})()}function $(e){return $=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},$(e)}function U(e,t){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},U(e,t)}var F=function(e){function r(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),W(this,r,[e])}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&U(e,t)}(r,e),n=r,(o=[{key:"render",value:function(){return t().createElement(m,this.props)}}])&&function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,V(n.key),n)}}(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,o}(t().Component),q=N(F);function H(e){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H(e)}function Y(e){var t=function(e,t){if("object"!=H(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=H(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==H(t)?t:t+""}function X(e,t,r){return t=G(t),function(e,t){if(t&&("object"==H(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,A()?Reflect.construct(t,r||[],G(e).constructor):t.apply(e,r))}function A(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(A=function(){return!!e})()}function G(e){return G=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},G(e)}function J(e,t){return J=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},J(e,t)}var K=function(e){function r(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),t=X(this,r,[e]);var n=e.afterLoad,o=e.beforeLoad,i=e.scrollPosition,u=e.visibleByDefault;return t.state={visible:u},u&&(o(),n()),t.onVisible=t.onVisible.bind(t),t.isScrollTracked=Boolean(i&&Number.isFinite(i.x)&&i.x>=0&&Number.isFinite(i.y)&&i.y>=0),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&J(e,t)}(r,e),n=r,(o=[{key:"componentDidUpdate",value:function(e,t){t.visible!==this.state.visible&&this.props.afterLoad()}},{key:"onVisible",value:function(){this.props.beforeLoad(),this.setState({visible:!0})}},{key:"render",value:function(){if(this.state.visible)return this.props.children;var e=this.props,r=e.className,n=e.delayMethod,o=e.delayTime,i=e.height,c=e.placeholder,a=e.scrollPosition,l=e.style,s=e.threshold,f=e.useIntersectionObserver,p=e.width;return this.isScrollTracked||f&&u()?t().createElement(m,{className:r,height:i,onVisible:this.onVisible,placeholder:c,scrollPosition:a,style:l,threshold:s,useIntersectionObserver:f,width:p}):t().createElement(q,{className:r,delayMethod:n,delayTime:o,height:i,onVisible:this.onVisible,placeholder:c,style:l,threshold:s,width:p})}}])&&function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,Y(n.key),n)}}(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,o}(t().Component);K.propTypes={afterLoad:n.PropTypes.func,beforeLoad:n.PropTypes.func,useIntersectionObserver:n.PropTypes.bool,visibleByDefault:n.PropTypes.bool},K.defaultProps={afterLoad:function(){return{}},beforeLoad:function(){return{}},useIntersectionObserver:!0,visibleByDefault:!1};var Q=K;function Z(e){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z(e)}var ee=["afterLoad","beforeLoad","delayMethod","delayTime","effect","placeholder","placeholderSrc","scrollPosition","threshold","useIntersectionObserver","visibleByDefault","wrapperClassName","wrapperProps"];function te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function re(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?te(Object(r),!0).forEach((function(t){ne(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):te(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ne(e,t,r){return(t=ie(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function oe(){return oe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},oe.apply(null,arguments)}function ie(e){var t=function(e,t){if("object"!=Z(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=Z(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==Z(t)?t:t+""}function ue(e,t,r){return t=ae(t),function(e,t){if(t&&("object"==Z(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,ce()?Reflect.construct(t,r||[],ae(e).constructor):t.apply(e,r))}function ce(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(ce=function(){return!!e})()}function ae(e){return ae=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},ae(e)}function le(e,t){return le=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},le(e,t)}var se=function(e){function r(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=ue(this,r,[e])).state={loaded:!1},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&le(e,t)}(r,e),n=r,o=[{key:"onImageLoad",value:function(){var e=this;return this.state.loaded?null:function(t){e.props.onLoad(t),e.props.afterLoad(),e.setState({loaded:!0})}}},{key:"getImg",value:function(){var e=this.props,r=(e.afterLoad,e.beforeLoad,e.delayMethod,e.delayTime,e.effect,e.placeholder,e.placeholderSrc,e.scrollPosition,e.threshold,e.useIntersectionObserver,e.visibleByDefault,e.wrapperClassName,e.wrapperProps,function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,ee));return t().createElement("img",oe({},r,{onLoad:this.onImageLoad()}))}},{key:"getLazyLoadImage",value:function(){var e=this.props,r=e.beforeLoad,n=e.className,o=e.delayMethod,i=e.delayTime,u=e.height,c=e.placeholder,a=e.scrollPosition,l=e.style,s=e.threshold,f=e.useIntersectionObserver,p=e.visibleByDefault,y=e.width;return t().createElement(Q,{beforeLoad:r,className:n,delayMethod:o,delayTime:i,height:u,placeholder:c,scrollPosition:a,style:l,threshold:s,useIntersectionObserver:f,visibleByDefault:p,width:y},this.getImg())}},{key:"getWrappedLazyLoadImage",value:function(e){var r=this.props,n=r.effect,o=r.height,i=r.placeholderSrc,u=r.width,c=r.wrapperClassName,a=r.wrapperProps,l=this.state.loaded,s=l?" lazy-load-image-loaded":"",f=l||!i?{}:{backgroundImage:"url(".concat(i,")"),backgroundSize:"100% 100%"};return t().createElement("span",oe({className:c+" lazy-load-image-background "+n+s,style:re(re({},f),{},{color:"transparent",display:"inline-block",height:o,width:u})},a),e)}},{key:"render",value:function(){var e=this.props,t=e.effect,r=e.placeholderSrc,n=e.visibleByDefault,o=e.wrapperClassName,i=e.wrapperProps,u=this.getLazyLoadImage();return(t||r)&&!n||o||i?this.getWrappedLazyLoadImage(u):u}}],o&&function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,ie(n.key),n)}}(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,o}(t().Component);se.propTypes={onLoad:n.PropTypes.func,afterLoad:n.PropTypes.func,beforeLoad:n.PropTypes.func,delayMethod:n.PropTypes.string,delayTime:n.PropTypes.number,effect:n.PropTypes.string,placeholderSrc:n.PropTypes.string,threshold:n.PropTypes.number,useIntersectionObserver:n.PropTypes.bool,visibleByDefault:n.PropTypes.bool,wrapperClassName:n.PropTypes.string,wrapperProps:n.PropTypes.object},se.defaultProps={onLoad:function(){},afterLoad:function(){return{}},beforeLoad:function(){return{}},delayMethod:"throttle",delayTime:300,effect:"",placeholderSrc:null,threshold:100,useIntersectionObserver:!0,visibleByDefault:!1,wrapperClassName:""};var fe=se})(),e.exports=i}()},9713:function(){}}]);
//# sourceMappingURL=36.5912bdc4.chunk.js.map