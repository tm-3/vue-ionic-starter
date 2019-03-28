import Vue from 'vue';
import App from './App.vue';
import Ionic from '@ionic/vue';
import router from './router';
import './registerServiceWorker';

Vue.use(Ionic);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
