"use strict";(self.webpackChunkvideoteca_frontend=self.webpackChunkvideoteca_frontend||[]).push([[838],{7411:function(e,t,r){var n=r(4165),a=r(5861),o=r(3263),s=r(9778),c="https://sccotview.com/api/",i=o.Z.create({baseURL:c,timeout:5e3,headers:{Authorization:localStorage.getItem("access_token")?"JWT "+localStorage.getItem("access_token"):null,"Content-Type":"multipart/form-data",accept:"application/json"}});i.interceptors.response.use((function(e){return e}),function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,o,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.config,"undefined"!==typeof t.response){e.next=4;break}return console.warn("A server/network error occurred. Looks like CORS might be the problem. Sorry about this - we will get it fixed shortly."),e.abrupt("return",Promise.reject(t));case 4:if(401!==t.response.status||r.url!==c+"api/token/refresh/"){e.next=7;break}return window.location.href="/loginuser/",e.abrupt("return",Promise.reject(t));case 7:if("token_not_valid"!==t.response.data.code||401!==t.response.status||"Unauthorized"!==t.response.statusText){e.next=26;break}if(!(a=localStorage.getItem("refresh_token"))){e.next=24;break}if(o=JSON.parse(s.lW.from(a.split(".")[1],"base64").toString()),u=Math.ceil(Date.now()/1e3),console.log(o.exp),!(o.exp>u)){e.next=17;break}return e.abrupt("return",i.post("api/token/refresh/",{refresh:a}).then((function(e){return localStorage.setItem("access_token",e.data.access_token),localStorage.setItem("refresh_token",e.data.refresh_token),i.defaults.headers.Authorization="JWT "+e.data.access_token,r.headers.Authorization="JWT "+e.data.access_token,i(r)})).catch((function(e){console.log(e)})));case 17:console.log("Refresh token is expired",o.exp,u),window.localStorage.removeItem("access_token"),window.localStorage.removeItem("refresh_token"),window.localStorage.removeItem("user"),window.location.href="/loginuser/";case 22:e.next=26;break;case 24:console.log("Refresh token not available."),window.location.href="/loginuser/";case 26:return 401===t.response.status&&(window.location.href="/loginuser/"),e.abrupt("return",Promise.reject(t));case 28:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.Z=i},2838:function(e,t,r){r.r(t),r.d(t,{default:function(){return N}});var n=r(9439),a=r(2791),o=r(4165),s=r(5861),c=r(7689),i=(r(8040),r(1174),r(3712)),u=r(8596),l=r(3767),d=r(6151),p=r(2680),m=r(6639),h=r(4942),x=r(1413),f=r(5987),v=r(3927),Z=r(5342),b=r(3360),j=r(4437),g=(r(9629),r(184)),w=["handleClose","show","temporada_id","currentItem","setFormData","newData","listSeries"],k=(0,u.Z)((function(e){return{containerModal:{border:"2px solid #ccc",borderRadius:50,boxShadow:"4px 4px 4px 0px #5a28e550"},containerForm:{height:"3rem",background:"#BFF",border:"2px solid #ccc",borderRadius:50,boxShadow:"4px 4px 4px 0px #5a28e550"},"@media (max-width: 720px)":{root:{display:"flex"}}}})),y=function(e){var t=e.handleClose,r=e.show,n=e.temporada_id,a=(e.currentItem,e.setFormData),c=e.newData,i=e.listSeries,u=(0,f.Z)(e,w),l=function(e){var t=e.target.name;a((0,x.Z)((0,x.Z)({},c),{},(0,h.Z)({},t,e.target.value)))},d=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(t){var r,a,s;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=new FormData,e.prev=2,n){e.next=13;break}return r.append("temporada",c.temporada),r.append("temporada_letras",c.temporada_letras),r.append("temporada_numero",c.temporada_numero),r.append("description",c.description),r.append("serie",c.serie),e.next=11,m.DN(r);case 11:e.next=20;break;case 13:return r.append("temporada",c.temporada),r.append("temporada_letras",c.temporada_letras),r.append("temporada_numero",c.temporada_numero),r.append("description",c.description),r.append("serie",c.serie),e.next=20,m.C1(n,r);case 20:return e.next=22,m.xI();case 22:return a=e.sent,e.next=25,a;case 25:s=e.sent,u.setTemporadas(s),e.next=32;break;case 29:e.prev=29,e.t0=e.catch(2),console.log(e.t0);case 32:case"end":return e.stop()}}),e,null,[[2,29]])})));return function(t){return e.apply(this,arguments)}}(),p=k();return(0,g.jsx)(v.S,{children:(0,g.jsxs)(Z.Z,{show:r,onHide:t,"aria-labelledby":"example-custom-modal-styling-title",contentClassName:p.cloud,centered:!0,children:[(0,g.jsx)(Z.Z.Header,{closeButton:!0,children:(0,g.jsx)(Z.Z.Title,{id:"tituloModal",children:(0,g.jsx)("h2",{children:n?"Editar Registro":"Crear Registro"})})}),(0,g.jsx)(Z.Z.Body,{id:"bodyModal",children:(0,g.jsxs)(j.Z,{onSubmit:d,children:[(0,g.jsx)(j.Z.Group,{className:"mb-2 ",controlId:"exampleForm.ControlInput1",children:(0,g.jsx)(j.Z.Control,{type:"text",name:"temporada",placeholder:"Nombre de la temporada",value:c.temporada||"",onChange:l})}),(0,g.jsx)("br",{}),(0,g.jsx)(j.Z.Group,{className:"mb-2 ",controlId:"exampleForm.ControlInput1",children:(0,g.jsx)(j.Z.Control,{type:"text",name:"temporada_letras",placeholder:"Temporada en letras",value:c.temporada_letras||"",onChange:l})}),(0,g.jsx)("br",{}),(0,g.jsx)(j.Z.Group,{className:"mb-2 ",controlId:"exampleForm.ControlInput1",children:(0,g.jsx)(j.Z.Control,{type:"number",name:"temporada_numero",placeholder:"Temporada en n\xfamero",value:c.temporada_numero||null,onChange:l})}),(0,g.jsx)("br",{}),(0,g.jsx)(j.Z.Group,{className:"mb-2 ",controlId:"exampleForm.ControlInput1",children:(0,g.jsx)(j.Z.Control,{as:"textarea",rows:3,name:"description",placeholder:"Descripci\xf3n de la temporada",value:c.description||"",onChange:l})}),(0,g.jsx)("br",{}),(0,g.jsx)(j.Z.Group,{className:"mb-2 ",controlId:"exampleForm.ControlInput1",children:(0,g.jsx)(j.Z.Select,{name:"serie",placeholder:"Serie a la que pertenece",value:c.serie||2,onChange:function(e){var t=e.target,r=t.name,n=Array.from(t.selectedOptions,(function(e){return e.value}));a((0,x.Z)((0,x.Z)({},c),{},(0,h.Z)({},r,n)))},children:i.map((function(e,t){return(0,g.jsx)("option",{value:e.id,children:e.serie},e.id)}))})}),(0,g.jsx)("br",{}),(0,g.jsxs)(Z.Z.Footer,{children:[(0,g.jsx)(b.Z,{variant:"secondary",onClick:t,children:"Close"}),(0,g.jsx)(b.Z,{variant:"primary",type:"submit",onClick:t,children:n?"Guardar Cambios":"Crear"})]})]})})]})})},_=r(6542),C=r(2918),S=function(e){var t=e.temporadas,r=(0,c.s0)(),h=(0,a.useState)(null),x=(0,n.Z)(h,2),f=x[0],v=x[1],Z=(0,C.d)(!1),b=(0,n.Z)(Z,3),j=b[0],w=b[1],k=b[2],S=(0,a.useState)(""),I=(0,n.Z)(S,2),N=I[0],D=I[1],T=(0,a.useState)(null),F=(0,n.Z)(T,2),R=F[0],A=F[1],z=(0,a.useState)(t),G=(0,n.Z)(z,2),E=G[0],L=G[1],P=(0,a.useState)({temporada:"",temporada_letras:"",temporada_numero:0,description:"",serie:1}),B=(0,n.Z)(P,2),J=B[0],M=B[1],W=(0,a.useContext)(p.Z).user,H=(0,u.Z)((function(e){return{paper:{marginTop:e.spacing(0),marginBottom:e.spacing(10),display:"flex",flexDirection:"column",alignItems:"center"},title1:{textAlign:"center",color:"white"}}})),O=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(t){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:D(t.id),A(t),M({temporada:t.temporada,temporada_letras:t.temporada_letras,temporada_numero:t.temporada_numero,description:t.description,serie:t.serie}),w(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:D(null),A({}),M({temporada:"",temporada_letras:"",temporada_numero:0,description:"",serie:1}),w(!0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(){var t,r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.xI();case 3:return t=e.sent,e.next=6,t;case 6:r=e.sent,L(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(){var t,r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_._G();case 3:return t=e.sent,e.next=6,t;case 6:r=e.sent,v(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();(0,a.useEffect)((function(){W&&W.is_superuser?(K(),q(),D(null)):r("/loginuser")}),[]);var Q=H();return W&&f?(0,g.jsxs)(i.Z,{children:[(0,g.jsx)("div",{className:Q.paper,children:(0,g.jsx)("h1",{className:"mt-4 text-center",children:"Temporadas"})}),(0,g.jsx)(l.Z,{alignItems:"center",children:(0,g.jsx)(d.Z,{variant:"contained",color:"success",type:"submit",onClick:function(){return U()},children:"Registrar Temporada"})}),(0,g.jsx)("br",{}),(0,g.jsx)("br",{})," ",(0,g.jsx)("br",{}),(0,g.jsx)("div",{children:(0,g.jsx)("section",{className:"content",children:(0,g.jsx)("div",{className:"table-responsive table-condensed table-sm tabla",children:(0,g.jsxs)("table",{className:"table table-hover",id:"dataTableData",name:"dataTableData",style:{fontSize:11,textAlign:"center"},children:[(0,g.jsx)("thead",{className:Q.title1,children:(0,g.jsxs)("tr",{children:[(0,g.jsx)("th",{style:{display:"none"},children:"Id"}),(0,g.jsx)("th",{children:"Codigo"}),(0,g.jsx)("th",{children:"Temporada"}),(0,g.jsx)("th",{children:"Temporada en tetras"}),(0,g.jsx)("th",{children:"Temporada en n\xfamero"}),(0,g.jsx)("th",{children:"Descripci\xf3n"}),(0,g.jsx)("th",{children:"Fecha de registro"}),(0,g.jsx)("th",{children:"Serie"}),(0,g.jsx)("th",{})]})}),(0,g.jsx)("tbody",{style:{backgroundColor:"white"},children:0===E.length?(0,g.jsx)("tr",{children:(0,g.jsx)("td",{colSpan:11,children:"No hay datos"})}):E.map((function(e,t){return(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{style:{display:"none"},children:e.id}),(0,g.jsx)("td",{children:e.id}),(0,g.jsx)("td",{children:e.temporada}),(0,g.jsx)("td",{children:e.temporada_letras}),(0,g.jsx)("td",{children:e.temporada_numero}),(0,g.jsx)("td",{children:e.description}),(0,g.jsx)("td",{children:e.create_date}),(0,g.jsx)("td",{children:e.serie}),(0,g.jsx)("td",{children:(0,g.jsx)("button",{className:"btn btn-outline-primary p-1 btn-sm float-right",type:"submit",onClick:function(){return O(e)},children:"editar"})})]},t)}))})]})})})}),(0,g.jsx)(y,{handleClose:k,show:j,temporada_id:N,currentItem:R,setTemporadas:L,setFormData:M,newData:J,listSeries:f})]}):(0,g.jsx)("p",{style:{fontSize:"25px"},children:"Inicia sesi\xf3n para ver todos los videos!"})},I=r(2516);var N=function(){var e=(0,I.Z)(S),t=(0,a.useContext)(p.Z).user,r=(0,a.useState)({loading:!0,temporadas:null}),o=(0,n.Z)(r,2),s=o[0],c=o[1];return(0,a.useEffect)((function(){m.xI().then((function(e){c({loading:!1,temporadas:e})}))}),[c]),t?(0,g.jsx)(i.Z,{children:(0,g.jsx)("div",{className:"App",children:(0,g.jsx)(e,{isLoading:s.loading,temporadas:s.temporadas})})}):(0,g.jsx)("p",{style:{fontSize:"25px"},children:"Inicia sesi\xf3n para ver todos los videos!"})}},3927:function(e,t,r){r.d(t,{S:function(){return u}});var n=r(5671),a=r(3144),o=r(136),s=r(7277),c=r(2791),i=r(184),u=function(e){(0,o.Z)(r,e);var t=(0,s.Z)(r);function r(e){var a;return(0,n.Z)(this,r),(a=t.call(this,e)).reloadPage=function(){window.location.reload()},a.state={error:null},a}return(0,a.Z)(r,[{key:"componentDidCatch",value:function(e){this.setState({error:e})}},{key:"render",value:function(){var e=this.state.error;return e?(0,i.jsxs)("div",{className:"alert alert-warning",role:"alert",children:[(0,i.jsx)("h3",{children:"Ha ocurrido un error por favor volver a cargar la p\xe1gina"}),(0,i.jsx)("p",{children:e.toString()}),(0,i.jsx)("button",{onClick:this.reloadPage,className:"btn btn-light mt-4",children:"Recargar p\xe1gina"})]}):this.props.children}}]),r}(c.Component)},2516:function(e,t,r){var n=r(1413),a=r(5987),o=(r(2791),r(184)),s=["isLoading"];t.Z=function(e){return function(t){var r=t.isLoading,c=(0,a.Z)(t,s);return r?(0,o.jsxs)("div",{className:"mt-4",style:{fontSize:"25px",display:"flex",justifyContent:"center",textAlign:"center",flexDirection:"column",alignItems:"center"},children:[(0,o.jsx)("div",{className:"spinner-grow text-light",role:"status",children:(0,o.jsx)("span",{className:"sr-only"})}),"Espera por favor"]}):(0,o.jsx)(e,(0,n.Z)({},c))}}},2918:function(e,t,r){r.d(t,{d:function(){return o}});var n=r(9439),a=r(2791),o=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=(0,a.useState)(e),r=(0,n.Z)(t,2),o=r[0],s=r[1],c=function(){return s(!0)},i=function(){return s(!1)};return[o,c,i]}},6542:function(e,t,r){r.d(t,{Ed:function(){return i},Zg:function(){return l},_G:function(){return c},dS:function(){return u}});var n=r(4165),a=r(5861),o=r(7411),s="https://sccotview.com/api/series/",c=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get(s);case 2:if(200!==(t=e.sent).status){e.next=7;break}return e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.post(s,t);case 2:if(200!==(r=e.sent).status){e.next=7;break}return e.next=6,r.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(s).concat(t));case 2:if(200!==(r=e.sent).status){e.next=7;break}return e.next=6,r.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.patch(s+t+"/",r);case 2:if(200!==(a=e.sent).status){e.next=5;break}return e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},6639:function(e,t,r){r.d(t,{C1:function(){return l},DN:function(){return i},op:function(){return u},xI:function(){return c}});var n=r(4165),a=r(5861),o=r(7411),s="https://sccotview.com/api/temporadas/",c=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get(s);case 2:if(200!==(t=e.sent).status){e.next=7;break}return e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.post(s,t);case 2:if(200!==(r=e.sent).status){e.next=7;break}return e.next=6,r.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(s).concat(t));case 2:if(200!==(r=e.sent).status){e.next=7;break}return e.next=6,r.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.patch(s+t+"/",r);case 2:if(200!==(a=e.sent).status){e.next=5;break}return e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},8040:function(){},9629:function(){}}]);
//# sourceMappingURL=838.e416e1c3.chunk.js.map