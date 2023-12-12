import React, { useCallback, useState } from 'react';
import IDGovLogo from './assets/IDGov.svg'
import { Link, useNavigate } from 'react-router-dom'

export default function DocumentName() {
  const navigate = useNavigate();
  const back = useCallback(() => navigate(-1), [navigate]);
  const upload = useCallback(() => navigate('/upload-success'), [navigate]);
  return (
    <div className='container'>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6 position-relative vh-100">
          <div>
            <img src={IDGovLogo} className="mt-2" alt="IDGov Logo" width="120px" height="80px" />
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center h-75">
            <div className="bg-box d-flex flex-column align-items-center justify-content-center w-75 p-5">
                <div className="w-100 mb-5">
                    <input type="text" className="form-control custom-input number-input" name="name" placeholder="Nombre del documento" />
                </div>
                <div className='d-flex justify-content-evenly w-100'>
                    <button className='btn btn-success btn-lg text-light text-nowrap mb-2' onClick={upload}>Cargar</button>
                    <button className='btn btn-danger btn-lg' onClick={back}>Eliminar</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
