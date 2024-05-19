import React from 'react';
import { Link } from 'react-router-dom'; 
import './BlogCard.css';

const BlogCard = ({ articulos }) => {
  return (
    <div className='container-blog'>
      
      <div className="product-container">
        {articulos && articulos.map((articulo, index) => (
          <div key={index} className="card">
            
            <Link to={`/articulo/${articulo.Titulo}`} state={{ articulo }}>            
              <div className='product-image-container'>
                <img className='blog-img'
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
             <div className='date-calendar-style-blog'>
              <img className='calendar-icon-blog-size' src="/img/calendar-icon.svg" alt="calendar-icon" />
              <p className="blog-date">{articulo.Fecha}</p>
              </div> 
              <p className="blog-content">{articulo.Contenido}</p>
            </div>           
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogCard;
