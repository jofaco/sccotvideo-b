"use strict";(self.webpackChunkvideoteca_frontend=self.webpackChunkvideoteca_frontend||[]).push([[538],{4345:function(e,t,r){r.d(t,{Z:function(){return k}});var n=r(4165),s=r(5861),a=r(9439),i=r(5987),c=r(2791),u=r(7689),o=(r(8040),r(8596)),d=r(8374),f=r(9378),l=(r(5151),r(7087),r(9713),r(184)),p=((0,o.Z)((function(e){return{item:{flex:"0 0 0%",margin:"0 0px",position:"relative",padding:"0"},imagenContainer:{width:"360px",height:"190px",overflow:"hidden",border:"2px solid transparent"},imgClass:{width:"300px",height:"200px"}}})),r(7543)),v=(r(5258),r(865),["categoria","verVideo"]),h=function(e){var t=e.categoria,r=e.verVideo,n=(0,i.Z)(e,v);if(t){var s=n.videos&&n.search(n.videos).filter((function(e){return e.categorias.some((function(e){return t.categoria===e.categoria}))}));return(0,l.jsx)("div",{children:s.length>0&&(0,l.jsxs)("div",{className:"col-12 contenedorXcateg",children:[(0,l.jsxs)("div",{className:"d-flex align-items-center ",children:[(0,l.jsxs)("h2",{className:"me-3",children:["| ",t.categoria,(0,l.jsx)("small",{children:" \u25b6 "})," "]},t.id),(0,l.jsxs)("small",{className:"border-bottom border-light mb-2",children:[s.length," Videos"]})]}),(0,l.jsx)("div",{className:"row",children:(0,l.jsx)(p.Z,{verVideo:r,children:s.map((function(e){return(0,l.jsx)(p.Z.Item,{video:e,histUsers:n.histUsers,user:n.user,verVideo:r},e.id)}))})})]})})}},x=r(1187),Z=r(9929),m=r(8733),g=r(2680),w=r(8434),j=["videos","categories"],b=(0,o.Z)((function(e){return{root:{maxWidth:1248,maxHeight:460,margin:"auto"},"@media (max-width: 1248px)":{root:{display:"flex"}}}}));var k=function(e){var t=e.videos,r=e.categories,o=(0,i.Z)(e,j),p=(0,u.s0)(),v=(0,c.useState)(),k=(0,a.Z)(v,2),y=k[0],S=k[1],N=(0,c.useState)(null),C=(0,a.Z)(N,2),V=C[0],_=C[1],L=(0,c.useState)(null),E=(0,a.Z)(L,2),I=E[0],U=E[1],O=(0,c.useContext)(g.Z).user,z=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.UH({user_id:O.id});case 3:t=e.sent,S(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.kt({user_id:O.id});case 3:t=e.sent,_(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){z(),F()}),[]),(0,c.useEffect)((function(){if(V&&r){for(var e=[],t=[],n=[],s=0;s<V.length;s++)t.push(V[s].categoria);for(var a=0;a<r.length;a++)n.push(r[a]);for(var i=0;i<n.length;i++){for(var c=!1,u=0;u<t.length&!c;u++)n[i].categoria===t[u]&&(c=!0);e=V,c||e.push(n[i])}U(e||null)}}),[r,V]);var P=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t){var r,s,a,i,c,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=new FormData,a=0,r.append("usuario",O.id),r.append("video",t),e.prev=4,i=0;i<y.length;i++)(c=y[i]).usuario.id===O.id&&c.video===t&&(s=c,a++);if(0!==a){e.next=11;break}return e.next=9,Z.LK(r);case 9:u=e.sent,s=u.data;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log(e.t0);case 16:p("/seeVideo/".concat(t),{state:s});case 17:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t){return e.apply(this,arguments)}}(),W=b();return t.length>0?(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{id:"carousel_videos",children:[(0,l.jsx)("h2",{children:"\ud83d\udd51 \xdaltimos videos"}),(0,l.jsx)(d.Z,{className:W.root,id:"carousel",fade:!0,children:t&&o.search(t).slice(0,6).map((function(e,t){return(0,l.jsx)(d.Z.Item,{children:(0,l.jsx)(f.Z,{video:e,listVideos:o.listVideos,histUsers:y,user:O,verVideo:P},t)},t)}))})]}),(0,l.jsx)("br",{}),(0,l.jsx)("hr",{}),(0,l.jsx)("div",{id:"card_videos",children:V?(0,l.jsx)("div",{children:I&&o.search2(I).map((function(e,r){return(0,l.jsx)(l.Fragment,{children:o.search2(I).length<=1?(0,l.jsx)(w.Z,{categoria:e,videos:t,search:o.search,histUsers:y,user:O,verVideo:P},r):(0,l.jsx)(x.Z,{categoria:e,videos:t,search:o.search,histUsers:y,user:O,verVideo:P},r)})}))}):r&&o.search2(r).map((function(e,n){return(0,l.jsx)("div",{children:o.search2(r).length<=1?(0,l.jsx)(w.Z,{categoria:e,videos:t,search:o.search,histUsers:y,user:O,verVideo:P},n):(0,l.jsx)(h,{categoria:e,videos:t,search:o.search,histUsers:y,user:O,verVideo:P},n)},n)}))})]}):(0,l.jsx)("div",{id:"card_videos",children:(0,l.jsx)("h2",{style:{color:"white"},children:(0,l.jsx)("center",{children:"No hay videos en este modulo!!"})})})}},8561:function(e,t,r){r.r(t),r.d(t,{default:function(){return k}});var n=r(7762),s=r(4165),a=r(5861),i=r(9439),c=r(2791),u=r(7689),o=r(6542),d=r(6639),f=r(1652),l=r(9929),p=r(5987),v=(r(8040),r(1174),r(3927)),h=r(5764),x=r(9278),Z=r(4345),m=r(184),g=["series"],w=function(e){var t=e.series,r=((0,p.Z)(e,g),document.getElementById("carousel")),n=(0,c.useState)(""),u=(0,i.Z)(n,2),o=u[0],d=u[1],f=(0,c.useState)(""),l=(0,i.Z)(f,2),w=l[0],j=l[1],b=(0,c.useState)(["title_espanol"]),k=(0,i.Z)(b,1)[0],y=(0,c.useState)(["categoria"]),S=(0,i.Z)(y,1)[0],N=(0,c.useState)(["All"]),C=(0,i.Z)(N,2),V=C[0],_=C[1],L=localStorage.getItem("user"),E=JSON.parse(L),I=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,h.wb)();case 3:t=e.sent,j(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){I()}),[]);var U=function(e){if(o){if(o){r.style.visibility="hidden",r.style.height="10px";var t=o.toLowerCase();return e.filter((function(e){var r=e.title_espanol.toString().toLowerCase().indexOf(t)>-1;return r||e.categorias.some((function(e){return e.categoria.toLowerCase().includes(t)}))}))}return e.filter((function(e){return e.categorias.categoria.toString().toLowerCase().indexOf(o.toLowerCase())>-1}))}return e},O=function(e){return e.filter((function(e){return e.categoria===V?(r.style.visibility="hidden",r.style.height="10px",S.some((function(t){return e[t].toString().toLowerCase().indexOf(o.toLowerCase())>-1}))):"All"==V?(r.style.visibility="visible",r.style.height="100%",t.filter((function(e){return k.some((function(t){return e[t].toString().toLowerCase().indexOf(o.toLowerCase())>-1}))}))):void 0}))};return E&&t?(E.is_superuser,(0,m.jsxs)("div",{children:[(0,m.jsx)(x.Z,{query:o,setQuery:d,filterParam:V,setFilterParam:_,categories:w}),(0,m.jsx)(v.S,{children:(0,m.jsx)(Z.Z,{videos:t,categories:w,search:U,search2:O})})]})):(0,m.jsx)("p",{style:{fontSize:"25px"},children:"Inicia sesi\xf3n para ver todos los videos!"})},j=r(2516),b=r(7087);r(9713);var k=function(){var e=(0,j.Z)(w),t=(0,u.s0)(),r=(0,c.useState)(),p=(0,i.Z)(r,2),v=p[0],h=p[1],x=(0,c.useState)([]),Z=(0,i.Z)(x,2),g=Z[0],k=Z[1],y=(0,c.useState)([]),S=(0,i.Z)(y,2),N=(S[0],S[1],(0,c.useState)(0)),C=(0,i.Z)(N,2),V=(C[0],C[1]),_=(0,c.useState)([]),L=(0,i.Z)(_,2),E=L[0],I=L[1],U=(0,c.useState)(0),O=(0,i.Z)(U,2),z=(O[0],O[1],(0,c.useState)({loading:!0,videos:null})),F=(0,i.Z)(z,2),P=F[0],W=F[1],A=(0,c.useState)({}),D=(0,i.Z)(A,2),G=D[0],H=D[1];(0,c.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o._G();case 2:t=e.sent,k(t),W({loading:!1});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,c.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.xI();case 2:t=e.sent,I(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,c.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(){var t,r,a,i;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={},r=(0,n.Z)(g),e.prev=2,r.s();case 4:if((a=r.n()).done){e.next=11;break}return i=a.value,e.next=8,q(i.id);case 8:t[i.id]=e.sent;case 9:e.next=4;break;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),r.e(e.t0);case 16:return e.prev=16,r.f(),e.finish(16);case 19:H(t);case 20:case"end":return e.stop()}}),e,null,[[2,13,16,19]])})));return function(){return e.apply(this,arguments)}}();g.length>0&&e()}),[g]);var K=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.K7();case 3:t=e.sent,h(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){K()}),[]);var q=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(t){var r,n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.Zs();case 2:return r=e.sent,console.log(r),n=r.videos.filter((function(e){return 2==e.tipe_of_video&&e.serie==t&&1==e.state})),console.log(n),e.abrupt("return",n.length);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,m.jsx)("div",{className:"d-flex justify-content-center",children:(0,m.jsxs)("div",{style:{maxWidth:"1450px",minWidth:"50%",padding:"20px"},children:[P.loading?(0,m.jsx)(e,{isLoading:P.loading,series:g}):"",(0,m.jsx)("div",{className:"d-flex justify-content-end",children:(0,m.jsx)("button",{onClick:function(){return window.history.back()},className:"btn btn-light",value:"Volver",children:"Volver"})}),(0,m.jsx)("h2",{className:"px-2 mb-3",children:"Listado de Series"}),(0,m.jsx)("div",{className:"d-flex flex-wrap",children:g.map((function(e,r){return(0,m.jsxs)("div",{className:"border rounded cursorPointer card-width p-2 m-3",children:[(0,m.jsxs)("div",{onClick:function(){var r;r=e.id,t("/seeSerie/".concat(r),{state:v}),V(r)},children:[G[e.id]>0&&(0,m.jsx)("div",{className:"d-flex justify-content-end mb-1",children:(0,m.jsxs)("small",{children:[" ",G[e.id]||""," Videos"]})}),(0,m.jsx)(b.LazyLoadImage,{effect:"blur",src:"https://sccotview.com"+e.featured_image,className:"rounded mb-2",alt:""}),(0,m.jsx)("h5",{className:"text-capitalize truncate-text",children:e.serie}),(0,m.jsx)("small",{className:"truncate-text mb-0",children:e.description})]}),(0,m.jsx)("div",{children:E.map((function(t,r){return e.id===t.serie?(0,m.jsx)("div",{},r):null}))})]},r)}))})]})})}},6542:function(e,t,r){r.d(t,{Ed:function(){return u},Zg:function(){return d},_G:function(){return c},dS:function(){return o}});var n=r(4165),s=r(5861),a=r(7411),i="https://sccotview.com/api/series/",c=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get(i);case 2:if(200!==(t=e.sent).status){e.next=7;break}return e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.post(i,t);case 2:if(200!==(r=e.sent).status){e.next=7;break}return e.next=6,r.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("".concat(i).concat(t));case 2:if(200!==(r=e.sent).status){e.next=7;break}return e.next=6,r.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t,r){var s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.patch(i+t+"/",r);case 2:if(200!==(s=e.sent).status){e.next=5;break}return e.abrupt("return",s.data);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},6639:function(e,t,r){r.d(t,{C1:function(){return d},DN:function(){return u},op:function(){return o},xI:function(){return c}});var n=r(4165),s=r(5861),a=r(7411),i="https://sccotview.com/api/temporadas/",c=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get(i);case 2:if(200!==(t=e.sent).status){e.next=7;break}return e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.post(i,t);case 2:if(200!==(r=e.sent).status){e.next=7;break}return e.next=6,r.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("".concat(i).concat(t));case 2:if(200!==(r=e.sent).status){e.next=7;break}return e.next=6,r.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t,r){var s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.patch(i+t+"/",r);case 2:if(200!==(s=e.sent).status){e.next=5;break}return e.abrupt("return",s.data);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=538.80ffff8b.chunk.js.map