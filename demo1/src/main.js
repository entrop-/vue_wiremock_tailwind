import Vue from 'vue'
import App from './views/cart/cart.view.vue'
import store from './store'
import VueCompositionAPI from '@vue/composition-api'
import "@/assets/main.scss";

Vue.use(VueCompositionAPI);

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
