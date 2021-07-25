import axios from "axios";
export class CommentsService {
  static COMMENTS_URL = "http://localhost:3010/comments";

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
      date: Date.now(),
    });
    return response.data;
  }

  static async delete(id) {
    await axios.delete(`${this.COMMENTS_URL}/${id}`);
    return id;
  }
}
