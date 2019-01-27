import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue';
import VueAnime from 'vue-animejs';
import VueScrollReveal from 'vue-scroll-reveal';
import App from './App.vue';
import router from './router';

Vue.use(VueAnime);
Vue.use(VueScrollReveal, {
  delay: 120,
  duration: 1000,
});
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
