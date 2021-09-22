import products from "../products";
import Vue from "vue";
import Vuex from "vuex";
import {state} from "../products";
import {fetchProducts, fetchSuggestions} from "../../../api/999";
import {encode} from "js-base64";

Vue.use(Vuex)

const mutateItem = jest.fn();
const store = new Vuex.Store({
    modules: {
        products,
        productsHistory: {
            namespaced: true,
            mutations: {
                mutateItem
            }
        }
    }
})
jest.mock('../../../api/999', () => ({
    fetchProducts: jest.fn(),
    fetchSuggestions: jest.fn()
}))

describe('products', function () {
    beforeEach(() => {
        fetchProducts.mockReturnValue({
            data: ['testProduct']
        });
        fetchSuggestions.mockReturnValue({
            data: {
                suggestions: ['testSuggestion']
            }
        })
    })

    it('should have default value', () => {
        expect(store.getters['products/getList']).toEqual(state.list);
        expect(store.getters['products/getSearchSuggestions']).toEqual(state.search);
        expect(store.getters['products/getIsLoading']).toBe(state.isLoading);
        expect(store.getters['products/getIsSearchLoading']).toBe(state.isSearchLoading);
    })

    it('should change to true', () => {
        store.commit('products/mutateIsLoading', true);
        expect(store.getters['products/getIsLoading']).toBeTruthy();
        store.commit('products/mutateIsSearchLoading', true);
        expect(store.getters['products/getIsSearchLoading']).toBeTruthy();
    })

    it('should fetch the first page', async () => {
        const action = store.dispatch('products/loadProducts', {
            link: '/ru/list/transport/cars',
            page: 1
        })
        expect(fetchProducts).toBeCalledWith(encode('/ru/list/transport/cars?page=1'))
        expect(store.getters['products/getIsLoading']).toBeTruthy();
        await action;
        expect(store.getters['products/getIsLoading']).toBeFalsy();
        expect(store.getters['products/getList']).toEqual(['testProduct']);
    })

    it('should fetch page 2', async () => {
        store.commit('products/mutateList', ['firstProduct'])
        await store.dispatch('products/loadProducts', {
            link: '/ru/list/transport/cars?test=test',
            page: 2
        })
        expect(fetchProducts).toBeCalledWith(encode('/ru/list/transport/cars?test=test&page=2'))
        expect(store.getters['products/getList']).toEqual(['firstProduct', 'testProduct'])
    })

    it('should fetch search suggestions', async () => {
        const suggestions = store.dispatch('products/searchProducts', 'test');
        expect(fetchSuggestions).toBeCalledWith('test');
        expect(store.getters['products/getIsSearchLoading']).toBeTruthy();
        await suggestions;
        expect(store.getters['products/getIsSearchLoading']).toBeFalsy();
        expect(store.getters['products/getSearchSuggestions']).toEqual(['testSuggestion']);
    })

    it('should get empty array for search suggestions', async () => {
        store.commit('products/mutateSearchList', null);
        expect(store.getters['products/getSearchSuggestions']).toEqual([]);
    })

    it('should get an error', function () {
        store.dispatch('products/setIsError')
        expect(store.getters['products/getIsError']).toBeTruthy()
    })
});