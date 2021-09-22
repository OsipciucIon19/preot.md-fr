import Vue from "vue";
import Vuex from "vuex";
import productsHistory from "../productsHistory";
import {products, productsNew} from "./stubs/productsHistoryDataProvider"

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        productsHistory
    }
})

describe('productsHistory', () => {
    it('should add new price if the price of product changed', () => {
        store.commit('productsHistory/mutateItem', products)
        store.commit('productsHistory/mutateItem', productsNew)
        expect(store.getters['productsHistory/getItem'](1111).price).toEqual([1000,1050])
        expect(store.getters['productsHistory/getItem'](1112).price).toEqual([2000])
    })
})