"use strict";(self.webpackChunkvideoteca_frontend=self.webpackChunkvideoteca_frontend||[]).push([[846],{7411:function(e,t,r){var o=r(4165),n=r(5861),a=r(3263),s=r(9778),c="http://sccotview.com/api/",i=a.Z.create({baseURL:c,timeout:5e3,headers:{Authorization:localStorage.getItem("access_token")?"JWT "+localStorage.getItem("access_token"):null,"Content-Type":"multipart/form-data",accept:"application/json"}});i.interceptors.response.use((function(e){return e}),function(){var e=(0,n.Z)((0,o.Z)().mark((function e(t){var r,n,a,u;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.config,"undefined"!==typeof t.response){e.next=4;break}return console.warn("A server/network error occurred. Looks like CORS might be the problem. Sorry about this - we will get it fixed shortly."),e.abrupt("return",Promise.reject(t));case 4:if(401!==t.response.status||r.url!==c+"api/token/refresh/"){e.next=7;break}return window.location.href="/loginuser/",e.abrupt("return",Promise.reject(t));case 7:if("token_not_valid"!==t.response.data.code||401!==t.response.status||"Unauthorized"!==t.response.statusText){e.next=26;break}if(!(n=localStorage.getItem("refresh_token"))){e.next=24;break}if(a=JSON.parse(s.lW.from(n.split(".")[1],"base64").toString()),u=Math.ceil(Date.now()/1e3),console.log(a.exp),!(a.exp>u)){e.next=17;break}return e.abrupt("return",i.post("api/token/refresh/",{refresh:n}).then((function(e){return localStorage.setItem("access_token",e.data.access_token),localStorage.setItem("refresh_token",e.data.refresh_token),i.defaults.headers.Authorization="JWT "+e.data.access_token,r.headers.Authorization="JWT "+e.data.access_token,i(r)})).catch((function(e){console.log(e)})));case 17:console.log("Refresh token is expired",a.exp,u),window.localStorage.removeItem("access_token"),window.localStorage.removeItem("refresh_token"),window.localStorage.removeItem("user"),window.location.href="/loginuser/";case 22:e.next=26;break;case 24:console.log("Refresh token not available."),window.location.href="/loginuser/";case 26:return 401===t.response.status&&(window.location.href="/loginuser/"),e.abrupt("return",Promise.reject(t));case 28:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.Z=i},1846:function(e,t,r){r.r(t),r.d(t,{default:function(){return u}});var o=r(4165),n=r(5861),a=r(2791),s=r(7411),c=r(7689),i=r(184);function u(){var e=(0,c.s0)();return(0,a.useEffect)((function(){var t=function(){var t=(0,n.Z)((0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.post("logout/",{refresh_token:localStorage.getItem("refresh_token")});case 3:localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),localStorage.removeItem("user"),delete s.Z.defaults.headers.Authorization,e("/loginuser"),window.location.reload(),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.error("Error during logout",t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,i.jsx)("div",{children:"Logout"})}}}]);
//# sourceMappingURL=846.75d25c91.chunk.js.map