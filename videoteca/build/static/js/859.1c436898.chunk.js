"use strict";(self.webpackChunkvideoteca_frontend=self.webpackChunkvideoteca_frontend||[]).push([[859],{7981:function(e,t,n){n.r(t);n(1413);var r=n(4165),a=n(5861),s=n(9439),i=n(2791),c=n(7689),u=n(9705),o=n(1652),d=(n(6542),n(6639)),p=n(9929),l=(n(733),n(2918)),f=n(3712),x=n(8596),v=n(7087),m=(n(9713),n(5258),n(184));(0,x.Z)((function(e){return{paper:{marginTop:e.spacing(0),display:"flex",flexDirection:"column",alignItems:"center"}}}));t.default=function(){var e=(0,c.s0)(),t=(0,l.d)(!1),n=(0,s.Z)(t,3),x=(n[0],n[1],n[2],(0,l.d)(!1)),h=(0,s.Z)(x,3),Z=(h[0],h[1],h[2],(0,i.useState)()),b=(0,s.Z)(Z,2),g=b[0],k=b[1],w=(0,c.TH)(),j=(0,c.UO)().id,y=(0,i.useState)([]),N=(0,s.Z)(y,2),S=N[0],W=N[1],L=(0,i.useState)([]),C=(0,s.Z)(L,2),E=(C[0],C[1],(0,i.useState)([])),R=(0,s.Z)(E,2),_=R[0],G=R[1],I=(0,i.useState)([]),V=(0,s.Z)(I,2),z=(V[0],V[1],(0,i.useState)(null)),M=(0,s.Z)(z,2),O=(M[0],M[1],(0,i.useState)(w.state)),D=(0,s.Z)(O,2),P=D[0],T=(D[1],(0,i.useState)([])),X=(0,s.Z)(T,2),F=(X[0],X[1],(0,i.useState)(-1)),H=(0,s.Z)(F,2),K=(H[0],H[1]),U=(0,i.useState)(1),q=(0,s.Z)(U,2);q[0],q[1];(0,i.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.op(j);case 2:t=e.sent,n=t,console.log(n),G(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(j)}),[]),(0,i.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Zs();case 2:t=e.sent,W(t.videos);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var A=function(e){var t=e.split(":"),n="";return t&&("00"!==t[0]&&(n=t[0]+"h"),"00"!==t[1]&&(n=" "+n+" "+t[1]+"min")),n.trim()},B=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.K7();case 3:t=e.sent,console.log(t),k(t[0]),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();(0,i.useEffect)((function(){B()}),[]);(0,i.useEffect)((function(){P?K(P.user_score-1):e("/loginuser")}),[]);return P?(0,m.jsxs)(f.Z,{children:[(0,m.jsx)("div",{className:"d-flex justify-content-end",children:(0,m.jsx)("button",{onClick:function(){return window.history.back()},className:"btn btn-light",value:"Volver",children:"Volver"})}),(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{className:"pb-5",children:[(0,m.jsxs)("h2",{children:[" ",_.temporada]}),(0,m.jsx)("p",{className:"",children:_.description}),(0,m.jsx)("div",{children:(0,m.jsxs)("p",{className:"border border-warning d-inline p-2 rounded text-warning",children:[S.filter((function(e){return e.temporada===_.id})).length," Videos"]})})]}),(0,m.jsx)("div",{className:"d-flex flex-wrap ",children:S.filter((function(e){return e.temporada===_.id})).map((function(t){return(0,m.jsxs)("div",{className:"card bg-dark  m-2 cursorPointer card-video ",onClick:function(){return n=t.id,void e("/seeVideo/".concat(n),{state:g});var n},children:[(0,m.jsx)(v.LazyLoadImage,{effect:"blur",src:"https://sccotview.com".concat(t.featured_image),className:"card-img-top cursorPointer  ",alt:"..."}),(0,m.jsxs)("div",{className:"card-body pb-0 d-flex  flex-column justify-content-between ",children:[(0,m.jsx)("h6",{className:"truncate-text",children:t.title_espanol}),(0,m.jsxs)("div",{className:"d-flex justify-content-between ",children:[(0,m.jsx)("p",{children:A(t.duration)}),(0,m.jsx)("div",{children:(0,m.jsx)(u.Z,{name:"read-only",value:parseFloat(t.score),precision:.5,readOnly:!0})})]})]},t.id)]},t.id)}))})]})]}):(0,m.jsx)("p",{style:{fontSize:"25px"},children:"Inicia sesi\xf3n para ver todos los videos!"})}},6639:function(e,t,n){n.d(t,{C1:function(){return d},DN:function(){return u},op:function(){return o},xI:function(){return c}});var r=n(4165),a=n(5861),s=n(7411),i="https://sccotview.com/api/temporadas/",c=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get(i);case 2:if(200!==(t=e.sent).status){e.next=7;break}return e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.post(i,t);case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.next=6,n.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i).concat(t));case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.next=6,n.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.patch(i+t+"/",n);case 2:if(200!==(a=e.sent).status){e.next=5;break}return e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},3712:function(e,t,n){var r=n(7462),a=n(5987),s=n(4942),i=n(2791),c=n(8182),u=n(8317),o=n(1122),d=i.forwardRef((function(e,t){var n=e.classes,s=e.className,u=e.component,d=void 0===u?"div":u,p=e.disableGutters,l=void 0!==p&&p,f=e.fixed,x=void 0!==f&&f,v=e.maxWidth,m=void 0===v?"lg":v,h=(0,a.Z)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return i.createElement(d,(0,r.Z)({className:(0,c.Z)(n.root,s,x&&n.fixed,l&&n.disableGutters,!1!==m&&n["maxWidth".concat((0,o.Z)(String(m)))]),ref:t},h))}));t.Z=(0,u.Z)((function(e){return{root:(0,s.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,n){var r=e.breakpoints.values[n];return 0!==r&&(t[e.breakpoints.up(n)]={maxWidth:r}),t}),{}),maxWidthXs:(0,s.Z)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:(0,s.Z)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:(0,s.Z)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:(0,s.Z)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:(0,s.Z)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(d)}}]);
//# sourceMappingURL=859.1c436898.chunk.js.map