import React, { useState, useEffect } from 'react';
import BlogCardSection from '../BlogCardSection/BlogCardSection'; 
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
      <h1>Entradas recientes</h1>
        <BlogCardSection articulos={displayedBlogEntries} />
      <img className="background-img" src="/img/Mariposa-rosa.svg" alt="Mariposa" />
    </div>
  );
}

export default BlogSection;
