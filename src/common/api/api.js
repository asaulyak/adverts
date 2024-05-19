import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://664892962bb946cf2fa0fdf7.mockapi.io',
  headers: {
    accept: 'application/json',
  },
});

export const getProducts = () => instance.get('/adverts');

export const getProduct = id => instance.get(`/adverts/${id}`);
