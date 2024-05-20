import React from "react";
import { Link } from "react-router-dom";
import "./BlogCard.css";

const BlogCard = ({ blogs }) => {
  if (!blogs || blogs.length === 0) {
    return <div></div>;
  }

  return (
    <div className="product-container">
      {blogs.map((blog, index) => (
        <div key={index} className="card">
          <Link to={`/articulos/${blog.ID_Articulo}`} state={{ article: blog }}>
            <div className="product-image-container">
              <img src={blog.Imagen} alt={blog.Titulo} />
              <div className="overlay">Leer más</div>
            </div>
          </Link>
          <div className="product-details">
            <h3 className="product-title">{blog.Titulo}</h3>
            <p className="blog-date">{blog.Fecha}</p>
            <p className="blog-content">{blog.Contenido}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
