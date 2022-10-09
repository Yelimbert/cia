import React from "react";
import '../styles/loggedPage.css';

const UserLoggedPage = () => {
  return (
    <div className="main-container">
      <div className="menu-container">
        <div className="menu">
          <div className="logo-container">
            <img className="intec" src="./icons/intec.png" alt=""/>
              <h3 className="header">Sistema Integral de Procesos Academicos</h3>
          </div>
          <ul>
            <li className="menu-item" href="#"><i class="fa-solid fa-house"></i>Dashboard</li>
            <li className="menu-item" href="#"><i class="fa-solid fa-medal"></i>Procesos academicos
              <ul>
                <li className="menu-item-hijo" href="#"><i className="fa-solid fa-table"></i>Horario</li>
                <li clasNames="menu-item-hijo" href="#"><i className="fa-solid fa-mouse"></i>Seleccion de asignaturas</li>
              </ul>
            </li>
            <li className="menu-item" href="#"><i className="fa-solid fa-chart-pie"></i>Reportes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserLoggedPage;