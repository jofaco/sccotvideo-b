"use strict";(self.webpackChunkvideoteca_frontend=self.webpackChunkvideoteca_frontend||[]).push([[859],{7981:function(e,t,n){n.r(t);n(1413);var a=n(4165),r=n(5861),s=n(9439),i=n(2791),c=n(7689),o=n(9705),d=n(1652),u=(n(6542),n(6639)),l=n(9929),p=(n(733),n(2918)),f=n(3712),x=n(8596),m=n(7087),h=(n(9713),n(5258),n(184));(0,x.Z)((function(e){return{paper:{marginTop:e.spacing(0),display:"flex",flexDirection:"column",alignItems:"center"}}}));t.default=function(){var e=(0,c.s0)(),t=(0,p.d)(!1),n=(0,s.Z)(t,3),x=(n[0],n[1],n[2],(0,p.d)(!1)),v=(0,s.Z)(x,3),b=(v[0],v[1],v[2],(0,i.useState)()),g=(0,s.Z)(b,2),Z=g[0],k=g[1],j=(0,c.TH)(),w=(0,c.UO)().id,y=(0,i.useState)([]),N=(0,s.Z)(y,2),S=N[0],W=N[1],L=(0,i.useState)([]),C=(0,s.Z)(L,2),E=(C[0],C[1],(0,i.useState)([])),R=(0,s.Z)(E,2),_=R[0],G=R[1],V=(0,i.useState)([]),z=(0,s.Z)(V,2),I=(z[0],z[1],(0,i.useState)(null)),M=(0,s.Z)(I,2),O=(M[0],M[1],(0,i.useState)(j.state)),P=(0,s.Z)(O,2),T=P[0],X=(P[1],(0,i.useState)([])),D=(0,s.Z)(X,2),F=(D[0],D[1],(0,i.useState)(-1)),H=(0,s.Z)(F,2),K=(H[0],H[1]),U=(0,i.useState)(1),q=(0,s.Z)(U,2);q[0],q[1];(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(){var t,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.op(w);case 2:t=e.sent,n=t,console.log(n),G(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(w)}),[]),(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.Zs();case 2:t=e.sent,W(t.videos);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var A=function(e){var t=e.split(":"),n="";return t&&("00"!==t[0]&&(n=t[0]+"h"),"00"!==t[1]&&(n=" "+n+" "+t[1]+"min")),n.trim()},B=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.K7();case 3:t=e.sent,console.log(t),k(t[0]),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();(0,i.useEffect)((function(){B()}),[]);(0,i.useEffect)((function(){T?K(T.user_score-1):e("/loginuser")}),[]);return T?(0,h.jsxs)(f.Z,{children:[(0,h.jsx)("div",{className:"d-flex justify-content-end",children:(0,h.jsx)("button",{onClick:function(){return window.history.back()},className:"btn btn-light",value:"Volver",children:"Volver"})}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{className:"pb-5",children:[(0,h.jsxs)("h2",{children:[" ",_.temporada]}),(0,h.jsx)("p",{className:"",children:_.description}),(0,h.jsx)("div",{children:(0,h.jsxs)("p",{className:"border border-warning d-inline p-2 rounded text-warning",children:[S.filter((function(e){return e.temporada===_.id})).length," Videos"]})})]}),(0,h.jsx)("div",{className:"d-flex flex-wrap ",children:S.filter((function(e){return e.temporada===_.id})).map((function(t){return(0,h.jsxs)("div",{className:"card bg-dark  m-2 cursorPointer card-video ",onClick:function(){return n=t.id,void e("/seeVideo/".concat(n),{state:Z});var n},children:[(0,h.jsx)(m.LazyLoadImage,{effect:"blur",src:"http://localhost:8000".concat(t.featured_image),className:"card-img-top cursorPointer  ",alt:"..."}),(0,h.jsxs)("div",{className:"card-body pb-0 d-flex  flex-column justify-content-between ",children:[(0,h.jsx)("h6",{className:"truncate-text",children:t.title_espanol}),(0,h.jsxs)("div",{className:"d-flex justify-content-between ",children:[(0,h.jsx)("p",{children:A(t.duration)}),(0,h.jsx)("div",{children:(0,h.jsx)(o.Z,{name:"read-only",value:parseFloat(t.score),precision:.5,readOnly:!0})})]})]},t.id)]},t.id)}))})]})]}):(0,h.jsx)("p",{style:{fontSize:"25px"},children:"Inicia sesi\xf3n para ver todos los videos!"})}},3712:function(e,t,n){var a=n(7462),r=n(5987),s=n(4942),i=n(2791),c=n(8182),o=n(8317),d=n(1122),u=i.forwardRef((function(e,t){var n=e.classes,s=e.className,o=e.component,u=void 0===o?"div":o,l=e.disableGutters,p=void 0!==l&&l,f=e.fixed,x=void 0!==f&&f,m=e.maxWidth,h=void 0===m?"lg":m,v=(0,r.Z)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return i.createElement(u,(0,a.Z)({className:(0,c.Z)(n.root,s,x&&n.fixed,p&&n.disableGutters,!1!==h&&n["maxWidth".concat((0,d.Z)(String(h)))]),ref:t},v))}));t.Z=(0,o.Z)((function(e){return{root:(0,s.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,n){var a=e.breakpoints.values[n];return 0!==a&&(t[e.breakpoints.up(n)]={maxWidth:a}),t}),{}),maxWidthXs:(0,s.Z)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:(0,s.Z)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:(0,s.Z)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:(0,s.Z)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:(0,s.Z)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(u)}}]);
//# sourceMappingURL=859.2c8dc20b.chunk.js.map