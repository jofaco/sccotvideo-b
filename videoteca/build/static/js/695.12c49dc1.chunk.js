"use strict";(self.webpackChunkvideoteca_frontend=self.webpackChunkvideoteca_frontend||[]).push([[695],{7411:function(e,t,r){var n=r(4165),a=r(5861),o=r(3263),s=r(9778),i="https://sccotview.com/api/",l=o.Z.create({baseURL:i,timeout:5e3,headers:{Authorization:localStorage.getItem("access_token")?"JWT "+localStorage.getItem("access_token"):null,"Content-Type":"multipart/form-data",accept:"application/json"}});l.interceptors.response.use((function(e){return e}),function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,o,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.config,"undefined"!==typeof t.response){e.next=4;break}return console.warn("A server/network error occurred. Looks like CORS might be the problem. Sorry about this - we will get it fixed shortly."),e.abrupt("return",Promise.reject(t));case 4:if(401!==t.response.status||r.url!==i+"api/token/refresh/"){e.next=7;break}return window.location.href="/loginuser/",e.abrupt("return",Promise.reject(t));case 7:if("token_not_valid"!==t.response.data.code||401!==t.response.status||"Unauthorized"!==t.response.statusText){e.next=26;break}if(!(a=localStorage.getItem("refresh_token"))){e.next=24;break}if(o=JSON.parse(s.lW.from(a.split(".")[1],"base64").toString()),c=Math.ceil(Date.now()/1e3),console.log(o.exp),!(o.exp>c)){e.next=17;break}return e.abrupt("return",l.post("api/token/refresh/",{refresh:a}).then((function(e){return localStorage.setItem("access_token",e.data.access_token),localStorage.setItem("refresh_token",e.data.refresh_token),l.defaults.headers.Authorization="JWT "+e.data.access_token,r.headers.Authorization="JWT "+e.data.access_token,l(r)})).catch((function(e){console.log(e)})));case 17:console.log("Refresh token is expired",o.exp,c),window.localStorage.removeItem("access_token"),window.localStorage.removeItem("refresh_token"),window.localStorage.removeItem("user"),window.location.href="/loginuser/";case 22:e.next=26;break;case 24:console.log("Refresh token not available."),window.location.href="/loginuser/";case 26:return 401===t.response.status&&(window.location.href="/loginuser/"),e.abrupt("return",Promise.reject(t));case 28:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.Z=l},3695:function(e,t,r){r.r(t),r.d(t,{default:function(){return y}});var n=r(9439),a=r(2791),o=r(4165),s=r(5861),i=r(7689),l=(r(8040),r(1174),r(3712)),c=r(8596),u=r(8302),p=r(6314),d=r(4294),h=r(2680),f=r(6849),x=r(1479),v=r(2918),b=r(184),m=function(e){var t=e.palabrasClaves,r=(0,i.s0)(),m=(0,v.d)(!1),g=(0,n.Z)(m,3),y=g[0],Z=g[1],w=g[2],k=(0,a.useState)(""),j=(0,n.Z)(k,2),C=j[0],S=j[1],I=(0,a.useState)({}),_=(0,n.Z)(I,2),N=_[0],A=_[1],D=(0,a.useState)(t),T=(0,n.Z)(D,2),B=T[0],R=T[1],F=(0,a.useState)({palabraClave:""}),P=(0,n.Z)(F,2),z=P[0],W=P[1],M=(0,a.useContext)(h.Z).user,E=(0,c.Z)((function(e){return{paper:{marginTop:e.spacing(0),marginBottom:e.spacing(10),display:"flex",flexDirection:"column",alignItems:"center"},title1:{textAlign:"center",color:"white"}}})),L=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(t){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S(t.id),A(t),W({palabraClave:t.palabraClave}),Z(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S(null),A({}),W({palabraClave:""}),Z(!0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(){var t,r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.kt();case 3:return t=e.sent,e.next=6,t;case 6:r=e.sent,R(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();(0,a.useEffect)((function(){M?(O(),S(null)):r("/loginuser")}),[]);var G=E();return M?(0,b.jsxs)(l.Z,{children:[(0,b.jsx)("div",{className:G.paper,children:(0,b.jsx)(u.Z,{component:"h1",variant:"h3",children:"PalabrasClaves"})}),(0,b.jsx)(p.Z,{alignItems:"center",children:(0,b.jsx)(d.Z,{variant:"contained",color:"success",type:"submit",onClick:function(){return J()},children:"Registrar PalabraClave"})}),(0,b.jsx)("br",{}),(0,b.jsx)("br",{})," ",(0,b.jsx)("br",{}),(0,b.jsx)("div",{children:(0,b.jsx)("section",{className:"content",children:(0,b.jsx)("div",{className:"table-responsive table-condensed table-sm tabla",children:(0,b.jsxs)("table",{className:"table table-hover",id:"dataTableData",name:"dataTableData",style:{fontSize:11,textAlign:"center"},children:[(0,b.jsx)("thead",{className:G.title1,children:(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{style:{display:"none"},children:"Id"}),(0,b.jsx)("th",{children:"Codigo"}),(0,b.jsx)("th",{children:"PalabraClave"}),(0,b.jsx)("th",{})]})}),(0,b.jsx)("tbody",{style:{backgroundColor:"white"},children:0===B.length?(0,b.jsx)("tr",{children:(0,b.jsx)("td",{colSpan:11,children:"No hay datos"})}):B.map((function(e,t){return(0,b.jsxs)("tr",{children:[(0,b.jsx)("td",{style:{display:"none"},children:e.id}),(0,b.jsx)("td",{children:e.id}),(0,b.jsx)("td",{children:e.palabraClave}),(0,b.jsx)("td",{children:(0,b.jsx)("button",{className:"btn btn-warning btn-sm float-right",type:"submit",onClick:function(){return L(e)},children:"editar"})})]},t)}))})]})})})}),(0,b.jsx)(x.Z,{handleClose:w,show:y,palabraclave_id:C,currentItem:N,setPalabrasClaves:R,setFormData:W,newData:z})]}):(0,b.jsx)("p",{style:{fontSize:"25px"},children:"Inicia sesi\xf3n para ver todos los videos!"})},g=r(2516),y=function(){var e=(0,g.Z)(m),t=(0,a.useContext)(h.Z).user,r=(0,a.useState)({loading:!0,palabrasClaves:null}),o=(0,n.Z)(r,2),s=o[0],i=o[1];return(0,a.useEffect)((function(){f.kt().then((function(e){i({loading:!1,palabrasClaves:e})}))}),[i]),t?(0,b.jsx)(l.Z,{children:(0,b.jsx)("div",{className:"App",children:(0,b.jsx)(e,{isLoading:s.loading,palabrasClaves:s.palabrasClaves})})}):(0,b.jsx)("p",{style:{fontSize:"25px"},children:"Inicia sesi\xf3n para ver todos los videos!"})}},1479:function(e,t,r){var n=r(4165),a=r(5861),o=r(4942),s=r(1413),i=r(5987),l=(r(2791),r(6849)),c=r(5342),u=r(3360),p=r(4437),d=r(8596),h=(r(9629),r(184)),f=["handleClose","show","palabraclave_id","currentItem","setFormData","newData"],x=(0,d.Z)((function(e){return{containerModal:{border:"2px solid #ccc",borderRadius:50,boxShadow:"4px 4px 4px 0px #5a28e550"},containerForm:{height:"3rem",background:"#BFF",border:"2px solid #ccc",borderRadius:50,boxShadow:"4px 4px 4px 0px #5a28e550"},"@media (max-width: 720px)":{root:{display:"flex"}}}}));t.Z=function(e){var t=e.handleClose,r=e.show,d=e.palabraclave_id,v=(e.currentItem,e.setFormData),b=e.newData,m=(0,i.Z)(e,f),g=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=new FormData,e.prev=2,d){e.next=9;break}return r.append("palabraClave",b.palabraClave),e.next=7,l.eA(r);case 7:e.next=12;break;case 9:return r.append("palabraClave",b.palabraClave),e.next=12,l.Zb(d,r);case 12:return e.next=14,l.kt();case 14:return a=e.sent,e.next=17,a;case 17:o=e.sent,m.setPalabrasClaves(o),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(2),console.log(e.t0);case 24:case"end":return e.stop()}}),e,null,[[2,21]])})));return function(t){return e.apply(this,arguments)}}(),y=x();return(0,h.jsxs)(c.Z,{show:r,onHide:t,"aria-labelledby":"example-custom-modal-styling-title",contentClassName:y.cloud,centered:!0,children:[(0,h.jsx)(c.Z.Header,{closeButton:!0,children:(0,h.jsx)(c.Z.Title,{id:"tituloModal",children:(0,h.jsx)("h2",{children:d?"Editar Registro":"Crear Registro"})})}),(0,h.jsx)(c.Z.Body,{id:"bodyModal",children:(0,h.jsxs)(p.Z,{onSubmit:g,children:[(0,h.jsx)(p.Z.Group,{className:"mb-2 ",controlId:"exampleForm.ControlInput1",children:(0,h.jsx)(p.Z.Control,{type:"text",className:y.containerForm,rows:1,name:"palabraClave",value:b.palabraClave||"",onChange:function(e){var t=e.target.name;v((0,s.Z)((0,s.Z)({},b),{},(0,o.Z)({},t,e.target.value)))}})}),(0,h.jsxs)(c.Z.Footer,{children:[(0,h.jsx)(u.Z,{variant:"secondary",onClick:t,children:"Close"}),(0,h.jsx)(u.Z,{variant:"primary",type:"submit",onClick:t,children:d?"Guardar Cambios":"Crear"})]})]})})]})}},2516:function(e,t,r){var n=r(1413),a=r(5987),o=(r(2791),r(184)),s=["isLoading"];t.Z=function(e){return function(t){var r=t.isLoading,i=(0,a.Z)(t,s);return r?(0,o.jsxs)("div",{style:{fontSize:"25px",display:"flex",justifyContent:"center",textAlign:"center",flexDirection:"column",alignItems:"center"},children:[(0,o.jsx)("div",{className:"spinner-grow text-light",role:"status",children:(0,o.jsx)("span",{className:"sr-only"})}),"Espera por favor"]}):(0,o.jsx)(e,(0,n.Z)({},i))}}},2918:function(e,t,r){r.d(t,{d:function(){return o}});var n=r(9439),a=r(2791),o=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=(0,a.useState)(e),r=(0,n.Z)(t,2),o=r[0],s=r[1],i=function(){return s(!0)},l=function(){return s(!1)};return[o,i,l]}},6849:function(e,t,r){r.d(t,{Zb:function(){return c},eA:function(){return l},kt:function(){return i}});var n=r(4165),a=r(5861),o=r(7411),s="https://sccotview.com/api/palabrasclaves/",i=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get(s);case 2:if(200!==(t=e.sent).status){e.next=7;break}return e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.post(s,t);case 2:if(200!==(r=e.sent).status){e.next=7;break}return e.next=6,r.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.patch(s+t+"/",r);case 2:if(200!==(a=e.sent).status){e.next=5;break}return e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},8302:function(e,t,r){var n=r(7462),a=r(5987),o=r(2791),s=r(8182),i=r(8317),l=r(1122),c={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},u=o.forwardRef((function(e,t){var r=e.align,i=void 0===r?"inherit":r,u=e.classes,p=e.className,d=e.color,h=void 0===d?"initial":d,f=e.component,x=e.display,v=void 0===x?"initial":x,b=e.gutterBottom,m=void 0!==b&&b,g=e.noWrap,y=void 0!==g&&g,Z=e.paragraph,w=void 0!==Z&&Z,k=e.variant,j=void 0===k?"body1":k,C=e.variantMapping,S=void 0===C?c:C,I=(0,a.Z)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),_=f||(w?"p":S[j]||c[j])||"span";return o.createElement(_,(0,n.Z)({className:(0,s.Z)(u.root,p,"inherit"!==j&&u[j],"initial"!==h&&u["color".concat((0,l.Z)(h))],y&&u.noWrap,m&&u.gutterBottom,w&&u.paragraph,"inherit"!==i&&u["align".concat((0,l.Z)(i))],"initial"!==v&&u["display".concat((0,l.Z)(v))]),ref:t},I))}));t.Z=(0,i.Z)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(u)},8040:function(){},9629:function(){}}]);
//# sourceMappingURL=695.12c49dc1.chunk.js.map