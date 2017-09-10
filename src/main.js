// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from './components/goods/goods.vue';
import ratings from './components/ratings/ratings.vue';
import seller from './components/seller/seller.vue';

/* 引用样式 */
import './common/stylus/index.styl';

/* 注册 */
Vue.use(VueRouter);
Vue.use(VueResource);

let router = new VueRouter({
  routes: [
    { path: '/goods', component: goods },
    { path: '/ratings', component: ratings },
    { path: '/seller', component: seller }
  ],
  linkActiveClass: 'active'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app');
