import React from "react";
import { Link } from "react-router-dom";
import "./WorkshopCard.css";

function truncateText(text, wordLimit) {
  if (text.split(/\s+/).length <= wordLimit) {
    return text;
  }
  return text.split(/\s+/).slice(0, wordLimit).join(' ') + "   [  . . .  ] ";
}

const WorkshopCard = ({ workshops, wordLimit }) => {
  return (
    <div className="workshop-body">
      <div className="workshop-container">
        {workshops &&
          workshops.map((workshop, index) => (
            <div key={index} className="workshop-card">

              <div className="workshop-image-container">
                <img className="workshop-image" src={workshop.Imagen} alt={workshop.Titulo} />
              </div>

              <div className="workshop-details-container">
                <div className="workshop-date-and-schedule-container">

                  <div className="workshop-date">
                    <img className='icon-workshop' src="/img/calendar-icon.svg" alt="Icono de calendario" />
                    <p>{workshop.Fecha}</p>
                  </div>

                  <div className="workshop-schedule">
                    <img className='icon-workshop' src="/img/watch-icon.svg" alt="Icono de reloj" />
                    <p className="workshop-schedule-p" >{workshop.Horario}</p>

                  </div>
                </div>

                <div className="workshop-title-and-description">
                  <h3 className="workshop-title">{workshop.Titulo}</h3>
                  <p className="workshop-description">{truncateText(workshop.Descripción, wordLimit)}</p>
                </div>

              </div>


              <Link to={`/taller/${workshop.ID_Talleres}`} state={{ workshop }}>
                <div className="workshop-button-container">
                  <button className="more-info-button">+ Información</button>
                </div>
              </Link>



            </div>
          ))}
      </div>
    </div>
  );
};

export default WorkshopCard;
