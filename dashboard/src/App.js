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
function App() {
  return (
    <div className="App">
      {" "}
      <Topbar />
      <div className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<SidebarLayout />}>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  {" "}
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/users"
              element={
                <PrivateRoute>
                  <UserList />
                </PrivateRoute>
              }
            />
            <Route
              path="/users/:userId"
              element={
                <PrivateRoute>
                  <UserPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/new-user"
              element={
                <PrivateRoute>
                  <NewUser />
                </PrivateRoute>
              }
            />
            <Route
              path="/products"
              element={
                <PrivateRoute>
                  <Products />
                </PrivateRoute>
              }
            />
            <Route
              path="/products/:productId"
              element={
                <PrivateRoute>
                  <Product />
                </PrivateRoute>
              }
            />
            <Route
              path="/new-product"
              element={
                <PrivateRoute>
                  <NewProduct />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </div>
    </div>
  );
}
export default App;
