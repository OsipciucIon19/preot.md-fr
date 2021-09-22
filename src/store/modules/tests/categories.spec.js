import Vue from "vue";
import Vuex from "vuex";
import categories from "../categories";
import {state} from "../categories";
import {fetchCategories} from "../../../api/999";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        categories
    }
})

jest.mock('../../../api/999', () => ({
    fetchCategories: jest.fn()
}))

describe('categories', () => {
    beforeEach(() => {
        fetchCategories.mockReturnValue({
            data: ['testCategories']
        })
    })
    it('should have default value', () => {
        expect(store.getters['categories/getIsLoading']).toBe(state.isLoading);
        expect(store.getters['categories/getList']).toStrictEqual(state.list);
    })
    it('should change to true', () => {
        store.commit('categories/mutateIsLoading', true);
        expect(store.getters['categories/getIsLoading']).toBeTruthy();
    })
    it('should fetch categories', async () => {
        const categories = store.dispatch('categories/fetch');
        expect(fetchCategories).toBeCalled();
        expect(store.getters['categories/getIsLoading']).toBeTruthy();
        await categories;
        expect(store.getters['categories/getIsLoading']).toBeFalsy();
        expect(store.getters['categories/getList']).toEqual(['testCategories']);
    })
})