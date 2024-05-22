import React from "react";
import { Link } from "react-router-dom";
import "./BlogCard.css";

const BlogCard = ({ blogs }) => {
  if (!blogs || blogs.length === 0) {
    return <div></div>;
  }

  return (
    <div className="container-blog">
      <div className="product-container">
        {blogs.map((blog, index) => (
          <div key={index} className="card">
            <img
              className="blog-icon-blog"
              src="/img/blogicon.svg"
              alt="calendar-icon"
            />
            <Link
              to={`/articulo/${blog.ID_Articulo}`}
              state={{ articleId: blog.ID_Articulo }}
            >
              <div className="product-image-container">
                <img className="blog-img" src={blog.Imagen} alt={blog.Titulo} />
                <div className="overlay">Leer más</div>
              </div>
            </Link>
            <div className="product-details">
              <h3 className="product-title">{blog.Titulo}</h3>
              <div className="date-calendar-style-blog">
                <img
                  className="calendar-icon-blog-size"
                  src="/img/calendar-icon.svg"
                  alt="calendar-icon"
                />
                <p className="blog-date">{blog.Fecha}</p>
              </div>
              <p className="blog-content">{blog.Contenido}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
