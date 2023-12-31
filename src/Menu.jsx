import React, { useCallback } from 'react';
import backButton from './assets/backButton.svg';
import { useNavigate } from 'react-router-dom';

export default function Menu({ shown, onClose }) {
    const navigate = useNavigate();
    const goToStart = useCallback(() => navigate('/'), [navigate]);
    const goToUpdateInfo = useCallback(() => navigate('/update-information'), [navigate]);
    const goToTramiteDocumentacion = useCallback(() => navigate('/tramite-documentation'), [navigate]);
    const goToUploadDocuments = useCallback(() => navigate('/upload-document'), [navigate]);
    const goToDashboard = useCallback(() => navigate('/dashboard'), [navigate]);
    return (
        <div className={`${shown ? 'd-flex' : 'd-none'} menu p-2 flex-column`}>
            <div className='d-flex w-100'>
                <img className="c-pointer ms-auto" src={backButton} alt="" onClick={onClose} />
            </div>
            <div className="d-flex flex-column justify-content-evenly flex-grow-1 align-items-center">
                <div className="custom-box box-sm p-3">Seleccione la operación deseada</div>
                <button className="btn btn-secondary w-100" onClick={goToUpdateInfo}>Actualización de datos personales</button>
                <button className="btn btn-secondary w-100" onClick={goToUploadDocuments}>Carga de documentos y actas</button>
                <button className="btn btn-secondary w-100" onClick={goToDashboard}>Consulta de estado y seguimiento de trámites</button>
                <button className="btn btn-secondary w-100">Gestión de cita y turnos</button>
                {/* <button className="btn btn-secondary w-100">Información</button> */}
                {/* <button className="btn btn-secondary w-100">Permisos de trabajo y residencia</button> */}
                <button className="btn btn-secondary w-100" onClick={goToTramiteDocumentacion}>Tramites de documentación legal</button>
                <button className="btn btn-purple w-100" onClick={goToStart}>Cerrar sesión</button>
            </div>
        </div>
    );
}
