import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import home from './home/index.js'
import my from './my/index'
const store = new Vuex.Store({
    modules:{
        home,
        my
    }
})
export default store
