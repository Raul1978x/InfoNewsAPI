import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container text-left ">
      <div className="row align-items-start bg-warning bg-opacity-75 rounded p-3">
        <form className="formulario" action="@{/logincheck}" method="POST">
          <div className="form-group my-3">
            <h3 className="card-title text-dark">
              Accede al portal de noticias!
            </h3>
          </div>
          <div className="form-group my-3">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="EMAIL"
            />
          </div>
          <div className="form-group my-3">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="CONTRASEÑA"
            />
          </div>
          <div className="form-group my-3 d-grid gap-2">
            <button type="submit" className="btn btn-dark m-3">
              Ingresar
            </button>
            <div className="btn btn-dark mx-3">
              <Link className="text-decoration-none text-white" to="/">
                Volver
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
