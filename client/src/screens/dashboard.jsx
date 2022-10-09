import React from "react";
import intecLogo from '../intec_logoT.png';
import '../styles/dashboard.css';
import userLogo from '../userLogo.png';

const Dashboard = ()=> {
    return(
        <div className="completeDash">
            <div className="contenedor-menu">
                <div className="menu1">
                <div className="logo-container">
                    <img className="intec" src={intecLogo} alt=""/>
                    <h3 className="encabezado">Sistema Integral de Procesos Academicos</h3>
                </div>
                <ul>
                    <li className="menu-item" href="#"><i class="fa-solid fa-house"></i>Dashboard</li>
                    <li className="menu-item desplegable" href="#"><i class="fa-solid fa-medal"></i>Procesos academicos
                    <ul>
                        <li className="menu-item-hijo" href="#"><i className="fa-solid fa-table"></i>Horario</li>
                        <li className="menu-item-hijo" href="#"><i className="fa-solid fa-mouse"></i>Seleccion de asignaturas</li>
                    </ul>
                    </li>
                    <li className="menu-item" href="#"><i className="fa-solid fa-chart-pie"></i>Reportes</li>
                </ul>
                </div>
            </div>
            <div className="dash">
                <div className="userImg">
                    <img className="userImagen" src={userLogo} alt=""></img>
                    <h2 className="studentName">Test<p className="correo">test@test.test</p></h2>

                </div>
                <div className="datos1">
                    <div className="indiceG">
                        <h2 className="generalI">3.6</h2>
                    </div>
                    <h2 className="line1">Programa<p className="data-harcoded">test</p></h2>
                    <h2 className="line1">ID<p className="data-harcoded">otro test</p></h2>
                    <h2 className="line1">Condicion academica<p className="data-harcoded">otro test</p></h2>
                    <h2 className="line1">Trimestre ingreso:<p className="data-harcoded">otro test</p></h2>
                    <h2 className="line1">Ultima condicion<p className="data-harcoded">otro test</p></h2>
                    <div className="dato2">
                        <h2 className="line2">Trimestres cursados<p className="data-harcoded">otro test</p></h2>
                        <h2 className="line2">Indice trimestral<p className="data-harcoded">otro test</p></h2>
                        <h2 className="line2">Creditos convalidados<p className="data-harcoded">otro test</p></h2>
                        <h2 className="line2">Creditos aprobados<p className="data-harcoded">otro test</p></h2>
                        <h2 className="line2">Consejero<p className="data-harcoded">otro test</p></h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;