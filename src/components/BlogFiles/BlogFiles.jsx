import React, { useState, useEffect } from 'react';
import './BlogFiles.css';

const BlogFiles = () => {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    const fetchArticulos = async () => {
      try {
        // Realiza la llamada a tu endpoint "articulo" para obtener los datos
        const response = await fetch('URL_DEL_ENDPOINT/articulo');
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
          <h2>{articulo.title}</h2>
          <p>{articulo.content}</p>
          <p>{new Date(articulo.date).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogFiles;
