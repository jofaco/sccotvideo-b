"use strict";(self.webpackChunkvideoteca_frontend=self.webpackChunkvideoteca_frontend||[]).push([[405],{4345:function(e,t,r){r.d(t,{Z:function(){return w}});var i=r(4165),s=r(5861),n=r(9439),a=r(5987),o=r(2791),c=r(7689),d=(r(8040),r(8596)),u=r(8374),l=r(9378),h=(r(5151),r(7087),r(9713),r(184)),f=((0,d.Z)((function(e){return{item:{flex:"0 0 0%",margin:"0 0px",position:"relative",padding:"0"},imagenContainer:{width:"360px",height:"190px",overflow:"hidden",border:"2px solid transparent"},imgClass:{width:"300px",height:"200px"}}})),r(7543)),v=(r(5258),r(865),["categoria","verVideo"]),p=function(e){var t=e.categoria,r=e.verVideo,i=(0,a.Z)(e,v);if(t){var s=i.videos&&i.search(i.videos).filter((function(e){return e.categorias.some((function(e){return t.categoria===e.categoria}))}));return(0,h.jsx)("div",{children:s.length>0&&(0,h.jsxs)("div",{className:"col-12 contenedorXcateg",children:[(0,h.jsxs)("div",{className:"d-flex align-items-center ",children:[(0,h.jsxs)("h2",{className:"me-3",children:["| ",t.categoria,(0,h.jsx)("small",{children:" \u25b6 "})," "]},t.id),(0,h.jsxs)("small",{className:"border-bottom border-light mb-2",children:[s.length," Videos"]})]}),(0,h.jsx)("div",{className:"row",children:(0,h.jsx)(f.Z,{verVideo:r,children:s.map((function(e){return(0,h.jsx)(f.Z.Item,{video:e,histUsers:i.histUsers,user:i.user,verVideo:r},e.id)}))})})]})})}},x=r(1187),g=r(9929),m=r(8733),Z=r(2680),b=r(8434),j=["videos","categories"],k=(0,d.Z)((function(e){return{root:{maxWidth:1248,maxHeight:460,margin:"auto"},"@media (max-width: 1248px)":{root:{display:"flex"}}}}));var w=function(e){var t=e.videos,r=e.categories,d=(0,a.Z)(e,j),f=(0,c.s0)(),v=(0,o.useState)(),w=(0,n.Z)(v,2),y=w[0],S=w[1],C=(0,o.useState)(null),L=(0,n.Z)(C,2),W=L[0],V=L[1],N=(0,o.useState)(null),_=(0,n.Z)(N,2),U=_[0],E=_[1],O=(0,o.useContext)(Z.Z).user,I=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.UH({user_id:O.id});case 3:t=e.sent,S(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.kt({user_id:O.id});case 3:t=e.sent,V(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();(0,o.useEffect)((function(){I(),R()}),[]),(0,o.useEffect)((function(){if(W&&r){for(var e=[],t=[],i=[],s=0;s<W.length;s++)t.push(W[s].categoria);for(var n=0;n<r.length;n++)i.push(r[n]);for(var a=0;a<i.length;a++){for(var o=!1,c=0;c<t.length&!o;c++)i[a].categoria===t[c]&&(o=!0);e=W,o||e.push(i[a])}E(e||null)}}),[r,W]);var F=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(t){var r,s,n,a,o,c;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=new FormData,n=0,r.append("usuario",O.id),r.append("video",t),e.prev=4,a=0;a<y.length;a++)(o=y[a]).usuario.id===O.id&&o.video===t&&(s=o,n++);if(0!==n){e.next=11;break}return e.next=9,g.LK(r);case 9:c=e.sent,s=c.data;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log(e.t0);case 16:f("/seeVideo/".concat(t),{state:s});case 17:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t){return e.apply(this,arguments)}}(),G=k();return t.length>0?(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{id:"carousel_videos",children:[(0,h.jsx)("h2",{children:"\ud83d\udd51 \xdaltimos videos"}),(0,h.jsx)(u.Z,{className:G.root,id:"carousel",fade:!0,children:t&&d.search(t).slice(0,6).map((function(e,t){return(0,h.jsx)(u.Z.Item,{children:(0,h.jsx)(l.Z,{video:e,listVideos:d.listVideos,histUsers:y,user:O,verVideo:F},t)},t)}))})]}),(0,h.jsx)("br",{}),(0,h.jsx)("hr",{}),(0,h.jsx)("div",{id:"card_videos",children:W?(0,h.jsx)("div",{children:U&&d.search2(U).map((function(e,r){return(0,h.jsx)(h.Fragment,{children:d.search2(U).length<=1?(0,h.jsx)(b.Z,{categoria:e,videos:t,search:d.search,histUsers:y,user:O,verVideo:F},r):(0,h.jsx)(x.Z,{categoria:e,videos:t,search:d.search,histUsers:y,user:O,verVideo:F},r)})}))}):r&&d.search2(r).map((function(e,i){return(0,h.jsx)("div",{children:d.search2(r).length<=1?(0,h.jsx)(b.Z,{categoria:e,videos:t,search:d.search,histUsers:y,user:O,verVideo:F},i):(0,h.jsx)(p,{categoria:e,videos:t,search:d.search,histUsers:y,user:O,verVideo:F},i)},i)}))})]}):(0,h.jsx)("div",{id:"card_videos",children:(0,h.jsx)("h2",{style:{color:"white"},children:(0,h.jsx)("center",{children:"No hay videos en este modulo!!"})})})}},8885:function(e,t,r){r.r(t),r.d(t,{default:function(){return Z}});var i=r(9439),s=r(2791),n=r(1652),a=r(4165),o=r(5861),c=r(5987),d=(r(8040),r(1174),r(5764)),u=r(6180),l=r(2680),h=r(3927),f=r(4345),v=r(184),p=["peliculas"],x=function(e){var t=e.peliculas,r=((0,c.Z)(e,p),document.getElementById("carousel")),n=(0,s.useState)(""),x=(0,i.Z)(n,2),g=x[0],m=x[1],Z=(0,s.useState)([]),b=(0,i.Z)(Z,2),j=b[0],k=b[1],w=(0,s.useState)(["title_espanol","description_esp"]),y=(0,i.Z)(w,1)[0],S=(0,s.useState)(["categoria"]),C=(0,i.Z)(S,1)[0],L=(0,s.useContext)(l.Z).user,W=(0,s.useState)("All"),V=(0,i.Z)(W,2),N=V[0],_=V[1],U=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.wb)();case 3:t=e.sent,k(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();(0,s.useEffect)((function(){U()}),[]);var E=function(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"")},O=function(e){if(g){if(g){r.style.visibility="hidden",r.style.height="10px";var t=E(g.toLowerCase());return e.filter((function(e){var r=E(e.title_espanol).toString().toLowerCase().indexOf(t)>-1,i=E(e.description_esp).toString().toLowerCase().indexOf(t)>-1,s=e.categorias.some((function(e){return E(e.categoria.toLowerCase()).includes(t)}));return r||i||s}))}return e.filter((function(e){return E(e.categorias.categoria.toString()).toLowerCase().indexOf(E(g.toLowerCase()))>-1}))}return e},I=function(e){return e.filter((function(e){return e.categoria===N&&r?(r.style.visibility="hidden",r.style.height="10px",C.some((function(t){return E(e[t]).toString().toLowerCase().indexOf(E(g.toLowerCase()))>-1}))):"All"===N&&r?(r.style.visibility="visible",r.style.height="100%",t.filter((function(e){return y.some((function(t){return E(e[t]).toString().toLowerCase().indexOf(E(g.toLowerCase()))>-1}))}))):void 0}))};return L?(L.is_superuser,(0,v.jsxs)("div",{children:[(0,v.jsx)(u.Z,{query:g,setQuery:m,filterParam:N,setFilterParam:_,categories:j}),(0,v.jsx)(h.S,{children:(0,v.jsx)(f.Z,{videos:t,categories:j,search:O,search2:I})})]})):(0,v.jsx)("p",{style:{fontSize:"25px"},children:"Inicia sesi\xf3n para ver todos los videos!"})},g=r(2516),m=r(3712);var Z=function(){var e=(0,g.Z)(x),t=(0,s.useState)({loading:!0,videos:null}),r=(0,i.Z)(t,2),a=r[0],o=r[1];return(0,s.useEffect)((function(){n.PI().then((function(e){var t=e.videos;o({loading:!1,videos:t})}))}),[o]),(0,v.jsx)(m.Z,{children:(0,v.jsx)("div",{className:"App",children:(0,v.jsx)(e,{isLoading:a.loading,peliculas:a.videos})})})}},3712:function(e,t,r){var i=r(7462),s=r(5987),n=r(4942),a=r(2791),o=r(8182),c=r(8317),d=r(1122),u=a.forwardRef((function(e,t){var r=e.classes,n=e.className,c=e.component,u=void 0===c?"div":c,l=e.disableGutters,h=void 0!==l&&l,f=e.fixed,v=void 0!==f&&f,p=e.maxWidth,x=void 0===p?"lg":p,g=(0,s.Z)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return a.createElement(u,(0,i.Z)({className:(0,o.Z)(r.root,n,v&&r.fixed,h&&r.disableGutters,!1!==x&&r["maxWidth".concat((0,d.Z)(String(x)))]),ref:t},g))}));t.Z=(0,c.Z)((function(e){return{root:(0,n.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,r){var i=e.breakpoints.values[r];return 0!==i&&(t[e.breakpoints.up(r)]={maxWidth:i}),t}),{}),maxWidthXs:(0,n.Z)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:(0,n.Z)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:(0,n.Z)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:(0,n.Z)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:(0,n.Z)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(u)}}]);
//# sourceMappingURL=405.6c2976ac.chunk.js.map