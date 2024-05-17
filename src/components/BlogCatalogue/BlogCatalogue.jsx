import React, { useState, useEffect } from 'react';
import BlogCard from '../BlogCard/BlogCard';
import BlogHandler from "../../handler/BlogHandler";

const BlogCatalogue = () => {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    const fetchArticulos = async () => {
      try {
        const response = await BlogHandler.getAllBlogs();
        setArticulos(response);
      } catch (error) {
        console.error("Error al cargar los artículos de blog:", error);
      }
    };

    fetchArticulos();
  }, []);

  return (
    <div className="catalogue-main-container">
      <div className="catalogue-body">
        <section>
          <BlogCard article={article} />
        </section>
      </div>
    </div>
  );
}

export default BlogCatalogue;