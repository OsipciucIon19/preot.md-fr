import categories from "../categories";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {categories}
})

describe('categories', () => {
    it('should have default value an empty string', function () {
        expect(store.getters['categories/getList']).toStrictEqual([])
        expect(store.getters['categories/getIsLoading']).toBeFalsy()
    })
    it('should fetch the categories from api', function () {
        return store.dispatch('categories/fetch').then(() => {
            expect(store.getters['categories/getList'].length).toBeGreaterThan(0)
        })
    });
})