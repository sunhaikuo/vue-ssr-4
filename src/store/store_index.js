import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


import list from './modules/list'
const modules = {
    list
}

const store = new Vuex.Store({
    modules
})

export default store