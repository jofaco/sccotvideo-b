"use strict";(self.webpackChunkvideoteca_frontend=self.webpackChunkvideoteca_frontend||[]).push([[695],{7411:function(e,t,r){var n=r(4165),a=r(5861),s=r(3263),o=r(9778),i="https://sccotview.com/api/",c=s.Z.create({baseURL:i,timeout:5e3,headers:{Authorization:localStorage.getItem("access_token")?"JWT "+localStorage.getItem("access_token"):null,"Content-Type":"multipart/form-data",accept:"application/json"}});c.interceptors.response.use((function(e){return e}),function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,s,l;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.config,"undefined"!==typeof t.response){e.next=4;break}return console.warn("A server/network error occurred. Looks like CORS might be the problem. Sorry about this - we will get it fixed shortly."),e.abrupt("return",Promise.reject(t));case 4:if(401!==t.response.status||r.url!==i+"api/token/refresh/"){e.next=7;break}return window.location.href="/loginuser/",e.abrupt("return",Promise.reject(t));case 7:if("token_not_valid"!==t.response.data.code||401!==t.response.status||"Unauthorized"!==t.response.statusText){e.next=26;break}if(!(a=localStorage.getItem("refresh_token"))){e.next=24;break}if(s=JSON.parse(o.lW.from(a.split(".")[1],"base64").toString()),l=Math.ceil(Date.now()/1e3),console.log(s.exp),!(s.exp>l)){e.next=17;break}return e.abrupt("return",c.post("api/token/refresh/",{refresh:a}).then((function(e){return localStorage.setItem("access_token",e.data.access_token),localStorage.setItem("refresh_token",e.data.refresh_token),c.defaults.headers.Authorization="JWT "+e.data.access_token,r.headers.Authorization="JWT "+e.data.access_token,c(r)})).catch((function(e){console.log(e)})));case 17:console.log("Refresh token is expired",s.exp,l),window.localStorage.removeItem("access_token"),window.localStorage.removeItem("refresh_token"),window.localStorage.removeItem("user"),window.location.href="/loginuser/";case 22:e.next=26;break;case 24:console.log("Refresh token not available."),window.location.href="/loginuser/";case 26:return 401===t.response.status&&(window.location.href="/loginuser/"),e.abrupt("return",Promise.reject(t));case 28:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.Z=c},3695:function(e,t,r){r.r(t),r.d(t,{default:function(){return Z}});var n=r(9439),a=r(2791),s=r(4165),o=r(5861),i=r(7689),c=(r(8040),r(1174),r(3712)),l=r(8596),u=r(3767),d=r(6151),p=r(2680),f=r(6849),h=r(1479),x=r(2918),v=r(184),m=function(e){var t=e.palabrasClaves,r=(0,i.s0)(),m=(0,x.d)(!1),b=(0,n.Z)(m,3),Z=b[0],g=b[1],k=b[2],j=(0,a.useState)(""),w=(0,n.Z)(j,2),y=w[0],C=w[1],S=(0,a.useState)({}),P=(0,n.Z)(S,2),_=P[0],I=P[1],N=(0,a.useState)(t),D=(0,n.Z)(N,2),A=D[0],R=D[1],F=(0,a.useState)({palabraClave:""}),T=(0,n.Z)(F,2),z=T[0],B=T[1],E=(0,a.useContext)(p.Z).user,L=(0,l.Z)((function(e){return{paper:{marginTop:e.spacing(0),marginBottom:e.spacing(10),display:"flex",flexDirection:"column",alignItems:"center"},title1:{textAlign:"center",color:"white"}}})),M=function(){var e=(0,o.Z)((0,s.Z)().mark((function e(t){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C(t.id),I(t),B({palabraClave:t.palabraClave}),g(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=(0,o.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C(null),I({}),B({palabraClave:""}),g(!0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=(0,o.Z)((0,s.Z)().mark((function e(){var t,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.kt();case 3:return t=e.sent,e.next=6,t;case 6:r=e.sent,R(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();(0,a.useEffect)((function(){E&&E.is_superuser?(J(),C(null)):r("/loginuser")}),[]);var W=L();return E?(0,v.jsxs)(c.Z,{children:[(0,v.jsx)("div",{className:W.paper,children:(0,v.jsx)("h1",{className:"mt-4 text-center",children:"Palabras Claves"})}),(0,v.jsx)(u.Z,{alignItems:"center",children:(0,v.jsx)(d.Z,{variant:"contained",color:"success",type:"submit",onClick:function(){return O()},children:"Registrar PalabraClave"})}),(0,v.jsx)("br",{}),(0,v.jsx)("br",{})," ",(0,v.jsx)("br",{}),(0,v.jsx)("div",{children:(0,v.jsx)("section",{className:"content",children:(0,v.jsx)("div",{className:"table-responsive table-condensed table-sm tabla",children:(0,v.jsxs)("table",{className:"table table-hover",id:"dataTableData",name:"dataTableData",style:{fontSize:11,textAlign:"center"},children:[(0,v.jsx)("thead",{className:W.title1,children:(0,v.jsxs)("tr",{children:[(0,v.jsx)("th",{style:{display:"none"},children:"Id"}),(0,v.jsx)("th",{children:"Codigo"}),(0,v.jsx)("th",{children:"PalabraClave"}),(0,v.jsx)("th",{})]})}),(0,v.jsx)("tbody",{style:{backgroundColor:"white"},children:0===A.length?(0,v.jsx)("tr",{children:(0,v.jsx)("td",{colSpan:11,children:"No hay datos"})}):A.map((function(e,t){return(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{style:{display:"none"},children:e.id}),(0,v.jsx)("td",{children:e.id}),(0,v.jsx)("td",{children:e.palabraClave}),(0,v.jsx)("td",{children:(0,v.jsx)("button",{className:"btn btn-outline-primary p-1 btn-sm float-right",type:"submit",onClick:function(){return M(e)},children:"editar"})})]},t)}))})]})})})}),(0,v.jsx)(h.Z,{handleClose:k,show:Z,palabraclave_id:y,currentItem:_,setPalabrasClaves:R,setFormData:B,newData:z})]}):(0,v.jsx)("p",{style:{fontSize:"25px"},children:"Inicia sesi\xf3n para ver todos los videos!"})},b=r(2516),Z=function(){var e=(0,b.Z)(m),t=(0,a.useContext)(p.Z).user,r=(0,a.useState)({loading:!0,palabrasClaves:null}),s=(0,n.Z)(r,2),o=s[0],i=s[1];return(0,a.useEffect)((function(){f.kt().then((function(e){i({loading:!1,palabrasClaves:e})}))}),[i]),t?(0,v.jsx)(c.Z,{children:(0,v.jsx)("div",{className:"App",children:(0,v.jsx)(e,{isLoading:o.loading,palabrasClaves:o.palabrasClaves})})}):(0,v.jsx)("p",{style:{fontSize:"25px"},children:"Inicia sesi\xf3n para ver todos los videos!"})}},1479:function(e,t,r){var n=r(4165),a=r(5861),s=r(4942),o=r(1413),i=r(5987),c=(r(2791),r(6849)),l=r(5342),u=r(3360),d=r(4437),p=r(8596),f=(r(9629),r(184)),h=["handleClose","show","palabraclave_id","currentItem","setFormData","newData"],x=(0,p.Z)((function(e){return{containerModal:{border:"2px solid #ccc",borderRadius:50,boxShadow:"4px 4px 4px 0px #5a28e550"},containerForm:{height:"3rem",background:"#BFF",border:"2px solid #ccc",borderRadius:50,boxShadow:"4px 4px 4px 0px #5a28e550"},"@media (max-width: 720px)":{root:{display:"flex"}}}}));t.Z=function(e){var t=e.handleClose,r=e.show,p=e.palabraclave_id,v=(e.currentItem,e.setFormData),m=e.newData,b=(0,i.Z)(e,h),Z=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=new FormData,e.prev=2,p){e.next=9;break}return r.append("palabraClave",m.palabraClave),e.next=7,c.eA(r);case 7:e.next=12;break;case 9:return r.append("palabraClave",m.palabraClave),e.next=12,c.Zb(p,r);case 12:return e.next=14,c.kt();case 14:return a=e.sent,e.next=17,a;case 17:s=e.sent,b.setPalabrasClaves(s),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(2),console.log(e.t0);case 24:case"end":return e.stop()}}),e,null,[[2,21]])})));return function(t){return e.apply(this,arguments)}}(),g=x();return(0,f.jsxs)(l.Z,{show:r,onHide:t,"aria-labelledby":"example-custom-modal-styling-title",contentClassName:g.cloud,centered:!0,children:[(0,f.jsx)(l.Z.Header,{closeButton:!0,children:(0,f.jsx)(l.Z.Title,{id:"tituloModal",className:"text-dark mx-2 mt-2",children:(0,f.jsxs)("h4",{children:[p?"Editar Registro":"Registrar"," Palabra clave"]})})}),(0,f.jsx)(l.Z.Body,{id:"bodyModal",children:(0,f.jsxs)(d.Z,{onSubmit:Z,children:[(0,f.jsx)(d.Z.Group,{className:"mb-2 ",controlId:"exampleForm.ControlInput1",children:(0,f.jsx)(d.Z.Control,{type:"text",className:g.containerForm,rows:1,name:"palabraClave",value:m.palabraClave||"",onChange:function(e){var t=e.target.name;v((0,o.Z)((0,o.Z)({},m),{},(0,s.Z)({},t,e.target.value)))}})}),(0,f.jsxs)(l.Z.Footer,{children:[(0,f.jsx)(u.Z,{variant:"secondary",onClick:t,children:"Close"}),(0,f.jsx)(u.Z,{variant:"primary",type:"submit",onClick:t,children:p?"Guardar Cambios":"Crear"})]})]})})]})}},2516:function(e,t,r){var n=r(1413),a=r(5987),s=(r(2791),r(184)),o=["isLoading"];t.Z=function(e){return function(t){var r=t.isLoading,i=(0,a.Z)(t,o);return r?(0,s.jsxs)("div",{className:"mt-4",style:{fontSize:"25px",display:"flex",justifyContent:"center",textAlign:"center",flexDirection:"column",alignItems:"center"},children:[(0,s.jsx)("div",{className:"spinner-grow text-light",role:"status",children:(0,s.jsx)("span",{className:"sr-only"})}),"Espera por favor"]}):(0,s.jsx)(e,(0,n.Z)({},i))}}},2918:function(e,t,r){r.d(t,{d:function(){return s}});var n=r(9439),a=r(2791),s=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=(0,a.useState)(e),r=(0,n.Z)(t,2),s=r[0],o=r[1],i=function(){return o(!0)},c=function(){return o(!1)};return[s,i,c]}},6849:function(e,t,r){r.d(t,{Zb:function(){return l},eA:function(){return c},kt:function(){return i}});var n=r(4165),a=r(5861),s=r(7411),o="https://sccotview.com/api/palabrasclaves/",i=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get(o);case 2:if(200!==(t=e.sent).status){e.next=7;break}return e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.post(o,t);case 2:if(r=e.sent,console.log("registrar palabras claves"),200!==r.status){e.next=8;break}return e.next=7,r.data;case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.patch(o+t+"/",r);case 2:if(200!==(a=e.sent).status){e.next=5;break}return e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},3767:function(e,t,r){var n=r(4942),a=r(3366),s=r(7462),o=r(2791),i=r(1184),c=r(5682),l=r(8519),u=r(2466),d=r(6934),p=r(1402),f=r(184),h=["component","direction","spacing","divider","children"];function x(e,t){var r=o.Children.toArray(e).filter(Boolean);return r.reduce((function(e,n,a){return e.push(n),a<r.length-1&&e.push(o.cloneElement(t,{key:"separator-".concat(a)})),e}),[])}var v=(0,d.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return[t.root]}})((function(e){var t=e.ownerState,r=e.theme,a=(0,s.Z)({display:"flex",flexDirection:"column"},(0,i.k9)({theme:r},(0,i.P$)({values:t.direction,breakpoints:r.breakpoints.values}),(function(e){return{flexDirection:e}})));if(t.spacing){var o=(0,c.hB)(r),l=Object.keys(r.breakpoints.values).reduce((function(e,r){return("object"===typeof t.spacing&&null!=t.spacing[r]||"object"===typeof t.direction&&null!=t.direction[r])&&(e[r]=!0),e}),{}),d=(0,i.P$)({values:t.direction,base:l}),p=(0,i.P$)({values:t.spacing,base:l});"object"===typeof d&&Object.keys(d).forEach((function(e,t,r){if(!d[e]){var n=t>0?d[r[t-1]]:"column";d[e]=n}}));a=(0,u.Z)(a,(0,i.k9)({theme:r},p,(function(e,r){return{"& > :not(style) + :not(style)":(0,n.Z)({margin:0},"margin".concat((a=r?d[r]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[a])),(0,c.NA)(o,e))};var a})))}return a=(0,i.dt)(r.breakpoints,a)})),m=o.forwardRef((function(e,t){var r=(0,p.Z)({props:e,name:"MuiStack"}),n=(0,l.Z)(r),o=n.component,i=void 0===o?"div":o,c=n.direction,u=void 0===c?"column":c,d=n.spacing,m=void 0===d?0:d,b=n.divider,Z=n.children,g=(0,a.Z)(n,h),k={direction:u,spacing:m};return(0,f.jsx)(v,(0,s.Z)({as:i,ownerState:k,ref:t},g,{children:b?x(Z,b):Z}))}));t.Z=m},8519:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(3433),a=r(7462),s=r(3366),o=r(2466),i=r(7416),c=["sx"];function l(e){var t,r=e.sx,l=function(e){var t,r,n={systemProps:{},otherProps:{}},a=null!=(t=null==e||null==(r=e.theme)?void 0:r.unstable_sxConfig)?t:i.Z;return Object.keys(e).forEach((function(t){a[t]?n.systemProps[t]=e[t]:n.otherProps[t]=e[t]})),n}((0,s.Z)(e,c)),u=l.systemProps,d=l.otherProps;return t=Array.isArray(r)?[u].concat((0,n.Z)(r)):"function"===typeof r?function(){var e=r.apply(void 0,arguments);return(0,o.P)(e)?(0,a.Z)({},u,e):u}:(0,a.Z)({},u,r),(0,a.Z)({},d,{sx:t})}},8040:function(){},9629:function(){}}]);
//# sourceMappingURL=695.0d57c6b1.chunk.js.map