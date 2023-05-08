import React, { useEffect } from "react";
import "../../css/NavbarApp.css";
import Hora from "./Hora";
import Fecha from "./Fecha";
import Weather from "./ClimaPorZip";
import myImage from "../../img/imagen para perfil2.png";
import logo from "../../img/InfoNewsLogo.png";
import FormUsuario from "./FormUsuario";
import Login from "./Login";
import { Link } from "react-router-dom";

const NavbarApp = () => {
  const login = true;

  const handleRegister = () => {
    <FormUsuario />;
  };

  const handleLogin = () => {};
  <Login />;
  return (
    <>
      <nav className="navbar bg-warning navbar-expand-lg bg-opacity-75 mb-3">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ul-left align-middle">
              <Link className="" to="/">
                <img
                  src={logo}
                  alt="InfoNewsLogo"
                  className="m-0 w-90 logoInfoNews"
                />
              </Link>
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Menu
                </button>
                <ul className="dropdown-menu bg-warning bg-opacity-75">
                  <li>
                    <button className="dropdown-item">
                      <Link
                        className="text-decoration-none text-dark"
                        to="/usuarios"
                      >
                        Lista de usuarios registrados
                      </Link>
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item">
                      <Link
                        className="text-decoration-none text-dark"
                        to="/form-usuario"
                      >
                        Registrar nuevo usuario
                      </Link>
                    </button>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button className="dropdown-item">
                      <Link
                        className="text-decoration-none text-dark"
                        to="/form-noticia"
                      >
                        Crear Noticia
                      </Link>
                    </button>
                  </li>
                </ul>
              </li>
              <div className="nav-link active">
                <li>
                  <div className="p-0 m-0 text-start d-flex fw-bold fs-6">
                    <Fecha />
                    <br />
                    <Hora />
                  </div>
                </li>
              </div>
              <li>
                <Weather />
              </li>
            </ul>
            {!login && (
              <ul className="nav justify-content-center ul-rigth">
                <li className="nav-item ms-5">
                  <img
                    className="logo my-1 fs-5 rounded border w-10 border-primary"
                    src={myImage}
                    alt="img logo perfil"
                  ></img>
                </li>
                <li className="nav-item">
                  <h4
                    className="nav-link active ms-1 my-1 fs-5"
                    // th:text="${logueado}"
                  >
                    Raul Gomez
                  </h4>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link active btn btn-outline-dark text-warning m-1 ms-1 fs-5"
                    type="button"
                    aria-current="page"
                  >
                    <Link to="/logout"></Link>
                    Cerrar sesion
                  </button>
                </li>
              </ul>
            )}
            {login && (
              <ul className="nav justify-content-center ul-rigth">
                <li className="nav-item">
                  <button
                    className="nav-link active btn btn-outline-dark text-warning p-2 m-1 ms-1 fs-5"
                    type="button"
                    aria-current="page"
                    onClick={handleLogin}
                  >
                    <Link
                      className="text-decoration-none text-white"
                      to="/login"
                    >
                      Ingresar
                    </Link>
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link active btn btn-outline-dark text-warning p-2 m-1 ms-1 fs-5"
                    type="button"
                    aria-current="page"
                    onClick={handleRegister}
                  >
                    {" "}
                    <Link
                      className="text-decoration-none text-white"
                      to="/form-usuario"
                    >
                      Registrate
                    </Link>
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarApp;
