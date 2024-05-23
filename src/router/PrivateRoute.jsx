// // PrivateRoute.jsx
// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from '../authUtils/AuthProvider'; // Asegúrate de que esta ruta sea correcta

// const PrivateRoute = ({ children }) => {
//   const { isAuthenticated } = useAuth(); // Asegúrate de que useAuth esté correctamente implementado
//   console.log('IsAuthenticated: EXITOSOOOO', isAuthenticated);  
//   return isAuthenticated? children : <Navigate to="/login" replace />;
// };

// export default PrivateRoute;





























// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import { useAuth } from '../authUtils/AuthProvider'; // Usamos un contexto de autenticación
// import LayoutPrivate from '../layout/LayoutPrivate';// Asegúrate de que la ruta de importación sea correcta

// const PrivateRoute = ({ path, element }) => {
//   const { isAuthenticated, user } = useAuth(); // Obtener el estado de autenticación del contexto de autenticación que hemos creado

//   return isAuthenticated? (
//     <Route path={path} element={<LayoutPrivate/>} /> // Corrección aquí: envuelve LayoutPrivate con un elemento React
//   ) : (
//     <Navigate to="/login" replace state={{ from: path }} /> // Redirigir a la página de inicio de sesión si el usuario no está autenticado
//   );
// };

// export default PrivateRoute;




























// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import { useAuth } from '../authUtils/AuthProvider'; // Usamos un contexto de autenticación

// const PrivateRoute = ({ path, element }) => {
//   const { isAuthenticated, user } = useAuth(); // Obtener el estado de autenticación del contexto de autenticación que hemos creado

//   return isAuthenticated ? (
//     <Route path={path} element={LayoutPrivate} />
//   ) : (
//     <Navigate to="/login " replace state={{ from: path }} /> // Redirigir a la página de inicio de sesión si el usuario no está autenticado
//   );
// };

// export default PrivateRoute;












