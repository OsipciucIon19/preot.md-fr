export default {
    namespaced: true,
    state: {
        items: {}
    },
    getters: {
        getItem: (state) => (id) => state.items[id]
    },
    actions: {

    },
    mutations: {
        mutateItem(state, itemList) {
            for(let item of itemList) {
                const price = item.price ?? 0;
                const lastPrice = state.items[item.link]?.price[state.items[item.link]?.price.length - 1]
                let priceList = state.items?.[item.link]?.price ?? [];

                if (lastPrice) {
                    if (price !== lastPrice) {
                        priceList.push(price)
                    }
                } else {
                    priceList.push(price)
                }

                state.items[item.link] = {price: priceList};
            }
        }
    }
}