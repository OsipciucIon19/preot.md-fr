import  Vue from 'vue'
import Vuex from 'vuex'
import * as modules from './modules'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const dataState = createPersistedState({
    paths: ['categories.list', 'darkMode.isDarkModeEnabled']
});

const store = new Vuex.Store({
    modules,
    plugins: [dataState]
});
export default store;