import React from 'react'
import { Link } from 'react-router-dom';

const HomeSection = () => {
  return (
    <>
      <div className='HomeSection-Header'>
        <h1>Miguel de Castro</h1>
        <h2>Acompañamiento terapéutico, igualdad y desarrollo personal </h2>

        <Link to="/contacto">
          <button>Contacto</button>
        </Link>
      </div>

      <div className='HomeSection-Services'>

        <div className='Therapy'>
          <Link to="/terapia">
            <img src={imagen} alt="Terapia-Icono"/>
          </Link>
          <h4>Terapia</h4>
          <p>La terapia es el acompañamiento a tu propio descubrir, déjame que te acompañe.</p>

          <Link to="/contacto">
            <button>Contacto</button>
          </Link>

        </div>

        <div className='Coaching'>
          <Link to="/coaching">
            <img src={imagen} alt="Coaching-Icono"/>
          </Link>
          <h4>Coaching</h4>
          <p>Cada paso es una meta, cada avance es un logro en tu camino hacia el objetivo.</p>

          <Link to="/contacto">
            <button>Contacto</button>
          </Link>

        </div>

        <div className='Workshop'>
          <Link to="/talleres">
            <img src={imagen} alt="Talleres-Icono"/>
          </Link>
          <h4>Talleres</h4>
          <p>Sumérgete en nuestros talleres para aprender y crecer juntos.</p>

          <Link to="/contacto">
            <button>Contacto</button>
          </Link>

        </div>

        <div className='Equality'>
          <Link to="/igualdad">
            <img src={imagen} alt="Igualdad-Icono"/>
          </Link>
          <h4>Igualdad</h4>
          <p>Explora el mundo de la terapia sistémica y su poder transformador.</p>

          <Link to="/contacto">
            <button>Contacto</button>
          </Link>

        </div>

        <div className='HomeSection-KnowMe'>
          <h3>Desde  mi adolescencia he creído en el potencial que cada uno de nosotros  lleva dentro. Como seres humanos somos completos y, por lo tanto,  capaces de hacer todo aquello que nos proponemos.</h3>
          <p>Desde 2019 soy cofundador del Centro Vive, un centro dedicado al Desarrollo Personal, pensado en generar un  espacio donde poder acompañarte. Toda experiencia vivida hasta hoy me ha llevado a este presente, a este momento que me gustaría compartir contigo.
          </p>
          <Link to="/sobremi">
            <button>Conóceme más</button>
          </Link>
        </div>

      </div>
    </>
  )
}

export default HomeSection