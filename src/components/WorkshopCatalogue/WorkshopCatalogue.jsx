import React, { useState, useEffect } from "react";
import axios from "axios"; // Importa axios
import WorkshopCard from "../WorkshopCard/WorkshopCard";
import "./WorkshopCatalogue.css";


const WorkshopCatalogue = () => {
  const [workshops, setWorkshops] = useState([]);
  const wordLimit = 25;

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await axios.get("http://localhost:5001/talleres");
        const formattedData = response.data.map((workshop) => ({
          ...workshop,
          Fecha: new Date(workshop.Fecha).toLocaleDateString("es-ES"),
        }));
        setWorkshops(formattedData);
      } catch (error) {
        console.error("Error al obtener los datos del servidor:", error);
      }
    };
    fetchAPI();
  }, []); // Cambia la dependencia a []

  return (
    <div className="catalogue-main-container">
      <div className="catalogue-title-container">
      <h1 className="catalogue-title">Talleres</h1>
      </div>
      <section className="catalogue-body">
        <WorkshopCard workshops={workshops} wordLimit={wordLimit}/>
      </section>
    </div>
  );
};

export default WorkshopCatalogue;
