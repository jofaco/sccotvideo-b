"use strict";(self.webpackChunkvideoteca_frontend=self.webpackChunkvideoteca_frontend||[]).push([[574],{4345:function(e,r,t){t.d(r,{Z:function(){return y}});var n=t(4165),i=t(5861),s=t(9439),o=t(5987),a=t(2791),c=t(7689),u=(t(8040),t(8596)),d=t(8374),l=t(9378),f=(t(5151),t(7087),t(9713),t(4944),t(184)),h=((0,u.Z)((function(e){return{item:{flex:"0 0 0%",margin:"0 0px",position:"relative",padding:"0"},imagenContainer:{width:"360px",height:"190px",overflow:"hidden",border:"2px solid transparent"},imgClass:{width:"300px",height:"200px"}}})),t(3743)),v=(t(5258),t(865),["categoria","verVideo"]),p=function(e){var r=e.categoria,t=e.verVideo,n=(0,o.Z)(e,v);if(r){var i=n.videos&&n.search(n.videos).filter((function(e){return e.categorias.some((function(e){return r.categoria===e.categoria}))}));return(0,f.jsx)("div",{children:i.length>0&&(0,f.jsxs)("div",{className:"col-12 contenedorXcateg",children:[(0,f.jsxs)("h2",{className:"titleCateg ms-3",children:["| ",r.categoria,(0,f.jsx)("small",{children:" \u25b6"})]},r.id),(0,f.jsx)("div",{className:"row",children:(0,f.jsx)(h.Z,{verVideo:t,children:i.map((function(e){return(0,f.jsx)(h.Z.Item,{video:e,histUsers:n.histUsers,user:n.user,verVideo:t},e.id)}))})})]})})}},x=t(1187),g=t(9929),m=t(8733),Z=t(2680),j=["videos","categories"],w=(0,u.Z)((function(e){return{root:{maxWidth:1248,maxHeight:460,margin:"auto"},"@media (max-width: 1248px)":{root:{display:"flex"}}}}));var y=function(e){var r=e.videos,t=e.categories,u=(0,o.Z)(e,j),h=(0,c.s0)(),v=(0,a.useState)(),y=(0,s.Z)(v,2),S=y[0],k=y[1],C=(0,a.useState)(null),b=(0,s.Z)(C,2),V=b[0],L=b[1],_=(0,a.useState)(null),U=(0,s.Z)(_,2),N=U[0],E=U[1],I=(0,a.useContext)(Z.Z).user,O=function(){var e=(0,i.Z)((0,n.Z)().mark((function e(){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.UH({user_id:I.id});case 3:r=e.sent,k(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=(0,i.Z)((0,n.Z)().mark((function e(){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.kt({user_id:I.id});case 3:r=e.sent,L(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();(0,a.useEffect)((function(){O(),A()}),[]),(0,a.useEffect)((function(){if(V&&t){for(var e=[],r=[],n=[],i=0;i<V.length;i++)r.push(V[i].categoria);for(var s=0;s<t.length;s++)n.push(t[s]);for(var o=0;o<n.length;o++){for(var a=!1,c=0;c<r.length&!a;c++)n[o].categoria===r[c]&&(a=!0);a||e.push(n[o])}console.log(),E(e||null)}}),[t,V]);var F=function(){var e=(0,i.Z)((0,n.Z)().mark((function e(r){var t,i,s,o,a,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=new FormData,s=0,t.append("usuario",I.id),t.append("video",r),e.prev=4,o=0;o<S.length;o++)(a=S[o]).usuario.id===I.id&&a.video===r&&(i=a,s++);if(0!==s){e.next=11;break}return e.next=9,g.LK(t);case 9:c=e.sent,i=c.data;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log(e.t0);case 16:h("/seeVideo/".concat(r),{state:i});case 17:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(r){return e.apply(this,arguments)}}(),H=w();return r.length>0?(0,f.jsxs)("div",{children:[(0,f.jsxs)("div",{id:"carousel_videos",children:[console.log(u.listVideos),console.log(r),(0,f.jsx)("h2",{children:"\ud83d\udd51 Ultimos videos"}),(0,f.jsx)(d.Z,{className:H.root,id:"carousel",fade:!0,children:r&&u.search(r).slice(0,4).map((function(e){return(0,f.jsx)(d.Z.Item,{children:(0,f.jsx)(l.Z,{video:e,listVideos:u.listVideos,histUsers:S,user:I,verVideo:F},e.id)},e.id)}))})]}),(0,f.jsx)("br",{}),(0,f.jsx)("hr",{}),(0,f.jsx)("div",{id:"card_videos",children:V?(0,f.jsxs)("div",{children:[V&&u.search2(V).map((function(e,t){return(0,f.jsx)(x.Z,{categoria:e,videos:r,search:u.search,histUsers:S,user:I,verVideo:F},t)})),N&&u.search2(N).map((function(e,t){return(0,f.jsx)(x.Z,{categoria:e,videos:r,search:u.search,histUsers:S,user:I,verVideo:F},t)}))]}):t&&u.search2(t).map((function(e){return(0,f.jsx)(p,{categoria:e,videos:r,search:u.search,histUsers:S,user:I,verVideo:F},e.id)}))})]}):(0,f.jsx)("div",{id:"card_videos",children:(0,f.jsx)("h2",{style:{color:"white"},children:(0,f.jsx)("center",{children:"No hay videos en este modulo!!"})})})}},1754:function(e,r,t){t.r(r),t.d(r,{default:function(){return m}});var n=t(9439),i=t(2791),s=t(4165),o=t(5861),a=t(5987),c=(t(8040),t(1174),t(3927)),u=t(5764),d=t(9278),l=t(4345),f=t(184),h=["casos"],v=function(e){var r=e.casos,t=((0,a.Z)(e,h),document.getElementById("carousel")),v=(0,i.useState)(""),p=(0,n.Z)(v,2),x=p[0],g=p[1],m=(0,i.useState)(""),Z=(0,n.Z)(m,2),j=Z[0],w=Z[1],y=(0,i.useState)(["title_espanol"]),S=(0,n.Z)(y,1)[0],k=(0,i.useState)(["categoria"]),C=(0,n.Z)(k,1)[0],b=(0,i.useState)(["All"]),V=(0,n.Z)(b,2),L=V[0],_=V[1],U=localStorage.getItem("user"),N=JSON.parse(U),E=function(){var e=(0,o.Z)((0,s.Z)().mark((function e(){var r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.wb)();case 3:r=e.sent,w(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();(0,i.useEffect)((function(){E()}),[]);var I=function(e){if(x){if(x){t.style.visibility="hidden",t.style.height="10px";var r=x.toLowerCase();return e.filter((function(e){var t=e.title_espanol.toString().toLowerCase().indexOf(r)>-1;return t||e.categorias.some((function(e){return e.categoria.toLowerCase().includes(r)}))}))}return e.filter((function(e){return e.categorias.categoria.toString().toLowerCase().indexOf(x.toLowerCase())>-1}))}return e},O=function(e){return e.filter((function(e){if(t){if(e.categoria===L)return t.style.visibility="hidden",t.style.height="10px",C.some((function(r){return e[r].toString().toLowerCase().indexOf(x.toLowerCase())>-1}));if("All"==L)return t.style.visibility="visible",t.style.height="100%",r.filter((function(e){return S.some((function(r){return e[r].toString().toLowerCase().indexOf(x.toLowerCase())>-1}))}))}}))};return N?(N.is_superuser,(0,f.jsxs)("div",{children:[(0,f.jsx)(d.Z,{query:x,setQuery:g,filterParam:L,setFilterParam:_,categories:j}),(0,f.jsx)(c.S,{children:(0,f.jsx)(l.Z,{videos:r,categories:j,search:I,search2:O})})]})):(0,f.jsx)("p",{style:{fontSize:"25px"},children:"Inicia sesi\xf3n para ver todos los videos!"})},p=t(2516),x=t(1652),g=t(3712);var m=function(){var e=(0,p.Z)(v),r=(0,i.useState)({loading:!0,videos:null}),t=(0,n.Z)(r,2),s=t[0],o=t[1];return(0,i.useEffect)((function(){x.jk().then((function(e){var r=e.videos;o({loading:!1,videos:r})}))}),[o]),(0,f.jsx)(g.Z,{children:(0,f.jsx)("div",{className:"App",children:(0,f.jsx)(e,{isLoading:s.loading,casos:s.videos})})})}}}]);
//# sourceMappingURL=574.43ec3212.chunk.js.map