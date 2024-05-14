import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import BlogHandler from "../../handler/BlogHandler";
import './BlogCard.css';


const BlogCard = () => {
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
    <>
    <div className="product-container">
      {articulos.map((articulo, index) => (
        <div key={index} className="card">
          <Link to={`/articulos/${articulo.ID_Articulo}`} state={{ articulo }}>            
            <div className='product-image-container'>
              <img
                src={articulo.Imagen}
                alt={articulo.Titulo}
              />
              <div className="overlay">
                Leer más
              </div>
            </div>
          </Link>
              <div className="product-details">
                <h3 className="product-title">{articulo.Titulo}</h3>
                <p className="blog-date">{articulo.Fecha}</p>
                <p className="blog-content">{articulo.Contenido}</p>
              </div>           
        </div>
      ))}
    </div>
    </>
  )
}

export default BlogCard