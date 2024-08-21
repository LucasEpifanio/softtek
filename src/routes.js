// src/routes.js
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login.js";
import Home from "./Pages/Home/Home.js";
import Analise from "./Pages/Analise/Analise.js";
import Chamados from "./Pages/Chamados/Chamados.js";
import Consultores from "./Pages/Consultores/Consultores.js";
import DetalheConsultores from "./Pages/DetalheConsultores/DetalheConsultores.js";
import Contratos from "./Pages/Contratos/Contratos.js";
import Layout from "./components/Layout/Layout.js"; // Importar Layout

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = sessionStorage.getItem("isAuthenticated");
  return isAuthenticated ? children : <Navigate to="/" />;
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* Rota pública */}
      <Route path="/" element={<Login />} />

      {/* Rotas protegidas envolvidas pelo Layout */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Layout>
              <Home />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/analise"
        element={
          <ProtectedRoute>
            <Layout>
              <Analise />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/chamados"
        element={
          <ProtectedRoute>
            <Layout>
              <Chamados />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/consultores"
        element={
          <ProtectedRoute>
            <Layout>
              <Consultores />
            </Layout>
          </ProtectedRoute>
        }
      />
       <Route
        path="/detalheconsultores"
        element={
          <ProtectedRoute>
            <Layout>
              <DetalheConsultores />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/contratos"
        element={
          <ProtectedRoute>
            <Layout>
              <Contratos />
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* Redireciona rotas não encontradas para a página inicial */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
