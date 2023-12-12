import React, { useCallback, useState } from 'react';
import IDGovLogo from './assets/IDGov.svg'
import { Link, useNavigate } from 'react-router-dom'
import UploadDocumentModal from './UploadDocumentModal';
import MenuButton from './MenuButton';

export default function UploadDocuments() {
  const navigate = useNavigate();
  const [modalShown, setModalShown] = useState(false);
  const showModal = useCallback(() => setModalShown(true), []);
  return (
    <div className='container'>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6 position-relative vh-100">
          <UploadDocumentModal shown={modalShown}/>
          <div className="d-flex">
            <img src={IDGovLogo} className="mt-2" alt="IDGov Logo" width="120px" height="80px" />
            <MenuButton className="ms-auto" />
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center h-75">
            <div className="custom-box w-75 m-5">Seleccione la opción deseada</div>
            <div className='d-flex flex-column align-items-center w-100'>
              <button className='btn btn-secondary btn-lg w-75 mb-4 p-3' onClick={showModal}>Cargar documento</button>
              <button className='btn btn-secondary btn-lg w-75 mb-4 p-3' onClick={showModal}>Cargar acta</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
