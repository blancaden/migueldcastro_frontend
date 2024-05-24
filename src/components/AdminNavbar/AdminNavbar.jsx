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
      <nav className="navbar-adminpage">
        <ul className="navbar-list-adminpage">
          <li>
            <Link onClick={handleBackClick} className="navbar-link-adminpage">
              Cerrar Sesión
            </Link>
          </li>
          <li>
            <Link to="/workshop" className="navbar-link-adminpage">
              Talleres
            </Link>
          </li>
          <li>
            <Link to="/workshop/adminblog" className="navbar-link-adminpage">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/workshop/adminform" className="navbar-link-adminpage">
              Formulario
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default AdminNavbar;