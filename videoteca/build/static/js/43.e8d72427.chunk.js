(self.webpackChunkvideoteca_frontend=self.webpackChunkvideoteca_frontend||[]).push([[43],{8167:function(e,t,r){"use strict";var o=r(7462),n=r(5987),i=r(2791),a=r(8182),c=r(8317),s=r(1122),l=r(9526),p=i.forwardRef((function(e,t){var r=e.classes,c=e.className,p=e.color,d=void 0===p?"primary":p,u=e.position,f=void 0===u?"fixed":u,m=(0,n.Z)(e,["classes","className","color","position"]);return i.createElement(l.Z,(0,o.Z)({square:!0,component:"header",elevation:4,className:(0,a.Z)(r.root,r["position".concat((0,s.Z)(f))],r["color".concat((0,s.Z)(d))],c,"fixed"===f&&"mui-fixed"),ref:t},m))}));t.Z=(0,c.Z)((function(e){var t="light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:e.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:t,color:e.palette.getContrastText(t)},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}}),{name:"MuiAppBar"})(p)},1971:function(e,t,r){"use strict";r.d(t,{Z:function(){return _}});var o=r(3433),n=r(7462),i=r(7351);function a(e,t){var r={};return Object.keys(e).forEach((function(o){-1===t.indexOf(o)&&(r[o]=e[o])})),r}function c(e){var t=function(t){var r=e(t);return t.css?(0,n.Z)({},(0,i.Z)(r,e((0,n.Z)({theme:t.theme},t.css))),a(t.css,[e.filterProps])):t.sx?(0,n.Z)({},(0,i.Z)(r,e((0,n.Z)({theme:t.theme},t.sx))),a(t.sx,[e.filterProps])):r};return t.propTypes={},t.filterProps=["css","sx"].concat((0,o.Z)(e.filterProps)),t}var s=c;var l=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var o=function(e){return t.reduce((function(t,r){var o=r(e);return o?(0,i.Z)(t,o):t}),{})};return o.propTypes={},o.filterProps=t.reduce((function(e,t){return e.concat(t.filterProps)}),[]),o},p=r(4942),d=r(6086);function u(e,t){return t&&"string"===typeof t?t.split(".").reduce((function(e,t){return e&&e[t]?e[t]:null}),e):null}var f=function(e){var t=e.prop,r=e.cssProperty,o=void 0===r?e.prop:r,n=e.themeKey,i=e.transform,a=function(e){if(null==e[t])return null;var r=e[t],a=u(e.theme,n)||{};return(0,d.k)(e,r,(function(e){var t;return"function"===typeof a?t=a(e):Array.isArray(a)?t=a[e]||e:(t=u(a,e)||e,i&&(t=i(t))),!1===o?t:(0,p.Z)({},o,t)}))};return a.propTypes={},a.filterProps=[t],a};function m(e){return"number"!==typeof e?e:"".concat(e,"px solid")}var h=l(f({prop:"border",themeKey:"borders",transform:m}),f({prop:"borderTop",themeKey:"borders",transform:m}),f({prop:"borderRight",themeKey:"borders",transform:m}),f({prop:"borderBottom",themeKey:"borders",transform:m}),f({prop:"borderLeft",themeKey:"borders",transform:m}),f({prop:"borderColor",themeKey:"palette"}),f({prop:"borderRadius",themeKey:"shape"})),v=l(f({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),f({prop:"display"}),f({prop:"overflow"}),f({prop:"textOverflow"}),f({prop:"visibility"}),f({prop:"whiteSpace"})),g=l(f({prop:"flexBasis"}),f({prop:"flexDirection"}),f({prop:"flexWrap"}),f({prop:"justifyContent"}),f({prop:"alignItems"}),f({prop:"alignContent"}),f({prop:"order"}),f({prop:"flex"}),f({prop:"flexGrow"}),f({prop:"flexShrink"}),f({prop:"alignSelf"}),f({prop:"justifyItems"}),f({prop:"justifySelf"})),b=l(f({prop:"gridGap"}),f({prop:"gridColumnGap"}),f({prop:"gridRowGap"}),f({prop:"gridColumn"}),f({prop:"gridRow"}),f({prop:"gridAutoFlow"}),f({prop:"gridAutoColumns"}),f({prop:"gridAutoRows"}),f({prop:"gridTemplateColumns"}),f({prop:"gridTemplateRows"}),f({prop:"gridTemplateAreas"}),f({prop:"gridArea"})),y=l(f({prop:"position"}),f({prop:"zIndex",themeKey:"zIndex"}),f({prop:"top"}),f({prop:"right"}),f({prop:"bottom"}),f({prop:"left"})),Z=l(f({prop:"color",themeKey:"palette"}),f({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),x=f({prop:"boxShadow",themeKey:"shadows"});function k(e){return e<=1?"".concat(100*e,"%"):e}var w=f({prop:"width",transform:k}),C=f({prop:"maxWidth",transform:k}),S=f({prop:"minWidth",transform:k}),E=f({prop:"height",transform:k}),P=f({prop:"maxHeight",transform:k}),R=f({prop:"minHeight",transform:k}),z=(f({prop:"size",cssProperty:"width",transform:k}),f({prop:"size",cssProperty:"height",transform:k}),l(w,C,S,E,P,R,f({prop:"boxSizing"}))),T=r(9908),N=l(f({prop:"fontFamily",themeKey:"typography"}),f({prop:"fontSize",themeKey:"typography"}),f({prop:"fontStyle",themeKey:"typography"}),f({prop:"fontWeight",themeKey:"typography"}),f({prop:"letterSpacing"}),f({prop:"lineHeight"}),f({prop:"textAlign"})),I=r(5987),B=r(2791),M=r(8182),O=r(2110),F=r.n(O),j=r(4928);function A(e,t){var r={};return Object.keys(e).forEach((function(o){-1===t.indexOf(o)&&(r[o]=e[o])})),r}var D=r(6865),L=function(e){var t=function(e){return function(t){var r,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=o.name,a=(0,I.Z)(o,["name"]),c=i,s="function"===typeof t?function(e){return{root:function(r){return t((0,n.Z)({theme:e},r))}}}:{root:t},l=(0,j.Z)(s,(0,n.Z)({Component:e,name:i||e.displayName,classNamePrefix:c},a));t.filterProps&&(r=t.filterProps,delete t.filterProps),t.propTypes&&(t.propTypes,delete t.propTypes);var p=B.forwardRef((function(t,o){var i=t.children,a=t.className,c=t.clone,s=t.component,p=(0,I.Z)(t,["children","className","clone","component"]),d=l(t),u=(0,M.Z)(d.root,a),f=p;if(r&&(f=A(f,r)),c)return B.cloneElement(i,(0,n.Z)({className:(0,M.Z)(i.props.className,u)},f));if("function"===typeof i)return i((0,n.Z)({className:u},f));var m=s||e;return B.createElement(m,(0,n.Z)({ref:o,className:u},f),i)}));return F()(p,e),p}}(e);return function(e,r){return t(e,(0,n.Z)({defaultTheme:D.Z},r))}},K=s(l(h,v,g,b,y,Z,x,z,T.Z,N)),_=L("div")(K,{name:"MuiBox"})},7447:function(e,t,r){"use strict";var o=r(7462),n=r(5987),i=r(2791),a=r(8182),c=r(8317),s=r(3108),l=i.forwardRef((function(e,t){var r=e.absolute,c=void 0!==r&&r,s=e.classes,l=e.className,p=e.component,d=void 0===p?"hr":p,u=e.flexItem,f=void 0!==u&&u,m=e.light,h=void 0!==m&&m,v=e.orientation,g=void 0===v?"horizontal":v,b=e.role,y=void 0===b?"hr"!==d?"separator":void 0:b,Z=e.variant,x=void 0===Z?"fullWidth":Z,k=(0,n.Z)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return i.createElement(d,(0,o.Z)({className:(0,a.Z)(s.root,l,"fullWidth"!==x&&s[x],c&&s.absolute,f&&s.flexItem,h&&s.light,"vertical"===g&&s.vertical),role:y,ref:t},k))}));t.Z=(0,c.Z)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:(0,s.Fq)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(l)},5667:function(e,t,r){"use strict";r.d(t,{ZP:function(){return T}});var o=r(7462),n=r(5987),i=r(2791),a=r(8182),c=r(8631),s=r(8317),l=r(9439),p=r(6752),d=r(812),u=r(3364),f=r(6043),m=r(9806),h={entering:{opacity:1},entered:{opacity:1}},v={enter:d.x9.enteringScreen,exit:d.x9.leavingScreen},g=i.forwardRef((function(e,t){var r=e.children,a=e.disableStrictModeCompat,c=void 0!==a&&a,s=e.in,d=e.onEnter,g=e.onEntered,b=e.onEntering,y=e.onExit,Z=e.onExited,x=e.onExiting,k=e.style,w=e.TransitionComponent,C=void 0===w?p.ZP:w,S=e.timeout,E=void 0===S?v:S,P=(0,n.Z)(e,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","TransitionComponent","timeout"]),R=(0,u.Z)(),z=R.unstable_strictMode&&!c,T=i.useRef(null),N=(0,m.Z)(r.ref,t),I=(0,m.Z)(z?T:void 0,N),B=function(e){return function(t,r){if(e){var o=z?[T.current,t]:[t,r],n=(0,l.Z)(o,2),i=n[0],a=n[1];void 0===a?e(i):e(i,a)}}},M=B(b),O=B((function(e,t){(0,f.n)(e);var r=(0,f.C)({style:k,timeout:E},{mode:"enter"});e.style.webkitTransition=R.transitions.create("opacity",r),e.style.transition=R.transitions.create("opacity",r),d&&d(e,t)})),F=B(g),j=B(x),A=B((function(e){var t=(0,f.C)({style:k,timeout:E},{mode:"exit"});e.style.webkitTransition=R.transitions.create("opacity",t),e.style.transition=R.transitions.create("opacity",t),y&&y(e)})),D=B(Z);return i.createElement(C,(0,o.Z)({appear:!0,in:s,nodeRef:z?T:void 0,onEnter:O,onEntered:F,onEntering:M,onExit:A,onExited:D,onExiting:j,timeout:E},P),(function(e,t){return i.cloneElement(r,(0,o.Z)({style:(0,o.Z)({opacity:0,visibility:"exited"!==e||s?void 0:"hidden"},h[e],k,r.props.style),ref:I},t))}))})),b=i.forwardRef((function(e,t){var r=e.children,c=e.classes,s=e.className,l=e.invisible,p=void 0!==l&&l,d=e.open,u=e.transitionDuration,f=e.TransitionComponent,m=void 0===f?g:f,h=(0,n.Z)(e,["children","classes","className","invisible","open","transitionDuration","TransitionComponent"]);return i.createElement(m,(0,o.Z)({in:d,timeout:u},h),i.createElement("div",{className:(0,a.Z)(c.root,s,p&&c.invisible),"aria-hidden":!0,ref:t},r))})),y=(0,s.Z)({root:{zIndex:-1,position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},invisible:{backgroundColor:"transparent"}},{name:"MuiBackdrop"})(b),Z=r(4164),x=r(503);function k(e,t){var r=function(e,t){var r,o=t.getBoundingClientRect();if(t.fakeTransform)r=t.fakeTransform;else{var n=window.getComputedStyle(t);r=n.getPropertyValue("-webkit-transform")||n.getPropertyValue("transform")}var i=0,a=0;if(r&&"none"!==r&&"string"===typeof r){var c=r.split("(")[1].split(")")[0].split(",");i=parseInt(c[4],10),a=parseInt(c[5],10)}return"left"===e?"translateX(".concat(window.innerWidth,"px) translateX(").concat(i-o.left,"px)"):"right"===e?"translateX(-".concat(o.left+o.width-i,"px)"):"up"===e?"translateY(".concat(window.innerHeight,"px) translateY(").concat(a-o.top,"px)"):"translateY(-".concat(o.top+o.height-a,"px)")}(e,t);r&&(t.style.webkitTransform=r,t.style.transform=r)}var w={enter:d.x9.enteringScreen,exit:d.x9.leavingScreen},C=i.forwardRef((function(e,t){var r=e.children,a=e.direction,c=void 0===a?"down":a,s=e.in,l=e.onEnter,d=e.onEntered,h=e.onEntering,v=e.onExit,g=e.onExited,b=e.onExiting,y=e.style,C=e.timeout,S=void 0===C?w:C,E=e.TransitionComponent,P=void 0===E?p.ZP:E,R=(0,n.Z)(e,["children","direction","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),z=(0,u.Z)(),T=i.useRef(null),N=i.useCallback((function(e){T.current=Z.findDOMNode(e)}),[]),I=(0,m.Z)(r.ref,N),B=(0,m.Z)(I,t),M=function(e){return function(t){e&&(void 0===t?e(T.current):e(T.current,t))}},O=M((function(e,t){k(c,e),(0,f.n)(e),l&&l(e,t)})),F=M((function(e,t){var r=(0,f.C)({timeout:S,style:y},{mode:"enter"});e.style.webkitTransition=z.transitions.create("-webkit-transform",(0,o.Z)({},r,{easing:z.transitions.easing.easeOut})),e.style.transition=z.transitions.create("transform",(0,o.Z)({},r,{easing:z.transitions.easing.easeOut})),e.style.webkitTransform="none",e.style.transform="none",h&&h(e,t)})),j=M(d),A=M(b),D=M((function(e){var t=(0,f.C)({timeout:S,style:y},{mode:"exit"});e.style.webkitTransition=z.transitions.create("-webkit-transform",(0,o.Z)({},t,{easing:z.transitions.easing.sharp})),e.style.transition=z.transitions.create("transform",(0,o.Z)({},t,{easing:z.transitions.easing.sharp})),k(c,e),v&&v(e)})),L=M((function(e){e.style.webkitTransition="",e.style.transition="",g&&g(e)})),K=i.useCallback((function(){T.current&&k(c,T.current)}),[c]);return i.useEffect((function(){if(!s&&"down"!==c&&"right"!==c){var e=(0,x.Z)((function(){T.current&&k(c,T.current)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}}),[c,s]),i.useEffect((function(){s||K()}),[s,K]),i.createElement(P,(0,o.Z)({nodeRef:T,onEnter:O,onEntered:j,onEntering:F,onExit:D,onExited:L,onExiting:A,appear:!0,in:s,timeout:S},R),(function(e,t){return i.cloneElement(r,(0,o.Z)({ref:B,style:(0,o.Z)({visibility:"exited"!==e||s?void 0:"hidden"},y,r.props.style)},t))}))})),S=r(9526),E=r(1122),P={left:"right",right:"left",top:"down",bottom:"up"};var R={enter:d.x9.enteringScreen,exit:d.x9.leavingScreen},z=i.forwardRef((function(e,t){var r=e.anchor,s=void 0===r?"left":r,l=e.BackdropProps,p=e.children,d=e.classes,f=e.className,m=e.elevation,h=void 0===m?16:m,v=e.ModalProps,g=(v=void 0===v?{}:v).BackdropProps,b=(0,n.Z)(v,["BackdropProps"]),Z=e.onClose,x=e.open,k=void 0!==x&&x,w=e.PaperProps,z=void 0===w?{}:w,T=e.SlideProps,N=e.TransitionComponent,I=void 0===N?C:N,B=e.transitionDuration,M=void 0===B?R:B,O=e.variant,F=void 0===O?"temporary":O,j=(0,n.Z)(e,["anchor","BackdropProps","children","classes","className","elevation","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"]),A=(0,u.Z)(),D=i.useRef(!1);i.useEffect((function(){D.current=!0}),[]);var L=function(e,t){return"rtl"===e.direction&&function(e){return-1!==["left","right"].indexOf(e)}(t)?P[t]:t}(A,s),K=i.createElement(S.Z,(0,o.Z)({elevation:"temporary"===F?h:0,square:!0},z,{className:(0,a.Z)(d.paper,d["paperAnchor".concat((0,E.Z)(L))],z.className,"temporary"!==F&&d["paperAnchorDocked".concat((0,E.Z)(L))])}),p);if("permanent"===F)return i.createElement("div",(0,o.Z)({className:(0,a.Z)(d.root,d.docked,f),ref:t},j),K);var _=i.createElement(I,(0,o.Z)({in:k,direction:P[L],timeout:M,appear:D.current},T),K);return"persistent"===F?i.createElement("div",(0,o.Z)({className:(0,a.Z)(d.root,d.docked,f),ref:t},j),_):i.createElement(c.Z,(0,o.Z)({BackdropProps:(0,o.Z)({},l,g,{transitionDuration:M}),BackdropComponent:y,className:(0,a.Z)(d.root,d.modal,f),open:k,onClose:Z,ref:t},j,b),_)})),T=(0,s.Z)((function(e){return{root:{},docked:{flex:"0 0 auto"},paper:{overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:e.zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},paperAnchorLeft:{left:0,right:"auto"},paperAnchorRight:{left:"auto",right:0},paperAnchorTop:{top:0,left:0,bottom:"auto",right:0,height:"auto",maxHeight:"100%"},paperAnchorBottom:{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},paperAnchorDockedLeft:{borderRight:"1px solid ".concat(e.palette.divider)},paperAnchorDockedTop:{borderBottom:"1px solid ".concat(e.palette.divider)},paperAnchorDockedRight:{borderLeft:"1px solid ".concat(e.palette.divider)},paperAnchorDockedBottom:{borderTop:"1px solid ".concat(e.palette.divider)},modal:{}}}),{name:"MuiDrawer",flip:!1})(z)},7025:function(e,t,r){"use strict";var o=r(7462),n=r(5987),i=r(2791),a=r(8182),c=r(8317),s=r(3108),l=r(5051),p=r(1122),d=i.forwardRef((function(e,t){var r=e.edge,c=void 0!==r&&r,s=e.children,d=e.classes,u=e.className,f=e.color,m=void 0===f?"default":f,h=e.disabled,v=void 0!==h&&h,g=e.disableFocusRipple,b=void 0!==g&&g,y=e.size,Z=void 0===y?"medium":y,x=(0,n.Z)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return i.createElement(l.Z,(0,o.Z)({className:(0,a.Z)(d.root,u,"default"!==m&&d["color".concat((0,p.Z)(m))],v&&d.disabled,"small"===Z&&d["size".concat((0,p.Z)(Z))],{start:d.edgeStart,end:d.edgeEnd}[c]),centerRipple:!0,focusRipple:!b,disabled:v,ref:t},x),i.createElement("span",{className:d.label},s))}));t.Z=(0,c.Z)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:(0,s.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,s.Fq)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,s.Fq)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(d)},7690:function(e,t,r){"use strict";var o=r(7462),n=r(5987),i=r(4942),a=r(2791),c=r(8182),s=r(8317),l=a.forwardRef((function(e,t){var r=e.classes,i=e.className,s=e.component,l=void 0===s?"div":s,p=e.disableGutters,d=void 0!==p&&p,u=e.variant,f=void 0===u?"regular":u,m=(0,n.Z)(e,["classes","className","component","disableGutters","variant"]);return a.createElement(l,(0,o.Z)({className:(0,c.Z)(r.root,r[f],i,!d&&r.gutters),ref:t},m))}));t.Z=(0,s.Z)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:(0,i.Z)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),regular:e.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(l)},2446:function(e,t,r){"use strict";r.r(t),r.d(t,{capitalize:function(){return o.Z},createChainedFunction:function(){return n.Z},createSvgIcon:function(){return i.Z},debounce:function(){return a.Z},deprecatedPropType:function(){return c},isMuiElement:function(){return s.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return p.Z},requirePropFactory:function(){return d},setRef:function(){return u.Z},unstable_useId:function(){return b},unsupportedProp:function(){return f},useControlled:function(){return m.Z},useEventCallback:function(){return h.Z},useForkRef:function(){return v.Z},useIsFocusVisible:function(){return y.Z}});var o=r(1122),n=r(7545),i=r(8499),a=r(503);function c(e,t){return function(){return null}}var s=r(3375),l=r(4667),p=r(7636);function d(e){return function(){return null}}var u=r(1565);function f(e,t,r,o,n){return null}var m=r(2497),h=r(2216),v=r(9806),g=r(2791);function b(e){var t=g.useState(e),r=t[0],o=t[1],n=e||r;return g.useEffect((function(){null==r&&o("mui-".concat(Math.round(1e5*Math.random())))}),[r]),n}var y=r(1175)},8336:function(e,t,r){"use strict";var o=r(4836),n=r(5263);t.Z=void 0;var i=n(r(2791)),a=(0,o(r(4894)).default)(i.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");t.Z=a},4894:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=r(2446)},9952:function(e,t,r){"use strict";var o=r(4836);t.Z=void 0;var n=o(r(5649)),i=r(184),a=(0,n.default)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"}),"AccountCircle");t.Z=a},6488:function(e,t,r){"use strict";var o=r(4836);t.Z=void 0;var n=o(r(5649)),i=r(184),a=(0,n.default)((0,i.jsx)("path",{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"}),"Logout");t.Z=a},3104:function(e,t,r){"use strict";r.d(t,{Z:function(){return F}});var o=r(9439),n=r(3433),i=r(4942),a=r(3366),c=r(7462),s=r(2791),l=r(9278),p=r(838),d=r(4131),u=r(4036),f=r(6934),m=r(5070),h=r(9552);var v=s.createContext(void 0);var g=r(5080),b=r(9703),y=r(4657);function Z(e){return(0,y.ZP)("PrivateSwitchBase",e)}(0,b.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var x=r(184),k=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],w=(0,f.ZP)(g.Z)((function(e){var t=e.ownerState;return(0,c.Z)({padding:9,borderRadius:"50%"},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})})),C=(0,f.ZP)("input",{shouldForwardProp:m.Z})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),S=s.forwardRef((function(e,t){var r=e.autoFocus,n=e.checked,i=e.checkedIcon,d=e.className,f=e.defaultChecked,m=e.disabled,g=e.disableFocusRipple,b=void 0!==g&&g,y=e.edge,S=void 0!==y&&y,E=e.icon,P=e.id,R=e.inputProps,z=e.inputRef,T=e.name,N=e.onBlur,I=e.onChange,B=e.onFocus,M=e.readOnly,O=e.required,F=void 0!==O&&O,j=e.tabIndex,A=e.type,D=e.value,L=(0,a.Z)(e,k),K=(0,h.Z)({controlled:n,default:Boolean(f),name:"SwitchBase",state:"checked"}),_=(0,o.Z)(K,2),H=_[0],W=_[1],q=s.useContext(v),G=m;q&&"undefined"===typeof G&&(G=q.disabled);var V="checkbox"===A||"radio"===A,X=(0,c.Z)({},e,{checked:H,disabled:G,disableFocusRipple:b,edge:S}),Y=function(e){var t=e.classes,r=e.checked,o=e.disabled,n=e.edge,i={root:["root",r&&"checked",o&&"disabled",n&&"edge".concat((0,u.Z)(n))],input:["input"]};return(0,p.Z)(i,Z,t)}(X);return(0,x.jsxs)(w,(0,c.Z)({component:"span",className:(0,l.Z)(Y.root,d),centerRipple:!0,focusRipple:!b,disabled:G,tabIndex:null,role:void 0,onFocus:function(e){B&&B(e),q&&q.onFocus&&q.onFocus(e)},onBlur:function(e){N&&N(e),q&&q.onBlur&&q.onBlur(e)},ownerState:X,ref:t},L,{children:[(0,x.jsx)(C,(0,c.Z)({autoFocus:r,checked:n,defaultChecked:f,className:Y.input,disabled:G,id:V?P:void 0,name:T,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var t=e.target.checked;W(t),I&&I(e,t)}},readOnly:M,ref:z,required:F,ownerState:X,tabIndex:j,type:A},"checkbox"===A&&void 0===D?{}:{value:D},R)),H?i:E]}))})),E=r(1402);function P(e){return(0,y.ZP)("MuiSwitch",e)}var R,z=(0,b.Z)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),T=["className","color","edge","size","sx"],N=E.Z,I=(0,f.ZP)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,r.edge&&t["edge".concat((0,u.Z)(r.edge))],t["size".concat((0,u.Z)(r.size))]]}})({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:(R={width:40,height:24,padding:7},(0,i.Z)(R,"& .".concat(z.thumb),{width:16,height:16}),(0,i.Z)(R,"& .".concat(z.switchBase),(0,i.Z)({padding:4},"&.".concat(z.checked),{transform:"translateX(16px)"})),R)}]}),B=(0,f.ZP)(S,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:function(e,t){var r=e.ownerState;return[t.switchBase,(0,i.Z)({},"& .".concat(z.input),t.input),"default"!==r.color&&t["color".concat((0,u.Z)(r.color))]]}})((function(e){var t,r=e.theme;return t={position:"absolute",top:0,left:0,zIndex:1,color:r.vars?r.vars.palette.Switch.defaultColor:"".concat("light"===r.palette.mode?r.palette.common.white:r.palette.grey[300]),transition:r.transitions.create(["left","transform"],{duration:r.transitions.duration.shortest})},(0,i.Z)(t,"&.".concat(z.checked),{transform:"translateX(20px)"}),(0,i.Z)(t,"&.".concat(z.disabled),{color:r.vars?r.vars.palette.Switch.defaultDisabledColor:"".concat("light"===r.palette.mode?r.palette.grey[100]:r.palette.grey[600])}),(0,i.Z)(t,"&.".concat(z.checked," + .").concat(z.track),{opacity:.5}),(0,i.Z)(t,"&.".concat(z.disabled," + .").concat(z.track),{opacity:r.vars?r.vars.opacity.switchTrackDisabled:"".concat("light"===r.palette.mode?.12:.2)}),(0,i.Z)(t,"& .".concat(z.input),{left:"-100%",width:"300%"}),t}),(function(e){var t=e.theme;return{"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.activeChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:(0,n.Z)(Object.entries(t.palette).filter((function(e){var t=(0,o.Z)(e,2)[1];return t.main&&t.light})).map((function(e){var r,n=(0,o.Z)(e,1)[0];return{props:{color:n},style:(r={},(0,i.Z)(r,"&.".concat(z.checked),(0,i.Z)({color:(t.vars||t).palette[n].main,"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette[n].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(t.palette[n].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(z.disabled),{color:t.vars?t.vars.palette.Switch["".concat(n,"DisabledColor")]:"".concat("light"===t.palette.mode?(0,d.$n)(t.palette[n].main,.62):(0,d._j)(t.palette[n].main,.55))})),(0,i.Z)(r,"&.".concat(z.checked," + .").concat(z.track),{backgroundColor:(t.vars||t).palette[n].main}),r)}})))}})),M=(0,f.ZP)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:function(e,t){return t.track}})((function(e){var t=e.theme;return{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:"".concat("light"===t.palette.mode?t.palette.common.black:t.palette.common.white),opacity:t.vars?t.vars.opacity.switchTrack:"".concat("light"===t.palette.mode?.38:.3)}})),O=(0,f.ZP)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:function(e,t){return t.thumb}})((function(e){var t=e.theme;return{boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}})),F=s.forwardRef((function(e,t){var r=N({props:e,name:"MuiSwitch"}),o=r.className,n=r.color,i=void 0===n?"primary":n,s=r.edge,d=void 0!==s&&s,f=r.size,m=void 0===f?"medium":f,h=r.sx,v=(0,a.Z)(r,T),g=(0,c.Z)({},r,{color:i,edge:d,size:m}),b=function(e){var t=e.classes,r=e.edge,o=e.size,n=e.color,i=e.checked,a=e.disabled,s={root:["root",r&&"edge".concat((0,u.Z)(r)),"size".concat((0,u.Z)(o))],switchBase:["switchBase","color".concat((0,u.Z)(n)),i&&"checked",a&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},l=(0,p.Z)(s,P,t);return(0,c.Z)({},t,l)}(g),y=(0,x.jsx)(O,{className:b.thumb,ownerState:g});return(0,x.jsxs)(I,{className:(0,l.Z)(b.root,o),sx:h,ownerState:g,children:[(0,x.jsx)(B,(0,c.Z)({type:"checkbox",icon:y,checkedIcon:y,ref:t,ownerState:g},v,{classes:(0,c.Z)({},b,{root:b.switchBase})})),(0,x.jsx)(M,{className:b.track,ownerState:g})]})}))},5263:function(e,t,r){var o=r(8698).default;function n(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(n=function(e){return e?r:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var r=n(t);if(r&&r.has(e))return r.get(e);var i={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&{}.hasOwnProperty.call(e,c)){var s=a?Object.getOwnPropertyDescriptor(e,c):null;s&&(s.get||s.set)?Object.defineProperty(i,c,s):i[c]=e[c]}return i.default=e,r&&r.set(e,i),i},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=43.e8d72427.chunk.js.map