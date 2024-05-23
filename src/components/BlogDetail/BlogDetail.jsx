import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import "./BlogDetail.css";

const BlogDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const [blog, setBlog] = useState(location.state?.blog || null);

  useEffect(() => {
    if (!blog) {
      const fetchBlog = async () => {
        try {
          const { data } = await axios.get(`http://localhost:5001/articulos`);

          const blogDetail = data.find(
            (blog) => blog.ID_Articulo === Number(id)
          );

          if (blogDetail) {
            const formattedBlog = {
              ...blogDetail,
              Fecha: new Date(blogDetail.Fecha).toLocaleDateString("es-ES"),
            };
            setBlog(formattedBlog);
          }
        } catch (error) {
          console.error("Error al obtener los datos del artículo:", error);
        }
      };

      fetchBlog();
    }
  }, [id, blog]);

  if (!blog) {
    return <div></div>;
  }

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Ovo&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Ovo&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <div className="blogdetail-body-detail">
        <h3 className="blog-title-detail">{blog.Titulo}</h3>
        <div className="blog-image-container-detail">
          <img
            className="img-blog-detail"
            src={blog.Imagen}
            alt={blog.Titulo}
          />
        </div>
        <div className="blog-details-container-detail">
          <div className="blog-date-and-schedule-container-detail">
            <img
              className="calendar-icon-blog-size"
              src="/img/calendar-icon.svg"
              alt="calendar-icon"
            />
            <p className="blog-date-detail">{blog.Fecha}</p>
          </div>
          <p>{blog.Contenido}</p>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
