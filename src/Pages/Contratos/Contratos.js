import React, { useState, useEffect } from "react";
import "./Contratos.css";
import Loader from "../../components/Loader/Loader";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Contratos = () => {
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

  return (
    <div className="contratos-container">
      <div className="panel-container-contratos">
        <div className="dropdown-header" onClick={toggleDropdown}>
          <h3>Filtros +</h3>
          <span className="dropdown-icon">
            {isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </span>
        </div>

        <div className={`dropdown-content ${isOpen ? "open" : ""}`}>
          <div className="filters-row">
            <div className="filter-item">
              <label htmlFor="project">Projetos</label>
              <select id="project" name="project">
                <option value="">Selecione um projeto</option>
                <option value="projeto1">Projeto 1</option>
                <option value="projeto2">Projeto 2</option>
              </select>
            </div>

            <div className="filter-item">
              <label htmlFor="contract-type">Tipo de contrato</label>
              <select id="contract-type" name="contract-type">
                <option value="">Selecione um tipo</option>
                <option value="tipo1">Tipo 1</option>
                <option value="tipo2">Tipo 2</option>
              </select>
            </div>

            <div className="filter-item">
              <label htmlFor="demand-type">Tipo de demanda</label>
              <select id="demand-type" name="demand-type">
                <option value="">Selecione um tipo</option>
                <option value="demanda1">Demanda 1</option>
                <option value="demanda2">Demanda 2</option>
              </select>
            </div>
          </div>

          <div className="filters-row">
            <div className="filter-item">
              <label htmlFor="value">Valor</label>
              <select id="demand-type" name="demand-type">
                <option value="">Selecione um tipo</option>
                <option value="demanda1">Valor 1</option>
                <option value="demanda2">Valor 2</option>
              </select>
            </div>

            <div className="filter-item">
              <label htmlFor="start-date">Data de início</label>
              <input type="date" id="start-date" name="start-date" />
            </div>

            <div className="filter-item">
              <label htmlFor="end-date">Data de fim</label>
              <input type="date" id="end-date" name="end-date" />
            </div>
          </div>
        </div>
      </div>
      <div className="panel-container-contratos">
        <div className="panel-contratos">
          <div className="panel-page-top-contratos">
            <div className="panel-page-title">
              <h3>Contratos</h3>
            </div>
          </div>
          <table className="contratos-table">
            <thead>
              <tr>
                <th>Projetos</th>
                <th>Tipo de Contrato</th>
                <th>Tipo de Demanda</th>
                <th>Valor</th>
                <th>Data de Início</th>
                <th>Data de Termino</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PROJETO_01</td>
                <td>Funcional</td>
                <td>Manutenção; Melhoria; Projetos; Suporte; Erro; Problema</td>
                <td>R$ 16,800,80</td>
                <td>01/01/24</td>
                <td>31/12/24</td>
              </tr>
              <tr>
                <td>PROJETO_01</td>
                <td>Basis</td>
                <td>Perfis;Transporte</td>
                <td>R$ 1,680,00</td>
                <td>01/01/24</td>
                <td>31/12/24</td>
              </tr>
              <tr>
                <td>PROJETO_01</td>
                <td>Funcional</td>
                <td>Manutenção; Melhoria; Suporte; Erro; Problema</td>
                <td>R$ 19,600,00</td>
                <td>01/01/24</td>
                <td>31/12/24</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Contratos;
