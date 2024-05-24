"use strict";(self.webpackChunkvideoteca_frontend=self.webpackChunkvideoteca_frontend||[]).push([[403],{7378:function(e,n,t){t.r(n),t.d(n,{default:function(){return $}});var r=t(3433),a=t(4165),s=t(1413),i=t(5861),o=t(9439),c=t(2791),u=t(7689),l=t(1652),d=t(6542),p=t(2516),x=t(9929),f=t(733),h=t(2918),m=t(697),v=t(4294),Z=t(3712),b=t(151),j=t(8596),g=t(1444),w=t(5313),y=t(8302),k=(t(5258),t(4942)),_=t(5987),C=t(5342),N=t(3360),S=t(4437),I=(t(9629),t(184)),D=["histUser","handleClose","show","commentary_id"],F=(0,j.Z)((function(e){return{containerModal:{border:"2px solid #ccc",borderRadius:50,boxShadow:"4px 4px 4px 0px #5a28e550"},cloud:{width:"25rem",background:"#BFF",borderRadius:50},containerForm:{height:"3rem",background:"#BFF",border:"2px solid #ccc",borderRadius:50,boxShadow:"4px 4px 4px 0px #5a28e550"},"@media (max-width: 720px)":{root:{display:"flex"}}}})),E=function(e){var n=e.histUser,t=e.handleClose,r=e.show,u=e.commentary_id,l={commentary:"",historial_user:n,video:(0,_.Z)(e,D).videoID},d=(0,c.useState)(l),p=(0,o.Z)(d,2),x=p[0],h=p[1],m=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),t=new FormData,e.prev=2,u){e.next=11;break}return t.append("commentary",x.commentary),t.append("historial_user",x.historial_user.id),t.append("video",x.video),e.next=9,f.z(t);case 9:e.next=14;break;case 11:return t.append("commentary",x.commentary),e.next=14,f.q4(u,t);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(2),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(n){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f._K(n);case 3:t=e.sent,h((0,s.Z)((0,s.Z)({},x),{},{commentary:t.commentary})),console.log(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}();u&&e(u)}),[u]);var v=F();return(0,I.jsxs)(C.Z,{show:r,onHide:t,"aria-labelledby":"example-custom-modal-styling-title",contentClassName:"cloud "+v.cloud,centered:!0,children:[(0,I.jsx)(C.Z.Header,{closeButton:!0,children:(0,I.jsx)(C.Z.Title,{id:"tituloModal",children:"Ingrese su Comentario"})}),(0,I.jsx)(C.Z.Body,{id:"bodyModal",children:(0,I.jsxs)(S.Z,{onSubmit:m,children:[(0,I.jsx)(S.Z.Group,{className:"mb-2 ",controlId:"exampleForm.ControlInput1",children:(0,I.jsx)(S.Z.Control,{as:"textarea",className:v.containerForm,rows:1,name:"commentary",value:x.commentary||"",onChange:function(e){var n=e.target.name;h((0,s.Z)((0,s.Z)({},x),{},(0,k.Z)({},n,e.target.value)))}})}),(0,I.jsxs)(C.Z.Footer,{children:[(0,I.jsx)(N.Z,{variant:"secondary",onClick:t,children:"Close"}),(0,I.jsx)(N.Z,{variant:"primary",type:"submit",onClick:t,children:"Save Changes"})]})]})})]})},U=["handleClose","show","histUser","commentaries"],V=(0,j.Z)((function(e){return{title:{color:"Red",textAlign:"center",textShadow:"#FC0 1px 0 10px"},nameUser:{color:"Gray"},containerModal:{border:"2px solid #ccc",borderRadius:20,boxShadow:"4px 4px 4px 0px #5a28e550"},containerComment:{maxWidth:720,margin:"auto",marginBottom:20},"@media (max-width: 720px)":{root:{display:"flex"}}}})),B=function(e){var n=e.handleClose,t=e.show,r=e.histUser,a=e.commentaries,s=((0,_.Z)(e,U),(0,h.d)(!1)),i=(0,o.Z)(s,3),c=i[0],u=i[1],l=i[2],d=V();if(a)return(0,I.jsxs)(C.Z,{show:t,onHide:n,"aria-labelledby":"example-custom-modal-styling-title",contentClassName:d.containerModal,centered:!0,scrollable:!0,children:[(0,I.jsx)(C.Z.Header,{closeButton:!0,children:(0,I.jsx)(C.Z.Title,{id:"titleModal",className:d.title,children:"Comentarios de usuarios"})}),(0,I.jsx)(C.Z.Body,{id:"bodyModal",className:d.containerModal,children:a.map((function(e,n){return(0,I.jsx)(Z.Z,{className:d.containerComment,children:(0,I.jsxs)("div",{className:"row",children:[(0,I.jsxs)("div",{className:"col-9 ",children:[(0,I.jsxs)("p",{children:["fecha: ",new Date(e.created_date).toLocaleDateString()]}),(0,I.jsxs)("h5",{className:d.nameUser,children:["User: ",e.historial_user.usuario.name]}),(0,I.jsx)("h5",{children:e.commentary})]}),(0,I.jsx)("div",{className:"col-2",children:e.historial_user.usuario.id===r.usuario.id?(0,I.jsxs)(w.Z,{alignItems:"center",alignContent:"center",children:[(0,I.jsx)(v.Z,{variant:"contained",color:"info",onClick:u,children:"EDITAR"}),(0,I.jsx)(E,{handleClose:l,show:c,commentary_id:e.id})]}):null}),(0,I.jsx)("hr",{})]})},n)}))})]})},T=t(90),M=t(7411),R="https://sccotview.com/api/ubicaciones/",A=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.Z.post(R,n);case 2:if(200!==(t=e.sent).status){e.next=7;break}return e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),H=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.Z.post("".concat(R,"list_by_historial/"),n);case 2:if(200!==(t=e.sent).status){e.next=7;break}return e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),L="https://sccotview.com/api/fechaReprods/",z=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.Z.post(L,n);case 2:if(200!==(t=e.sent).status){e.next=7;break}return e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),O=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.Z.post("".concat(L,"list_by_user_video/"),n);case 2:if(200!==(t=e.sent).status){e.next=7;break}return e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),G="https://sccotview.com/api/historialVideo/",P=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.Z.post(G,n);case 2:if(200!==(t=e.sent).status){e.next=8;break}return console.log(t.data),e.next=7,t.data;case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Y=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.Z.post("".concat(G,"list_by_video/"),n);case 2:if(200!==(t=e.sent).status){e.next=7;break}return e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),J=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n,t){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.Z.patch(G+n+"/",t);case 2:if(200!==(r=e.sent).status){e.next=5;break}return e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),q=["video"],K=function(e){var n=e.video,t=((0,_.Z)(e,q),(0,c.useState)(null)),r=(0,o.Z)(t,2),s=r[0],l=(r[1],(0,c.useState)()),d=(0,o.Z)(l,2),p=d[0],f=d[1],h=(0,c.useState)(),m=(0,o.Z)(h,2),v=m[0],Z=m[1],b=(0,u.UO)().id,j=(0,u.TH)(),g=document.getElementById("iframe1"),w=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var n,t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!j.state.id){e.next=9;break}return console.log(j),console.log(" location.state.id",j.state.id),e.next=5,x.F2(j.state.id);case 5:n=e.sent,f(n),e.next=16;break;case 9:return console.log(j),console.log(" location.state.usuario",j.state.usuario),e.next=13,x.F2(j.state.usuario);case 13:t=e.sent,f(t),console.log(t);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var n,t,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y({video_id:b});case 2:if(!((n=e.sent).length>0)){e.next=7;break}Z(n),e.next=13;break;case 7:return(t=new FormData).append("video",b),e.next=11,P(t);case 11:r=e.sent,Z(r);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function k(){var e=new Date,n="".concat(e.getDate()).padStart(2,"0"),t="".concat(e.getMonth()+1).padStart(2,"0");return e.getFullYear()+"-"+t+"-"+n}var C=(0,c.useCallback)((function(){var e,t,r=new FormData,c=0;if(n.code_esp&&p){var u={id:n.code_esp,playsinline:!0};if(t=new T.Z(g,u),null!==p.tiempo){var l=function(e){var n=e.split(":").map((function(e){return+e})),t=(0,o.Z)(n,3),r=t[0],a=t[1],s=t[2];return s=s+60*a+(60*r^2)-2,parseInt(s)}(p.tiempo);t.setCurrentTime(l)}t.on("play",(0,i.Z)((0,a.Z)().mark((function e(){var n,t,i,o,c,u,l,d,x,f;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H({histUser_id:p.id});case 2:return n=e.sent,(t=new FormData).append("historial_user",p.id),t.append("historial_Video",v[0].id),e.next=8,O(t);case 8:if(i=e.sent,u=k(),n.length>0&&(o=n),i.length>0&&(c=i),!s){e.next=55;break}if(r.append("direccionIP",s.ip),r.append("ciudad",s.city),r.append("pais",s.country),r.append("historial_user",p.id),r.append("historial_Video",v[0].id),!o){e.next=34;break}l=0;case 20:if(!(l<o.length)){e.next=32;break}if((d=o[l]).direccionIP!==s.ip||d.ciudad!==s.city||d.pais!==s.country){e.next=26;break}console.log("Ya exite una hubicaci\xf3n del mismo lugar registrada!"),e.next=29;break;case 26:return e.next=28,A(r);case 28:return e.abrupt("break",32);case 29:l++,e.next=20;break;case 32:e.next=36;break;case 34:return e.next=36,A(r);case 36:if(!c){e.next=53;break}x=0;case 38:if(!(x<c.length)){e.next=51;break}if(f=c[x],console.log(f.fecha),f.fecha!==u){e.next=45;break}console.log("Ya exite una fecha igual registrada!"),e.next=48;break;case 45:return e.next=47,z({historial_user:p.id,historial_Video:v[0].id});case 47:return e.abrupt("break",51);case 48:x++,e.next=38;break;case 51:e.next=55;break;case 53:return e.next=55,z({historial_user:p.id,historial_Video:v[0].id});case 55:case"end":return e.stop()}}),e)}))));var d=function(n){e=0,console.log("Guardado despu\xe9s de 10s"),n.getDuration().then((function(e){c=parseInt(e)})).catch((function(e){console.error(e)})),n.getCurrentTime().then((function(n){if(0!==(e=parseInt(n))&&p.id){var t=parseInt(90*c/100);console.log("Tiempo para el 90% "+t);var r=p.counter_repro,a=v[0].reproducciones;e>=t?(r+=1,a+=1,x.o0(p.id,{tiempo:0,visto:!0,counter_repro:r}),J(v[0].id,{reproducciones:a})):(console.log("Tiempo actual de reproducci\xf3n "+e),x.o0(p.id,{tiempo:e}))}})).catch((function(e){console.error(e)}))};document.URL.includes("/seeVideo/")&&function(e){setInterval(d,1e4,e)}(t)}}),[p,g,s,n.code_esp]);return(0,c.useEffect)((function(){C()}),[C]),(0,c.useEffect)((function(){w(),y()}),[]),(0,I.jsx)("div",{id:"iframe1"})},W=(0,j.Z)((function(e){return{paper:{marginTop:e.spacing(0),display:"flex",flexDirection:"column",alignItems:"center"}}})),$=function(){var e=(0,u.s0)(),n=(0,h.d)(!1),t=(0,o.Z)(n,3),j=t[0],k=t[1],_=t[2],C=(0,h.d)(!1),N=(0,o.Z)(C,3),S=N[0],D=N[1],F=N[2],U=(0,u.TH)(),V=(0,u.UO)().id,T=(0,c.useState)([]),M=(0,o.Z)(T,2),R=M[0],A=M[1],H=(0,c.useState)([]),L=(0,o.Z)(H,2),z=(L[0],L[1]),O=(0,c.useState)(!0),G=(0,o.Z)(O,2),P=(G[0],G[1],(0,c.useState)([])),Y=(0,o.Z)(P,2),J=Y[0],q=Y[1],$=(0,c.useState)(null),Q=(0,o.Z)($,2),X=(Q[0],Q[1]),ee=(0,c.useState)(U.state),ne=(0,o.Z)(ee,2),te=ne[0],re=ne[1],ae=(0,c.useState)([]),se=(0,o.Z)(ae,2),ie=se[0],oe=se[1],ce=(0,c.useState)(-1),ue=(0,o.Z)(ce,2),le=ue[0],de=ue[1],pe=(0,c.useState)({loading:!0}),xe=(0,o.Z)(pe,2),fe=xe[0],he=xe[1],me=(0,p.Z)(R),ve=function(e){var n=e.split(":"),t="";return n&&("00"!==n[0]&&(t=n[0]+"h"),"00"!==n[1]&&(t=" "+t+" "+n[1]+"min")),t.trim()};(0,c.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.om(n);case 2:t=e.sent,r=t,console.log(r),X(new Date(t.upload_date).toDateString()),q(ve(t.duration)),A((0,s.Z)((0,s.Z)({},r),{},{duration:J})),he({loading:!1});case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();e(V)}),[J,V,A,R.title_espanol,R.url_esp,R.url_vimeo_esp,R.serie_id]),(0,c.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.dS();case 2:t=e.sent,r=t,console.log(r),z((0,s.Z)({},r));case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();e(R.serie)}),[]),(0,c.useEffect)((function(){te?de(te.user_score-1):e("/loginuser")}),[]),(0,c.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.t$({video_id:n});case 2:t=e.sent,oe(t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();e(V)}),[V]);var Ze=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t,r,i,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(de(n),t=R.cumulative_score,r=R.numberOfVotes,!te.user_score){e.next=11;break}return t=t-te.user_score+n+1,i=t/r,re((0,s.Z)((0,s.Z)({},te),{},{user_score:n+1})),e.next=9,l.Jp(R.id,{cumulative_score:t,score:i});case 9:e.next=17;break;case 11:return o=(t=t+n+1)/(r+=1),re((0,s.Z)((0,s.Z)({},te),{},{user_score:n+1})),e.next=17,l.Jp(R.id,{cumulative_score:t,numberOfVotes:r,score:o});case 17:return e.next=19,x.o0(te.id,{user_score:n+1});case 19:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),be=W();return te?(0,I.jsxs)(Z.Z,{children:[fe.loading?(0,I.jsx)(me,{isLoading:fe.loading,video:R}):"",(0,I.jsx)("div",{children:(0,I.jsx)("div",{className:"d-flex justify-content-end",children:(0,I.jsx)("button",{onClick:function(){return window.history.back()},className:"btn btn-light",value:"Volver",children:"Volver"})})}),(0,I.jsx)("div",{className:be.paper,children:(0,I.jsx)("h3",{children:R.title_espanol})}),(0,I.jsx)("br",{}),(0,I.jsxs)("div",{className:"row",children:[(0,I.jsx)("div",{className:"col-md-7 col-12 iframe1",children:(0,I.jsx)(K,{video:R})}),(0,I.jsxs)("div",{className:"col-md-5 col-12 infoVideo",children:[(0,I.jsx)(y.Z,{component:"h5",variant:"h6",style:{color:"white",borderBottom:"3px solid white",paddingBottom:"5px"},align:"center",children:R.duration}),(0,I.jsx)("br",{}),(0,I.jsx)("br",{}),(0,I.jsxs)(y.Z,{component:"h5",variant:"h6",children:["Ayudanos a calificar   \xa0",(0,I.jsx)(m.Z,{sx:{display:"inline-flex",position:"relative",cursor:"pointer",textAlign:"left"},children:(0,r.Z)(new Array(5)).map((function(e,n){return(0,I.jsxs)(m.Z,{position:"relative",sx:{cursor:"pointer"},onClick:function(e){return Ze(n)},children:[(0,I.jsx)(m.Z,{sx:{width:n<=le?"100%":"0%",overflow:"hidden",position:"absolute"},children:(0,I.jsx)(b.Z,{})}),(0,I.jsx)(m.Z,{children:(0,I.jsx)(g.Z,{})})]},n)}))})]}),(0,I.jsx)("br",{}),(0,I.jsxs)("div",{className:"d-flex ",children:[(0,I.jsx)(w.Z,{alignItems:"center",className:"p-2",children:(0,I.jsx)(v.Z,{variant:"contained",color:"success",type:"submit",onClick:k,children:"Realizar comentario"})}),ie?(0,I.jsx)(w.Z,{alignItems:"center",className:"p-2",children:(0,I.jsx)(v.Z,{variant:"contained",color:"primary",type:"submit",onClick:D,children:"Ver otros comentarios"})}):null]})]}),(0,I.jsx)("p",{className:"mt-3",children:R.description_esp}),(0,I.jsx)("br",{}),(0,I.jsxs)("div",{className:"d-flex justify-content-between",children:[R.categorias&&(0,I.jsxs)("ul",{children:["Categorias:",R.categorias.map((function(e){return(0,I.jsx)("li",{children:(0,I.jsx)("small",{className:"",children:e.categoria})},e.id)}))]}),R.especialidad&&(0,I.jsxs)("ul",{children:["Especialidades:",R.especialidad.map((function(e){return(0,I.jsx)("li",{children:(0,I.jsx)("small",{className:"",children:e.especialidad})},e.id)}))]})]}),(0,I.jsxs)("div",{className:"d-flex justify-content-between border-top  pt-2 border-2 ",children:[R.subEspecialidad&&(0,I.jsxs)("ul",{children:["Subespecialidades:",R.subEspecialidad.map((function(e){return(0,I.jsx)("li",{children:(0,I.jsx)("small",{className:"",children:e.subEspecialidad})},e.id)}))]}),R.palabraClave&&(0,I.jsxs)("ul",{children:["Palabras claves:",R.palabraClave.map((function(e){return(0,I.jsx)("li",{children:(0,I.jsx)("small",{className:"",children:e.palabraClave})},e.id)}))]})]})]}),(0,I.jsx)(E,{handleClose:_,show:j,histUser:te,videoID:V}),(0,I.jsx)(B,{handleClose:F,show:S,histUser:te,commentaries:ie,videoID:V})]}):(0,I.jsx)("p",{style:{fontSize:"25px"},children:"Inicia sesi\xf3n para ver todos los videos!"})}},2516:function(e,n,t){var r=t(1413),a=t(5987),s=(t(2791),t(184)),i=["isLoading"];n.Z=function(e){return function(n){var t=n.isLoading,o=(0,a.Z)(n,i);return t?(0,s.jsxs)("div",{style:{fontSize:"25px",display:"flex",justifyContent:"center",textAlign:"center",flexDirection:"column",alignItems:"center"},children:[(0,s.jsx)("div",{className:"spinner-grow text-light",role:"status",children:(0,s.jsx)("span",{className:"sr-only"})}),"Espera por favor"]}):(0,s.jsx)(e,(0,r.Z)({},o))}}},9629:function(){}}]);
//# sourceMappingURL=403.408ef63e.chunk.js.map