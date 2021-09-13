import products from "../products";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {products}
})

describe('products', function () {
    it('should have default value an empty array', function () {
        expect(store.getters['products/getList']).toStrictEqual([])
        expect(store.getters['products/getIsLoading']).toBeFalsy()
        expect(store.getters['products/getSearchSuggestions']).toStrictEqual([])
        expect(store.getters['products/getIsSearchLoading']).toBeFalsy()
        expect(store.getters['products/getIsError']).toBeFalsy()
    });
    // it('should load a list of products', function () {
    //     return store.dispatch('products/loadProducts').then(() => {
    //         expect()
    //     })
    // });
});