"use strict";(self.webpackChunkvideoteca_frontend=self.webpackChunkvideoteca_frontend||[]).push([[71],{7411:function(e,t,n){var r=n(4165),a=n(5861),s=n(3263),c=n(9778),i="https://sccotview.com/api/",o=s.Z.create({baseURL:i,timeout:5e3,headers:{Authorization:localStorage.getItem("access_token")?"JWT "+localStorage.getItem("access_token"):null,"Content-Type":"multipart/form-data",accept:"application/json"}});o.interceptors.response.use((function(e){return e}),function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,s,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.config,"undefined"!==typeof t.response){e.next=4;break}return console.warn("A server/network error occurred. Looks like CORS might be the problem. Sorry about this - we will get it fixed shortly."),e.abrupt("return",Promise.reject(t));case 4:if(401!==t.response.status||n.url!==i+"api/token/refresh/"){e.next=7;break}return window.location.href="/loginuser/",e.abrupt("return",Promise.reject(t));case 7:if("token_not_valid"!==t.response.data.code||401!==t.response.status||"Unauthorized"!==t.response.statusText){e.next=26;break}if(!(a=localStorage.getItem("refresh_token"))){e.next=24;break}if(s=JSON.parse(c.lW.from(a.split(".")[1],"base64").toString()),u=Math.ceil(Date.now()/1e3),console.log(s.exp),!(s.exp>u)){e.next=17;break}return e.abrupt("return",o.post("api/token/refresh/",{refresh:a}).then((function(e){return localStorage.setItem("access_token",e.data.access_token),localStorage.setItem("refresh_token",e.data.refresh_token),o.defaults.headers.Authorization="JWT "+e.data.access_token,n.headers.Authorization="JWT "+e.data.access_token,o(n)})).catch((function(e){console.log(e)})));case 17:console.log("Refresh token is expired",s.exp,u),window.localStorage.removeItem("access_token"),window.localStorage.removeItem("refresh_token"),window.localStorage.removeItem("user"),window.location.href="/loginuser/";case 22:e.next=26;break;case 24:console.log("Refresh token not available."),window.location.href="/loginuser/";case 26:return 401===t.response.status&&(window.location.href="/loginuser/"),e.abrupt("return",Promise.reject(t));case 28:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.Z=o},359:function(e,t,n){n.d(t,{Z:function(){return I}});var r=n(1413),a=n(9439),s=n(5987),c=n(2791),i=n(1694),o=n.n(i),u=(0,c.createContext)(),l=n(184),d=function(){return(0,l.jsx)("svg",{role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512",children:(0,l.jsx)("path",{fill:"currentColor",d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"})})},f=n(697),p=["video","onClose"],x=function(e){var t=e.video,n=e.onClose,r=(0,s.Z)(e,p);return(0,l.jsxs)("div",{className:"content mt-3 ",children:[(0,l.jsxs)("div",{className:"content__background",children:[(0,l.jsx)("div",{className:"content__background__shadow"}),(0,l.jsx)("div",{className:"content__background__image ",style:{backgroundImage:"url(https://sccotview.com".concat(t.featured_image,")")}})]}),(0,l.jsxs)("div",{className:"content__area",children:[(0,l.jsxs)("div",{className:"content__area__container",children:[(0,l.jsx)("div",{className:"content__title pt-3",children:(0,l.jsx)(f.Z,{sx:{"& > legend":{mt:2}}})}),(0,l.jsx)("div",{className:"content__button",children:(0,l.jsx)("button",{className:"content__button__glightbox_video",onClick:function(){return r.verVideo(t.id)},children:(0,l.jsxs)("svg",{width:"131",height:"131",viewBox:"0 0 131 131",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{className:"inner-circle",d:"M65 21C40.1488 21 20 41.1488 20 66C20 90.8512 40.1488 111 65 111C89.8512 111 110 90.8512 110 66C110 41.1488 89.8512 21 65 21Z",fill:"white"}),(0,l.jsx)("circle",{className:"outer_circle",cx:"65.5",cy:"65.5",r:"64",stroke:"white"}),(0,l.jsx)("path",{className:"play",fillRule:"evenodd",clipRule:"evenodd",d:"M60 76V57L77 66.7774L60 76Z",fill:"#BF2428"})]})})})]}),(0,l.jsx)("button",{className:"content__close",onClick:n,children:(0,l.jsx)(d,{})})]})]})},h=function(){return(0,l.jsx)("svg",{role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:(0,l.jsx)("path",{fill:"currentColor",d:"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"})})},v=function(e){var t=e.onClick,n=e.type;return(0,l.jsx)("button",{className:"slide-button slide-button--".concat(n),onClick:t,children:(0,l.jsx)("span",{children:(0,l.jsx)(h,{})})})},m=function(e){var t=e.children;return(0,l.jsx)("div",{className:"slider-wrapper",children:t})},g=function(e){var t=(0,c.useRef)(null),n=(0,c.useState)(0),r=(0,a.Z)(n,2),s=(r[0],r[1]),i=(0,c.useState)(0),o=(0,a.Z)(i,2),u=o[0],l=o[1],d=(0,c.useState)(0),f=(0,a.Z)(d,2),p=f[0],x=f[1],h=(0,c.useState)(0),v=(0,a.Z)(h,2),m=v[0],g=v[1];(0,c.useEffect)((function(){var e=t.current.clientWidth-10;s(e),x(Math.floor(e/300))}),[]);return{handlePrev:function(){m>0&&(g(m-1),l(u+300))},handleNext:function(t){m<t-1&&(console.log(t),console.log(m),m<e-p&&(g(m+1),l(u-300)))},slideProps:{style:{transform:"translate3d(".concat(u,"px, 0, 0)"),transition:"transform 0.4s ease"}},containerRef:t,hasPrev:m>0,hasNext:m<e-p}},Z=function(){var e=(0,c.useRef)(null),t=(0,c.useState)(e),n=(0,a.Z)(t,2),r=n[0],s=n[1];return(0,c.useEffect)((function(){e.current&&e.current.scrollWidth&&e.current.clientWidth&&s(e.current.clientWidth)}),[]),{width:r,elementRef:e}},w=n(7689),b=["children","activeSlide"],j=function(e){var t=e.children,n=e.activeSlide,i=(0,s.Z)(e,b),d=(0,w.s0)(),f=(0,c.useState)(n),p=(0,a.Z)(f,2),h=p[0],j=p[1],k=Z(),y=k.width,_=k.elementRef,N=g(y,c.Children.count(t)),C=N.handlePrev,S=N.handleNext,P=N.slideProps,L=N.containerRef,z=N.hasNext,I=N.hasPrev,R=function(){j(null)},V={onSelectSlide:function(e){j(e)},onCloseSlide:R,elementRef:_,currentSlide:h,history:d},A=h===c.Children.toArray(t)[c.Children.count(t)-1];return(0,l.jsxs)(u.Provider,{value:V,children:[(0,l.jsxs)(m,{children:[(0,l.jsx)("div",{className:o()("slider",{"slider--open":null!=h}),children:(0,l.jsx)("div",(0,r.Z)((0,r.Z)({ref:L,className:"slider__container"},P),{},{children:t}))}),I&&(0,l.jsx)(v,{onClick:C,type:"prev"}),z&&!A&&(0,l.jsx)(v,{onClick:function(){S(c.Children.count(t))},type:"next"})]}),h&&(0,l.jsx)(x,{video:h,verVideo:i.verVideo,onClose:R})]})},k=n(4165),y=n(5861),_=n(9705),N=n(8287),C=function(e){var t=e.onClick;return(0,l.jsx)("button",{onClick:t,className:"show-details-button mt-2",children:(0,l.jsx)("span",{children:(0,l.jsx)(h,{})})})},S=n(7087),P=(n(9713),n(5151),n(6513)),L=["video"],z=function(e){var t=e.video,n=(0,s.Z)(e,L),r=(0,c.useState)([]),i=(0,a.Z)(r,2),d=i[0],f=i[1],p=(0,c.useState)(!1),x=(0,a.Z)(p,2),h=(x[0],x[1],(0,c.useState)("")),v=(0,a.Z)(h,2),m=v[0],g=v[1],Z=function(){var e=(0,y.Z)((0,k.Z)().mark((function e(){var n,r;return(0,k.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.tipe_of_video,e.next=3,(0,N.Z)(n);case 3:r=e.sent,g(r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){f(function(e){var t=e.split(":"),n="";return t&&("00"!==t[0]&&(n=t[0]+"h"),"00"!==t[1]&&(n=" "+n+" "+t[1]+"min")),n.trim()}(t.duration)),Z()}),[d,t.duration]),(0,l.jsx)(u.Consumer,{children:function(e){var r=e.onSelectSlide,a=e.currentSlide,s=e.elementRef,c=(e.history,a&&a.id===t.id);return(0,l.jsx)("div",{ref:s,className:o()("item",{"item--open":c}),children:(0,l.jsxs)("div",{className:"card   cursorPointer card-video",children:[(0,l.jsx)("small",{className:"d-flex justify-content-end px-3 pt-1 ",children:"videos"==m.tipe_video?"Video":"casos"==m.tipe_video?"Caso":"series"==m.tipe_video?"Serie":""}),(0,l.jsx)(P.Z,{onClick:function(){return n.verVideo(t.id)},children:(0,l.jsx)(S.LazyLoadImage,{effect:"blur",src:"https://sccotview.com".concat(t.featured_image),className:"card-img-top cursorPointer imagen-container",alt:"..."})}),c,(0,l.jsxs)("div",{className:"card-body p-0 px-2 d-flex flex-column justify-content-between",children:[(0,l.jsx)("p",{className:"truncate-text",onClick:function(e){e.stopPropagation(),r(t)},children:t.title_espanol}),(0,l.jsxs)("div",{className:"d-flex justify-content-between align-items-end",onClick:function(e){return e.stopPropagation()},children:[(0,l.jsx)("div",{children:(0,l.jsx)("p",{children:d})}),(0,l.jsx)("div",{className:"bg-secondary rounded-2 mb-2 pt-1",onClick:function(e){return e.stopPropagation()},children:(0,l.jsx)(_.Z,{name:"read-only",value:parseFloat(t.score),precision:.5,readOnly:!0})})]})]},t.id),(0,l.jsx)(C,{onClick:function(){return r(t)}})]},t.id)})}})};j.Item=z;var I=j},3927:function(e,t,n){n.d(t,{S:function(){return u}});var r=n(5671),a=n(3144),s=n(136),c=n(7277),i=n(2791),o=n(184),u=function(e){(0,s.Z)(n,e);var t=(0,c.Z)(n);function n(e){var a;return(0,r.Z)(this,n),(a=t.call(this,e)).reloadPage=function(){window.location.reload()},a.state={error:null},a}return(0,a.Z)(n,[{key:"componentDidCatch",value:function(e){this.setState({error:e})}},{key:"render",value:function(){var e=this.state.error;return e?(0,o.jsxs)("div",{className:"alert alert-warning",role:"alert",children:[(0,o.jsx)("h3",{children:"Ha ocurrido un error por favor volver a cargar la p\xe1gina"}),(0,o.jsx)("p",{children:e.toString()}),(0,o.jsx)("button",{onClick:this.reloadPage,className:"btn btn-light",children:"Recargar p\xe1gina"})]}):this.props.children}}]),n}(i.Component)},6180:function(e,t,n){var r=n(9439),a=n(2791),s=(n(1174),n(184));t.Z=function(e){var t=(0,a.useState)([]),n=(0,r.Z)(t,2),c=n[0],i=n[1];if((0,a.useEffect)((function(){i(e.categories)}),[e.categories]),c)return(0,s.jsx)("div",{className:"wrapper mb-4 ",children:(0,s.jsxs)("div",{className:"search-wrapper col-sm-12  d-lg-flex justify-content-between",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-light pb-0 mb-1",children:"Buscas algo?"}),(0,s.jsx)("input",{type:"search",name:"search-form",id:"search-form",className:"form-control bg-light  border-2 border-light",placeholder:"Buscar",value:e.query,onChange:function(t){return e.setQuery(t.target.value)}})]}),(0,s.jsxs)("div",{className:"mt-3",children:[(0,s.jsxs)("select",{onChange:function(t){return e.setFilterParam(t.target.value)},className:"form-select form-select mb-3 py-2","aria-label":"Filter Videos By Category",children:[(0,s.jsx)("option",{value:"All",children:"Filtrar por Categor\xeda \ud83d\udd20"}),c.slice().sort((function(e,t){return e.categoria.localeCompare(t.categoria)})).map((function(e,t){return(0,s.jsx)("option",{value:e.categoria,children:e.categoria},t)}))]}),(0,s.jsx)("span",{className:"focus"})]})]})})}},2516:function(e,t,n){var r=n(1413),a=n(5987),s=(n(2791),n(184)),c=["isLoading"];t.Z=function(e){return function(t){var n=t.isLoading,i=(0,a.Z)(t,c);return n?(0,s.jsxs)("div",{style:{fontSize:"25px",display:"flex",justifyContent:"center",textAlign:"center",flexDirection:"column",alignItems:"center"},children:[(0,s.jsx)("div",{className:"spinner-grow text-light",role:"status",children:(0,s.jsx)("span",{className:"sr-only"})}),"Espera por favor"]}):(0,s.jsx)(e,(0,r.Z)({},i))}}},1187:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(5987),a=(n(2791),n(359)),s=(n(5258),n(865),n(184)),c=["categoria","verVideo"],i=function(e){var t=e.categoria,n=e.verVideo,i=(0,r.Z)(e,c);if(t){var o=i.videos&&i.search(i.videos).filter((function(e){return e.categorias.some((function(e){return t.categoria===e.categoria}))}));return(0,s.jsx)("div",{children:o.length>0&&(0,s.jsxs)("div",{className:"",children:[(0,s.jsxs)("h2",{className:"titleCateg ms-3",children:["| ",t.categoria,(0,s.jsx)("small",{children:" \u25b6"})]},t.id),(0,s.jsx)("div",{children:(0,s.jsx)(a.Z,{verVideo:n,children:o.map((function(e){return(0,s.jsx)(a.Z.Item,{video:e,histUsers:i.histUsers,user:i.user,verVideo:n},e.id)}))})})]})})}}},9378:function(e,t,n){var r=n(5987),a=(n(2791),n(7087)),s=(n(9713),n(6513)),c=n(8596),i=n(697),o=n(9705),u=(n(5258),n(184)),l=["video"],d=(0,c.Z)((function(e){return{paper:{},letter:{},imagenCarousel:{maxHeight:400,objectFit:"cover"},listStyleNone:{listStyle:"none"},"@media (min-width: 1200px)":{imagen:{minWidth:820},imagenCarousel:{width:1240,height:450},row:{width:1240,maxheight:650}}}})),f=function(e){var t=e.split(":"),n="";return t&&("00"!==t[0]&&(n=t[0]+"h"),"00"!==t[1]&&(n=" "+n+" "+t[1]+"min")),n.trim()};t.Z=function(e){var t=e.video,n=(0,r.Z)(e,l);console.log(t);var c=d();return(0,u.jsx)("div",{id:"contenedorItemVideo",children:(0,u.jsx)(s.Z,{onClick:function(e){return n.verVideo(t.id)},children:(0,u.jsxs)("div",{className:"row  "+c.row,children:[(0,u.jsx)("div",{className:"col-md-7  col-12 imgPreview"+c.imagen,children:(0,u.jsx)(a.LazyLoadImage,{effect:"blur",src:"https://sccotview.com"+t.featured_image,className:c.imagenCarousel})}),(0,u.jsx)("div",{className:"col-md-5 col-12 "+c.info,children:(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{className:"d-flex justify-content-between mt-3 text-capitalize mb-3",children:[(0,u.jsx)("p",{className:"text-light h6",children:f(t.duration)}),(0,u.jsx)(i.Z,{sx:{"& > legend":{mt:2}},children:(0,u.jsx)("div",{className:"bg-secondary d-inline pt-3 px-1 rounded-2",children:(0,u.jsx)(o.Z,{name:"read-only",value:parseFloat(t.score),precision:.5,readOnly:!0})})})]}),(0,u.jsx)("h6",{className:" text-light text-capitalize text-start border-bottom border-light pb-2",children:t.title_espanol}),(0,u.jsx)("span",{className:"text-light  text-start text-lowercase truncate-text-6 mb-3",children:t.description_esp}),t.categorias&&(0,u.jsxs)("ul",{className:"d-flex flex-wrap justify-content-start p-0 m-0 py-0  text-light",children:[(0,u.jsx)("span",{className:"text-capitalize",children:"Categor\xedas: "}),t.categorias.map((function(e){return(0,u.jsx)("li",{className:"list-group-item list-group-item-light px-2 rounded-4 m-1",children:(0,u.jsx)("small",{className:"text-capitalize",children:e.categoria})},e.id)}))]}),t.autor.length>0?(0,u.jsxs)("ul",{className:"d-flex flex-wrap justify-content-start p-0 text-light",children:[(0,u.jsx)("span",{className:"text-capitalize",children:"Autores: "}),t.autor.map((function(e){return(0,u.jsx)("li",{className:"list-group-item list-group-item-light px-2 rounded-4 m-1",children:(0,u.jsx)("small",{className:"text-capitalize",children:e.autor})},e.id)}))]}):""]})})]})})})}},5764:function(e,t,n){n.d(t,{CX:function(){return o},wb:function(){return i},yr:function(){return u}});var r=n(4165),a=n(5861),s=n(7411),c="https://sccotview.com/api/categorias/",i=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get(c);case 2:if(200!==(t=e.sent).status){e.next=7;break}return e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.post(c,t);case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.next=6,n.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.patch(c+t+"/",n);case 2:if(200!==(a=e.sent).status){e.next=5;break}return e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},9929:function(e,t,n){n.d(t,{F2:function(){return u},K7:function(){return o},LK:function(){return i},UH:function(){return l},o0:function(){return d}});var r=n(4165),a=n(5861),s=n(7411),c="https://sccotview.com/api/historialUser/",i=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.post(c,t);case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.next=6,n.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(c));case 2:if(200!==(t=e.sent).status){e.next=7;break}return e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,s.Z.get("".concat(c).concat(t));case 3:if(200!==(n=e.sent).status){e.next=8;break}return e.next=7,n.data;case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.post("".concat(c,"list_by_user/"),t);case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.next=6,n.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.patch(c+t+"/",n);case 2:if(200!==(a=e.sent).status){e.next=5;break}return e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},8733:function(e,t,n){n.d(t,{Bx:function(){return d},bb:function(){return u},kt:function(){return l}});var r=n(4165),a=n(5861),s=n(1830),c=n.n(s),i=n(7411),o="https://sccotview.com/api/gustos_by_users/",u=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.post(o,t);case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.next=6,n.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.post("".concat(o,"list_by_user/"),t);case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.next=6,n.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.delete("".concat(o).concat(t));case 2:if(200!==(n=e.sent).status){e.next=8;break}return c().fire({title:n.data.message,icon:"success"}).then((function(e){window.location.reload()})).catch((function(){c().fire({title:"Lo sentimos no fue posible eliminar la preferencia, intenta nuevamente mas tarde",icon:"warning"})})),e.next=7,n.data;case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},8287:function(e,t,n){n.d(t,{T:function(){return i}});var r=n(4165),a=n(5861),s=n(7411),c="https://sccotview.com/api/tipos_de_Video/",i=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get(c);case 2:if(200!==(t=e.sent).status){e.next=7;break}return e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(c).concat(t));case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.next=6,n.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.Z=o},1652:function(e,t,n){n.d(t,{Jp:function(){return x},PI:function(){return o},Zs:function(){return i},ff:function(){return f},gY:function(){return h},iA:function(){return d},jk:function(){return u},om:function(){return l},zj:function(){return p}});var r=n(4165),a=n(5861),s=n(7411),c="https://sccotview.com/api/videos/",i=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(c));case 2:if(200!==(t=e.sent).status){e.next=7;break}return e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(c,"listPeliculas/"));case 2:if(200!==(t=e.sent).status){e.next=7;break}return e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(c,"listCasos/"));case 2:if(200!==(t=e.sent).status){e.next=7;break}return e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(c).concat(t));case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.next=6,n.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get(c+"retrieve/"+t);case 2:if(200!==(n=e.sent).status){e.next=5;break}return e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.post(c,t);case 2:if(200!==(n=e.sent).status){e.next=9;break}return e.next=6,n.data;case 6:case 12:return e.abrupt("return",e.sent);case 9:if(409!==n.status){e.next=13;break}return e.next=12,n.data;case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.put(c+t+"/",n);case 2:if(a=e.sent,console.log(a),200!==a.status){e.next=8;break}return e.next=7,a.data;case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),x=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.patch(c+t+"/",n);case 2:if(200!==(a=e.sent).status){e.next=5;break}return e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.delete("".concat(c).concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},865:function(){},5258:function(){},5151:function(){}}]);
//# sourceMappingURL=71.7b5d3b98.chunk.js.map