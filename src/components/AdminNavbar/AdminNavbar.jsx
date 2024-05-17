// prueba funciona

import React from 'react';
import { Link, useNavigate} from 'react-router-dom';


const AdminNavbar = ({ onLogout }) => {
  const navigate = useNavigate(); // Llama a useNavigate aquí

  const handleLogout = () => {
    // Llama a la función onLogout para cerrar la sesión del usuario
    onLogout();
  };

  const handleBackClick = () => {
    navigate('/login'); // Redirige a la página principal
  };

  return (
    <nav>
      <ul>
        <li><Link to="/workshop">Talleres</Link></li>
        <li><Link to="/workshop/adminblog">Blog</Link></li>
        <li><Link to="/workshop/adminform">Formulario</Link></li>
        <li><button onClick={handleBackClick}>Cerrar Sesión</button></li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;


























































//FUNCIONA, PERO SIN CERRAR SESIÓN
// import React from 'react'
// import { Link } from 'react-router-dom'

// const AdminNavbar = ({ onLogout }) => {
//   const handleLogout = () => {
//     // Llama a la función onLogout para cerrar la sesión del usuario
//     onLogout();
//   };

//   return (
//     <>
//      <nav>
//       <ul>
        
//         <li><Link to="/workshop">Talleres</Link></li>
//         <li><Link to="/workshop/adminblog">Blog</Link></li>
//         <li><Link to="/workshop/adminform">Formulario</Link></li>
//         <li><button onClick={handleLogout}>Cerrar sesión</button></li>
//       </ul>
//     </nav>
    
//     </>
//   )
// }

// export default AdminNavbar