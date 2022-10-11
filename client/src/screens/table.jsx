import React from 'react';

const Table = ({id, estudiante}) => {
  return (
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
  );
}