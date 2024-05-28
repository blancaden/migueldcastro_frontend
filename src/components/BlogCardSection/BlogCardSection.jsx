import React from "react";
import { Link } from "react-router-dom";
import "./BlogCardSection.css";

const BlogCardSection = ({ blogs = [] }) => {
  const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '. . .';
    }
    return text;
  };

  return (
    <div className="card-container">
      {blogs.map((blog, index) => (
        <div key={index} className="card-section">
          <img src={blog.Imagen} alt={blog.Titulo} className="product-image" />
          <div className="product-details">
            <h3 className="blog-product-title">{blog.Titulo}</h3>
            <p className="blog-content">{truncateText(blog.Contenido, 10)}</p>
          </div>
          <div className="button-container">
            <Link
              to={`/articulo/${blog.ID_Articulo}`}
              state={{ blog }}
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