"use strict";(self.webpackChunkvideoteca_frontend=self.webpackChunkvideoteca_frontend||[]).push([[144],{7411:function(e,t,n){var r=n(4165),a=n(5861),o=n(3263),s=n(9778),i="https://sccotview.com/api/",c=o.Z.create({baseURL:i,timeout:5e3,headers:{Authorization:localStorage.getItem("access_token")?"JWT "+localStorage.getItem("access_token"):null,"Content-Type":"multipart/form-data",accept:"application/json"}});c.interceptors.response.use((function(e){return e}),function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,o,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.config,"undefined"!==typeof t.response){e.next=4;break}return console.warn("A server/network error occurred. Looks like CORS might be the problem. Sorry about this - we will get it fixed shortly."),e.abrupt("return",Promise.reject(t));case 4:if(401!==t.response.status||n.url!==i+"api/token/refresh/"){e.next=7;break}return window.location.href="/loginuser/",e.abrupt("return",Promise.reject(t));case 7:if("token_not_valid"!==t.response.data.code||401!==t.response.status||"Unauthorized"!==t.response.statusText){e.next=26;break}if(!(a=localStorage.getItem("refresh_token"))){e.next=24;break}if(o=JSON.parse(s.lW.from(a.split(".")[1],"base64").toString()),l=Math.ceil(Date.now()/1e3),console.log(o.exp),!(o.exp>l)){e.next=17;break}return e.abrupt("return",c.post("api/token/refresh/",{refresh:a}).then((function(e){return localStorage.setItem("access_token",e.data.access_token),localStorage.setItem("refresh_token",e.data.refresh_token),c.defaults.headers.Authorization="JWT "+e.data.access_token,n.headers.Authorization="JWT "+e.data.access_token,c(n)})).catch((function(e){console.log(e)})));case 17:console.log("Refresh token is expired",o.exp,l),window.localStorage.removeItem("access_token"),window.localStorage.removeItem("refresh_token"),window.localStorage.removeItem("user"),window.location.href="/loginuser/";case 22:e.next=26;break;case 24:console.log("Refresh token not available."),window.location.href="/loginuser/";case 26:return 401===t.response.status&&(window.location.href="/loginuser/"),e.abrupt("return",Promise.reject(t));case 28:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.Z=c},9250:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var r=n(9439),a=n(2791),o=n(4165),s=n(5861),i=n(7689),c=(n(8040),n(1174),n(3712)),l=n(8596),u=n(8302),d=n(6314),p=n(4294),h=n(2680),f=n(6714),x=n(4942),m=n(1413),b=n(5987),g=n(5342),y=n(3360),v=n(4437),Z=(n(9629),n(184)),w=["handleClose","show","subespecialidad_id","currentItem","setFormData","newData"],j=(0,l.Z)((function(e){return{containerModal:{border:"2px solid #ccc",borderRadius:50,boxShadow:"4px 4px 4px 0px #5a28e550"},containerForm:{height:"3rem",background:"#BFF",border:"2px solid #ccc",borderRadius:50,boxShadow:"4px 4px 4px 0px #5a28e550"},"@media (max-width: 720px)":{root:{display:"flex"}}}})),k=function(e){var t=e.handleClose,n=e.show,r=e.subespecialidad_id,a=(e.currentItem,e.setFormData),i=e.newData,c=(0,b.Z)(e,w),l=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(t){var n,a,s;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=new FormData,e.prev=2,r){e.next=9;break}return n.append("subEspecialidad",i.subEspecialidad),e.next=7,f.RX(n);case 7:e.next=12;break;case 9:return n.append("subEspecialidad",i.subEspecialidad),e.next=12,f.ez(r,n);case 12:return e.next=14,f.Dp();case 14:return a=e.sent,e.next=17,a;case 17:s=e.sent,c.setSubEspecialidades(s),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(2),console.log(e.t0);case 24:case"end":return e.stop()}}),e,null,[[2,21]])})));return function(t){return e.apply(this,arguments)}}(),u=j();return(0,Z.jsxs)(g.Z,{show:n,onHide:t,"aria-labelledby":"example-custom-modal-styling-title",contentClassName:u.cloud,centered:!0,children:[(0,Z.jsx)(g.Z.Header,{closeButton:!0,children:(0,Z.jsx)(g.Z.Title,{id:"tituloModal",children:(0,Z.jsx)("h2",{children:r?"Editar Registro":"Crear Registro"})})}),(0,Z.jsx)(g.Z.Body,{id:"bodyModal",children:(0,Z.jsxs)(v.Z,{onSubmit:l,children:[(0,Z.jsx)(v.Z.Group,{className:"mb-2 ",controlId:"exampleForm.ControlInput1",children:(0,Z.jsx)(v.Z.Control,{type:"text",className:u.containerForm,rows:1,name:"subEspecialidad",value:i.subEspecialidad||"",onChange:function(e){var t=e.target.name;a((0,m.Z)((0,m.Z)({},i),{},(0,x.Z)({},t,e.target.value)))}})}),(0,Z.jsxs)(g.Z.Footer,{children:[(0,Z.jsx)(y.Z,{variant:"secondary",onClick:t,children:"Close"}),(0,Z.jsx)(y.Z,{variant:"primary",type:"submit",onClick:t,children:r?"Guardar Cambios":"Crear"})]})]})})]})},S=n(2918),E=function(e){var t=e.subEspecialidades,n=(0,i.s0)(),x=(0,S.d)(!1),m=(0,r.Z)(x,3),b=m[0],g=m[1],y=m[2],v=(0,a.useState)(""),w=(0,r.Z)(v,2),j=w[0],E=w[1],C=(0,a.useState)({}),I=(0,r.Z)(C,2),_=I[0],D=I[1],N=(0,a.useState)(t),R=(0,r.Z)(N,2),A=R[0],T=R[1],B=(0,a.useState)({subEspecialidad:""}),z=(0,r.Z)(B,2),F=z[0],W=z[1],M=(0,a.useContext)(h.Z).user,L=(0,l.Z)((function(e){return{paper:{marginTop:e.spacing(0),marginBottom:e.spacing(10),display:"flex",flexDirection:"column",alignItems:"center"},title1:{textAlign:"center",color:"white"}}})),J=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(t){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E(t.id),D(t),W({subEspecialidad:t.subEspecialidad}),g(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E(null),D({}),W({subEspecialidad:""}),g(!0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(){var t,n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.Dp();case 3:return t=e.sent,e.next=6,t;case 6:n=e.sent,T(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();(0,a.useEffect)((function(){M?(O(),E(null)):n("/loginuser")}),[]);var G=L();return M?(0,Z.jsxs)(c.Z,{children:[(0,Z.jsx)("div",{className:G.paper,children:(0,Z.jsx)(u.Z,{component:"h1",variant:"h3",children:"SubEspecialidades"})}),(0,Z.jsx)(d.Z,{alignItems:"center",children:(0,Z.jsx)(p.Z,{variant:"contained",color:"success",type:"submit",onClick:function(){return P()},children:"Registrar SubEspecialidad"})}),(0,Z.jsx)("br",{}),(0,Z.jsx)("br",{})," ",(0,Z.jsx)("br",{}),(0,Z.jsx)("div",{children:(0,Z.jsx)("section",{className:"content",children:(0,Z.jsx)("div",{className:"table-responsive table-condensed table-sm tabla",children:(0,Z.jsxs)("table",{className:"table table-hover",id:"dataTableData",name:"dataTableData",style:{fontSize:11,textAlign:"center"},children:[(0,Z.jsx)("thead",{className:G.title1,children:(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("th",{style:{display:"none"},children:"Id"}),(0,Z.jsx)("th",{children:"Codigo"}),(0,Z.jsx)("th",{children:"SubEspecialidad"}),(0,Z.jsx)("th",{})]})}),(0,Z.jsx)("tbody",{style:{backgroundColor:"white"},children:0===A.length?(0,Z.jsx)("tr",{children:(0,Z.jsx)("td",{colSpan:11,children:"No hay datos"})}):A.map((function(e,t){return(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{style:{display:"none"},children:e.id}),(0,Z.jsx)("td",{children:e.id}),(0,Z.jsx)("td",{children:e.subEspecialidad}),(0,Z.jsx)("td",{children:(0,Z.jsx)("button",{className:"btn btn-warning btn-sm float-right",type:"submit",onClick:function(){return J(e)},children:"editar"})})]},t)}))})]})})})}),(0,Z.jsx)(k,{handleClose:y,show:b,subespecialidad_id:j,currentItem:_,setSubEspecialidades:T,setFormData:W,newData:F})]}):(0,Z.jsx)("p",{style:{fontSize:"25px"},children:"Inicia sesi\xf3n para ver todos los videos!"})},C=n(2516),I=function(){var e=(0,C.Z)(E),t=(0,a.useContext)(h.Z).user,n=(0,a.useState)({loading:!0,subEspecialidades:null}),o=(0,r.Z)(n,2),s=o[0],i=o[1];return(0,a.useEffect)((function(){f.Dp().then((function(e){i({loading:!1,subEspecialidades:e})}))}),[i]),t?(0,Z.jsx)(c.Z,{children:(0,Z.jsx)("div",{className:"App",children:(0,Z.jsx)(e,{isLoading:s.loading,subEspecialidades:s.subEspecialidades})})}):(0,Z.jsx)("p",{style:{fontSize:"25px"},children:"Inicia sesi\xf3n para ver todos los videos!"})}},2516:function(e,t,n){var r=n(1413),a=n(5987),o=(n(2791),n(184)),s=["isLoading"];t.Z=function(e){return function(t){var n=t.isLoading,i=(0,a.Z)(t,s);return n?(0,o.jsxs)("div",{style:{fontSize:"25px",display:"flex",justifyContent:"center",textAlign:"center",flexDirection:"column",alignItems:"center"},children:[(0,o.jsx)("div",{className:"spinner-grow text-light",role:"status",children:(0,o.jsx)("span",{className:"sr-only"})}),"Espera por favor"]}):(0,o.jsx)(e,(0,r.Z)({},i))}}},2918:function(e,t,n){n.d(t,{d:function(){return o}});var r=n(9439),a=n(2791),o=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=(0,a.useState)(e),n=(0,r.Z)(t,2),o=n[0],s=n[1],i=function(){return s(!0)},c=function(){return s(!1)};return[o,i,c]}},6714:function(e,t,n){n.d(t,{Dp:function(){return i},RX:function(){return c},ez:function(){return l}});var r=n(4165),a=n(5861),o=n(7411),s="https://sccotview.com/api/subespecialidades/",i=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get(s);case 2:if(200!==(t=e.sent).status){e.next=7;break}return e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.post(s,t);case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.next=6,n.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.patch(s+t+"/",n);case 2:if(200!==(a=e.sent).status){e.next=5;break}return e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},8302:function(e,t,n){var r=n(7462),a=n(5987),o=n(2791),s=n(8182),i=n(8317),c=n(1122),l={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},u=o.forwardRef((function(e,t){var n=e.align,i=void 0===n?"inherit":n,u=e.classes,d=e.className,p=e.color,h=void 0===p?"initial":p,f=e.component,x=e.display,m=void 0===x?"initial":x,b=e.gutterBottom,g=void 0!==b&&b,y=e.noWrap,v=void 0!==y&&y,Z=e.paragraph,w=void 0!==Z&&Z,j=e.variant,k=void 0===j?"body1":j,S=e.variantMapping,E=void 0===S?l:S,C=(0,a.Z)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),I=f||(w?"p":E[k]||l[k])||"span";return o.createElement(I,(0,r.Z)({className:(0,s.Z)(u.root,d,"inherit"!==k&&u[k],"initial"!==h&&u["color".concat((0,c.Z)(h))],v&&u.noWrap,g&&u.gutterBottom,w&&u.paragraph,"inherit"!==i&&u["align".concat((0,c.Z)(i))],"initial"!==m&&u["display".concat((0,c.Z)(m))]),ref:t},C))}));t.Z=(0,i.Z)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(u)},8040:function(){},9629:function(){}}]);
//# sourceMappingURL=144.c6b301fd.chunk.js.map