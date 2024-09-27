"use strict";(self.webpackChunkvideoteca_frontend=self.webpackChunkvideoteca_frontend||[]).push([[154],{7411:function(e,t,n){var r=n(4165),a=n(5861),o=n(3263),i=n(9778),s="http://localhost:8000/api/",c=o.Z.create({baseURL:s,timeout:5e3,headers:{Authorization:localStorage.getItem("access_token")?"JWT "+localStorage.getItem("access_token"):null,"Content-Type":"multipart/form-data",accept:"application/json"}});c.interceptors.response.use((function(e){return e}),function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,o,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.config,"undefined"!==typeof t.response){e.next=4;break}return console.warn("A server/network error occurred. Looks like CORS might be the problem. Sorry about this - we will get it fixed shortly."),e.abrupt("return",Promise.reject(t));case 4:if(401!==t.response.status||n.url!==s+"api/token/refresh/"){e.next=7;break}return window.location.href="/loginuser/",e.abrupt("return",Promise.reject(t));case 7:if("token_not_valid"!==t.response.data.code||401!==t.response.status||"Unauthorized"!==t.response.statusText){e.next=26;break}if(!(a=localStorage.getItem("refresh_token"))){e.next=24;break}if(o=JSON.parse(i.lW.from(a.split(".")[1],"base64").toString()),l=Math.ceil(Date.now()/1e3),console.log(o.exp),!(o.exp>l)){e.next=17;break}return e.abrupt("return",c.post("api/token/refresh/",{refresh:a}).then((function(e){return localStorage.setItem("access_token",e.data.access_token),localStorage.setItem("refresh_token",e.data.refresh_token),c.defaults.headers.Authorization="JWT "+e.data.access_token,n.headers.Authorization="JWT "+e.data.access_token,c(n)})).catch((function(e){console.log(e)})));case 17:console.log("Refresh token is expired",o.exp,l),window.localStorage.removeItem("access_token"),window.localStorage.removeItem("refresh_token"),window.localStorage.removeItem("user"),window.location.href="/loginuser/";case 22:e.next=26;break;case 24:console.log("Refresh token not available."),window.location.href="/loginuser/";case 26:return 401===t.response.status&&(window.location.href="/loginuser/"),e.abrupt("return",Promise.reject(t));case 28:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.Z=c},4059:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var r=n(9439),a=n(2791),o=n(4165),i=n(5861),s=n(7689),c=(n(8040),n(1174),n(3712)),l=n(8596),u=n(8302),p=n(3767),d=n(6151),h=n(2680),f=n(6542),x=n(4942),m=n(1413),g=n(5987),y=n(5342),v=n(3360),b=n(4437),Z=(n(9629),n(184)),j=["handleClose","show","serie_id","currentItem","setFormData","newData"],w=(0,l.Z)((function(e){return{containerModal:{border:"2px solid #ccc",borderRadius:50,boxShadow:"4px 4px 4px 0px #5a28e550"},containerForm:{height:"3rem",background:"#BFF",border:"2px solid #ccc",borderRadius:50,boxShadow:"4px 4px 4px 0px #5a28e550"},"@media (max-width: 720px)":{root:{display:"flex"}}}})),k=function(e){var t=e.handleClose,n=e.show,s=e.serie_id,c=(e.currentItem,e.setFormData),l=e.newData,u=(0,g.Z)(e,j),p=(0,a.useState)(null),d=(0,r.Z)(p,2),h=d[0],k=d[1],S=function(e){var t=e.target.name;c((0,m.Z)((0,m.Z)({},l),{},(0,x.Z)({},t,e.target.value)))},C=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){var n,r,a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=new FormData,console.log(h),e.prev=3,s){e.next=13;break}return n.append("serie",l.serie),n.append("description",l.description),n.append("quantity",l.quantity),h&&n.append("featured_image",h),e.next=11,f.Ed(n);case 11:e.next=19;break;case 13:return n.append("serie",l.serie),n.append("description",l.description),n.append("quantity",l.quantity),h&&n.append("featured_image",h),e.next=19,f.Zg(s,n);case 19:return e.next=21,f._G();case 21:return r=e.sent,e.next=24,r;case 24:a=e.sent,console.log(a),console.log(n),u.setSeries(a),e.next=33;break;case 30:e.prev=30,e.t0=e.catch(3),console.log(e.t0);case 33:case"end":return e.stop()}}),e,null,[[3,30]])})));return function(t){return e.apply(this,arguments)}}(),_=w();return(0,Z.jsxs)(y.Z,{show:n,onHide:t,"aria-labelledby":"example-custom-modal-styling-title",contentClassName:_.cloud,centered:!0,children:[(0,Z.jsx)(y.Z.Header,{closeButton:!0,children:(0,Z.jsx)(y.Z.Title,{id:"tituloModal",children:(0,Z.jsx)("h2",{children:s?"Editar Registro":"Crear Registro"})})}),(0,Z.jsx)(y.Z.Body,{id:"bodyModal",children:(0,Z.jsxs)(b.Z,{onSubmit:C,children:[(0,Z.jsxs)(b.Z.Group,{className:"mb-2 ",controlId:"exampleForm.ControlInput1",children:[(0,Z.jsx)(b.Z.Control,{type:"text",name:"serie",placeholder:"Nombre de la serie",value:l.serie||"",onChange:S}),(0,Z.jsx)("br",{}),(0,Z.jsx)(b.Z.Control,{as:"textarea",rows:3,name:"description",placeholder:"Descripci\xf3n de la serie",value:l.description||"",onChange:S}),(0,Z.jsx)("br",{}),(0,Z.jsx)(b.Z.Control,{type:"number",name:"quantity",placeholder:"Cantidad de videos",value:l.quantity||null,onChange:S}),(0,Z.jsx)("input",{type:"file",className:"form-control mt-3",name:"imgSerie",onChange:function(e){"imgSerie"===e.target.name&&k(e.target.files[0])}})]}),(0,Z.jsxs)(y.Z.Footer,{children:[(0,Z.jsx)(v.Z,{variant:"secondary",onClick:t,children:"Close"}),(0,Z.jsx)(v.Z,{variant:"primary",type:"submit",onClick:t,children:s?"Guardar Cambios":"Crear"})]})]})})]})},S=n(2918),C=n(7087),_=(n(9713),function(e){var t=e.series,n=(0,s.s0)(),x=(0,S.d)(!1),m=(0,r.Z)(x,3),g=m[0],y=m[1],v=m[2],b=(0,a.useState)(""),j=(0,r.Z)(b,2),w=j[0],_=j[1],I=(0,a.useState)({}),N=(0,r.Z)(I,2),D=N[0],A=N[1],P=(0,a.useState)(t),R=(0,r.Z)(P,2),B=R[0],T=R[1],q=(0,a.useState)({serie:"",description:"",quantity:0}),E=(0,r.Z)(q,2),z=E[0],F=E[1],L=(0,a.useContext)(h.Z).user,M=(0,l.Z)((function(e){return{paper:{marginTop:e.spacing(0),marginBottom:e.spacing(10),display:"flex",flexDirection:"column",alignItems:"center"},title1:{textAlign:"center",color:"white"}}})),W=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_(t.id),A(t),F({serie:t.serie,description:t.description,quantity:t.quantity}),y(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_(null),A({}),F({serie:"",description:"",quantity:0}),y(!0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){var t,n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f._G();case 3:return t=e.sent,e.next=6,t;case 6:n=e.sent,console.log(n),T(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();(0,a.useEffect)((function(){L?(G(),_(null)):n("/loginuser")}),[]);var J=M();return L?(0,Z.jsxs)(c.Z,{children:[(0,Z.jsx)("div",{className:J.paper,children:(0,Z.jsx)(u.Z,{component:"h1",variant:"h3",children:"Series"})}),(0,Z.jsx)(p.Z,{alignItems:"center",children:(0,Z.jsx)(d.Z,{variant:"contained",color:"primary",type:"submit",onClick:function(){return O()},children:"Registrar Series"})}),(0,Z.jsx)("br",{}),(0,Z.jsx)("br",{})," ",(0,Z.jsx)("br",{}),(0,Z.jsx)("div",{children:(0,Z.jsx)("section",{className:"content",children:(0,Z.jsx)("div",{className:"table-responsive table-condensed table-sm tabla",children:(0,Z.jsxs)("table",{className:"table table-hover",id:"dataTableData",name:"dataTableData",style:{fontSize:11,textAlign:"center"},children:[(0,Z.jsx)("thead",{className:J.title1,children:(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("th",{style:{display:"none"},children:"Id"}),(0,Z.jsx)("th",{children:"Codigo"}),(0,Z.jsx)("th",{children:"Serie"}),(0,Z.jsx)("th",{children:"Descripci\xf3n"}),(0,Z.jsx)("th",{children:"Cantidad de videos"}),(0,Z.jsx)("th",{children:"Imagen"}),(0,Z.jsx)("th",{})]})}),(0,Z.jsx)("tbody",{style:{backgroundColor:"white"},children:0===B.length?(0,Z.jsx)("tr",{children:(0,Z.jsx)("td",{colSpan:11,children:"No hay datos"})}):B.map((function(e,t){return(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{style:{display:"none"},children:e.id}),(0,Z.jsx)("td",{children:e.id}),(0,Z.jsx)("td",{children:e.serie}),(0,Z.jsx)("td",{children:e.description}),(0,Z.jsx)("td",{children:e.quantity}),(0,Z.jsx)("td",{children:(0,Z.jsx)(C.LazyLoadImage,{effect:"blur",src:"http://localhost:8000"+e.featured_image,alt:"",className:"img-fluid img-thumbnail"})}),(0,Z.jsx)("td",{children:(0,Z.jsx)("button",{className:"btn btn-warning btn-sm float-right",type:"submit",onClick:function(){return W(e)},children:"editar"})})]},t)}))})]})})})}),(0,Z.jsx)(k,{handleClose:v,show:g,serie_id:w,currentItem:D,setSeries:T,setFormData:F,newData:z})]}):(0,Z.jsx)("p",{style:{fontSize:"25px"},children:"Inicia sesi\xf3n para ver todos los videos!"})}),I=n(2516);var N=function(){var e=(0,I.Z)(_),t=(0,a.useContext)(h.Z).user,n=(0,a.useState)({loading:!0,series:null}),o=(0,r.Z)(n,2),i=o[0],s=o[1];return(0,a.useEffect)((function(){f._G().then((function(e){s({loading:!1,series:e})}))}),[s]),t?(0,Z.jsx)(c.Z,{children:(0,Z.jsx)("div",{className:"App",children:(0,Z.jsx)(e,{isLoading:i.loading,series:i.series})})}):(0,Z.jsx)("p",{style:{fontSize:"25px"},children:"Inicia sesi\xf3n para ver todos los videos!"})}},2516:function(e,t,n){var r=n(1413),a=n(5987),o=(n(2791),n(184)),i=["isLoading"];t.Z=function(e){return function(t){var n=t.isLoading,s=(0,a.Z)(t,i);return n?(0,o.jsxs)("div",{style:{fontSize:"25px",display:"flex",justifyContent:"center",textAlign:"center",flexDirection:"column",alignItems:"center"},children:[(0,o.jsx)("div",{className:"spinner-grow text-light",role:"status",children:(0,o.jsx)("span",{className:"sr-only"})}),"Espera por favor"]}):(0,o.jsx)(e,(0,r.Z)({},s))}}},2918:function(e,t,n){n.d(t,{d:function(){return o}});var r=n(9439),a=n(2791),o=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=(0,a.useState)(e),n=(0,r.Z)(t,2),o=n[0],i=n[1],s=function(){return i(!0)},c=function(){return i(!1)};return[o,s,c]}},6542:function(e,t,n){n.d(t,{Ed:function(){return c},Zg:function(){return u},_G:function(){return s},dS:function(){return l}});var r=n(4165),a=n(5861),o=n(7411),i="http://localhost:8000/api/series/",s=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get(i);case 2:if(200!==(t=e.sent).status){e.next=7;break}return e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.post(i,t);case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.next=6,n.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(i).concat(t));case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.next=6,n.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.patch(i+t+"/",n);case 2:if(200!==(a=e.sent).status){e.next=5;break}return e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},8302:function(e,t,n){var r=n(7462),a=n(5987),o=n(2791),i=n(8182),s=n(8317),c=n(1122),l={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},u=o.forwardRef((function(e,t){var n=e.align,s=void 0===n?"inherit":n,u=e.classes,p=e.className,d=e.color,h=void 0===d?"initial":d,f=e.component,x=e.display,m=void 0===x?"initial":x,g=e.gutterBottom,y=void 0!==g&&g,v=e.noWrap,b=void 0!==v&&v,Z=e.paragraph,j=void 0!==Z&&Z,w=e.variant,k=void 0===w?"body1":w,S=e.variantMapping,C=void 0===S?l:S,_=(0,a.Z)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),I=f||(j?"p":C[k]||l[k])||"span";return o.createElement(I,(0,r.Z)({className:(0,i.Z)(u.root,p,"inherit"!==k&&u[k],"initial"!==h&&u["color".concat((0,c.Z)(h))],b&&u.noWrap,y&&u.gutterBottom,j&&u.paragraph,"inherit"!==s&&u["align".concat((0,c.Z)(s))],"initial"!==m&&u["display".concat((0,c.Z)(m))]),ref:t},_))}));t.Z=(0,s.Z)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(u)},3767:function(e,t,n){var r=n(4942),a=n(3366),o=n(7462),i=n(2791),s=n(1184),c=n(5682),l=n(8519),u=n(2466),p=n(6934),d=n(1402),h=n(184),f=["component","direction","spacing","divider","children"];function x(e,t){var n=i.Children.toArray(e).filter(Boolean);return n.reduce((function(e,r,a){return e.push(r),a<n.length-1&&e.push(i.cloneElement(t,{key:"separator-".concat(a)})),e}),[])}var m=(0,p.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return[t.root]}})((function(e){var t=e.ownerState,n=e.theme,a=(0,o.Z)({display:"flex",flexDirection:"column"},(0,s.k9)({theme:n},(0,s.P$)({values:t.direction,breakpoints:n.breakpoints.values}),(function(e){return{flexDirection:e}})));if(t.spacing){var i=(0,c.hB)(n),l=Object.keys(n.breakpoints.values).reduce((function(e,n){return("object"===typeof t.spacing&&null!=t.spacing[n]||"object"===typeof t.direction&&null!=t.direction[n])&&(e[n]=!0),e}),{}),p=(0,s.P$)({values:t.direction,base:l}),d=(0,s.P$)({values:t.spacing,base:l});"object"===typeof p&&Object.keys(p).forEach((function(e,t,n){if(!p[e]){var r=t>0?p[n[t-1]]:"column";p[e]=r}}));a=(0,u.Z)(a,(0,s.k9)({theme:n},d,(function(e,n){return{"& > :not(style) + :not(style)":(0,r.Z)({margin:0},"margin".concat((a=n?p[n]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[a])),(0,c.NA)(i,e))};var a})))}return a=(0,s.dt)(n.breakpoints,a)})),g=i.forwardRef((function(e,t){var n=(0,d.Z)({props:e,name:"MuiStack"}),r=(0,l.Z)(n),i=r.component,s=void 0===i?"div":i,c=r.direction,u=void 0===c?"column":c,p=r.spacing,g=void 0===p?0:p,y=r.divider,v=r.children,b=(0,a.Z)(r,f),Z={direction:u,spacing:g};return(0,h.jsx)(m,(0,o.Z)({as:s,ownerState:Z,ref:t},b,{children:y?x(v,y):v}))}));t.Z=g},8519:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(3433),a=n(7462),o=n(3366),i=n(2466),s=n(7416),c=["sx"];function l(e){var t,n=e.sx,l=function(e){var t,n,r={systemProps:{},otherProps:{}},a=null!=(t=null==e||null==(n=e.theme)?void 0:n.unstable_sxConfig)?t:s.Z;return Object.keys(e).forEach((function(t){a[t]?r.systemProps[t]=e[t]:r.otherProps[t]=e[t]})),r}((0,o.Z)(e,c)),u=l.systemProps,p=l.otherProps;return t=Array.isArray(n)?[u].concat((0,r.Z)(n)):"function"===typeof n?function(){var e=n.apply(void 0,arguments);return(0,i.P)(e)?(0,a.Z)({},u,e):u}:(0,a.Z)({},u,n),(0,a.Z)({},p,{sx:t})}},8040:function(){},9629:function(){}}]);
//# sourceMappingURL=154.5190c887.chunk.js.map