import React from "react";

function Imagen({ id }) {
  const urlImagen = `http://localhost:8080/imagen/${id}`;

  return <img src={urlImagen} alt="Imagen" className="w-100 p-1" />;
}

export default Imagen;
