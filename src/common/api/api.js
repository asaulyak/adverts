import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://664892962bb946cf2fa0fdf7.mockapi.io',
  headers: {
    accept: 'application/json',
  },
});

export const getProducts = ({ page = 1, limit = 4, ...rest }) =>
  instance.get(`/adverts`, {
    params: {
      page,
      limit,
      ...rest,
    },
  });

export const getProduct = id => instance.get(`/adverts/${id}`);
