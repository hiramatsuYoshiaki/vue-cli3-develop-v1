(function(t){function e(e){for(var r,s,i=e[0],c=e[1],l=e[2],u=0,d=[];u<i.length;u++)s=i[u],a[s]&&d.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"77c93d06"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,r){n=a[t]=[e,r]});e.push(n[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(t),o=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+r+": "+o+")");s.type=r,s.request=o,n[1](s)}a[t]=void 0}};var l=setTimeout(function(){o({type:"timeout",target:c})},12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"046f":function(t,e,n){"use strict";var r=n("5c6d"),a=n.n(r);a.a},"04a9":function(t,e,n){},"125a":function(t,e,n){t.exports=n.p+"img/h-works1200x600white.a5e93905.svg"},"32bb":function(t,e,n){"use strict";var r=n("3e91"),a=n.n(r);a.a},"37c8":function(t,e,n){t.exports=n.p+"img/h-works1200x600black.7ab65215.svg"},"3e91":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],s=(n("5c0b"),n("2877")),i={},c=Object(s["a"])(i,a,o,!1,null,null,null),l=c.exports,u=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home container-fluid"},[n("div",{staticClass:"homeWrap row"},[n("HeaderBar",{attrs:{msg:"HeaderBar"}}),n("HomeContent",{attrs:{msg:"HomeContent"}}),n("FooterBar",{attrs:{msg:"FooterBar"}})],1)])},d=[],v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"homeContent"},[n("main",[n("div",{staticClass:"main-header"},[t._v("main header")]),n("section",{staticClass:"main-section"},[t._v("main section")]),n("div",{staticClass:"main-footer"},[t._v("main footer")])])])}],m={name:"HomeContent",props:{msg:String}},h=m,g=(n("8eee"),Object(s["a"])(h,v,p,!1,null,"41b97e12",null)),b=g.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"headerBar"},[n("nav",[n("dvi",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-4 "},[n("div",{staticClass:"nav-item d-flex-start-center"},[n("a",{staticClass:"header-logo",attrs:{href:"index.html"}},[n("img",{attrs:{src:t.logoSvg,alt:"logo"}})])])]),n("div",{staticClass:"col-4 "},[n("div",{staticClass:"nav-item d-flex-center-center"},[n("a",{staticClass:"header-logo",attrs:{href:"index.html"}},[n("img",{attrs:{src:t.logoSvgHWorksWhite,alt:"logo"}})])])]),n("div",{staticClass:"col-4 "},[n("div",{staticClass:"nav-item d-flex-end-center"},[n("a",{staticClass:"header-logo",attrs:{href:"index.html"}},[n("img",{attrs:{src:t.logoSvgHWorksBlack,alt:"logo"}})])])])])]),n("MobileMenu")],1)])},_=[],w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MobileMenu"},[n("div",{staticClass:"m-bar "},[n("div",{staticClass:"m-bar-wrap",on:{click:function(e){t.active=!t.active}}},[n("div",{staticClass:"upper-bar",class:{close_upper:t.active,open_upper:!t.active}}),n("div",{staticClass:"under-bar",class:{close_under:t.active,open_under:!t.active}})])])])},x=[],S={name:"MobileMenu",props:{msg:String},data:function(){return{active:!0,scrollY:0,isScroll:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){this.scrollY=window.scrollY,this.scrollY>250?this.isScroll=!0:this.isScroll=!1}}},y=S,j=(n("046f"),Object(s["a"])(y,w,x,!1,null,"22e8d3b4",null)),O=j.exports,k={name:"HeaderBar",components:{MobileMenu:O},props:{msg:String},data:function(){return{logoSvgHWorksWhite:n("125a"),logoSvgHWorksBlack:n("37c8"),logoSvg:n("fb34")}}},H=k,B=(n("32bb"),Object(s["a"])(H,C,_,!1,null,"7974eacb",null)),M=B.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footerBar"},[n("footer",[n("dvi",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-4 "},[n("div",{staticClass:"footer-item d-flex-start-center"},[t._v("left")])]),n("div",{staticClass:"col-4 "},[n("div",{staticClass:"footer-item d-flex-center-center"},[t._v("left")])]),n("div",{staticClass:"col-4 "},[n("div",{staticClass:"footer-item d-flex-end-center"},[t._v("right")])])])])],1)])},P=[],$={name:"FooterBar",props:{msg:String}},W=$,T=(n("acc7"),Object(s["a"])(W,E,P,!1,null,"118e00f0",null)),F=T.exports,Y={name:"Home",components:{HomeContent:b,HeaderBar:M,FooterBar:F}},L=Y,J=(n("7937"),Object(s["a"])(L,f,d,!1,null,"3aa20b48",null)),q=J.exports;r["a"].use(u["a"]);var A=new u["a"]({base:"",routes:[{path:"/",name:"home",component:q},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),z=n("2f62");r["a"].use(z["a"]);var D=new z["a"].Store({state:{},mutations:{},actions:{}});r["a"].config.productionTip=!1,new r["a"]({router:A,store:D,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("5e27"),a=n.n(r);a.a},"5c6d":function(t,e,n){},"5e27":function(t,e,n){},7937:function(t,e,n){"use strict";var r=n("cf03"),a=n.n(r);a.a},"8eee":function(t,e,n){"use strict";var r=n("da55"),a=n.n(r);a.a},acc7:function(t,e,n){"use strict";var r=n("04a9"),a=n.n(r);a.a},cf03:function(t,e,n){},da55:function(t,e,n){},fb34:function(t,e,n){t.exports=n.p+"img/h-logo.f74219d6.svg"}});
//# sourceMappingURL=app.41967033.js.map