"use strict";(self.webpackChunkvideoteca_frontend=self.webpackChunkvideoteca_frontend||[]).push([[208],{7411:function(e,t,n){var r=n(4165),a=n(5861),o=n(3263),s=n(9778),i="https://sccotview.com/api/",c=o.Z.create({baseURL:i,timeout:5e3,headers:{Authorization:localStorage.getItem("access_token")?"JWT "+localStorage.getItem("access_token"):null,"Content-Type":"multipart/form-data",accept:"application/json"}});c.interceptors.response.use((function(e){return e}),function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,o,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.config,"undefined"!==typeof t.response){e.next=4;break}return console.warn("A server/network error occurred. Looks like CORS might be the problem. Sorry about this - we will get it fixed shortly."),e.abrupt("return",Promise.reject(t));case 4:if(401!==t.response.status||n.url!==i+"api/token/refresh/"){e.next=7;break}return window.location.href="/loginuser/",e.abrupt("return",Promise.reject(t));case 7:if("token_not_valid"!==t.response.data.code||401!==t.response.status||"Unauthorized"!==t.response.statusText){e.next=26;break}if(!(a=localStorage.getItem("refresh_token"))){e.next=24;break}if(o=JSON.parse(s.lW.from(a.split(".")[1],"base64").toString()),l=Math.ceil(Date.now()/1e3),console.log(o.exp),!(o.exp>l)){e.next=17;break}return e.abrupt("return",c.post("api/token/refresh/",{refresh:a}).then((function(e){return localStorage.setItem("access_token",e.data.access_token),localStorage.setItem("refresh_token",e.data.refresh_token),c.defaults.headers.Authorization="JWT "+e.data.access_token,n.headers.Authorization="JWT "+e.data.access_token,c(n)})).catch((function(e){console.log(e)})));case 17:console.log("Refresh token is expired",o.exp,l),window.localStorage.removeItem("access_token"),window.localStorage.removeItem("refresh_token"),window.localStorage.removeItem("user"),window.location.href="/loginuser/";case 22:e.next=26;break;case 24:console.log("Refresh token not available."),window.location.href="/loginuser/";case 26:return 401===t.response.status&&(window.location.href="/loginuser/"),e.abrupt("return",Promise.reject(t));case 28:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.Z=c},9208:function(e,t,n){n.r(t);var r=n(4165),a=n(5861),o=n(9439),s=n(2791),i=n(7689),c=n(2680),l=n(746),u=n(3712),p=n(8596),d=n(8302),h=n(184);t.default=function(){var e=(0,i.s0)(),t=(0,s.useContext)(c.Z).user,n=(0,s.useState)(null),g=(0,o.Z)(n,2),m=(g[0],g[1]),f=(0,p.Z)((function(e){return{paper:{marginTop:e.spacing(0),marginBottom:e.spacing(10),display:"flex",flexDirection:"column",alignItems:"center"},contenedorImg:{flexWrap:"wrap"},botonList:{margin:e.spacing(3,1),color:"black"},title1:{textAlign:"center"}}})),b=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.PR)(t);case 2:n=e.sent,m(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();(0,s.useEffect)((function(){t?b(t.id):e("/loginuser")}),[]);var x=f();return t?(0,h.jsxs)(u.Z,{children:[(0,h.jsx)("div",{className:x.paper,children:(0,h.jsx)(d.Z,{component:"h1",variant:"h3",children:"AJUSTES"})}),(0,h.jsx)("div",{className:"d-grid col-4 mx-auto mb-4",children:(0,h.jsx)("button",{className:"btn btn-success btn-lg",onClick:function(){return e("/Ajustes/Categorias")},children:"Categorias"})}),(0,h.jsxs)("div",{className:"row mb-4 ",children:[(0,h.jsx)("div",{className:"d-grid col-4",children:(0,h.jsx)("button",{className:"btn btn-success btn-lg",onClick:function(){return e("/Ajustes/Especialidades")},children:"Especialidades"})}),(0,h.jsx)("div",{className:"d-grid  col-4 ",children:(0,h.jsx)("button",{className:"btn btn-success btn-lg",onClick:function(){return e("/Ajustes/PalabrasClaves")},children:"PalabrasClaves"})}),(0,h.jsx)("div",{className:"d-grid  col-4 ",children:(0,h.jsx)("button",{className:"btn btn-success btn-lg",onClick:function(){return e("/Ajustes/SubEspecialidades")},children:"SubEspecialidades"})})]}),(0,h.jsxs)("div",{className:"row mb-5 ",children:[(0,h.jsx)("div",{className:"d-grid col-4 ",children:(0,h.jsx)("button",{className:"btn btn-success btn-lg",onClick:function(){return e("/Ajustes/Series")},children:"Series"})}),(0,h.jsx)("div",{className:"d-grid  col-4 ",children:(0,h.jsx)("button",{className:"btn btn-success btn-lg",onClick:function(){return e("/Ajustes/Temporadas")},children:"Temporadas"})})]})]}):(0,h.jsx)("p",{style:{fontSize:"25px"},children:"Inicia sesi\xf3n para ver todos los videos!"})}},746:function(e,t,n){n.d(t,{PR:function(){return l},gO:function(){return u},m3:function(){return c}});var r=n(4165),a=n(5861),o=n(3263),s=n(7411),i="https://sccotview.com/api/",c=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.post(i+"login/",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"users/").concat(t));case 2:if(200!==(n=e.sent).status){e.next=8;break}return console.log(n),e.next=7,n.data;case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.patch("".concat(i,"users/").concat(t,"/"),n);case 2:if(200!==(a=e.sent).status){e.next=7;break}return e.next=6,a.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},3712:function(e,t,n){var r=n(7462),a=n(5987),o=n(4942),s=n(2791),i=n(8182),c=n(8317),l=n(1122),u=s.forwardRef((function(e,t){var n=e.classes,o=e.className,c=e.component,u=void 0===c?"div":c,p=e.disableGutters,d=void 0!==p&&p,h=e.fixed,g=void 0!==h&&h,m=e.maxWidth,f=void 0===m?"lg":m,b=(0,a.Z)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return s.createElement(u,(0,r.Z)({className:(0,i.Z)(n.root,o,g&&n.fixed,d&&n.disableGutters,!1!==f&&n["maxWidth".concat((0,l.Z)(String(f)))]),ref:t},b))}));t.Z=(0,c.Z)((function(e){return{root:(0,o.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,n){var r=e.breakpoints.values[n];return 0!==r&&(t[e.breakpoints.up(n)]={maxWidth:r}),t}),{}),maxWidthXs:(0,o.Z)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:(0,o.Z)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:(0,o.Z)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:(0,o.Z)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:(0,o.Z)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(u)},8302:function(e,t,n){var r=n(7462),a=n(5987),o=n(2791),s=n(8182),i=n(8317),c=n(1122),l={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},u=o.forwardRef((function(e,t){var n=e.align,i=void 0===n?"inherit":n,u=e.classes,p=e.className,d=e.color,h=void 0===d?"initial":d,g=e.component,m=e.display,f=void 0===m?"initial":m,b=e.gutterBottom,x=void 0!==b&&b,v=e.noWrap,y=void 0!==v&&v,k=e.paragraph,w=void 0!==k&&k,Z=e.variant,j=void 0===Z?"body1":Z,S=e.variantMapping,W=void 0===S?l:S,N=(0,a.Z)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),C=g||(w?"p":W[j]||l[j])||"span";return o.createElement(C,(0,r.Z)({className:(0,s.Z)(u.root,p,"inherit"!==j&&u[j],"initial"!==h&&u["color".concat((0,c.Z)(h))],y&&u.noWrap,x&&u.gutterBottom,w&&u.paragraph,"inherit"!==i&&u["align".concat((0,c.Z)(i))],"initial"!==f&&u["display".concat((0,c.Z)(f))]),ref:t},N))}));t.Z=(0,i.Z)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(u)}}]);
//# sourceMappingURL=208.979b6c01.chunk.js.map