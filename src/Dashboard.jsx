import { useCallback } from 'react';
import IDGovLogo from './assets/IDGov.svg'
import { Link, useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div>
              <img src={IDGovLogo}  className="mt-2" alt="IDGov Logo" width="120px" height="80px"/>
            </div>
            <div className="vh-100 d-flex flex-column align-items-center">
              <div className="search-bar w-75 mt-5">
                <input type="text" className="form-control w-100" placeholder="Buscar..." />
              </div>
              <div className="custom-box w-75 m-5 p-4">¡Bienvenido, Nombre!</div>
              <div className="d-flex flex-column w-75 custom-table">
                <div className="d-flex w-100 table-head">
                  <div className="w-50 text-center">Tramites</div>
                  <div className="w-50 text-center">Estatus</div>
                </div>
                <div className="d-flex w-100 table-row">
                  <div className="w-50 text-center">Tramite 1</div>
                  <div className="w-50 text-center text-success">Finalizado</div>
                </div>
                <div className="d-flex w-100 table-row">
                  <div className="w-50 text-center">Tramite 2</div>
                  <div className="w-50 text-center text-primary">En proceso</div>
                </div>
                <div className="d-flex w-100 table-row">
                  <div className="w-50 text-center">Tramite 3</div>
                  <div className="w-50 text-center text-danger">Cancelado</div>
                </div>
                <div className="d-flex w-100 table-row">
                  <div className="w-50 text-center">Tramite 4</div>
                  <div className="w-50 text-center text-warning">Atención</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
