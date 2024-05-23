import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BlogFiles.css';

// const BlogFiles = () => {
//   const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    const fetchArticulos = async () => {
      try {
        const response = await fetch("http://localhost:5000/articulos");
        const data = await response.json();
        setArticulos(data);
      } catch (error) {
        console.error("Error al cargar los artículos de blog:", error);
      }
    };
    fetchArticulos();
  }, []);

  return (
    <div className='blogfiles-content'>
      <h1>Archivos</h1>
      {articulos.map(articulo => (
        <div key={articulo.id}>
          <Link to={`/blogdetail/${articulo.id}`}>
            <p>{new Date(articulo.date).toLocaleDateString()}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

// export default BlogFiles;
