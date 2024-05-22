import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ContactForm.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const ContactForm = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    Nombre: "",
    Email: "",
    Mensaje: "",
    Asunto: "",
  });

  const [errors, setErrors] = useState({
    Nombre: "",
    Email: "",
    Mensaje: "",
    Asunto: "",
  });

  const clearForm = () => {
    setFormData({
      Nombre: "",
      Email: "",
      Mensaje: "",
      Asunto: "",
    });
    setErrors({
      Nombre: "",
      Email: "",
      Mensaje: "",
      Asunto: "",
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? "" : "Email no es válido";
  };

  const validateRequired = (value) => {
    return value.trim() === "" ? "Este campo es obligatorio" : "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    let error = "";
    if (name === "Email") {
      error = validateEmail(value);
    } else {
      error = validateRequired(value);
    }
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmitCreate = async (e) => {
    e.preventDefault();

    const newErrors = {
      Nombre: validateRequired(formData.Nombre),
      Email: validateEmail(formData.Email),
      Mensaje: validateRequired(formData.Mensaje),
      Asunto: validateRequired(formData.Asunto),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error !== "")) {
      return;
    }

    const user = {
      Nombre: formData.Nombre,
      Email: formData.Email,
      Mensaje: formData.Mensaje,
      Asunto: formData.Asunto,
    };
    try {
      await axios.post(`http://localhost:5000/contacto/create`, user);

      const response = await axios.get("http://localhost:5000/contacto");
      setUsers(response.data);

      clearForm();
    } catch (error) {
      console.error(
        "Error al enviar la solicitud de creación al servidor:",
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
      <div className="contact-page">
        <div className="text-content">
          <h2 className="highlighted-heading">Dime</h2>
          <p>
            Ya has dado el primer paso, todo nuevo camino comienza así. Lo mejor
            es que podamos contactar, rellena tus datos y me pondré en contacto
            contigo en la mayor brevedad posible o mándame un Whatsapp, usa el
            medio que encuentres más cómodo.
          </p>
        </div>
        <div className="contact-container">
          <div className="contact-formUser">
            <Box
              component="form"
              sx={{
                "& > div": {
                  marginBottom: "6rem",
                  "&:not(:last-child)": {
                    marginBottom: "3rem",
                  },
                },
              }}
              noValidate
              autoComplete="off"
            >
              <div className="formUser-name">
                <TextField
                  id="standard-basic"
                  label="Nombre"
                  name="Nombre"
                  variant="standard"
                  sx={{ width: "80%" }}
                  onChange={handleChange}
                  value={formData.Nombre}
                  error={!!errors.Nombre}
                  helperText={errors.Nombre}
                />
              </div>
              <div className="formUser-email">
                <TextField
                  id="standard-basic"
                  label="Email"
                  name="Email"
                  variant="standard"
                  sx={{ width: "80%" }}
                  onChange={handleChange}
                  value={formData.Email}
                  error={!!errors.Email}
                  helperText={errors.Email}
                />
              </div>
              <div className="formUser-title">
                <TextField
                  id="standard-basic"
                  label="Asunto"
                  name="Asunto"
                  variant="standard"
                  sx={{ width: "80%" }}
                  onChange={handleChange}
                  value={formData.Asunto}
                  error={!!errors.Asunto}
                  helperText={errors.Asunto}
                />
              </div>
              <div className="formUser-message">
                <TextField
                  id="standard-basic"
                  label="Mensaje"
                  name="Mensaje"
                  variant="standard"
                  sx={{ width: "90%" }}
                  onChange={handleChange}
                  value={formData.Mensaje}
                  error={!!errors.Mensaje}
                  helperText={errors.Mensaje}
                />
              </div>
            </Box>
            <Button
              variant="outlined"
              size="small"
              style={{
                color: "#9D7D79",
                borderColor: "#E3AAB6",
                borderRadius: "20px",
                padding: "10px 20px",
                fontFamily: "'poppins', sans-serif",
              }}
              onClick={handleSubmitCreate}
            >
              Enviar
            </Button>
          </div>
          <div className="social-media">
            <div style={{ display: "flex", alignItems: "center" }}>
              <PlaceIcon fontSize="large" sx={{ color: "#F06D7D" }} />
              <p style={{ marginLeft: "10px" }}>
                Calle Palas Atenea, 31 Almería
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <WhatsAppIcon fontSize="large" sx={{ color: "#F06D7D" }} />
              <p style={{ marginLeft: "10px" }}>+34 675 281 352</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <EmailIcon fontSize="large" sx={{ color: "#F06D7D" }} />
              <p style={{ marginLeft: "10px" }}>dime@migueldecastro.org</p>
            </div>
            <img
              src="public/Logomariposa1.svg"
              alt=""
              style={{ width: "300px", height: "300px", marginTop: "20px" }}
            />
          </div>
        </div>
        <div className="deco-butterfly">
          <img
            src="public/MariposaLogo.svg"
            alt=""
            style={{ width: "200px", height: "200px" }}
          />
        </div>
      </div>
    </>
  );
};

export default ContactForm;
