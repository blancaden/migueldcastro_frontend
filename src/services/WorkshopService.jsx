import React, { useState, useEffect } from "react";
import axios from "axios";

const WorkshopService = () => {
  const [workshop, setWorkshop] = useState([]);
  const [workshopData, setWorkshopData] = useState({
    ID_Usuario: "",
    Titulo: "",
    Fecha: "",
    Lugar: "",
    Horario: "",
    Imagen: ""
  });

  const clearForm = () => {
  setWorkshopData({
    ID_Usuario: "",
    Titulo: "",
    Fecha: "",
    Lugar: "",
    Horario: "",
    Imagen: ""
  });
};

  const handleChange = (e) => {
    setWorkshopData({ ...workshopData, [e.target.name]: e.target.value });
  };

    const handleSubmitCreate = async (e) => {
  e.preventDefault();
  const workshops = {
    ID_Usuario: formData.ID_Usuario,
    Titulo: formData.Titulo,
    Fecha: formData.Fecha,
    Lugar: formData.Lugar,
    Horario: formData.Horario,
    Imagen: formData.Imagen
  };
  try {
    await axios.post(`http://localhost:5000/talleres/create`, workshops);

    const response = await axios.get("http://localhost:5000/talleres");
    setWorkshop(response.data);

    clearForm();
  } catch (error) {
    console.error("Error al enviar la solicitud de eliminación al servidor:", error);
  }
};

const handleSubmitUpdate = async (e) => {
  e.preventDefault();
  const workshops = {
    ID_Talleres: workshopData.ID_Talleres,
    ID_Usuario: workshopData.ID_Usuario,
    Titulo: workshopData.Titulo,
    Fecha: workshopData.Fecha,
    Lugar: workshopData.Lugar,
    Horario: workshopData.Horario,
    Imagen: workshopData.Imagen
  };
  try {
    await axios.put(`http://localhost:5000/talleres/update`, workshops);

    const response = await axios.get("http://localhost:5000/talleres");
    setWorkshop(response.data);

    clearForm();
  } catch (error) {
    console.error("Error al enviar la solicitud de eliminación al servidor:", error);
  }
};

  const handleEdit = (workshops) => {
    setWorkshopData({
      ID_Talleres:workshops.ID_Talleres,
      ID_Usuario: workshops.ID_Usuario,
      Titulo: workshops.Titulo,
      Fecha: workshops.Fecha,
      Lugar: workshops.Lugar,
      Horario: workshops.Horario,
      Imagen: workshops.Imagen
    });
  };

    const handleDelete =async (workshops) => {
     const id = workshops.ID_Talleres
          try {
            await axios.delete(`http://localhost:5000/talleres/remove`, {data: {"ID_Talleres": id}});

            const response = await axios.get("http://localhost:5000/talleres");
            setWorkshop(response.data);
          } catch (error) {
            console.error("Error al enviar la solicitud de eliminación al servidor:", error);
          }
   };

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await axios.get("http://localhost:5000/talleres");
        setWorkshop(response.data);
      } catch (error) {
        console.error("Error al obtener los datos del servID_Talleresor:", error);
      }
    };
    fetchAPI();
  }, []);
}

export default WorkshopService
