import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./Analise.css";

import { RiFilter2Line } from "react-icons/ri";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";

Chart.register(...registerables);

const Analise = () => {
  const [activeTab, setActiveTab] = useState("Projeto_01");

  // Mock data for panels and table (you can replace with real data)
  const dataProjeto01 = {
    alertasReportados: 216,
    alertasComparacao: 6.2,
    contratos: 252,
    contratos_graph: 40,
    contratosAtuando: 40,
    contratosDiferentes: 20,
    alertas: [
      {
        tipo: "Qualidade",
        descricao: "Melhoria",
        senioridade: "Senior",
        dataEnvio: "02/03/24",
      },
      {
        tipo: "Infra",
        descricao: "Perfis",
        senioridade: "Junior",
        dataEnvio: "28/02/24",
      },
      {
        tipo: "Financeiro",
        descricao: "Suporte",
        senioridade: "Pleno",
        dataEnvio: "28/02/24",
      },
      {
        tipo: "Vendas",
        descricao: "Manutenção",
        senioridade: "Pleno",
        dataEnvio: "26/02/24",
      },
    ],
  };

  const dataProjeto02 = {
    alertasReportados: 190,
    alertasComparacao: -12.8,
    contratos: 230,
    contratos_graph: 30,
    contratosAtuando: 45,
    contratosDiferentes: 25,
    alertas: [
      {
        tipo: "Qualidade",
        descricao: "Ajustes",
        senioridade: "Pleno",
        dataEnvio: "01/03/24",
      },
      {
        tipo: "Infra",
        descricao: "Upgrade",
        senioridade: "Senior",
        dataEnvio: "27/02/24",
      },
      {
        tipo: "Financeiro",
        descricao: "Revisão",
        senioridade: "Junior",
        dataEnvio: "25/02/24",
      },
      {
        tipo: "Vendas",
        descricao: "Novo Produto",
        senioridade: "Pleno",
        dataEnvio: "24/02/24",
      },
    ],
  };

  const activeData = activeTab === "Projeto_01" ? dataProjeto01 : dataProjeto02;

  // Chart data for Projeto_01
  const dataProjeto01Chart = {
    labels: [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ],
    datasets: [
      {
        label: "2022",
        data: [8, 12, 5, 10, 7, 6, 6, 11, 5, 8, 9, 6],
        backgroundColor: "#ffffff",
        borderColor: "#ffffff",
        borderWidth: 1,
        borderRadius: 5,
        maxBarThickness: 20,
      },
      {
        label: "2023",
        data: [11, 8, 6, 7, 12, 8, 10, 9, 8, 6, 11, 12],
        backgroundColor: "#15C888",
        borderColor: "#15C888",
        borderWidth: 1,
        borderRadius: 5,
        maxBarThickness: 20,
      },
    ],
  };

  // Chart data for Projeto_02 (modified to have lower values for 2023)
  const dataProjeto02Chart = {
    labels: [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ],
    datasets: [
      {
        label: "2022",
        data: [8, 12, 5, 10, 7, 6, 6, 11, 5, 8, 9, 6],
        backgroundColor: "#ffffff",
        borderColor: "#ffffff",
        borderWidth: 1,
        borderRadius: 5,
        maxBarThickness: 20,
      },
      {
        label: "2023",
        data: [8, 7, 5, 8, 7, 5, 6, 6, 5, 6, 7, 6],
        backgroundColor: "#15C888",
        borderColor: "#15C888",
        borderWidth: 1,
        borderRadius: 5,
        maxBarThickness: 20,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#ffffff",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.3)",
        },
      },
      x: {
        ticks: {
          color: "#ffffff",
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#ffffff",
        },
      },
    },
    categoryPercentage: 0.5,
  };

  const doughnutData = {
    labels: [
      "Contratos",
      "Contratos atuando",
      "Perfis contratos",
    ],
    datasets: [
      {
        data: [
          activeData.contratos_graph,
          activeData.contratosAtuando,
          activeData.contratosDiferentes,
        ],
        backgroundColor: ["#5CC6E5", "#D6FAFF", "#CFB55A"],
        borderWidth: 0,
      },
    ],
  };

  const doughnutOptions = {
    cutout: "75%",
    plugins: {
      tooltip: { enabled: true },
      legend: {
        labels: {
          color: "#ffffff",
        },
      },
    },
  };

  return (
    <div className="analises-container">
      {/* Tab Selector */}
      <div className="tab-analises">
        <button
          style={{
            padding: "10px 20px",
            cursor: "pointer",
            borderBottom:
              activeTab === "Projeto_01" ? "#05C695 solid 2px" : "transparent",
            color: activeTab === "Projeto_01" ? "#fff" : "#A0AEC0",
          }}
          onClick={() => setActiveTab("Projeto_01")}
        >
          Projeto_01
        </button>
        <button
          style={{
            padding: "10px 20px",
            cursor: "pointer",
            borderBottom:
              activeTab === "Projeto_02" ? "#05C695 solid 2px" : "transparent",
            color: activeTab === "Projeto_02" ? "#fff" : "#A0AEC0",
          }}
          onClick={() => setActiveTab("Projeto_02")}
        >
          Projeto_02
        </button>
      </div>
      <hr />

      {/* Panels */}
      <div className="panel-container-analises">
        <div className="panel-analises">
          <div className="panel-top-analise">
            <h3>Alertas Reportados</h3>
            <div className="filters">
              <div className="filter">
                <RiFilter2Line />
              </div>
              <div className="btn">
                <div className="btn1"></div>
                <div className="btn1"></div>
                <div className="btn1"></div>
              </div>
            </div>
          </div>
          <p
            style={{
              fontSize: "1.4rem",
              fontWeight: 600,
              paddingLeft: "0.6rem",
              position: "relative",
              bottom: "10px",
            }}
          >
            {activeData.alertasReportados}
          </p>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <i
              style={{
                color: activeData.alertasComparacao >= 0 ? "#CFB55A" : "red",
              }}
            >
              {activeData.alertasComparacao >= 0 ? (
                <FaArrowTrendUp />
              ) : (
                <FaArrowTrendDown />
              )}
            </i>
            <p
              style={{
                color: activeData.alertasComparacao >= 0 ? "#CFB55A" : "red",
              }}
            >
              {activeData.alertasComparacao}% em relação ao ano anterior
            </p>
          </div>

          {/* Conditional rendering for charts based on selected tab */}
          {activeTab === "Projeto_01" ? (
            <Bar data={dataProjeto01Chart} options={options} />
          ) : (
            <Bar data={dataProjeto02Chart} options={options} />
          )}
        </div>

        <div className="panel-analises">
          <div className="panel-top-analise">
            <h3><span style={{color:"#5CC6E5", fontWeight:600}}>{activeData.contratos}</span> contratos</h3>
          </div>
          <div className="doughnut-container">
            <Doughnut data={doughnutData} options={doughnutOptions} />
          </div>
          <div style={{display:"flex", justifyContent:"space-between", paddingTop:"1rem"}}>
          <p style={{fontWeight:500}}><span style={{color:"#D6FAFF", fontWeight:600}}>{activeData.contratosAtuando}%</span> Quantidade de contratos atuando</p>
          <p style={{fontWeight:500}}><span style={{color:"#CFB55A", fontWeight:600}}>
            {activeData.contratosDiferentes}%</span> Perfis contratos diferentes do
            contratado
          </p>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="panel-container-analises">
        <div className="panel-analises">
          <div className="panel-top-analise">
            <h3>Alertas</h3>
            <div className="filters">
              <div className="btn">
                <div className="btn1"></div>
                <div className="btn1"></div>
                <div className="btn1"></div>
              </div>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Tipo de Alerta</th>
                <th>Descrição</th>
                <th>Senioridade</th>
                <th>Data do Envio</th>
              </tr>
            </thead>
            <tbody>
              {activeData.alertas.map((alerta, index) => (
                <tr key={index}>
                  <td>{alerta.tipo}</td>
                  <td>{alerta.descricao}</td>
                  <td>{alerta.senioridade}</td>
                  <td>{alerta.dataEnvio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Analise;
