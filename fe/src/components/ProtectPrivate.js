import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const PrivateRoute = ({ children }) => {
  const nagative = useNavigate();
  const user = useSelector((state) => state.user.currentUser);
  return user ? children : nagative("/login");
};

export default PrivateRoute;
