import axios from "axios";
export class ProductsService {
  static PRODUCTS_URL = "http://localhost:3010/products";

  static async getAll() {
    const response = await axios.get(this.PRODUCTS_URL);
    return response.data;
  }

  static async getById(id) {
    const response = await axios.get(`${this.PRODUCTS_URL}/${id}`);
    return response.data;
  }

  static async create(product) {}

  static async update(product) {}

  static async delete(id) {
    await axios.delete(`${this.PRODUCTS_URL}/${id}`);
    return id;
  }
}
