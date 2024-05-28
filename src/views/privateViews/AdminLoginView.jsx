import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import AdminLogin from '../../components/AdminLogin/AdminLogin';
import axios from 'axios'; 
import './AdminLoginView.css'

const AdminLoginView = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (userData) => {
   
    try {
     
      const response = await axios.post('http://127.0.0.1:5000/api/login', userData);
  
      
      if (response.data.token) {
        
        setIsLoggedIn(true);
        
        localStorage.setItem('token', response.data.token);
        setError('');
      } else {
        
        setError('Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      
      setError('Usuario o contraseña incorrectos. Inténtalo de nuevo.');
    }
  };

  const handleLogout = () => {
    
    axios.post('http://127.0.0.1:5001/api/logout', null, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }).then(() => {
      
      localStorage.removeItem('token');
      
      setIsLoggedIn(false);
      
    }).catch(error => {
      console.error('Error al cerrar sesión:', error);
      
    });
  };


  if (isLoggedIn) {
    return <Navigate to="/workshop" />;
  }

  return (
    <div className='msj-error-red'>
      
      <AdminLogin onLogin={handleLogin} />
      {error && <p className='error-message'>{error}</p>}
    </div>
  );
};

export default AdminLoginView;


















































// import React, { useState } from 'react';
// import { Navigate } from 'react-router-dom';
// import AdminLogin from '../../components/AdminLogin/AdminLogin';
// import axios from 'axios'; // Importa axios para realizar solicitudes HTTP

// const AdminLoginView = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [error, setError] = useState('');

//   const handleLogin = async (userData) => {
   
//     try {
//       // console.log("Datos de inicio de sesión enviados:", userData);
//       // Realiza una solicitud POST al endpoint de inicio de sesión del backend
//       const response = await axios.post('http://127.0.0.1:5000/api/login', userData);
  
//       // Si la solicitud es exitosa y se recibe un token de autenticación
//       if (response.data.token) {
//         // Marca al usuario como autenticado
//         setIsLoggedIn(true);
//         // Guarda el token de autenticación en el almacenamiento local
//         localStorage.setItem('token', response.data.token);
//         setError('');
//       } else {
//         // Si no se recibe un token de autenticación, muestra un mensaje de error al usuario
//         // console.error('Inicio de sesión fallido: Credenciales inválidas');
//         setError('Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
      
//       }
//     } catch (error) {
//       // Si ocurre algún error durante la solicitud, muestra un mensaje de error al usuario
//       // console.error('Error al iniciar sesión:', error);
//       setError('Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
//     }
//   };

//   if (isLoggedIn) {
//     return <Navigate to="/workshop" />;
//   }

//   return (
//     <div>
//       <h1>Hola Miguel, este es el home</h1>
//       <AdminLogin onLogin={handleLogin} />
//       {error && <p style={{ color: 'red' }}>{error}</p>} {/* Muestra el mensaje de error en rojo */}
//     </div>
//   );
// };;

// export default AdminLoginView;




































//2DA PRUEBA IMPORTANDO USEAUTH, PERO ME DA ERROR.
// import React, { useState } from 'react';
// import { Navigate } from 'react-router-dom';
// import AdminLogin from '../../components/AdminLogin/AdminLogin';
// import axios from 'axios'; // Importa axios para realizar solicitudes HTTP
// import { useAuth } from '../../authUtils/AuthProvider'; // Importa el hook useAuth para acceder al contexto de autenticación



// const AdminLoginView = () => {
//   const [error, setError] = useState('');
//   const { login } = useAuth(); // Obtiene la función login del contexto de autenticación

//   const handleLogin = async (userData) => {
//     try {
//       // Realiza una solicitud POST al endpoint de inicio de sesión del backend
//       const response = await axios.post('http://127.0.0.1:5000/api/login', userData);
  
//       // Si la solicitud es exitosa y se recibe un token de autenticación
//       if (response.data.token) {
//         // Llama a la función login proporcionada por el contexto de autenticación para actualizar el estado de autenticación
//         login(response.data); // Suponiendo que response.data contiene los datos de usuario, incluido el token
//         setError('');
//       } else {
//         // Si no se recibe un token de autenticación, muestra un mensaje de error al usuario
//         setError('Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
//       }
//     } catch (error) {
//       // Si ocurre algún error durante la solicitud, muestra un mensaje de error al usuario
//       setError('Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
//     }
//   };

//   // Si el usuario está autenticado, redirige a la página de /workshop
//   if (isLoggedIn) {
//     return <Navigate to="/workshop" />;
//   }

//   return (
//     <div>
//       <AdminLogin onLogin={handleLogin} />
//       {error && <p style={{ color: 'red' }}>{error}</p>} {/* Muestra el mensaje de error en rojo */}
//     </div>
//   );
// };

// export default AdminLoginView;



































































































// import React, { useState } from 'react';
// import { Navigate } from 'react-router-dom'; // Importa el componente Navigate
// import AdminLogin from '../../components/AdminLogin/AdminLogin';

// const AdminLoginView = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para verificar si el usuario ha iniciado sesión

//   // Función para manejar el inicio de sesión
//   const handleLogin = (userData) => {
//     // Lógica para iniciar sesión, como enviar una solicitud a la API
//     console.log('Datos de inicio de sesión:', userData);

//     // Marca al usuario como autenticado
//     setIsLoggedIn(true);
//   };

//   // Si el usuario ha iniciado sesión, redirige a la ruta /workshop
//   if (isLoggedIn) {
//     return <Navigate to="/workshop" />;
//   }

//   // Si el usuario no ha iniciado sesión, renderiza el componente AdminLogin
//   return <AdminLogin onLogin={handleLogin} />;
// };

// export default AdminLoginView;




























// import React from 'react';
// import AdminLogin from '../../components/AdminLogin/AdminLogin';

// const AdminLoginView = () => {
//   // Función para manejar el inicio de sesión
//   const handleLogin = (userData) => {
//     // Lógica para iniciar sesión, como enviar una solicitud a la API
//     console.log('Datos de inicio de sesión:', userData);
//   };

//   return (
//     <AdminLogin onLogin={handleLogin} />
//   );
// };

// export default AdminLoginView;








// import React from 'react'
// import AdminLogin from '../../components/AdminLogin/AdminLogin'

// const AdminLoginView = () => {
//   return (
//     <AdminLogin/>
//   )
// }

// export default AdminLoginView