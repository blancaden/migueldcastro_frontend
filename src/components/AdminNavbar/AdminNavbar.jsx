import React from 'react'
import { Link } from 'react-router-dom'
import "./AdminNavbar.css";

const AdminNavbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list">
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

export default AdminNavbar