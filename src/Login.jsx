import { Link } from 'react-router-dom'
import IDGovLogo from './assets/IDGov.svg'

export default function Login() {
  return (
    <div className='container'>
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
            <div className='main-container'>
              <img src={IDGovLogo} alt="IDGov Logo" width="150px" />
              <p className='login-title'>Iniciar sesión</p>
              <form className="h-25 d-flex flex-column justify-content-evenly align-items-center">
                <div className="w-100 mb-1">
                  <input type="email" className="form-control custom-input" name="email" placeholder="Correo" />
                </div>
                <div className="w-100">
                  <input type="password" className="form-control custom-input" name="password" placeholder="Contraseña" />
                </div>
                <span className='login-register-link'>
                  ¿No tienes acceso? <Link to='/register'>Regístrate</Link>
                </span>
                <button type="button" className="btn btn-secondary btn-md w-75 mt-3">Entrar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

