import  {Outlet, useLocation} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


const LayoutPublic = () => {
  const location = useLocation();
  const hideFooter = location.pathname === "/login";
        return (
          <>
            <Navbar />
            
            <Outlet />

         
            {!hideFooter && <Footer />}
          </>
        );
      
    
    }

export default LayoutPublic;