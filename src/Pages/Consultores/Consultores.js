import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "./Consultores.css";
import { RiFilter2Line } from "react-icons/ri";
import Loader from "../../components/Loader/Loader";

Chart.register(...registerables);

const Consultores = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Configura um delay para exibir o carregamento inicial por um curto período
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Ajuste o tempo em milissegundos para o efeito desejado
    
    return () => clearTimeout(timer); // Limpa o timer ao desmontar o componente
  }, []);

  const data = {
    labels: ["Executivo", "Senior", "Pleno", "Junior", "Estágiario"],
    datasets: [
      {
        label: "Total de chamados",
        data: [49, 50, 50, 28, 22],
        backgroundColor: "#ffffff",
        borderColor: "#ffffff",
        borderWidth: 1,
        borderRadius: 5,
        maxBarThickness: 20,
      },
      {
        label: "Chamados Finalizados",
        data: [34, 28, 30, 22, 20],
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
    categoryPercentage: 0.4,
  };

  const performanceData = [
    { name: "Daniel", completed: 40, remaining: 12 },
    { name: "Marcos", completed: 50, remaining: 28 },
    { name: "Jéssica", completed: 30, remaining: 15 },
    { name: "Bianca", completed: 50, remaining: 20 },
    { name: "João", completed: 20, remaining: 30 },
  ];

  const performanceChartData = {
    labels: performanceData.map((p) => p.name),
    datasets: [
      {
        label: "Chamados Finalizados",
        data: performanceData.map((p) => p.completed),
        backgroundColor: "#15C888",
        borderColor: "#15C888",
        borderWidth: 1,
        borderRadius: 5,
        maxBarThickness: 15,
      },
      {
        label: "Chamados Restantes",
        data: performanceData.map((p) => p.remaining),
        backgroundColor: "#ffffff",
        borderColor: "#ffffff",
        borderWidth: 1,
        borderRadius: 5,
        maxBarThickness: 15,
      },
    ],
  };

  const performanceChartOptions = {
    indexAxis: "y",
    scales: {
      x: {
        stacked: true,
        beginAtZero: true,
        ticks: {
          color: "#ffffff",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.3)",
        },
      },
      y: {
        stacked: true,
        ticks: {
          color: "#ffffff",
        },
        grid: {
          display: false,
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
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="consultores-container">
      <div className="panel-container-consultores">
        <div className="panel-consultores">
          <div className="panel-consultores-top">
            <h3 className="consultores">
              Desempenho<span> / Senioridade</span>
            </h3>
            <div className="filters">
              <span style={{ color: "#05C695", fontWeight: 600 }}>
                Maio 2024
              </span>
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
          <div className="panel-consultores-graph">
            <Bar data={data} options={options} />
          </div>
        </div>
        <div className="panel-consultores">
          <div className="panel-consultores-top">
            <h3 className="consultores">
              Desempenho<span> / Chamados Finalizados / Senior`s</span>
            </h3>
            <div className="filters">
              <span style={{ color: "#05C695", fontWeight: 600 }}>
                Maio 2024
              </span>
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
          <div className="panel-consultores-graph">
            <Bar
              data={performanceChartData}
              options={performanceChartOptions}
            />
          </div>
        </div>
      </div>
      <div className="panel-container-consultores">
        <div className="panel-consultores">
          <div className="panel-page-top-consultores">
            <div className="panel-page-title">
              <h3>Atendidos dos Consultores / </h3>
              <span> Senior`s</span>
            </div>
            <div className="filters-page-chamados">
              <span
                style={{
                  color: "#05C695",
                  fontWeight: 600,
                  fontSize: "1.2rem",
                }}
              >
                Maio 2024
              </span>
              <div className="filter">
                <RiFilter2Line />
              </div>
            </div>
          </div>
          <table className="consultores-table">
            <thead>
              <tr>
                <th>
                  <div class="custom-select">
                    <button class="select-button">
                      <span class="arrow-down"></span>
                    </button>
                    Consultor
                  </div>
                </th>
                <th>
                  <div class="custom-select">
                    <button class="select-button">
                      <span class="arrow-down"></span>
                    </button>
                    Tipo de Consultor
                  </div>
                </th>
                <th>
                  <div class="custom-select">
                    <button class="select-button">
                      <span class="arrow-down"></span>
                    </button>
                    Senioridade
                  </div>
                </th>
                <th>
                  <div class="custom-select">
                    <button class="select-button">
                      <span class="arrow-down"></span>
                    </button>
                    Total de chamados
                  </div>
                </th>
                <th>
                  <div class="custom-select">
                    <button class="select-button">
                      <span class="arrow-down"></span>
                    </button>
                    Em andamento
                  </div>
                </th>
                <th>
                  <div class="custom-select">
                    <button class="select-button">
                      <span class="arrow-down"></span>
                    </button>
                    Finalizados
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Daniel</td>
                <td>Financeiro</td>
                <td>Senior</td>
                <td>20</td>
                <td>-</td>
                <td>20</td>
              </tr>
              <tr>
                <td>Gabriel</td>
                <td>Financeiro</td>
                <td>Senior</td>
                <td>15</td>
                <td>5</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Jessica</td>
                <td>Financeiro</td>
                <td>Senior</td>
                <td>11</td>
                <td>1</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Erika</td>
                <td>Financeiro</td>
                <td>Senior</td>
                <td>11</td>
                <td>5</td>
                <td>6</td>
              </tr>
              <tr>
                <td>Leticia</td>
                <td>Financeiro</td>
                <td>Senior</td>
                <td>10</td>
                <td>2</td>
                <td>8</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Consultores;
