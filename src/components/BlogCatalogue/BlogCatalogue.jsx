import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../BlogCard/BlogCard";

const BlogCatalogue = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await axios.get("http://localhost:5001/articulos");
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
    <div className="catalogue-main-container">
      <div className="catalogue-body">
        <section>
          <BlogCard blogs={blogs} />
        </section>
      </div>
    </div>
  );
};

export default BlogCatalogue;
