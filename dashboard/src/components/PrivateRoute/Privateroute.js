import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const nagative = useNavigate();
    const admin = JSON.parse(
        JSON.parse(localStorage.getItem("persist:root")).user
      ).currentUser.isAdmind;    
    return admin ? children : nagative('/login');
  }

export default PrivateRoute;