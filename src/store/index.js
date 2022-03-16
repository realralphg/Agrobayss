import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

import fruity from './fruity'
import Cart from './cart'
import foodstore from './foodstore'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      fruity, Cart, foodstore
    },
    plugins: [new VuexPersistence().plugin],
    
    // plugins: [
    //   new VuexPersistence({
    //     reducer: (state) => ({
    //       cart: state.cart,
    //     }),
    //     // filter: (mutation) => mutation.type == 'mutateXcsrf'
    //   }).plugin,
    // ],

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
