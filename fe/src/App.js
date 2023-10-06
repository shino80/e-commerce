import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import Cart from "./pages/Cart";
import {BrowserRouter as Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector((state) => state.user.currentUser);
  const nagative = useNavigate();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;
