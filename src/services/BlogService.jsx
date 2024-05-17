// import axios from "axios";
// const apiClient = axios.create({
//   baseURL: 'http://localhost:3000',
//   withCredentials: false,
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json'
//   }
// });
// const BlogService = {
//   async getBlogs() {
//     try {
//       const response = await apiClient.get("/articulo");
//       return response.data;
//     } catch (error) {
//       throw new Error("Error al obtener los artículos de blog:", error);
//     }
//   },
//   async getBlog(ID_Articulo) {
//     try {
//       const response = await apiClient.get(`/articulo/${ID_Articulo}`);
//       return response.data;
//     } catch (error) {
//       throw new Error("Error al obtener el artículo de blog:", error);
//     }
//   },
//   async submitBlog(newBlog) {
//     try {
//       const response = await apiClient.post("/blogs", newBlog);
//       return response;
//     } catch (error) {
//       throw new Error("Error al enviar el artículo de blog:", error);
//     }
//   },
//   async deleteBlog(ID_Articulo) {
//     try {
//       const response = await apiClient.delete(`/articulo/${ID_Articulo}`);
//       return response;
//     } catch (error) {
//       throw new Error("Error al eliminar el artículo de blog:", error);
//     }
//   },
//   async updateBlog(ID_Articulo, updatedBlog) {
//     try {
//       const response = await apiClient.patch(`/articulo/${ID_Articulo}`, updatedBlog);
//       return response;
//     } catch (error) {
//       throw new Error("Error al actualizar el artículo de blog:", error);
//     }
//   }
// };
// export default BlogService;







