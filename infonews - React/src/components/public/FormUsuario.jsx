import React, { useState, useEffect } from "react";
import CustomHook, { useUserForm } from "../../hooks/CustomHook";
import Userservice from "../../services/Userservice";

const FormUsuario = () => {
  const { form, setForm, handleChanges } = useUserForm();

  const [areEquals, setAreEquals] = useState(true);
  const [passwordConfirmation, setPasswordConfirmation] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
     Userservice.register(form);
    console.log(form);
  };

  const handlePasswordConfirmation = (e) => {
    setPasswordConfirmation(e.target.value);
  };

  useEffect(() => {
    const { password } = form;
    setAreEquals(password === passwordConfirmation);
  }, [passwordConfirmation]);

  return (
    <div className="container text-left">
      <div className="row align-items-start bg-warning rounded bg-opacity-75">
        <form
          className="formulario needs-validation"
          //   method="POST"
          encType="multipart/form-data"
          noValidate
        >
          <div className="form-group my-3">
            <h3 className="card-title text-dark">Registrate!</h3>
          </div>
          <div className="form-group my-3">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="NOMBRE"
              onChange={handleChanges}
            />
          </div>
          <div className="form-group my-3">
            <input
              type="text"
              className="form-control"
              name="email"
              placeholder="EMAIL"
              onChange={handleChanges}
            />
          </div>
          <div className="form-group my-3">
            <input type="file" className="form-control" name="image" />
          </div>
          <div className="form-group my-3">
            <input
              type="text"
              className="form-control"
              name="password"
              placeholder="CONTRASEÑA"
              onChange={handleChanges}
            />
          </div>
          <div className="form-group my-3">
            <input
              type="text"
              className="form-control"
              placeholder="REPETIR CONTRASEÑA"
              onChange={handlePasswordConfirmation}
            />
          </div>
          {!areEquals && (
            <div className="alert d-flex alert-danger" role="alert">
              ❌Las claves no son iguales
            </div>
          )}

          <button
            disabled={!areEquals}
            type="submit"
            className="btn btn-dark m-3 float-end"
            onClick={handleSubmit}
          >
            Registrame
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormUsuario;
