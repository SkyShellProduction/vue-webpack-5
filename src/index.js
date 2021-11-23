import './assets/scss/main.scss';
import App from './App.vue';
import Vue from 'vue';
import store from './store';
import router from './routes';
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);
// import 'vue';
// import 'bootstrap/dist/css/bootstrap.min.css';//если нужно подключать какой-то отдельный файл
// import Vue from 'vue';
// window.Vue = require('vue');

new Vue({
    router,
    render: h => h(App),
    store
}).$mount('#app')