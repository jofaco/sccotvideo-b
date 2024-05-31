"use strict";(self.webpackChunkvideoteca_frontend=self.webpackChunkvideoteca_frontend||[]).push([[154],{7411:function(e,t,n){var r=n(4165),a=n(5861),o=n(3263),i=n(9778),s="https://sccotview.com/api/",c=o.Z.create({baseURL:s,timeout:5e3,headers:{Authorization:localStorage.getItem("access_token")?"JWT "+localStorage.getItem("access_token"):null,"Content-Type":"multipart/form-data",accept:"application/json"}});c.interceptors.response.use((function(e){return e}),function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,o,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.config,"undefined"!==typeof t.response){e.next=4;break}return console.warn("A server/network error occurred. Looks like CORS might be the problem. Sorry about this - we will get it fixed shortly."),e.abrupt("return",Promise.reject(t));case 4:if(401!==t.response.status||n.url!==s+"api/token/refresh/"){e.next=7;break}return window.location.href="/loginuser/",e.abrupt("return",Promise.reject(t));case 7:if("token_not_valid"!==t.response.data.code||401!==t.response.status||"Unauthorized"!==t.response.statusText){e.next=26;break}if(!(a=localStorage.getItem("refresh_token"))){e.next=24;break}if(o=JSON.parse(i.lW.from(a.split(".")[1],"base64").toString()),l=Math.ceil(Date.now()/1e3),console.log(o.exp),!(o.exp>l)){e.next=17;break}return e.abrupt("return",c.post("api/token/refresh/",{refresh:a}).then((function(e){return localStorage.setItem("access_token",e.data.access_token),localStorage.setItem("refresh_token",e.data.refresh_token),c.defaults.headers.Authorization="JWT "+e.data.access_token,n.headers.Authorization="JWT "+e.data.access_token,c(n)})).catch((function(e){console.log(e)})));case 17:console.log("Refresh token is expired",o.exp,l),window.localStorage.removeItem("access_token"),window.localStorage.removeItem("refresh_token"),window.localStorage.removeItem("user"),window.location.href="/loginuser/";case 22:e.next=26;break;case 24:console.log("Refresh token not available."),window.location.href="/loginuser/";case 26:return 401===t.response.status&&(window.location.href="/loginuser/"),e.abrupt("return",Promise.reject(t));case 28:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.Z=c},4059:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var r=n(9439),a=n(2791),o=n(4165),i=n(5861),s=n(7689),c=(n(8040),n(1174),n(3712)),l=n(8596),p=n(8302),u=n(3767),d=n(6151),h=n(2680),g=n(6542),f=n(4942),k=n(1413),x=n(5987),m=n(5342),S=n(3360),y=n(4437),A=(n(9629),n(184)),v=["handleClose","show","serie_id","currentItem","setFormData","newData"],b=(0,l.Z)((function(e){return{containerModal:{border:"2px solid #ccc",borderRadius:50,boxShadow:"4px 4px 4px 0px #5a28e550"},containerForm:{height:"3rem",background:"#BFF",border:"2px solid #ccc",borderRadius:50,boxShadow:"4px 4px 4px 0px #5a28e550"},"@media (max-width: 720px)":{root:{display:"flex"}}}})),Z=function(e){var t=e.handleClose,n=e.show,s=e.serie_id,c=(e.currentItem,e.setFormData),l=e.newData,p=(0,x.Z)(e,v),u=(0,a.useState)(null),d=(0,r.Z)(u,2),h=d[0],Z=d[1],E=function(e){var t=e.target.name;c((0,k.Z)((0,k.Z)({},l),{},(0,f.Z)({},t,e.target.value)))},I=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){var n,r,a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=new FormData,console.log(h),e.prev=3,s){e.next=13;break}return n.append("serie",l.serie),n.append("description",l.description),n.append("quantity",l.quantity),h&&n.append("featured_image",h),e.next=11,g.Ed(n);case 11:e.next=19;break;case 13:return n.append("serie",l.serie),n.append("description",l.description),n.append("quantity",l.quantity),h&&n.append("featured_image",h),e.next=19,g.Zg(s,n);case 19:return e.next=21,g._G();case 21:return r=e.sent,e.next=24,r;case 24:a=e.sent,console.log(a),console.log(n),p.setSeries(a),e.next=33;break;case 30:e.prev=30,e.t0=e.catch(3),console.log(e.t0);case 33:case"end":return e.stop()}}),e,null,[[3,30]])})));return function(t){return e.apply(this,arguments)}}(),w=b();return(0,A.jsxs)(m.Z,{show:n,onHide:t,"aria-labelledby":"example-custom-modal-styling-title",contentClassName:w.cloud,centered:!0,children:[(0,A.jsx)(m.Z.Header,{closeButton:!0,children:(0,A.jsx)(m.Z.Title,{id:"tituloModal",children:(0,A.jsx)("h2",{children:s?"Editar Registro":"Crear Registro"})})}),(0,A.jsx)(m.Z.Body,{id:"bodyModal",children:(0,A.jsxs)(y.Z,{onSubmit:I,children:[(0,A.jsxs)(y.Z.Group,{className:"mb-2 ",controlId:"exampleForm.ControlInput1",children:[(0,A.jsx)(y.Z.Control,{type:"text",name:"serie",placeholder:"Nombre de la serie",value:l.serie||"",onChange:E}),(0,A.jsx)("br",{}),(0,A.jsx)(y.Z.Control,{as:"textarea",rows:3,name:"description",placeholder:"Descripci\xf3n de la serie",value:l.description||"",onChange:E}),(0,A.jsx)("br",{}),(0,A.jsx)(y.Z.Control,{type:"number",name:"quantity",placeholder:"Cantidad de videos",value:l.quantity||null,onChange:E}),(0,A.jsx)("input",{type:"file",className:"form-control mt-3",name:"imgSerie",onChange:function(e){"imgSerie"===e.target.name&&Z(e.target.files[0])}})]}),(0,A.jsxs)(m.Z.Footer,{children:[(0,A.jsx)(S.Z,{variant:"secondary",onClick:t,children:"Close"}),(0,A.jsx)(S.Z,{variant:"primary",type:"submit",onClick:t,children:s?"Guardar Cambios":"Crear"})]})]})})]})},E=n(2918),I=n(7087),w=(n(9713),n(4944),function(e){var t=e.series,n=(0,s.s0)(),f=(0,E.d)(!1),k=(0,r.Z)(f,3),x=k[0],m=k[1],S=k[2],y=(0,a.useState)(""),v=(0,r.Z)(y,2),b=v[0],w=v[1],j=(0,a.useState)({}),C=(0,r.Z)(j,2),N=C[0],R=C[1],B=(0,a.useState)(t),T=(0,r.Z)(B,2),J=T[0],Q=T[1],D=(0,a.useState)({serie:"",description:"",quantity:0}),K=(0,r.Z)(D,2),M=K[0],L=K[1],_=(0,a.useContext)(h.Z).user,q=(0,l.Z)((function(e){return{paper:{marginTop:e.spacing(0),marginBottom:e.spacing(10),display:"flex",flexDirection:"column",alignItems:"center"},title1:{textAlign:"center",color:"white"}}})),z=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w(t.id),R(t),L({serie:t.serie,description:t.description,quantity:t.quantity}),m(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w(null),R({}),L({serie:"",description:"",quantity:0}),m(!0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){var t,n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g._G();case 3:return t=e.sent,e.next=6,t;case 6:n=e.sent,console.log(n),Q(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();(0,a.useEffect)((function(){_?(F(),w(null)):n("/loginuser")}),[]);var G=q();return _?(0,A.jsxs)(c.Z,{children:[(0,A.jsx)("div",{className:G.paper,children:(0,A.jsx)(p.Z,{component:"h1",variant:"h3",children:"Series"})}),(0,A.jsx)(u.Z,{alignItems:"center",children:(0,A.jsx)(d.Z,{variant:"contained",color:"success",type:"submit",onClick:function(){return P()},children:"Registrar Series"})}),(0,A.jsx)("br",{}),(0,A.jsx)("br",{})," ",(0,A.jsx)("br",{}),(0,A.jsx)("div",{children:(0,A.jsx)("section",{className:"content",children:(0,A.jsx)("div",{className:"table-responsive table-condensed table-sm tabla",children:(0,A.jsxs)("table",{className:"table table-hover",id:"dataTableData",name:"dataTableData",style:{fontSize:11,textAlign:"center"},children:[(0,A.jsx)("thead",{className:G.title1,children:(0,A.jsxs)("tr",{children:[(0,A.jsx)("th",{style:{display:"none"},children:"Id"}),(0,A.jsx)("th",{children:"Codigo"}),(0,A.jsx)("th",{children:"Serie"}),(0,A.jsx)("th",{children:"Descripci\xf3n"}),(0,A.jsx)("th",{children:"Cantidad de videos"}),(0,A.jsx)("th",{children:"Imagen"}),(0,A.jsx)("th",{})]})}),(0,A.jsx)("tbody",{style:{backgroundColor:"white"},children:0===J.length?(0,A.jsx)("tr",{children:(0,A.jsx)("td",{colSpan:11,children:"No hay datos"})}):J.map((function(e,t){return(0,A.jsxs)("tr",{children:[(0,A.jsx)("td",{style:{display:"none"},children:e.id}),(0,A.jsx)("td",{children:e.id}),(0,A.jsx)("td",{children:e.serie}),(0,A.jsx)("td",{children:e.description}),(0,A.jsx)("td",{children:e.quantity}),(0,A.jsx)("td",{children:(0,A.jsx)(I.LazyLoadImage,{effect:"blur",src:"https://sccotview.com"+e.featured_image,alt:"",className:"img-fluid img-thumbnail"})}),(0,A.jsx)("td",{children:(0,A.jsx)("button",{className:"btn btn-warning btn-sm float-right",type:"submit",onClick:function(){return z(e)},children:"editar"})})]},t)}))})]})})})}),(0,A.jsx)(Z,{handleClose:S,show:x,serie_id:b,currentItem:N,setSeries:Q,setFormData:L,newData:M})]}):(0,A.jsx)("p",{style:{fontSize:"25px"},children:"Inicia sesi\xf3n para ver todos los videos!"})}),j=n(2516);var C=function(){var e=(0,j.Z)(w),t=(0,a.useContext)(h.Z).user,n=(0,a.useState)({loading:!0,series:null}),o=(0,r.Z)(n,2),i=o[0],s=o[1];return(0,a.useEffect)((function(){g._G().then((function(e){s({loading:!1,series:e})}))}),[s]),t?(0,A.jsx)(c.Z,{children:(0,A.jsx)("div",{className:"App",children:(0,A.jsx)(e,{isLoading:i.loading,series:i.series})})}):(0,A.jsx)("p",{style:{fontSize:"25px"},children:"Inicia sesi\xf3n para ver todos los videos!"})}},2516:function(e,t,n){var r=n(1413),a=n(5987),o=(n(2791),n(184)),i=["isLoading"];t.Z=function(e){return function(t){var n=t.isLoading,s=(0,a.Z)(t,i);return n?(0,o.jsxs)("p",{style:{fontSize:"25px",display:"flex",justifyContent:"center",textAlign:"center",flexDirection:"column",alignItems:"center"},children:[(0,o.jsx)("div",{className:"spinner-grow text-light",role:"status",children:(0,o.jsx)("span",{className:"sr-only"})}),"Espera por favor"]}):(0,o.jsx)(e,(0,r.Z)({},s))}}},2918:function(e,t,n){n.d(t,{d:function(){return o}});var r=n(9439),a=n(2791),o=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=(0,a.useState)(e),n=(0,r.Z)(t,2),o=n[0],i=n[1],s=function(){return i(!0)},c=function(){return i(!1)};return[o,s,c]}},6542:function(e,t,n){n.d(t,{Ed:function(){return c},Zg:function(){return p},_G:function(){return s},dS:function(){return l}});var r=n(4165),a=n(5861),o=n(7411),i="https://sccotview.com/api/series/",s=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get(i);case 2:if(200!==(t=e.sent).status){e.next=7;break}return e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.post(i,t);case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.next=6,n.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(i).concat(t));case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.next=6,n.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.patch(i+t+"/",n);case 2:if(200!==(a=e.sent).status){e.next=5;break}return e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},8302:function(e,t,n){var r=n(7462),a=n(5987),o=n(2791),i=n(8182),s=n(8317),c=n(1122),l={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},p=o.forwardRef((function(e,t){var n=e.align,s=void 0===n?"inherit":n,p=e.classes,u=e.className,d=e.color,h=void 0===d?"initial":d,g=e.component,f=e.display,k=void 0===f?"initial":f,x=e.gutterBottom,m=void 0!==x&&x,S=e.noWrap,y=void 0!==S&&S,A=e.paragraph,v=void 0!==A&&A,b=e.variant,Z=void 0===b?"body1":b,E=e.variantMapping,I=void 0===E?l:E,w=(0,a.Z)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),j=g||(v?"p":I[Z]||l[Z])||"span";return o.createElement(j,(0,r.Z)({className:(0,i.Z)(p.root,u,"inherit"!==Z&&p[Z],"initial"!==h&&p["color".concat((0,c.Z)(h))],y&&p.noWrap,m&&p.gutterBottom,v&&p.paragraph,"inherit"!==s&&p["align".concat((0,c.Z)(s))],"initial"!==k&&p["display".concat((0,c.Z)(k))]),ref:t},w))}));t.Z=(0,s.Z)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(p)},3767:function(e,t,n){var r=n(4942),a=n(3366),o=n(7462),i=n(2791),s=n(1184),c=n(5682),l=n(8519),p=n(2466),u=n(7630),d=n(1046),h=n(184),g=["component","direction","spacing","divider","children"];function f(e,t){var n=i.Children.toArray(e).filter(Boolean);return n.reduce((function(e,r,a){return e.push(r),a<n.length-1&&e.push(i.cloneElement(t,{key:"separator-".concat(a)})),e}),[])}var k=(0,u.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return[t.root]}})((function(e){var t=e.ownerState,n=e.theme,a=(0,o.Z)({display:"flex",flexDirection:"column"},(0,s.k9)({theme:n},(0,s.P$)({values:t.direction,breakpoints:n.breakpoints.values}),(function(e){return{flexDirection:e}})));if(t.spacing){var i=(0,c.hB)(n),l=Object.keys(n.breakpoints.values).reduce((function(e,n){return("object"===typeof t.spacing&&null!=t.spacing[n]||"object"===typeof t.direction&&null!=t.direction[n])&&(e[n]=!0),e}),{}),u=(0,s.P$)({values:t.direction,base:l}),d=(0,s.P$)({values:t.spacing,base:l});"object"===typeof u&&Object.keys(u).forEach((function(e,t,n){if(!u[e]){var r=t>0?u[n[t-1]]:"column";u[e]=r}}));a=(0,p.Z)(a,(0,s.k9)({theme:n},d,(function(e,n){return{"& > :not(style) + :not(style)":(0,r.Z)({margin:0},"margin".concat((a=n?u[n]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[a])),(0,c.NA)(i,e))};var a})))}return a=(0,s.dt)(n.breakpoints,a)})),x=i.forwardRef((function(e,t){var n=(0,d.Z)({props:e,name:"MuiStack"}),r=(0,l.Z)(n),i=r.component,s=void 0===i?"div":i,c=r.direction,p=void 0===c?"column":c,u=r.spacing,x=void 0===u?0:u,m=r.divider,S=r.children,y=(0,a.Z)(r,g),A={direction:p,spacing:x};return(0,h.jsx)(k,(0,o.Z)({as:s,ownerState:A,ref:t},y,{children:m?f(S,m):S}))}));t.Z=x},8040:function(){},9629:function(){},4944:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASkAAADYCAYAAAC3IBWKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALeSURBVHhe7dSxDcAwAMMwp///3GboERpIwPAHOtveO4Ck53+AJJEC0kQKSBMpIE2kgDSRAtJECkgTKSBNpIA0kQLSRApIEykgTaSANJEC0kQKSBMpIE2kgDSRAtJECkgTKSBNpIA0kQLSRApIEykgTaSANJEC0kQKSBMpIE2kgDSRAtJECkgTKSBNpIA0kQLSRApIEykgTaSANJEC0kQKSBMpIE2kgDSRAtJECkgTKSBNpIA0kQLSRApIEykgTaSANJEC0kQKSBMpIE2kgDSRAtJECkgTKSBNpIA0kQLSRApIEykgTaSANJEC0kQKSBMpIE2kgDSRAtJECkgTKSBNpIA0kQLSRApIEykgTaSANJEC0kQKSBMpIE2kgDSRAtJECkgTKSBNpIA0kQLSRApIEykgTaSANJEC0kQKSBMpIE2kgDSRAtJECkgTKSBNpIA0kQLSRApIEykgTaSANJEC0kQKSBMpIE2kgDSRAtJECkgTKSBNpIA0kQLSRApIEykgTaSANJEC0kQKSBMpIE2kgDSRAtJECkgTKSBNpIA0kQLSRApIEykgTaSANJEC0kQKSBMpIE2kgDSRAtJECkgTKSBNpIA0kQLSRApIEykgTaSANJEC0kQKSBMpIE2kgDSRAtJECkgTKSBNpIA0kQLSRApIEykgTaSANJEC0kQKSBMpIE2kgDSRAtJECkgTKSBNpIA0kQLSRApIEykgTaSANJEC0kQKSBMpIE2kgDSRAtJECkgTKSBNpIA0kQLSRApIEykgTaSANJEC0kQKSBMpIE2kgDSRAtJECkgTKSBNpIA0kQLSRApIEykgTaSANJEC0kQKSBMpIE2kgDSRAtJECkgTKSBNpIA0kQLSRApIEykgTaSANJEC0kQKSBMpIE2kgDSRAtJECkgTKSBNpIA0kQLSRApIEykgTaSANJEC0kQKSBMpIE2kgDSRAtJECkgTKSBNpIA0kQLSRAoI2z4XqgKvyA4ungAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=154.4eb5fbfe.chunk.js.map