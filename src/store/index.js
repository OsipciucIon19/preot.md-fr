import  Vue from 'vue'
import Vuex from 'vuex'
import * as modules from './modules'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const dataState = createPersistedState({
    paths: [
        'categories.list',
        'settings.isDarkModeEnabled',
        'productsHistory.items',
        'auth',
    ]
});

const store = new Vuex.Store({
    modules,
    plugins: [dataState]
});
export default store;