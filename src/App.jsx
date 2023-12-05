import { Link } from 'react-router-dom'
import IDGovLogo from './assets/IDGov.svg'
function App() {
  return (
    <div className='container'>
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
            <div className='main-container'>
              <img src={IDGovLogo} alt="IDGov Logo" width="200px" />
              <p className='app-title'>IDGov</p>
              <Link to="login">
                <button className='btn btn-info btn-lg btn-login text-light text-nowrap'>Iniciar sesión</button>
              </Link>
              <Link to="register">
                <button className='btn btn-primary btn-register btn-purple btn-lg w-100'>Registrarse</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
