import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../BlogCard/BlogCard";
import './BlogCatalogue.css'
const BlogCatalogue = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await axios.get("http://localhost:5000/articulos");
        const formattedData = response.data.map((blog) => ({
          ...blog,
          Fecha: new Date(blog.Fecha).toLocaleDateString("es-ES"),
        }));
        setBlogs(formattedData);
      } catch (error) {
        console.error("Error al obtener los datos del servidor:", error);
      }
    };
    if (blogs.length === 0) {
      fetchAPI();
    }
  }, [blogs]);

  return (
    <div>
      <div className="h1-blogs-catalogue-container">
        <h1 className="h1-blogs-catalogue">Blogs</h1>
      </div>
      <div className="catalogue-main-container">
        <div className="catalogue-body">
          <section>
            <BlogCard blogs={blogs} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default BlogCatalogue;
