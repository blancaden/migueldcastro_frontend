import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CrudBlog.css";

const CrudBlog = () => {
  const [blog, setBlog] = useState([]);
  const [blogData, setBlogData] = useState({
    ID_Usuario: "",
    Titulo: "",
    Contenido: "",
    Fecha: "",
    Imagen: "",
  });

  const clearForm = () => {
    setBlogData({
      ID_Usuario: "",
      Titulo: "",
      Contenido: "",
      Fecha: "",
      Imagen: "",
    });
  };

  const handleChange = (e) => {
    setBlogData({ ...blogData, [e.target.name]: e.target.value });
  };

  const handleSubmitCreate = async (e) => {
    e.preventDefault();
    const blogs = {
      ID_Usuario: blogData.ID_Usuario,
      Titulo: blogData.Titulo,
      Contenido: blogData.Contenido,
      Fecha: blogData.Fecha,
      Imagen: blogData.Imagen,
    };
    try {
      await axios.post(`http://localhost:5000/articulos/create`, blogs);

      const response = await axios.get("http://localhost:5000/articulos");
      setBlog(response.data);

      clearForm();
    } catch (error) {
      console.error(
        "Error al enviar la solicitud de eliminación al servidor:",
        error
      );
    }
  };

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    const blogs = {
      ID_Articulo: blogData.ID_Articulo,
      ID_Usuario: blogData.ID_Usuario,
      Titulo: blogData.Titulo,
      Contenido: blogData.Contenido,
      Fecha: blogData.Fecha,
      Imagen: blogData.Imagen,
    };
    try {
      await axios.put(`http://localhost:5000/articulos/update`, blogs);

      const response = await axios.get("http://localhost:5000/articulos");
      setBlog(response.data);

      clearForm();
    } catch (error) {
      console.error(
        "Error al enviar la solicitud de eliminación al servidor:",
        error
      );
    }
  };

  const handleEdit = (blogs) => {
    setBlogData({
      ID_Articulo: blogs.ID_Articulo,
      ID_Usuario: blogs.ID_Usuario,
      Titulo: blogs.Titulo,
      Fecha: blogs.Fecha,
      Lugar: blogs.Lugar,
      Horario: blogs.Horario,
      Imagen: blogs.Imagen,
    });
  };

  const handleDelete = async (blogs) => {
    const id = blogs.ID_Articulo;
    try {
      await axios.delete(`http://localhost:5000/articulos/remove`, {
        data: { ID_Articulo: id },
      });

      const response = await axios.get("http://localhost:5000/articulos");
      setBlog(response.data);
    } catch (error) {
      console.error(
        "Error al enviar la solicitud de eliminación al servidor:",
        error
      );
    }
  };

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await axios.get("http://localhost:5000/articulos");
        setBlog(response.data);
      } catch (error) {
        console.error(
          "Error al obtener los datos del servID_Articuloor:",
          error
        );
      }
    };
    fetchAPI();
  }, []);

  function formatDate(currentDate) {
    const newDate = new Date(currentDate);
    const formatDate = new Intl.DateTimeFormat("es-Es").format(newDate);
    return formatDate;
  }

  return (
    <>
      <div className="adminpage-container">
        <form className="form-container" onSubmit={handleSubmitCreate}>
          <h1>Agrega un nuevo artículo</h1>
          <div className="input-container">
            <label htmlFor="ID_Usuario">Creador:</label>
            <input
              className="input-workshop"
              type="text"
              id="ID_Usuario"
              name="ID_Usuario"
              value={blogData.ID_Usuario}
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
              value={blogData.Titulo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="Contenido">Contenido:</label>
            <input
              className="input-description"
              type="text"
              id="Contenido"
              name="Descripción"
              value={blogData.Descripción}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="fecha">Fecha:</label>
            <input
              className="input-date"
              type="text"
              id="fecha"
              name="Fecha"
              value={blogData.Fecha}
              onChange={handleChange}
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
              value={blogData.Imagen}
              onChange={handleChange}
              required
            />
            {blogData.Imagen && (
              <img
                src={blogData.Imagen}
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
            Agregar artículo
          </button>
          <button
            className="button_form"
            type="submit"
            onClick={handleSubmitUpdate}
          >
            Editar artículo
          </button>
        </form>

        <section className="tabla_usuarios">
          <h1>Artículos registrados</h1>
          <table id="table_content">
            <thead>
              <tr>
                <th>ID Artículo</th>
                <th>Imagen</th>
                <th>Título</th>
                <th>Contenido</th>
                <th>Fecha</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {blog.map((blogs, index) => (
                <tr key={index}>
                  <td className="user-data">{blogs.ID_Articulo}</td>
                  <td className="user-data">
                    <img
                      src={blogs.Imagen}
                      alt={blogs.Imagen}
                      style={{ width: "50px", height: "auto" }}
                    />
                  </td>
                  <td className="user-data">{blogs.Titulo}</td>
                  <td className="user-data">{blogs.Contenido}</td>
                  <td className="user-data">{blogs.Fecha}</td>
                  <td>
                    <button
                      className="botones_admin_btn"
                      onClick={() => handleEdit(blogs)}
                    >
                      Editar
                    </button>
                  </td>
                  {blogs.ID_Articulo && (
                    <td>
                      <button
                        className="botones_admin_btn"
                        onClick={() => {
                          console.log(blogs.ID_Articulo);
                          handleDelete(blogs);
                        }}
                      >
                        Eliminar
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
};

export default CrudBlog;
