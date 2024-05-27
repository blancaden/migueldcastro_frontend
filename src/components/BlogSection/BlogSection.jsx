import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCardSection from "../BlogCardSection/BlogCardSection";
import "./BlogSection.css";

const BlogSection = () => {
  const [recentBlogEntries, setRecentBlogEntries] = useState([]);

  useEffect(() => {
    const fetchRecentBlogEntries = async () => {
      try {
        const response = await axios.get("http://localhost:5000/articulos");
        setRecentBlogEntries(response.data);
      } catch (error) {
        console.error(
          "Error al cargar las entradas de blog más recientes:",
          error
        );
      }
    };

    fetchRecentBlogEntries();
  }, []);

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
