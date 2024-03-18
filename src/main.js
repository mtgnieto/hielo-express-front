import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import { i18n } from '@/plugins/i18n'
import router from './router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2';
const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674',
};
Vue.config.productionTip = false
Vue.use(VueSweetalert2, options);

new Vue({
  i18n,
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
