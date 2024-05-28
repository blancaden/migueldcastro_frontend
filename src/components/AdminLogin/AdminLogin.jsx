import React, { useState } from 'react';
import './AdminLogin.css'

const AdminLogin = ({ onLogin, onLogout, isAuthenticated }) => {
  const [Nombre, setNombre] = useState('');
  const [Contraseña, setContraseña] = useState('');
 
  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };
  const handleContraseñaChange = (event) => {
    setContraseña(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
 
    onLogin({ Nombre, Contraseña });
  
    setNombre('');
    setContraseña('');
  }

  return (
    <>
    <div className="container-gralformLogin">
      {!isAuthenticated ? (
        <div className='container-formlgn'>
          <form className="content-form" onSubmit={handleSubmit}>
          <label id="labl-user">Usuario:</label>
            <div className="input-group1">
              <input id="input-name"
                type="text"
                value={Nombre}
                onChange={handleNombreChange}
                required
              />
            </div>
            <label id="labl-pw">Contraseña:</label>
            <div  className="input-group2">
              <input id="input-pw"
                type="password"
                value={Contraseña}
                onChange={handleContraseñaChange}
                required
              />
            </div>
            <div>
            <button className='iniciar-sesionbtn' type="submit">Iniciar Sesión</button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <button onClick={onLogout}>Cerrar sesión</button>
        </div>
      )}
       <div className="image-container">
            <img src="public/img/Logomariposa 1.png " alt="Imagen" className="login-image" />
       </div>
    </div>
    </>
  );
};

export default AdminLogin;


























































// import React, { useState } from 'react';

// const AdminLogin = ({ onLogin }) => {
//   const [Nombre, setNombre] = useState('');
//   const [Contraseña, setContraseña] = useState('');
 

//   const handleNombreChange = (event) => {
//     setNombre(event.target.value);
//   };

//   const handleContraseñaChange = (event) => {
//     setContraseña(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Llama a la función onLogin pasando los datos de inicio de sesión
//     onLogin({ Nombre, Contraseña });
//     // También puedes restablecer los campos del formulario después de enviarlos
//     setNombre('');
//     setContraseña('');
//   };

//   return (
//     <div>
//       <h1>Iniciar Sesión</h1>
     
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Nombre:</label>
//           <input
//             type="text"
//             value={Nombre}
//             onChange={handleNombreChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Contraseña:</label>
//           <input
//             type="password"
//             value={Contraseña}
//             onChange={handleContraseñaChange}
//             required
//           />
//         </div>
//         <button type="submit">Iniciar sesión</button>
//       </form>
   
//     </div>
//   );
// };

// export default AdminLogin;
