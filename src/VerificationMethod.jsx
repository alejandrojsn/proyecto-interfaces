import React, { useCallback } from 'react';
import IDGovLogo from './assets/IDGov.svg'
import { Link, useNavigate } from 'react-router-dom'

export default function VerificationMethods() {
  const navigate = useNavigate();
  const goTo2fa = useCallback(() => navigate('/2fa'), [navigate]);
  return (
    <div className='container'>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div>
            <img src={IDGovLogo} className="mt-2" alt="IDGov Logo" width="120px" height="80px" />
          </div>
          <div className="vh-100 d-flex flex-column align-items-center">
            <div className="custom-box w-75 m-25 p-40">Método de verificación</div>
            <div className='d-flex flex-column align-items-center w-100'>
              <button className='btn btn-secondary btn-lg w-75 mb-4' onClick={goTo2fa}>Correo</button>
              <button className='btn btn-secondary btn-lg w-75' onClick={goTo2fa}>Mensaje de texto</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
