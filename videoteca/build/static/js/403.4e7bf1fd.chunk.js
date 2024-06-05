"use strict";(self.webpackChunkvideoteca_frontend=self.webpackChunkvideoteca_frontend||[]).push([[403],{7378:function(e,t,n){n.r(t),n.d(t,{default:function(){return ee}});var r=n(3433),a=n(1413),s=n(4165),i=n(5861),c=n(9439),o=n(2791),l=n(7689),u=n(1652),d=n(6542),p=n(6639),x=n(2516),h=n(9929),f=n(733),m=n(2918),v=n(9164),Z=n(890),b=n(697),j=n(6314),g=n(4294),y=n(151),w=n(8596),k=n(1444),_=(n(5258),n(4942)),C=n(5987),N=n(5342),S=n(3360),I=n(4437),D=(n(9629),n(184)),U=["histUser","handleClose","show","commentary_id"],V=(0,w.Z)((function(e){return{containerModal:{border:"2px solid #ccc",borderRadius:10,boxShadow:"4px 4px 4px 0px #5a28e550"},cloud:{width:"25rem",background:"white",color:"black",borderRadius:10},containerForm:{height:"3rem",background:"white",color:"black",border:"2px solid #ccc",borderRadius:10,boxShadow:"4px 4px 4px 0px #5a28e550"},"@media (max-width: 720px)":{root:{display:"flex"}}}})),E=function(e){var t=e.histUser,n=e.handleClose,r=e.show,l=e.commentary_id,u={commentary:"",historial_user:t,video:(0,C.Z)(e,U).videoID},d=(0,o.useState)(u),p=(0,c.Z)(d,2),x=p[0],h=p[1],m=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(t){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=new FormData,e.prev=2,l){e.next=11;break}return n.append("commentary",x.commentary),n.append("historial_user",x.historial_user.id),n.append("video",x.video),e.next=9,f.z(n);case 9:e.next=14;break;case 11:return n.append("commentary",x.commentary),e.next=14,f.q4(l,n);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(2),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(t){return e.apply(this,arguments)}}();(0,o.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(t){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f._K(t);case 3:n=e.sent,h((0,a.Z)((0,a.Z)({},x),{},{commentary:n.commentary})),console.log(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();l&&e(l)}),[l]);var v=V();return(0,D.jsxs)(N.Z,{show:r,onHide:n,"aria-labelledby":"example-custom-modal-styling-title",contentClassName:"cloud "+v.cloud,centered:!0,children:[(0,D.jsx)(N.Z.Header,{closeButton:!0,children:(0,D.jsx)(N.Z.Title,{id:"tituloModal",children:"Ingrese su Comentario"})}),(0,D.jsx)(N.Z.Body,{id:"bodyModal",children:(0,D.jsxs)(I.Z,{onSubmit:m,children:[(0,D.jsx)(I.Z.Group,{className:"mb-2 ",controlId:"exampleForm.ControlInput1",children:(0,D.jsx)(I.Z.Control,{as:"textarea",className:v.containerForm,rows:1,name:"commentary",value:x.commentary||"",onChange:function(e){var t=e.target.name;h((0,a.Z)((0,a.Z)({},x),{},(0,_.Z)({},t,e.target.value)))}})}),(0,D.jsxs)(N.Z.Footer,{children:[(0,D.jsx)(S.Z,{variant:"secondary",onClick:n,children:"Cerrar"}),(0,D.jsx)(S.Z,{variant:"primary",type:"submit",onClick:n,children:"Crear"})]})]})})]})},F=n(3712),T=["handleClose","show","histUser","commentaries"],B=(0,w.Z)((function(e){return{title:{color:"black",textAlign:"center"},nameUser:{color:"Gray",fontSize:"15px"},containerModal:{boxShadow:"4px 4px 4px 0px #5a28e550"},containerComment:{maxWidth:720,margin:"auto",marginBottom:20},"@media (max-width: 720px)":{root:{display:"flex"}}}})),M=function(e){var t=e.handleClose,n=e.show,r=e.histUser,a=e.commentaries,s=((0,C.Z)(e,T),(0,m.d)(!1)),i=(0,c.Z)(s,3),o=i[0],l=(i[1],i[2]),u=B();if(a)return(0,D.jsxs)(N.Z,{show:n,onHide:t,"aria-labelledby":"example-custom-modal-styling-title",contentClassName:u.containerModal,centered:!0,scrollable:!0,children:[(0,D.jsx)(N.Z.Header,{closeButton:!0,children:(0,D.jsx)(N.Z.Title,{id:"titleModal",className:u.title,children:"Comentarios de usuarios"})}),(0,D.jsx)(N.Z.Body,{id:"bodyModal",className:u.containerModal,children:a.map((function(e,t){return(0,D.jsx)(F.Z,{className:u.containerComment,children:(0,D.jsxs)("div",{className:"row",children:[(0,D.jsxs)("div",{className:"col-9 ",children:[(0,D.jsx)("p",{children:new Date(e.created_date).toLocaleDateString()}),(0,D.jsx)("h5",{className:u.nameUser,children:e.historial_user.usuario.name}),(0,D.jsx)("h6",{children:e.commentary})]}),(0,D.jsx)("div",{className:"col-2",children:e.historial_user.usuario.id===r.usuario.id?(0,D.jsx)(j.Z,{alignItems:"center",alignContent:"center",children:(0,D.jsx)(E,{handleClose:l,show:o,commentary_id:e.id})}):null}),(0,D.jsx)("hr",{})]})},t)}))})]})},H=n(90),R=n(7411),z="https://sccotview.com/api/ubicaciones/",A=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(t){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.Z.post(z,t);case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.next=6,n.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(t){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.Z.post("".concat(z,"list_by_historial/"),t);case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.next=6,n.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O="https://sccotview.com/api/fechaReprods/",G=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(t){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.Z.post(O,t);case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.next=6,n.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(t){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.Z.post("".concat(O,"list_by_user_video/"),t);case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.next=6,n.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y="https://sccotview.com/api/historialVideo/",J=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(t){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.Z.post(Y,t);case 2:if(200!==(n=e.sent).status){e.next=8;break}return console.log(n.data),e.next=7,n.data;case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(t){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.Z.post("".concat(Y,"list_by_video/"),t);case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.next=6,n.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(t,n){var r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.Z.patch(Y+t+"/",n);case 2:if(200!==(r=e.sent).status){e.next=5;break}return e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),W=["video"],$=function(e){var t=e.video,n=((0,C.Z)(e,W),(0,o.useState)(null)),r=(0,c.Z)(n,2),a=r[0],u=(r[1],(0,o.useState)()),d=(0,c.Z)(u,2),p=d[0],x=d[1],f=(0,o.useState)(),m=(0,c.Z)(f,2),v=m[0],Z=m[1],b=(0,l.UO)().id,j=(0,l.TH)(),g=document.getElementById("iframe1"),y=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){var t,n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!j.state.id){e.next=9;break}return console.log(j),console.log(" location.state.id",j.state.id),e.next=5,h.F2(j.state.id);case 5:t=e.sent,x(t),e.next=16;break;case 9:return console.log(j),console.log(" location.state.usuario",j.state.usuario),e.next=13,h.F2(j.state.usuario);case 13:n=e.sent,x(n),console.log(n);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){var t,n,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K({video_id:b});case 2:if(!((t=e.sent).length>0)){e.next=7;break}Z(t),e.next=13;break;case 7:return(n=new FormData).append("video",b),e.next=11,J(n);case 11:r=e.sent,Z(r);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function k(){var e=new Date,t="".concat(e.getDate()).padStart(2,"0"),n="".concat(e.getMonth()+1).padStart(2,"0");return e.getFullYear()+"-"+n+"-"+t}var _=(0,o.useCallback)((function(){var e,n,r=new FormData,o=0;if(t.code_esp&&p){var l={id:t.code_esp,playsinline:!0};if(n=new H.Z(g,l),null!==p.tiempo){var u=function(e){var t=e.split(":").map((function(e){return+e})),n=(0,c.Z)(t,3),r=n[0],a=n[1],s=n[2];return s=s+60*a+(60*r^2)-2,parseInt(s)}(p.tiempo);n.setCurrentTime(u)}n.on("play",(0,i.Z)((0,s.Z)().mark((function e(){var t,n,i,c,o,l,u,d,x,h;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L({histUser_id:p.id});case 2:return t=e.sent,(n=new FormData).append("historial_user",p.id),n.append("historial_Video",v[0].id),e.next=8,P(n);case 8:if(i=e.sent,l=k(),t.length>0&&(c=t),i.length>0&&(o=i),!a){e.next=55;break}if(r.append("direccionIP",a.ip),r.append("ciudad",a.city),r.append("pais",a.country),r.append("historial_user",p.id),r.append("historial_Video",v[0].id),!c){e.next=34;break}u=0;case 20:if(!(u<c.length)){e.next=32;break}if((d=c[u]).direccionIP!==a.ip||d.ciudad!==a.city||d.pais!==a.country){e.next=26;break}console.log("Ya exite una hubicaci\xf3n del mismo lugar registrada!"),e.next=29;break;case 26:return e.next=28,A(r);case 28:return e.abrupt("break",32);case 29:u++,e.next=20;break;case 32:e.next=36;break;case 34:return e.next=36,A(r);case 36:if(!o){e.next=53;break}x=0;case 38:if(!(x<o.length)){e.next=51;break}if(h=o[x],console.log(h.fecha),h.fecha!==l){e.next=45;break}console.log("Ya exite una fecha igual registrada!"),e.next=48;break;case 45:return e.next=47,G({historial_user:p.id,historial_Video:v[0].id});case 47:return e.abrupt("break",51);case 48:x++,e.next=38;break;case 51:e.next=55;break;case 53:return e.next=55,G({historial_user:p.id,historial_Video:v[0].id});case 55:case"end":return e.stop()}}),e)}))));var d=function(t){e=0,console.log("Guardado despu\xe9s de 10s"),t.getDuration().then((function(e){o=parseInt(e)})).catch((function(e){console.error(e)})),t.getCurrentTime().then((function(t){if(0!==(e=parseInt(t))&&p.id){var n=parseInt(90*o/100);console.log("Tiempo para el 90% "+n);var r=p.counter_repro,a=v[0].reproducciones;e>=n?(r+=1,a+=1,h.o0(p.id,{tiempo:0,visto:!0,counter_repro:r}),q(v[0].id,{reproducciones:a})):(console.log("Tiempo actual de reproducci\xf3n "+e),h.o0(p.id,{tiempo:e}))}})).catch((function(e){console.error(e)}))};document.URL.includes("/seeVideo/")&&function(e){setInterval(d,1e4,e)}(n)}}),[p,g,a,t.code_esp]);return(0,o.useEffect)((function(){_()}),[_]),(0,o.useEffect)((function(){y(),w()}),[]),(0,D.jsx)("div",{id:"iframe1"})},Q=n(7470),X=(0,w.Z)((function(e){return{paper:{marginTop:e.spacing(0),display:"flex",flexDirection:"column",alignItems:"center"}}})),ee=function(){var e=(0,l.s0)(),t=(0,m.d)(!1),n=(0,c.Z)(t,3),w=n[0],_=n[1],C=n[2],N=(0,m.d)(!1),S=(0,c.Z)(N,3),I=S[0],U=S[1],V=S[2],F=(0,o.useState)(),T=(0,c.Z)(F,2),B=T[0],H=T[1],R=(0,l.TH)(),z=(0,l.UO)().id,A=(0,o.useState)([]),L=(0,c.Z)(A,2),O=L[0],G=L[1],P=(0,o.useState)([]),Y=(0,c.Z)(P,2),J=Y[0],K=Y[1],q=(0,o.useState)([]),W=(0,c.Z)(q,2),ee=W[0],te=W[1],ne=(0,o.useState)([]),re=(0,c.Z)(ne,2),ae=(re[0],re[1]),se=(0,o.useState)([]),ie=(0,c.Z)(se,2),ce=(ie[0],ie[1]),oe=(0,o.useState)(!0),le=(0,c.Z)(oe,2),ue=(le[0],le[1],(0,o.useState)([])),de=(0,c.Z)(ue,2),pe=de[0],xe=de[1],he=(0,o.useState)(null),fe=(0,c.Z)(he,2),me=(fe[0],fe[1]),ve=(0,o.useState)(R.state),Ze=(0,c.Z)(ve,2),be=Ze[0],je=Ze[1],ge=(0,o.useState)([]),ye=(0,c.Z)(ge,2),we=ye[0],ke=ye[1],_e=(0,o.useState)(-1),Ce=(0,c.Z)(_e,2),Ne=Ce[0],Se=Ce[1],Ie=(0,o.useState)({loading:!0}),De=(0,c.Z)(Ie,2),Ue=De[0],Ve=De[1],Ee=(0,x.Z)(O),Fe=function(e){var t=e.split(":"),n="";return t&&("00"!==t[0]&&(n=t[0]+"h"),"00"!==t[1]&&(n=" "+n+" "+t[1]+"min")),n.trim()},Te=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(t,n){var r,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.dS(t);case 2:return r=e.sent,console.log(r),K(r),e.next=7,p.op(n);case 7:a=e.sent,console.log(a),te(a);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Be=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.K7();case 3:t=e.sent,H(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();(0,o.useEffect)((function(){var t=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(t){var n,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.om(t);case 2:n=e.sent,r=n,console.log(r),me(new Date(n.upload_date).toDateString()),xe(Fe(n.duration)),G((0,a.Z)((0,a.Z)({},r),{},{duration:pe})),Ve({loading:!1});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Be(),t(z),be?Se(be.user_score-1):e("/loginuser");var n=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(t){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.t$({video_id:t});case 2:n=e.sent,ke(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();n(z),Te(O.serie,O.temporada)}),[pe,z,G,O.title_espanol,O.url_esp,O.url_vimeo_esp,O.serie_id]);var Me=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(t){var n,r,i,c;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Se(t),n=O.cumulative_score,r=O.numberOfVotes,!be.user_score){e.next=11;break}return n=n-be.user_score+t+1,i=n/r,je((0,a.Z)((0,a.Z)({},be),{},{user_score:t+1})),e.next=9,u.Jp(O.id,{cumulative_score:n,score:i});case 9:e.next=17;break;case 11:return c=(n=n+t+1)/(r+=1),je((0,a.Z)((0,a.Z)({},be),{},{user_score:t+1})),e.next=17,u.Jp(O.id,{cumulative_score:n,numberOfVotes:r,score:c});case 17:return e.next=19,h.o0(be.id,{user_score:t+1});case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),He=X();return be?(0,D.jsx)(Q.ErrorBoundary,{children:(0,D.jsxs)(v.Z,{children:[Ue.loading?(0,D.jsx)(Ee,{isLoading:Ue.loading,video:O}):"",(0,D.jsx)("div",{children:(0,D.jsx)("div",{className:"d-flex justify-content-end",children:(0,D.jsx)("button",{onClick:function(){return window.history.back()},className:"btn btn-light my-2",value:"Volver",children:"Volver"})})}),(0,D.jsx)("div",{className:He.paper,children:(0,D.jsx)("h3",{children:O.title_espanol})}),(0,D.jsx)("br",{}),(0,D.jsxs)("div",{className:"row",children:[(0,D.jsx)("div",{className:"col-8 iframe1",children:(0,D.jsx)($,{video:O})}),(0,D.jsxs)("div",{className:"col infoVideo",children:[(0,D.jsx)(Z.Z,{component:"h5",variant:"h6",style:{color:"white",borderBottom:"3px solid white",paddingBottom:"5px"},align:"center",children:O.duration}),(0,D.jsx)("br",{}),(0,D.jsx)("br",{}),(0,D.jsxs)("div",{className:"d-flex justify-content-center flex-column align-items-center",children:[(0,D.jsxs)(Z.Z,{component:"h5",variant:"h6",children:["Ayudanos a calificar   \xa0",(0,D.jsx)(b.Z,{sx:{display:"inline-flex",position:"relative",cursor:"pointer",textAlign:"left"},children:(0,r.Z)(new Array(5)).map((function(e,t){return(0,D.jsxs)(b.Z,{position:"relative",sx:{cursor:"pointer"},onClick:function(e){return Me(t)},children:[(0,D.jsx)(b.Z,{sx:{width:t<=Ne?"100%":"0%",overflow:"hidden",position:"absolute"},children:(0,D.jsx)(y.Z,{})}),(0,D.jsx)(b.Z,{children:(0,D.jsx)(k.Z,{})})]},t)}))})]}),(0,D.jsx)("br",{}),(0,D.jsxs)("div",{className:"d-flex ",children:[(0,D.jsx)(j.Z,{alignItems:"center",className:"p-2",children:(0,D.jsx)(g.Z,{variant:"contained",color:"success",type:"submit",onClick:_,children:"Realizar comentario"})}),we?(0,D.jsx)(j.Z,{alignItems:"center",className:"p-2",children:(0,D.jsx)(g.Z,{variant:"contained",color:"primary",type:"submit",onClick:U,children:"Ver otros comentarios"})}):null]}),2==O.tipe_of_video&&(0,D.jsx)("div",{className:"mt-3",children:(0,D.jsx)("div",{className:"table-responsive ",children:(0,D.jsx)("table",{className:"table  text-light ",children:(0,D.jsxs)("thead",{children:[(0,D.jsxs)("tr",{children:[(0,D.jsx)("th",{scope:"col",children:"Serie"}),(0,D.jsx)("th",{scope:"col",children:(0,D.jsx)("a",{className:"text-primary",style:{cursor:"pointer"},onClick:function(){return t=J.id,e("/seeSerie/".concat(t),{state:B}),ae(t),void console.log(t);var t},children:J.serie})})]}),(0,D.jsxs)("tr",{children:[(0,D.jsx)("th",{scope:"col",children:"Temporada"}),(0,D.jsx)("th",{scope:"col",children:(0,D.jsx)("a",{className:"text-primary",style:{cursor:"pointer"},onClick:function(){return t=ee.id,e("/seeTemporada/".concat(t),{state:B}),ce(t),void console.log(t);var t},children:ee.temporada})})]})]})})})})]})]}),(0,D.jsxs)("div",{children:[(0,D.jsx)("h5",{children:"Descripci\xf3n"}),(0,D.jsx)("p",{className:"mt-3",children:O.description_esp})]}),(0,D.jsx)("br",{}),(0,D.jsx)("div",{className:"table-responsive ",children:(0,D.jsxs)("table",{className:"table  text-light ",children:[(0,D.jsx)("thead",{children:(0,D.jsxs)("tr",{children:[(0,D.jsx)("th",{scope:"col",children:"Categorias"}),(0,D.jsx)("th",{scope:"col",children:"Especialidades"}),(0,D.jsx)("th",{scope:"col",children:"Subespecialidades"}),(0,D.jsx)("th",{scope:"col",children:"Palabras claves"})]})}),(0,D.jsx)("tbody",{children:(0,D.jsxs)("tr",{children:[(0,D.jsx)("td",{children:O.categorias&&O.categorias.map((function(e){return(0,D.jsx)("li",{children:(0,D.jsx)("small",{className:"",children:e.categoria})},e.id)}))}),(0,D.jsx)("td",{children:O.especialidad&&O.especialidad.map((function(e){return(0,D.jsx)("li",{children:(0,D.jsx)("small",{className:"",children:e.especialidad})},e.id)}))}),(0,D.jsx)("td",{children:O.subEspecialidad&&O.subEspecialidad.map((function(e){return(0,D.jsx)("li",{children:(0,D.jsx)("small",{className:"",children:e.subEspecialidad})},e.id)}))}),(0,D.jsx)("td",{children:O.palabraClave&&O.palabraClave.map((function(e){return(0,D.jsx)("li",{children:(0,D.jsx)("small",{className:"",children:e.palabraClave})},e.id)}))})]})})]})})]}),(0,D.jsx)(E,{handleClose:C,show:w,histUser:be,videoID:z}),(0,D.jsx)(M,{handleClose:V,show:I,histUser:be,commentaries:we,videoID:z})]})}):(0,D.jsx)("p",{style:{fontSize:"25px"},children:"Inicia sesi\xf3n para ver todos los videos!"})}},2516:function(e,t,n){var r=n(1413),a=n(5987),s=(n(2791),n(184)),i=["isLoading"];t.Z=function(e){return function(t){var n=t.isLoading,c=(0,a.Z)(t,i);return n?(0,s.jsxs)("div",{style:{fontSize:"25px",display:"flex",justifyContent:"center",textAlign:"center",flexDirection:"column",alignItems:"center"},children:[(0,s.jsx)("div",{className:"spinner-grow text-light",role:"status",children:(0,s.jsx)("span",{className:"sr-only"})}),"Espera por favor"]}):(0,s.jsx)(e,(0,r.Z)({},c))}}},9629:function(){}}]);
//# sourceMappingURL=403.4e7bf1fd.chunk.js.map