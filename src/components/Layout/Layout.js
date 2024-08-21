// src/components/Layout/Layout.js
import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import UserNavigation from "../UserNavigation/UserNavigation";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="main-content">
        <UserNavigation />
      </div>
      <Sidebar />
      <div className="page-content">
          {children}
        </div>
    </div>
  );
};

export default Layout;
