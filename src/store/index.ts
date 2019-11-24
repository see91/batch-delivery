import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from './types'
import { testProvider, proProvider } from '@/config'
import Web3 from '@/web3'

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    env: false,
    address: '',
    gas: 4000000,
    gasPrice: 90000000000,
    web3: new Web3(testProvider)
  },
  mutations: {
    changeEnv(state, env: boolean): void {
      state.web3 = new Web3(env ? proProvider : testProvider)
      state.env = env
    }
  },
  actions: {},
  modules: {}
}

export default new Vuex.Store<RootState>(store)
