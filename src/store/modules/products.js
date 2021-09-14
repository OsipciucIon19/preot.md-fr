import {encode} from 'js-base64'
import {fetchData} from '../../api/999'

export const state = {
    list: [],
    isLoading: false,
    search: [],
    isSearchLoading: false,
    isError: false
}

export default {
    namespaced: true,
    state,
    getters: {
        getList: (state) => state.list,
        getIsLoading: (state) => state.isLoading,
        getSearchSuggestions: (state) => state.search?.suggestions ?? [],
        getIsSearchLoading: (state) => state.isSearchLoading,
        getIsError: (state) => state.isError
    },
    actions: {
        async loadProducts(store, {link, page}) {
            store.commit('mutateIsLoading', true);

            let appender = link.includes('?') ? '&' : '?';
            let params = encode(`${link}${appender}page=${page}`);

            let products = fetchData.productList(params);
            products = (await products).data;

            store.commit('productsHistory/mutateItem', products, {root: true});

            if (page > 1) {
                store.commit('mutateNewList', products);
            } else {
                store.commit('mutateList', products);
            }
            store.commit('mutateIsLoading', false);
        },
        async searchProducts(store, payload) {
            store.commit('mutateIsSearchLoading', true);

            const result = fetchData.suggestions(payload);

            store.commit('mutateSearchList', (await result).data);
            store.commit('mutateIsSearchLoading', false);
        },
        setIsError(store) {
            store.commit('mutateIsError', true)
        },
    },
    mutations: {
        mutateList(state, payload) {
            state.list = payload;
        },
        mutateIsLoading(state, payload) {
            state.isLoading = payload;
        },
        mutateNewList(state, payload) {
            state.list = state.list.concat(payload);
        },
        mutateIsSearchLoading(state, payload) {
            state.isSearchLoading = payload;
        },
        mutateSearchList(state, payload) {
            state.search = payload;
        },
        mutateIsError(state, payload) {
            state.isError = payload;
        }
    }
}