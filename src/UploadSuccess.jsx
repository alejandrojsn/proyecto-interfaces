import React, { useCallback} from 'react';
import { useNavigate } from 'react-router-dom';
import IDGovLogo from './assets/IDGov.svg';

export default function UploadSuccess() {
  const navigate = useNavigate();
  const goToDashboard = useCallback(() => navigate("/dashboard"), [navigate]);
  const goToUpload = useCallback(() => navigate("/upload-document"), [navigate]);
  return (
    <div className='container'>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
            <div className='main-container'>
              <img src={IDGovLogo} alt="IDGov Logo" width="200px" />
              <p className='app-title text-center'>¡El archivo ha sido cargado exitosamente!</p>
            <button onClick={goToUpload} className='btn btn-info btn-lg text-light'>Cargar otro archivo</button>
            <button onClick={goToDashboard} className='btn btn-primary btn-purple btn-lg'>Volver</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
