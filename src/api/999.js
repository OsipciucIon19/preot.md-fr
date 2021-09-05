import api from "./api";

export const fetchData = {
    suggestions: (search) => api.get('suggestions', {params: {search}}),
    productList: (linkBase64) => api.get('page', {params: {linkBase64}}),
    categories: () => api.get('categories'),
    item: (link) => api.get('item', {params: {link}})
}

