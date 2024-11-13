import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import logoImage from "../../img/Logo.svg";
import barraImage from "../../img/barra.svg";
import { LuHome } from "react-icons/lu";
import { LuPhoneCall } from "react-icons/lu";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { FaUserTie } from "react-icons/fa6";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoPeopleSharp } from "react-icons/io5";
import { FaClipboardUser } from "react-icons/fa6";
import { PiSignOutBold } from "react-icons/pi";

const Sidebar = () => {
  const [consultoresSubmenuOpen, setConsultoresSubmenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  const toggleConsultoresSubmenu = () => {
    setConsultoresSubmenuOpen(!consultoresSubmenuOpen);
    setActiveMenu(consultoresSubmenuOpen ? "" : "consultores");
  };

  const closeSubmenuOnOtherMenuClick = (menuName) => {
    if (activeMenu === "consultores" && menuName !== "consultores") {
      setConsultoresSubmenuOpen(false);
      setActiveMenu(menuName);
    } else {
      setActiveMenu(menuName);
    }
  };

  return (    
    <div className="sidebar">
      <div className="logo-container">
        <img className="logo-icon" src={logoImage} alt="Softtek Logo" />
      </div>
      <img className="barra" src={barraImage} alt="Separator" />
      <br />
      <div className="navigation-container">
        <nav className="navigation-items">
          <NavLink
            to="/home"
            onClick={() => closeSubmenuOnOtherMenuClick("home")}
            className={({ isActive }) =>
              isActive ? "active-nav-link calls-link" : "calls-link"
            }
          >
            <div className="calls-navigation">
              <div className="calls-icon-container">
                <div className="rectangle-parent14">
                  <LuHome />
                </div>
              </div>
              <div className="calls-label-container1">
                <span className="menu">Home</span>
              </div>
            </div>
          </NavLink>

          <NavLink
            to="/chamados"
            onClick={() => closeSubmenuOnOtherMenuClick("chamados")}
            className={({ isActive }) =>
              isActive ? "active-nav-link calls-link" : "calls-link"
            }
          >
            <div className="calls-navigation">
              <div className="calls-icon-container">
                <div className="rectangle-parent14">
                <LuPhoneCall />
                </div>
              </div>
              <div className="calls-label-container1">
                <span className="menu">Chamados</span>
              </div>
            </div>
          </NavLink>

          <div
            className={`calls-link-menu ${
              activeMenu === "consultores" ? "active" : ""
            }`}
            onClick={toggleConsultoresSubmenu}
          >
            <div className="calls-navigation">
              <div className="calls-icon-container">
                <div className="rectangle-parent14">
                  <FaUserTie />
                </div>
              </div>
              <div className="calls-label-container2">
                <span className="menu">Consultores</span>
                <span className={`arrow-icon ${consultoresSubmenuOpen ? "open" : ""}`}>
                  {consultoresSubmenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </div>
            </div>
          </div>

          <div className={`submenu ${consultoresSubmenuOpen ? "open" : ""}`}>
          <NavLink
            to="/consultores"
            className={({ isActive }) =>
              isActive ? "active-nav-link submenu-link" : "submenu-link"
            }
          >
               <div className="calls-icon-container">
            <div className="rectangle-parent14">
                  <IoPeopleSharp />
                </div>
                </div>
                <div className="calls-label-container2">
            <div className="submenu-item">Consultores</div>
                </div>
          </NavLink>
          <NavLink
            to="/detalheconsultores"
            className={({ isActive }) =>
              isActive ? "active-nav-link submenu-link" : "submenu-link"
            }
          >
            <div className="calls-icon-container">
            <div className="rectangle-parent14">
            <FaClipboardUser />
                </div>
                </div>
            <div className="calls-label-container2">
            <div className="submenu-item">Detalhe Consultores</div>
            </div>
          </NavLink>
        </div>

          <NavLink
            to="/contratos"
            onClick={() => closeSubmenuOnOtherMenuClick("contratos")}
            className={({ isActive }) =>
              isActive ? "active-nav-link calls-link" : "calls-link"
            }
          >
            <div className="calls-navigation">
              <div className="calls-icon-container">
                <div className="rectangle-parent14">
                <HiOutlineClipboardDocumentList />
                </div>
              </div>
              <div className="calls-label-container1">
                <span className="menu">Contratos</span>
              </div>
            </div>
          </NavLink>

          <NavLink
            to="/analise"
            onClick={() => closeSubmenuOnOtherMenuClick("analise")}
            className={({ isActive }) =>
              isActive ? "active-nav-link calls-link" : "calls-link"
            }
          >
            <div className="calls-navigation">
              <div className="calls-icon-container">
                <div className="rectangle-parent14">
                  <TbBrandGoogleAnalytics />
                </div>
              </div>
              <div className="calls-label-container1">
                <span className="menu">Análise</span>
              </div>
            </div>
          </NavLink>
        </nav>
      </div>

      <div className="sidebar-divider">
        <div className="navigation-list">
          <NavLink
            to="/perfil"
            onClick={() => closeSubmenuOnOtherMenuClick("perfil")}
            className={({ isActive }) =>
              isActive ? "active-nav-link calls-link" : "calls-link"
            }
          >
            <div className="calls-navigation">
              <div className="calls-icon-container">
                <div className="rectangle-parent14">
                  <FaRegUser />
                </div>
              </div>
              <div className="calls-label-container1">
                <span className="menu">Perfil</span>
              </div>
            </div>
          </NavLink>

          <NavLink
            to="/configuracoes"
            onClick={() => closeSubmenuOnOtherMenuClick("configuracoes")}
            className={({ isActive }) =>
              isActive ? "active-nav-link calls-link" : "calls-link"
            }
          >
            <div className="calls-navigation">
              <div className="calls-icon-container">
                <div className="rectangle-parent14">
                  <IoSettingsOutline />
                </div>
              </div>
              <div className="calls-label-container1">
                <span className="menu">Configurações</span>
              </div>
            </div>
          </NavLink>

          <NavLink
            to="/signout"
            onClick={() => closeSubmenuOnOtherMenuClick("signout")}
            className={({ isActive }) =>
              isActive ? "active-nav-link calls-link" : "calls-link"
            }
          >
            <div className="calls-navigation">
              <div className="calls-icon-container">
                <div className="rectangle-parent14">
                <PiSignOutBold />
                </div>
              </div>
              <div className="calls-label-container1">
                <span className="menu">Sign out</span>
              </div>
            </div>
          </NavLink>
        </div>
      </div>

    </div>
  );
};

export default Sidebar;
