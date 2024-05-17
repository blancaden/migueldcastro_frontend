import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCardSection.css';

const BlogCardSection = ({ articulos }) => {
    return (
        <div className="product-container">
            <link href="https://fonts.googleapis.com/css2?family=Ovo&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Ovo&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            {articulos.map((articulo, index) => (
                <div key={index} className="card-section">
                    <div className="product-image-container">
                        <img
                            src={articulo.Imagen}
                            alt={articulo.Titulo}
                        />
                    </div>
                    <div className="product-details">
                        <h3 className="product-title">{articulo.Titulo}</h3>
                        <p className="blog-date">{articulo.Fecha}</p>
                        <p className="blog-content">{articulo.Contenido}</p>
                    </div>
                    <div className="button-container">
                        <Link to={`/articulos/${articulo.ID_Articulo}`} state={{ articulo }} className="custom-button">Leer más</Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BlogCardSection