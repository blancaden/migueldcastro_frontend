import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FormData.css";

const FormData = () => {
  const [users, setUsers] = useState([]);

  const handleDelete = async (user) => {
    const id = user.ID_Contacto;
    try {
      await axios.delete(`http://localhost:5000/contacto/remove`, {
        data: { ID_Contacto: id },
      });

      const response = await axios.get("http://localhost:5000/contacto");
      setUsers(response.data);
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
        const response = await axios.get("http://localhost:5000/contacto");
        setUsers(response.data);
      } catch (error) {
        console.error("Error al obtener los datos del servidor:", error);
      }
    };
    fetchAPI();
  }, []);

  return (
    <>
      <section className="user-table">
        <h1>Usuarios en contacto</h1>
        <table id="table_content_user">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Asunto</th>
              <th>Mensaje</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td className="contact-data">{user.ID_Contacto}</td>
                <td className="contact-data">{user.Nombre}</td>
                <td className="contact-data">{user.Email}</td>
                <td className="contact-data">{user.Asunto}</td>
                <td className="contact-data">{user.Mensaje}</td>
                <td>
                  <button
                    className="buttons_admin_btn"
                    onClick={() => handleDelete(user)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default FormData;
