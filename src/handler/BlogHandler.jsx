import BlogService from "../services/BlogService";

export const BlogHandler = {
  async getAllBlogs() {
    let allBlogs = await BlogService.getBlogs();
    return allBlogs;
  },

  async getBlog(id) {
    let blog = await BlogService.getBlog(id);
    return blog;
  },

  async submitBlog(newBlog) {
    return BlogService.submitBlog(newBlog).then((response) => {
      if (response.status === 201) {
        console.log(response.data);
      } else {
        throw new Error('Error al enviar el articulo');
      }
    });
  }

}

export default BlogHandler;
