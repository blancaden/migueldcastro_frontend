import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./CrudWorkshop.css";

const CrudWorkshop = () => {
  const [workshop, setWorkshop] = useState([]);
  const [workshopData, setWorkshopData] = useState({
    ID_Talleres: "",
    ID_Usuario: "",
    Titulo: "",
    Fecha: "",
    Lugar: "",
    Horario: "",
    Imagen: "",
    Descripción: "",
  });

  const clearForm = () => {
    setWorkshopData({
      ID_Talleres: "",
      ID_Usuario: "",
      Titulo: "",
      Fecha: "",
      Lugar: "",
      Horario: "",
      Imagen: "",
      Descripción: "",
    });
  };

  const handleChange = (e) => {
    setWorkshopData({ ...workshopData, [e.target.name]: e.target.value });
  };

  const handleSubmitCreate = async (e) => {
    e.preventDefault();
    const formattedDate = new Date(workshopData.Fecha)
      .toISOString()
      .split("T")[0];
    const workshops = {
      ID_Usuario: workshopData.ID_Usuario,
      Titulo: workshopData.Titulo,
      Fecha: formattedDate,
      Lugar: workshopData.Lugar,
      Horario: workshopData.Horario,
      Imagen: workshopData.Imagen,
      Descripción: workshopData.Descripción,
    };
    console.log("Datos a enviar:", workshops);
    try {
      await axios.post(`http://localhost:5000/talleres/create`, workshops);

      const response = await axios.get("http://localhost:5000/talleres");
      setWorkshop(response.data);

      clearForm();
    } catch (error) {
      console.error(
        "Error al enviar la solicitud de creación al servidor:",
        error
      );
    }
  };

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    const formattedDate = new Date(workshopData.Fecha)
      .toISOString()
      .split("T")[0];
    const workshops = {
      ID_Talleres: workshopData.ID_Talleres,
      ID_Usuario: workshopData.ID_Usuario,
      Titulo: workshopData.Titulo,
      Fecha: formattedDate,
      Lugar: workshopData.Lugar,
      Horario: workshopData.Horario,
      Imagen: workshopData.Imagen,
      Descripción: workshopData.Descripción,
    };
    try {
      await axios.put(`http://localhost:5000/talleres/update`, workshops);

      const response = await axios.get("http://localhost:5000/talleres");
      setWorkshop(response.data);

      clearForm();
    } catch (error) {
      console.error(
        "Error al enviar la solicitud de actualización al servidor:",
        error
      );
    }
  };

  const handleEdit = (workshops) => {
    setWorkshopData({
      ID_Talleres: workshops.ID_Talleres,
      ID_Usuario: workshops.ID_Usuario,
      Titulo: workshops.Titulo,
      Fecha: workshops.Fecha,
      Lugar: workshops.Lugar,
      Horario: workshops.Horario,
      Imagen: workshops.Imagen,
      Descripción: workshops.Descripción,
    });
  };

  const handleDelete = async (workshops) => {
    const id = workshops.ID_Talleres;
    try {
      await axios.delete(`http://localhost:5000/talleres/remove`, {
        data: { ID_Talleres: id },
      });

      const response = await axios.get("http://localhost:5000/talleres");
      setWorkshop(response.data);
    } catch (error) {
      console.error(
        "Error al enviar la solicitud de eliminación al servidor:",
        error
      );
    }
  };
  const handleExpandDescription = (content) => {
  Swal.fire({
    html: `<div style="text-align: left;">${content}</div>`,
    confirmButtonText: "Cerrar",
    customClass: {
      popup: 'custom-swal-popup',
      title: 'custom-swal-title',
      confirmButton: 'custom-swal-confirm-button'
    }
  });
};
  
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await axios.get("http://localhost:5000/talleres");
        const formattedData = response.data.map((workshop) => ({
          ...workshop,
          Fecha: new Date(workshop.Fecha).toLocaleDateString("es-ES"),
        }));
        setWorkshop(formattedData);
      } catch (error) {
        console.error("Error al obtener los datos del servidor:", error);
      }
    };
    fetchAPI();
  }, []);

  return (
    <>
      <div className="adminpage-container">
        <form className="form-container-adminpage" onSubmit={handleSubmitCreate}>
          <h1>Agrega un nuevo taller</h1>
          <div className="input-container">
            <label htmlFor="ID_Talleres">Taller:</label>
            <input
              className="input-workshop"
              type="text"
              id="ID_Talleres"
              name="ID_Talleres"
              value={workshopData.ID_Talleres || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="ID_Talleres">Creador:</label>
            <input
              className="input-workshop"
              type="text"
              id="ID_Usuario"
              name="ID_Usuario"
              value={workshopData.ID_Usuario || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="titulo">Título:</label>
            <input
              className="input-title"
              type="text"
              id="titulo"
              name="Titulo"
              value={workshopData.Titulo || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="descripcion">Descripción:</label>
            <input
              className="input-description"
              type="text"
              id="descripcion"
              name="Descripción"
              value={workshopData.Descripción || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="fecha">Fecha:</label>
            <input
              className="input-date"
              type="date"
              id="fecha"
              name="Fecha"
              value={workshopData.Fecha || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lugar">Lugar:</label>
            <input
              className="input-place"
              type="text"
              id="lugar"
              name="Lugar"
              value={workshopData.Lugar || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="horario">Horario:</label>
            <input
              className="input-time"
              type="text"
              id="horario"
              name="Horario"
              value={workshopData.Horario || ""}
              onChange={handleChange}
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="00:00"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="imagen">Imagen:</label>
            <input
              className="input-image"
              type="text"
              id="imagen"
              name="Imagen"
              value={workshopData.Imagen || ""}
              onChange={handleChange}
              required
            />
            {workshopData.Imagen && (
              <img
                src={workshopData.Imagen}
                alt="Previsualización de la imagen"
                style={{ width: "50px", height: "auto" }}
              />
            )}
          </div>
          <button
            className="button_form"
            type="submit"
            onClick={handleSubmitCreate}
          >
            Agregar taller
          </button>
          <button
            className="button_form"
            type="submit"
            onClick={handleSubmitUpdate}
          >
            Editar taller
          </button>
        </form>

        <section className="tabla_usuarios">
          <h1>Talleres registrados</h1>
          <table id="table_content">
            <thead>
              <tr>
                <th>ID Talleres</th>
                <th>Imagen</th>
                <th>Título</th>
                <th>Descripción</th>
                <th>Fecha</th>
                <th>Lugar</th>
                <th>Horario</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {workshop.map((workshops, index) => (
                <tr key={index}>
                  <td className="user-data">{workshops.ID_Talleres}</td>
                  <td className="user-data">
                    <img
                      src={workshops.Imagen}
                      alt={workshops.Imagen}
                      style={{ width: "50px", height: "auto" }}
                    />
                  </td>
                  <td className="user-data">{workshops.Titulo}</td>
                  <td className="user-data">
                    {workshops.Descripción.length > 50 ? (
                      <span>
                        {`${workshops.Descripción.substring(0, 50)}...`}
                        <button
                          className="botones_admin_btn"
                          onClick={() => handleExpandDescription(workshops.Descripción)}
                        >
                          Ver más
                        </button>
                      </span>
                    ) : (
                      workshops.Descripción
                    )}
                  </td>
                  <td className="user-data">{workshops.Fecha}</td>
                  <td className="user-data">{workshops.Lugar}</td>
                  <td className="user-data">{workshops.Horario}</td>
                  <td className="actions">
                    <button
                      className="botones_admin_btn edit"
                      onClick={() => handleEdit(workshops)}
                    >
                      Editar
                    </button>
                    <button
                      className="botones_admin_btn delete"
                      onClick={() => handleDelete(workshops)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
};

export default CrudWorkshop;
