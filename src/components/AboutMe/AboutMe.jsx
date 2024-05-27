// import React from 'react'
import "./AboutMe.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function AboutMe() {
  return (
    <>
      <Container fluid className="aboutme-container d-flex align-items-center">
        <div>
          <h1 className="m-5 aboutme-h1">Sobre mi</h1>
        </div>
        <div className="d-flex flex-md-row flex-sm-column justify-content-between my-4">
          <div className="aboutme-content-p col-lg-7 col-md-7 col-sm-12">
            <h2>¿Crees que ha llegado tu momento?</h2>
            <p>
              Mi visión eres tú, como persona, como ser humano. Creo firmemente
              en que todos nacemos bajo un mismo paraguas y que por lo tanto
              nuestros potenciales son los mismos. Acompañarte en el proceso de
              tu propio descubrir, en tu desarrollo personal.
            </p>
            <p>
              Tras una larga experiencia en el sector empresarial empecé en 2012
              en el mundo del desarrollo personal con dos metas claras, mi
              propio trabajo interno de crecimiento y prepararme para poder
              acompañarte en el tuyo. Me formé en:
            </p>
          </div>
          <div className="aboutme-list-container col-lg-5 col-md-5 col-sm-12 d-flex justify-content-end">
            <ul className="list-content">
              <li>Coaching</li>
              <li>PersonalCoaching sistémico</li>
              <li>Programación Neurolingüística</li>
              <li>Terapia Gestalt</li>
              <li>Mindfulness</li>
              <li>Gestión Emocional</li>
              <li>Psicología Positiva</li>
              <li>Teatro Terapéutico</li>
              <li>Crecimiento Interior</li>
              <li>Expresión Corporal. </li>
            </ul>
          </div>
        </div>
        <div className="studies-and-courses-container">
          <h2 className="p-studies m-4">Estudios:</h2>
          <ul className="list-content m-0 p-0">
            <li>
              Master en Agente de Igualdad por el Instituto superior de estudios
              empresariales, avalado por la Universidad Nebrija y la Universidad
              a distancia de Madrid
            </li>
          </ul>
          <div>
            <h2 className="p-courses m-4">Cursos:</h2>
            <div className="d-flex">
              <ul className="list-content m-0 p-0 list-courses">
                <li>
                  Intervención social con enfoque de género para el
                  voluntariado: conceptos básicos. (Fundación Mujeres. 20h)
                </li>
                <li>
                  El plan de igualdad en una empresa: elaboración, implantación,
                  seguimiento y evaluación. 1ª edición 2024 (IAM. 40h)
                </li>
                <li>
                  Masculinidades Corresponsables e intervención con hombres.
                  (Men Engage Iberia. 30h)
                </li>
                <li>
                  Prevención e intervención de conductas de riesgo en
                  adolescentes. (Uned. 15h)
                </li>
                <li>
                  La violencia de género. Aproximación desde un enfoque basado
                  en el trauma. (Uned. 20h)
                </li>
                <li>
                  Segregación Vertical y Horizontal en el ámbito laboral. 1ª
                  edición 2024. (IAM. 25h)
                </li>
                <li>
                  Masculinidades positivas: Reinventando los roles
                  tradicionales. (Asociación Victoria Kent. 30h)
                </li>
              </ul>
              <div className="d-flex align-items-end">
                <img
                  src="src\assets\aboutme-photo1.svg"
                  alt=""
                  className="aboutme-photo1"
                />
              </div>
            </div>
          </div>
        </div>
        <a href="/contacto" className="aboutme-btn my-5">
          Contacto
        </a>
      </Container>
    </>
  );
}

export default AboutMe