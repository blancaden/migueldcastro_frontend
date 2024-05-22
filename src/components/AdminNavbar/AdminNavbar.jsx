
import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import "./AdminNavbar.css";


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
    <>
      <nav className="navbar">
        <ul className="navbar-list">
        <li>
          <button onClick={handleBackClick}>Cerrar Sesión</button>
          </li>
          <li>
            <Link to="/workshop" className="navbar-link">
              Talleres
            </Link>
          </li>
          <li>
            <Link to="/workshop/adminblog" className="navbar-link">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/workshop/adminform" className="navbar-link">
              Formulario
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default AdminNavbar;