import axios from "axios";
import { CommentsService } from "./comments-service";

export class ProductsService {
  static PRODUCTS_URL = "http://localhost:3010/products";

  static async getAll() {
    const response = await axios.get(this.PRODUCTS_URL);
    return response.data;
  }

  static async getById({ id }) {
    const response = await axios.get(`${this.PRODUCTS_URL}/${id}`);

    const product = response.data;
    product.comments = await CommentsService.getByProductId(id);

    return product;
  }
}
