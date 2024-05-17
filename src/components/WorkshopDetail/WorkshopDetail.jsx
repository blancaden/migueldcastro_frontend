import { useLocation } from 'react-router-dom';
import './WorkshopDetail.css';

const WorkshopDetail = () => {

  const location = useLocation();
  const talleres = location.state.talleres;
  console.log(talleres);

  return (

    <>
      <div className="workshopdetail-body">
        <h1>ESTO ES WorkshopDetail</h1>^

        <div className='workshop-image-container'>
          <img
            src={talleres.Imagen}
            alt={talleres.Titulo}
          />
        </div>

        <div className="workshop-details-container">
          <div className="workshop-date-and-schedule-container">
            <p className="workshop-date">{talleres.Fecha}</p>
            <p className="workshop-schedule">{talleres.Horario}</p>
          </div>
          <h3 className="workshop-title">{talleres.Titulo}</h3>
          <p className="workshop-description">{talleres.Descripción}</p>
        </div>
      </div>



    </>
  )
}

export default WorkshopDetail