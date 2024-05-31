"use strict";(self.webpackChunkvideoteca_frontend=self.webpackChunkvideoteca_frontend||[]).push([[166],{7411:function(e,t,n){var r=n(4165),o=n(5861),s=n(3263),a=n(9778),i="https://sccotview.com/api/",c=s.Z.create({baseURL:i,timeout:5e3,headers:{Authorization:localStorage.getItem("access_token")?"JWT "+localStorage.getItem("access_token"):null,"Content-Type":"multipart/form-data",accept:"application/json"}});c.interceptors.response.use((function(e){return e}),function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){var n,o,s,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.config,"undefined"!==typeof t.response){e.next=4;break}return console.warn("A server/network error occurred. Looks like CORS might be the problem. Sorry about this - we will get it fixed shortly."),e.abrupt("return",Promise.reject(t));case 4:if(401!==t.response.status||n.url!==i+"api/token/refresh/"){e.next=7;break}return window.location.href="/loginuser/",e.abrupt("return",Promise.reject(t));case 7:if("token_not_valid"!==t.response.data.code||401!==t.response.status||"Unauthorized"!==t.response.statusText){e.next=26;break}if(!(o=localStorage.getItem("refresh_token"))){e.next=24;break}if(s=JSON.parse(a.lW.from(o.split(".")[1],"base64").toString()),l=Math.ceil(Date.now()/1e3),console.log(s.exp),!(s.exp>l)){e.next=17;break}return e.abrupt("return",c.post("api/token/refresh/",{refresh:o}).then((function(e){return localStorage.setItem("access_token",e.data.access_token),localStorage.setItem("refresh_token",e.data.refresh_token),c.defaults.headers.Authorization="JWT "+e.data.access_token,n.headers.Authorization="JWT "+e.data.access_token,c(n)})).catch((function(e){console.log(e)})));case 17:console.log("Refresh token is expired",s.exp,l),window.localStorage.removeItem("access_token"),window.localStorage.removeItem("refresh_token"),window.localStorage.removeItem("user"),window.location.href="/loginuser/";case 22:e.next=26;break;case 24:console.log("Refresh token not available."),window.location.href="/loginuser/";case 26:return 401===t.response.status&&(window.location.href="/loginuser/"),e.abrupt("return",Promise.reject(t));case 28:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.Z=c},5752:function(e,t,n){n.r(t),n.d(t,{default:function(){return U}});var r=n(4165),o=n(5861),s=n(9439),a=n(2791),i=n(1087),c=n(9952),l=n(6488),u=n(6513),d=n(8596),f=n(5628),x=n(184),p=(0,d.Z)((function(e){return{link:{margin:e.spacing(1,1.5),textTransform:"capitalize"}}})),m=function(){var e=(0,f.Z)(),t=e.isLogged,n=e.logout,r=p();return t?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(u.Z,{href:"#",variant:"outlined",sx:{color:"#ffff"},className:r.link,component:i.OL,to:"/Perfil",children:[(0,x.jsx)(c.Z,{fontSize:"small"}),"\xa0"]}),(0,x.jsx)(u.Z,{href:"#",color:"primary",variant:"outlined",className:r.link,component:i.OL,to:"#",onClick:function(e){e.preventDefault(),n()},children:(0,x.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[(0,x.jsx)(l.Z,{fontSize:"small"}),"\xa0"]})})]}):(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(u.Z,{href:"#",color:"primary",variant:"outlined",className:r.link,component:i.OL,to:"/loginuser",children:[(0,x.jsx)(c.Z,{fontSize:"small"}),"\xa0 INGRESAR"]})})},h=n(6934),g=n(3104);(0,h.ZP)(g.Z)((function(e){var t=e.theme;return{width:62,height:34,padding:7,"& .MuiSwitch-switchBase":{margin:1,padding:0,transform:"translateX(5px)","&.Mui-checked":{color:"#fff",transform:"translateX(5px)","& .MuiSwitch-thumb:before":{backgroundImage:'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="'.concat(encodeURIComponent("#fff"),'" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>\')')},"& + .MuiSwitch-track":{opacity:1,backgroundColor:"dark"===t.palette.mode?"#8796A5":"#aab4be"}}},"& .MuiSwitch-thumb":{backgroundColor:"dark"===t.palette.mode?"#003892":"#001e3c",width:32,height:32,"&:before":{content:"''",position:"absolute",width:"100%",height:"100%",left:0,top:0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundImage:'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="'.concat(encodeURIComponent("#fff"),'" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>\')')}},"& .MuiSwitch-track":{opacity:1,backgroundColor:"dark"===t.palette.mode?"#8796A5":"#aab4be",borderRadius:10}}}));function Z(){var e=(0,a.useState)("dark"),t=(0,s.Z)(e,2),n=t[0];t[1];return(0,a.useEffect)((function(){document.getElementById("carousel"),document.body.setAttribute("data-theme",n)}),[n]),(0,x.jsx)(x.Fragment,{})}var j=n(2680),v=n(1413),w=n(4294),k=n(8128),b=function(e){var t=e.isOpen,n=e.notifications;return(0,x.jsxs)("div",{className:"notifications-dropdown ".concat(t?"open":"closed"),children:[t&&n.map((function(e){return(0,x.jsx)("div",{className:"notification-item"},e.id)})),"Pr\xf3ximamente"]})},S=(0,d.Z)((function(e){return{link:{margin:e.spacing(3,1),color:"black"}}})),y=function(){var e=(0,f.Z)().isLogged,t=(0,a.useContext)(j.Z).user,n=S(),r=(0,a.useState)(!1),o=(0,s.Z)(r,2),c=o[0],l=o[1],u=(0,a.useState)([]),d=(0,s.Z)(u,2);d[0],d[1];return(0,x.jsxs)(x.Fragment,{children:[e&&t.is_superuser&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(w.Z,{sx:{color:"#fff"},className:n.link,component:i.OL,to:"/",children:"INICIO"}),(0,x.jsx)(w.Z,{sx:{color:"#fff"},className:n.link,component:i.OL,to:"/Videos",children:"Videos"}),(0,x.jsx)(w.Z,{sx:{color:"#fff"},className:n.link,component:i.OL,to:"/Series",children:"Series"}),(0,x.jsx)(w.Z,{sx:{color:"#fff"},className:n.link,component:i.OL,to:"/Casos",children:"Casos"}),(0,x.jsx)(w.Z,{sx:{color:"#fff"},className:n.link,component:i.OL,to:"/Ajustes",children:"Ajustes"}),(0,x.jsx)(w.Z,{sx:{color:"#fff"},className:n.link,component:i.OL,to:"/VideoForm",children:"Agregar video"})]}),e&&!t.is_superuser&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(w.Z,{sx:{color:"#fff"},className:n.link,component:i.OL,to:"/",children:"INICIO"}),(0,x.jsx)(w.Z,{sx:{color:"#fff"},className:n.link,component:i.OL,to:"/Videos",children:"Videos"}),(0,x.jsx)(w.Z,{sx:{color:"#fff"},className:n.link,component:i.OL,to:"/Series",children:"Series"}),(0,x.jsx)(w.Z,{sx:{color:"#fff"},className:n.link,component:i.OL,to:"/Casos",children:"Casos"}),(0,x.jsxs)(w.Z,{children:[(0,x.jsx)(k.Z,{onClick:function(){l(!c)}}),(0,x.jsx)(b,{isOpen:c,notifications:[{id:1,text:"Notificaci\xf3n 1"},{id:2,text:"Notificaci\xf3n 2"},{id:3,text:"Notificaci\xf3n 3"}]})]})]})]})},L=n(7087),C=(n(9713),n(1971)),I=n(7447),O=n(8302),N=n(2067),A=n(8096),z=n(159),_=n(1118),T=function(e){return e.user.is_superuser?(0,x.jsxs)(C.Z,{onClick:e.handleDrawerToggle,sx:{textAlign:"center"},children:[(0,x.jsx)(L.LazyLoadImage,{effect:"blur",src:"https://sccotview.com/media/videos/logoSCCOTView.png",alt:"",className:"",style:{width:"220px",objectFit:"contain",minHeight:"2px"}}),(0,x.jsx)(I.Z,{}),(0,x.jsx)(C.Z,{display:"flex",mt:2,mr:2,justifyContent:"center",fontWeight:500,children:(0,x.jsxs)(O.Z,{component:"span",variant:"body2",children:[(0,x.jsx)(C.Z,{ml:2,fontWeight:"fontWeightLight",fontSize:14,children:(0,x.jsx)(Z,{})}),(0,x.jsx)(C.Z,{ml:2,fontWeight:"fontWeightLight",fontSize:14,children:e.user.name}),(0,x.jsxs)(N.Z,{children:[(0,x.jsx)(A.Z,{children:(0,x.jsx)(_.Z,{sx:{textAlign:"center"},component:i.OL,to:"/",children:(0,x.jsx)(z.Z,{primary:"INICIO"})})}),(0,x.jsx)(A.Z,{children:(0,x.jsx)(_.Z,{sx:{textAlign:"center"},component:i.OL,to:"/Videos",children:(0,x.jsx)(z.Z,{primary:"VIDEOS"})})}),(0,x.jsx)(A.Z,{children:(0,x.jsx)(_.Z,{sx:{textAlign:"center"},component:i.OL,to:"/Series",children:(0,x.jsx)(z.Z,{primary:"SERIES"})})}),(0,x.jsx)(A.Z,{children:(0,x.jsx)(_.Z,{sx:{textAlign:"center"},component:i.OL,to:"/Casos",children:(0,x.jsx)(z.Z,{primary:"CASOS"})})}),(0,x.jsx)(A.Z,{children:(0,x.jsx)(_.Z,{sx:{textAlign:"center"},component:i.OL,to:"/Ajustes",children:(0,x.jsx)(z.Z,{primary:"AJUSTES"})})}),(0,x.jsx)(A.Z,{children:(0,x.jsx)(_.Z,{sx:{textAlign:"center"},component:i.OL,to:"/VideoForm",children:(0,x.jsx)(z.Z,{primary:"AGREGAR VIDEO"})})})]})]})})]}):(0,x.jsxs)(C.Z,{onClick:e.handleDrawerToggle,sx:{textAlign:"center"},children:[(0,x.jsx)("div",{children:(0,x.jsx)("img",{src:"https://sccotview.com/media/videos/logoSCCOTView.png",style:{width:"170px",objectFit:"contain",minHeight:"2px"}})}),(0,x.jsx)(I.Z,{}),(0,x.jsx)(C.Z,{display:"flex",mt:2,mr:2,justifyContent:"space-between",fontWeight:500,children:(0,x.jsxs)(O.Z,{component:"span",variant:"body2",children:[(0,x.jsx)(C.Z,{ml:2,fontWeight:"fontWeightLight",fontSize:14,children:(0,x.jsx)(Z,{})}),(0,x.jsx)(C.Z,{ml:2,fontWeight:"fontWeightLight",fontSize:14,children:e.user.name}),(0,x.jsxs)(N.Z,{children:[(0,x.jsx)(A.Z,{children:(0,x.jsx)(_.Z,{sx:{textAlign:"center"},component:i.OL,to:"/",children:(0,x.jsx)(z.Z,{primary:"Inicio"})})}),(0,x.jsx)(A.Z,{children:(0,x.jsx)(_.Z,{sx:{textAlign:"center"},component:i.OL,to:"/Videos",children:(0,x.jsx)(z.Z,{primary:"Videos"})})}),(0,x.jsx)(A.Z,{children:(0,x.jsx)(_.Z,{sx:{textAlign:"center"},component:i.OL,to:"/Series",children:(0,x.jsx)(z.Z,{primary:"Series"})})}),(0,x.jsx)(A.Z,{children:(0,x.jsx)(_.Z,{sx:{textAlign:"center"},component:i.OL,to:"/Casos",children:(0,x.jsx)(z.Z,{primary:"Casos"})})})]})]})})]})},V=n(8167),W=n(7690),M=n(7025),R=n(5667),F=n(8336),E=n(8455),P=(n(5258),(0,d.Z)((function(e){return{appBar:{borderBottom:"1px solid ".concat(e.palette.divider)},link:{margin:e.spacing(1,1.5)},toolbarTitle:{flexGrow:1},paper:{display:"flex",flexDirection:"column",alignItems:"center"}}}))),B=(0,h.ZP)("div")((function(e){var t=e.theme;return(0,v.Z)((0,v.Z)({display:"flex",alignItems:"center",padding:t.spacing(0,1)},t.mixins.toolbar),{},{justifyContent:"flex-end"})})),D=function(e){var t=P(),n=e.window,r=(0,a.useState)(!1),o=(0,s.Z)(r,2),c=o[0],l=o[1],u=function(){l(!c)},d=(0,x.jsx)(T,{user:e.user,handleDrawerToggle:u}),f=void 0!==n?function(){return n().document.body}:void 0;return(0,x.jsx)(a.Fragment,{children:(0,x.jsxs)(C.Z,{children:[(0,x.jsx)(V.Z,{position:"relative",color:"default",component:"nav",className:t.appBar,children:(0,x.jsxs)(W.Z,{children:[(0,x.jsx)(M.Z,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:u,sx:{mr:2,display:{sm:"none"}},children:(0,x.jsx)(F.Z,{})}),(0,x.jsx)(O.Z,{variant:"h6",component:"div",className:t.toolbarTitle,sx:{flexGrow:1,display:{xs:"none",sm:"block"}},children:(0,x.jsx)(E.Z,{component:i.OL,to:"/",underline:"none",color:"textPrimary",children:(0,x.jsx)("div",{className:"",children:(0,x.jsx)(L.LazyLoadImage,{effect:"blur",src:"https://sccotview.com/media/videos/logoSCCOTView.png",alt:"",className:"",style:{width:"170px",objectFit:"contain",minHeight:"2px"}})})})}),(0,x.jsxs)("div",{className:"containerLinksNavbar",children:[(0,x.jsx)(y,{}),(0,x.jsx)(Z,{})]}),(0,x.jsx)(m,{})]})}),(0,x.jsx)(C.Z,{component:"nav",children:(0,x.jsxs)(R.ZP,{container:f,variant:"temporary",open:c,onClose:u,ModalProps:{keepMounted:!0},sx:{display:{xs:"flex",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:350}},children:[(0,x.jsx)(B,{children:(0,x.jsx)(M.Z,{onClick:u,children:"\u2716"})}),(0,x.jsx)(I.Z,{}),d]})})]})})},J=n(5764),G=(0,d.Z)((function(e){return{appBar:{borderBottom:"4px solid ".concat(e.palette.divider)},link:{margin:e.spacing(1,1.5)},toolbarTitle:{flexGrow:1},paper:{display:"flex",flexDirection:"column",alignItems:"center"}}})),U=function(){var e=G(),t=(0,f.Z)().isLogged,n=(0,a.useState)(!1),c=(0,s.Z)(n,1)[0],l=(0,a.useState)(""),u=(0,s.Z)(l,2),d=u[0],p=u[1],h=(0,a.useContext)(j.Z).user,g=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,J.wb)();case 3:t=e.sent,p(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return(0,a.useEffect)((function(){t&&g()}),[t]),t&&d?(0,x.jsx)(D,{user:h,categories:d}):(0,x.jsx)(a.Fragment,{children:(0,x.jsx)(C.Z,{children:(0,x.jsx)(V.Z,{position:"relative",open:c,color:"default",elevation:0,className:e.appBar,children:(0,x.jsxs)(W.Z,{className:e.toolbar,children:[(0,x.jsx)(O.Z,{variant:"h6",color:"inherit",noWrap:!0,className:e.toolbarTitle,children:(0,x.jsx)(E.Z,{component:i.OL,to:"/",underline:"none",color:"textPrimary",children:(0,x.jsx)(L.LazyLoadImage,{effect:"blur",src:"https://sccotview.com/media/videos/logoSCCOTView.png",alt:"",className:"",style:{width:"170px",objectFit:"contain",minHeight:"2px"}})})}),(0,x.jsx)(Z,{}),(0,x.jsx)(m,{})]})})})})}},5628:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(9439),o=n(2791),s=n(7689),a=n(2680),i=n(746),c=n(7411);n(1830);function l(){var e=(0,s.s0)(),t=(0,o.useContext)(a.Z),n=t.jwt,l=t.setUSER,u=t.setJWT,d=(0,o.useState)({loading:!1,error:!1}),f=(0,r.Z)(d,2),x=f[0],p=f[1],m=(0,o.useState)(""),h=(0,r.Z)(m,2),g=h[0],Z=h[1],j=(0,o.useCallback)((function(e){var t=e.username,n=e.password;p({loading:!0,error:!1}),(0,i.m3)({username:t,password:n}).then((function(e){window.localStorage.setItem("access_token",e.data.access_token),window.localStorage.setItem("refresh_token",e.data.refresh_token),window.localStorage.setItem("user",JSON.stringify(e.data.user)),c.Z.defaults.headers.Authorization="JWT "+localStorage.getItem("access_token"),p({loading:!1,error:!1}),u(e.data.access_token),l(e.data.user)})).catch((function(e){window.localStorage.removeItem("access_token"),window.localStorage.removeItem("refresh_token"),window.localStorage.removeItem("user"),p({loading:!1,error:!0}),console.log(e),Z(e.response.data.error||e.response.data.detail)}))}),[u,l]),v=(0,o.useCallback)((function(){c.Z.post("logout/",{refresh_token:localStorage.getItem("refresh_token")}),localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),localStorage.removeItem("user"),c.Z.defaults.headers.Authorization=null,u(null),e("/"),window.location.reload()}),[e,u]);return{isLogged:Boolean(n),isLoginLoading:x.loading,hasLoginError:x.error,login:j,logout:v,errLogin:g}}},746:function(e,t,n){n.d(t,{PR:function(){return l},gO:function(){return u},m3:function(){return c}});var r=n(4165),o=n(5861),s=n(3263),a=n(7411),i="https://sccotview.com/api/",c=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.post(i+"login/",t);case 2:return n=e.sent,console.log(n),console.log(t),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("".concat(i,"users/").concat(t));case 2:if(200!==(n=e.sent).status){e.next=8;break}return console.log(n),e.next=7,n.data;case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.patch("".concat(i,"users/").concat(t,"/"),n);case 2:if(200!==(o=e.sent).status){e.next=7;break}return e.next=6,o.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},5764:function(e,t,n){n.d(t,{CX:function(){return c},wb:function(){return i},yr:function(){return l}});var r=n(4165),o=n(5861),s=n(7411),a="https://sccotview.com/api/categorias/",i=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get(a);case 2:if(200!==(t=e.sent).status){e.next=7;break}return e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.post(a,t);case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.next=6,n.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.patch(a+t+"/",n);case 2:if(200!==(o=e.sent).status){e.next=5;break}return e.abrupt("return",o.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},5258:function(){}}]);
//# sourceMappingURL=166.67625509.chunk.js.map