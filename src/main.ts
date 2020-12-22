import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Vue.config.devtools = true;
Vue.config.productionTip = false

import './assets/svg' // icon

// import SideMenuPopup from '@/views/Home/Comps/SideMenuPopup.vue';

// Vue.component('SideMenuPopup', SideMenuPopup);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
