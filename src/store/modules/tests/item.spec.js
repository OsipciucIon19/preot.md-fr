import Vue from "vue";
import Vuex from "vuex";
import item from "../item";
import {state} from "../item";
import {fetchItem} from "../../../api/999";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        item
    }
})

jest.mock('../../../api/999', () => ({
    fetchItem: jest.fn()
}))

describe('item', () => {
    beforeEach(() => {
        fetchItem.mockReturnValue({
            data: {
                test: 'testItem'
            }
        })
    })
    it('should have default value', () => {
        expect(store.getters['item/getIsLoading']).toBe(state.isLoading);
        expect(store.getters['item/getItem']).toStrictEqual(state.item);
    })
    it('should change to true', () => {
        store.commit('item/mutateIsLoading', true);
        expect(store.getters['item/getIsLoading']).toBeTruthy();
    })
    it('should fetch an item', async () => {
        const item = store.dispatch('item/loadItem', 'testItem');
        expect(fetchItem).toBeCalledWith('/ru/testItem');
        expect(store.getters['item/getIsLoading']).toBeTruthy();
        await item;
        expect(store.getters['item/getIsLoading']).toBeFalsy();
        expect(store.getters['item/getItem']).toEqual({
            test: 'testItem'
        })

    })
})