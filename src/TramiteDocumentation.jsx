import React, { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UsuarioTerceroModal from "./UsuarioTerceroModal";
import IDGovLogo from "./assets/IDGov.svg";

export default function TramiteDocumentacion() {
  const navigate = useNavigate();
  const [isUsuario, setIsUsuario] = useState(true);
  const [isModalShown, setIsModalShown] = useState(false);
  const openModal = useCallback(
    (usuario) => {
      setIsUsuario(usuario);
      setIsModalShown(true);
    },
    [setIsUsuario, setIsModalShown]
  );
  const closeTramiteModal = useCallback(() => setIsModalShown(false), [setIsModalShown]);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
            <div className="main-container">
              <button
                type="button"
                className="btn btn-secondary btn-sm align-self-start"
                onClick={() => navigate(-1)}
                title="Volver"
                style={{
                  marginLeft: "10%",
                  textDecoration: "none",
                }}
              >
                &#9664; Volver
              </button>
              <Link to="/dashboard" title="Ir al Dashboard">
                <img src={IDGovLogo} alt="IDGov Logo" width="150px" />
              </Link>
              <p className="login-title">Trámites de documentacion legal</p>
              <form className="h-50 d-flex flex-column justify-content-start align-items-center">
                <button
                  type="button"
                  className="btn btn-secondary btn-md w-100 mt-4"
                  onClick={() => openModal(true)}
                  title="Usuario directo"
                  style={{
                    fontSize: "25px",
                    padding: "7px 65px",
                  }}
                >
                  Usuario
                </button>
                <button
                  type="button"
                  className="btn btn-secondary btn-md w-100 mt-5"
                  onClick={() => openModal(false)}
                  title="Representado, tutorizado, familiar directo"
                  style={{
                    fontSize: "25px",
                    padding: "7px 65px",
                  }}
                >
                  Tercero
                </button>
              </form>
            </div>
            <UsuarioTerceroModal isUsuario={isUsuario} onClose={closeTramiteModal} shown={isModalShown} />
          </div>
        </div>
      </div>
    </div>
  );
}
