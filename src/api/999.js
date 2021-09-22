import api from './api';

export const fetchSuggestions = (search) => api.get('suggestions', {params: {search}})
export const fetchProducts = (linkBase64) => {
    console.log('test');
    return api.get('page', {params: {linkBase64}})
}
export const fetchCategories = () => api.get('categories')
export const fetchItem = (link) => api.get('item', {params: {link}})




