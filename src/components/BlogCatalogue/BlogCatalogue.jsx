import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../BlogCard/BlogCard";

const BlogCatalogue = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await axios.get("http://localhost:5000/articulos");
        const formattedData = response.data.map((article) => ({
          ...article,
          Fecha: new Date(article.Fecha).toLocaleDateString("es-ES"),
        }));
        setBlog(formattedData);
      } catch (error) {
        console.error("Error al obtener los datos del servidor:", error);
      }
    };
    fetchAPI();
  }, []);

  return (
    <div className="catalogue-main-container">
      <div className="catalogue-body">
        <section>
          <BlogCard blogs={blog} />
        </section>
      </div>
    </div>
  );
};

export default BlogCatalogue;
