// const [titulo, setTitulo] = useState("");
// const [bajada, setBajada] = useState("");
// const [cuerpo, setCuerpo] = useState("");
// const [archivo, setArchivo] = useState(null);
// const [noticia, setNoticia] = useState();

// const handleSubmit = (e) => {
//   e.preventDefault();

//   // noticia.append("titulo", titulo);
//   // formData.append("cuerpo", cuerpo);
//   // formData.append("archivo", archivo);
//   // formData.append("bajada", bajada);

//   //   axios
//   //     .post("http://localhost:8080/api/noticias", formData)
//   //     .then((response) => {
//   //       console.log(response.data);
//   //     })
//   //     .catch((error) => {
//   //       console.log(error);
//   //     });
// };

// const handleFileChange = (event) => {
//   setArchivo(event.target.files[0]);
// };

import React, { useEffect, useState } from "react";
import axios from "axios";
import NoticiaService from "../../services/NoticiaService";
import { API_NOTICIA } from "./../../constants/Api.noticias";

const FormEditNoticia = ({ id }) => {
  const [titulo, setTitulo] = useState("");
  const [bajada, setBajada] = useState("");
  const [cuerpo, setCuerpo] = useState("");
  const [archivo, setArchivo] = useState(null);
  const [noticia, setNoticia] = useState();

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/noticias/{id}")
      .then((response) => {
        setUsuarios(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(usuarios);

  useEffect(() => {
    const getNoticia = async () => {
      const response = await axios.get(API_NOTICIA.NOTICIAS_BY_ID(id));
      setNoticia(response.data);
      setTitulo(response.data.titulo);
      setBajada(response.data.bajada);
      setCuerpo(response.data.cuerpo);
      console.log(id);
    };
    getNoticia();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("bajada", bajada);
    formData.append("cuerpo", cuerpo);
    if (archivo) {
      formData.append("archivo", archivo);
    }

    await axios.put(API_NOTICIA.NOTICIAS_BY_ID(id), formData);
    // Redirigir o realizar cualquier otra acción después de la actualización
  };

  const handleFileChange = (event) => {
    setArchivo(event.target.files[0]);
  };

  if (!noticia) {
    return <div className="text-danger">Loading...</div>;
  }

  return (
    <div
      
      className="container bg-success bg-opacity-75 rounded"
    >
      <form
        onSubmit={handleSubmit}
        className="formulario"
        encType="multipart/form-data"
      >
        <input hidden value="${id}" name="id" />
        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">
            Tìtulo de la noticia
          </label>
          <input
            // text={noticia.titulo}
            type="text"
            className="form-control"
            id="titulo"
            name="titulo"
            placeholder="actualice el titulo de la noticia"
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="bajada" className="form-label">
            bajada de la noticia
          </label>
          <textarea
            id="bajada"
            name="bajada"
            rows="3"
            placeholder="Actualice la bajada de la noticia"
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
            placeholder="Actualice el cuerpo de la noticia"
            onChange={(e) => setCuerpo(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            Cargar imagen del producto
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
              alt={`imagen de ${titulo}`}
              className="img-fluid"
            />
          </div>
        )}
        <button type="submit" className="btn btn-dark m-3 text-right">
          Actualizar
        </button>
      </form>
    </div>
  );
};

export default FormEditNoticia;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import NoticiaService from "../../services/NoticiaService";
// import { API_NOTICIA } from "./../../constants/Api.noticias";

// const FormEditNoticia = ({id}) => {
//   const [titulo, setTitulo] = useState("");
//   const [bajada, setBajada] = useState("");
//   const [cuerpo, setCuerpo] = useState("");
//   const [archivo, setArchivo] = useState(null);
//   const [noticia, setNoticia] = useState();

//   useEffect(() => {
//     const getNoticia = async (id) => {
//       const response = await axios.get(API_NOTICIA.NOTICIAS_BY_ID(id));
//       setNoticia(response.data);
//       setTitulo(response.data.titulo);
//       setBajada(response.data.bajada);
//       setCuerpo(response.data.cuerpo);
//     };
//     getNoticia();
//     }, [id]);
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("titulo", titulo);
//     formData.append("bajada", bajada);
//     formData.append("cuerpo", cuerpo);
//     if (archivo) {
//       formData.append("archivo", archivo);
//     }
// console.log(noticia);
//     await axios.put(API_NOTICIA.NOTICIAS_BY_ID(id), formData);
//     // Redirigir o realizar cualquier otra acción después de la actualización
//   };

//   const handleFileChange = (event) => {
//     setArchivo(event.target.files[0]);
//   };

//   if (!noticia) {
//     return <div className="text-danger">Loading...</div>;
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="titulo">Título:</label>
//         <input
//           type="text"
//           id="titulo"
//           value={titulo}
//           onChange={(e) => setTitulo(e.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="bajada">Bajada:</label>
//         <input
//           type="text"
//           id="bajada"
//           value={bajada}
//           onChange={(e) => setBajada(e.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="cuerpo">Cuerpo:</label>
//         <textarea
//           id="cuerpo"
//           value={cuerpo}
//           onChange={(e) => setCuerpo(e.target.value)}
//         ></textarea>
//       </div>
//       <div>
//         <label htmlFor="archivo">Archivo:</label>
//         <input type="file" id="archivo" onChange={handleFileChange} />
//       </div>
//       <button type="submit">Guardar cambios</button>
//     </form>
//   );
// };

// export default FormEditNoticia;
