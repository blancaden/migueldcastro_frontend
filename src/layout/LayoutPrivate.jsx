import {Outlet} from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar/AdminNavbar";


const LayoutPrivate = () => {

        return(
            <>
                <AdminNavbar/>
                <Outlet/> 
            </>
    
        )
    
    }

export default LayoutPrivate;