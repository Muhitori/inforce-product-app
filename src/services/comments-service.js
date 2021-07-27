import axios from "axios";
import moment from "moment";
export class CommentsService {
  static COMMENTS_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3010/products"
      : "https://inforce-app.herokuapp.com:3010/products";

  static async getByProductId(productId) {
    const response = await axios.get(
      `${this.COMMENTS_URL}?productId=${productId}`
    );
    return response.data;
  }

  static async create(productId, description) {
    const response = await axios.post(this.COMMENTS_URL, {
      productId,
      description,
      date: moment().format("MMMM Do YYYY, h:mm:ss a"),
    });
    return response.data;
  }

  static async delete(id) {
    await axios.delete(`${this.COMMENTS_URL}/${id}`);
    return id;
  }
}
