import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import Cart from "./pages/Cart";

import { Routes, Route, Navigate } from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import PrivateRoute from "./components/ProtectPrivate";
function App() {
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
