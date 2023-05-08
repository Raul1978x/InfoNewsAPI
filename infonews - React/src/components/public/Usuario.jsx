import React from "react";
import Imagen from "./Imagen";
import "../../css/Imagen.css";
import { Link } from "react-router-dom";

const Usuario = ({ usuario }) => {
  return (
    <tbody className="my-2 align-middle">
      <tr className="text-left fw-bold">
        <td scope="row">{usuario.nombre}</td>
        <td scope="row">{usuario.email}</td>
        <td scope="row" className="fw-bold ">
          {usuario.rol}
        </td>
        <td scope="row">
          <div className="foto-perfil">
            <Imagen id={usuario.imagen.id}></Imagen>
          </div>
        </td>
        <td>
          <ul>
            <li>
              <Link
                to="/form-edit-usuario"
                className="text-dark text-decoration-none"
              >
                🖋Editar
              </Link>
            </li>
            <li>
              <div
                // href="@{/admin/cambiarRol/__${usuario.id}__}"
                className="text-dark text-decoration-none"
              >
                🪶Cambiar rol
              </div>
            </li>
            <li>
              <div
                // href="@{/admin/eliminarUsuario/__${usuario.id}__}"
                className="text-dark text-decoration-none"
              >
                👎Eliminar
              </div>
            </li>
            <li>
              <div
                // href="@{/admin/enviarEmail/__${usuario.id}__}"
                className="text-dark text-decoration-none"
              >
                📨Enviar Email
              </div>
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  );
};

export default Usuario;
