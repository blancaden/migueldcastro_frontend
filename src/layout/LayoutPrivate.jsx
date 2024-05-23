import {Outlet} from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar/AdminNavbar";


const LayoutPrivate = ()  => {
    const handleLogout = () => {
        // Lógica para cerrar la sesión del usuario
        // Por ejemplo:
        // 1. Eliminar el token de autenticación del almacenamiento local
        localStorage.removeItem('token');
        // 2. Marcar al usuario como no autenticado (si es necesario)
        setIsLoggedIn(false);
        // 3. Redirigir al usuario a la página de inicio de sesión u otra página deseada
        history.push('/login'); // Si estás usando React Router y tienes acceso a history
    };

        return(
            <>
              
                <AdminNavbar/>
                
                <Outlet/> 

            
            </>
    
        )
    
    }

export default LayoutPrivate;