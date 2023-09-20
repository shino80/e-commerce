import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/sidebar";
import "./app.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList/UserList";
import UserPage from "./pages/UserPage/UserPage";
import NewUser from './pages/NewUser/NewUser'
import Products from "./pages/Products/Product";
import Product from "./pages/Product/Product";
import NewProduct from "./pages/NewProduct/newProduct";
function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:userId" element={<UserPage />} />
          <Route path="/new-user" element={<NewUser/>} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<Product/>}/>
          <Route path="/new-product" element={<NewProduct/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
