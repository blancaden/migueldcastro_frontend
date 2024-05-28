import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCardSection from "../BlogCardSection/BlogCardSection";
import "./BlogSection.css";

const BlogSection = () => {
  const [recentBlogEntries, setRecentBlogEntries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecentBlogEntries = async () => {
      try {
        const response = await axios.get("http://localhost:5000/articulos");
        if (response.data && Array.isArray(response.data)) {
          setRecentBlogEntries(response.data);
        } else {
          throw new Error("La respuesta del servidor no es válida");
        }
      } catch (error) {
        console.error(
          "Error al cargar las entradas de blog más recientes:",
          error
        );
        setError(error.message);
      }
    };

    fetchRecentBlogEntries();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const displayedBlogEntries = recentBlogEntries.slice(0, 3);

  return (
    <div className="blog-section">
      <h1>Entradas recientes</h1>
      <BlogCardSection blogs={displayedBlogEntries} />
      <img
        className="background-img"
        src="/img/Mariposa-rosa.svg"
        alt="Mariposa"
      />
    </div>
  );
};

export default BlogSection;
