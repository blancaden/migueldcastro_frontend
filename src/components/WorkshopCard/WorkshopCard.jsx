import React from 'react';
import { Link } from 'react-router-dom'; 
import './WorkshopCard.css';



const WorkshopCard = ({ talleres }) => {
  return (
    <>
  <div className="workshop-body">
   <div className="workshop-container">
   <link href="https://fonts.googleapis.com/css2?family=Ovo&display=swap" rel="stylesheet" />
   <link href="https://fonts.googleapis.com/css2?family=Ovo&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      {talleres && talleres.map((talleres, index) => (
        <div key={index} className="workshop-card">
          <Link to={`/taller/${talleres.ID_Talleres}`} state={{ talleres }}>            
            <div className='workshop-image-container'>
              <img 
                src={talleres.Imagen}
                alt={talleres.Titulo}
              />
              <div className="workshop-overlay">
                Ver más
              </div>
            </div>
          </Link>
          <div className="workshop-details-container">
            <div className="workshop-date-and-schedule-container">
            <p className="workshop-date">{talleres.Fecha}</p>
            <p className="workshop-schedule">{talleres.Horario}</p>
            </div>
            <h3 className="workshop-title">{talleres.Titulo}</h3>
            <p className="workshop-description">{talleres.Descripción}</p>
          </div>           
        </div>
      ))}
    </div>
    </div>
   </>
  )
}

export default WorkshopCard



