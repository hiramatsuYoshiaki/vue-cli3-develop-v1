(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24e07360"],{1763:function(t,a,i){"use strict";var e=i("e213"),o=i.n(e);o.a},"1e27":function(t,a,i){},"50d0":function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"bgImageFull"},[i("transition",{attrs:{name:"bgTran",appear:""}},[i("div",{staticClass:"bgImage",style:{"background-image":"url("+t.img+") "}},[i("div",{staticClass:"bg_filter"})])])],1)},o=[],s={name:"BgImageFull",props:{msg:String,img:String}},r=s,n=(i("fc6e"),i("2877")),l=Object(n["a"])(r,e,o,!1,null,"63672c2d",null);a["a"]=l.exports},"9ad2":function(t,a,i){},a0d6:function(t,a,i){},b26d:function(t,a,i){"use strict";var e=i("a0d6"),o=i.n(e);o.a},df2e:function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"footerBar "},[i("div",{staticClass:"footerBar-Wrap"},[t.footerTop?i("div",{staticClass:"footer-top"},[i("a",{staticClass:"menu_link",on:{click:function(a){return t.link_commit("home","/")}}},[i("img",{attrs:{src:t.logoSvgHWorksWhite,alt:"h-works logo"}})])]):t._e(),t.footerSepalater?i("div",{staticClass:"footer-sepalater"},[i("div",{staticClass:"line"})]):t._e(),t.footerMenu?i("nav",{staticClass:"footer-menu"},[i("div",{staticClass:"m-menu-wrap  "},[i("div",{staticClass:"menu_items "},[i("div",{staticClass:"menu-item-box"},[i("a",{staticClass:"menu_link",class:{menu_item_visible:"works"===t.page},on:{click:function(a){return t.link_commit("works","/works")}}},[t._v("\n                Works\n              ")]),i("div",{staticClass:"menu_underline"})]),i("div",{staticClass:"menu-item-box"},[i("a",{staticClass:"menu_link",class:{menu_item_visible:"projects"===t.page},on:{click:function(a){return t.link_commit("projects","/projects")}}},[t._v("\n                Projects\n              ")]),i("div",{staticClass:"menu_underline"})]),i("div",{staticClass:"menu-item-box"},[i("a",{staticClass:"menu_link",class:{menu_item_visible:"about"===t.page},on:{click:function(a){return t.link_commit("about","/about")}}},[t._v("\n                ABOUT\n              ")]),i("div",{staticClass:"menu_underline"})]),i("div",{staticClass:"menu-item-box"},[i("a",{staticClass:"menu_link",class:{menu_item_visible:"contact"===t.page},on:{click:function(a){return t.link_commit("contact","/contact")}}},[t._v("\n                CONTACT\n              ")]),i("div",{staticClass:"menu_underline"})])])])]):t._e(),t.footerBottom?i("div",{staticClass:"footer-bottom"},[t._m(0)]):t._e()])])},o=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"footer-bottom-wrap"},[i("div",{staticClass:"copy-light"},[t._v("© 2019 h-works.")]),i("a",{attrs:{href:"#top"}},[i("div",[t._v("TOP")])])])}],s={name:"FooterBar",props:{msg:String,navMenu:String,footerTop:Boolean,footerBottom:Boolean,footerMenu:Boolean,footerSepalater:Boolean,logo:String},data:function(){return{logoSvgHWorksWhite:i("125a"),logoSvgHWorksBlack:i("37c8"),logoSvg:i("fb34")}},computed:{page:function(){return this.$store.state.page}},methods:{link_commit:function(t,a){var i=this;this.$store.commit(t),setTimeout(function(){i.$router.push({path:a})},500)}}},r=s,n=(i("b26d"),i("2877")),l=Object(n["a"])(r,e,o,!1,null,"09bc396e",null);a["a"]=l.exports},e213:function(t,a,i){},e818:function(t,a,i){"use strict";var e=i("1e27"),o=i.n(e);o.a},f820:function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"about"},[i("div",{staticClass:"aboutWrap"},[i("TransitionScreen",{attrs:{msg:"bgImage",img:t.bgImage,pageView:"about"}}),i("HeaderBar",{attrs:{msg:"HeaderBar",navMenu:"about",headerScrollType:!0,headerFixedType:!1,headerStikyType:!1}}),i("BgImageFull",{attrs:{msg:"bgImage",img:t.bgImage}}),i("AboutContent",{attrs:{msg:"AboutContent"}})],1)])},o=[],s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"aboutContent"},[i("main",[i("div",{staticClass:"main-header"},[i("section",{staticClass:"main-header-wrape"},[i("div",{staticClass:"transition-box"},[i("transition",{attrs:{name:"carousel-pop-up",appear:""}},[i("h1",[t._v("ABOUT COMPONENT ")])])],1),i("div",{staticClass:"transition-box"},[i("transition",{attrs:{name:"carousel-pop-up",appear:""}},[i("p",[t._v("Seamless Page Transition Demo")])])],1),i("div",{staticClass:"transition-box"},[i("transition",{attrs:{name:"carousel-pop-up",appear:""}},[i("p",[t._v("GitHubを使う ")])])],1)])]),i("transition",{attrs:{name:"mainCon",appear:""}},[i("div",{staticClass:"main-content"},[i("div",{staticClass:"col2-content"},[i("div",{staticClass:"col-block left-block"},[i("div",{staticClass:"section-block caption-section"},[i("div",{staticClass:"transition-box"},[i("transition",{attrs:{name:"carousel-pop-up1",appear:""}},[i("div",[i("p",[t._v("Seamless Page Transitionは、シームレスなページ遷移を実装する、スターターテンプレートとして開発することを目的としました。再利用できるようにGitHubで共有しました。")])])])],1),i("div",{staticClass:"transition-box"},[i("transition",{attrs:{name:"carousel-pop-up2",appear:""}},[i("div",[i("p",[t._v("このサイトは、GitHub Pagesに公開されています。詳細については、README.mdを見てください。")])])])],1),i("div",{staticClass:"link-text"},[i("div",{staticClass:"transition-box"},[i("transition",{attrs:{name:"carousel-pop-up1",appear:""}},[i("div",[i("p",[i("i",{staticClass:"fab fa-github"}),i("span",[t._v("GitHub Repository")])])])])],1),i("div",{staticClass:"transition-box"},[i("transition",{attrs:{name:"carousel-pop-up2",appear:""}},[i("div",[i("p",[t._v("hiramatsuYoshiaki/vue-cli3-page-transition")])])])],1),i("div",{staticClass:"transition-box"},[i("transition",{attrs:{name:"carousel-pop-up3",appear:""}},[i("div",[i("a",{staticClass:"link-url",attrs:{href:"https://github.com/hiramatsuYoshiaki/vue-cli3-page-transition"}},[i("p",[t._v("URL:https://github.com/hiramatsuYoshiaki/vue-cli3-page-transition")])])])])],1)]),i("div",{staticClass:"link-text"},[i("div",{staticClass:"transition-box"},[i("transition",{attrs:{name:"carousel-pop-up1",appear:""}},[i("div",[i("p",[i("i",{staticClass:"fab fa-github"}),i("span",[t._v("GitHub Page")])])])])],1),i("div",{staticClass:"transition-box"},[i("transition",{attrs:{name:"carousel-pop-up2",appear:""}},[i("div",[i("a",{staticClass:"link-url",attrs:{href:"https://hiramatsuyoshiaki.github.io/vue-cli3-page-transition/"}},[i("p",[t._v("URL:https://github.com/hiramatsuYoshiaki/vue-cli3-page-transition")])])])])],1)]),i("div",{staticClass:"transition-box"},[i("transition",{attrs:{name:"carousel-pop-up3",appear:""}},[i("div",{staticClass:"text-color-gray"},[i("p",[t._v("このサイトをGitHubで共有することで、Git,GitHubスキル習得を目的としています。")])])])],1)])]),i("div",{staticClass:"col-block right-block"},[i("div",{staticClass:"section-block image-section"},t._l(t.h1RightArreys,function(a,e){return i("div",{key:e},[i("div",{staticClass:"transition-box"},[i("transition",{attrs:{name:a.tName,appear:""}},[i("div",[i("h1",{style:{color:a.tColor}},[t._v(t._s(a.tText))])])])],1)])}),0)])])])])],1),i("FooterBar",{attrs:{msg:"footerBar",navMenu:"about",footerTop:!0,footerBottom:!0,footerMenu:!0,footerSepalater:!0}})],1)},r=[],n=i("df2e"),l={name:"AboutContent",props:{msg:String},components:{FooterBar:n["a"]},data:function(){return{imgURL1:i("e7ee"),imgURL2:i("4f50"),imgURL3:i("7746"),imgURL4:i("7686"),logoSvgHWorksWhite:i("125a"),logoSvgHWorksBlack:i("37c8"),scrollY:0,MaxScrollY:0,innerHeight:0,menuVisible:String,mobileBarType:String,mobileBarAction:String,cardDatas:[{id:"card0",img:i("e7ee"),title:"title1",subscription:"subscription1"},{id:"card1",img:i("4f50"),title:"title2",subscription:"subscription2"},{id:"card2",img:i("7746"),title:"title3",subscription:"subscription3"},{id:"card3",img:i("7686"),title:"title4",subscription:"subscription4"}],cardSectionPosition:[],h1LeftArreys:[{tName:"carousel-pop-up1",tText:"Seamless Page Transitionは、シームレスなページ遷移を実装する、スターターテンプレートとして開発することを目的としました。再利用できるようにGitHubで共有しました。",tColor:"rgba(0,0,0,.8)"},{tName:"carousel-pop-up2",tText:"このサイトは、GitHub Pagesに公開されています。詳細については、README.mdを見てください。",tColor:"rgba(0,0,0,.8)"},{tName:"carousel-pop-up3",tText:"このサイトをGitHubで共有することで、Git,GitHubスキル習得を目的としています。",tColor:"rgba(0,0,0,.6)"},{tName:"carousel-pop-up4",tText:"4このサイトをGitHubで共有することで、Git,GitHubスキル習得を目的としています。",tColor:"rgba(0,0,0,.6)"},{tName:"carousel-pop-up5",tText:"5このサイトをGitHubで共有することで、Git,GitHubスキル習得を目的としています。",tColor:"rgba(0,0,0,.6)"},{tName:"carousel-pop-up6",tText:"6このサイトをGitHubで共有することで、Git,GitHubスキル習得を目的としています。",tColor:"rgba(0,0,0,.6)"},{tName:"carousel-pop-up7",tText:"7このサイトをGitHubで共有することで、Git,GitHubスキル習得を目的としています。",tColor:"rgba(0,0,0,.6)"},{tName:"carousel-pop-up8",tText:"8このサイトをGitHubで共有することで、Git,GitHubスキル習得を目的としています。",tColor:"rgba(0,0,0,.6)"},{tName:"carousel-pop-up9",tText:"このサイトをGitHubで共有することで、Git,GitHubスキル習得を目的としています。",tColor:"rgba(0,0,0,.6)"}],h1RightArreys:[{tName:"carousel-pop-up1",tText:"GitHubで...",tColor:"rgba(0,0,0,.6)"},{tName:"carousel-pop-up2",tText:"再利用が簡単",tColor:"rgba(0,0,40,1)"},{tName:"carousel-pop-up3",tText:"バージョンを管理",tColor:"rgba(0,0,40,1)"},{tName:"carousel-pop-up4",tText:"チームで活用",tColor:"rgba(0,0,0,.6)"}],img1Arreys:[{tName:"text-pop-up1",tText:"Opportunities. Chances.",tColor:"rgba(0,0,0,.6)"},{tName:"text-pop-up2",tText:"Our mission: Prime",tColor:"rgba(0,0,40,1)"},{tName:"text-pop-up3",tText:"products and services.",tColor:"rgba(0,0,40,1)"},{tName:"text-pop-up4",tText:"Focusing on your needs.",tColor:"rgba(0,0,0,.6)"}],img1Captionblock:0,img1Imageblock:0,img2Arreys:[{tName:"text-pop-up1",tText:"Expertise. Spirit.",tColor:"rgba(0,0,0,.6)"},{tName:"text-pop-up2",tText:"Prime experience and",tColor:"rgba(0,0,40,1)"},{tName:"text-pop-up3",tText:"dedication. Focusing on",tColor:"rgba(0,0,40,1)"},{tName:"text-pop-up4",tText:"risk and performance.",tColor:"rgba(0,0,0,.6)"}],img2Captionblock:0,img2Imageblock:0}},computed:{page:function(){return this.$store.state.page}},mounted:function(){window.addEventListener("scroll",this.handleScroll),this.init()},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){this.innerHeight=window.innerHeight,this.scrollY=window.scrollY,this.scrollY>this.MaxScrollY&&(this.MaxScrollY=this.scrollY)},init:function(){this.$store.commit("about"),this.innerHeight=window.innerHeight,this.scrollY=window.scrollY},link_commit:function(t,a){var i=this;this.$store.commit(t),setTimeout(function(){i.$router.push({path:a})},500)}}},c=l,u=(i("1763"),i("2877")),p=Object(u["a"])(c,s,r,!1,null,"c8beaef4",null),m=p.exports,g=i("c779"),b=i("50d0"),d=i("d4ad"),v={name:"About",components:{AboutContent:m,HeaderBar:g["a"],BgImageFull:b["a"],TransitionScreen:d["a"]},data:function(){return{bgImage:i("7746")}}},C=v,h=(i("e818"),Object(u["a"])(C,e,o,!1,null,"00f4145a",null));a["default"]=h.exports},fc6e:function(t,a,i){"use strict";var e=i("9ad2"),o=i.n(e);o.a}}]);
//# sourceMappingURL=chunk-24e07360.c9584b0a.js.map