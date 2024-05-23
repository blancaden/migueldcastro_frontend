import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCardSection.css';

const BlogCardSection = ({ articulos }) => {
  return (
    <div className="card-container">
      {articulos.map((articulo, index) => (
        <div key={index} className="card-section">
            <img
              src={articulo.Imagen}
              alt={articulo.Titulo}
              className="product-image"
            />
          <div className="product-details">
            <p className="blog-date">{articulo.Fecha}</p>
            <p className="blog-time">{articulo.Tiempo}</p>
            <h3 className="blog-product-title">{articulo.Titulo}</h3>
            <p className="blog-content">{articulo.Contenido}</p>
          </div>
          <div className="button-container">
            <Link
              to={`/articulos/${articulo.ID_Articulo}`}
              state={{ articulo }}
              className="custom-button"
            >
              Leer más
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCardSection;