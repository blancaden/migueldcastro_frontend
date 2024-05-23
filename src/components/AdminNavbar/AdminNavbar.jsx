import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import "./AdminNavbar.css";


const AdminNavbar = ({ onLogout }) => {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    onLogout();
  };

  const handleBackClick = () => {
    navigate('/login'); 
  };

  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list">
          <li>
            <Link onClick={handleBackClick} className="navbar-link">
              Cerrar Sesión
            </Link>
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