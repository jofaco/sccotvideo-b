(self.webpackChunkvideoteca_frontend=self.webpackChunkvideoteca_frontend||[]).push([[427],{888:function(e,n,t){"use strict";var a=t(9047);function r(){}function o(){}o.resetWarningCache=r,e.exports=function(){function e(e,n,t,r,o,i){if(i!==a){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:o,resetWarningCache:r};return t.PropTypes=t,t}},2007:function(e,n,t){e.exports=t(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3360:function(e,n,t){"use strict";var a=t(1413),r=t(9439),o=t(5987),i=t(1694),s=t.n(i),l=t(2791),c=t(5341),d=t(162),u=t(184),f=["as","bsPrefix","variant","size","active","className"],v=l.forwardRef((function(e,n){var t=e.as,i=e.bsPrefix,l=e.variant,v=e.size,m=e.active,p=e.className,h=(0,o.Z)(e,f),b=(0,d.vE)(i,"btn"),y=(0,c.FT)((0,a.Z)({tagName:t},h)),Z=(0,r.Z)(y,2),g=Z[0],x=Z[1].tagName;return(0,u.jsx)(x,(0,a.Z)((0,a.Z)((0,a.Z)({},g),h),{},{ref:n,className:s()(p,b,m&&"active",l&&"".concat(b,"-").concat(l),v&&"".concat(b,"-").concat(v),h.href&&h.disabled&&"disabled")}))}));v.displayName="Button",v.defaultProps={variant:"primary",active:!1,disabled:!1},n.Z=v},4437:function(e,n,t){"use strict";t.d(n,{Z:function(){return ie}});var a=t(1413),r=t(5987),o=t(1694),i=t.n(o),s=t(2007),l=t.n(s),c=t(2791),d=t(184),u=["as","className","type","tooltip"],f={type:l().string,tooltip:l().bool,as:l().elementType},v=c.forwardRef((function(e,n){var t=e.as,o=void 0===t?"div":t,s=e.className,l=e.type,c=void 0===l?"valid":l,f=e.tooltip,v=void 0!==f&&f,m=(0,r.Z)(e,u);return(0,d.jsx)(o,(0,a.Z)((0,a.Z)({},m),{},{ref:n,className:i()(s,"".concat(c,"-").concat(v?"tooltip":"feedback"))}))}));v.displayName="Feedback",v.propTypes=f;var m=v,p=c.createContext({}),h=t(162),b=["id","bsPrefix","className","type","isValid","isInvalid","as"],y=c.forwardRef((function(e,n){var t=e.id,o=e.bsPrefix,s=e.className,l=e.type,u=void 0===l?"checkbox":l,f=e.isValid,v=void 0!==f&&f,m=e.isInvalid,y=void 0!==m&&m,Z=e.as,g=void 0===Z?"input":Z,x=(0,r.Z)(e,b),N=(0,c.useContext)(p).controlId;return o=(0,h.vE)(o,"form-check-input"),(0,d.jsx)(g,(0,a.Z)((0,a.Z)({},x),{},{ref:n,type:u,id:t||N,className:i()(s,o,v&&"is-valid",y&&"is-invalid")}))}));y.displayName="FormCheckInput";var Z=y,g=["bsPrefix","className","htmlFor"],x=c.forwardRef((function(e,n){var t=e.bsPrefix,o=e.className,s=e.htmlFor,l=(0,r.Z)(e,g),u=(0,c.useContext)(p).controlId;return t=(0,h.vE)(t,"form-check-label"),(0,d.jsx)("label",(0,a.Z)((0,a.Z)({},l),{},{ref:n,htmlFor:s||u,className:i()(o,t)}))}));x.displayName="FormCheckLabel";var N=x,E=t(1701),w=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],k=c.forwardRef((function(e,n){var t=e.id,o=e.bsPrefix,s=e.bsSwitchPrefix,l=e.inline,u=void 0!==l&&l,f=e.reverse,v=void 0!==f&&f,b=e.disabled,y=void 0!==b&&b,g=e.isValid,x=void 0!==g&&g,k=e.isInvalid,C=void 0!==k&&k,R=e.feedbackTooltip,j=void 0!==R&&R,P=e.feedback,F=e.feedbackType,O=e.className,T=e.style,S=e.title,I=void 0===S?"":S,L=e.type,D=void 0===L?"checkbox":L,B=e.label,A=e.children,M=e.as,H=void 0===M?"input":M,z=(0,r.Z)(e,w);o=(0,h.vE)(o,"form-check"),s=(0,h.vE)(s,"form-switch");var W=(0,c.useContext)(p).controlId,V=(0,c.useMemo)((function(){return{controlId:t||W}}),[W,t]),_=!A&&null!=B&&!1!==B||(0,E.XW)(A,N),K=(0,d.jsx)(Z,(0,a.Z)((0,a.Z)({},z),{},{type:"switch"===D?"checkbox":D,ref:n,isValid:x,isInvalid:C,disabled:y,as:H}));return(0,d.jsx)(p.Provider,{value:V,children:(0,d.jsx)("div",{style:T,className:i()(O,_&&o,u&&"".concat(o,"-inline"),v&&"".concat(o,"-reverse"),"switch"===D&&s),children:A||(0,d.jsxs)(d.Fragment,{children:[K,_&&(0,d.jsx)(N,{title:I,children:B}),P&&(0,d.jsx)(m,{type:F,tooltip:j,children:P})]})})})}));k.displayName="FormCheck";var C=Object.assign(k,{Input:Z,Label:N}),R=t(4942),j=(t(2391),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),P=c.forwardRef((function(e,n){var t,o,s=e.bsPrefix,l=e.type,u=e.size,f=e.htmlSize,v=e.id,m=e.className,b=e.isValid,y=void 0!==b&&b,Z=e.isInvalid,g=void 0!==Z&&Z,x=e.plaintext,N=e.readOnly,E=e.as,w=void 0===E?"input":E,k=(0,r.Z)(e,j),C=(0,c.useContext)(p).controlId;(s=(0,h.vE)(s,"form-control"),x)?t=(0,R.Z)({},"".concat(s,"-plaintext"),!0):(o={},(0,R.Z)(o,s,!0),(0,R.Z)(o,"".concat(s,"-").concat(u),u),t=o);return(0,d.jsx)(w,(0,a.Z)((0,a.Z)({},k),{},{type:l,size:f,ref:n,readOnly:N,id:v||C,className:i()(m,t,y&&"is-valid",g&&"is-invalid","color"===l&&"".concat(s,"-color"))}))}));P.displayName="FormControl";var F=Object.assign(P,{Feedback:m}),O=(0,t(6543).Z)("form-floating"),T=["controlId","as"],S=c.forwardRef((function(e,n){var t=e.controlId,o=e.as,i=void 0===o?"div":o,s=(0,r.Z)(e,T),l=(0,c.useMemo)((function(){return{controlId:t}}),[t]);return(0,d.jsx)(p.Provider,{value:l,children:(0,d.jsx)(i,(0,a.Z)((0,a.Z)({},s),{},{ref:n}))})}));S.displayName="FormGroup";var I=S,L=t(9439),D=["as","bsPrefix","className"],B=["className"];var A=c.forwardRef((function(e,n){var t=function(e){var n=e.as,t=e.bsPrefix,o=e.className,s=(0,r.Z)(e,D);t=(0,h.vE)(t,"col");var l=(0,h.pi)(),c=(0,h.zG)(),d=[],u=[];return l.forEach((function(e){var n,a,r,o=s[e];delete s[e],"object"===typeof o&&null!=o?(n=o.span,a=o.offset,r=o.order):n=o;var i=e!==c?"-".concat(e):"";n&&d.push(!0===n?"".concat(t).concat(i):"".concat(t).concat(i,"-").concat(n)),null!=r&&u.push("order".concat(i,"-").concat(r)),null!=a&&u.push("offset".concat(i,"-").concat(a))})),[(0,a.Z)((0,a.Z)({},s),{},{className:i().apply(void 0,[o].concat(d,u))}),{as:n,bsPrefix:t,spans:d}]}(e),o=(0,L.Z)(t,2),s=o[0],l=s.className,c=(0,r.Z)(s,B),u=o[1],f=u.as,v=void 0===f?"div":f,m=u.bsPrefix,p=u.spans;return(0,d.jsx)(v,(0,a.Z)((0,a.Z)({},c),{},{ref:n,className:i()(l,!p.length&&m)}))}));A.displayName="Col";var M=A,H=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],z=c.forwardRef((function(e,n){var t=e.as,o=void 0===t?"label":t,s=e.bsPrefix,l=e.column,u=e.visuallyHidden,f=e.className,v=e.htmlFor,m=(0,r.Z)(e,H),b=(0,c.useContext)(p).controlId;s=(0,h.vE)(s,"form-label");var y="col-form-label";"string"===typeof l&&(y="".concat(y," ").concat(y,"-").concat(l));var Z=i()(f,s,u&&"visually-hidden",l&&y);return v=v||b,l?(0,d.jsx)(M,(0,a.Z)({ref:n,as:"label",className:Z,htmlFor:v},m)):(0,d.jsx)(o,(0,a.Z)({ref:n,className:Z,htmlFor:v},m))}));z.displayName="FormLabel",z.defaultProps={column:!1,visuallyHidden:!1};var W=z,V=["bsPrefix","className","id"],_=c.forwardRef((function(e,n){var t=e.bsPrefix,o=e.className,s=e.id,l=(0,r.Z)(e,V),u=(0,c.useContext)(p).controlId;return t=(0,h.vE)(t,"form-range"),(0,d.jsx)("input",(0,a.Z)((0,a.Z)({},l),{},{type:"range",ref:n,className:i()(o,t),id:s||u}))}));_.displayName="FormRange";var K=_,U=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],G=c.forwardRef((function(e,n){var t=e.bsPrefix,o=e.size,s=e.htmlSize,l=e.className,u=e.isValid,f=void 0!==u&&u,v=e.isInvalid,m=void 0!==v&&v,b=e.id,y=(0,r.Z)(e,U),Z=(0,c.useContext)(p).controlId;return t=(0,h.vE)(t,"form-select"),(0,d.jsx)("select",(0,a.Z)((0,a.Z)({},y),{},{size:s,ref:n,className:i()(l,t,o&&"".concat(t,"-").concat(o),f&&"is-valid",m&&"is-invalid"),id:b||Z}))}));G.displayName="FormSelect";var $=G,q=["bsPrefix","className","as","muted"],X=c.forwardRef((function(e,n){var t=e.bsPrefix,o=e.className,s=e.as,l=void 0===s?"small":s,c=e.muted,u=(0,r.Z)(e,q);return t=(0,h.vE)(t,"form-text"),(0,d.jsx)(l,(0,a.Z)((0,a.Z)({},u),{},{ref:n,className:i()(o,t,c&&"text-muted")}))}));X.displayName="FormText";var Y=X,J=c.forwardRef((function(e,n){return(0,d.jsx)(C,(0,a.Z)((0,a.Z)({},e),{},{ref:n,type:"switch"}))}));J.displayName="Switch";var Q=Object.assign(J,{Input:C.Input,Label:C.Label}),ee=["bsPrefix","className","children","controlId","label"],ne=c.forwardRef((function(e,n){var t=e.bsPrefix,o=e.className,s=e.children,l=e.controlId,c=e.label,u=(0,r.Z)(e,ee);return t=(0,h.vE)(t,"form-floating"),(0,d.jsxs)(I,(0,a.Z)((0,a.Z)({ref:n,className:i()(o,t),controlId:l},u),{},{children:[s,(0,d.jsx)("label",{htmlFor:l,children:c})]}))}));ne.displayName="FloatingLabel";var te=ne,ae=["className","validated","as"],re={_ref:l().any,validated:l().bool,as:l().elementType},oe=c.forwardRef((function(e,n){var t=e.className,o=e.validated,s=e.as,l=void 0===s?"form":s,c=(0,r.Z)(e,ae);return(0,d.jsx)(l,(0,a.Z)((0,a.Z)({},c),{},{ref:n,className:i()(t,o&&"was-validated")}))}));oe.displayName="Form",oe.propTypes=re;var ie=Object.assign(oe,{Group:I,Control:F,Floating:O,Check:C,Switch:Q,Label:W,Text:Y,Range:K,Select:$,FloatingLabel:te})},5342:function(e,n,t){"use strict";t.d(n,{Z:function(){return He}});var a,r=t(9439),o=t(5987),i=t(1413),s=t(1694),l=t.n(s),c=t(3070),d=t(7357),u=t(8376),f=t(6382);function v(e){if((!a&&0!==a||e)&&d.Z){var n=document.createElement("div");n.style.position="absolute",n.style.top="-9999px",n.style.width="50px",n.style.height="50px",n.style.overflow="scroll",document.body.appendChild(n),a=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return a}var m=t(8633),p=t(9007),h=t(3201),b=t(1683),y=t(3690),Z=t(2791);function g(e){void 0===e&&(e=(0,u.Z)());try{var n=e.activeElement;return n&&n.nodeName?n:null}catch(t){return e.body}}function x(e,n){return e.contains?e.contains(n):e.compareDocumentPosition?e===n||!!(16&e.compareDocumentPosition(n)):void 0}var N=t(2899),E=t(4164),w=t(5746),k=t(2803),C=t(3433),R=t(4942),j=t(5671),P=t(3144),F=t(5427);var O,T=(O="modal-open","".concat("data-rr-ui-").concat(O)),S=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.ownerDocument,a=n.handleContainerOverflow,r=void 0===a||a,o=n.isRTL,i=void 0!==o&&o;(0,j.Z)(this,e),this.handleContainerOverflow=r,this.isRTL=i,this.modals=[],this.ownerDocument=t}return(0,P.Z)(e,[{key:"getScrollbarWidth",value:function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,n=e.defaultView;return Math.abs(n.innerWidth-e.documentElement.clientWidth)}(this.ownerDocument)}},{key:"getElement",value:function(){return(this.ownerDocument||document).body}},{key:"setModalAttributes",value:function(e){}},{key:"removeModalAttributes",value:function(e){}},{key:"setContainerStyle",value:function(e){var n={overflow:"hidden"},t=this.isRTL?"paddingLeft":"paddingRight",a=this.getElement();e.style=(0,R.Z)({overflow:a.style.overflow},t,a.style[t]),e.scrollBarWidth&&(n[t]="".concat(parseInt((0,F.Z)(a,t)||"0",10)+e.scrollBarWidth,"px")),a.setAttribute(T,""),(0,F.Z)(a,n)}},{key:"reset",value:function(){var e=this;(0,C.Z)(this.modals).forEach((function(n){return e.remove(n)}))}},{key:"removeContainerStyle",value:function(e){var n=this.getElement();n.removeAttribute(T),Object.assign(n.style,e.style)}},{key:"add",value:function(e){var n=this.modals.indexOf(e);return-1!==n?n:(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),0!==n||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n)}},{key:"remove",value:function(e){var n=this.modals.indexOf(e);-1!==n&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}},{key:"isTopModal",value:function(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}]),e}(),I=S,L=(0,Z.createContext)(d.Z?window:void 0);L.Provider;function D(){return(0,Z.useContext)(L)}var B=function(e,n){return d.Z?null==e?(n||(0,u.Z)()).body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null};var A,M=t(184),H=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function z(e){var n=D(),t=e||function(e){return A||(A=new I({ownerDocument:null==e?void 0:e.document})),A}(n),a=(0,Z.useRef)({dialog:null,backdrop:null});return Object.assign(a.current,{add:function(){return t.add(a.current)},remove:function(){return t.remove(a.current)},isTopModal:function(){return t.isTopModal(a.current)},setDialogRef:(0,Z.useCallback)((function(e){a.current.dialog=e}),[]),setBackdropRef:(0,Z.useCallback)((function(e){a.current.backdrop=e}),[])})}var W=(0,Z.forwardRef)((function(e,n){var t=e.show,a=void 0!==t&&t,o=e.role,i=void 0===o?"dialog":o,s=e.className,l=e.style,c=e.children,u=e.backdrop,f=void 0===u||u,v=e.keyboard,m=void 0===v||v,h=e.onBackdropClick,y=e.onEscapeKeyDown,C=e.transition,R=e.backdropTransition,j=e.autoFocus,P=void 0===j||j,F=e.enforceFocus,O=void 0===F||F,T=e.restoreFocus,S=void 0===T||T,I=e.restoreFocusOptions,L=e.renderDialog,A=e.renderBackdrop,W=void 0===A?function(e){return(0,M.jsx)("div",Object.assign({},e))}:A,V=e.manager,_=e.container,K=e.onShow,U=e.onHide,G=void 0===U?function(){}:U,$=e.onExit,q=e.onExited,X=e.onExiting,Y=e.onEnter,J=e.onEntering,Q=e.onEntered,ee=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,H),ne=function(e,n){var t=D(),a=(0,Z.useState)((function(){return B(e,null==t?void 0:t.document)})),o=(0,r.Z)(a,2),i=o[0],s=o[1];if(!i){var l=B(e);l&&s(l)}return(0,Z.useEffect)((function(){n&&i&&n(i)}),[n,i]),(0,Z.useEffect)((function(){var n=B(e);n!==i&&s(n)}),[e,i]),i}(_),te=z(V),ae=(0,w.Z)(),re=(0,k.Z)(a),oe=(0,Z.useState)(!a),ie=(0,r.Z)(oe,2),se=ie[0],le=ie[1],ce=(0,Z.useRef)(null);(0,Z.useImperativeHandle)(n,(function(){return te}),[te]),d.Z&&!re&&a&&(ce.current=g()),C||a||se?a&&se&&le(!1):le(!0);var de=(0,p.Z)((function(){if(te.add(),he.current=(0,N.Z)(document,"keydown",me),pe.current=(0,N.Z)(document,"focus",(function(){return setTimeout(fe)}),!0),K&&K(),P){var e=g(document);te.dialog&&e&&!x(te.dialog,e)&&(ce.current=e,te.dialog.focus())}})),ue=(0,p.Z)((function(){var e;(te.remove(),null==he.current||he.current(),null==pe.current||pe.current(),S)&&(null==(e=ce.current)||null==e.focus||e.focus(I),ce.current=null)}));(0,Z.useEffect)((function(){a&&ne&&de()}),[a,ne,de]),(0,Z.useEffect)((function(){se&&ue()}),[se,ue]),(0,b.Z)((function(){ue()}));var fe=(0,p.Z)((function(){if(O&&ae()&&te.isTopModal()){var e=g();te.dialog&&e&&!x(te.dialog,e)&&te.dialog.focus()}})),ve=(0,p.Z)((function(e){e.target===e.currentTarget&&(null==h||h(e),!0===f&&G())})),me=(0,p.Z)((function(e){m&&27===e.keyCode&&te.isTopModal()&&(null==y||y(e),e.defaultPrevented||G())})),pe=(0,Z.useRef)(),he=(0,Z.useRef)(),be=C;if(!ne||!(a||be&&!se))return null;var ye=Object.assign({role:i,ref:te.setDialogRef,"aria-modal":"dialog"===i||void 0},ee,{style:l,className:s,tabIndex:-1}),Ze=L?L(ye):(0,M.jsx)("div",Object.assign({},ye,{children:Z.cloneElement(c,{role:"document"})}));be&&(Ze=(0,M.jsx)(be,{appear:!0,unmountOnExit:!0,in:!!a,onExit:$,onExiting:X,onExited:function(){le(!0),null==q||q.apply(void 0,arguments)},onEnter:Y,onEntering:J,onEntered:Q,children:Ze}));var ge=null;if(f){var xe=R;ge=W({ref:te.setBackdropRef,onClick:ve}),xe&&(ge=(0,M.jsx)(xe,{appear:!0,in:!!a,children:ge}))}return(0,M.jsx)(M.Fragment,{children:E.createPortal((0,M.jsxs)(M.Fragment,{children:[ge,Ze]}),ne)})}));W.displayName="Modal";var V=Object.assign(W,{Manager:I}),_=t(1120);function K(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=(0,_.Z)(e)););return e}function U(){return U="undefined"!==typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,n,t){var a=K(e,n);if(a){var r=Object.getOwnPropertyDescriptor(a,n);return r.get?r.get.call(arguments.length<3?e:t):r.value}},U.apply(this,arguments)}var G=t(136),$=t(7277);var q=Function.prototype.bind.call(Function.prototype.call,[].slice);function X(e,n){return q(e.querySelectorAll(n))}function Y(e,n){return e.replace(new RegExp("(^|\\s)"+n+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var J,Q=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",ee=".sticky-top",ne=".navbar-toggler",te=function(e){(0,G.Z)(t,e);var n=(0,$.Z)(t);function t(){return(0,j.Z)(this,t),n.apply(this,arguments)}return(0,P.Z)(t,[{key:"adjustAndStore",value:function(e,n,t){var a=n.style[e];n.dataset[e]=a,(0,F.Z)(n,(0,R.Z)({},e,"".concat(parseFloat((0,F.Z)(n,e))+t,"px")))}},{key:"restore",value:function(e,n){var t=n.dataset[e];void 0!==t&&(delete n.dataset[e],(0,F.Z)(n,(0,R.Z)({},e,t)))}},{key:"setContainerStyle",value:function(e){var n=this;U((0,_.Z)(t.prototype),"setContainerStyle",this).call(this,e);var a,r,o=this.getElement();if(r="modal-open",(a=o).classList?a.classList.add(r):function(e,n){return e.classList?!!n&&e.classList.contains(n):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+n+" ")}(a,r)||("string"===typeof a.className?a.className=a.className+" "+r:a.setAttribute("class",(a.className&&a.className.baseVal||"")+" "+r)),e.scrollBarWidth){var i=this.isRTL?"paddingLeft":"paddingRight",s=this.isRTL?"marginLeft":"marginRight";X(o,Q).forEach((function(t){return n.adjustAndStore(i,t,e.scrollBarWidth)})),X(o,ee).forEach((function(t){return n.adjustAndStore(s,t,-e.scrollBarWidth)})),X(o,ne).forEach((function(t){return n.adjustAndStore(s,t,e.scrollBarWidth)}))}}},{key:"removeContainerStyle",value:function(e){var n=this;U((0,_.Z)(t.prototype),"removeContainerStyle",this).call(this,e);var a,r,o=this.getElement();r="modal-open",(a=o).classList?a.classList.remove(r):"string"===typeof a.className?a.className=Y(a.className,r):a.setAttribute("class",Y(a.className&&a.className.baseVal||"",r));var i=this.isRTL?"paddingLeft":"paddingRight",s=this.isRTL?"marginLeft":"marginRight";X(o,Q).forEach((function(e){return n.restore(i,e)})),X(o,ee).forEach((function(e){return n.restore(s,e)})),X(o,ne).forEach((function(e){return n.restore(s,e)}))}}]),t}(I);var ae,re=t(6752),oe=t(1380),ie=t(7202),se=t(4083),le=["className","children","transitionClasses"],ce=(ae={},(0,R.Z)(ae,re.d0,"show"),(0,R.Z)(ae,re.cn,"show"),ae),de=Z.forwardRef((function(e,n){var t=e.className,a=e.children,r=e.transitionClasses,s=void 0===r?{}:r,c=(0,o.Z)(e,le),d=(0,Z.useCallback)((function(e,n){(0,ie.Z)(e),null==c.onEnter||c.onEnter(e,n)}),[c]);return(0,M.jsx)(se.Z,(0,i.Z)((0,i.Z)({ref:n,addEndListener:oe.Z},c),{},{onEnter:d,childRef:a.ref,children:function(e,n){return Z.cloneElement(a,(0,i.Z)((0,i.Z)({},n),{},{className:l()("fade",t,a.props.className,ce[e],s[e])}))}}))}));de.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},de.displayName="Fade";var ue=de,fe=t(6543),ve=(0,fe.Z)("modal-body"),me=Z.createContext({onHide:function(){}}),pe=t(162),he=["bsPrefix","className","contentClassName","centered","size","fullscreen","children","scrollable"],be=Z.forwardRef((function(e,n){var t=e.bsPrefix,a=e.className,r=e.contentClassName,s=e.centered,c=e.size,d=e.fullscreen,u=e.children,f=e.scrollable,v=(0,o.Z)(e,he);t=(0,pe.vE)(t,"modal");var m="".concat(t,"-dialog"),p="string"===typeof d?"".concat(t,"-fullscreen-").concat(d):"".concat(t,"-fullscreen");return(0,M.jsx)("div",(0,i.Z)((0,i.Z)({},v),{},{ref:n,className:l()(m,a,c&&"".concat(t,"-").concat(c),s&&"".concat(m,"-centered"),f&&"".concat(m,"-scrollable"),d&&p),children:(0,M.jsx)("div",{className:l()("".concat(t,"-content"),r),children:u})}))}));be.displayName="ModalDialog";var ye=be,Ze=(0,fe.Z)("modal-footer"),ge=t(2007),xe=t.n(ge),Ne=["className","variant"],Ee={"aria-label":xe().string,onClick:xe().func,variant:xe().oneOf(["white"])},we=Z.forwardRef((function(e,n){var t=e.className,a=e.variant,r=(0,o.Z)(e,Ne);return(0,M.jsx)("button",(0,i.Z)({ref:n,type:"button",className:l()("btn-close",a&&"btn-close-".concat(a),t)},r))}));we.displayName="CloseButton",we.propTypes=Ee,we.defaultProps={"aria-label":"Close"};var ke=we,Ce=["closeLabel","closeVariant","closeButton","onHide","children"],Re=Z.forwardRef((function(e,n){var t=e.closeLabel,a=e.closeVariant,r=e.closeButton,s=e.onHide,l=e.children,c=(0,o.Z)(e,Ce),d=(0,Z.useContext)(me),u=(0,p.Z)((function(){null==d||d.onHide(),null==s||s()}));return(0,M.jsxs)("div",(0,i.Z)((0,i.Z)({ref:n},c),{},{children:[l,r&&(0,M.jsx)(ke,{"aria-label":t,variant:a,onClick:u})]}))}));Re.defaultProps={closeLabel:"Close",closeButton:!1};var je=Re,Pe=["bsPrefix","className"],Fe=Z.forwardRef((function(e,n){var t=e.bsPrefix,a=e.className,r=(0,o.Z)(e,Pe);return t=(0,pe.vE)(t,"modal-header"),(0,M.jsx)(je,(0,i.Z)((0,i.Z)({ref:n},r),{},{className:l()(a,t)}))}));Fe.displayName="ModalHeader",Fe.defaultProps={closeLabel:"Close",closeButton:!1};var Oe,Te=Fe,Se=(Oe="h4",Z.forwardRef((function(e,n){return(0,M.jsx)("div",(0,i.Z)((0,i.Z)({},e),{},{ref:n,className:l()(e.className,Oe)}))}))),Ie=(0,fe.Z)("modal-title",{Component:Se}),Le=["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","aria-describedby","aria-label","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"],De={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:ye};function Be(e){return(0,M.jsx)(ue,(0,i.Z)((0,i.Z)({},e),{},{timeout:null}))}function Ae(e){return(0,M.jsx)(ue,(0,i.Z)((0,i.Z)({},e),{},{timeout:null}))}var Me=Z.forwardRef((function(e,n){var t=e.bsPrefix,a=e.className,s=e.style,g=e.dialogClassName,x=e.contentClassName,N=e.children,E=e.dialogAs,w=e["aria-labelledby"],k=e["aria-describedby"],C=e["aria-label"],R=e.show,j=e.animation,P=e.backdrop,F=e.keyboard,O=e.onEscapeKeyDown,T=e.onShow,S=e.onHide,I=e.container,L=e.autoFocus,D=e.enforceFocus,B=e.restoreFocus,A=e.restoreFocusOptions,H=e.onEntered,z=e.onExit,W=e.onExiting,_=e.onEnter,K=e.onEntering,U=e.onExited,G=e.backdropClassName,$=e.manager,q=(0,o.Z)(e,Le),X=(0,Z.useState)({}),Y=(0,r.Z)(X,2),Q=Y[0],ee=Y[1],ne=(0,Z.useState)(!1),ae=(0,r.Z)(ne,2),re=ae[0],oe=ae[1],ie=(0,Z.useRef)(!1),se=(0,Z.useRef)(!1),le=(0,Z.useRef)(null),ce=(0,m.Z)(),de=(0,r.Z)(ce,2),ue=de[0],fe=de[1],ve=(0,h.Z)(n,fe),he=(0,p.Z)(S),be=(0,pe.SC)();t=(0,pe.vE)(t,"modal");var ye=(0,Z.useMemo)((function(){return{onHide:he}}),[he]);function Ze(){return $||(e={isRTL:be},J||(J=new te(e)),J);var e}function ge(e){if(d.Z){var n=Ze().getScrollbarWidth()>0,t=e.scrollHeight>(0,u.Z)(e).documentElement.clientHeight;ee({paddingRight:n&&!t?v():void 0,paddingLeft:!n&&t?v():void 0})}}var xe=(0,p.Z)((function(){ue&&ge(ue.dialog)}));(0,b.Z)((function(){(0,f.Z)(window,"resize",xe),null==le.current||le.current()}));var Ne=function(){ie.current=!0},Ee=function(e){ie.current&&ue&&e.target===ue.dialog&&(se.current=!0),ie.current=!1},we=function(){oe(!0),le.current=(0,y.Z)(ue.dialog,(function(){oe(!1)}))},ke=function(e){"static"!==P?se.current||e.target!==e.currentTarget?se.current=!1:null==S||S():function(e){e.target===e.currentTarget&&we()}(e)},Ce=(0,Z.useCallback)((function(e){return(0,M.jsx)("div",(0,i.Z)((0,i.Z)({},e),{},{className:l()("".concat(t,"-backdrop"),G,!j&&"show")}))}),[j,G,t]),Re=(0,i.Z)((0,i.Z)({},s),Q);Re.display="block";return(0,M.jsx)(me.Provider,{value:ye,children:(0,M.jsx)(V,{show:R,ref:ve,backdrop:P,container:I,keyboard:!0,autoFocus:L,enforceFocus:D,restoreFocus:B,restoreFocusOptions:A,onEscapeKeyDown:function(e){F?null==O||O(e):(e.preventDefault(),"static"===P&&we())},onShow:T,onHide:S,onEnter:function(e,n){e&&ge(e),null==_||_(e,n)},onEntering:function(e,n){null==K||K(e,n),(0,c.ZP)(window,"resize",xe)},onEntered:H,onExit:function(e){null==le.current||le.current(),null==z||z(e)},onExiting:W,onExited:function(e){e&&(e.style.display=""),null==U||U(e),(0,f.Z)(window,"resize",xe)},manager:Ze(),transition:j?Be:void 0,backdropTransition:j?Ae:void 0,renderBackdrop:Ce,renderDialog:function(e){return(0,M.jsx)("div",(0,i.Z)((0,i.Z)({role:"dialog"},e),{},{style:Re,className:l()(a,t,re&&"".concat(t,"-static"),!j&&"show"),onClick:P?ke:void 0,onMouseUp:Ee,"aria-label":C,"aria-labelledby":w,"aria-describedby":k,children:(0,M.jsx)(E,(0,i.Z)((0,i.Z)({},q),{},{onMouseDown:Ne,className:g,contentClassName:x,children:N}))}))}})})}));Me.displayName="Modal",Me.defaultProps=De;var He=Object.assign(Me,{Body:ve,Header:Te,Title:Ie,Footer:Ze,Dialog:ye,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150})},2391:function(e){"use strict";var n=function(){};e.exports=n}}]);
//# sourceMappingURL=427.3dc9e85c.chunk.js.map