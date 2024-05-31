"use strict";(self.webpackChunkvideoteca_frontend=self.webpackChunkvideoteca_frontend||[]).push([[313],{5313:function(e,t,r){r.d(t,{Z:function(){return L}});var n=r(4942),o=r(3366),i=r(7462),a=r(2791),u=r(831),c=r(8736),s=r(4657),l=r(838),f=r(3433),v=r(9439),d=r(1061),p=r(8809),m=r(104),h=["ownerState"],y=["variants"],Z=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function w(e){return"string"===typeof e&&e.charCodeAt(0)>96}function k(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}var g=(0,p.Z)(),S=function(e){return e?e.charAt(0).toLowerCase()+e.slice(1):e};function b(e){var t,r=e.defaultTheme,n=e.theme,o=e.themeId;return t=n,0===Object.keys(t).length?r:n[o]||n}function A(e){return e?function(t,r){return r[e]}:null}function x(e,t){var r=t.ownerState,n=(0,o.Z)(t,h),a="function"===typeof e?e((0,i.Z)({ownerState:r},n)):e;if(Array.isArray(a))return a.flatMap((function(e){return x(e,(0,i.Z)({ownerState:r},n))}));if(a&&"object"===typeof a&&Array.isArray(a.variants)){var u=a.variants,c=void 0===u?[]:u,s=(0,o.Z)(a,y);return c.forEach((function(e){var t=!0;"function"===typeof e.props?t=e.props((0,i.Z)({ownerState:r},n,r)):Object.keys(e.props).forEach((function(o){(null==r?void 0:r[o])!==e.props[o]&&n[o]!==e.props[o]&&(t=!1)})),t&&(Array.isArray(s)||(s=[s]),s.push("function"===typeof e.style?e.style((0,i.Z)({ownerState:r},n,r)):e.style))})),s}return a}var R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.themeId,r=e.defaultTheme,n=void 0===r?g:r,a=e.rootShouldForwardProp,u=void 0===a?k:a,s=e.slotShouldForwardProp,l=void 0===s?k:s,p=function(e){return(0,m.Z)((0,i.Z)({},e,{theme:b((0,i.Z)({},e,{defaultTheme:n,themeId:t}))}))};return p.__mui_systemSx=!0,function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,d.internal_processStyles)(e,(function(e){return e.filter((function(e){return!(null!=e&&e.__mui_systemSx)}))}));var a,s=r.name,m=r.slot,h=r.skipVariantsResolver,y=r.skipSx,g=r.overridesResolver,R=void 0===g?A(S(m)):g,_=(0,o.Z)(r,Z),P=void 0!==h?h:m&&"Root"!==m&&"root"!==m||!1,j=y||!1;var C=k;"Root"===m||"root"===m?C=u:m?C=l:w(e)&&(C=void 0);var T=(0,d.default)(e,(0,i.Z)({shouldForwardProp:C,label:a},_)),N=function(e){return"function"===typeof e&&e.__emotion_real!==e||(0,c.P)(e)?function(r){return x(e,(0,i.Z)({},r,{theme:b({theme:r.theme,defaultTheme:n,themeId:t})}))}:e},F=function(r){for(var o=N(r),a=arguments.length,u=new Array(a>1?a-1:0),c=1;c<a;c++)u[c-1]=arguments[c];var l=u?u.map(N):[];s&&R&&l.push((function(e){var r=b((0,i.Z)({},e,{defaultTheme:n,themeId:t}));if(!r.components||!r.components[s]||!r.components[s].styleOverrides)return null;var o=r.components[s].styleOverrides,a={};return Object.entries(o).forEach((function(t){var n=(0,v.Z)(t,2),o=n[0],u=n[1];a[o]=x(u,(0,i.Z)({},e,{theme:r}))})),R(e,a)})),s&&!P&&l.push((function(e){var r,o=b((0,i.Z)({},e,{defaultTheme:n,themeId:t}));return x({variants:null==o||null==(r=o.components)||null==(r=r[s])?void 0:r.variants},(0,i.Z)({},e,{theme:o}))})),j||l.push(p);var d=l.length-u.length;if(Array.isArray(r)&&d>0){var m=new Array(d).fill("");(o=[].concat((0,f.Z)(r),(0,f.Z)(m))).raw=[].concat((0,f.Z)(r.raw),(0,f.Z)(m))}var h=T.apply(void 0,[o].concat((0,f.Z)(l)));return e.muiName&&(h.muiName=e.muiName),h};return T.withConfig&&(F.withConfig=T.withConfig),F}}(),_=R,P=r(7078),j=r(8519),C=r(1184),T=r(5682),N=r(184),F=["component","direction","spacing","divider","children","className","useFlexGap"],O=(0,p.Z)(),I=_("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return t.root}});function M(e){return(0,P.Z)({props:e,name:"MuiStack",defaultTheme:O})}function E(e,t){var r=a.Children.toArray(e).filter(Boolean);return r.reduce((function(e,n,o){return e.push(n),o<r.length-1&&e.push(a.cloneElement(t,{key:"separator-".concat(o)})),e}),[])}var G=function(e){var t=e.ownerState,r=e.theme,o=(0,i.Z)({display:"flex",flexDirection:"column"},(0,C.k9)({theme:r},(0,C.P$)({values:t.direction,breakpoints:r.breakpoints.values}),(function(e){return{flexDirection:e}})));if(t.spacing){var a=(0,T.hB)(r),u=Object.keys(r.breakpoints.values).reduce((function(e,r){return("object"===typeof t.spacing&&null!=t.spacing[r]||"object"===typeof t.direction&&null!=t.direction[r])&&(e[r]=!0),e}),{}),s=(0,C.P$)({values:t.direction,base:u}),l=(0,C.P$)({values:t.spacing,base:u});"object"===typeof s&&Object.keys(s).forEach((function(e,t,r){if(!s[e]){var n=t>0?s[r[t-1]]:"column";s[e]=n}}));o=(0,c.Z)(o,(0,C.k9)({theme:r},l,(function(e,r){return t.useFlexGap?{gap:(0,T.NA)(a,e)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":(0,n.Z)({},"margin".concat((o=r?s[r]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o])),(0,T.NA)(a,e))};var o})))}return o=(0,C.dt)(r.breakpoints,o)};var B=r(6934),$=r(1402),D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,r=void 0===t?I:t,n=e.useThemeProps,c=void 0===n?M:n,f=e.componentName,v=void 0===f?"MuiStack":f,d=function(){return(0,l.Z)({root:["root"]},(function(e){return(0,s.ZP)(v,e)}),{})},p=r(G),m=a.forwardRef((function(e,t){var r=c(e),n=(0,j.Z)(r),a=n.component,s=void 0===a?"div":a,l=n.direction,f=void 0===l?"column":l,v=n.spacing,m=void 0===v?0:v,h=n.divider,y=n.children,Z=n.className,w=n.useFlexGap,k=void 0!==w&&w,g=(0,o.Z)(n,F),S={direction:f,spacing:m,useFlexGap:k},b=d();return(0,N.jsx)(p,(0,i.Z)({as:s,ownerState:S,ref:t,className:(0,u.Z)(b.root,Z)},g,{children:h?E(y,h):y}))}));return m}({createStyledComponent:(0,B.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return t.root}}),useThemeProps:function(e){return(0,$.Z)({props:e,name:"MuiStack"})}}),L=D}}]);
//# sourceMappingURL=313.2947566d.chunk.js.map