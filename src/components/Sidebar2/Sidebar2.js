import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar2.css";
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
import { RiMenuFoldLine } from "react-icons/ri";
import { RiMenuFold2Line } from "react-icons/ri";

const Sidebar2 = () => {
  const [consultoresSubmenuOpen, setConsultoresSubmenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true); // State to control sidebar visibility

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

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen); // Toggle the sidebar visibility
  };

  return (
    <div className={`sidebar-2 ${sidebarOpen ? "open" : "closed"}`}>
    <div className="sidebar-header">
      <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
        {sidebarOpen ? <RiMenuFoldLine /> : <RiMenuFold2Line />}
      </button>
    </div>
  
    <div className={`logo-container-2 ${!sidebarOpen ? "hidden" : ""}`}>
      <img
        className={`logo-icon-2 ${sidebarOpen ? "" : "logo-icon-reduced"}`} // Aplica uma classe para reduzir a logo
        src={logoImage}
        alt="Softtek Logo"
      />
    </div>
    <img className="barra-2" src={barraImage} alt="Separator" />
  
    <div className={`navigation-container-2 ${!sidebarOpen ? "hidden" : ""}`}>
      <nav className="navigation-items-2">
        <NavLink
          to="/home" 
          onClick={() => closeSubmenuOnOtherMenuClick("home")}
          className={({ isActive }) =>
            isActive ? "active-nav-link-2 calls-link-2" : "calls-link-2"
          }
        >
          <div className="calls-navigation-2">
            <div className="calls-icon-container-2">
              <div className="rectangle-parent14-2">
                <LuHome />
              </div>
            </div>
            {sidebarOpen && (
              <div className="calls-label-container1-2">
                <span className="menu-2">Home</span>
              </div>
            )}
          </div>
        </NavLink>

          <NavLink
            to="/chamados"
            onClick={() => closeSubmenuOnOtherMenuClick("chamados")}
            className={({ isActive }) =>
              isActive ? "active-nav-link-2 calls-link-2" : "calls-link-2"
            }
          >
            <div className="calls-navigation-2">
              <div className="calls-icon-container-2">
                <div className="rectangle-parent14-2">
                <LuPhoneCall />
                </div>
              </div>
              <div className="calls-label-container1-2">
                <span className="menu-2">Chamados</span>
              </div>
            </div>
          </NavLink>

          <div
            className={`calls-link-2-menu ${activeMenu === "consultores" ? "active" : ""}`}
            onClick={toggleConsultoresSubmenu}
          >
            <div className="calls-navigation-2">
              <div className="calls-icon-container-2">
                <div className="rectangle-parent14-2">
                  <FaUserTie />
                </div>
              </div>
              <div className="calls-label-container2">
                <span className="menu-2">Consultores</span>
                <span className={`arrow-icon ${consultoresSubmenuOpen ? "open" : ""}`}>
                  {consultoresSubmenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </div>
            </div>
          </div>

          <div className={`submenu-2 ${consultoresSubmenuOpen ? "open" : ""}`}>
            <NavLink
              to="/consultores"
              className={({ isActive }) =>
                isActive ? "active-nav-link-2 submenu-link-2" : "submenu-link-2"
              }
            >
              <div className="calls-icon-container">
            <div className="rectangle-parent14-2">
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
                isActive ? "active-nav-link-2 submenu-link-2" : "submenu-link-2"
              }
            >
              <div className="calls-icon-container">
            <div className="rectangle-parent14-2">
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
              isActive ? "active-nav-link-2 calls-link-2" : "calls-link-2"
            }
          >
            <div className="calls-navigation-2">
              <div className="calls-icon-container-2">
                <div className="rectangle-parent14-2">
                  <HiOutlineClipboardDocumentList />
                </div>
              </div>
              <div className="calls-label-container1-2">
                <span className="menu-2">Contratos</span>
              </div>
            </div>
          </NavLink>

          <NavLink
            to="/analise"
            onClick={() => closeSubmenuOnOtherMenuClick("analise")}
            className={({ isActive }) =>
              isActive ? "active-nav-link-2 calls-link-2" : "calls-link-2"
            }
          >
            <div className="calls-navigation-2">
              <div className="calls-icon-container-2">
                <div className="rectangle-parent14-2">
                  <TbBrandGoogleAnalytics />
                </div>
              </div>
              <div className="calls-label-container1-2">
                <span className="menu-2">Análise</span>
              </div>
            </div>
          </NavLink>
        </nav>
      </div>

      <div className="sidebar-divider">
        <div className={`navigation-list-2 ${!sidebarOpen ? "hidden" : ""}`}>
          <NavLink
            to="/"
            onClick={() => closeSubmenuOnOtherMenuClick("perfil")}
            className={({ isActive }) =>
              isActive ? "active-nav-link-2 calls-link-2" : "calls-link-2"
            }
          >
            <div className="calls-navigation-2">
              <div className="calls-icon-container-2">
                <div className="rectangle-parent14-2">
                  <FaRegUser />
                </div>
              </div>
              <div className="calls-label-container1-2">
                <span className="menu-2">Perfil</span>
              </div>
            </div>
          </NavLink>

          <NavLink
            to="/"
            onClick={() => closeSubmenuOnOtherMenuClick("configuracoes")}
            className={({ isActive }) =>
              isActive ? "active-nav-link-2 calls-link-2" : "calls-link-2"
            }
          >
            <div className="calls-navigation-2">
              <div className="calls-icon-container-2">
                <div className="rectangle-parent14-2">
                  <IoSettingsOutline />
                </div>
              </div>
              <div className="calls-label-container1-2">
                <span className="menu-2">Configurações</span>
              </div>
            </div>
          </NavLink>

          <NavLink
            to="/signout"
            onClick={() => closeSubmenuOnOtherMenuClick("signout")}
            className={({ isActive }) =>
              isActive ? "active-nav-link-2 calls-link-2" : "calls-link-2"
            }
          >
            <div className="calls-navigation-2">
              <div className="calls-icon-container-2">
                <div className="rectangle-parent14-2">
                <PiSignOutBold />
                </div>
              </div>
              <div className="calls-label-container1-2">
                <span className="menu-2">Sign out</span>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar2;
