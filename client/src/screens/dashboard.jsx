import React from "react";
import intecLogo from '../intec_logoT.png';
import '../styles/dashboard.css';
import userLogo from '../userLogo.png';
import { useState, useEffect } from "react";
import { useParams } from "react-router";

const Dashboard = ()=> {

    let parametros = useParams();
      const [data, setData] = useState([]);

      useEffect(()=>{
            const dashboard = async () => {
                const answer = await fetch("/dashboard", {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(parametros),
                })
                const answerJson = await answer.json()
                console.log(answerJson.message);
                setData(answerJson.message);
            }
          dashboard();
          console.log(data)
      },[])

    return(
        <div className="completeDash">
            <div className="contenedor-menu">
                <div className="menu1">
                <div className="logo-container">
                    <img className="intec" src={intecLogo} alt=""/>
                    <h3 className="encabezado">Sistema Integral de Procesos Academicos</h3>
                </div>
                <ul>
                    <li className="menu-item" href="#"><i className="fa-solid fa-house"></i>Dashboard</li>
                    <li className="menu-item desplegable" href="#"><i className="fa-solid fa-medal"></i>Procesos academicos
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
                    <h2 className="studentName">{data[0] ? data[0].nombre : null}<p className="correo">{data[0] ? data[0].correo : null}</p></h2>

                </div>
                <div className="datos1">
                    <div className="indiceG">
                        <h2 className="generalI">{data[0] ? data[0].indiceGe : null}</h2>
                    </div>
                    <h2 className="line1">Programa<p className="data-harcoded">Ing. de software</p></h2>
                    <h2 className="line1">ID<p className="data-harcoded">{data[0] ? data[0].id:null}</p></h2>
                    <h2 className="line1">Condicion academica<p className="data-harcoded">Activo</p></h2>
                    <h2 className="line1">Trimestre ingreso:<p className="data-harcoded">01-02-2020</p></h2>
                    <h2 className="line1">Ultima condicion<p className="data-harcoded">Activo</p></h2>
                    <div className="dato2">
                        <h2 className="line2">Trimestres cursados<p className="data-harcoded">{data[0] ? data[0].trimestres:null}</p></h2>
                        <h2 className="line2">Indice trimestral<p className="data-harcoded">{data[0] ? data[0].indiceTri:null}</p></h2>
                        <h2 className="line2">Creditos convalidados<p className="data-harcoded">0</p></h2>
                        <h2 className="line2">Creditos aprobados<p className="data-harcoded">{data[0] ? data[0].creditosA:null}</p></h2>
                        <h2 className="line2">Consejero<p className="data-harcoded">N/A</p></h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;