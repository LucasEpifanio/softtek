// src/components/Loader/Loader.js
import React from "react";
import "./Loader.css"; // Para os estilos de carregamento

const Loader = () => {
  return (
    <div className="loader">
      <div className="spinner"></div>
      <p className="carregando">Carregando...</p>
    </div>
  );
};

export default Loader;