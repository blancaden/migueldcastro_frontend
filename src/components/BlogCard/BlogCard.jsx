import React from 'react';
import { Link } from 'react-router-dom'; 
import './BlogCard.css';

const BlogCard = ({ articulos }) => {
  return (
    <div className="product-container">
      {articulos && articulos.map((articulo, index) => (
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
  );
}

export default BlogCard;