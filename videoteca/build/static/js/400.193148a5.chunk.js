"use strict";(self.webpackChunkvideoteca_frontend=self.webpackChunkvideoteca_frontend||[]).push([[400],{7411:function(e,t,r){var n=r(4165),a=r(5861),o=r(3263),i=r(9778),s="https://sccotview.com/api/",c=o.Z.create({baseURL:s,timeout:5e3,headers:{Authorization:localStorage.getItem("access_token")?"JWT "+localStorage.getItem("access_token"):null,"Content-Type":"multipart/form-data",accept:"application/json"}});c.interceptors.response.use((function(e){return e}),function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,o,l;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.config,"undefined"!==typeof t.response){e.next=4;break}return console.warn("A server/network error occurred. Looks like CORS might be the problem. Sorry about this - we will get it fixed shortly."),e.abrupt("return",Promise.reject(t));case 4:if(401!==t.response.status||r.url!==s+"api/token/refresh/"){e.next=7;break}return window.location.href="/loginuser/",e.abrupt("return",Promise.reject(t));case 7:if("token_not_valid"!==t.response.data.code||401!==t.response.status||"Unauthorized"!==t.response.statusText){e.next=26;break}if(!(a=localStorage.getItem("refresh_token"))){e.next=24;break}if(o=JSON.parse(i.lW.from(a.split(".")[1],"base64").toString()),l=Math.ceil(Date.now()/1e3),console.log(o.exp),!(o.exp>l)){e.next=17;break}return e.abrupt("return",c.post("api/token/refresh/",{refresh:a}).then((function(e){return localStorage.setItem("access_token",e.data.access_token),localStorage.setItem("refresh_token",e.data.refresh_token),c.defaults.headers.Authorization="JWT "+e.data.access_token,r.headers.Authorization="JWT "+e.data.access_token,c(r)})).catch((function(e){console.log(e)})));case 17:console.log("Refresh token is expired",o.exp,l),window.localStorage.removeItem("access_token"),window.localStorage.removeItem("refresh_token"),window.localStorage.removeItem("user"),window.location.href="/loginuser/";case 22:e.next=26;break;case 24:console.log("Refresh token not available."),window.location.href="/loginuser/";case 26:return 401===t.response.status&&(window.location.href="/loginuser/"),e.abrupt("return",Promise.reject(t));case 28:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.Z=c},8400:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});var n=r(9439),a=r(2791),o=r(4165),i=r(5861),s=r(7689),c=(r(8040),r(1174),r(3712)),l=r(8596),u=r(8302),p=r(6314),d=r(4294),h=r(2680),f=r(5764),x=r(4942),g=r(1413),m=r(5987),y=r(5342),v=r(3360),b=r(4437),Z=(r(9629),r(184)),w=["handleClose","show","category_id","currentItem","setFormData","newData"],j=(0,l.Z)((function(e){return{containerModal:{border:"2px solid #ccc",borderRadius:50,boxShadow:"4px 4px 4px 0px #5a28e550"},containerForm:{height:"3rem",background:"#BFF",border:"2px solid #ccc",borderRadius:50,boxShadow:"4px 4px 4px 0px #5a28e550"},"@media (max-width: 720px)":{root:{display:"flex"}}}})),k=function(e){var t=e.handleClose,r=e.show,n=e.category_id,a=(e.currentItem,e.setFormData),s=e.newData,c=(0,m.Z)(e,w),l=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){var r,a,i;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=new FormData,e.prev=2,n){e.next=9;break}return r.append("categoria",s.categoria),e.next=7,f.CX(r);case 7:e.next=12;break;case 9:return r.append("categoria",s.categoria),e.next=12,f.yr(n,r);case 12:return e.next=14,f.wb();case 14:return a=e.sent,e.next=17,a;case 17:i=e.sent,c.setCategories(i),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(2),console.log(e.t0);case 24:case"end":return e.stop()}}),e,null,[[2,21]])})));return function(t){return e.apply(this,arguments)}}(),u=j();return(0,Z.jsxs)(y.Z,{show:r,onHide:t,"aria-labelledby":"example-custom-modal-styling-title",contentClassName:u.cloud,centered:!0,children:[(0,Z.jsx)(y.Z.Header,{closeButton:!0,children:(0,Z.jsx)(y.Z.Title,{id:"tituloModal",children:(0,Z.jsx)("h2",{children:n?"Editar Registro":"Crear Registro"})})}),(0,Z.jsx)(y.Z.Body,{id:"bodyModal",children:(0,Z.jsxs)(b.Z,{onSubmit:l,children:[(0,Z.jsx)(b.Z.Group,{className:"mb-2 ",controlId:"exampleForm.ControlInput1",children:(0,Z.jsx)(b.Z.Control,{type:"text",className:u.containerForm,rows:1,name:"categoria",value:s.categoria||"",onChange:function(e){var t=e.target.name;a((0,g.Z)((0,g.Z)({},s),{},(0,x.Z)({},t,e.target.value)))}})}),(0,Z.jsxs)(y.Z.Footer,{children:[(0,Z.jsx)(v.Z,{variant:"secondary",onClick:t,children:"Close"}),(0,Z.jsx)(v.Z,{variant:"primary",type:"submit",onClick:t,children:n?"Guardar Cambios":"Crear"})]})]})})]})},C=r(2918),S=function(e){var t=e.categories,r=(0,s.s0)(),x=(0,C.d)(!1),g=(0,n.Z)(x,3),m=g[0],y=g[1],v=g[2],b=(0,a.useState)(""),w=(0,n.Z)(b,2),j=w[0],S=w[1],I=(0,a.useState)({}),_=(0,n.Z)(I,2),N=_[0],A=_[1],D=(0,a.useState)(t),T=(0,n.Z)(D,2),R=T[0],B=T[1],F=(0,a.useState)({categoria:""}),z=(0,n.Z)(F,2),W=z[0],E=z[1],M=(0,a.useContext)(h.Z).user,L=(0,l.Z)((function(e){return{paper:{marginTop:e.spacing(0),marginBottom:e.spacing(10),display:"flex",flexDirection:"column",alignItems:"center"},title1:{textAlign:"center",color:"white"}}})),J=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S(t.id),A(t),E({categoria:t.categoria}),y(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S(null),A({}),E({categoria:""}),y(!0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){var t,r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.wb();case 3:return t=e.sent,e.next=6,t;case 6:r=e.sent,B(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();(0,a.useEffect)((function(){M?(P(),S(null)):r("/loginuser")}),[]);var G=L();return M?(0,Z.jsxs)(c.Z,{children:[(0,Z.jsx)("div",{className:G.paper,children:(0,Z.jsx)(u.Z,{component:"h1",variant:"h3",children:"CATEGOR\xcdAS"})}),(0,Z.jsx)(p.Z,{alignItems:"center",children:(0,Z.jsx)(d.Z,{variant:"contained",color:"success",type:"submit",onClick:function(){return O()},children:"Registrar Categor\xeda"})}),(0,Z.jsx)("br",{}),(0,Z.jsx)("br",{})," ",(0,Z.jsx)("br",{}),(0,Z.jsx)("div",{children:(0,Z.jsx)("section",{className:"content",children:(0,Z.jsx)("div",{className:"table-responsive table-condensed table-sm tabla",children:(0,Z.jsxs)("table",{className:"table table-hover",id:"dataTableData",name:"dataTableData",style:{fontSize:11,textAlign:"center"},children:[(0,Z.jsx)("thead",{className:G.title1,children:(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("th",{style:{display:"none"},children:"Id"}),(0,Z.jsx)("th",{children:"Codigo"}),(0,Z.jsx)("th",{children:"Categor\xeda"}),(0,Z.jsx)("th",{})]})}),(0,Z.jsx)("tbody",{style:{backgroundColor:"white"},children:0===R.length?(0,Z.jsx)("tr",{children:(0,Z.jsx)("td",{colSpan:11,children:"No hay datos"})}):R.map((function(e,t){return(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{style:{display:"none"},children:e.id}),(0,Z.jsx)("td",{children:e.id}),(0,Z.jsx)("td",{children:e.categoria}),(0,Z.jsx)("td",{children:(0,Z.jsx)("button",{className:"btn btn-warning btn-sm float-right",type:"submit",onClick:function(){return J(e)},children:"editar"})})]},t)}))})]})})})}),(0,Z.jsx)(k,{handleClose:v,show:m,category_id:j,currentItem:N,setCategories:B,setFormData:E,newData:W})]}):(0,Z.jsx)("p",{style:{fontSize:"25px"},children:"Inicia sesi\xf3n para ver todos los videos!"})},I=r(2516),_=function(){var e=(0,I.Z)(S),t=(0,a.useContext)(h.Z).user,r=(0,a.useState)({loading:!0,categories:null}),o=(0,n.Z)(r,2),i=o[0],s=o[1];return(0,a.useEffect)((function(){f.wb().then((function(e){s({loading:!1,categories:e})}))}),[s]),t?(0,Z.jsx)(c.Z,{children:(0,Z.jsx)("div",{className:"App",children:(0,Z.jsx)(e,{isLoading:i.loading,categories:i.categories})})}):(0,Z.jsx)("p",{style:{fontSize:"25px"},children:"Inicia sesi\xf3n para ver todos los videos!"})}},2516:function(e,t,r){var n=r(1413),a=r(5987),o=(r(2791),r(184)),i=["isLoading"];t.Z=function(e){return function(t){var r=t.isLoading,s=(0,a.Z)(t,i);return r?(0,o.jsxs)("div",{style:{fontSize:"25px",display:"flex",justifyContent:"center",textAlign:"center",flexDirection:"column",alignItems:"center"},children:[(0,o.jsx)("div",{className:"spinner-grow text-light",role:"status",children:(0,o.jsx)("span",{className:"sr-only"})}),"Espera por favor"]}):(0,o.jsx)(e,(0,n.Z)({},s))}}},2918:function(e,t,r){r.d(t,{d:function(){return o}});var n=r(9439),a=r(2791),o=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=(0,a.useState)(e),r=(0,n.Z)(t,2),o=r[0],i=r[1],s=function(){return i(!0)},c=function(){return i(!1)};return[o,s,c]}},5764:function(e,t,r){r.d(t,{CX:function(){return c},wb:function(){return s},yr:function(){return l}});var n=r(4165),a=r(5861),o=r(7411),i="https://sccotview.com/api/categorias/",s=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get(i);case 2:if(200!==(t=e.sent).status){e.next=7;break}return e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.post(i,t);case 2:if(200!==(r=e.sent).status){e.next=7;break}return e.next=6,r.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.patch(i+t+"/",r);case 2:if(200!==(a=e.sent).status){e.next=5;break}return e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},8302:function(e,t,r){var n=r(7462),a=r(5987),o=r(2791),i=r(8182),s=r(8317),c=r(1122),l={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},u=o.forwardRef((function(e,t){var r=e.align,s=void 0===r?"inherit":r,u=e.classes,p=e.className,d=e.color,h=void 0===d?"initial":d,f=e.component,x=e.display,g=void 0===x?"initial":x,m=e.gutterBottom,y=void 0!==m&&m,v=e.noWrap,b=void 0!==v&&v,Z=e.paragraph,w=void 0!==Z&&Z,j=e.variant,k=void 0===j?"body1":j,C=e.variantMapping,S=void 0===C?l:C,I=(0,a.Z)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),_=f||(w?"p":S[k]||l[k])||"span";return o.createElement(_,(0,n.Z)({className:(0,i.Z)(u.root,p,"inherit"!==k&&u[k],"initial"!==h&&u["color".concat((0,c.Z)(h))],b&&u.noWrap,y&&u.gutterBottom,w&&u.paragraph,"inherit"!==s&&u["align".concat((0,c.Z)(s))],"initial"!==g&&u["display".concat((0,c.Z)(g))]),ref:t},I))}));t.Z=(0,s.Z)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(u)},8040:function(){},9629:function(){}}]);
//# sourceMappingURL=400.193148a5.chunk.js.map