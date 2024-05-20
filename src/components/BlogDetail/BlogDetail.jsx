import React from 'react';
import { useLocation } from 'react-router-dom'; 
import './BlogDetail.css';

const BlogDetail = () => {

  const location = useLocation();
  const articulo = location.state.articulo;
  console.log(articulo);

  return (
    
    <>
    
      <link href="https://fonts.googleapis.com/css2?family=Ovo&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Ovo&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      <div className="blogdetail-body-detail">
        <h3 className="blog-title-detail">{articulo.Titulo}</h3>
        <div className="blog-image-container-detail">
          <img className='img-blog-detail'
            src={articulo.Imagen}
            alt={articulo.Titulo}
          />
        </div>
        <div className="blog-details-container-detail">
          <div className="blog-date-and-schedule-container-detail">
          <img className='calendar-icon-blog-size' src="/img/calendar-icon.svg" alt="calendar-icon" />

            <p className="blog-date-detail">{articulo.Fecha}</p>
            <p className="blog-schedule-detail">{articulo.Horario}</p>
          </div>
          <p>{articulo.Descripción}</p>
        </div>
      </div>
     
    </>
  )
}

export default BlogDetail;
