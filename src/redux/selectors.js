export const selectProducts = state => state.products.items;

export const selectProduct = (state, productId) =>
  state.products.items.find(item => item.id === productId);
