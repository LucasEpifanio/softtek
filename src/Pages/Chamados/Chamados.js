import "./Chamados.css";
import { RiFilter2Line } from "react-icons/ri";
import { Chart, registerables } from "chart.js"; 
import { Bar } from "react-chartjs-2";

import Perfil1 from "../../img/perfil-1.svg";
import Perfil2 from "../../img/perfil-2.svg";
import Perfil3 from "../../img/perfil-3.svg";
import Perfil4 from "../../img/perfil-4.svg";
import Perfil5 from "../../img/perfil-5.svg";
import Perfil6 from "../../img/perfil-6.svg";

Chart.register(...registerables); 

const Chamados = () => {
  const data = {
    labels: ["Melhoria", "Suporte", "Perfis", "Projetos", "Manutenção", "Transporte"],
    datasets: [
      {
        label: "Tipos",
        data: [150, 90, 75, 105, 160, 265],
        backgroundColor: "#ffffff",
        borderColor: "#ffffff",
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

  return (
    <div className="chamados-container">
      <div className="panel-container">
        <div className="panel-chamados">
          <div className="panel-page-top">
            <div className="panel-page-title">
              <h3>Chamado / </h3>
              <span> Projeto_01</span>
            </div>
            <div className="filters-page-chamados">
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
          <table>
            <thead>
              <tr>
                <th>
                  <div class="custom-select">
                    <button class="select-button">
                      <span class="arrow-down"></span>
                    </button>
                    Consultores
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
                    Tipo de Chamado
                  </div>
                </th>
                <th>
                  <div class="custom-select">
                    <button class="select-button">
                      <span class="arrow-down"></span>
                    </button>
                    Complexidade
                  </div>
                </th>
                <th>
                  <div class="custom-select">
                    <button class="select-button">
                      <span class="arrow-down"></span>
                    </button>
                    Status
                  </div>
                </th>
                <th>
                  <div class="custom-select">
                    <button class="select-button">
                      <span class="arrow-down"></span>
                    </button>
                    Data Início
                  </div>
                </th>
                <th>
                  <div class="custom-select">
                    <button class="select-button">
                      <span class="arrow-down"></span>
                    </button>
                    Data Final
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                 <img src={Perfil1} alt="Esther's profile" />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    Esther
                    <span style={{ fontWeight: 300, color: "#A0AEC0" }}>
                      esthera@softtek.com
                    </span>
                  </div>
                </td>
                <td>
                  {" "}
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    Senior
                    <span style={{ fontWeight: 300, color: "#A0AEC0" }}>
                      Consultor
                    </span>
                  </div>
                </td>
                <td>Melhoria</td>
                <td>N3</td>
                <td style={{ padding: "0" }}>
                  <span
                    style={{
                      padding: "0.6rem",
                      background: "#E4DC24",
                      borderRadius: "10px",
                    }}
                  >
                    Waiting for approval
                  </span>
                </td>
                <td>01/08/24</td>
                <td>-</td>
              </tr>
              <tr>
                <td
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                   <img src={Perfil2} alt="Alexandra's profile" />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    Alexandra
                    <span style={{ fontWeight: 300, color: "#A0AEC0" }}>
                      alexa@softtek.com
                    </span>
                  </div>
                </td>
                <td>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    Pleno
                    <span style={{ fontWeight: 300, color: "#A0AEC0" }}>
                      Consultor
                    </span>
                  </div>
                </td>
                <td>Suporte</td>
                <td>N2</td>
                <td style={{ padding: "0" }}>
                  <span
                    style={{
                      padding: "0.6rem",
                      background: "#6424CE",
                      borderRadius: "10px",
                    }}
                  >
                    Analyse - M
                  </span>
                </td>
                <td>10/08/24</td>
                <td>-</td>
              </tr>
              <tr>
                <td
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                 <img src={Perfil3} alt="Michel's profile" />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    Michel
                    <span style={{ fontWeight: 300, color: "#A0AEC0" }}>
                      michel@softtek.com
                    </span>
                  </div>
                </td>
                <td>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    Exucutivo
                    <span style={{ fontWeight: 300, color: "#A0AEC0" }}>
                      Lider
                    </span>
                  </div>
                </td>
                <td>Projetos</td>
                <td>N2</td>
                <td style={{ padding: "0" }}>
                  <span
                    style={{
                      padding: "0.6rem",
                      background: "#01B574",
                      borderRadius: "10px",
                    }}
                  >
                    Closed
                  </span>
                </td>
                <td>08/03/24</td>
                <td>22/03/24</td>
              </tr>
              <tr>
                <td
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                 <img src={Perfil4} alt="Eduardo's profile" />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    Eduardo
                    <span style={{ fontWeight: 300, color: "#A0AEC0" }}>
                      eduardo@softtek.com
                    </span>
                  </div>
                </td>
                <td>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    Senior
                    <span style={{ fontWeight: 300, color: "#A0AEC0" }}>
                      Consultor
                    </span>
                  </div>
                </td>
                <td>Manutenção</td>
                <td>N2</td>
                <td style={{ padding: "0" }}>
                  <span
                    style={{
                      padding: "0.6rem",
                      background: "#01B574",
                      borderRadius: "10px",
                    }}
                  >
                    Closed
                  </span>
                </td>
                <td>08/03/24</td>
                <td>22/03/24</td>
              </tr>
              <tr>
                <td
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                 <img src={Perfil5} alt="Daniel's profile" />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    Daniel
                    <span style={{ fontWeight: 300, color: "#A0AEC0" }}>
                      daniel@softtek.com
                    </span>
                  </div>
                </td>
                <td>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    Junior
                    <span style={{ fontWeight: 300, color: "#A0AEC0" }}>
                      Consultor
                    </span>
                  </div>
                </td>
                <td>Melhoria</td>
                <td>N1</td>
                <td style={{ padding: "0" }}>
                  <span
                    style={{
                      padding: "0.6rem",
                      background: "#666666",
                      borderRadius: "10px",
                    }}
                  >
                    UAT - M
                  </span>
                </td>
                <td>22/02/2024</td>
                <td>-</td>
              </tr>
              <tr>
                <td
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <img src={Perfil6} alt="Leonardo's profile" />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    Leonardo
                    <span style={{ fontWeight: 300, color: "#A0AEC0" }}>
                      leonardo@softtek.com
                    </span>
                  </div>
                </td>
                <td>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    Pleno
                    <span style={{ fontWeight: 300, color: "#A0AEC0" }}>
                      Consultor
                    </span>
                  </div>
                </td>
                <td>Suporte</td>
                <td>N3</td>
                <td style={{ padding: "0" }}>
                  <span
                    style={{
                      padding: "0.6rem",
                      background: "#01B574",
                      borderRadius: "10px",
                    }}
                  >
                    Closed
                  </span>
                </td>
                <td>20/02/24</td>
                <td>02/03/24</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Second Panel: Tipo de chamados */}
      <div className="panel-container">
        <div className="panel-chamados-2">
        <div className="panel-chamados-top">
          <h3>Tipo de chamados</h3>
          <div className="panel-title-chamados">
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
          </div>
          <div class="custom-select">
            <p style={{paddingRight:"4px"}}>Projeto_01</p>
            <button class="select-button">
              <span class="arrow-down"></span>
            </button>
            <div className="btn" style={{paddingLeft:"5px"}}>
              <div className="btn1"></div>
              <div className="btn1"></div>
              <div className="btn1"></div>
            </div>
          </div>
          </div>
          <div className="panel-chamados-graph">
          <Bar data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chamados;
