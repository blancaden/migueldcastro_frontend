import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <>
     <nav>
      <ul>
        
        <li><Link to="/workshop">Talleres</Link></li>
        <li><Link to="/workshop/adminblog">Blog</Link></li>
        <li><Link to="/workshop/adminform">Formulario</Link></li>

      </ul>
    </nav>
    </>
  )
}

export default AdminNavbar