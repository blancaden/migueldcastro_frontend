import React, { useState, useEffect } from 'react';
import BlogCardSection from '../BlogCardSection/BlogCardSection'; // Importa el nuevo componente BlogCardSection
import BlogHandler from '../../handler/BlogHandler';
import './BlogSection.css';

const BlogSection = () => {
  const [recentBlogEntries, setRecentBlogEntries] = useState([]);

  useEffect(() => {
    const fetchRecentBlogEntries = async () => {
      try {
        const response = await BlogHandler.getAllBlogs();
        setRecentBlogEntries(response);
      } catch (error) {
        console.error("Error al cargar las entradas de blog más recientes:", error);
      }
    };

    fetchRecentBlogEntries();
  }, []);

  const displayedBlogEntries = recentBlogEntries.slice(0, 3);

  return (
    <div className="blog-section">
      <link href="https://fonts.googleapis.com/css2?family=Ovo&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Ovo&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      <h1>Entradas recientes</h1>
      <div className="product-container">
        <BlogCardSection articulos={displayedBlogEntries} />
      </div>
    </div>
  );
}

export default BlogSection;