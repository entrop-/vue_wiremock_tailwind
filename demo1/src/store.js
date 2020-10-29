import Vue                  from 'vue'
import Vuex                 from 'vuex'
import cart                 from '@/views/cart/cart.store';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    global: {

    },
  },
  modules: {
    cart,
  },
  getters: {

  },
  mutations: {

  },
  actions: {

  },
});

export default store;
