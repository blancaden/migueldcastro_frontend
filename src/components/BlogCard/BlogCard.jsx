import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./BlogCard.css";

const BlogCard = () => {
  const [blog, setBlog] = useState([]);
  const [blogData, setBlogData] = useState({
    ID_Usuario: "",
    Titulo: "",
    Contenido: "",
    Fecha: "",
    Imagen: "",
  });

  useEffect(() => {
    if (blog.length === 0) {
      const fetchAPI = async () => {
        try {
          const response = await axios.get("http://localhost:5000/articulos");
          const formattedData = response.data.map((article) => ({
            ...article,
            Fecha: new Date(article.Fecha).toLocaleDateString("es-ES"),
          }));
          setBlog(formattedData);
        } catch (error) {
          console.error("Error al obtener los datos del servidor:", error);
        }
      };
      fetchAPI();
    }
  }, [blog]);

  return (
    <div className="product-container">
      {blog.map((blogs, index) => (
        <div key={index} className="card">
          <Link
            to={`/articulos/${blogs.ID_Articulo}`}
            state={{ article: blogs }}
          >
            <div className="product-image-container">
              <img src={blogs.Imagen} alt={blogs.Titulo} />
              <div className="overlay">Leer más</div>
            </div>
          </Link>
          <div className="product-details">
            <h3 className="product-title">{blogs.Titulo}</h3>
            <p className="blog-date">{blogs.Fecha}</p>
            <p className="blog-content">{blogs.Contenido}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
