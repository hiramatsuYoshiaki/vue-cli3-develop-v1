(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ae47ad5"],{1763:function(t,i,a){"use strict";var e=a("e213"),s=a.n(e);s.a},"18e7":function(t,i,a){},3338:function(t,i,a){},"50d0":function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"bgImageFull"},[a("transition",{attrs:{name:"bgTran",appear:""}},[a("div",{staticClass:"bgImage",style:{"background-image":"url("+t.img+") "}},[a("div",{staticClass:"bg_filter"})])])],1)},s=[],o={name:"BgImageFull",props:{msg:String,img:String}},n=o,r=(a("879e"),a("2877")),l=Object(r["a"])(n,e,s,!1,null,"3b92c4f2",null);i["a"]=l.exports},"879e":function(t,i,a){"use strict";var e=a("18e7"),s=a.n(e);s.a},ab3c:function(t,i,a){"use strict";var e=a("3338"),s=a.n(e);s.a},b514:function(t,i,a){"use strict";var e=a("d878"),s=a.n(e);s.a},d878:function(t,i,a){},df2e:function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"footerBar "},[a("div",{staticClass:"footerBar-Wrap"},[t.footerTop?a("div",{staticClass:"footer-top"},[a("a",{staticClass:"menu_link",on:{click:function(i){return t.link_commit("home","/")}}},[a("img",{attrs:{src:t.logoSvgHWorksWhite,alt:"h-works logo"}})])]):t._e(),t.footerSepalater?a("div",{staticClass:"footer-sepalater"},[a("div",{staticClass:"line"})]):t._e(),t.footerMenu?a("nav",{staticClass:"footer-menu"},[a("div",{staticClass:"m-menu-wrap  "},[a("div",{staticClass:"menu_items "},[a("div",{staticClass:"menu-item-box"},[a("a",{staticClass:"menu_link",class:{menu_item_visible:"works"===t.page},on:{click:function(i){return t.link_commit("works","/works")}}},[t._v("\n                Works\n              ")]),a("div",{staticClass:"menu_underline"})]),a("div",{staticClass:"menu-item-box"},[a("a",{staticClass:"menu_link",class:{menu_item_visible:"projects"===t.page},on:{click:function(i){return t.link_commit("projects","/projects")}}},[t._v("\n                Projects\n              ")]),a("div",{staticClass:"menu_underline"})]),a("div",{staticClass:"menu-item-box"},[a("a",{staticClass:"menu_link",class:{menu_item_visible:"about"===t.page},on:{click:function(i){return t.link_commit("about","/about")}}},[t._v("\n                ABOUT\n              ")]),a("div",{staticClass:"menu_underline"})]),a("div",{staticClass:"menu-item-box"},[a("a",{staticClass:"menu_link",class:{menu_item_visible:"contact"===t.page},on:{click:function(i){return t.link_commit("contact","/contact")}}},[t._v("\n                CONTACT\n              ")]),a("div",{staticClass:"menu_underline"})]),a("div",{staticClass:"menu-item-box"},[a("a",{staticClass:"menu_link",class:{menu_item_visible:"service"===t.page},on:{click:function(i){return t.link_commit("service","/service")}}},[t._v("\n                SERVICE\n              ")]),a("div",{staticClass:"menu_underline"})])])])]):t._e(),t.footerBottom?a("div",{staticClass:"footer-bottom"},[t._m(0)]):t._e()])])},s=[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"footer-bottom-wrap"},[a("div",{staticClass:"copy-light"},[t._v("© 2019 h-works.")]),a("a",{attrs:{href:"#top"}},[a("div",[t._v("TOP")])])])}],o={name:"FooterBar",props:{msg:String,navMenu:String,footerTop:Boolean,footerBottom:Boolean,footerMenu:Boolean,footerSepalater:Boolean,logo:String},data:function(){return{logoSvgHWorksWhite:a("125a"),logoSvgHWorksBlack:a("37c8"),logoSvg:a("fb34")}},computed:{page:function(){return this.$store.state.page}},methods:{link_commit:function(t,i){var a=this;this.$store.commit(t),setTimeout(function(){a.$router.push({path:i})},500)}}},n=o,r=(a("b514"),a("2877")),l=Object(r["a"])(n,e,s,!1,null,"8f74e732",null);i["a"]=l.exports},e213:function(t,i,a){},f820:function(t,i,a){"use strict";a.r(i);var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"about"},[a("div",{staticClass:"aboutWrap"},[a("BgImageFull",{attrs:{msg:"bgImage",img:t.bgImage}}),a("HeaderBar",{attrs:{msg:"HeaderBar",navMenu:"about",headerScrollType:!0,headerFixedType:!1,headerStikyType:!1}}),a("AboutContent",{attrs:{msg:"AboutContent"}}),a("transition",{attrs:{appear:"",name:"tScreen"}},["about"===t.page?a("TransitionScreen",{attrs:{msg:"bgImage",img:t.bgImage,pageView:"about"}}):t._e()],1)],1)])},s=[],o=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"aboutContent"},[a("main",[a("div",{staticClass:"main-header"},[a("section",{staticClass:"main-header-wrape"},[a("div",{staticClass:"transition-box"},[a("transition",{attrs:{name:"carousel-pop-up",appear:""}},[a("h1",[t._v("ABOUT COMPONENT ")])])],1),a("div",{staticClass:"transition-box"},[a("transition",{attrs:{name:"carousel-pop-up",appear:""}},[a("p",[t._v("Seamless Page Transition Demo")])])],1),a("div",{staticClass:"transition-box"},[a("transition",{attrs:{name:"carousel-pop-up",appear:""}},[a("p",[t._v("GitHubを使う ")])])],1)])]),a("transition",{attrs:{name:"mainCon",appear:""}},[a("div",{staticClass:"main-content"},[a("div",{staticClass:"col2-content"},[a("div",{staticClass:"col-block left-block"},[a("div",{staticClass:"section-block caption-section"},[a("div",{staticClass:"transition-box"},[a("transition",{attrs:{name:"carousel-pop-up1",appear:""}},[a("div",[a("p",[t._v("Seamless Page Transitionは、シームレスなページ遷移を実装する、スターターテンプレートとして開発することを目的としました。再利用できるようにGitHubで共有しました。")])])])],1),a("div",{staticClass:"transition-box"},[a("transition",{attrs:{name:"carousel-pop-up2",appear:""}},[a("div",[a("p",[t._v("このサイトは、GitHub Pagesに公開されています。詳細については、README.mdを見てください。")])])])],1),a("div",{staticClass:"link-text"},[a("div",{staticClass:"transition-box"},[a("transition",{attrs:{name:"carousel-pop-up1",appear:""}},[a("div",[a("p",[a("i",{staticClass:"fab fa-github"}),a("span",[t._v("GitHub Repository")])])])])],1),a("div",{staticClass:"transition-box"},[a("transition",{attrs:{name:"carousel-pop-up2",appear:""}},[a("div",[a("p",[t._v("hiramatsuYoshiaki/vue-cli3-page-transition")])])])],1),a("div",{staticClass:"transition-box"},[a("transition",{attrs:{name:"carousel-pop-up3",appear:""}},[a("div",[a("a",{staticClass:"link-url",attrs:{href:"https://github.com/hiramatsuYoshiaki/vue-cli3-page-transition"}},[a("p",[t._v("URL:https://github.com/hiramatsuYoshiaki/vue-cli3-page-transition")])])])])],1)]),a("div",{staticClass:"link-text"},[a("div",{staticClass:"transition-box"},[a("transition",{attrs:{name:"carousel-pop-up1",appear:""}},[a("div",[a("p",[a("i",{staticClass:"fab fa-github"}),a("span",[t._v("GitHub Page")])])])])],1),a("div",{staticClass:"transition-box"},[a("transition",{attrs:{name:"carousel-pop-up2",appear:""}},[a("div",[a("a",{staticClass:"link-url",attrs:{href:"https://hiramatsuyoshiaki.github.io/vue-cli3-page-transition/"}},[a("p",[t._v("URL:https://github.com/hiramatsuYoshiaki/vue-cli3-page-transition")])])])])],1)]),a("div",{staticClass:"transition-box"},[a("transition",{attrs:{name:"carousel-pop-up3",appear:""}},[a("div",{staticClass:"text-color-gray"},[a("p",[t._v("このサイトをGitHubで共有することで、Git,GitHubスキル習得を目的としています。")])])])],1)])]),a("div",{staticClass:"col-block right-block"},[a("div",{staticClass:"section-block image-section"},t._l(t.h1RightArreys,function(i,e){return a("div",{key:e},[a("div",{staticClass:"transition-box"},[a("transition",{attrs:{name:i.tName,appear:""}},[a("div",[a("h1",{style:{color:i.tColor}},[t._v(t._s(i.tText))])])])],1)])}),0)])])])])],1),a("FooterBar",{attrs:{msg:"footerBar",navMenu:"about",footerTop:!0,footerBottom:!0,footerMenu:!0,footerSepalater:!0}})],1)},n=[],r=a("df2e"),l={name:"AboutContent",props:{msg:String},components:{FooterBar:r["a"]},data:function(){return{imgURL1:a("e7ee"),imgURL2:a("4f50"),imgURL3:a("7746"),imgURL4:a("7686"),logoSvgHWorksWhite:a("125a"),logoSvgHWorksBlack:a("37c8"),scrollY:0,MaxScrollY:0,innerHeight:0,menuVisible:String,mobileBarType:String,mobileBarAction:String,cardDatas:[{id:"card0",img:a("e7ee"),title:"title1",subscription:"subscription1"},{id:"card1",img:a("4f50"),title:"title2",subscription:"subscription2"},{id:"card2",img:a("7746"),title:"title3",subscription:"subscription3"},{id:"card3",img:a("7686"),title:"title4",subscription:"subscription4"}],cardSectionPosition:[],h1LeftArreys:[{tName:"carousel-pop-up1",tText:"Seamless Page Transitionは、シームレスなページ遷移を実装する、スターターテンプレートとして開発することを目的としました。再利用できるようにGitHubで共有しました。",tColor:"rgba(0,0,0,.8)"},{tName:"carousel-pop-up2",tText:"このサイトは、GitHub Pagesに公開されています。詳細については、README.mdを見てください。",tColor:"rgba(0,0,0,.8)"},{tName:"carousel-pop-up3",tText:"このサイトをGitHubで共有することで、Git,GitHubスキル習得を目的としています。",tColor:"rgba(0,0,0,.6)"},{tName:"carousel-pop-up4",tText:"4このサイトをGitHubで共有することで、Git,GitHubスキル習得を目的としています。",tColor:"rgba(0,0,0,.6)"},{tName:"carousel-pop-up5",tText:"5このサイトをGitHubで共有することで、Git,GitHubスキル習得を目的としています。",tColor:"rgba(0,0,0,.6)"},{tName:"carousel-pop-up6",tText:"6このサイトをGitHubで共有することで、Git,GitHubスキル習得を目的としています。",tColor:"rgba(0,0,0,.6)"},{tName:"carousel-pop-up7",tText:"7このサイトをGitHubで共有することで、Git,GitHubスキル習得を目的としています。",tColor:"rgba(0,0,0,.6)"},{tName:"carousel-pop-up8",tText:"8このサイトをGitHubで共有することで、Git,GitHubスキル習得を目的としています。",tColor:"rgba(0,0,0,.6)"},{tName:"carousel-pop-up9",tText:"このサイトをGitHubで共有することで、Git,GitHubスキル習得を目的としています。",tColor:"rgba(0,0,0,.6)"}],h1RightArreys:[{tName:"carousel-pop-up1",tText:"GitHubで...",tColor:"rgba(0,0,0,.6)"},{tName:"carousel-pop-up2",tText:"再利用が簡単",tColor:"rgba(0,0,40,1)"},{tName:"carousel-pop-up3",tText:"バージョンを管理",tColor:"rgba(0,0,40,1)"},{tName:"carousel-pop-up4",tText:"チームで活用",tColor:"rgba(0,0,0,.6)"}],img1Arreys:[{tName:"text-pop-up1",tText:"Opportunities. Chances.",tColor:"rgba(0,0,0,.6)"},{tName:"text-pop-up2",tText:"Our mission: Prime",tColor:"rgba(0,0,40,1)"},{tName:"text-pop-up3",tText:"products and services.",tColor:"rgba(0,0,40,1)"},{tName:"text-pop-up4",tText:"Focusing on your needs.",tColor:"rgba(0,0,0,.6)"}],img1Captionblock:0,img1Imageblock:0,img2Arreys:[{tName:"text-pop-up1",tText:"Expertise. Spirit.",tColor:"rgba(0,0,0,.6)"},{tName:"text-pop-up2",tText:"Prime experience and",tColor:"rgba(0,0,40,1)"},{tName:"text-pop-up3",tText:"dedication. Focusing on",tColor:"rgba(0,0,40,1)"},{tName:"text-pop-up4",tText:"risk and performance.",tColor:"rgba(0,0,0,.6)"}],img2Captionblock:0,img2Imageblock:0}},computed:{page:function(){return this.$store.state.page}},mounted:function(){window.addEventListener("scroll",this.handleScroll),this.init()},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){this.innerHeight=window.innerHeight,this.scrollY=window.scrollY,this.scrollY>this.MaxScrollY&&(this.MaxScrollY=this.scrollY)},init:function(){this.$store.commit("about"),this.innerHeight=window.innerHeight,this.scrollY=window.scrollY},link_commit:function(t,i){var a=this;this.$store.commit(t),setTimeout(function(){a.$router.push({path:i})},500)}}},c=l,u=(a("1763"),a("2877")),p=Object(u["a"])(c,o,n,!1,null,"c8beaef4",null),m=p.exports,g=a("c779"),b=a("50d0"),d=a("d4ad"),v={name:"About",components:{AboutContent:m,HeaderBar:g["a"],BgImageFull:b["a"],TransitionScreen:d["a"]},computed:{page:function(){return this.$store.state.page}},data:function(){return{bgImage:a("7746")}}},C=v,f=(a("ab3c"),Object(u["a"])(C,e,s,!1,null,"09df4ee1",null));i["default"]=f.exports}}]);
//# sourceMappingURL=chunk-3ae47ad5.1f474bc2.js.map