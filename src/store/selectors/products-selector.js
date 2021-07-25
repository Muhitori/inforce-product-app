export const productsListSelector = (state) =>
  state.products.list.map((product) => ({ ...product, src: product.imageUrl }));
export const currentProductSelector = (state) => state.products.currentProduct;
