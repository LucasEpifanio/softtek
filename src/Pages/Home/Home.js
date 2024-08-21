import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js"; 
import "./Home.css";
import { PiPhoneCallLight } from "react-icons/pi";
import { RiFilter2Line } from "react-icons/ri";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import { IoCheckmarkCircle } from "react-icons/io5";

Chart.register(...registerables); 

const Home = () => {
  const data = {
    labels: ["1 Semana", "2 Semana", "3 Semana", "4 Semana"],
    datasets: [
      {
        label: "Chamados",
        data: [18, 8, 39, 35],
        backgroundColor: "#ffffff",
        borderColor: "#ffffff",
        borderWidth: 1,
        borderRadius: 5,
        maxBarThickness: 20,
      },
      {
        label: "Em andamento",
        data: [10, 8, 17, 12],
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

  return (
    <div className="home-container">
      {/* Existing Panels */}
      <div className="panel-container">
        <div className="panel">
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
          <div className="panel-top">
            <div className="panel-title">
              <h3>Total de Chamados</h3>
              <span>Da semana Passada</span>
            </div>
            <div className="calls-icon-container">
              <div className="rectangle-parent">
                <PiPhoneCallLight />
              </div>
            </div>
          </div>
          <div className="panel-content">
            <div className="panel-number">15</div>
          </div>
        </div>
        <div className="panel">
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
          <div className="panel-top">
            <div className="panel-title">
              <h3>Chamados em Andamento</h3>
              <span>Da semana Passada</span>
            </div>
            <div className="calls-icon-container">
              <div className="rectangle-parent">
                <HiOutlineClipboardDocumentList />
              </div>
            </div>
          </div>
          <div className="panel-content">
            <div className="panel-number">6</div>
          </div>
        </div>
        <div className="panel">
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
          <div className="panel-top">
            <div className="panel-title">
              <h3>Chamados Finalizados</h3>
              <span>Da semana Passada</span>
            </div>
            <div className="calls-icon-container">
              <div className="rectangle-parent">
                <HiOutlineClipboardDocumentCheck />
              </div>
            </div>
          </div>
          <div className="panel-content">
            <div className="panel-number">9</div>
          </div>
        </div>
      </div>

      {/* Painéis intermediários */}
      <div className="panel-container">
        <div className="panel-1">
          <div className="panel-chamados-top">
            <h3 className="chamados">Chamados</h3>
            <span>Hoje</span>
            <span>Esta Semana</span>
            <span
              style={{
                backgroundColor: "#05C695",
                padding: 8,
                borderRadius: 6,
              }}
            >
              Este Mês
            </span>
            <span>Este Ano</span>
            <span style={{ color: "#05C695" }}>Maio 2024</span>
          </div>
          <Bar data={data} options={options} />
        </div>
        <div className="panel-1">
          <div className="panel-desempenho-top">
            <h3 className="desempenho">
              Desempenho<span> / Chamados Finalizados / Senior`s</span>
            </h3>
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
          <div className="performance-chart">
            <Bar
              data={performanceChartData}
              options={performanceChartOptions}
            />
            <div className="performance-list"></div>
          </div>
        </div>
      </div>

      {/* Tabela */}
      <div className="table-container">
        <div className="table">
          <div className="table-top">
            <div className="title-top">
              <h3 className="contratos-title">Contratos</h3>
              <div className="icon-check">
                <IoCheckmarkCircle />
              </div>
            </div>

            <div className="filters">
              <div className="btn">
                <div className="btn1"></div>
                <div className="btn1"></div>
                <div className="btn1"></div>
              </div>
            </div>
          </div>
          <span>Mês Passado</span>
        </div>
        <table>
          <thead>
            <tr>
              <th>Projetos</th>
              <th>Tipo de Demanda</th>
              <th>Valor</th>
              <th>Finalizado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>PROJETO_01</td>
              <td>Manutenção; Melhoria; Projetos; Suporte; Erro; Problema</td>
              <td>R$ 16,800,80</td>
              <td>
                60%
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>PROJETO_01</td>
              <td>Perfis;Transporte</td>
              <td>R$ 1,680,00</td>
              <td>
                10%
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: "10%" }}
                  ></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>PROJETO_02</td>
              <td>Manutenção; Melhoria; Suporte; Erro; Problema</td>
              <td>R$ 19,600,00</td>
              <td>
                100%
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
