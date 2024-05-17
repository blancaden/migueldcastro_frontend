import { useLocation } from 'react-router-dom';
import './WorkshopDetail.css';

const WorkshopDetail = () => {

  const location = useLocation();
  const talleres = location.state.talleres;
  console.log(talleres);

  return (

<>
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
        <p className="workshop-date-detail">{talleres.Fecha}</p>
        <p className="workshop-schedule-detail">{talleres.Horario}</p>
      </div>
      <p className="workshop-description-detail">{talleres.Descripción}</p>
    </div>
  </div>
</>

  )
}

export default WorkshopDetail