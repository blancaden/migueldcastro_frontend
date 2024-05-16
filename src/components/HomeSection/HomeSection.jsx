import React from 'react'
import { Link } from 'react-router-dom';
import './HomeSection.css';

const HomeSection = () => {
  return (
    <div className="main-container">

      <link href="https://fonts.googleapis.com/css2?family=Ovo&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Ovo&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />

      <div className='HomeSection-Header'>
        <div className='HomeSection-Title'>
          <h1>Miguel de Castro</h1>
          <h2>Acompañamiento terapéutico, igualdad y desarrollo personal </h2>

          <Link to="/contacto">
            <button>Contacto</button>
          </Link>
        </div>

        <img src="/img/Foto-Provisional-de-Miguel.svg" alt="Miguel de Castro" />
      </div>

      <img src="/img/Ondas.svg" alt="Ondas" />

      <div className='HomeSection-Services'>

        <div className='Therapy'>
          <Link to="/therapy">
            <img src="/img/Terapia-Icono.svg" alt="Terapia" />
          </Link>
          <h4>Terapia</h4>
          <p>La terapia es el acompañamiento a tu propio descubrir, déjame que te acompañe.</p>

          <Link to="/contacto">
            <button>Contacto</button>
          </Link>

        </div>

        <div className='Coaching'>
          <Link to="/coaching">
            <img src="/img/Coaching-Icono.svg" alt="Coaching" />
          </Link>
          <h4>Coaching</h4>
          <p>Cada paso es una meta, cada avance es un logro en tu camino hacia el objetivo.</p>

          <Link to="/contacto">
            <button>Contacto</button>
          </Link>

        </div>

        <div className='Workshop'>
          <Link to="/workshop">
            <img src="/img/Talleres-Icono.svg" alt="Talleres" />
          </Link>
          <h4>Talleres</h4>
          <p>Sumérgete en nuestros talleres para aprender y crecer juntos.</p>

          <Link to="/contacto">
            <button>Contacto</button>
          </Link>

        </div>

        <div className='Equality'>
          <Link to="/equality">
            <img src="/img/Igualdad-Icono.svg" alt="Igualdad" />
          </Link>
          <h4>Igualdad</h4>
          <p>Explora el mundo de la terapia sistémica y su poder transformador.</p>

          <Link to="/contacto">
            <button>Contacto</button>
          </Link>

        </div>
      </div>

      <img src="/img/Ondas.svg" alt="Ondas" />

      <div className='HomeSection-KnowMe'>
        <h3>Desde  mi adolescencia he creído en el potencial que cada uno de nosotros  lleva dentro. Como seres humanos somos completos y, por lo tanto,  capaces de hacer todo aquello que nos proponemos.</h3>
        <p>Desde 2019 soy cofundador del Centro Vive, un centro dedicado al Desarrollo Personal, pensado en generar un espacio donde poder acompañarte. Toda experiencia vivida hasta hoy me ha llevado a este presente, a este momento que me gustaría compartir contigo.
        </p>
        <img src="/img/Mariposa-naranja.svg" alt="Mariposa" />
        <Link to="/sobremi">
          <button>Conóceme más</button>
        </Link>
      </div>

      <img className='knowme-img' src="/img/Foto-Provisional-de-Miguel.svg" alt="Miguel de Castro" />


    </div>
  )
}

export default HomeSection