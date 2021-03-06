import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAnalytics from "vue-analytics";

import axios from "axios";
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
  id: "UA-35511262-4",
  router
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
