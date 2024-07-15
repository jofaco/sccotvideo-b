"use strict";(self.webpackChunkvideoteca_frontend=self.webpackChunkvideoteca_frontend||[]).push([[403],{7378:function(e,t,n){n.r(t),n.d(t,{default:function(){return te}});var r=n(3433),a=n(1413),s=n(4165),i=n(5861),c=n(9439),o=n(2791),l=n(7689),u=n(1652),d=n(6542),p=n(6639),x=n(2516),h=n(9929),m=n(733),f=n(2918),v=n(9164),Z=n(890),j=n(697),b=n(6314),g=n(4294),w=n(151),y=n(8596),k=n(1444),_=(n(5258),n(4942)),N=n(5987),C=n(5342),S=n(3360),I=n(4437),D=(n(9629),n(184)),U=["histUser","handleClose","show","commentary_id"],V=(0,y.Z)((function(e){return{containerModal:{border:"2px solid #ccc",borderRadius:10,boxShadow:"4px 4px 4px 0px #5a28e550"},cloud:{width:"25rem",background:"white",color:"black",borderRadius:10},containerForm:{height:"3rem",background:"white",color:"black",border:"2px solid #ccc",borderRadius:10,boxShadow:"4px 4px 4px 0px #5a28e550"},"@media (max-width: 720px)":{root:{display:"flex"}}}})),E=function(e){var t=e.histUser,n=e.handleClose,r=e.show,l=e.commentary_id,u={commentary:"",historial_user:t,video:(0,N.Z)(e,U).videoID},d=(0,o.useState)(u),p=(0,c.Z)(d,2),x=p[0],h=p[1],f=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(t){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=new FormData,e.prev=2,l){e.next=11;break}return n.append("commentary",x.commentary),n.append("historial_user",x.historial_user.id),n.append("video",x.video),e.next=9,m.z(n);case 9:e.next=14;break;case 11:return n.append("commentary",x.commentary),e.next=14,m.q4(l,n);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(2),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(t){return e.apply(this,arguments)}}();(0,o.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(t){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m._K(t);case 3:n=e.sent,h((0,a.Z)((0,a.Z)({},x),{},{commentary:n.commentary})),console.log(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();l&&e(l)}),[l]);var v=V();return(0,D.jsxs)(C.Z,{show:r,onHide:n,"aria-labelledby":"example-custom-modal-styling-title",contentClassName:"cloud "+v.cloud,centered:!0,children:[(0,D.jsx)(C.Z.Header,{closeButton:!0,children:(0,D.jsx)(C.Z.Title,{id:"tituloModal",children:"Ingrese su Comentario"})}),(0,D.jsx)(C.Z.Body,{id:"bodyModal",children:(0,D.jsxs)(I.Z,{onSubmit:f,children:[(0,D.jsx)(I.Z.Group,{className:"mb-2 ",controlId:"exampleForm.ControlInput1",children:(0,D.jsx)(I.Z.Control,{as:"textarea",className:v.containerForm,rows:1,name:"commentary",value:x.commentary||"",onChange:function(e){var t=e.target.name;h((0,a.Z)((0,a.Z)({},x),{},(0,_.Z)({},t,e.target.value)))}})}),(0,D.jsxs)(C.Z.Footer,{children:[(0,D.jsx)(S.Z,{variant:"secondary",onClick:n,children:"Cerrar"}),(0,D.jsx)(S.Z,{variant:"primary",type:"submit",onClick:n,children:"Crear"})]})]})})]})},B=n(3712),F=["handleClose","show","histUser","commentaries"],T=(0,y.Z)((function(e){return{title:{color:"black",textAlign:"center"},nameUser:{color:"Gray",fontSize:"15px"},containerModal:{boxShadow:"4px 4px 4px 0px #5a28e550"},containerComment:{maxWidth:720,margin:"auto",marginBottom:20},"@media (max-width: 720px)":{root:{display:"flex"}}}})),M=function(e){var t=e.handleClose,n=e.show,r=e.histUser,a=e.commentaries,s=((0,N.Z)(e,F),(0,f.d)(!1)),i=(0,c.Z)(s,3),o=i[0],l=(i[1],i[2]),u=T();if(a)return(0,D.jsxs)(C.Z,{show:n,onHide:t,"aria-labelledby":"example-custom-modal-styling-title",contentClassName:u.containerModal,centered:!0,scrollable:!0,children:[(0,D.jsx)(C.Z.Header,{closeButton:!0,children:(0,D.jsx)(C.Z.Title,{id:"titleModal",className:u.title,children:"Comentarios de usuarios"})}),(0,D.jsx)(C.Z.Body,{id:"bodyModal",className:u.containerModal,children:a.map((function(e,t){return(0,D.jsx)(B.Z,{className:u.containerComment,children:(0,D.jsxs)("div",{className:"row",children:[(0,D.jsxs)("div",{className:"col-9 ",children:[(0,D.jsx)("p",{children:new Date(e.created_date).toLocaleDateString()}),(0,D.jsx)("h5",{className:u.nameUser,children:e.historial_user.usuario.name}),(0,D.jsx)("h6",{children:e.commentary})]}),(0,D.jsx)("div",{className:"col-2",children:e.historial_user.usuario.id===r.usuario.id?(0,D.jsx)(b.Z,{alignItems:"center",alignContent:"center",children:(0,D.jsx)(E,{handleClose:l,show:o,commentary_id:e.id})}):null}),(0,D.jsx)("hr",{})]})},t)}))})]})},A=n(90),H=n(7411),z="https://sccotview.com/api/ubicaciones/",L=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(t){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.Z.post(z,t);case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.next=6,n.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(t){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.Z.post("".concat(z,"list_by_historial/"),t);case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.next=6,n.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O="https://sccotview.com/api/fechaReprods/",Y=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(t){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.Z.post(O,t);case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.next=6,n.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(t){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.Z.post("".concat(O,"list_by_user_video/"),t);case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.next=6,n.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J="https://sccotview.com/api/historialVideo/",P=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(t){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.Z.post(J,t);case 2:if(200!==(n=e.sent).status){e.next=8;break}return console.log(n.data),e.next=7,n.data;case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(t){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.Z.post("".concat(J,"list_by_video/"),t);case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.next=6,n.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(t,n){var r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.Z.patch(J+t+"/",n);case 2:if(200!==(r=e.sent).status){e.next=5;break}return e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),W=["video"],$=function(e){var t=e.video,n=((0,N.Z)(e,W),(0,o.useState)(null)),r=(0,c.Z)(n,2),a=r[0],u=(r[1],(0,o.useState)()),d=(0,c.Z)(u,2),p=d[0],x=d[1],m=(0,o.useState)(!0),f=(0,c.Z)(m,2),v=f[0],Z=f[1],j=(0,o.useState)(),b=(0,c.Z)(j,2),g=b[0],w=b[1],y=(0,l.UO)().id,k=(0,l.TH)(),_=document.getElementById("iframe1"),C=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){var t,n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(t=k.state.id||k.state.usuario)){e.next=12;break}return console.log("Location:",k),console.log("User ID:",t),e.next=7,h.F2(t);case 7:n=e.sent,x(n),console.log("User History:",n),e.next=13;break;case 12:console.warn("No user id or usuario found in location.state");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.error("Error fetching user history:",e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){var t,n,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q({video_id:y});case 2:if(!((t=e.sent).length>0)){e.next=7;break}w(t),e.next=13;break;case 7:return(n=new FormData).append("video",y),e.next=11,P(n);case 11:r=e.sent,w(r);case 13:Z(!1);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function I(){var e=new Date,t="".concat(e.getDate()).padStart(2,"0"),n="".concat(e.getMonth()+1).padStart(2,"0");return e.getFullYear()+"-"+n+"-"+t}var U=(0,o.useCallback)((function(){var e,n,r=new FormData,o=0;if(t.code_esp&&p){var l={id:t.code_esp,playsinline:!0};if(n=new A.Z(_,l),null!==p.tiempo){var u=function(e){var t=e.split(":").map((function(e){return+e})),n=(0,c.Z)(t,3),r=n[0],a=n[1],s=n[2];return s=s+60*a+(60*r^2)-2,parseInt(s)}(p.tiempo);n.setCurrentTime(u)}n.on("play",(0,i.Z)((0,s.Z)().mark((function e(){var t,n,i,c,o,l,u,d,x,h;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R({histUser_id:p.id});case 2:return t=e.sent,(n=new FormData).append("historial_user",p.id),n.append("historial_Video",g[0].id),e.next=8,G(n);case 8:if(i=e.sent,l=I(),t.length>0&&(c=t),i.length>0&&(o=i),!a){e.next=55;break}if(r.append("direccionIP",a.ip),r.append("ciudad",a.city),r.append("pais",a.country),r.append("historial_user",p.id),r.append("historial_Video",g[0].id),!c){e.next=34;break}u=0;case 20:if(!(u<c.length)){e.next=32;break}if((d=c[u]).direccionIP!==a.ip||d.ciudad!==a.city||d.pais!==a.country){e.next=26;break}console.log("Ya exite una hubicaci\xf3n del mismo lugar registrada!"),e.next=29;break;case 26:return e.next=28,L(r);case 28:return e.abrupt("break",32);case 29:u++,e.next=20;break;case 32:e.next=36;break;case 34:return e.next=36,L(r);case 36:if(!o){e.next=53;break}x=0;case 38:if(!(x<o.length)){e.next=51;break}if(h=o[x],console.log(h.fecha),h.fecha!==l){e.next=45;break}console.log("Ya exite una fecha igual registrada!"),e.next=48;break;case 45:return e.next=47,Y({historial_user:p.id,historial_Video:g[0].id});case 47:return e.abrupt("break",51);case 48:x++,e.next=38;break;case 51:e.next=55;break;case 53:return e.next=55,Y({historial_user:p.id,historial_Video:g[0].id});case 55:case"end":return e.stop()}}),e)}))));var d=function(t){e=0,console.log("Guardado despu\xe9s de 10s"),t.getDuration().then((function(e){o=parseInt(e)})).catch((function(e){console.error(e)})),t.getCurrentTime().then((function(t){if(0!==(e=parseInt(t))&&p.id){var n=parseInt(90*o/100);console.log("Tiempo para el 90% "+n);var r=p.counter_repro,a=g[0].reproducciones;e>=n?(r+=1,a+=1,h.o0(p.id,{tiempo:0,visto:!0,counter_repro:r}),K(g[0].id,{reproducciones:a})):(console.log("Tiempo actual de reproducci\xf3n "+e),h.o0(p.id,{tiempo:e}))}})).catch((function(e){console.error(e)}))};document.URL.includes("/seeVideo/")&&function(e){setInterval(d,1e4,e)}(n)}}),[p,_,a,t.code_esp]);return(0,o.useEffect)((function(){U()}),[U]),(0,o.useEffect)((function(){C(),S()}),[]),(0,D.jsxs)(D.Fragment,{children:[v&&(0,D.jsx)("div",{className:"",children:(0,D.jsx)("div",{className:"mt-5",style:{fontSize:"25px",display:"flex",justifyContent:"center",textAlign:"center",flexDirection:"column",alignItems:"center"},children:(0,D.jsx)("div",{className:"spinner-grow text-light mt-5",role:"status",children:(0,D.jsx)("span",{className:"sr-only"})})})}),(0,D.jsx)("div",{id:"iframe1"})]})},Q=n(1830),X=n.n(Q),ee=(0,y.Z)((function(e){return{paper:{marginTop:e.spacing(0),display:"flex",flexDirection:"column",alignItems:"center"}}})),te=function(){var e=(0,l.s0)(),t=(0,f.d)(!1),n=(0,c.Z)(t,3),y=n[0],_=n[1],N=n[2],C=(0,f.d)(!1),S=(0,c.Z)(C,3),I=S[0],U=S[1],V=S[2],B=(0,o.useState)(),F=(0,c.Z)(B,2),T=F[0],A=F[1],H=(0,l.TH)(),z=(0,l.UO)().id,L=(0,o.useState)([]),R=(0,c.Z)(L,2),O=R[0],Y=R[1],G=(0,o.useState)([]),J=(0,c.Z)(G,2),P=J[0],q=J[1],K=(0,o.useState)([]),W=(0,c.Z)(K,2),Q=W[0],te=W[1],ne=(0,o.useState)([]),re=(0,c.Z)(ne,2),ae=(re[0],re[1]),se=(0,o.useState)([]),ie=(0,c.Z)(se,2),ce=(ie[0],ie[1]),oe=(0,o.useState)(!0),le=(0,c.Z)(oe,2),ue=le[0],de=le[1],pe=(0,o.useState)([]),xe=(0,c.Z)(pe,2),he=xe[0],me=xe[1],fe=(0,o.useState)(null),ve=(0,c.Z)(fe,2),Ze=(ve[0],ve[1]),je=(0,o.useState)(H.state),be=(0,c.Z)(je,2),ge=be[0],we=be[1],ye=(0,o.useState)([]),ke=(0,c.Z)(ye,2),_e=ke[0],Ne=ke[1],Ce=(0,o.useState)(-1),Se=(0,c.Z)(Ce,2),Ie=Se[0],De=Se[1],Ue=localStorage.getItem("user"),Ve=JSON.parse(Ue),Ee=(0,o.useState)({loading:!0}),Be=(0,c.Z)(Ee,2),Fe=Be[0],Te=Be[1],Me=(0,x.Z)(O),Ae=function(e){var t=e.split(":"),n="";return t&&("00"!==t[0]&&(n=t[0]+"h"),"00"!==t[1]&&(n=" "+n+" "+t[1]+"min")),n.trim()},He=function(){var t=(0,i.Z)((0,s.Z)().mark((function t(n){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:X().fire({title:"\xbfSeguro quieres eliminar este video?",text:"No podras recuperar la informaci\xf3n",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Eliminar video"}).then(function(){var t=(0,i.Z)((0,s.Z)().mark((function t(r){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.isConfirmed){t.next=5;break}return t.next=3,u.gY(n);case 3:e("/"),X().fire({title:"Video eliminado con exito",text:"",icon:"success"});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),ze=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(t,n){var r,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.dS(t);case 2:return r=e.sent,console.log(r),q(r),e.next=7,p.op(n);case 7:a=e.sent,console.log(a),te(a);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Le=function(){var t=(0,i.Z)((0,s.Z)().mark((function t(){var n;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.K7();case 3:n=t.sent,console.log(n),n&&Ve.id?(De(n.user_score-1),A(n),de(!1)):e("/loginuser"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();(0,o.useEffect)((function(){Le();var e=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(t){var n,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.om(t);case 2:n=e.sent,r=n,console.log(r),Ze(new Date(n.upload_date).toDateString()),me(Ae(n.duration)),Y((0,a.Z)((0,a.Z)({},r),{},{duration:he})),Te({loading:!1});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();e(z);var t=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(t){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.t$({video_id:t});case 2:n=e.sent,Ne(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t(z),ze(O.serie,O.temporada)}),[he,z,Y,O.title_espanol,O.url_esp,O.url_vimeo_esp,O.serie_id]);var Re=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(t){var n,r,i,c;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(De(t),n=O.cumulative_score,r=O.numberOfVotes,!ge.user_score){e.next=11;break}return n=n-ge.user_score+t+1,i=n/r,we((0,a.Z)((0,a.Z)({},ge),{},{user_score:t+1})),e.next=9,u.Jp(O.id,{cumulative_score:n,score:i});case 9:e.next=17;break;case 11:return c=(n=n+t+1)/(r+=1),we((0,a.Z)((0,a.Z)({},ge),{},{user_score:t+1})),e.next=17,u.Jp(O.id,{cumulative_score:n,numberOfVotes:r,score:c});case 17:return e.next=19,h.o0(ge.id,{user_score:t+1});case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Oe=ee();if(!ue)return(0,D.jsxs)(v.Z,{children:[Fe.loading?(0,D.jsx)(Me,{isLoading:Fe.loading,video:O}):"",(0,D.jsx)("div",{children:(0,D.jsx)("div",{className:"d-flex justify-content-end",children:(0,D.jsx)("button",{onClick:function(){return window.history.back()},className:"btn btn-light my-2",value:"Volver",children:"Volver"})})}),(0,D.jsx)("div",{className:Oe.paper,children:(0,D.jsx)("h3",{children:O.title_espanol})}),(0,D.jsx)("br",{}),(0,D.jsxs)("div",{className:"row",children:[(0,D.jsx)("div",{className:"col-8 iframe1",children:(0,D.jsx)($,{video:O})}),(0,D.jsxs)("div",{className:"col infoVideo",children:[(0,D.jsx)(Z.Z,{component:"h5",variant:"h6",style:{color:"white",borderBottom:"3px solid white",paddingBottom:"5px"},align:"center",children:O.duration}),(0,D.jsx)("br",{}),Ve.is_superuser&&(0,D.jsxs)("div",{className:"d-flex justify-content-between mb-2",children:[(0,D.jsx)("button",{onClick:function(){return e("/updateVideo/".concat(O.id))},className:"btn  btn-outline-primary form-control mx-1",children:"Actualizar"}),(0,D.jsx)("button",{onClick:function(){return O.id&&He(O.id)},className:" btn  btn-outline-danger form-control mx-1",children:"Eliminar"})]}),(0,D.jsxs)("div",{className:"d-flex justify-content-center flex-column align-items-center",children:[(0,D.jsxs)(Z.Z,{component:"h5",variant:"h6",children:["Ay\xfadanos a calificar   \xa0",(0,D.jsx)(j.Z,{sx:{display:"inline-flex",position:"relative",cursor:"pointer",textAlign:"left"},children:(0,r.Z)(new Array(5)).map((function(e,t){return(0,D.jsxs)(j.Z,{position:"relative",sx:{cursor:"pointer"},onClick:function(e){return Re(t)},children:[(0,D.jsx)(j.Z,{sx:{width:t<=Ie?"100%":"0%",overflow:"hidden",position:"absolute"},children:(0,D.jsx)(w.Z,{})}),(0,D.jsx)(j.Z,{children:(0,D.jsx)(k.Z,{})})]},t)}))})]}),(0,D.jsx)("br",{}),(0,D.jsxs)("div",{className:"d-flex ",children:[(0,D.jsx)(b.Z,{alignItems:"center",className:"p-2",children:(0,D.jsx)(g.Z,{variant:"contained",color:"success",type:"submit",onClick:_,children:"Realizar comentario"})}),_e?(0,D.jsx)(b.Z,{alignItems:"center",className:"p-2",children:(0,D.jsx)(g.Z,{variant:"contained",color:"primary",type:"submit",onClick:U,children:"Ver otros comentarios"})}):null]}),(0,D.jsx)("div",{className:"mt-3",children:(0,D.jsx)("div",{className:"table-responsive ",children:(0,D.jsx)("table",{className:"table  text-light ",children:(0,D.jsxs)("thead",{children:[(0,D.jsxs)("tr",{className:"",children:[(0,D.jsx)("th",{scope:"col",children:"Autores"}),(0,D.jsx)("th",{scope:"col",children:(0,D.jsx)("td",{children:O.autor&&O.autor.map((function(e){return(0,D.jsx)("li",{children:(0,D.jsx)("small",{className:"",children:e.autor})},e.id)}))})})]}),2===O.tipe_of_video&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)("tr",{children:[(0,D.jsx)("th",{scope:"col",children:"Serie"}),(0,D.jsx)("th",{scope:"col",children:(0,D.jsx)("a",{className:"text-primary",style:{cursor:"pointer"},onClick:function(){return t=P.id,e("/seeSerie/".concat(t),{state:T}),ae(t),void console.log(t);var t},children:P.serie})})]}),(0,D.jsxs)("tr",{children:[(0,D.jsx)("th",{scope:"col",children:"Temporada"}),(0,D.jsx)("th",{scope:"col",children:(0,D.jsx)("a",{className:"text-primary",style:{cursor:"pointer"},onClick:function(){return t=Q.id,e("/seeTemporada/".concat(t),{state:T}),ce(t),void console.log(t);var t},children:Q.temporada})})]})]})]})})})})]})]}),(0,D.jsxs)("div",{children:[(0,D.jsx)("h5",{children:"Descripci\xf3n"}),(0,D.jsx)("p",{className:"mt-3",children:O.description_esp})]}),(0,D.jsx)("br",{}),(0,D.jsx)("div",{className:"table-responsive ",children:(0,D.jsxs)("table",{className:"table  text-light ",children:[(0,D.jsx)("thead",{children:(0,D.jsxs)("tr",{children:[(0,D.jsx)("th",{scope:"col",children:"Categor\xedas"}),(0,D.jsx)("th",{scope:"col",children:"Especialidades"}),(0,D.jsx)("th",{scope:"col",children:"Subespecialidades"}),(0,D.jsx)("th",{scope:"col",children:"Palabras claves"})]})}),(0,D.jsx)("tbody",{children:(0,D.jsxs)("tr",{children:[(0,D.jsx)("td",{children:O.categorias&&O.categorias.map((function(e){return(0,D.jsx)("li",{children:(0,D.jsx)("small",{className:"",children:e.categoria})},e.id)}))}),(0,D.jsx)("td",{children:O.especialidad&&O.especialidad.map((function(e){return(0,D.jsx)("li",{children:(0,D.jsx)("small",{className:"",children:e.especialidad})},e.id)}))}),(0,D.jsx)("td",{children:O.subEspecialidad&&O.subEspecialidad.map((function(e){return(0,D.jsx)("li",{children:(0,D.jsx)("small",{className:"",children:e.subEspecialidad})},e.id)}))}),(0,D.jsx)("td",{children:O.palabraClave&&O.palabraClave.map((function(e){return(0,D.jsx)("li",{children:(0,D.jsx)("small",{className:"",children:e.palabraClave})},e.id)}))})]})})]})})]}),(0,D.jsx)(E,{handleClose:N,show:y,histUser:ge,videoID:z}),(0,D.jsx)(M,{handleClose:V,show:I,histUser:ge,commentaries:_e,videoID:z})]})}},2516:function(e,t,n){var r=n(1413),a=n(5987),s=(n(2791),n(184)),i=["isLoading"];t.Z=function(e){return function(t){var n=t.isLoading,c=(0,a.Z)(t,i);return n?(0,s.jsxs)("div",{style:{fontSize:"25px",display:"flex",justifyContent:"center",textAlign:"center",flexDirection:"column",alignItems:"center"},children:[(0,s.jsx)("div",{className:"spinner-grow text-light",role:"status",children:(0,s.jsx)("span",{className:"sr-only"})}),"Espera por favor"]}):(0,s.jsx)(e,(0,r.Z)({},c))}}},9629:function(){}}]);
//# sourceMappingURL=403.15fa129c.chunk.js.map