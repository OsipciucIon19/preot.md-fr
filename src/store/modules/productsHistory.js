export const state = {
    items: []
}

export default {
    namespaced: true,
    state: {
        items: []
    },
    getters: {
        getItem: (state) => (id) => state.items[id]
    },
    actions: {

    },
    mutations: {
        mutateItem(state, itemList) {
            for(let item of itemList) {
                item.link = item.link.substring(4)
                const priceList = state.items?.[item.link]?.price ?? []
                const lastPrice = priceList[priceList.length - 1]

                if (item.price !== lastPrice) {
                    priceList.push(item.price)
                }
                state.items[item.link] = {price: priceList};
            }
        }
    }
}