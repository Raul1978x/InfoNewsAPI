import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [titulo, setTitulo] = useState("");
  const [bajada, setBajada] = useState("");
  const [cuerpo, setCuerpo] = useState("");
  const [archivo, setArchivo] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("archivo", archivo);
    formData.append("titulo", titulo);
    formData.append("cuerpo", cuerpo);
    formData.append("bajada", bajada);

    axios
      .post("http://localhost:8080/api/noticias", formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFileChange = (event) => {
    setArchivo(event.target.files[0]);
  };

  return (
    <div className="container bg-warning bg-opacity-75 rounded text-dark">
      <form
        onSubmit={handleSubmit}
        className="formulario"
        encType="multipart/form-data"
      >
        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">
            Título de la noticia
          </label>
          <input
            type="text"
            className="form-control"
            id="titulo"
            name="titulo"
            placeholder="Ingrese el título de la noticia"
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="bajada" className="form-label">
            Bajada de la noticia
          </label>
          <textarea
            id="bajada"
            name="bajada"
            rows="3"
            placeholder="Ingrese la bajada de la noticia"
            onChange={(e) => setBajada(e.target.value)}
            className="form-control"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="cuerpo" className="form-label">
            Cuerpo de la noticia
          </label>
          <textarea
            className="form-control"
            id="cuerpo"
            name="cuerpo"
            rows="10"
            placeholder="Ingrese el cuerpo de la noticia"
            onChange={(e) => setCuerpo(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            Cargar imagen de la noticia
          </label>
          <input
            className="form-control"
            type="file"
            name="imagen"
            id="formFile"
            onChange={handleFileChange}
          />
        </div>
        {archivo && (
          <div className="mb-3">
            <img
              src={URL.createObjectURL(archivo)}
              alt={`Imagen de ${titulo}`}
              className="img-fluid"
            />
          </div>
        )}
        <button type="submit" className="btn btn-dark m-3 text-right">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default Form;
