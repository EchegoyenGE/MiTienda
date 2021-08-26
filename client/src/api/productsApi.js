import axios from 'axios';

const api = process.env.REACT_APP_API || '';

export const getProducts = async () => await axios.get(`${api}/products`);

export const saveProduct = async (newProduct) => await axios.post(`${api}/products`, newProduct) 
