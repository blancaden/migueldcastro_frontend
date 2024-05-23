import  {Outlet} from "react-router-dom";
import NavBar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";


const LayoutPublic = () => {

        return (
          <>
            <NavBar />

            <Outlet />

            <Footer />
          </>
        );
    
    }

export default LayoutPublic;