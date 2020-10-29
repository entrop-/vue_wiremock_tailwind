import * as cartService         from '@/views/cart/cart.service';

export default {
  state() {
    return {
      cart: null,
    };
  },
  namespaced: true,
  getters: {
    getCart(state) {
      return state.cart;
    },
  },
  mutations: {
    setCart(state, data) {
      state.cart = data;
    },
  },
  actions: {
    async getCart({ commit }) {
      try {
        const {data: cart} = await cartService.fetchCart();
        commit('setCart', cart);

      } catch (error) {
        console.log(error);
      }
    },
  },
}
