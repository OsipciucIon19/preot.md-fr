import item from "../item";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {item}
})

describe('item', () => {
    it('should have default value an empty object', function () {
        expect(store.getters['item/getIsLoading']).toBeFalsy()
        expect(store.getters['item/getItem']).toEqual({})
    });
    it('should load the item', function () {
        const testId = '74194861'
        return store.dispatch('item/loadItem', testId).then(() => {
            expect(store.getters['item/getItem'].link).toContain(testId)
        })
    });
})