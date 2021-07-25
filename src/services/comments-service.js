import axios from "axios";
export class CommentsService {
  static COMMENTS_URL = "http://localhost:3010/comments";

  static async getByProductId(productId) {
    const response = await axios.get(
      `${this.COMMENTS_URL}?productId=${productId}`
    );
    return response.data;
  }
}
