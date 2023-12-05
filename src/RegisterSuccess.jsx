import { useNavigate } from 'react-router-dom'
import IDGovLogo from './assets/IDGov.svg'
import { useCallback } from 'react';

export default function RegisterSuccess() {
  const navigate = useNavigate();
  const goToHome = useCallback(() => navigate('/'), [navigate]);
  return (
    <>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="vh-100 d-flex flex-column justify-content-evenly align-items-center">
              <img src={IDGovLogo} alt="IDGov Logo" width="326px" height="202px"/>
              <div className="custom-box w-75">
                <span>¡Felicitaciones!</span>
                <br/>
                <span>Se ha registrado exitosamente</span>
              </div>
              <div className='d-flex flex-column align-items-center w-100'>
                <button className='btn btn-secondary btn-lg w-75' onClick={goToHome}>Siguiente</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
