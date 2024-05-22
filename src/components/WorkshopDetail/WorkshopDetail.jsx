import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import "./WorkshopDetail.css";

const WorkshopDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const [workshop, setWorkshop] = useState(location.state?.workshop || null);

  useEffect(() => {
    if (!workshop) {
      const fetchWorkshop = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5000/talleres/${id}`
          );
          const formattedWorkshop = {
            ...response.data,
            Fecha: new Date(response.data.Fecha).toLocaleDateString("es-ES"),
          };
          setWorkshop(formattedWorkshop);
        } catch (error) {
          console.error("Error al obtener los datos del servidor:", error);
        }
      };

      fetchWorkshop();
    }
  }, [id, workshop]);

  if (!workshop) {
    return <div></div>;
  }

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Ovo&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Ovo&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <div className="workshopdetail-body-detail">
        <h3 className="workshop-title-detail">{workshop.Titulo}</h3>
        <div className="workshop-image-container-detail">
          <img
            className="img-workshop-detail"
            src={workshop.Imagen}
            alt={workshop.Titulo}
          />
        </div>
        <div className="workshop-details-container-detail">
          <div className="workshop-date-and-schedule-container-detail">
            <img
              className="calendar-icon-blog-size"
              src="/img/calendar-icon.svg"
              alt="calendar-icon"
            />
            <p className="workshop-date-detail">{workshop.Fecha}</p>
            <img
              className="watch-icon-detail"
              src="/img/watch-icon.svg"
              alt="watch-icon"
            />
            <p className="workshop-schedule-detail">{workshop.Horario}</p>
          </div>
          <p className="workshop-description-detail">{workshop.Descripción}</p>
        </div>
      </div>
    </>
  );
};

export default WorkshopDetail;
