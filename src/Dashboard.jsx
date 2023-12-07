import IDGovLogo from './assets/IDGov.svg'
import { Link, useNavigate } from 'react-router-dom'
import MenuButton from './MenuButton';
import TramiteModal from './TramiteModal';
import { useCallback, useState } from 'react';

const tramites = [
  {
    name: 'Tramite 1',
    status: 'Finalizado',
  },
  {
    name: 'Tramite 2',
    status: 'En proceso',
  },
  {
    name: 'Tramite 3',
    status: 'Cancelado',
  },
  {
    name: 'Tramite 4',
    status: 'Atención',
  },
];

const colorMap = {
  'Finalizado': 'text-success',
  'En proceso': 'text-info',
  'Cancelado': 'text-danger',
  'Atención': 'text-warning',
}

export default function Dashboard() {
  const navigate = useNavigate();
  const [activeTramite, setActiveTramite] = useState(null);
  const [isTramiteModalShown, setIsTramiteModalShown] = useState(false);
  const openTramiteModal = useCallback((tramite) => {
    setActiveTramite(tramite);
    setIsTramiteModalShown(true);
  }, [setActiveTramite, setIsTramiteModalShown]);
  const closeTramiteModal = useCallback(() => setIsTramiteModalShown(false), [setIsTramiteModalShown]);
  return (
    <>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 position-relative vh-100">
            <TramiteModal
              name={tramites[activeTramite]?.name}
              status={tramites[activeTramite]?.status}
              onClose={closeTramiteModal}
              shown={isTramiteModalShown}
            />
            <div className="d-flex">
              <img src={IDGovLogo}  className="mt-2" alt="IDGov Logo" width="120px" height="80px"/>
              <MenuButton className="ms-auto"/>
            </div>
            <div className="d-flex flex-column align-items-center">
              <div className="search-bar w-75 mt-5">
                <input type="text" className="form-control w-100" placeholder="Buscar..." />
              </div>
              <div className="custom-box w-75 m-5 p-4">¡Bienvenido, Nombre!</div>
              <div className="d-flex flex-column w-75 custom-table">
                <div className="d-flex w-100 table-head">
                  <div className="w-50 text-center">Tramites</div>
                  <div className="w-50 text-center">Estatus</div>
                </div>
                {tramites.map((tramite, index) => {
                  return (
                  <div className="d-flex w-100 table-row" key={index}>
                      <div
                        className="w-50 text-center"
                        onClick={() => openTramiteModal(index)}
                      >{tramite.name}</div>
                      <div className={`w-50 text-center ${colorMap[tramite.status]}`}>{tramite.status}</div>
                </div>
                );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
