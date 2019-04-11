
<img width=150 height=100  src='https://github.com/hiramatsuYoshiaki/vue-cli3-page-transition/blob/master/docs/img/h-works1200x600black.7ab65215.svg'> 

# SeamlessPageTransition
![GitHub package.json version](https://img.shields.io/github/package-json/v/hiramatsuYoshiaki/vue-cli3-page-transition.svg) 
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/hiramatsuYoshiaki/vue-cli3-page-transition.svg) 
![GitHub issues](https://img.shields.io/github/issues/hiramatsuYoshiaki/vue-cli3-page-transition.svg) 
![GitHub forks](https://img.shields.io/github/forks/hiramatsuYoshiaki/vue-cli3-page-transition.svg?style=social) 

Seamless Page Transitionは、シームレスなページ遷移を実装するために、テストケースとして作成したデモンストレーションサイトです。ウェブ開発のスタートテンプレートとして試作中です。 

![page-tran-demo1](https://user-images.githubusercontent.com/20366817/55531376-056c6480-56e5-11e9-978a-3f5f013c7448.gif)
 
## 機能
 
- シームレスなページ遷移 
- ヘッダーの配置変更 
- ローディング画面 
- カルーセル 
- トランジション 
 
## 必要要件
 
- node:v8.11.1 
- npm:4.0.5 
- vue:3.0.1 
 
## 使い方
 
 
## インストール
 
$ md new-project 
$ git clone https://github.com/hiramatsuYoshiaki/vue-cli3-page-transition.git 
$ cd vue-cli3-unit-alprime 
$ npm install 
 
## 実行
 
1. npm run serve 
2. ローカルサーバーへアクセス http://localhost:8080/で確認する。 
 
## デプロイ
 
1. npm run build 

## 作者
 
[HIRAMATSU WORKS](http://tourdehdr.sakuraweb.com/h-works-website/)  
mail to: hiramatsu3300@gmail.com
 
## ライセンス
 
[MIT](http://TomoakiTANAKA.mit-license.org)</blockquote>

# 注意事項 
あくまでも確認用デモのレポジトリですので、実際の業務への使用はしないでください。

update
2019.4.5 vue-cli3-start 
branch start1

# axios
## instal 
$ npm install axios 
## main.js
<script> 
import Vue from 'vue' 
import App from './App.vue' 
import router from './router' 
import store from './store' 
import axios from 'axios' 

Vue.prototype.$axios = axios; 

Vue.config.productionTip = false 

new Vue({ 
  router, 
  store, 
  // axios 
  render: h => h(App) 
}).$mount('#app') 
</script> 

## home
<template>
  <div class="hello">
    loding....now
    <div v-for="post in posts" :key="post.id">
     <h1>{{post.place}} </h1> 
    </div>
    <!-- <div v-for="post in posts"> -->
      <!-- <h1>{{post.place}} </h1>
      <h3>{{post.pref}} </h3> -->
    <!-- </div> -->
  </div>  
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

data() {
    return {
      posts: [],
      jsonUrl: require("../assets/json/posts.json"),
    }
  },
  created () {
    this.fetchData();
  },
  watch: {
    
  },
  mounted: function () {
   
  },
  methods: {
   fetchData() {
     console.log('axios');
    
      // axios.get('./assets/json/posts.json').then(response => {
      //     this.posts = response.data;
      //     });
      // },
      this.$axios.get(this.jsonUrl).then(response => {
          this.posts = response.data;
          console.log('data: ' + response.data)
          
          })
          .catch((res) => {
            this.ip = 'IPの取得に失敗しました';
            console.log(res)
          });
      },
  }
}
</script>


