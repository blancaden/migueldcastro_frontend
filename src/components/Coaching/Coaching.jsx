// import React from 'react'
import "./Coaching.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function Coaching() {
  return (
    <>
      <Container fluid>
        <div className="coaching-container d-flex align-items-center py-5">
          <div>
            <h1 className="m-5 coaching-h1">Coaching</h1>
          </div>
          <div>
            <div className="coaching-content d-flex align-items-center">
              <img
                src=""
                alt=""
                width="230px"
                height="230px"
                className="soyunaimagen"
              />
              <div className="w-75 ps-5">
                <h3>Individual</h3>
                <p>
                  Toda acción comienza con un primer paso, cada uno que das es
                  ya de por si una meta, un logro, ya tienes hecho parte de tu
                  objetivo, ¿lo ves?, puedo acompañarte a visualizarlo, a que
                  emprendas las acciones necesarias para que sea una realidad,
                  ¿me lo permites? Es tu momento.
                </p>
                <button className="btn-info">
                  <i className="bi bi-plus"></i>Información
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="coaching-container d-flex align-items-center py-5">
          <div>
            <div className="coaching-content d-flex align-items-center">
              <img src="" alt="" className="soyunaimagen" />
              <div className="w-75 ps-5">
                <h3>Empresarial</h3>
                <p>
                  Las personas son el activo principal de las empresas.
                  Humanizarlas fortalece su base, y trabajar con los equipos
                  amplía su alcance. Ofrezco una metodología basada en CORAOPS,
                  una metacompetencia aplicable a equipos de alto rendimiento,
                  respaldada por mi experiencia en grupos, el enfoque sistémico
                  y la terapia Gestalt. Esto crea un vínculo duradero entre
                  empleado, equipo y empresa. Estoy disponible para discutir un
                  proyecto adaptado a las necesidades de tu empresa.
                </p>
                <button className="btn-info">
                  <i className="bi bi-plus"></i>Información
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Coaching;
