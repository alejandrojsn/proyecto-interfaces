import { Link, useNavigate } from "react-router-dom";
import IDGovLogo from "./assets/IDGov.svg";
import { useCallback } from "react";

export default function UpdateInformation() {
    const navigate = useNavigate();
    const goToVerify = useCallback(() => navigate("/verify"), [navigate]);
    const goToDashboard = useCallback(() => navigate("/dashboard"), [navigate]);

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
                                <img
                                    src={IDGovLogo}
                                    alt="IDGov Logo"
                                    width="150px"
                                />
                            </Link>
                            <p className="login-title">Actualizar Datos</p>
                            <form className="h-50 d-flex flex-column justify-content-start align-items-center">
                                <div className="w-100 mb-1">
                                    <input
                                        type="email"
                                        className="form-control custom-input"
                                        name="email"
                                        placeholder="Correo"
                                    />
                                </div>
                                <div className="w-100 mb-1">
                                    <input
                                        type="tel"
                                        className="form-control custom-input"
                                        name="phone"
                                        placeholder="Teléfono"
                                    />
                                </div>
                                <div className="w-100 mb-1">
                                    <input
                                        type="direction"
                                        className="form-control custom-input"
                                        name="direction"
                                        placeholder="Direccion 1"
                                    />
                                </div>
                                <div className="w-100 mb-1">
                                    <input
                                        type="direction"
                                        className="form-control custom-input"
                                        name="direction"
                                        placeholder="Direccion 2"
                                    />
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-secondary btn-md w-100 mt-3"
                                    onClick={goToVerify}
                                    title="Cambiar contraseña"
                                >
                                    Cambiar contraseña
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-secondary btn-sm align-self-end mt-3"
                                    onClick={goToDashboard}
                                    title="Aplicar"
                                    style={{
                                        textDecoration: "none",
                                    }}
                                >
                                    Aplicar &#9654;
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
