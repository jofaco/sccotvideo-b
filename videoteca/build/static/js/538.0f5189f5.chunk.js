"use strict";(self.webpackChunkvideoteca_frontend=self.webpackChunkvideoteca_frontend||[]).push([[538],{4345:function(e,t,r){r.d(t,{Z:function(){return b}});var n=r(4165),s=r(5861),a=r(9439),i=r(5987),c=r(2791),u=r(7689),o=(r(8040),r(8596)),f=r(8374),d=r(9378),l=(r(5151),r(7087),r(9713),r(184)),p=((0,o.Z)((function(e){return{item:{flex:"0 0 0%",margin:"0 0px",position:"relative",padding:"0"},imagenContainer:{width:"360px",height:"190px",overflow:"hidden",border:"2px solid transparent"},imgClass:{width:"300px",height:"200px"}}})),r(3743)),v=(r(5258),r(865),["categoria","verVideo"]),h=function(e){var t=e.categoria,r=e.verVideo,n=(0,i.Z)(e,v);if(t){var s=n.videos&&n.search(n.videos).filter((function(e){return e.categorias.some((function(e){return t.categoria===e.categoria}))}));return(0,l.jsx)("div",{children:s.length>0&&(0,l.jsxs)("div",{className:"col-12 contenedorXcateg",children:[(0,l.jsxs)("h2",{className:"titleCateg ms-3",children:["| ",t.categoria,(0,l.jsx)("small",{children:" \u25b6"})]},t.id),(0,l.jsx)("div",{className:"row",children:(0,l.jsx)(p.Z,{verVideo:r,children:s.map((function(e){return(0,l.jsx)(p.Z.Item,{video:e,histUsers:n.histUsers,user:n.user,verVideo:r},e.id)}))})})]})})}},x=r(1187),Z=r(9929),g=r(8733),m=r(2680),w=["videos","categories"],j=(0,o.Z)((function(e){return{root:{maxWidth:1248,maxHeight:460,margin:"auto"},"@media (max-width: 1248px)":{root:{display:"flex"}}}}));var b=function(e){var t=e.videos,r=e.categories,o=(0,i.Z)(e,w),p=(0,u.s0)(),v=(0,c.useState)(),b=(0,a.Z)(v,2),k=b[0],y=b[1],S=(0,c.useState)(null),C=(0,a.Z)(S,2),N=C[0],L=C[1],V=(0,c.useState)(null),_=(0,a.Z)(V,2),E=_[0],I=_[1],U=(0,c.useContext)(m.Z).user,O=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.UH({user_id:U.id});case 3:t=e.sent,y(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.kt({user_id:U.id});case 3:t=e.sent,L(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){O(),z()}),[]),(0,c.useEffect)((function(){if(N&&r){for(var e=[],t=[],n=[],s=0;s<N.length;s++)t.push(N[s].categoria);for(var a=0;a<r.length;a++)n.push(r[a]);for(var i=0;i<n.length;i++){for(var c=!1,u=0;u<t.length&!c;u++)n[i].categoria===t[u]&&(c=!0);c||e.push(n[i])}console.log(),I(e||null)}}),[r,N]);var F=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t){var r,s,a,i,c,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=new FormData,a=0,r.append("usuario",U.id),r.append("video",t),e.prev=4,i=0;i<k.length;i++)(c=k[i]).usuario.id===U.id&&c.video===t&&(s=c,a++);if(0!==a){e.next=11;break}return e.next=9,Z.LK(r);case 9:u=e.sent,s=u.data;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log(e.t0);case 16:p("/seeVideo/".concat(t),{state:s});case 17:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t){return e.apply(this,arguments)}}(),P=j();return t.length>0?(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{id:"carousel_videos",children:[(0,l.jsx)("h2",{children:"\ud83d\udd51 \xdaltimos videos"}),(0,l.jsx)(f.Z,{className:P.root,id:"carousel",fade:!0,children:t&&o.search(t).slice(0,4).map((function(e){return(0,l.jsx)(f.Z.Item,{children:(0,l.jsx)(d.Z,{video:e,listVideos:o.listVideos,histUsers:k,user:U,verVideo:F},e.id)},e.id)}))})]}),(0,l.jsx)("br",{}),(0,l.jsx)("hr",{}),(0,l.jsx)("div",{id:"card_videos",children:N?(0,l.jsxs)("div",{children:[N&&o.search2(N).map((function(e,r){return(0,l.jsx)(x.Z,{categoria:e,videos:t,search:o.search,histUsers:k,user:U,verVideo:F},r)})),E&&o.search2(E).map((function(e,r){return(0,l.jsx)(x.Z,{categoria:e,videos:t,search:o.search,histUsers:k,user:U,verVideo:F},r)}))]}):r&&o.search2(r).map((function(e){return(0,l.jsx)(h,{categoria:e,videos:t,search:o.search,histUsers:k,user:U,verVideo:F},e.id)}))})]}):(0,l.jsx)("div",{id:"card_videos",children:(0,l.jsx)("h2",{style:{color:"white"},children:(0,l.jsx)("center",{children:"No hay videos en este modulo!!"})})})}},8561:function(e,t,r){r.r(t),r.d(t,{default:function(){return k}});var n=r(4165),s=r(5861),a=r(9439),i=r(2791),c=r(7689),u=r(6542),o=r(6639),f=r(1652),d=r(9929),l=r(5987),p=(r(8040),r(1174),r(3927)),v=r(5764),h=r(6180),x=r(4345),Z=r(184),g=["series"],m=function(e){var t=e.series,r=((0,l.Z)(e,g),document.getElementById("carousel")),c=(0,i.useState)(""),u=(0,a.Z)(c,2),o=u[0],f=u[1],d=(0,i.useState)(""),m=(0,a.Z)(d,2),w=m[0],j=m[1],b=(0,i.useState)(["title_espanol"]),k=(0,a.Z)(b,1)[0],y=(0,i.useState)(["categoria"]),S=(0,a.Z)(y,1)[0],C=(0,i.useState)(["All"]),N=(0,a.Z)(C,2),L=N[0],V=N[1],_=localStorage.getItem("user"),E=JSON.parse(_),I=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,v.wb)();case 3:t=e.sent,j(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();(0,i.useEffect)((function(){I()}),[]);var U=function(e){if(o){if(o){r.style.visibility="hidden",r.style.height="10px";var t=o.toLowerCase();return e.filter((function(e){var r=e.title_espanol.toString().toLowerCase().indexOf(t)>-1;return r||e.categorias.some((function(e){return e.categoria.toLowerCase().includes(t)}))}))}return e.filter((function(e){return e.categorias.categoria.toString().toLowerCase().indexOf(o.toLowerCase())>-1}))}return e},O=function(e){return e.filter((function(e){return e.categoria===L?(r.style.visibility="hidden",r.style.height="10px",S.some((function(t){return e[t].toString().toLowerCase().indexOf(o.toLowerCase())>-1}))):"All"==L?(r.style.visibility="visible",r.style.height="100%",t.filter((function(e){return k.some((function(t){return e[t].toString().toLowerCase().indexOf(o.toLowerCase())>-1}))}))):void 0}))};return E&&t?(E.is_superuser,(0,Z.jsxs)("div",{children:[(0,Z.jsx)(h.Z,{query:o,setQuery:f,filterParam:L,setFilterParam:V,categories:w}),(0,Z.jsx)(p.S,{children:(0,Z.jsx)(x.Z,{videos:t,categories:w,search:U,search2:O})})]})):(0,Z.jsx)("p",{style:{fontSize:"25px"},children:"Inicia sesi\xf3n para ver todos los videos!"})},w=r(2516),j=r(3712),b=r(7087);r(9713);var k=function(){var e=(0,w.Z)(m),t=(0,c.s0)(),r=(0,i.useState)(),l=(0,a.Z)(r,2),p=l[0],v=l[1],h=localStorage.getItem("user"),x=(JSON.parse(h),(0,i.useState)([])),g=(0,a.Z)(x,2),k=g[0],y=g[1],S=(0,i.useState)([]),C=(0,a.Z)(S,2),N=(C[0],C[1]),L=(0,i.useState)(0),V=(0,a.Z)(L,2),_=(V[0],V[1]),E=(0,i.useState)([]),I=(0,a.Z)(E,2),U=I[0],O=I[1],z=(0,i.useState)(0),F=(0,a.Z)(z,2),P=F[0],A=(F[1],(0,i.useState)({loading:!0,videos:null})),D=(0,a.Z)(A,2),G=D[0],H=D[1];(0,i.useEffect)((function(){var e=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u._G();case 2:t=e.sent,y(t),H({loading:!1});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,i.useEffect)((function(){var e=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.xI();case 2:t=e.sent,O(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var J=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.K7();case 3:t=e.sent,v(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){J()}),[]),(0,i.useEffect)((function(){var e=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.yF(t);case 2:r=e.sent,N(r.videos);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();console.log(P),e(P)}),[P]),(0,Z.jsxs)(j.Z,{children:[G.loading?(0,Z.jsx)(e,{isLoading:G.loading,series:k}):"",(0,Z.jsx)("div",{className:"d-flex justify-content-end",children:(0,Z.jsx)("button",{onClick:function(){return window.history.back()},className:"btn btn-light",value:"Volver",children:"Volver"})}),(0,Z.jsx)("h1",{className:"px-3",children:" Listado de Series"}),(0,Z.jsx)("div",{className:"d-flex flex-wrap",children:k.map((function(e,r){return console.log(e),(0,Z.jsxs)("div",{className:" border rounded cursorPointer card-width  p-3 m-3",children:[(0,Z.jsxs)("div",{className:" ",onClick:function(){var r;r=e.id,t("/seeSerie/".concat(r),{state:p}),_(r),console.log(r)},children:[(0,Z.jsx)(b.LazyLoadImage,{effect:"blur",src:"https://sccotview.com"+e.featured_image,className:"rounded mb-2",alt:""}),(0,Z.jsx)("h3",{className:" text-capitalize truncate-text",children:e.serie}),(0,Z.jsx)("p",{className:" truncate-text mb-0",children:e.description})]}),(0,Z.jsx)("div",{className:" ",children:U.map((function(t,r){return console.log(t),e.id===t.serie?(0,Z.jsx)("div",{},r):null}))})]},r)}))})]})}},6542:function(e,t,r){r.d(t,{Ed:function(){return u},Zg:function(){return f},_G:function(){return c},dS:function(){return o}});var n=r(4165),s=r(5861),a=r(7411),i="https://sccotview.com/api/series/",c=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get(i);case 2:if(200!==(t=e.sent).status){e.next=7;break}return e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.post(i,t);case 2:if(200!==(r=e.sent).status){e.next=7;break}return e.next=6,r.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("".concat(i).concat(t));case 2:if(200!==(r=e.sent).status){e.next=7;break}return e.next=6,r.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t,r){var s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.patch(i+t+"/",r);case 2:if(200!==(s=e.sent).status){e.next=5;break}return e.abrupt("return",s.data);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},6639:function(e,t,r){r.d(t,{C1:function(){return f},DN:function(){return u},op:function(){return o},xI:function(){return c}});var n=r(4165),s=r(5861),a=r(7411),i="https://sccotview.com/api/temporadas/",c=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get(i);case 2:if(200!==(t=e.sent).status){e.next=7;break}return e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.post(i,t);case 2:if(200!==(r=e.sent).status){e.next=7;break}return e.next=6,r.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("".concat(i).concat(t));case 2:if(200!==(r=e.sent).status){e.next=7;break}return e.next=6,r.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t,r){var s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.patch(i+t+"/",r);case 2:if(200!==(s=e.sent).status){e.next=5;break}return e.abrupt("return",s.data);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=538.0f5189f5.chunk.js.map