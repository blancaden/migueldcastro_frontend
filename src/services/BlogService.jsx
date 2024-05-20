import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000/articulos",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const BlogDataService = {
  async getBlogData() {
    try {
      const response = await apiClient.get("/");
      return response.data;
    } catch (error) {
      throw new Error("Error al obtener los datos del blog:", error);
    }
  },
};

export default BlogDataService;
