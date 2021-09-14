import products from "../products";
import Vue from "vue";
import Vuex from "vuex";
import {state} from "../products";

// jest.mock('vue')
// jest.mock('vuex')

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {products}
})

describe('products', function () {
    it('should have all getters', function () {
        expect(store.getters['products/getList']).toBe(state.list)
        expect(store.getters['products/getIsLoading']).toBe(state.isLoading)
        expect(store.getters['products/getSearchSuggestions']).toBe(state.search)
        expect(store.getters['products/getIsSearchLoading']).toBe(state.isSearchLoading)
        expect(store.getters['products/getIsError']).toBe(state.isError)
    });
    it('should load a list of products', function () {
        const payload = {
            link: '/ru/list/transport/cars',
            page: 1
        }

        return store.dispatch('products/loadProducts', payload).then(() => {
            expect(store.getters['products/getList'].length).toBeGreaterThan(0)
        })
    });
    it('should load a list of products from the page 2', function () {
        const payload = {
            link: '/ru/list/transport/cars',
            page: 2
        }

        return store.dispatch('products/loadProducts', payload).then(() => {
            expect(store.getters['products/getList'].length).toBeGreaterThan(0)
        })
    });

    it('should load suggestions', function () {
        const exampleInput = 'opel'

        return store.dispatch('products/searchProducts', exampleInput).then(() => {
            expect(store.getters['products/getSearchSuggestions'].length).toBeGreaterThan(0)
        })
    })
    it('should get an error', function () {
        store.dispatch('products/setIsError')
        expect(store.getters['products/getIsError']).toBeTruthy()
    });
});