"use strict";(self.webpackChunkvideoteca_frontend=self.webpackChunkvideoteca_frontend||[]).push([[400],{7411:function(e,t,r){var n=r(4165),a=r(5861),o=r(3263),s=r(9778),i="https://sccotview.com/api/",c=o.Z.create({baseURL:i,timeout:5e3,headers:{Authorization:localStorage.getItem("access_token")?"JWT "+localStorage.getItem("access_token"):null,"Content-Type":"multipart/form-data",accept:"application/json"}});c.interceptors.response.use((function(e){return e}),function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,o,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.config,"undefined"!==typeof t.response){e.next=4;break}return console.warn("A server/network error occurred. Looks like CORS might be the problem. Sorry about this - we will get it fixed shortly."),e.abrupt("return",Promise.reject(t));case 4:if(401!==t.response.status||r.url!==i+"api/token/refresh/"){e.next=7;break}return window.location.href="/loginuser/",e.abrupt("return",Promise.reject(t));case 7:if("token_not_valid"!==t.response.data.code||401!==t.response.status||"Unauthorized"!==t.response.statusText){e.next=26;break}if(!(a=localStorage.getItem("refresh_token"))){e.next=24;break}if(o=JSON.parse(s.lW.from(a.split(".")[1],"base64").toString()),u=Math.ceil(Date.now()/1e3),console.log(o.exp),!(o.exp>u)){e.next=17;break}return e.abrupt("return",c.post("api/token/refresh/",{refresh:a}).then((function(e){return localStorage.setItem("access_token",e.data.access_token),localStorage.setItem("refresh_token",e.data.refresh_token),c.defaults.headers.Authorization="JWT "+e.data.access_token,r.headers.Authorization="JWT "+e.data.access_token,c(r)})).catch((function(e){console.log(e)})));case 17:console.log("Refresh token is expired",o.exp,u),window.localStorage.removeItem("access_token"),window.localStorage.removeItem("refresh_token"),window.localStorage.removeItem("user"),window.location.href="/loginuser/";case 22:e.next=26;break;case 24:console.log("Refresh token not available."),window.location.href="/loginuser/";case 26:return 401===t.response.status&&(window.location.href="/loginuser/"),e.abrupt("return",Promise.reject(t));case 28:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.Z=c},8400:function(e,t,r){r.r(t),r.d(t,{default:function(){return N}});var n=r(9439),a=r(2791),o=r(4165),s=r(5861),i=r(7689),c=(r(8040),r(1174),r(3712)),u=r(8596),l=r(8302),p=r(4294),d=r(2680),f=r(5764),h=r(4942),x=r(1413),g=r(5987),v=r(5342),m=r(3360),Z=r(4437),y=(r(9629),r(184)),b=["handleClose","show","category_id","currentItem","setFormData","newData"],w=(0,u.Z)((function(e){return{containerModal:{border:"2px solid #ccc",borderRadius:50,boxShadow:"4px 4px 4px 0px #5a28e550"},containerForm:{height:"3rem",background:"#BFF",border:"2px solid #ccc",borderRadius:50,boxShadow:"4px 4px 4px 0px #5a28e550"},"@media (max-width: 720px)":{root:{display:"flex"}}}})),k=function(e){var t=e.handleClose,r=e.show,n=e.category_id,a=(e.currentItem,e.setFormData),i=e.newData,c=(0,g.Z)(e,b),u=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(t){var r,a,s;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=new FormData,e.prev=2,n){e.next=9;break}return r.append("categoria",i.categoria),e.next=7,f.CX(r);case 7:e.next=12;break;case 9:return r.append("categoria",i.categoria),e.next=12,f.yr(n,r);case 12:return e.next=14,f.wb();case 14:return a=e.sent,e.next=17,a;case 17:s=e.sent,c.setCategories(s),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(2),console.log(e.t0);case 24:case"end":return e.stop()}}),e,null,[[2,21]])})));return function(t){return e.apply(this,arguments)}}(),l=w();return(0,y.jsxs)(v.Z,{show:r,onHide:t,"aria-labelledby":"example-custom-modal-styling-title",contentClassName:l.cloud,centered:!0,children:[(0,y.jsx)(v.Z.Header,{closeButton:!0,children:(0,y.jsx)(v.Z.Title,{id:"tituloModal",children:(0,y.jsx)("h2",{children:n?"Editar Registro":"Crear Registro"})})}),(0,y.jsx)(v.Z.Body,{id:"bodyModal",children:(0,y.jsxs)(Z.Z,{onSubmit:u,children:[(0,y.jsx)(Z.Z.Group,{className:"mb-2 ",controlId:"exampleForm.ControlInput1",children:(0,y.jsx)(Z.Z.Control,{type:"text",className:l.containerForm,rows:1,name:"categoria",value:i.categoria||"",onChange:function(e){var t=e.target.name;a((0,x.Z)((0,x.Z)({},i),{},(0,h.Z)({},t,e.target.value)))}})}),(0,y.jsxs)(v.Z.Footer,{children:[(0,y.jsx)(m.Z,{variant:"secondary",onClick:t,children:"Close"}),(0,y.jsx)(m.Z,{variant:"primary",type:"submit",onClick:t,children:n?"Guardar Cambios":"Crear"})]})]})})]})},j=r(2918),C=r(1652),S=function(e){var t=e.categories,r=(0,i.s0)(),h=(0,j.d)(!1),x=(0,n.Z)(h,3),g=x[0],v=x[1],m=x[2],Z=(0,a.useState)(""),b=(0,n.Z)(Z,2),w=b[0],S=b[1],I=(0,a.useState)({}),N=(0,n.Z)(I,2),_=N[0],A=N[1],D=(0,a.useState)(t),T=(0,n.Z)(D,2),R=T[0],B=T[1],F=(0,a.useState)({categoria:""}),z=(0,n.Z)(F,2),W=z[0],E=z[1],M=(0,a.useState)([]),P=(0,n.Z)(M,2),J=P[0],L=P[1],O=(0,a.useContext)(d.Z).user,G=(0,u.Z)((function(e){return{paper:{marginTop:e.spacing(0),marginBottom:e.spacing(10),display:"flex",flexDirection:"column",alignItems:"center"},title1:{textAlign:"center",color:"white"}}})),H=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(t){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S(t.id),A(t),E({categoria:t.categoria}),v(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S(null),A({}),E({categoria:""}),v(!0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(){var t,r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.wb();case 3:return t=e.sent,e.next=6,t;case 6:r=e.sent,B(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(){var t,r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.Zs();case 3:return t=e.sent,e.next=6,t;case 6:r=e.sent,L(r.videos),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();(0,a.useEffect)((function(){O?(V(),X(),S(null)):r("/loginuser")}),[]);var Y=G();return O?(0,y.jsxs)(c.Z,{children:[(0,y.jsx)("div",{className:Y.paper,children:(0,y.jsx)(l.Z,{component:"h1",variant:"h3",children:"CATEGOR\xcdAS"})}),(0,y.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,y.jsx)("div",{children:(0,y.jsxs)("span",{className:"border border-light p-2 rounded text-light",children:[J.length," Videos"]})}),(0,y.jsx)("div",{children:(0,y.jsx)(p.Z,{variant:"contained",color:"success",type:"submit",onClick:function(){return U()},children:"Registrar Categor\xeda"})})]}),(0,y.jsx)("br",{}),(0,y.jsx)("br",{})," ",(0,y.jsx)("br",{}),(0,y.jsx)("div",{children:(0,y.jsx)("section",{className:"content",children:(0,y.jsx)("div",{className:"table-responsive table-condensed table-sm tabla",children:(0,y.jsxs)("table",{className:"table table-hover",id:"dataTableData",name:"dataTableData",style:{fontSize:15,textAlign:"center"},children:[(0,y.jsx)("thead",{className:Y.title1,children:(0,y.jsxs)("tr",{children:[(0,y.jsx)("th",{style:{display:"none"},children:"Id"}),(0,y.jsx)("th",{children:"Codigo"}),(0,y.jsx)("th",{children:"Categor\xeda"}),(0,y.jsx)("th",{children:"Cantidad de videos"}),(0,y.jsx)("th",{})]})}),(0,y.jsx)("tbody",{style:{backgroundColor:"white"},children:0===R.length?(0,y.jsx)("tr",{children:(0,y.jsx)("td",{colSpan:11,children:"No hay datos"})}):R.map((function(e,t){return(0,y.jsxs)("tr",{children:[(0,y.jsx)("td",{style:{display:"none"},children:e.id}),(0,y.jsx)("td",{children:e.id}),(0,y.jsx)("td",{children:e.categoria}),(0,y.jsx)("td",{children:J.filter((function(t){return t.categorias.some((function(t){return e.categoria===t.categoria}))})).length}),(0,y.jsx)("td",{children:(0,y.jsx)("button",{className:"btn btn-warning btn-sm float-right",type:"submit",onClick:function(){return H(e)},children:"editar"})})]},t)}))})]})})})}),(0,y.jsx)(k,{handleClose:m,show:g,category_id:w,currentItem:_,setCategories:B,setFormData:E,newData:W})]}):(0,y.jsx)("p",{style:{fontSize:"25px"},children:"Inicia sesi\xf3n para ver todos los videos!"})},I=r(2516),N=function(){var e=(0,I.Z)(S),t=(0,a.useContext)(d.Z).user,r=(0,a.useState)({loading:!0,categories:null}),o=(0,n.Z)(r,2),s=o[0],i=o[1];return(0,a.useEffect)((function(){f.wb().then((function(e){i({loading:!1,categories:e})}))}),[i]),t?(0,y.jsx)(c.Z,{children:(0,y.jsx)("div",{className:"App",children:(0,y.jsx)(e,{isLoading:s.loading,categories:s.categories})})}):(0,y.jsx)("p",{style:{fontSize:"25px"},children:"Inicia sesi\xf3n para ver todos los videos!"})}},2516:function(e,t,r){var n=r(1413),a=r(5987),o=(r(2791),r(184)),s=["isLoading"];t.Z=function(e){return function(t){var r=t.isLoading,i=(0,a.Z)(t,s);return r?(0,o.jsxs)("div",{style:{fontSize:"25px",display:"flex",justifyContent:"center",textAlign:"center",flexDirection:"column",alignItems:"center"},children:[(0,o.jsx)("div",{className:"spinner-grow text-light",role:"status",children:(0,o.jsx)("span",{className:"sr-only"})}),"Espera por favor"]}):(0,o.jsx)(e,(0,n.Z)({},i))}}},2918:function(e,t,r){r.d(t,{d:function(){return o}});var n=r(9439),a=r(2791),o=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=(0,a.useState)(e),r=(0,n.Z)(t,2),o=r[0],s=r[1],i=function(){return s(!0)},c=function(){return s(!1)};return[o,i,c]}},5764:function(e,t,r){r.d(t,{CX:function(){return c},wb:function(){return i},yr:function(){return u}});var n=r(4165),a=r(5861),o=r(7411),s="https://sccotview.com/api/categorias/",i=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get(s);case 2:if(200!==(t=e.sent).status){e.next=7;break}return e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.post(s,t);case 2:if(200!==(r=e.sent).status){e.next=7;break}return e.next=6,r.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.patch(s+t+"/",r);case 2:if(200!==(a=e.sent).status){e.next=5;break}return e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},1652:function(e,t,r){r.d(t,{Jp:function(){return h},PI:function(){return c},Zs:function(){return i},ff:function(){return d},gY:function(){return x},iA:function(){return p},jk:function(){return u},om:function(){return l},zj:function(){return f}});var n=r(4165),a=r(5861),o=r(7411),s="https://sccotview.com/api/videos/",i=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(s));case 2:if(200!==(t=e.sent).status){e.next=7;break}return e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(s,"listPeliculas/"));case 2:if(200!==(t=e.sent).status){e.next=7;break}return e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(s,"listCasos/"));case 2:if(200!==(t=e.sent).status){e.next=7;break}return e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(s).concat(t));case 2:if(200!==(r=e.sent).status){e.next=7;break}return e.next=6,r.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get(s+"retrieve/"+t);case 2:if(200!==(r=e.sent).status){e.next=5;break}return e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.post(s,t);case 2:if(200!==(r=e.sent).status){e.next=9;break}return e.next=6,r.data;case 6:case 12:return e.abrupt("return",e.sent);case 9:if(409!==r.status){e.next=13;break}return e.next=12,r.data;case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.put(s+t+"/",r);case 2:if(a=e.sent,console.log(a),200!==a.status){e.next=8;break}return e.next=7,a.data;case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),h=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.patch(s+t+"/",r);case 2:if(200!==(a=e.sent).status){e.next=5;break}return e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),x=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.delete("".concat(s).concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},8302:function(e,t,r){var n=r(7462),a=r(5987),o=r(2791),s=r(8182),i=r(8317),c=r(1122),u={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},l=o.forwardRef((function(e,t){var r=e.align,i=void 0===r?"inherit":r,l=e.classes,p=e.className,d=e.color,f=void 0===d?"initial":d,h=e.component,x=e.display,g=void 0===x?"initial":x,v=e.gutterBottom,m=void 0!==v&&v,Z=e.noWrap,y=void 0!==Z&&Z,b=e.paragraph,w=void 0!==b&&b,k=e.variant,j=void 0===k?"body1":k,C=e.variantMapping,S=void 0===C?u:C,I=(0,a.Z)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),N=h||(w?"p":S[j]||u[j])||"span";return o.createElement(N,(0,n.Z)({className:(0,s.Z)(l.root,p,"inherit"!==j&&l[j],"initial"!==f&&l["color".concat((0,c.Z)(f))],y&&l.noWrap,m&&l.gutterBottom,w&&l.paragraph,"inherit"!==i&&l["align".concat((0,c.Z)(i))],"initial"!==g&&l["display".concat((0,c.Z)(g))]),ref:t},I))}));t.Z=(0,i.Z)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(l)},8040:function(){},9629:function(){}}]);
//# sourceMappingURL=400.90167d3d.chunk.js.map