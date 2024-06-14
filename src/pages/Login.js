import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const { username, password } = values;
  const navigate = useNavigate()

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    if (!username && !password) {
      alert("username and password is required");
    } else if (!username) {
      alert("username is required");
    } else if (!password) {
      alert("password is required");
    }

    try {
      fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
          expiresInMins: 30,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          localStorage.setItem("token", result?.token);
          navigate('/dashboard')
        });
    } catch (error) {
      console.log(error,'error');
    }
  };

  return (
    <div class="login-container">
      <input
        type="text"
        value={username}
        name="username"
        placeholder="Username"
        onChange={handleChange}
      />
      <input
        type="password"
        value={password}
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <button className="btn-primary" onClick={handleClick}>
        Login
      </button>
    </div>
  );
};

export default Login;
