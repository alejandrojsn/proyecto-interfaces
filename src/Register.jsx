import { Link } from 'react-router-dom'
import IDGovLogo from './assets/IDGov.svg'

export default function Register() {
  return (
    <div className='container'>
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
            <div className='main-container'>
              <img src={IDGovLogo} alt="IDGov Logo" width="150px" />
              <p className='login-title'>Regístrate</p>
              <form className="h-50 d-flex flex-column justify-content-start align-items-center">
                <div className="w-100 mb-1">
                  <input type="number" className="form-control custom-input number-input" name="idnumber" placeholder="Cédula" />
                </div>
                <div className="w-100 mb-1">
                  <input type="email" className="form-control custom-input" name="email" placeholder="Correo" />
                </div>
                <div className="w-100 mb-1">
                  <input type="tel" className="form-control custom-input" name="phone" placeholder="Teléfono" />
                </div>
                <div className="w-100 mb-1">
                  <input type="password" className="form-control custom-input" name="password" placeholder="Contraseña" />
                </div>
                <div className="w-100 mb-1">
                  <input type="password" className="form-control custom-input" id="password-confirmation-input" name="password2" placeholder="Confirmar contraseña" />
                </div>
                <span className='login-register-link'>
                  ¿Ya tienes cuenta? <Link to='/login'>Inicia sesión</Link>
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

