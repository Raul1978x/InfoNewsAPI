import React from "react";
import { Link } from "react-router-dom";
import Imagen from "./Imagen";
import axios from "axios";
import { API_NOTICIA } from "../../constants/Api.noticias";

const Tarjeta = ({ noticia }) => {
  async function HandleDelete(id) {
    let url = API_NOTICIA.NOTICIAS_BY_ID(id);
    await fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
  }


  
  return (
    <div className="row align-items-start mx-0 p-2">
      <div className="card bg-warning bg-opacity-75 float-start px-4 ">
        <Imagen className="card-img-top" id={noticia.imagen.id} />

        <div className="card-body">
          <h5 className="card-title text-center h3 text-dark  rounded">
            {noticia.titulo}
          </h5>
          <p className="card-text align-justify card-news-body bg-light text-dark rounded p-2 h6">
            {noticia.bajada}
          </p>
          <div className="d-flex">
            <div className="btn btn-primary mx-3">
              <Link className="text-decoration-none text-white" to="/">
                Volver
              </Link>
            </div>
            <Link className="btn btn-success mx-3" to={`/form-edit-noticia/${noticia.id}`}>
              Editar
            </Link>
            <button
              className="btn btn-danger mx-3"
              onClick={() => HandleDelete(noticia.id)}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tarjeta;
