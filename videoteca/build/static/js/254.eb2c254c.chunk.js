(self.webpackChunkvideoteca_frontend=self.webpackChunkvideoteca_frontend||[]).push([[254],{7881:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return U}});var n=t(9439),i=t(2791),s=t(4165),o=t(5861),a=(t(8040),t(1174),t(5987)),c=t(7689),u=t(8596),l=t(8374),d=t(2592),f=t(6513),p=t(697),h=t(9705),v=t(1652),x=(t(5258),t(184)),m=["video"],g=(0,u.Z)((function(e){return{paper:{marginTop:e.spacing(2),marginBottom:e.spacing(3),display:"flex",flexDirection:"column",alignItems:"center",color:"white"},imagenCarousel:{minWidth:"100%",height:400,objectFit:"cover"},"@media (min-width: 1200px)":{}}})),Z=function(e){var r=e.video,t=(0,a.Z)(e,m),n=(0,c.s0)(),i=function(){var e=(0,o.Z)((0,s.Z)().mark((function e(r){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.gY(r);case 2:window.location.reload();case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),u=g();return(0,x.jsx)("div",{id:"contenedorItemVideo",children:(0,x.jsxs)("div",{className:"row "+u.row,children:[(0,x.jsx)("div",{className:"col-md-8  col-12 "+u.imagen,children:(0,x.jsx)(f.Z,{onClick:function(){return t.verVideo(r.id)},children:(0,x.jsx)(d.Z,{src:"https://sccotview.com"+r.featured_image,className:u.imagenCarousel})})}),(0,x.jsxs)("div",{className:"col-md-4 col-12 ",children:[(0,x.jsxs)("div",{children:[(0,x.jsxs)("div",{className:"d-flex justify-content-between mt-3 text-capitalize mb-3",children:[(0,x.jsx)("p",{className:"text-light h5 ",children:function(e){var r=e.split(":"),t="";return r&&("00"!==r[0]&&(t=r[0]+"h"),"00"!==r[1]&&(t=" "+t+" "+r[1]+"min")),t.trim()}(r.duration)}),(0,x.jsx)(p.Z,{sx:{"& > legend":{mt:2}},children:(0,x.jsx)("div",{className:"bg-secondary d-inline pt-3 px-1 rounded-2",children:(0,x.jsx)(h.Z,{name:"read-only",value:parseFloat(r.score),precision:.5,readOnly:!0})})})]}),(0,x.jsx)("h3",{className:"h5 text-light text-capitalize text-start border-bottom border-white pb-2",children:r.title_espanol}),(0,x.jsx)("span",{className:"text-light text-start font-weight-light text-capitalize truncate-text-6",children:r.description_esp})]}),(0,x.jsx)("br",{}),(0,x.jsxs)("div",{className:"d-grid gap-2 col-6 mx-auto",children:[(0,x.jsx)("button",{onClick:function(){return n("/updateVideo/".concat(r.id))},className:"ms-6 btn  btn-primary",children:"Actualizar"}),(0,x.jsx)("button",{onClick:function(){return r.id&&i(r.id)},className:"btn btn-outline-danger my-2",children:"Eliminar"})]})]})]})})},j=t(1187),b=t(9929),w=["videos","categories"],y=(0,u.Z)((function(e){return{root:{maxWidth:1248,maxHeight:450,margin:"auto"},"@media (max-width: 1248px)":{root:{display:"flex"}},"@media (max-width: 768px)":{root:{minHeight:780}}}}));var k=function(e){var r=e.videos,t=e.categories,u=(0,a.Z)(e,w),d=(0,c.s0)(),f=(0,i.useState)(),p=(0,n.Z)(f,2),h=p[0],v=p[1],m=localStorage.getItem("user"),g=JSON.parse(m),k=function(){var e=(0,o.Z)((0,s.Z)().mark((function e(){var r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.K7();case 3:r=e.sent,console.log(r),v(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();(0,i.useEffect)((function(){k()}),[]);var C=function(){var e=(0,o.Z)((0,s.Z)().mark((function e(r){var t,n,i,o,a,c;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=new FormData,i=0,t.append("usuario",g.id),t.append("video",r),e.prev=4,o=0;o<h.length;o++)(a=h[o]).usuario.id===g.id&&a.video===r&&(n=a,i++);if(0!==i){e.next=11;break}return e.next=9,b.LK(t);case 9:c=e.sent,n=c.data;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log(e.t0);case 16:d("/seeVideo/".concat(r),{state:n});case 17:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(r){return e.apply(this,arguments)}}(),N=y();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{id:"carousel_videos",children:[(0,x.jsx)("h2",{children:"\xdaltimos videos "}),(0,x.jsx)(l.Z,{className:N.root,id:"carousel",fade:!0,children:r&&u.search(r).map((function(e){return(0,x.jsx)(l.Z.Item,{interval:1e4,children:(0,x.jsx)(Z,{video:e,histUsers:h,user:g,verVideo:C},e.id)},e.id)}))})]}),(0,x.jsx)("br",{}),(0,x.jsx)("hr",{}),(0,x.jsx)("div",{id:"card_videos",children:r&&t&&u.search2(t).map((function(e){return(0,x.jsx)(j.Z,{categoria:e,videos:r,search:u.search,histUsers:h,user:g,verVideo:C},e.id)}))})]})},C=t(3927),N=t(5764),_=t(6180),S=t(2680),O=t(9378),E=t(8733),L=["videos","categories"],V=(0,u.Z)((function(e){return{root:{maxWidth:1248,margin:"auto"},"@media (max-width: 1248px)":{root:{display:"flex"}}}}));var P=function(e){var r=e.videos,t=e.categories,u=(0,a.Z)(e,L),d=(0,c.s0)(),f=(0,i.useState)(null),p=(0,n.Z)(f,2),h=p[0],v=p[1],m=(0,i.useState)(null),g=(0,n.Z)(m,2),Z=g[0],w=g[1],y=(0,i.useState)(null),k=(0,n.Z)(y,2),C=k[0],N=k[1],_=(0,i.useContext)(S.Z).user,P=function(){var e=(0,o.Z)((0,s.Z)().mark((function e(){var r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.UH({user_id:_.id});case 3:r=e.sent,v(r),console.log(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=(0,o.Z)((0,s.Z)().mark((function e(){var r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.kt({user_id:_.id});case 3:r=e.sent,w(r),console.log(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();(0,i.useEffect)((function(){P(),I()}),[]),(0,i.useEffect)((function(){if(Z&&t){for(var e=[],r=[],n=[],i=0;i<Z.length;i++)r.push(Z[i].categoria);for(var s=0;s<t.length;s++)n.push(t[s]);for(var o=0;o<n.length;o++){for(var a=!1,c=0;c<r.length&!a;c++)n[o].categoria===r[c]&&(a=!0);a||e.push(n[o])}console.log(),N(e||null)}}),[t,Z]);var T=function(){var e=(0,o.Z)((0,s.Z)().mark((function e(r){var t,n,i,o,a,c;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=new FormData,i=0,t.append("usuario",_.id),t.append("video",r),e.prev=4,o=0;o<h.length;o++)(a=h[o]).usuario.id===_.id&&a.video===r&&(n=a,i++);if(0!==i){e.next=11;break}return e.next=9,b.LK(t);case 9:c=e.sent,n=c.data;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log(e.t0);case 16:d("/seeVideo/".concat(r),{state:n});case 17:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(r){return e.apply(this,arguments)}}();return console.log(C),V(),(0,x.jsxs)("div",{children:[(0,x.jsxs)("div",{id:"carousel_videos",className:"pt-3 border-bottom border-2 border-white pb-5",children:[(0,x.jsx)("h2",{className:"py-3",children:"\ud83d\udd51 \xdaltimos videos"}),(0,x.jsx)(l.Z,{id:"carousel",fade:!0,children:r&&u.search(r).slice(0,4).map((function(e){return(0,x.jsx)(l.Z.Item,{children:(0,x.jsx)(O.Z,{video:e,listVideos:u.listVideos,histUsers:h,user:_,verVideo:T},e.id)},e.id)}))})]}),(0,x.jsx)("br",{}),(0,x.jsx)("div",{id:"card_videos",children:r&&Z?(0,x.jsxs)("div",{children:[u.search2(Z).map((function(e,t){return(0,x.jsx)(j.Z,{categoria:e,videos:r,search:u.search,histUsers:h,user:_,verVideo:T},t)})),C&&u.search2(C).map((function(e,t){return(0,x.jsx)(j.Z,{categoria:e,videos:r,search:u.search,histUsers:h,user:_,verVideo:T},t)}))]}):u.search2(t).map((function(e){return(0,x.jsx)(j.Z,{categoria:e,videos:r,search:u.search,histUsers:h,user:_,verVideo:T},e.id)}))})]})},I=function(e){var r=e.videos,t=document.getElementById("carousel"),a=(0,i.useState)(""),c=(0,n.Z)(a,2),u=c[0],l=c[1],d=(0,i.useState)([]),f=(0,n.Z)(d,2),p=f[0],h=f[1],v=(0,i.useState)(["title_espanol","description_esp"]),m=(0,n.Z)(v,1)[0],g=(0,i.useState)(["categoria"]),Z=(0,n.Z)(g,1)[0],j=(0,i.useContext)(S.Z).user,b=(0,i.useState)(r),w=(0,n.Z)(b,2),y=w[0],O=w[1],E=(0,i.useState)("All"),L=(0,n.Z)(E,2),V=L[0],I=L[1],T=function(){var e=(0,o.Z)((0,s.Z)().mark((function e(){var r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,N.wb)();case 3:r=e.sent,h(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();(0,i.useEffect)((function(){function e(){return(e=(0,o.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/categorias/1/").then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.warn(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),T()}),[]);var F=function(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"")},U=function(e){if(u){if(u){var r=F(u.toLowerCase());return e.filter((function(e){var t=F(e.title_espanol).toString().toLowerCase().indexOf(r)>-1,n=F(e.description_esp).toString().toLowerCase().indexOf(r)>-1,i=e.categorias.some((function(e){return F(e.categoria.toLowerCase()).includes(r)}));return t||n||i}))}return e.filter((function(e){return F(e.categorias.categoria.toString()).toLowerCase().indexOf(F(u.toLowerCase()))>-1}))}return e},z=function(e){return e.filter((function(e){if(t){if(e.categoria===V)return t.style.visibility="hidden",t.style.height="10px",Z.some((function(r){return F(e[r]).toString().toLowerCase().indexOf(F(u.toLowerCase()))>-1}));if("All"===V)return t.style.visibility="visible",t.style.height="100%",r.filter((function(e){return m.some((function(r){return F(e[r]).toString().toLowerCase().indexOf(F(u.toLowerCase()))>-1}))}))}else console.log("tuvimos problemas para cargar el carousel por favor recargar")}))};return(0,i.useEffect)((function(){var e=U(r);O(e)}),[u,r]),j?j.is_superuser?(0,x.jsxs)("div",{children:[(0,x.jsx)(_.Z,{query:u,setQuery:l,filterParam:V,setFilterParam:I,categories:p}),y.length>0?(0,x.jsx)(k,{videos:y,categories:p,search:U,search2:z}):(0,x.jsx)("h1",{children:"No se encontraron videos"})]}):(0,x.jsxs)("div",{children:[(0,x.jsx)(_.Z,{query:u,setQuery:l,filterParam:V,setFilterParam:I,categories:p}),(0,x.jsx)(C.S,{children:y.length>0?(0,x.jsx)(P,{videos:y,categories:p,search:U,search2:z}):(0,x.jsx)("h1",{children:"No se encontraron videos"})})]}):(0,x.jsx)("p",{style:{fontSize:"25px"},children:"Inicia sesi\xf3n para ver todos los videos!"})},T=t(2516),F=t(3712),U=function(){var e=(0,T.Z)(I),r=(0,i.useState)({loading:!0,videos:null}),t=(0,n.Z)(r,2),s=t[0],o=t[1];return(0,i.useEffect)((function(){v.Zs().then((function(e){var r=e.videos;o({loading:!1,videos:r})}))}),[o]),(0,x.jsx)(F.Z,{children:(0,x.jsx)("div",{className:"App",children:(0,x.jsx)(e,{isLoading:s.loading,videos:s.videos})})})}},888:function(e,r,t){"use strict";var n=t(9047);function i(){}function s(){}s.resetWarningCache=i,e.exports=function(){function e(e,r,t,i,s,o){if(o!==n){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function r(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:s,resetWarningCache:i};return t.PropTypes=t,t}},2007:function(e,r,t){e.exports=t(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2592:function(e,r,t){"use strict";var n=t(1413),i=t(5987),s=t(1694),o=t.n(s),a=t(2791),c=t(2007),u=t.n(c),l=t(162),d=t(184),f=["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"],p=(u().string,u().bool,u().bool,u().bool,u().bool,a.forwardRef((function(e,r){var t=e.bsPrefix,s=e.className,a=e.fluid,c=e.rounded,u=e.roundedCircle,p=e.thumbnail,h=(0,i.Z)(e,f);return t=(0,l.vE)(t,"img"),(0,d.jsx)("img",(0,n.Z)((0,n.Z)({ref:r},h),{},{className:o()(s,a&&"".concat(t,"-fluid"),c&&"rounded",u&&"rounded-circle",p&&"".concat(t,"-thumbnail"))}))})));p.displayName="Image",p.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},r.Z=p}}]);
//# sourceMappingURL=254.eb2c254c.chunk.js.map