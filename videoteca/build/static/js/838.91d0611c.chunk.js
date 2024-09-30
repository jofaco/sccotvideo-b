"use strict";(self.webpackChunkvideoteca_frontend=self.webpackChunkvideoteca_frontend||[]).push([[838],{7411:function(e,t,r){var n=r(4165),a=r(5861),o=r(3263),s=r(9778),i="http://sccotview.com/api/",c=o.Z.create({baseURL:i,timeout:5e3,headers:{Authorization:localStorage.getItem("access_token")?"JWT "+localStorage.getItem("access_token"):null,"Content-Type":"multipart/form-data",accept:"application/json"}});c.interceptors.response.use((function(e){return e}),function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,o,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.config,"undefined"!==typeof t.response){e.next=4;break}return console.warn("A server/network error occurred. Looks like CORS might be the problem. Sorry about this - we will get it fixed shortly."),e.abrupt("return",Promise.reject(t));case 4:if(401!==t.response.status||r.url!==i+"api/token/refresh/"){e.next=7;break}return window.location.href="/loginuser/",e.abrupt("return",Promise.reject(t));case 7:if("token_not_valid"!==t.response.data.code||401!==t.response.status||"Unauthorized"!==t.response.statusText){e.next=26;break}if(!(a=localStorage.getItem("refresh_token"))){e.next=24;break}if(o=JSON.parse(s.lW.from(a.split(".")[1],"base64").toString()),u=Math.ceil(Date.now()/1e3),console.log(o.exp),!(o.exp>u)){e.next=17;break}return e.abrupt("return",c.post("api/token/refresh/",{refresh:a}).then((function(e){return localStorage.setItem("access_token",e.data.access_token),localStorage.setItem("refresh_token",e.data.refresh_token),c.defaults.headers.Authorization="JWT "+e.data.access_token,r.headers.Authorization="JWT "+e.data.access_token,c(r)})).catch((function(e){console.log(e)})));case 17:console.log("Refresh token is expired",o.exp,u),window.localStorage.removeItem("access_token"),window.localStorage.removeItem("refresh_token"),window.localStorage.removeItem("user"),window.location.href="/loginuser/";case 22:e.next=26;break;case 24:console.log("Refresh token not available."),window.location.href="/loginuser/";case 26:return 401===t.response.status&&(window.location.href="/loginuser/"),e.abrupt("return",Promise.reject(t));case 28:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.Z=c},2838:function(e,t,r){r.r(t),r.d(t,{default:function(){return T}});var n=r(9439),a=r(2791),o=r(4165),s=r(5861),i=r(7689),c=(r(8040),r(1174),r(3712)),u=r(8596),l=r(8302),p=r(3767),d=r(6151),h=r(2680),m=r(6639),f=r(4942),x=r(1413),v=r(5987),g=r(3927),Z=r(5342),y=r(3360),b=r(4437),j=(r(9629),r(184)),w=["handleClose","show","temporada_id","currentItem","setFormData","newData","listSeries"],k=(0,u.Z)((function(e){return{containerModal:{border:"2px solid #ccc",borderRadius:50,boxShadow:"4px 4px 4px 0px #5a28e550"},containerForm:{height:"3rem",background:"#BFF",border:"2px solid #ccc",borderRadius:50,boxShadow:"4px 4px 4px 0px #5a28e550"},"@media (max-width: 720px)":{root:{display:"flex"}}}})),S=function(e){var t=e.handleClose,r=e.show,n=e.temporada_id,a=(e.currentItem,e.setFormData),i=e.newData,c=e.listSeries,u=(0,v.Z)(e,w),l=function(e){var t=e.target.name;a((0,x.Z)((0,x.Z)({},i),{},(0,f.Z)({},t,e.target.value)))},p=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(t){var r,a,s;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=new FormData,e.prev=2,n){e.next=13;break}return r.append("temporada",i.temporada),r.append("temporada_letras",i.temporada_letras),r.append("temporada_numero",i.temporada_numero),r.append("description",i.description),r.append("serie",i.serie),e.next=11,m.DN(r);case 11:e.next=20;break;case 13:return r.append("temporada",i.temporada),r.append("temporada_letras",i.temporada_letras),r.append("temporada_numero",i.temporada_numero),r.append("description",i.description),r.append("serie",i.serie),e.next=20,m.C1(n,r);case 20:return e.next=22,m.xI();case 22:return a=e.sent,e.next=25,a;case 25:s=e.sent,u.setTemporadas(s),e.next=32;break;case 29:e.prev=29,e.t0=e.catch(2),console.log(e.t0);case 32:case"end":return e.stop()}}),e,null,[[2,29]])})));return function(t){return e.apply(this,arguments)}}(),d=k();return(0,j.jsx)(g.S,{children:(0,j.jsxs)(Z.Z,{show:r,onHide:t,"aria-labelledby":"example-custom-modal-styling-title",contentClassName:d.cloud,centered:!0,children:[(0,j.jsx)(Z.Z.Header,{closeButton:!0,children:(0,j.jsx)(Z.Z.Title,{id:"tituloModal",children:(0,j.jsx)("h2",{children:n?"Editar Registro":"Crear Registro"})})}),(0,j.jsx)(Z.Z.Body,{id:"bodyModal",children:(0,j.jsxs)(b.Z,{onSubmit:p,children:[(0,j.jsx)(b.Z.Group,{className:"mb-2 ",controlId:"exampleForm.ControlInput1",children:(0,j.jsx)(b.Z.Control,{type:"text",name:"temporada",placeholder:"Nombre de la temporada",value:i.temporada||"",onChange:l})}),(0,j.jsx)("br",{}),(0,j.jsx)(b.Z.Group,{className:"mb-2 ",controlId:"exampleForm.ControlInput1",children:(0,j.jsx)(b.Z.Control,{type:"text",name:"temporada_letras",placeholder:"Temporada en letras",value:i.temporada_letras||"",onChange:l})}),(0,j.jsx)("br",{}),(0,j.jsx)(b.Z.Group,{className:"mb-2 ",controlId:"exampleForm.ControlInput1",children:(0,j.jsx)(b.Z.Control,{type:"number",name:"temporada_numero",placeholder:"Temporada en n\xfamero",value:i.temporada_numero||null,onChange:l})}),(0,j.jsx)("br",{}),(0,j.jsx)(b.Z.Group,{className:"mb-2 ",controlId:"exampleForm.ControlInput1",children:(0,j.jsx)(b.Z.Control,{as:"textarea",rows:3,name:"description",placeholder:"Descripci\xf3n de la temporada",value:i.description||"",onChange:l})}),(0,j.jsx)("br",{}),(0,j.jsx)(b.Z.Group,{className:"mb-2 ",controlId:"exampleForm.ControlInput1",children:(0,j.jsx)(b.Z.Select,{name:"serie",placeholder:"Serie a la que pertenece",value:i.serie||2,onChange:function(e){var t=e.target,r=t.name,n=Array.from(t.selectedOptions,(function(e){return e.value}));a((0,x.Z)((0,x.Z)({},i),{},(0,f.Z)({},r,n)))},children:c.map((function(e,t){return(0,j.jsx)("option",{value:e.id,children:e.serie},e.id)}))})}),(0,j.jsx)("br",{}),(0,j.jsxs)(Z.Z.Footer,{children:[(0,j.jsx)(y.Z,{variant:"secondary",onClick:t,children:"Close"}),(0,j.jsx)(y.Z,{variant:"primary",type:"submit",onClick:t,children:n?"Guardar Cambios":"Crear"})]})]})})]})})},_=r(6542),C=r(2918),I=function(e){var t=e.temporadas,r=(0,i.s0)(),f=(0,a.useState)(null),x=(0,n.Z)(f,2),v=x[0],g=x[1],Z=(0,C.d)(!1),y=(0,n.Z)(Z,3),b=y[0],w=y[1],k=y[2],I=(0,a.useState)(""),N=(0,n.Z)(I,2),T=N[0],D=N[1],P=(0,a.useState)(null),A=(0,n.Z)(P,2),R=A[0],B=A[1],F=(0,a.useState)(t),E=(0,n.Z)(F,2),M=E[0],z=E[1],G=(0,a.useState)({temporada:"",temporada_letras:"",temporada_numero:0,description:"",serie:1}),O=(0,n.Z)(G,2),W=O[0],L=O[1],J=(0,a.useContext)(h.Z).user,H=(0,u.Z)((function(e){return{paper:{marginTop:e.spacing(0),marginBottom:e.spacing(10),display:"flex",flexDirection:"column",alignItems:"center"},title1:{textAlign:"center",color:"white"}}})),$=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(t){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:D(t.id),B(t),L({temporada:t.temporada,temporada_letras:t.temporada_letras,temporada_numero:t.temporada_numero,description:t.description,serie:t.serie}),w(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:D(null),B({}),L({temporada:"",temporada_letras:"",temporada_numero:0,description:"",serie:1}),w(!0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(){var t,r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.xI();case 3:return t=e.sent,e.next=6,t;case 6:r=e.sent,z(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(){var t,r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_._G();case 3:return t=e.sent,e.next=6,t;case 6:r=e.sent,g(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();(0,a.useEffect)((function(){J?(K(),q(),D(null)):r("/loginuser")}),[]);var Q=H();return J&&v?(0,j.jsxs)(c.Z,{children:[(0,j.jsx)("div",{className:Q.paper,children:(0,j.jsx)(l.Z,{component:"h1",variant:"h3",children:"Temporadas"})}),(0,j.jsx)(p.Z,{alignItems:"center",children:(0,j.jsx)(d.Z,{variant:"contained",color:"success",type:"submit",onClick:function(){return U()},children:"Registrar Temporada"})}),(0,j.jsx)("br",{}),(0,j.jsx)("br",{})," ",(0,j.jsx)("br",{}),(0,j.jsx)("div",{children:(0,j.jsx)("section",{className:"content",children:(0,j.jsx)("div",{className:"table-responsive table-condensed table-sm tabla",children:(0,j.jsxs)("table",{className:"table table-hover",id:"dataTableData",name:"dataTableData",style:{fontSize:11,textAlign:"center"},children:[(0,j.jsx)("thead",{className:Q.title1,children:(0,j.jsxs)("tr",{children:[(0,j.jsx)("th",{style:{display:"none"},children:"Id"}),(0,j.jsx)("th",{children:"Codigo"}),(0,j.jsx)("th",{children:"Temporada"}),(0,j.jsx)("th",{children:"Temporada en tetras"}),(0,j.jsx)("th",{children:"Temporada en n\xfamero"}),(0,j.jsx)("th",{children:"Descripci\xf3n"}),(0,j.jsx)("th",{children:"Fecha de registro"}),(0,j.jsx)("th",{children:"Serie"}),(0,j.jsx)("th",{})]})}),(0,j.jsx)("tbody",{style:{backgroundColor:"white"},children:0===M.length?(0,j.jsx)("tr",{children:(0,j.jsx)("td",{colSpan:11,children:"No hay datos"})}):M.map((function(e,t){return(0,j.jsxs)("tr",{children:[(0,j.jsx)("td",{style:{display:"none"},children:e.id}),(0,j.jsx)("td",{children:e.id}),(0,j.jsx)("td",{children:e.temporada}),(0,j.jsx)("td",{children:e.temporada_letras}),(0,j.jsx)("td",{children:e.temporada_numero}),(0,j.jsx)("td",{children:e.description}),(0,j.jsx)("td",{children:e.create_date}),(0,j.jsx)("td",{children:e.serie}),(0,j.jsx)("td",{children:(0,j.jsx)("button",{className:"btn btn-warning btn-sm float-right",type:"submit",onClick:function(){return $(e)},children:"editar"})})]},t)}))})]})})})}),(0,j.jsx)(S,{handleClose:k,show:b,temporada_id:T,currentItem:R,setTemporadas:z,setFormData:L,newData:W,listSeries:v})]}):(0,j.jsx)("p",{style:{fontSize:"25px"},children:"Inicia sesi\xf3n para ver todos los videos!"})},N=r(2516);var T=function(){var e=(0,N.Z)(I),t=(0,a.useContext)(h.Z).user,r=(0,a.useState)({loading:!0,temporadas:null}),o=(0,n.Z)(r,2),s=o[0],i=o[1];return(0,a.useEffect)((function(){m.xI().then((function(e){i({loading:!1,temporadas:e})}))}),[i]),t?(0,j.jsx)(c.Z,{children:(0,j.jsx)("div",{className:"App",children:(0,j.jsx)(e,{isLoading:s.loading,temporadas:s.temporadas})})}):(0,j.jsx)("p",{style:{fontSize:"25px"},children:"Inicia sesi\xf3n para ver todos los videos!"})}},3927:function(e,t,r){r.d(t,{S:function(){return u}});var n=r(5671),a=r(3144),o=r(136),s=r(7277),i=r(2791),c=r(184),u=function(e){(0,o.Z)(r,e);var t=(0,s.Z)(r);function r(e){var a;return(0,n.Z)(this,r),(a=t.call(this,e)).reloadPage=function(){window.location.reload()},a.state={error:null},a}return(0,a.Z)(r,[{key:"componentDidCatch",value:function(e){this.setState({error:e})}},{key:"render",value:function(){var e=this.state.error;return e?(0,c.jsxs)("div",{className:"alert alert-warning",role:"alert",children:[(0,c.jsx)("h3",{children:"Ha ocurrido un error por favor volver a cargar la p\xe1gina"}),(0,c.jsx)("p",{children:e.toString()}),(0,c.jsx)("button",{onClick:this.reloadPage,className:"btn btn-light",children:"Recargar p\xe1gina"})]}):this.props.children}}]),r}(i.Component)},2516:function(e,t,r){var n=r(1413),a=r(5987),o=(r(2791),r(184)),s=["isLoading"];t.Z=function(e){return function(t){var r=t.isLoading,i=(0,a.Z)(t,s);return r?(0,o.jsxs)("div",{style:{fontSize:"25px",display:"flex",justifyContent:"center",textAlign:"center",flexDirection:"column",alignItems:"center"},children:[(0,o.jsx)("div",{className:"spinner-grow text-light",role:"status",children:(0,o.jsx)("span",{className:"sr-only"})}),"Espera por favor"]}):(0,o.jsx)(e,(0,n.Z)({},i))}}},2918:function(e,t,r){r.d(t,{d:function(){return o}});var n=r(9439),a=r(2791),o=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=(0,a.useState)(e),r=(0,n.Z)(t,2),o=r[0],s=r[1],i=function(){return s(!0)},c=function(){return s(!1)};return[o,i,c]}},6542:function(e,t,r){r.d(t,{Ed:function(){return c},Zg:function(){return l},_G:function(){return i},dS:function(){return u}});var n=r(4165),a=r(5861),o=r(7411),s="http://sccotview.com/api/series/",i=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get(s);case 2:if(200!==(t=e.sent).status){e.next=7;break}return e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.post(s,t);case 2:if(200!==(r=e.sent).status){e.next=7;break}return e.next=6,r.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(s).concat(t));case 2:if(200!==(r=e.sent).status){e.next=7;break}return e.next=6,r.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.patch(s+t+"/",r);case 2:if(200!==(a=e.sent).status){e.next=5;break}return e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},6639:function(e,t,r){r.d(t,{C1:function(){return l},DN:function(){return c},op:function(){return u},xI:function(){return i}});var n=r(4165),a=r(5861),o=r(7411),s="http://sccotview.com/api/temporadas/",i=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get(s);case 2:if(200!==(t=e.sent).status){e.next=7;break}return e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.post(s,t);case 2:if(200!==(r=e.sent).status){e.next=7;break}return e.next=6,r.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(s).concat(t));case 2:if(200!==(r=e.sent).status){e.next=7;break}return e.next=6,r.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.patch(s+t+"/",r);case 2:if(200!==(a=e.sent).status){e.next=5;break}return e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},8302:function(e,t,r){var n=r(7462),a=r(5987),o=r(2791),s=r(8182),i=r(8317),c=r(1122),u={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},l=o.forwardRef((function(e,t){var r=e.align,i=void 0===r?"inherit":r,l=e.classes,p=e.className,d=e.color,h=void 0===d?"initial":d,m=e.component,f=e.display,x=void 0===f?"initial":f,v=e.gutterBottom,g=void 0!==v&&v,Z=e.noWrap,y=void 0!==Z&&Z,b=e.paragraph,j=void 0!==b&&b,w=e.variant,k=void 0===w?"body1":w,S=e.variantMapping,_=void 0===S?u:S,C=(0,a.Z)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),I=m||(j?"p":_[k]||u[k])||"span";return o.createElement(I,(0,n.Z)({className:(0,s.Z)(l.root,p,"inherit"!==k&&l[k],"initial"!==h&&l["color".concat((0,c.Z)(h))],y&&l.noWrap,g&&l.gutterBottom,j&&l.paragraph,"inherit"!==i&&l["align".concat((0,c.Z)(i))],"initial"!==x&&l["display".concat((0,c.Z)(x))]),ref:t},C))}));t.Z=(0,i.Z)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(l)},3767:function(e,t,r){var n=r(4942),a=r(3366),o=r(7462),s=r(2791),i=r(1184),c=r(5682),u=r(8519),l=r(2466),p=r(6934),d=r(1402),h=r(184),m=["component","direction","spacing","divider","children"];function f(e,t){var r=s.Children.toArray(e).filter(Boolean);return r.reduce((function(e,n,a){return e.push(n),a<r.length-1&&e.push(s.cloneElement(t,{key:"separator-".concat(a)})),e}),[])}var x=(0,p.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return[t.root]}})((function(e){var t=e.ownerState,r=e.theme,a=(0,o.Z)({display:"flex",flexDirection:"column"},(0,i.k9)({theme:r},(0,i.P$)({values:t.direction,breakpoints:r.breakpoints.values}),(function(e){return{flexDirection:e}})));if(t.spacing){var s=(0,c.hB)(r),u=Object.keys(r.breakpoints.values).reduce((function(e,r){return("object"===typeof t.spacing&&null!=t.spacing[r]||"object"===typeof t.direction&&null!=t.direction[r])&&(e[r]=!0),e}),{}),p=(0,i.P$)({values:t.direction,base:u}),d=(0,i.P$)({values:t.spacing,base:u});"object"===typeof p&&Object.keys(p).forEach((function(e,t,r){if(!p[e]){var n=t>0?p[r[t-1]]:"column";p[e]=n}}));a=(0,l.Z)(a,(0,i.k9)({theme:r},d,(function(e,r){return{"& > :not(style) + :not(style)":(0,n.Z)({margin:0},"margin".concat((a=r?p[r]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[a])),(0,c.NA)(s,e))};var a})))}return a=(0,i.dt)(r.breakpoints,a)})),v=s.forwardRef((function(e,t){var r=(0,d.Z)({props:e,name:"MuiStack"}),n=(0,u.Z)(r),s=n.component,i=void 0===s?"div":s,c=n.direction,l=void 0===c?"column":c,p=n.spacing,v=void 0===p?0:p,g=n.divider,Z=n.children,y=(0,a.Z)(n,m),b={direction:l,spacing:v};return(0,h.jsx)(x,(0,o.Z)({as:i,ownerState:b,ref:t},y,{children:g?f(Z,g):Z}))}));t.Z=v},8519:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(3433),a=r(7462),o=r(3366),s=r(2466),i=r(7416),c=["sx"];function u(e){var t,r=e.sx,u=function(e){var t,r,n={systemProps:{},otherProps:{}},a=null!=(t=null==e||null==(r=e.theme)?void 0:r.unstable_sxConfig)?t:i.Z;return Object.keys(e).forEach((function(t){a[t]?n.systemProps[t]=e[t]:n.otherProps[t]=e[t]})),n}((0,o.Z)(e,c)),l=u.systemProps,p=u.otherProps;return t=Array.isArray(r)?[l].concat((0,n.Z)(r)):"function"===typeof r?function(){var e=r.apply(void 0,arguments);return(0,s.P)(e)?(0,a.Z)({},l,e):l}:(0,a.Z)({},l,r),(0,a.Z)({},p,{sx:t})}},8040:function(){},9629:function(){}}]);
//# sourceMappingURL=838.91d0611c.chunk.js.map