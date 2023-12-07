import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react';


export default function UsuarioTerceroModal({ isUsuario, onClose, shown }) {
    const navigate = useNavigate();
    const goToChooseDocument = useCallback(() => navigate('/choose-document'), [navigate]);  
    return (
    <>
      <div
        className={`tramite-modal ${shown ? "d-flex" : "d-none"} w-50 py-5 px-3 flex-column position-absolute align-items-center`}
        style={{ right: '30%', left: '30%' }}
      >
        <div className="custom-box py-2 px-5">{isUsuario ? "Usuario" : "Tercero"}</div>
        <div className="tramite-box my-5 p-5">
          <span>
            Como {isUsuario ? "usuario" : "representante/tutor encargado del menor de edad"}, debe asegurarse de llevar consigo los siguientes
            documentos impresos:
          </span>
          <ul className="d-flex flex-column align-items-center padding-inline-start-0">
            <li>Requerimiento 1</li>
            <li>Requerimiento 2</li>
            <li>Requerimiento 3</li>
          </ul>
        </div>
        <button className="btn btn-info text-light w-75" onClick={goToChooseDocument}>
          Siguiente
        </button>
        <button className="btn btn-purple mt-3 w-75 text-light" onClick={onClose}>
          Volver
        </button>
      </div>
    </>
  );
}
