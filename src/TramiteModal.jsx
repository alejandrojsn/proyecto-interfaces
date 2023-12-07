
export default function TramiteModal({ name, status, onClose, shown}) {
    return (<>
        <div className={`tramite-modal ${shown ? 'd-flex' : 'd-none'} py-5 px-3 flex-column position-absolute align-items-center`}>
            <div className="custom-box py-2 px-5">{name}</div>
            <div className="tramite-box my-5 p-5">
                {status === 'Finalizado' && <span>Su tramite ha sido finalizado exitosamente</span>}
                {status === 'En proceso' && <span>Su tramite se encuentra en proceso. Le notificaremos en la brevedad posible</span>}
                {status === 'Cancelado' && <div>
                    <span>Su trámite fue cancelado por agotar el tiempolímite para cargar los siguientes  documentos/actas:</span>
                    <ul className="d-flex flex-column align-items-center padding-inline-start-0">
                        <li>Documento 1</li>
                        <li>Documento 2</li>
                    </ul>
                    <span>Si gusta, puede iniciar nuevamente el proceso</span>
                </div>
                }
                {status === 'Atención' && <div>
                    <span>Su trámite requiere de los siguientes documentos/actas. Debe cargarlos para poder continuar:</span>
                    <ul className="d-flex flex-column align-items-center padding-inline-start-0">
                        <li>Documento 1</li>
                        <li>Documento 2</li>
                    </ul>
                </div>
                }
            </div>
            { status !== 'Finalizado' && <button className="btn btn-info text-light w-75">
                {status === 'En proceso' && 'Ir a carga de documentos'}
                {status === 'Cancelado' && 'Tramites de documentación legal'}
                {status === 'Atención' && 'Ir a carga de documentos'}
            </button>
            }
            <button className="btn btn-purple mt-3 w-75 text-light" onClick={onClose}>Volver</button>
        </div>
    </>);
}