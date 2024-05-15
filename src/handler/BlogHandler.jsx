import BlogService from "../services/BlogService";

const BlogHandler = {
  async getAllBlogs() {
    try {
      const allBlogs = await BlogService.getBlogs();
      return allBlogs;
    } catch (error) {
      throw new Error("Error al obtener los artículos de blog:", error);
    }
  },

  async getBlog(id) {
    try {
      const blog = await BlogService.getBlog(id);
      return blog;
    } catch (error) {
      throw new Error("Error al obtener el artículo de blog:", error);
    }
  },

  async submitBlog(newBlog) {
    try {
      const response = await BlogService.submitBlog(newBlog);
      if (response.status === 201) {
        console.log(response.data);
      } else {
        throw new Error('Error al enviar el artículo de blog');
      }
    } catch (error) {
      throw new Error("Error al enviar el artículo de blog:", error);
    }
  }
};

export default BlogHandler;
