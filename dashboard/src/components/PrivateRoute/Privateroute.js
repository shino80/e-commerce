import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const userString = localStorage.getItem("persist:root");
  const user = userString ? JSON.parse(userString).user : null;
  
  const isAdmin =  user.currentUser.isAdmind;
  

  return isAdmin ? children : navigate('/login');
}

export default PrivateRoute;