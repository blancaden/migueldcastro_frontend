import React from "react";
import { Link } from "react-router-dom";
import "./WorkshopCard.css";

const WorkshopCard = ({ workshops }) => {
  return (
    <div className="workshop-body">
      <div className="workshop-container">
        {workshops &&
          workshops.map((workshop, index) => (
            <div key={index} className="workshop-card">
              <Link to={`/taller/${workshop.ID_Talleres}`} state={{ workshop }}>
                <div className="workshop-image-container">
                  <img src={workshop.Imagen} alt={workshop.Titulo} />
                  <div className="workshop-overlay">Ver más</div>
                </div>
              </Link>
              <div className="workshop-details-container">
                <div className="workshop-date-and-schedule-container">
                  <p className="workshop-date">{workshop.Fecha}</p>
                  <p className="workshop-schedule">{workshop.Horario}</p>
                </div>
                <h3 className="workshop-title">{workshop.Titulo}</h3>
                <p className="workshop-description">{workshop.Descripción}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WorkshopCard;
