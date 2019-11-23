import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from './types'

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    address: '',
    gas: 4000000,
    gasPrice: 90000000000,
  },
  mutations: {},
  actions: {},
  modules: {}
}

export default new Vuex.Store<RootState>(store)
