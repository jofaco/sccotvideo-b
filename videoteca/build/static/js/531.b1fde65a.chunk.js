"use strict";(self.webpackChunkvideoteca_frontend=self.webpackChunkvideoteca_frontend||[]).push([[531],{4554:function(e,n,t){t.d(n,{Z:function(){return h}});var r=t(7462),a=t(3366),o=t(2791),i=t(8182),u=t(2421),c=t(104),s=t(8519),l=t(886),f=t(184),d=["className","component"];var v=t(5902),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.defaultTheme,t=e.defaultClassName,v=void 0===t?"MuiBox-root":t,p=e.generateClassName,h=(0,u.ZP)("div",{shouldForwardProp:function(e){return"theme"!==e&&"sx"!==e&&"as"!==e}})(c.Z),m=o.forwardRef((function(e,t){var o=(0,l.Z)(n),u=(0,s.Z)(e),c=u.className,m=u.component,b=void 0===m?"div":m,x=(0,a.Z)(u,d);return(0,f.jsx)(h,(0,r.Z)({as:b,ref:t,className:(0,i.Z)(c,p?p(v):v),theme:o},x))}));return m}({defaultTheme:(0,t(7107).Z)(),defaultClassName:"MuiBox-root",generateClassName:v.Z.generate}),h=p},2176:function(e){e.exports=function(e,n,t,r,a,o,i,u){if(!e){var c;if(void 0===n)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[t,r,a,o,i,u],l=0;(c=new Error(n.replace(/%s/g,(function(){return s[l++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},8374:function(e,n,t){t.d(n,{Z:function(){return B}});var r=t(1413),a=t(9439),o=t(5987),i=t(9007),u=t(2791);var c=function(e,n){var t=(0,u.useRef)(!0);(0,u.useEffect)((function(){if(!t.current)return e();t.current=!1}),n)},s=t(7904),l=t(5746),f=t(1683),d=Math.pow(2,31)-1;function v(e,n,t){var r=t-Date.now();e.current=r<=d?setTimeout(n,r):setTimeout((function(){return v(e,n,t)}),d)}function p(){var e=(0,l.Z)(),n=(0,u.useRef)();return(0,f.Z)((function(){return clearTimeout(n.current)})),(0,u.useMemo)((function(){var t=function(){return clearTimeout(n.current)};return{set:function(r,a){void 0===a&&(a=0),e()&&(t(),a<=d?n.current=setTimeout(r,a):v(n,r,Date.now()+a))},clear:t}}),[])}t(8633);t(2803);var h="undefined"!==typeof t.g&&t.g.navigator&&"ReactNative"===t.g.navigator.product;"undefined"!==typeof document||h?u.useLayoutEffect:u.useEffect,new WeakMap;var m=t(5341),b=t(184),x=["onKeyDown"];var g=u.forwardRef((function(e,n){var t,r=e.onKeyDown,o=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,x),u=(0,m.FT)(Object.assign({tagName:"a"},o)),c=(0,a.Z)(u,1)[0],s=(0,i.Z)((function(e){c.onKeyDown(e),null==r||r(e)}));return(t=o.href)&&"#"!==t.trim()&&"button"!==o.role?(0,b.jsx)("a",Object.assign({ref:n},o,{onKeyDown:r})):(0,b.jsx)("a",Object.assign({ref:n},o,c,{onKeyDown:s}))}));g.displayName="Anchor";var y=g,N=t(1694),Z=t.n(N),w=t(7462),S=t(3366);t(2176);function C(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function j(e){var n=function(e,n){if("object"!==typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"===typeof n?n:String(n)}function k(e,n){return Object.keys(n).reduce((function(t,r){var a,o=t,i=o[C(r)],c=o[r],s=(0,S.Z)(o,[C(r),r].map(j)),l=n[r],f=function(e,n,t){var r=(0,u.useRef)(void 0!==e),a=(0,u.useState)(n),o=a[0],i=a[1],c=void 0!==e,s=r.current;return r.current=c,!c&&s&&o!==n&&i(n),[c?e:o,(0,u.useCallback)((function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];t&&t.apply(void 0,[e].concat(r)),i(e)}),[t])]}(c,i,e[l]),d=f[0],v=f[1];return(0,w.Z)({},s,((a={})[r]=d,a[l]=v,a))}),e)}function E(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function I(e){this.setState(function(n){var t=this.constructor.getDerivedStateFromProps(e,n);return null!==t&&void 0!==t?t:null}.bind(this))}function T(e,n){try{var t=this.props,r=this.state;this.props=e,this.state=n,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(t,r)}finally{this.props=t,this.state=r}}E.__suppressDeprecationWarning=!0,I.__suppressDeprecationWarning=!0,T.__suppressDeprecationWarning=!0;var D=(0,t(6543).Z)("carousel-caption"),M=t(162),R=["as","bsPrefix","className"],O=u.forwardRef((function(e,n){var t=e.as,a=void 0===t?"div":t,i=e.bsPrefix,u=e.className,c=(0,o.Z)(e,R),s=Z()(u,(0,M.vE)(i,"carousel-item"));return(0,b.jsx)(a,(0,r.Z)((0,r.Z)({ref:n},c),{},{className:s}))}));O.displayName="CarouselItem";var P=O,L=t(1701),_=t(1380),K=t(7202),A=t(4083),F=["as","bsPrefix","slide","fade","controls","indicators","indicatorLabels","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","variant","className","children"],U={slide:!0,fade:!1,controls:!0,indicators:!0,indicatorLabels:[],defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:(0,b.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:(0,b.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var W=u.forwardRef((function(e,n){var t=k(e,{activeIndex:"onSelect"}),l=t.as,f=void 0===l?"div":l,d=t.bsPrefix,v=t.slide,h=t.fade,m=t.controls,x=t.indicators,g=t.indicatorLabels,N=t.activeIndex,w=t.onSelect,S=t.onSlide,C=t.onSlid,j=t.interval,E=t.keyboard,I=t.onKeyDown,T=t.pause,D=t.onMouseOver,R=t.onMouseOut,O=t.wrap,P=t.touch,U=t.onTouchStart,W=t.onTouchMove,B=t.onTouchEnd,X=t.prevIcon,H=t.prevLabel,V=t.nextIcon,q=t.nextLabel,z=t.variant,G=t.className,J=t.children,Q=(0,o.Z)(t,F),Y=(0,M.vE)(d,"carousel"),$=(0,M.SC)(),ee=(0,u.useRef)(null),ne=(0,u.useState)("next"),te=(0,a.Z)(ne,2),re=te[0],ae=te[1],oe=(0,u.useState)(!1),ie=(0,a.Z)(oe,2),ue=ie[0],ce=ie[1],se=(0,u.useState)(!1),le=(0,a.Z)(se,2),fe=le[0],de=le[1],ve=(0,u.useState)(N||0),pe=(0,a.Z)(ve,2),he=pe[0],me=pe[1];(0,u.useEffect)((function(){fe||N===he||(ee.current?ae(ee.current):ae((N||0)>he?"next":"prev"),v&&de(!0),me(N||0))}),[N,fe,he,v]),(0,u.useEffect)((function(){ee.current&&(ee.current=null)}));var be,xe=0;(0,L.Ed)(J,(function(e,n){++xe,n===N&&(be=e.props.interval)}));var ge=(0,s.Z)(be),ye=(0,u.useCallback)((function(e){if(!fe){var n=he-1;if(n<0){if(!O)return;n=xe-1}ee.current="prev",null==w||w(n,e)}}),[fe,he,w,O,xe]),Ne=(0,i.Z)((function(e){if(!fe){var n=he+1;if(n>=xe){if(!O)return;n=0}ee.current="next",null==w||w(n,e)}})),Ze=(0,u.useRef)();(0,u.useImperativeHandle)(n,(function(){return{element:Ze.current,prev:ye,next:Ne}}));var we=(0,i.Z)((function(){!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;var n=getComputedStyle(e);return"none"!==n.display&&"hidden"!==n.visibility&&"none"!==getComputedStyle(e.parentNode).display}(Ze.current)&&($?ye():Ne())})),Se="next"===re?"start":"end";c((function(){v||(null==S||S(he,Se),null==C||C(he,Se))}),[he]);var Ce="".concat(Y,"-item-").concat(re),je="".concat(Y,"-item-").concat(Se),ke=(0,u.useCallback)((function(e){(0,K.Z)(e),null==S||S(he,Se)}),[S,he,Se]),Ee=(0,u.useCallback)((function(){de(!1),null==C||C(he,Se)}),[C,he,Se]),Ie=(0,u.useCallback)((function(e){if(E&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void($?Ne(e):ye(e));case"ArrowRight":return e.preventDefault(),void($?ye(e):Ne(e))}null==I||I(e)}),[E,I,ye,Ne,$]),Te=(0,u.useCallback)((function(e){"hover"===T&&ce(!0),null==D||D(e)}),[T,D]),De=(0,u.useCallback)((function(e){ce(!1),null==R||R(e)}),[R]),Me=(0,u.useRef)(0),Re=(0,u.useRef)(0),Oe=p(),Pe=(0,u.useCallback)((function(e){Me.current=e.touches[0].clientX,Re.current=0,"hover"===T&&ce(!0),null==U||U(e)}),[T,U]),Le=(0,u.useCallback)((function(e){e.touches&&e.touches.length>1?Re.current=0:Re.current=e.touches[0].clientX-Me.current,null==W||W(e)}),[W]),_e=(0,u.useCallback)((function(e){if(P){var n=Re.current;Math.abs(n)>40&&(n>0?ye(e):Ne(e))}"hover"===T&&Oe.set((function(){ce(!1)}),j||void 0),null==B||B(e)}),[P,T,ye,Ne,Oe,j,B]),Ke=null!=j&&!ue&&!fe,Ae=(0,u.useRef)();(0,u.useEffect)((function(){var e,n;if(Ke){var t=$?ye:Ne;return Ae.current=window.setInterval(document.visibilityState?we:t,null!=(e=null!=(n=ge.current)?n:j)?e:void 0),function(){null!==Ae.current&&clearInterval(Ae.current)}}}),[Ke,ye,Ne,ge,j,we,$]);var Fe=(0,u.useMemo)((function(){return x&&Array.from({length:xe},(function(e,n){return function(e){null==w||w(n,e)}}))}),[x,xe,w]);return(0,b.jsxs)(f,(0,r.Z)((0,r.Z)({ref:Ze},Q),{},{onKeyDown:Ie,onMouseOver:Te,onMouseOut:De,onTouchStart:Pe,onTouchMove:Le,onTouchEnd:_e,className:Z()(G,Y,v&&"slide",h&&"".concat(Y,"-fade"),z&&"".concat(Y,"-").concat(z)),children:[x&&(0,b.jsx)("div",{className:"".concat(Y,"-indicators"),children:(0,L.UI)(J,(function(e,n){return(0,b.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=g&&g.length?g[n]:"Slide ".concat(n+1),className:n===he?"active":void 0,onClick:Fe?Fe[n]:void 0,"aria-current":n===he},n)}))}),(0,b.jsx)("div",{className:"".concat(Y,"-inner"),children:(0,L.UI)(J,(function(e,n){var t=n===he;return v?(0,b.jsx)(A.Z,{in:t,onEnter:t?ke:void 0,onEntered:t?Ee:void 0,addEndListener:_.Z,children:function(n,a){return u.cloneElement(e,(0,r.Z)((0,r.Z)({},a),{},{className:Z()(e.props.className,t&&"entered"!==n&&Ce,("entered"===n||"exiting"===n)&&"active",("entering"===n||"exiting"===n)&&je)}))}}):u.cloneElement(e,{className:Z()(e.props.className,t&&"active")})}))}),m&&(0,b.jsxs)(b.Fragment,{children:[(O||0!==N)&&(0,b.jsxs)(y,{className:"".concat(Y,"-control-prev"),onClick:ye,children:[X,H&&(0,b.jsx)("span",{className:"visually-hidden",children:H})]}),(O||N!==xe-1)&&(0,b.jsxs)(y,{className:"".concat(Y,"-control-next"),onClick:Ne,children:[V,q&&(0,b.jsx)("span",{className:"visually-hidden",children:q})]})]})]}))}));W.displayName="Carousel",W.defaultProps=U;var B=Object.assign(W,{Caption:D,Item:P})},8040:function(){}}]);
//# sourceMappingURL=531.b1fde65a.chunk.js.map