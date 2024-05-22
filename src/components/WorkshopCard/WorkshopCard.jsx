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

              <div className="workshop-image-container">
                <img src={workshop.Imagen} alt={workshop.Titulo} />
              </div>

              <div className="workshop-details-container">
                <div className="workshop-date-and-schedule-container">

                  <div className="workshop-date">
                    <img className='icon-workshop' src="/img/calendar-icon.svg" alt="Icono de calendario" />
                    <p>{workshop.Fecha}</p>
                  </div>

                  <div className="workshop-schedule">
                    <img className='icon-workshop' src="/img/watch-icon.svg" alt="Icono de reloj" />
                    <p>{workshop.Horario}</p>

                  </div>
                </div>
                <h3 className="workshop-title">{workshop.Titulo}</h3>
                <p className="workshop-description">{workshop.Descripción}</p>
              </div>


              <Link to={`/taller/${workshop.ID_Talleres}`} state={{ workshop }}>
                <div className="workshop-button-container">
                  <img className="svg1" src="/img/plus-button1.svg" alt="SVG 1" />
                  <img className="svg2" src="/img/plus-button2.svg" alt="SVG 2" />
                </div>
              </Link>



            </div>
          ))}
      </div>
    </div>
  );
};

export default WorkshopCard;
