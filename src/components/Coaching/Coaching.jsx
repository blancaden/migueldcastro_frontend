// import React from 'react'
import "./Coaching.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function Coaching() {
  return (
    <>
      <Container fluid className="coaching-container d-flex align-items-center">
        <div>
          <h1 className="m-5 coaching-h1">Coaching</h1>
        </div>
        <div className="d-flex">
          <img
            src=""
            alt=""
            width="230px"
            height="230px"
            className="soyunaimagen"
          />
          <div className="w-75 ms-5">
            <h3>Individual</h3>
            <p>
              Toda acción comienza con un primer paso, cada uno que das es ya de
              por si una meta, un logro, ya tienes hecho parte de tu objetivo,
              ¿lo ves?, puedo acompañarte a visualizarlo, a que emprendas las
              acciones necesarias para que sea una realidad, ¿me lo permites? Es
              tu momento.
            </p>
            <button className="btn-info">
              <i className="bi bi-plus"></i>Información
            </button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Coaching;
