"use strict";(self.webpackChunkvideoteca_frontend=self.webpackChunkvideoteca_frontend||[]).push([[779],{7881:function(e,t,r){r.r(t),r.d(t,{default:function(){return P}});var n=r(9439),s=r(2791),i=r(4165),a=r(5861),o=(r(8040),r(1174),r(5987)),c=r(7689),l=r(8596),u=r(8374),d=r(4554),h=r(5970),f=r(1652),x=(r(5258),r(2592)),p=r(184),v=["video"],m=(0,l.Z)((function(e){return{paper:{marginTop:e.spacing(2),marginBottom:e.spacing(3),display:"flex",flexDirection:"column",alignItems:"center",color:"white"},imagenCarousel:{cursor:"pointer",minWidth:"100%",objectFit:"contain",maxHeight:"85vh",objectPosition:"top"},carouselText:{position:"absolute",bottom:0,left:0,width:"100%",background:"linear-gradient(to bottom, transparent 20%, rgba(24, 26, 54, 0.95) 90%)",padding:"300px 20px 20px"},textTitle:{fontSize:"25px"},"@media (max-width: 500px)":{imagenCarousel:{minWidth:"100%",objectFit:"cover",maxHeight:"100vh",objectPosition:"top"},carouselText:{padding:"120px 20px 10px",bottom:"-24px",zIndex:"10"},textTitle:{fontSize:"18px"},containerRating:{display:"none"}}}})),g=function(e){var t=e.video,r=(0,o.Z)(e,v),n=((0,c.s0)(),m());return(0,p.jsx)("div",{id:"contenedorItemVideo",className:"cursorPointer contenedorItemVideo",children:(0,p.jsxs)("div",{className:""+n.row,onClick:function(){return r.verVideo(t.id)},children:[(0,p.jsx)("div",{className:" "+n.imagen,children:(0,p.jsx)(x.Z,{src:"https://sccotview.com"+t.featured_image,className:n.imagenCarousel+" "})}),(0,p.jsx)("div",{className:" col-12",children:(0,p.jsxs)("div",{className:n.carouselText,children:[(0,p.jsx)("div",{className:"d-flex justify-content-end text-capitalize  ",children:(0,p.jsx)(d.Z,{sx:{"& > legend":{mt:2}},className:n.containerRating,children:(0,p.jsx)("div",{className:"bg-secondary d-inline pt-2 px-1 rounded-2",children:(0,p.jsx)(h.Z,{name:"read-only",value:parseFloat(t.score),precision:.5,readOnly:!0})})})}),(0,p.jsx)("h3",{className:"".concat(n.textTitle," text-light text-capitalize text-start border-bottom border-white pb-2"),children:t.title_espanol}),t.autor.length>0&&(0,p.jsxs)("ul",{className:"d-flex flex-wrap justify-content-start p-0 text-light",children:[(0,p.jsxs)("div",{className:"d-flex justify-content-between w-100 mb-2",children:[(0,p.jsxs)("div",{children:[(0,p.jsxs)("span",{className:"text-capitalize small",children:[t.autor.length>1?"Autores":"Autor"," \u2192"]}),t.autor.slice(0,2).map((function(e,t,r){return(0,p.jsx)("p",{className:"px-1 rounded-4 m-0 d-inline",children:(0,p.jsxs)("small",{className:"text-capitalize ",style:{fontSize:"0.85rem"},children:[e.autor,t<r.length-1?",":""]})},e.id)}))]}),(0,p.jsx)("p",{className:"mx-1",style:{fontSize:"0.95rem"},children:function(e){var t=e.split(":"),r="";return t&&("00"!==t[0]&&(r=t[0]+"h"),"00"!==t[1]&&(r=" "+r+" "+t[1]+"min")),r.trim()}(t.duration)})]}),t.autor.length>2&&(0,p.jsx)("span",{className:"px-2 small",style:{fontSize:"0.85rem"},children:"..."})]})]})})]})})},j=r(1756),Z=r(9929),w=r(8733),b=r(2680),y=r(8434),N=["videos","categories","search","search2"],k=(0,l.Z)((function(e){return{root:{},"@media (max-width: 1248px)":{root:{display:"flex"}}}}));var S=function(e){var t=e.videos,r=e.categories,l=e.search,d=e.search2,h=((0,o.Z)(e,N),(0,c.s0)()),f=(0,s.useState)(),x=(0,n.Z)(f,2),v=x[0],m=x[1],S=(0,s.useState)(null),C=(0,n.Z)(S,2),_=C[0],V=C[1],L=(0,s.useState)(null),z=(0,n.Z)(L,2),F=z[0],U=z[1],E=(0,s.useContext)(b.Z).user,I=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.UH({user_id:E.id});case 3:t=e.sent,m(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.kt({user_id:E.id});case 3:t=e.sent,V(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();(0,s.useEffect)((function(){I(),P()}),[]),(0,s.useEffect)((function(){if(_&&r){for(var e=[],t=[],n=[],s=0;s<_.length;s++)t.push(_[s].categoria);for(var i=0;i<r.length;i++)n.push(r[i]);for(var a=0;a<n.length;a++){for(var o=!1,c=0;c<t.length&!o;c++)n[a].categoria===t[c]&&(o=!0);e=_,o||e.push(n[a])}U(e||null)}}),[r,_]);var T=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t){var r,n,s,a,o,c;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=new FormData,s=0,r.append("usuario",E.id),r.append("video",t),e.prev=4,a=0;a<v.length;a++)(o=v[a]).usuario.id===E.id&&o.video===t&&(n=o,s++);if(0!==s){e.next=11;break}return e.next=9,Z.LK(r);case 9:c=e.sent,n=c.data;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log(e.t0);case 16:h("/seeVideo/".concat(t),{state:n});case 17:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t){return e.apply(this,arguments)}}(),O=k();return t.length>0?(0,p.jsxs)("div",{className:"",children:[(0,p.jsx)("div",{id:"carousel_videos",children:(0,p.jsx)(u.Z,{className:O.root,id:"carousel",fade:!0,children:t&&l(t).slice(0,6).map((function(e,t){return(0,p.jsx)(u.Z.Item,{children:(0,p.jsx)(g,{video:e,histUsers:v,user:E,verVideo:T},t)},t)}))})}),(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),(0,p.jsx)("div",{id:"card_videos",className:"",children:_?(0,p.jsx)("div",{children:F&&d(F).map((function(e,r){return(0,p.jsxs)(p.Fragment,{children:[console.log(d(F).length),d(F).length<=1?(0,p.jsx)(y.Z,{categoria:e,videos:t,search:l,histUsers:v,user:E,verVideo:T},r):(0,p.jsx)(j.Z,{categoria:e,videos:t,search:l,histUsers:v,user:E,verVideo:T},r)]})}))}):r&&d(r).map((function(e,r){return(0,p.jsx)(y.Z,{categoria:e,videos:t,search:l,histUsers:v,user:E,verVideo:T},r)}))})]}):(0,p.jsx)("div",{id:"card_videos m-5 text-center",children:(0,p.jsx)("h2",{style:{color:"white"},children:(0,p.jsx)("center",{children:"No hay videos disponibles"})})})},C=r(3927),_=r(5764),V=r(9278),L=r(9378),z=["videos","categories"],F=(0,l.Z)((function(e){return{root:{margin:"auto"},"@media (max-width: 1248px)":{root:{display:"flex"}},"@media (max-width: 768px)":{root:{}}}}));var U=function(e){var t=e.videos,r=e.categories,l=(0,o.Z)(e,z),d=(0,c.s0)(),h=(0,s.useState)(null),f=(0,n.Z)(h,2),x=f[0],v=f[1],m=(0,s.useState)(null),g=(0,n.Z)(m,2),N=g[0],k=g[1],S=(0,s.useState)(null),C=(0,n.Z)(S,2),_=C[0],V=C[1],U=(0,s.useContext)(b.Z).user,E=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.UH({user_id:U.id});case 3:t=e.sent,v(t),console.log(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.kt({user_id:U.id});case 3:t=e.sent,k(t),console.log(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();(0,s.useEffect)((function(){E(),I()}),[]),(0,s.useEffect)((function(){if(N&&r){for(var e=[],t=[],n=[],s=0;s<N.length;s++)t.push(N[s].categoria);for(var i=0;i<r.length;i++)n.push(r[i]);for(var a=0;a<n.length;a++){for(var o=!1,c=0;c<t.length&!o;c++)n[a].categoria===t[c]&&(o=!0);e=N,o||e.push(n[a])}V(e||null)}}),[r,N]);var P=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t){var r,n,s,a,o,c;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=new FormData,s=0,r.append("usuario",U.id),r.append("video",t),e.prev=4,a=0;a<x.length;a++)(o=x[a]).usuario.id===U.id&&o.video===t&&(n=o,s++);if(0!==s){e.next=11;break}return e.next=9,Z.LK(r);case 9:c=e.sent,n=c.data;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log(e.t0);case 16:d("/seeVideo/".concat(t),{state:n});case 17:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t){return e.apply(this,arguments)}}();console.log(_);var T=F();return(0,p.jsxs)("div",{children:[(0,p.jsx)("div",{id:"carousel_videos",className:" ",children:(0,p.jsx)(u.Z,{className:T.root,id:"carousel",children:t&&l.search(t).slice(0,6).map((function(e,t){return(0,p.jsx)(u.Z.Item,{children:(0,p.jsx)(L.Z,{video:e,listVideos:l.listVideos,histUsers:x,user:U,verVideo:P},e.id)},t)}))})}),(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),(0,p.jsx)("div",{id:"card_videos",className:"mt-5",children:t&&N?(0,p.jsx)("div",{className:"",children:_&&l.search2(_).map((function(e,r){return(0,p.jsx)(p.Fragment,{children:l.search2(_).length<=1?(0,p.jsx)(y.Z,{categoria:e,videos:t,search:l.search,histUsers:x,user:U,verVideo:P},r):(0,p.jsx)(j.Z,{categoria:e,videos:t,search:l.search,histUsers:x,user:U,verVideo:P},r)})}))}):l.search2(r).map((function(e,n){return(0,p.jsx)("div",{children:l.search2(r).length<=1?(0,p.jsx)(y.Z,{categoria:e,videos:t,search:l.search,histUsers:x,user:U,verVideo:P},n):(0,p.jsx)(j.Z,{categoria:e,videos:t,search:l.search,histUsers:x,user:U,verVideo:P},n)},n)}))})]})},E=function(e){var t=e.videos,r=document.getElementById("carousel"),o=(0,s.useState)(""),c=(0,n.Z)(o,2),l=c[0],u=c[1],d=(0,s.useState)([]),h=(0,n.Z)(d,2),f=h[0],x=h[1],v=(0,s.useState)(["title_espanol","description_esp"]),m=(0,n.Z)(v,1)[0],g=(0,s.useState)(["categoria"]),j=(0,n.Z)(g,1)[0],Z=(0,s.useContext)(b.Z).user,w=(0,s.useState)(t),y=(0,n.Z)(w,2),N=y[0],k=y[1],L=(0,s.useState)("All"),z=(0,n.Z)(L,2),F=z[0],E=z[1],I=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,_.wb)();case 3:t=e.sent,x(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();(0,s.useEffect)((function(){function e(){return(e=(0,a.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/categorias/1/").then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.warn(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),I()}),[]);var P=function(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"")},T=function(e){if(l){if(l){var t=P(l.toLowerCase()),r=e.filter((function(e){var r=P(e.title_espanol).toString().toLowerCase().indexOf(t)>-1,n=P(e.description_esp).toString().toLowerCase().indexOf(t)>-1,s=e.categorias.some((function(e){return P(e.categoria.toLowerCase()).includes(t)}));return r||n||s}));return console.log(r),r}return e.filter((function(e){return P(e.categorias.categoria.toString()).toLowerCase().indexOf(P(l.toLowerCase()))>-1}))}return e},O=function(e){return e.filter((function(e){if(r){if(e.categoria===F)return r.style.visibility="hidden",r.style.height="10px",j.some((function(t){return P(e[t]).toString().toLowerCase().indexOf(P(l.toLowerCase()))>-1}));if("All"===F)return r.style.visibility="visible",r.style.height="100%",t.filter((function(e){return m.some((function(t){return P(e[t]).toString().toLowerCase().indexOf(P(l.toLowerCase()))>-1}))}))}else console.log("tuvimos problemas para cargar el carousel por favor recargar")}))};return(0,s.useEffect)((function(){var e=T(t);k(e)}),[l,t]),Z?Z.is_superuser?(0,p.jsxs)("div",{children:[(0,p.jsx)(V.Z,{query:l,setQuery:u,filterParam:F,setFilterParam:E,categories:f}),N.length>0?(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(S,{videos:N,categories:f,search:T,search2:O})}):(0,p.jsx)("h1",{className:"m-5 text-center",children:"No se encontraron videos"})]}):(0,p.jsxs)("div",{children:[(0,p.jsx)(V.Z,{query:l,setQuery:u,filterParam:F,setFilterParam:E,categories:f}),(0,p.jsx)(C.S,{children:N.length>0?(0,p.jsx)(U,{videos:N,categories:f,search:T,search2:O}):(0,p.jsx)("h1",{className:"m-5 text-center",children:"No se encontraron videos"})})]}):(0,p.jsx)("p",{style:{fontSize:"25px"},className:"text-center m-5",children:"Inicia sesi\xf3n para ver todos los videos!"})},I=r(2516),P=function(){var e=(0,I.Z)(E),t=(0,s.useState)({loading:!0,videos:null}),r=(0,n.Z)(t,2),i=r[0],a=r[1];return(0,s.useEffect)((function(){f.Zs().then((function(e){var t=e.videos;a({loading:!1,videos:t})}))}),[a]),(0,p.jsx)("div",{className:"App",children:(0,p.jsx)(e,{isLoading:i.loading,videos:i.videos})})}}}]);
//# sourceMappingURL=779.399f3e30.chunk.js.map