// import React from 'react'
import "./Equality.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";


function Equality() {
  return (
    <>
      <Container fluid className="equality-container d-flex align-items-center">
        <div>
          <h1 className="m-5 equality-h1">Igualdad</h1>
        </div>
        <h2>Que la Igualdad sea la base en la que se sustenta la sociedad</h2>
        <div className="d-flex flex-row justify-content-between align-items-center">
          <div className="equality-content-p">
            <p>
              No concibo una sociedad que no esté basada en la <b>Igualdad</b>,
              en la no <b>discriminación</b>. Mi implicación no cesará hasta que
              no sea efectiva y real. Hombres y mujeres, como personas,{" "}
              <b>como seres humanos</b>, de la mano.
            </p>
            <p>
              Trabajo con IES, Familias, Ayuntamientos, ONGs, Asociaciones, IAM,
              ofreciendo charlas, talleres y cursos, adaptándolos a sus
              <b>necesidades</b> particulares.
            </p>
            <p>
              Entender lo profundas que son las raíces del <b>patriarcado</b> es
              fundamental para poder combatirlo, por eso no dejo de asistir a
              jornadas y congresos en aras de seguir aprendiendo y sigo
              formándome a través de cursos.
            </p>
          </div>
          <div className="soyunaimagen"></div>
        </div>
        <div>
          <h2 className="mt-5">Charlas, Talleres y Cursos impartidos:</h2>
        </div>
        <div className="d-flex flex-row">
          <ul className="list-content">
            <li>Un viaje por la Igualdad</li>
            <li>Masculinidad vs Feminidad. ¿El género nos divide?</li>
            <li>Hackathon Igualdad</li>
            <li>Comunicación Afectiva</li>
            <li>
              Escuela de familia: Qué hacer para que tus hijos te escuchen
            </li>
          </ul>
          <ul className="list-content">
            <li>Corresponsabilidad</li>
            <li>La implicación del hombre en los procesos igualitarios.</li>
            <li>Nueva masculinidad</li>
            <li>Relaciones saludables</li>
            <li>Emprendimiento e igualdad</li>
          </ul>
        </div>
      </Container>
    </>
  );
}

export default Equality