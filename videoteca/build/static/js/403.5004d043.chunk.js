"use strict";(self.webpackChunkvideoteca_frontend=self.webpackChunkvideoteca_frontend||[]).push([[403],{7378:function(e,t,n){n.r(t),n.d(t,{default:function(){return $}});var r=n(3433),a=n(4165),s=n(1413),i=n(5861),o=n(9439),c=n(2791),u=n(7689),l=n(1652),d=n(6542),p=n(2516),x=n(9929),f=n(733),h=n(2918),m=n(697),v=n(4294),Z=n(3712),b=n(151),j=n(8596),w=n(1444),g=n(5313),y=n(8302),k=(n(5258),n(4942)),_=n(5987),C=n(5342),N=n(3360),S=n(4437),I=(n(9629),n(184)),D=["histUser","handleClose","show","commentary_id"],E=(0,j.Z)((function(e){return{containerModal:{border:"2px solid #ccc",borderRadius:10,boxShadow:"4px 4px 4px 0px #5a28e550"},cloud:{width:"25rem",background:"white",color:"black",borderRadius:10},containerForm:{height:"3rem",background:"white",color:"black",border:"2px solid #ccc",borderRadius:10,boxShadow:"4px 4px 4px 0px #5a28e550"},"@media (max-width: 720px)":{root:{display:"flex"}}}})),U=function(e){var t=e.histUser,n=e.handleClose,r=e.show,u=e.commentary_id,l={commentary:"",historial_user:t,video:(0,_.Z)(e,D).videoID},d=(0,c.useState)(l),p=(0,o.Z)(d,2),x=p[0],h=p[1],m=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=new FormData,e.prev=2,u){e.next=11;break}return n.append("commentary",x.commentary),n.append("historial_user",x.historial_user.id),n.append("video",x.video),e.next=9,f.z(n);case 9:e.next=14;break;case 11:return n.append("commentary",x.commentary),e.next=14,f.q4(u,n);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(2),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(t){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f._K(t);case 3:n=e.sent,h((0,s.Z)((0,s.Z)({},x),{},{commentary:n.commentary})),console.log(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();u&&e(u)}),[u]);var v=E();return(0,I.jsxs)(C.Z,{show:r,onHide:n,"aria-labelledby":"example-custom-modal-styling-title",contentClassName:"cloud "+v.cloud,centered:!0,children:[(0,I.jsx)(C.Z.Header,{closeButton:!0,children:(0,I.jsx)(C.Z.Title,{id:"tituloModal",children:"Ingrese su Comentario"})}),(0,I.jsx)(C.Z.Body,{id:"bodyModal",children:(0,I.jsxs)(S.Z,{onSubmit:m,children:[(0,I.jsx)(S.Z.Group,{className:"mb-2 ",controlId:"exampleForm.ControlInput1",children:(0,I.jsx)(S.Z.Control,{as:"textarea",className:v.containerForm,rows:1,name:"commentary",value:x.commentary||"",onChange:function(e){var t=e.target.name;h((0,s.Z)((0,s.Z)({},x),{},(0,k.Z)({},t,e.target.value)))}})}),(0,I.jsxs)(C.Z.Footer,{children:[(0,I.jsx)(N.Z,{variant:"secondary",onClick:n,children:"Cerrar"}),(0,I.jsx)(N.Z,{variant:"primary",type:"submit",onClick:n,children:"Crear"})]})]})})]})},V=["handleClose","show","histUser","commentaries"],F=(0,j.Z)((function(e){return{title:{color:"black",textAlign:"center"},nameUser:{color:"Gray",fontSize:"15px"},containerModal:{boxShadow:"4px 4px 4px 0px #5a28e550"},containerComment:{maxWidth:720,margin:"auto",marginBottom:20},"@media (max-width: 720px)":{root:{display:"flex"}}}})),M=function(e){var t=e.handleClose,n=e.show,r=e.histUser,a=e.commentaries,s=((0,_.Z)(e,V),(0,h.d)(!1)),i=(0,o.Z)(s,3),c=i[0],u=(i[1],i[2]),l=F();if(a)return(0,I.jsxs)(C.Z,{show:n,onHide:t,"aria-labelledby":"example-custom-modal-styling-title",contentClassName:l.containerModal,centered:!0,scrollable:!0,children:[(0,I.jsx)(C.Z.Header,{closeButton:!0,children:(0,I.jsx)(C.Z.Title,{id:"titleModal",className:l.title,children:"Comentarios de usuarios"})}),(0,I.jsx)(C.Z.Body,{id:"bodyModal",className:l.containerModal,children:a.map((function(e,t){return(0,I.jsx)(Z.Z,{className:l.containerComment,children:(0,I.jsxs)("div",{className:"row",children:[(0,I.jsxs)("div",{className:"col-9 ",children:[(0,I.jsx)("p",{children:new Date(e.created_date).toLocaleDateString()}),(0,I.jsx)("h5",{className:l.nameUser,children:e.historial_user.usuario.name}),(0,I.jsx)("h6",{children:e.commentary})]}),(0,I.jsx)("div",{className:"col-2",children:e.historial_user.usuario.id===r.usuario.id?(0,I.jsx)(g.Z,{alignItems:"center",alignContent:"center",children:(0,I.jsx)(U,{handleClose:u,show:c,commentary_id:e.id})}):null}),(0,I.jsx)("hr",{})]})},t)}))})]})},T=n(90),B=n(7411),H="https://sccotview.com/api/ubicaciones/",R=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.Z.post(H,t);case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.next=6,n.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.Z.post("".concat(H,"list_by_historial/"),t);case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.next=6,n.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A="https://sccotview.com/api/fechaReprods/",L=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.Z.post(A,t);case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.next=6,n.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.Z.post("".concat(A,"list_by_user_video/"),t);case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.next=6,n.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G="https://sccotview.com/api/historialVideo/",P=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.Z.post(G,t);case 2:if(200!==(n=e.sent).status){e.next=8;break}return console.log(n.data),e.next=7,n.data;case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.Z.post("".concat(G,"list_by_video/"),t);case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.next=6,n.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t,n){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.Z.patch(G+t+"/",n);case 2:if(200!==(r=e.sent).status){e.next=5;break}return e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),q=["video"],K=function(e){var t=e.video,n=((0,_.Z)(e,q),(0,c.useState)(null)),r=(0,o.Z)(n,2),s=r[0],l=(r[1],(0,c.useState)()),d=(0,o.Z)(l,2),p=d[0],f=d[1],h=(0,c.useState)(),m=(0,o.Z)(h,2),v=m[0],Z=m[1],b=(0,u.UO)().id,j=(0,u.TH)(),w=document.getElementById("iframe1"),g=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var t,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!j.state.id){e.next=9;break}return console.log(j),console.log(" location.state.id",j.state.id),e.next=5,x.F2(j.state.id);case 5:t=e.sent,f(t),e.next=16;break;case 9:return console.log(j),console.log(" location.state.usuario",j.state.usuario),e.next=13,x.F2(j.state.usuario);case 13:n=e.sent,f(n),console.log(n);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var t,n,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y({video_id:b});case 2:if(!((t=e.sent).length>0)){e.next=7;break}Z(t),e.next=13;break;case 7:return(n=new FormData).append("video",b),e.next=11,P(n);case 11:r=e.sent,Z(r);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function k(){var e=new Date,t="".concat(e.getDate()).padStart(2,"0"),n="".concat(e.getMonth()+1).padStart(2,"0");return e.getFullYear()+"-"+n+"-"+t}var C=(0,c.useCallback)((function(){var e,n,r=new FormData,c=0;if(t.code_esp&&p){var u={id:t.code_esp,playsinline:!0};if(n=new T.Z(w,u),null!==p.tiempo){var l=function(e){var t=e.split(":").map((function(e){return+e})),n=(0,o.Z)(t,3),r=n[0],a=n[1],s=n[2];return s=s+60*a+(60*r^2)-2,parseInt(s)}(p.tiempo);n.setCurrentTime(l)}n.on("play",(0,i.Z)((0,a.Z)().mark((function e(){var t,n,i,o,c,u,l,d,x,f;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z({histUser_id:p.id});case 2:return t=e.sent,(n=new FormData).append("historial_user",p.id),n.append("historial_Video",v[0].id),e.next=8,O(n);case 8:if(i=e.sent,u=k(),t.length>0&&(o=t),i.length>0&&(c=i),!s){e.next=55;break}if(r.append("direccionIP",s.ip),r.append("ciudad",s.city),r.append("pais",s.country),r.append("historial_user",p.id),r.append("historial_Video",v[0].id),!o){e.next=34;break}l=0;case 20:if(!(l<o.length)){e.next=32;break}if((d=o[l]).direccionIP!==s.ip||d.ciudad!==s.city||d.pais!==s.country){e.next=26;break}console.log("Ya exite una hubicaci\xf3n del mismo lugar registrada!"),e.next=29;break;case 26:return e.next=28,R(r);case 28:return e.abrupt("break",32);case 29:l++,e.next=20;break;case 32:e.next=36;break;case 34:return e.next=36,R(r);case 36:if(!c){e.next=53;break}x=0;case 38:if(!(x<c.length)){e.next=51;break}if(f=c[x],console.log(f.fecha),f.fecha!==u){e.next=45;break}console.log("Ya exite una fecha igual registrada!"),e.next=48;break;case 45:return e.next=47,L({historial_user:p.id,historial_Video:v[0].id});case 47:return e.abrupt("break",51);case 48:x++,e.next=38;break;case 51:e.next=55;break;case 53:return e.next=55,L({historial_user:p.id,historial_Video:v[0].id});case 55:case"end":return e.stop()}}),e)}))));var d=function(t){e=0,console.log("Guardado despu\xe9s de 10s"),t.getDuration().then((function(e){c=parseInt(e)})).catch((function(e){console.error(e)})),t.getCurrentTime().then((function(t){if(0!==(e=parseInt(t))&&p.id){var n=parseInt(90*c/100);console.log("Tiempo para el 90% "+n);var r=p.counter_repro,a=v[0].reproducciones;e>=n?(r+=1,a+=1,x.o0(p.id,{tiempo:0,visto:!0,counter_repro:r}),J(v[0].id,{reproducciones:a})):(console.log("Tiempo actual de reproducci\xf3n "+e),x.o0(p.id,{tiempo:e}))}})).catch((function(e){console.error(e)}))};document.URL.includes("/seeVideo/")&&function(e){setInterval(d,1e4,e)}(n)}}),[p,w,s,t.code_esp]);return(0,c.useEffect)((function(){C()}),[C]),(0,c.useEffect)((function(){g(),y()}),[]),(0,I.jsx)("div",{id:"iframe1"})},W=(0,j.Z)((function(e){return{paper:{marginTop:e.spacing(0),display:"flex",flexDirection:"column",alignItems:"center"}}})),$=function(){var e=(0,u.s0)(),t=(0,h.d)(!1),n=(0,o.Z)(t,3),j=n[0],k=n[1],_=n[2],C=(0,h.d)(!1),N=(0,o.Z)(C,3),S=N[0],D=N[1],E=N[2],V=(0,u.TH)(),F=(0,u.UO)().id,T=(0,c.useState)([]),B=(0,o.Z)(T,2),H=B[0],R=B[1],z=(0,c.useState)([]),A=(0,o.Z)(z,2),L=(A[0],A[1]),O=(0,c.useState)(!0),G=(0,o.Z)(O,2),P=(G[0],G[1],(0,c.useState)([])),Y=(0,o.Z)(P,2),J=Y[0],q=Y[1],$=(0,c.useState)(null),Q=(0,o.Z)($,2),X=(Q[0],Q[1]),ee=(0,c.useState)(V.state),te=(0,o.Z)(ee,2),ne=te[0],re=te[1],ae=(0,c.useState)([]),se=(0,o.Z)(ae,2),ie=se[0],oe=se[1],ce=(0,c.useState)(-1),ue=(0,o.Z)(ce,2),le=ue[0],de=ue[1],pe=(0,c.useState)({loading:!0}),xe=(0,o.Z)(pe,2),fe=xe[0],he=xe[1],me=(0,p.Z)(H),ve=function(e){var t=e.split(":"),n="";return t&&("00"!==t[0]&&(n=t[0]+"h"),"00"!==t[1]&&(n=" "+n+" "+t[1]+"min")),n.trim()};(0,c.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){var n,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.om(t);case 2:n=e.sent,r=n,console.log(r),X(new Date(n.upload_date).toDateString()),q(ve(n.duration)),R((0,s.Z)((0,s.Z)({},r),{},{duration:J})),he({loading:!1});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();e(F)}),[J,F,R,H.title_espanol,H.url_esp,H.url_vimeo_esp,H.serie_id]),(0,c.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){var n,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.dS();case 2:n=e.sent,r=n,console.log(r),L((0,s.Z)({},r));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();e(H.serie)}),[]),(0,c.useEffect)((function(){ne?de(ne.user_score-1):e("/loginuser")}),[]),(0,c.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.t$({video_id:t});case 2:n=e.sent,oe(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();e(F)}),[F]);var Ze=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){var n,r,i,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(de(t),n=H.cumulative_score,r=H.numberOfVotes,!ne.user_score){e.next=11;break}return n=n-ne.user_score+t+1,i=n/r,re((0,s.Z)((0,s.Z)({},ne),{},{user_score:t+1})),e.next=9,l.Jp(H.id,{cumulative_score:n,score:i});case 9:e.next=17;break;case 11:return o=(n=n+t+1)/(r+=1),re((0,s.Z)((0,s.Z)({},ne),{},{user_score:t+1})),e.next=17,l.Jp(H.id,{cumulative_score:n,numberOfVotes:r,score:o});case 17:return e.next=19,x.o0(ne.id,{user_score:t+1});case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),be=W();return ne?(0,I.jsxs)(Z.Z,{children:[fe.loading?(0,I.jsx)(me,{isLoading:fe.loading,video:H}):"",(0,I.jsx)("div",{children:(0,I.jsx)("div",{className:"d-flex justify-content-end",children:(0,I.jsx)("button",{onClick:function(){return window.history.back()},className:"btn btn-light my-2",value:"Volver",children:"Volver"})})}),(0,I.jsx)("div",{className:be.paper,children:(0,I.jsx)("h3",{children:H.title_espanol})}),(0,I.jsx)("br",{}),(0,I.jsxs)("div",{className:"row",children:[(0,I.jsx)("div",{className:"col-md-7 col-12 iframe1",children:(0,I.jsx)(K,{video:H})}),(0,I.jsxs)("div",{className:"col-md-5 col-12 infoVideo",children:[(0,I.jsx)(y.Z,{component:"h5",variant:"h6",style:{color:"white",borderBottom:"3px solid white",paddingBottom:"5px"},align:"center",children:H.duration}),(0,I.jsx)("br",{}),(0,I.jsx)("br",{}),(0,I.jsxs)(y.Z,{component:"h5",variant:"h6",children:["Ayudanos a calificar   \xa0",(0,I.jsx)(m.Z,{sx:{display:"inline-flex",position:"relative",cursor:"pointer",textAlign:"left"},children:(0,r.Z)(new Array(5)).map((function(e,t){return(0,I.jsxs)(m.Z,{position:"relative",sx:{cursor:"pointer"},onClick:function(e){return Ze(t)},children:[(0,I.jsx)(m.Z,{sx:{width:t<=le?"100%":"0%",overflow:"hidden",position:"absolute"},children:(0,I.jsx)(b.Z,{})}),(0,I.jsx)(m.Z,{children:(0,I.jsx)(w.Z,{})})]},t)}))})]}),(0,I.jsx)("br",{}),(0,I.jsxs)("div",{className:"d-flex ",children:[(0,I.jsx)(g.Z,{alignItems:"center",className:"p-2",children:(0,I.jsx)(v.Z,{variant:"contained",color:"success",type:"submit",onClick:k,children:"Realizar comentario"})}),ie?(0,I.jsx)(g.Z,{alignItems:"center",className:"p-2",children:(0,I.jsx)(v.Z,{variant:"contained",color:"primary",type:"submit",onClick:D,children:"Ver otros comentarios"})}):null]})]}),(0,I.jsx)("p",{className:"mt-3",children:H.description_esp}),(0,I.jsx)("br",{}),(0,I.jsxs)("div",{className:"d-flex justify-content-between",children:[H.categorias&&(0,I.jsxs)("ul",{children:["Categorias:",H.categorias.map((function(e){return(0,I.jsx)("li",{children:(0,I.jsx)("small",{className:"",children:e.categoria})},e.id)}))]}),H.especialidad&&(0,I.jsxs)("ul",{children:["Especialidades:",H.especialidad.map((function(e){return(0,I.jsx)("li",{children:(0,I.jsx)("small",{className:"",children:e.especialidad})},e.id)}))]})]}),(0,I.jsxs)("div",{className:"d-flex justify-content-between border-top  pt-2 border-2 ",children:[H.subEspecialidad&&(0,I.jsxs)("ul",{children:["Subespecialidades:",H.subEspecialidad.map((function(e){return(0,I.jsx)("li",{children:(0,I.jsx)("small",{className:"",children:e.subEspecialidad})},e.id)}))]}),H.palabraClave&&(0,I.jsxs)("ul",{children:["Palabras claves:",H.palabraClave.map((function(e){return(0,I.jsx)("li",{children:(0,I.jsx)("small",{className:"",children:e.palabraClave})},e.id)}))]})]})]}),(0,I.jsx)(U,{handleClose:_,show:j,histUser:ne,videoID:F}),(0,I.jsx)(M,{handleClose:E,show:S,histUser:ne,commentaries:ie,videoID:F})]}):(0,I.jsx)("p",{style:{fontSize:"25px"},children:"Inicia sesi\xf3n para ver todos los videos!"})}},2516:function(e,t,n){var r=n(1413),a=n(5987),s=(n(2791),n(184)),i=["isLoading"];t.Z=function(e){return function(t){var n=t.isLoading,o=(0,a.Z)(t,i);return n?(0,s.jsxs)("div",{style:{fontSize:"25px",display:"flex",justifyContent:"center",textAlign:"center",flexDirection:"column",alignItems:"center"},children:[(0,s.jsx)("div",{className:"spinner-grow text-light",role:"status",children:(0,s.jsx)("span",{className:"sr-only"})}),"Espera por favor"]}):(0,s.jsx)(e,(0,r.Z)({},o))}}},9629:function(){}}]);
//# sourceMappingURL=403.5004d043.chunk.js.map