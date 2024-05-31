"use strict";(self.webpackChunkvideoteca_frontend=self.webpackChunkvideoteca_frontend||[]).push([[649],{7411:function(e,r,t){var n=t(4165),o=t(5861),a=t(3263),s=t(9778),i="https://sccotview.com/api/",c=a.Z.create({baseURL:i,timeout:5e3,headers:{Authorization:localStorage.getItem("access_token")?"JWT "+localStorage.getItem("access_token"):null,"Content-Type":"multipart/form-data",accept:"application/json"}});c.interceptors.response.use((function(e){return e}),function(){var e=(0,o.Z)((0,n.Z)().mark((function e(r){var t,o,a,l;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.config,"undefined"!==typeof r.response){e.next=4;break}return console.warn("A server/network error occurred. Looks like CORS might be the problem. Sorry about this - we will get it fixed shortly."),e.abrupt("return",Promise.reject(r));case 4:if(401!==r.response.status||t.url!==i+"api/token/refresh/"){e.next=7;break}return window.location.href="/loginuser/",e.abrupt("return",Promise.reject(r));case 7:if("token_not_valid"!==r.response.data.code||401!==r.response.status||"Unauthorized"!==r.response.statusText){e.next=26;break}if(!(o=localStorage.getItem("refresh_token"))){e.next=24;break}if(a=JSON.parse(s.lW.from(o.split(".")[1],"base64").toString()),l=Math.ceil(Date.now()/1e3),console.log(a.exp),!(a.exp>l)){e.next=17;break}return e.abrupt("return",c.post("api/token/refresh/",{refresh:o}).then((function(e){return localStorage.setItem("access_token",e.data.access_token),localStorage.setItem("refresh_token",e.data.refresh_token),c.defaults.headers.Authorization="JWT "+e.data.access_token,t.headers.Authorization="JWT "+e.data.access_token,c(t)})).catch((function(e){console.log(e)})));case 17:console.log("Refresh token is expired",a.exp,l),window.localStorage.removeItem("access_token"),window.localStorage.removeItem("refresh_token"),window.localStorage.removeItem("user"),window.location.href="/loginuser/";case 22:e.next=26;break;case 24:console.log("Refresh token not available."),window.location.href="/loginuser/";case 26:return 401===r.response.status&&(window.location.href="/loginuser/"),e.abrupt("return",Promise.reject(r));case 28:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()),r.Z=c},6649:function(e,r,t){t.r(r),t.d(r,{default:function(){return _}});var n=t(4942),o=t(1413),a=t(9439),s=t(2791),i=t(7689),c=t(5628),l=t(272),u=t(6513),d=t(8257),p=t(2858),f=t(1288),m=t(8302),g=t(8596),h=t(3712),x=t(5987),w=t(184),k=["message"],v=(0,g.Z)((function(e){return{link:{margin:e.spacing(1,1.5)}}}));var b=function(){var e=v();return function(r){var t=r.message;(0,x.Z)(r,k);return t?(0,w.jsx)("p",{className:e.link,style:{fontSize:"25px",color:"red"},children:t}):(0,w.jsx)("p",{})}},Z=t(1830),S=t.n(Z),j=(0,g.Z)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"white",color:"black",padding:"30px",borderRadius:"15px",boxShadow:"5px 5px 10px #222261"},avatar:{margin:e.spacing(1),backgroundColor:"dark",width:"80px",height:"80px",border:"2px solid #4949a5"},form:{width:"100%",marginTop:e.spacing(1)},texto:{backgroundColor:e.palette.common.white},submit:{margin:e.spacing(3,0,2),padding:"12px 0"}}}));function _(e){var r=e.onLogin,t=(0,i.s0)(),g=(0,c.Z)(),x=g.isLoginLoading,k=g.hasLoginError,v=g.login,Z=g.isLogged,_=g.errLogin,I=(0,s.useState)(""),C=(0,a.Z)(I,2),y=C[0],L=C[1],N=Object.freeze({email:"",password:""}),T=b(),W=(0,s.useState)(N),z=(0,a.Z)(W,2),P=z[0],J=z[1],O=function(e){J((0,o.Z)((0,o.Z)({},P),{},(0,n.Z)({},e.target.name,e.target.value.trim())))};(0,s.useEffect)((function(){Z&&(t("/"),r&&r(),window.location.reload())}),[t,Z,r]),(0,s.useEffect)((function(){k&&(S().fire({title:""!=_?_:"Lo sentimos no fue posible iniciar sesi\xf3n",text:"Puede contactarnos al correo inscripciones@sccot.org.co",icon:"error"}),setTimeout((function(){L(null)}),5e3))}),[k]);var R=j();return(0,w.jsxs)("div",{className:"",children:[x&&(0,w.jsxs)("strong",{className:"d-flex justify-content-center flex-column align-items-center",children:[(0,w.jsx)("div",{className:"spinner-grow text-light ",role:"status"}),(0,w.jsx)("br",{}),(0,w.jsx)("br",{}),(0,w.jsx)("span",{className:"sr-only d-inline",children:"Cargando por favor espere..."})]}),!x&&(0,w.jsxs)(h.Z,{component:"main",maxWidth:"xs",children:[(0,w.jsx)(d.ZP,{}),(0,w.jsxs)("div",{className:R.paper,children:[(0,w.jsx)(l.Z,{className:R.avatar}),(0,w.jsx)(m.Z,{component:"h1",variant:"h5",children:"Iniciar sesi\xf3n"}),(0,w.jsxs)("form",{className:R.form,noValidate:!0,children:[(0,w.jsx)(p.Z,{className:R.texto,margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Correo Electronico",name:"email",autoComplete:"email",autoFocus:!0,onChange:O}),(0,w.jsx)(p.Z,{className:R.texto,margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Contrase\xf1a",type:"password",id:"password",autoComplete:"current-password",onChange:O}),(0,w.jsx)(u.Z,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:R.submit,onClick:function(e){e.preventDefault(),v({username:P.email,password:P.password})},children:"Ingresar"}),(0,w.jsx)(f.Z,{container:!0,children:(0,w.jsx)(f.Z,{item:!0,xs:!0,children:(0,w.jsx)("span",{variant:"body2",className:"cursorPointer",onClick:function(){S().fire({title:""!=_?_:"\xbfOlvido su contrase\xf1a?",text:"Puede contactarnos al correo inscripciones@sccot.org.co",icon:"error"})},children:"\xbfOlvido su contrase\xf1a?"})})})]})]})]}),k&&(0,w.jsx)(T,{message:y})]})}},5628:function(e,r,t){t.d(r,{Z:function(){return l}});var n=t(9439),o=t(2791),a=t(7689),s=t(2680),i=t(746),c=t(7411);t(1830);function l(){var e=(0,a.s0)(),r=(0,o.useContext)(s.Z),t=r.jwt,l=r.setUSER,u=r.setJWT,d=(0,o.useState)({loading:!1,error:!1}),p=(0,n.Z)(d,2),f=p[0],m=p[1],g=(0,o.useState)(""),h=(0,n.Z)(g,2),x=h[0],w=h[1],k=(0,o.useCallback)((function(e){var r=e.username,t=e.password;m({loading:!0,error:!1}),(0,i.m3)({username:r,password:t}).then((function(e){window.localStorage.setItem("access_token",e.data.access_token),window.localStorage.setItem("refresh_token",e.data.refresh_token),window.localStorage.setItem("user",JSON.stringify(e.data.user)),c.Z.defaults.headers.Authorization="JWT "+localStorage.getItem("access_token"),m({loading:!1,error:!1}),u(e.data.access_token),l(e.data.user)})).catch((function(e){window.localStorage.removeItem("access_token"),window.localStorage.removeItem("refresh_token"),window.localStorage.removeItem("user"),m({loading:!1,error:!0}),console.log(e),w(e.response.data.error||e.response.data.detail)}))}),[u,l]),v=(0,o.useCallback)((function(){c.Z.post("logout/",{refresh_token:localStorage.getItem("refresh_token")}),localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),localStorage.removeItem("user"),c.Z.defaults.headers.Authorization=null,u(null),e("/"),window.location.reload()}),[e,u]);return{isLogged:Boolean(t),isLoginLoading:f.loading,hasLoginError:f.error,login:k,logout:v,errLogin:x}}},746:function(e,r,t){t.d(r,{PR:function(){return l},gO:function(){return u},m3:function(){return c}});var n=t(4165),o=t(5861),a=t(3263),s=t(7411),i="https://sccotview.com/api/",c=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(r){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.post(i+"login/",r);case 2:return t=e.sent,console.log(t),console.log(r),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(r){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"users/").concat(r));case 2:if(200!==(t=e.sent).status){e.next=8;break}return console.log(t),e.next=7,t.data;case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),u=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(r,t){var o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.patch("".concat(i,"users/").concat(r,"/"),t);case 2:if(200!==(o=e.sent).status){e.next=7;break}return e.next=6,o.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=649.0fb0593d.chunk.js.map