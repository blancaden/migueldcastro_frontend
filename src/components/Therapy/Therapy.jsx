// import React from 'react'
import "./Therapy.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container,Row, Col} from "react-bootstrap";


function Therapy() {
  return (
    <>
      <Container fluid className="therapy-container d-flex align-items-center">
        <div>
          <h1 className="m-5 therapy-h1">Terapia</h1>
        </div>
        <p>
          Todas las personas poseemos el potencial necesario para conseguir lo
          que nos propongamos, nacemos con él, pero a medida que crecemos, las
          experiencias de la vida nos generan capas que nos impide verlo.
        </p>
        <Row
          xs={1}
          md={2}
          lg={2}
          className="therapy-content flex-row justify-content-between align-items-center"
        >
          <Col md={7} lg={7} className="therapy-content-p">
            <p>
              Vivimos en una sociedad de la inmediatez, que nos genera{" "}
              <b>ansiedad</b> y <b>estrés</b>, que nos aleja de nosotras mismas
              y nos impide vivir en un estado de <b>felicidad</b>. Si te sientes
              encerrada, limitada, con angustia o con una necesidad de cambio,
              estás en el sitio adecuado, la vida te ha traído hasta aquí por
              algo. Podemos comenzar un proceso en el que quitar esas capas que
              te impiden ver tus alas de mariposa y volar.
            </p>
            <p>
              Desde niño, he estado siempre en la escucha, he sido pañuelo y
              sostén. He sentido que había algo dentro de mí que no encaja con
              lo externo. Han sido muchos años de trabajo para irme quitando mis
              capas hasta reconocerme. Llevo desde 2013 acompañando a personas,
              y he seguido formándome para integrar más herramientas que te
              ayudaran a quitar las tuyas, para conseguir tus objetivos y tus
              sueños.
            </p>
            <p>
              Me he formado en Terapia Gestalt, Teatro Terapéutico, Mindfulness,
              Gestión Emocional, Psicología Positiva, Coaching Sistémica,
              Constelaciones Familiares, Reiki. Todo forma parte de mi y es lo
              que te ofrezco en el acompañamiento. Eres única e irrepetible, por
              eso cada terapia se adapta a tus necesidades.
            </p>
          </Col>
          <Col xs={1} className="soyunaimagen">
            <div></div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Therapy