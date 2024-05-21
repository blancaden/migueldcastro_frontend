import { useLocation } from 'react-router-dom';
import './WorkshopDetail.css';

const WorkshopDetail = () => {

  const location = useLocation();
  const talleres = location.state.talleres;
  console.log(talleres);

  return (

<>

  <link href="https://fonts.googleapis.com/css2?family=Ovo&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Ovo&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
    <div className="workshopdetail-body-detail">
      <h3 className="workshop-title-detail">{talleres.Titulo}</h3>
      <div className="workshop-image-container-detail">
        <img className='img-workshop-detail'
          src={talleres.Imagen}
          alt={talleres.Titulo}
        />
      </div>
      <div className="workshop-details-container-detail">
        <div className="workshop-date-and-schedule-container-detail">
      
        <img className='calendar-icon-blog-size' src="/img/calendar-icon.svg" alt="calendar-icon" />

          <p className="workshop-date-detail">{talleres.Fecha}</p>
          <img className= 'watch-icon-detail'src="/img/watch-icon.svg" alt="Miguel de Castro" />
          <p className="workshop-schedule-detail">{talleres.Horario}</p>
        </div>
        <p className="workshop-description-detail">{talleres.Descripción}</p>
      </div>
    </div>
  </>

  )
}

export default WorkshopDetail