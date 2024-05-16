import React, { useState, useEffect } from 'react';
import WorkshopCard from '../WorkshopCard/WorkshopCard';
import WorkshopHandler from "../../handler/WorkshopHandler";
import './WorkshopCatalogue.css';


const WorkshopCatalogue = () => {
  const [talleres, setTalleres] = useState([]);

  useEffect(() => {
    const fetchTalleres = async () => {
      try {
        const response = await WorkshopHandler.getAllWorkshops();
        setTalleres(response);
      } catch (error) {
        console.error("Error al cargar los talleres:", error);
      }
    };

    fetchTalleres();
  }, []);

  return (
    <div className="catalogue-main-container">
    
        <section className="catalogue-body">
          <WorkshopCard talleres={talleres} />
        </section>
      
    </div>
  );
}

export default WorkshopCatalogue;


