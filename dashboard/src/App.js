import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import { Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./pages/Home/Home";
import UserList from "./pages/UserList/UserList";
import UserPage from "./pages/UserPage/UserPage";
import Products from "./pages/Products/Product";
import Product from "./pages/Product/Product";
import NewProduct from "./pages/NewProduct/newProduct";
import NewUser from "./pages/NewUser/NewUser";
import PrivateRoute from "./components/PrivateRoute/Privateroute";
import SideBar from "./components/SidebarLayOut/SideBarLay";
import SidebarLayout from "./components/SidebarLayOut/SideBarLay";
import { useSelector } from "react-redux";
function App() {
  const admin = useSelector((state) => state.user.currentUser?.isAdmind);

  return (
    <div className="App">
      {" "}
      <Topbar />
      <div className="container">

        <Routes>
        <Route path="/login" element={<Login />} />

          {admin && (
            <Route element={<SidebarLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/users/:userId" element={<UserPage />} />
              <Route path="/new-user" element={<NewUser />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:productId" element={<Product />} />
              <Route path="/new-product" element={<NewProduct />} />
            </Route>
          )}
        </Routes>
      </div>
    </div>
  );
}
export default App;
