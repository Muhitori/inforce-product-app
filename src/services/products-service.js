import axios from "axios";
export class ProductsService {
  static PRODUCTS_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3010/products"
      : `https://inforce-app.herokuapp.com:${process.env.PORT}/products`;

  static async getAll(field, sortOption) {
    const response = await axios.get(
      `${this.PRODUCTS_URL}?_sort=${field}&_order=${sortOption}`
    );
    return response.data;
  }

  static async getById(id) {
    const response = await axios.get(`${this.PRODUCTS_URL}/${id}`);
    return response.data;
  }

  static async create(product) {
    const response = await axios.post(this.PRODUCTS_URL, product);
    return response.data;
  }

  static async update(id, product) {
    const response = await axios.patch(`${this.PRODUCTS_URL}/${id}`, product);
    return response.data;
  }

  static async delete(id) {
    await axios.delete(`${this.PRODUCTS_URL}/${id}`);
    return id;
  }
}
