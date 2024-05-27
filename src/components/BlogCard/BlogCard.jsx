import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BlogCard.css";

const BlogCard = ({ blogs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;

  if (!blogs || blogs.length === 0) {
    return null; // Retorna null si no hay blogs
  }

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(blogs.length / blogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container-blog">
      <div className="product-container">
        {currentBlogs.map((blog, index) => (
          <div key={index} className="card-blog">
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
                <img
                  className="blog-img"
                  src={blog.Imagen}
                  alt={blog.Titulo}
                />
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
              <p className="blog-content">
                {truncateText(blog.Contenido, 25)}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={currentPage === number ? "active" : ""}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
