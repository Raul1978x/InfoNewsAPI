import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Usuario from "./Usuario";

const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/usuarios")
      .then((response) => {
        setUsuarios(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const userList = usuarios.map((u) => <Usuario usuario={u} key={u.id} />);

  return (
    <div className="container ">
      <div className="row  bg-warning bg-opacity-50 ">
        <div className="">
          <table className="table table-striped">
            <tr className="my-2">
              <th>Nombre</th>
              <th>Email</th>
              <th>Tipo de usuario</th>
              <th>Imagen</th>
              <th className="text-left">Accion</th>
            </tr>
            {userList}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListaUsuarios;
