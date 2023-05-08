import React from "react";

const FormEditUsuario = () => {
  return (
    <div className="container text-left">
      <div className="row align-items-start text-dark bg-success rounded">
        <form
          className="formulario"
          // action="@{/admin/editaUsuario/__${usuario.id}__}"
          method="POST"
          encType="multipart/form-data"
        >
          <div className="form-group my-3">
            <input hidden />

            <h3 className="card-title">Actualizar usuario</h3>
          </div>
          <div className="form-group my-3">
            <input
              type="text"
              className="form-control"
              name="nombre"
              placeholder="NOMBRE"
            />
          </div>
          <div className="form-group my-3">
            <input
              type="text"
              className="form-control"
              name="email"
              placeholder="EMAIL"
            />
          </div>
          <div className="form-group my-3">
            <input type="file" className="form-control" name="archivo" />
          </div>
          <div className="form-group my-3">
            <input
              type="text"
              className="form-control"
              name="password"
              placeholder="CONTRASEÑA"
            />
          </div>
          <div className="form-group my-3">
            <input
              type="text"
              className="form-control"
              name="password2"
              placeholder="REPETIR CONTRASEÑA"
            />
          </div>

          <button type="submit" className="btn btn-dark m-3 float-end">
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormEditUsuario;
