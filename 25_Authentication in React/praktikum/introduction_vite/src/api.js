import axios from 'axios';

const API = axios.create({
  baseURL: 'https://642c5d44d7081590f938a32d.mockapi.io/products/',
});

export const getProducts = () => {
  return API.get('/products');
};
