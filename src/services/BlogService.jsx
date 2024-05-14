import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

export const BlogService = {
    async getBlogs() {
        try {
            let response = await apiClient.get("/articulo");
            let allBlogs = response.data;
            return allBlogs;
        } catch (error) {
            console.error("Error al obtener los articulos:", error);
        }
    },
    async getBlog(ID_Articulo) {
        try {
            let response = await apiClient.get("/articulo/" + ID_Articulo);
            let articulo = response.data;
            return articulo;
        } catch (error) {
            console.error("Error al obtener el articul:", error);
        }
    },
    async submitBlog(newBlog){
        try {
            return await apiClient.post("/blogs", newBlog);
        } catch (error) {
            console.error("Error al enviar el blog:", error);
        }
    },
    async deleteBlog(id){
        try {
            return await apiClient.delete("/articulo/" + ID_Articulo);
        } catch (error) {
            console.error("Error al eliminar el producto:", error);
        }
    },
    async updateBlog(ID_Articulo, updatedBlog){
        try {
            return await apiClient.patch("/articulo/" + ID_Articulo, updatedBlog);
        } catch (error) {
            console.error("Error al actualizar el blog:", error);
        }
    }
}

export default BlogService;