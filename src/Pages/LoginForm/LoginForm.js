import React, { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader"; // Importa o Loader
import "./LoginForm.css";

const LoginForm = ({ className = "" }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Estado de carregamento
  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;

    if (!email) {
      toast.warn("O campo e-mail é obrigatório.");
      isValid = false;
    } else if (!email.includes("@")) {
      toast.warn("O e-mail deve conter '@'.");
      isValid = false;
    } else if (email.length < 4) {
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
      setLoading(true); // Ativa o estado de carregamento
      sessionStorage.setItem("isAuthenticated", "true");
      toast.success(`Bem-vindo, ${email}!`);

      setTimeout(() => {
        setLoading(false); // Desativa o estado de carregamento
        navigate("/home");
      }, 3000); // Simula um tempo de processamento de 3 segundos
    }
  };

  if (loading) {
    return <Loader />; // Renderiza o loader se estiver carregando
  }

  return (
    <div class="blurred-box">
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
              type="password"
              className="input-senha"
              placeholder="Sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
