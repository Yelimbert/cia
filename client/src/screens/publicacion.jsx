import React from "react";
import "../styles/stylePublicacion.css";

const PublicacionCalificacion = ({asignatura, id, estudiante, opcion}) => {

    return (
        <div className="main_contenedor">
            <div className="header">Publicacion de calificaciones</div>
            <div className="card-container">
                <div className="card">
                    <div className="search-bar">
                        <input type="search" className="search" placeholder="Buscar una materia"></input>
                        <h2>{asignatura}</h2>
                    </div>
                    <table className="content-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Calificacion</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{id}</td>
                                <td>{estudiante}</td>
                                <td><input type='number' className="nota"></input></td>
                                <td>
                                    <select>
                                        <option value="Publicar">Publicar</option>
                                        <option value="Editar">Editar</option>
                                    </select>
                                    </td>
                            </tr>
                        </tbody>
                        <tfoot></tfoot>
                    </table>
                    <button className="publicar">Publicar calificaciones</button>
                </div>
            </div>
            <div className="footer"></div>
        </div>
    );
}

export default PublicacionCalificacion;