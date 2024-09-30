"use strict";(self.webpackChunkvideoteca_frontend=self.webpackChunkvideoteca_frontend||[]).push([[915],{7411:function(e,t,r){var n=r(4165),o=r(5861),a=r(3263),i=r(9778),s="http://sccotview.com/api/",c=a.Z.create({baseURL:s,timeout:5e3,headers:{Authorization:localStorage.getItem("access_token")?"JWT "+localStorage.getItem("access_token"):null,"Content-Type":"multipart/form-data",accept:"application/json"}});c.interceptors.response.use((function(e){return e}),function(){var e=(0,o.Z)((0,n.Z)().mark((function e(t){var r,o,a,l;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.config,"undefined"!==typeof t.response){e.next=4;break}return console.warn("A server/network error occurred. Looks like CORS might be the problem. Sorry about this - we will get it fixed shortly."),e.abrupt("return",Promise.reject(t));case 4:if(401!==t.response.status||r.url!==s+"api/token/refresh/"){e.next=7;break}return window.location.href="/loginuser/",e.abrupt("return",Promise.reject(t));case 7:if("token_not_valid"!==t.response.data.code||401!==t.response.status||"Unauthorized"!==t.response.statusText){e.next=26;break}if(!(o=localStorage.getItem("refresh_token"))){e.next=24;break}if(a=JSON.parse(i.lW.from(o.split(".")[1],"base64").toString()),l=Math.ceil(Date.now()/1e3),console.log(a.exp),!(a.exp>l)){e.next=17;break}return e.abrupt("return",c.post("api/token/refresh/",{refresh:o}).then((function(e){return localStorage.setItem("access_token",e.data.access_token),localStorage.setItem("refresh_token",e.data.refresh_token),c.defaults.headers.Authorization="JWT "+e.data.access_token,r.headers.Authorization="JWT "+e.data.access_token,c(r)})).catch((function(e){console.log(e)})));case 17:console.log("Refresh token is expired",a.exp,l),window.localStorage.removeItem("access_token"),window.localStorage.removeItem("refresh_token"),window.localStorage.removeItem("user"),window.location.href="/loginuser/";case 22:e.next=26;break;case 24:console.log("Refresh token not available."),window.location.href="/loginuser/";case 26:return 401===t.response.status&&(window.location.href="/loginuser/"),e.abrupt("return",Promise.reject(t));case 28:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.Z=c},1915:function(e,t,r){r.r(t),r.d(t,{default:function(){return b}});var n=r(9439),o=r(2791),a=r(4165),i=r(5861),s=r(7689),c=(r(8040),r(1174),r(3712)),l=r(8596),u=r(8302),p=r(3767),d=r(6151),h=r(2680),f=r(6779),x=r(3021),m=r(2918),v=r(184),g=function(e){var t=e.autores,r=(0,s.s0)(),g=(0,m.d)(!1),y=(0,n.Z)(g,3),b=y[0],Z=y[1],w=y[2],k=(0,o.useState)(""),j=(0,n.Z)(k,2),S=j[0],C=j[1],A=(0,o.useState)({}),I=(0,n.Z)(A,2),N=I[0],_=I[1],P=(0,o.useState)(t),D=(0,n.Z)(P,2),T=D[0],B=D[1],R=(0,o.useState)({autores:""}),M=(0,n.Z)(R,2),E=M[0],F=M[1],z=(0,o.useContext)(h.Z).user,W=(0,l.Z)((function(e){return{paper:{marginTop:e.spacing(0),marginBottom:e.spacing(10),display:"flex",flexDirection:"column",alignItems:"center"},title1:{textAlign:"center",color:"white"}}})),J=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C(t.id),_(t),F({autor:t.autor}),Z(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C(null),_({}),F({autor:""}),Z(!0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var t,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.dM)();case 3:return t=e.sent,e.next=6,t;case 6:r=e.sent,B(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();(0,o.useEffect)((function(){z?(O(),C(null)):r("/loginuser")}),[]);var $=W();return z?(0,v.jsxs)(c.Z,{children:[(0,v.jsx)("div",{className:$.paper,children:(0,v.jsx)(u.Z,{component:"h1",variant:"h3",children:"Autores"})}),(0,v.jsx)(p.Z,{alignItems:"center",children:(0,v.jsx)(d.Z,{variant:"contained",color:"success",type:"submit",onClick:function(){return L()},children:"Registrar Autor"})}),(0,v.jsx)("br",{}),(0,v.jsx)("br",{})," ",(0,v.jsx)("br",{}),(0,v.jsx)("div",{children:(0,v.jsx)("section",{className:"content",children:(0,v.jsx)("div",{className:"table-responsive table-condensed table-sm tabla",children:(0,v.jsxs)("table",{className:"table table-hover",id:"dataTableData",name:"dataTableData",style:{fontSize:11,textAlign:"center"},children:[(0,v.jsx)("thead",{className:$.title1,children:(0,v.jsxs)("tr",{children:[(0,v.jsx)("th",{style:{display:"none"},children:"Id"}),(0,v.jsx)("th",{children:"Codigo"}),(0,v.jsx)("th",{children:"Autor"}),(0,v.jsx)("th",{})]})}),(0,v.jsx)("tbody",{style:{backgroundColor:"white"},children:0===T.length?(0,v.jsx)("tr",{children:(0,v.jsx)("td",{colSpan:11,children:"No hay datos"})}):T.map((function(e,t){return(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{style:{display:"none"},children:e.id}),(0,v.jsx)("td",{children:e.id}),(0,v.jsx)("td",{children:e.autor}),(0,v.jsx)("td",{children:(0,v.jsx)("button",{className:"btn btn-warning btn-sm float-right",type:"submit",onClick:function(){return J(e)},children:"editar"})})]},t)}))})]})})})}),(0,v.jsx)(x.Z,{handleClose:w,show:b,autor_id:S,currentItem:N,setAutores:B,setFormData:F,newData:E})]}):(0,v.jsx)("p",{style:{fontSize:"25px"},children:"Inicia sesi\xf3n para ver todos los videos!"})},y=r(2516),b=function(){var e=(0,y.Z)(g),t=(0,o.useContext)(h.Z).user,r=(0,o.useState)({loading:!0,autores:null}),a=(0,n.Z)(r,2),i=a[0],s=a[1];return(0,o.useEffect)((function(){f.dM().then((function(e){s({loading:!1,autores:e})}))}),[s]),t?(0,v.jsx)(c.Z,{children:(0,v.jsx)("div",{className:"App",children:(0,v.jsx)(e,{isLoading:i.loading,autores:i.autores})})}):(0,v.jsx)("p",{style:{fontSize:"25px"},children:"Inicia sesi\xf3n para ver todos los videos!"})}},3021:function(e,t,r){var n=r(4165),o=r(5861),a=r(4942),i=r(1413),s=r(5987),c=(r(2791),r(6779)),l=r(5342),u=r(3360),p=r(4437),d=r(8596),h=(r(9629),r(184)),f=["handleClose","show","autor_id","currentItem","setFormData","newData"],x=(0,d.Z)((function(e){return{containerModal:{border:"2px solid #ccc",borderRadius:50,boxShadow:"4px 4px 4px 0px #5a28e550"},containerForm:{height:"3rem",background:"#BFF",border:"2px solid #ccc",borderRadius:50,boxShadow:"4px 4px 4px 0px #5a28e550"},"@media (max-width: 720px)":{root:{display:"flex"}}}}));t.Z=function(e){var t=e.handleClose,r=e.show,d=e.autor_id,m=(e.currentItem,e.setFormData),v=e.newData,g=(0,s.Z)(e,f),y=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(t){var r,o,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=new FormData,e.prev=2,d){e.next=9;break}return r.append("autor",v.autor),e.next=7,c.iJ(r);case 7:e.next=12;break;case 9:return r.append("autor",v.autor),e.next=12,c.oT(d,r);case 12:return e.next=14,c.dM();case 14:return o=e.sent,e.next=17,o;case 17:a=e.sent,g.setAutores(a),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(2),console.log(e.t0);case 24:case"end":return e.stop()}}),e,null,[[2,21]])})));return function(t){return e.apply(this,arguments)}}(),b=x();return(0,h.jsxs)(l.Z,{show:r,onHide:t,"aria-labelledby":"example-custom-modal-styling-title",contentClassName:b.cloud,centered:!0,children:[(0,h.jsx)(l.Z.Header,{closeButton:!0,children:(0,h.jsx)(l.Z.Title,{id:"tituloModal",className:"text-dark mx-2 mt-2",children:(0,h.jsxs)("h4",{children:[d?"Editar ":"Registrar "," Autor"]})})}),(0,h.jsx)(l.Z.Body,{id:"bodyModal",children:(0,h.jsxs)(p.Z,{onSubmit:y,children:[(0,h.jsx)(p.Z.Group,{className:"mb-2 ",controlId:"exampleForm.ControlInput2",children:(0,h.jsx)(p.Z.Control,{type:"text",className:"form-control",rows:1,name:"autor",value:v.autor||"",onChange:function(e){var t=e.target.name;m((0,i.Z)((0,i.Z)({},v),{},(0,a.Z)({},t,e.target.value)))}})}),(0,h.jsxs)(l.Z.Footer,{children:[(0,h.jsx)(u.Z,{variant:"secondary",onClick:t,children:"Cerrar"}),(0,h.jsx)(u.Z,{variant:"primary",type:"submit",onClick:t,children:d?"Guardar Cambios":"Crear"})]})]})})]})}},2516:function(e,t,r){var n=r(1413),o=r(5987),a=(r(2791),r(184)),i=["isLoading"];t.Z=function(e){return function(t){var r=t.isLoading,s=(0,o.Z)(t,i);return r?(0,a.jsxs)("div",{style:{fontSize:"25px",display:"flex",justifyContent:"center",textAlign:"center",flexDirection:"column",alignItems:"center"},children:[(0,a.jsx)("div",{className:"spinner-grow text-light",role:"status",children:(0,a.jsx)("span",{className:"sr-only"})}),"Espera por favor"]}):(0,a.jsx)(e,(0,n.Z)({},s))}}},2918:function(e,t,r){r.d(t,{d:function(){return a}});var n=r(9439),o=r(2791),a=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=(0,o.useState)(e),r=(0,n.Z)(t,2),a=r[0],i=r[1],s=function(){return i(!0)},c=function(){return i(!1)};return[a,s,c]}},6779:function(e,t,r){r.d(t,{dM:function(){return s},iJ:function(){return c},oT:function(){return l}});var n=r(4165),o=r(5861),a=r(7411),i="http://sccotview.com/api/autores/",s=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get(i);case 2:if(200!==(t=e.sent).status){e.next=7;break}return e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.post(i,t);case 2:if(r=e.sent,console.log(r),200!==r.status){e.next=8;break}return e.next=7,r.data;case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(t,r){var o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.patch(i+t+"/",r);case 2:if(200!==(o=e.sent).status){e.next=5;break}return e.abrupt("return",o.data);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},8302:function(e,t,r){var n=r(7462),o=r(5987),a=r(2791),i=r(8182),s=r(8317),c=r(1122),l={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},u=a.forwardRef((function(e,t){var r=e.align,s=void 0===r?"inherit":r,u=e.classes,p=e.className,d=e.color,h=void 0===d?"initial":d,f=e.component,x=e.display,m=void 0===x?"initial":x,v=e.gutterBottom,g=void 0!==v&&v,y=e.noWrap,b=void 0!==y&&y,Z=e.paragraph,w=void 0!==Z&&Z,k=e.variant,j=void 0===k?"body1":k,S=e.variantMapping,C=void 0===S?l:S,A=(0,o.Z)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),I=f||(w?"p":C[j]||l[j])||"span";return a.createElement(I,(0,n.Z)({className:(0,i.Z)(u.root,p,"inherit"!==j&&u[j],"initial"!==h&&u["color".concat((0,c.Z)(h))],b&&u.noWrap,g&&u.gutterBottom,w&&u.paragraph,"inherit"!==s&&u["align".concat((0,c.Z)(s))],"initial"!==m&&u["display".concat((0,c.Z)(m))]),ref:t},A))}));t.Z=(0,s.Z)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(u)},3767:function(e,t,r){var n=r(4942),o=r(3366),a=r(7462),i=r(2791),s=r(1184),c=r(5682),l=r(8519),u=r(2466),p=r(6934),d=r(1402),h=r(184),f=["component","direction","spacing","divider","children"];function x(e,t){var r=i.Children.toArray(e).filter(Boolean);return r.reduce((function(e,n,o){return e.push(n),o<r.length-1&&e.push(i.cloneElement(t,{key:"separator-".concat(o)})),e}),[])}var m=(0,p.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return[t.root]}})((function(e){var t=e.ownerState,r=e.theme,o=(0,a.Z)({display:"flex",flexDirection:"column"},(0,s.k9)({theme:r},(0,s.P$)({values:t.direction,breakpoints:r.breakpoints.values}),(function(e){return{flexDirection:e}})));if(t.spacing){var i=(0,c.hB)(r),l=Object.keys(r.breakpoints.values).reduce((function(e,r){return("object"===typeof t.spacing&&null!=t.spacing[r]||"object"===typeof t.direction&&null!=t.direction[r])&&(e[r]=!0),e}),{}),p=(0,s.P$)({values:t.direction,base:l}),d=(0,s.P$)({values:t.spacing,base:l});"object"===typeof p&&Object.keys(p).forEach((function(e,t,r){if(!p[e]){var n=t>0?p[r[t-1]]:"column";p[e]=n}}));o=(0,u.Z)(o,(0,s.k9)({theme:r},d,(function(e,r){return{"& > :not(style) + :not(style)":(0,n.Z)({margin:0},"margin".concat((o=r?p[r]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o])),(0,c.NA)(i,e))};var o})))}return o=(0,s.dt)(r.breakpoints,o)})),v=i.forwardRef((function(e,t){var r=(0,d.Z)({props:e,name:"MuiStack"}),n=(0,l.Z)(r),i=n.component,s=void 0===i?"div":i,c=n.direction,u=void 0===c?"column":c,p=n.spacing,v=void 0===p?0:p,g=n.divider,y=n.children,b=(0,o.Z)(n,f),Z={direction:u,spacing:v};return(0,h.jsx)(m,(0,a.Z)({as:s,ownerState:Z,ref:t},b,{children:g?x(y,g):y}))}));t.Z=v},8519:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(3433),o=r(7462),a=r(3366),i=r(2466),s=r(7416),c=["sx"];function l(e){var t,r=e.sx,l=function(e){var t,r,n={systemProps:{},otherProps:{}},o=null!=(t=null==e||null==(r=e.theme)?void 0:r.unstable_sxConfig)?t:s.Z;return Object.keys(e).forEach((function(t){o[t]?n.systemProps[t]=e[t]:n.otherProps[t]=e[t]})),n}((0,a.Z)(e,c)),u=l.systemProps,p=l.otherProps;return t=Array.isArray(r)?[u].concat((0,n.Z)(r)):"function"===typeof r?function(){var e=r.apply(void 0,arguments);return(0,i.P)(e)?(0,o.Z)({},u,e):u}:(0,o.Z)({},u,r),(0,o.Z)({},p,{sx:t})}},8040:function(){},9629:function(){}}]);
//# sourceMappingURL=915.089e9c67.chunk.js.map