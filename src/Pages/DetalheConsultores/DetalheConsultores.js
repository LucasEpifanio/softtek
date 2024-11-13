import React, { useState, useEffect } from "react";
import "./DetalheConsultores.css";
import Loader from "../../components/Loader/Loader";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Perfil7 from "../../img/perfil-7.svg";

const DetalheConsultores = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Configura um delay para exibir o carregamento inicial por um curto período
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Ajuste o tempo em milissegundos para o efeito desejado
    
    return () => clearTimeout(timer); // Limpa o timer ao desmontar o componente
  }, []);
  
  if (loading) {
    return <Loader />;
  }

  const andamento = 10; // Progress percentage for "Em Andamento"
  const aprovacao = 50; // Progress percentage for "Em Aprovação"
  const finalizados = 40; // Progress percentage for "Finalizados"

  return (
    <div className="detalheconsultores-container">
      <form class="form-detalheconsultores">
        <label
          className="labeldetalheconsultores"
          for="search-detalheconsultores"
        >
          <input
            class="input-detalheconsultores"
            type="text"
            required=""
            placeholder="Pesquise pelo consultor..."
            id="search"
          />
          <div class="fancy-bg-detalheconsultores"></div>
          <div class="search-detalheconsultores">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr"
            >
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
          </div>
          <button class="close-btn" type="reset">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </label>
      </form>

      <div className="panel-container-detalheconsultores">
        <div className="panel-detalhesconsultores">
          <div className="panel-top">
            <h3>Detalhes do Chamado</h3>
            <div className="filters">
              <div className="filter"></div>
              <div className="btn">
                <div className="btn1"></div>
                <div className="btn1"></div>
                <div className="btn1"></div>
              </div>
            </div>
          </div>

          <div className="panel-container-filtro">
            <div className="dropdown-header" onClick={toggleDropdown}>
              <h3>Filtros +</h3>
              <span className="dropdown-icon">
                {isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
              </span>
            </div>
            <div className={`dropdown-content ${isOpen ? "open" : ""}`}>
              <div className="filters-row">
                <div className="filter-item">
                  <label htmlFor="project">Chamado</label>
                  <select id="project" name="project">
                    <option value="">Selecione um projeto</option>
                    <option value="projeto1">Projeto 1</option>
                    <option value="projeto2">Projeto 2</option>
                  </select>
                </div>

                <div className="filter-item">
                  <label htmlFor="contract-type">Módulo do chamado</label>
                  <select id="contract-type" name="contract-type">
                    <option value="">Selecione um tipo</option>
                    <option value="tipo1">Tipo 1</option>
                    <option value="tipo2">Tipo 2</option>
                  </select>
                </div>

                <div className="filter-item">
                  <label htmlFor="demand-type">Tipo do Chamado</label>
                  <select id="demand-type" name="demand-type">
                    <option value="">Selecione um tipo</option>
                    <option value="demanda1">Demanda 1</option>
                    <option value="demanda2">Demanda 2</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="panel-detalhesconsultores-table">
            <table className="contratos-table">
              <thead>
                <tr>
                  <th>Chamado</th>
                  <th>Módulo de Chamado</th>
                  <th>Tipo de chamado</th>
                  <th>Dia</th>
                  <th>Horas</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>TASK105721218-1</td>
                  <td>Financeiro</td>
                  <td>Melhoria</td>
                  <td>26</td>
                  <td>2.8</td>
                </tr>
                <tr>
                  <td>TASK105614218-1</td>
                  <td>Financeiro</td>
                  <td>Suporte</td>
                  <td>26</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td>TASK105597715-1</td>
                  <td>Financeiro</td>
                  <td>Projetos</td>
                  <td>6</td>
                  <td>7.7</td>
                </tr>
                <tr>
                  <td>TASK105700511-1</td>
                  <td>Financeiro</td>
                  <td>Suporte</td>
                  <td>5</td>
                  <td>1.5</td>
                </tr>
                <tr>
                  <td>TASK105700511-1</td>
                  <td>Financeiro</td>
                  <td>Suporte</td>
                  <td>2</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>TASK105700511-1</td>
                  <td>Financeiro</td>
                  <td>Melhoria</td>
                  <td>12</td>
                  <td>2.6</td>
                </tr>
                <tr>
                  <td>TASK105700511-1</td>
                  <td>Financeiro</td>
                  <td>Suporte</td>
                  <td>22</td>
                  <td>3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="panel-detalhesconsultores">
          <div className="filters">
            <div className="filter"></div>
            <div className="btn">
              <div className="btn1"></div>
              <div className="btn1"></div>
              <div className="btn1"></div>
            </div>
          </div>
          <div className="panel-top-detalheconsultores">
            <img src={Perfil7} alt="natália profile" />
            <h3>Natália Oliveira</h3>
            <p>Financeiro</p>
          </div>

          <div className="graph-profile-detalheconsultores">
            <div style={{ width: 100, height: 100 }}>
              <CircularProgressbar
                value={andamento}
                text={`${andamento}%`}
                styles={buildStyles({
                  textColor: "#fff",
                  pathColor: "#E8A541",
                  trailColor: "#d6d6d6",
                })}
              />
              <p style={{ textAlign: "center", marginTop: "8px" }}>
                Em Andamento
              </p>
            </div>

            <div style={{ width: 100, height: 100 }}>
              <CircularProgressbar
                value={aprovacao}
                text={`${aprovacao}%`}
                styles={buildStyles({
                  textColor: "#fff",
                  pathColor: "#A93AF3",
                  trailColor: "#d6d6d6",
                })}
              />
              <p style={{ textAlign: "center", marginTop: "8px" }}>
                Em Aprovação
              </p>
            </div>

            <div style={{ width: 100, height: 100 }}>
              <CircularProgressbar
                value={finalizados}
                text={`${finalizados}%`}
                styles={buildStyles({
                  textColor: "#fff",
                  pathColor: "#0aab9e",
                  trailColor: "#d6d6d6",
                })}
              />
              <p style={{ textAlign: "center", marginTop: "8px" }}>
                Finalizados
              </p>
            </div>
          </div>
          <div className="panel-bottom-detalheconsultores">
            <h3>Neste momento</h3>
            <div className="panel-3-detalheconsultores">
              <div className="total-chamados-panel">
                <span>50</span>
                <p style={{ paddingTop: "10px" }}>Total de chamados</p>
              </div>
              <div className="em-andamento-panel">
                <span>5</span>
                <p style={{ paddingTop: "10px" }}>Em andamento</p>
              </div>
              <div className="finalizados-panel">
                <span>20</span>
                <p style={{ paddingTop: "10px" }}>Finalizados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalheConsultores;
