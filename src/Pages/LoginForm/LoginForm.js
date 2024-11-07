import React, { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import "./LoginForm.css";

const LoginForm = ({ className = "" }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar senha
  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;

    if (!email) {
      toast.warn("O campo e-mail é obrigatório.");
      isValid = false;
    } else if (!email.includes("@")) {
      toast.warn("O e-mail deve conter '@'.");
      isValid = false;
    } else if (email.length < 5) {
      toast.warn("O e-mail deve conter pelo menos 4 caracteres.");
      isValid = false;
    }

    if (!password) {
      toast.warn("O campo senha é obrigatório.");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setLoading(true);
      sessionStorage.setItem("isAuthenticated", "true");
      toast.success(`Bem-vindo, ${email}!`);

      setTimeout(() => {
        setLoading(false);
        navigate("/home");
      }, 3000);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="blurred-box">
      <form className={`login-form ${className}`} onSubmit={handleSubmit}>
        <div className="wel">
          <div className="welcomeMessage">
            <h1 className="bemVindo">Bem Vindo!</h1>
          </div>
          <div className="digiteSeuEMail">
            <p>Digite seu e-mail e senha para entrar</p>
          </div>
        </div>
        <div className="email-field">
          <div className="email-label-wrapper">
            <b className="email">Email</b>
          </div>
          <div className="input-container">
            <input
              type="text"
              className="input-email"
              placeholder="Seu endereço de email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="password-field">
          <div className="password-label-wrapper">
            <b className="senha">Senha</b>
          </div>
          <div className="input-container">
            <input
              type={showPassword ? "text" : "password"} // Alterar type dinamicamente
              className="input-senha"
              placeholder="Sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="toggle-password-button"
            >
              <i className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
            </button>
          </div>
        </div>
        <div className="login-button">
          <button type="submit" className="buttonbase">
            <div className="text">Entrar</div>
          </button>
        </div>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  className: PropTypes.string,
};

export default LoginForm;
