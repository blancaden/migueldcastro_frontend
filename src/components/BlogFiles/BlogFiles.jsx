import React, { useState, useEffect } from 'react';
import './BlogFiles.css';

const BlogFiles = () => {
  const [blogs, setBlogs] = useState([]);
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
    <div className='blogfiles-content'>
      <h1>Archivos</h1>
      {blogs.map(blog => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <p>{new Date(blog.date).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogFiles;
