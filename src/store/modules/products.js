import {encode} from 'js-base64'
import {fetchData} from '../../api/999'

export default {
    namespaced: true,
    state: {
        list: [],
        isLoading: false,
        search: {},
        isSearchLoading: false
    },
    getters: {
        getList: (state) => state.list,
        getIsLoading: (state) => state.isLoading,
        getSearchSuggestions: (state) => state.search?.suggestions ?? [],
        getIsSearchLoading: (state) => state.isSearchLoading
    },
    actions: {
        async loadProducts(store, {link, page}) {
            store.commit('mutateIsLoading', true);

            let appender = link.includes('?') ? '&' : '?';
            let params = encode(`${link}${appender}page=${page}`);

            let products = fetchData.productList(params);
            // let products = await fetch(`/api/products?linkBase64=${params}`)
            // console.log(await products.json());
            products = (await products).data;

            store.commit('productsHistory/mutateItem', products, {root: true});

            if (page > 1) {
                store.commit('mutateNewList', products);
            } else {
                store.commit('mutateList', products);
            }
            store.commit('mutateIsLoading', false);
        },
        async searchProducts(store, payload){
            store.commit('mutateIsSearchLoading', true);

            const result = fetchData.suggestions(payload);
            store.commit('mutateSearchList', (await result).data);
            store.commit('mutateIsSearchLoading', false);
        }
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
        mutateIsSearchLoading(state, payload){
            state.isSearchLoading = payload;
        },
        mutateSearchList(state, payload) {
            state.search = payload;
        },
    }
}