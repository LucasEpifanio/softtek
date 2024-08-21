import React from "react";
import LoginForm from "./Pages/LoginForm/LoginForm";
import "./styles/Login.css";
import loginImage from "./img/img-login.png";
import logoImage from "./img/Logo.svg";

const Login = () => {
  return (
    <div className="login">
      <img className="backgroundItem" alt="Login Background" src={loginImage} />
      <div className="softtek">
        <img className="softtek1" src={logoImage} />
      </div>
      <div className="form-container">
        <div className="login-form-container">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;