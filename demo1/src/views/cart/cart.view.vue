<template>
  <div class="max-w-6xl m-auto" id="application">
    {{ cart }}
    <div class="font-red flex font-bold">sss</div>
  </div>
</template>

<script>
import store                                       from '@/store';
import { computed } from '@vue/composition-api';

export default {
  name: 'vCart',
  metaInfo: {
    title: 'Koszyk'
  },
  components: {

  },
  async beforeRouteEnter(to, from, next) {



    next();
  },
  setup() {

    const cart = computed(() => store.getters["cart/getCart"]);

    async function initialize() {
      await store.dispatch('cart/getCart');
    }

    initialize();

    return {
      cart,
    };
  },
};
</script>

<style scoped>
.hr {
    height: 2px;
}

.payment-summary {
  top: 2rem;
}

.loader {
  @apply block absolute top-0 left-0 right-0 bottom-0 opacity-75 bg-white;
}
</style>
