import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCall";
import { useNavigate } from "react-router-dom";
import "./login.css";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const nagative = useNavigate()
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    nagative('/products')
  };
  return (
    <div className="login">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
