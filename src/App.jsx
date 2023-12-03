import IDGovLogo from './assets/IDGov.svg'
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-6">
            <div className="vh-100 d-flex flex-column justify-content-evenly align-items-center">
              <img src={IDGovLogo} alt="IDGov Logo" width="326px" height="202px"/>
              <button className='btn btn-outline-light btn-lg'>IDGov</button>
              <Link to="login">
                <button className='btn btn-info btn-lg text-light text-nowrap'>Iniciar sesión</button>
              </Link>
              <button className='btn btn-primary btn-purple btn-lg'>Registrarse</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
