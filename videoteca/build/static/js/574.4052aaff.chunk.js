"use strict";(self.webpackChunkvideoteca_frontend=self.webpackChunkvideoteca_frontend||[]).push([[574],{4345:function(e,t,r){r.d(t,{Z:function(){return k}});var i=r(4165),n=r(5861),s=r(9439),a=r(5987),o=r(2791),c=r(7689),u=(r(8040),r(8596)),d=r(8374),l=r(9378),f=(r(5151),r(7087),r(9713),r(184)),h=((0,u.Z)((function(e){return{item:{flex:"0 0 0%",margin:"0 0px",position:"relative",padding:"0"},imagenContainer:{width:"360px",height:"190px",overflow:"hidden",border:"2px solid transparent"},imgClass:{width:"300px",height:"200px"}}})),r(359)),p=(r(5258),r(865),["categoria","verVideo"]),v=function(e){var t=e.categoria,r=e.verVideo,i=(0,a.Z)(e,p);if(t){var n=i.videos&&i.search(i.videos).filter((function(e){return e.categorias.some((function(e){return t.categoria===e.categoria}))}));return(0,f.jsx)("div",{children:n.length>0&&(0,f.jsxs)("div",{className:"col-12 contenedorXcateg",children:[(0,f.jsxs)("h2",{className:"titleCateg ms-3",children:["| ",t.categoria,(0,f.jsx)("small",{children:" \u25b6"})]},t.id),(0,f.jsx)("div",{className:"row",children:(0,f.jsx)(h.Z,{verVideo:r,children:n.map((function(e){return(0,f.jsx)(h.Z.Item,{video:e,histUsers:i.histUsers,user:i.user,verVideo:r},e.id)}))})})]})})}},x=r(1187),g=r(9929),m=r(8733),Z=r(2680),b=["videos","categories"],j=(0,u.Z)((function(e){return{root:{maxWidth:1248,maxHeight:460,margin:"auto"},"@media (max-width: 1248px)":{root:{display:"flex"}}}}));var k=function(e){var t=e.videos,r=e.categories,u=(0,a.Z)(e,b),h=(0,c.s0)(),p=(0,o.useState)(),k=(0,s.Z)(p,2),w=k[0],y=k[1],S=(0,o.useState)(null),C=(0,s.Z)(S,2),L=C[0],W=C[1],N=(0,o.useState)(null),V=(0,s.Z)(N,2),_=V[0],E=V[1],O=(0,o.useContext)(Z.Z).user,U=function(){var e=(0,n.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.UH({user_id:O.id});case 3:t=e.sent,y(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=(0,n.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.kt({user_id:O.id});case 3:t=e.sent,W(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();(0,o.useEffect)((function(){U(),I()}),[]),(0,o.useEffect)((function(){if(L&&r){for(var e=[],t=[],i=[],n=0;n<L.length;n++)t.push(L[n].categoria);for(var s=0;s<r.length;s++)i.push(r[s]);for(var a=0;a<i.length;a++){for(var o=!1,c=0;c<t.length&!o;c++)i[a].categoria===t[c]&&(o=!0);o||e.push(i[a])}console.log(),E(e||null)}}),[r,L]);var R=function(){var e=(0,n.Z)((0,i.Z)().mark((function e(t){var r,n,s,a,o,c;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=new FormData,s=0,r.append("usuario",O.id),r.append("video",t),e.prev=4,a=0;a<w.length;a++)(o=w[a]).usuario.id===O.id&&o.video===t&&(n=o,s++);if(0!==s){e.next=11;break}return e.next=9,g.LK(r);case 9:c=e.sent,n=c.data;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log(e.t0);case 16:h("/seeVideo/".concat(t),{state:n});case 17:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t){return e.apply(this,arguments)}}(),G=j();return t.length>0?(0,f.jsxs)("div",{children:[(0,f.jsxs)("div",{id:"carousel_videos",children:[(0,f.jsx)("h2",{children:"\ud83d\udd51 \xdaltimos videos"}),(0,f.jsx)(d.Z,{className:G.root,id:"carousel",fade:!0,children:t&&u.search(t).slice(0,4).map((function(e){return(0,f.jsx)(d.Z.Item,{children:(0,f.jsx)(l.Z,{video:e,listVideos:u.listVideos,histUsers:w,user:O,verVideo:R},e.id)},e.id)}))})]}),(0,f.jsx)("br",{}),(0,f.jsx)("hr",{}),(0,f.jsx)("div",{id:"card_videos",children:L?(0,f.jsxs)("div",{children:[L&&u.search2(L).map((function(e,r){return(0,f.jsx)(x.Z,{categoria:e,videos:t,search:u.search,histUsers:w,user:O,verVideo:R},r)})),_&&u.search2(_).map((function(e,r){return(0,f.jsx)(x.Z,{categoria:e,videos:t,search:u.search,histUsers:w,user:O,verVideo:R},r)}))]}):r&&u.search2(r).map((function(e){return(0,f.jsx)(v,{categoria:e,videos:t,search:u.search,histUsers:w,user:O,verVideo:R},e.id)}))})]}):(0,f.jsx)("div",{id:"card_videos",children:(0,f.jsx)("h2",{style:{color:"white"},children:(0,f.jsx)("center",{children:"No hay videos en este modulo!!"})})})}},1754:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var i=r(9439),n=r(2791),s=r(4165),a=r(5861),o=r(5987),c=(r(8040),r(1174),r(3927)),u=r(5764),d=r(6180),l=r(4345),f=r(184),h=["casos"],p=function(e){var t=e.casos,r=((0,o.Z)(e,h),document.getElementById("carousel")),p=(0,n.useState)(""),v=(0,i.Z)(p,2),x=v[0],g=v[1],m=(0,n.useState)([]),Z=(0,i.Z)(m,2),b=Z[0],j=Z[1],k=(0,n.useState)(["title_espanol","description_esp"]),w=(0,i.Z)(k,1)[0],y=(0,n.useState)(["categoria"]),S=(0,i.Z)(y,1)[0],C=(0,n.useState)("All"),L=(0,i.Z)(C,2),W=L[0],N=L[1],V=localStorage.getItem("user"),_=JSON.parse(V),E=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.wb)();case 3:t=e.sent,j(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();(0,n.useEffect)((function(){E()}),[]);var O=function(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"")};return _?(0,f.jsxs)("div",{children:[(0,f.jsx)(d.Z,{query:x,setQuery:g,filterParam:W,setFilterParam:N,categories:b}),(0,f.jsx)(c.S,{children:(0,f.jsx)(l.Z,{videos:t,categories:b,search:function(e){if(x){if(x){r.style.visibility="hidden",r.style.height="10px";var t=O(x.toLowerCase());return e.filter((function(e){var r=O(e.title_espanol).toString().toLowerCase().indexOf(t)>-1,i=O(e.description_esp).toString().toLowerCase().indexOf(t)>-1,n=e.categorias.some((function(e){return O(e.categoria.toLowerCase()).includes(t)}));return r||i||n}))}return e.filter((function(e){return O(e.categorias.categoria.toString()).toLowerCase().indexOf(x.toLowerCase())>-1}))}return e},search2:function(e){return e.filter((function(e){if(r){if(e.categoria===W)return r.style.visibility="hidden",r.style.height="10px",S.some((function(t){return O(e[t]).toString().toLowerCase().indexOf(O(x.toLowerCase()))>-1}));if("All"===W)return r.style.visibility="visible",r.style.height="100%",t.filter((function(e){return w.some((function(t){return O(e[t]).toString().toLowerCase().indexOf(O(x.toLowerCase()))>-1}))}))}}))}})})]}):(0,f.jsx)("p",{style:{fontSize:"25px"},children:"Inicia sesi\xf3n para ver todos los videos!"})},v=r(2516),x=r(1652),g=r(3712);var m=function(){var e=(0,v.Z)(p),t=(0,n.useState)({loading:!0,videos:null}),r=(0,i.Z)(t,2),s=r[0],a=r[1];return(0,n.useEffect)((function(){x.jk().then((function(e){var t=e.videos;a({loading:!1,videos:t})}))}),[a]),(0,f.jsx)(g.Z,{children:(0,f.jsx)("div",{className:"App",children:(0,f.jsx)(e,{isLoading:s.loading,casos:s.videos})})})}},3712:function(e,t,r){var i=r(7462),n=r(5987),s=r(4942),a=r(2791),o=r(8182),c=r(8317),u=r(1122),d=a.forwardRef((function(e,t){var r=e.classes,s=e.className,c=e.component,d=void 0===c?"div":c,l=e.disableGutters,f=void 0!==l&&l,h=e.fixed,p=void 0!==h&&h,v=e.maxWidth,x=void 0===v?"lg":v,g=(0,n.Z)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return a.createElement(d,(0,i.Z)({className:(0,o.Z)(r.root,s,p&&r.fixed,f&&r.disableGutters,!1!==x&&r["maxWidth".concat((0,u.Z)(String(x)))]),ref:t},g))}));t.Z=(0,c.Z)((function(e){return{root:(0,s.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,r){var i=e.breakpoints.values[r];return 0!==i&&(t[e.breakpoints.up(r)]={maxWidth:i}),t}),{}),maxWidthXs:(0,s.Z)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:(0,s.Z)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:(0,s.Z)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:(0,s.Z)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:(0,s.Z)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(d)}}]);
//# sourceMappingURL=574.4052aaff.chunk.js.map