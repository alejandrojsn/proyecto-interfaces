import { Link } from 'react-router-dom'
import IDGovLogo from './assets/IDGov.svg'

export default function Register() {
  return (
    <>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="vh-100 d-flex flex-column justify-content-evenly align-items-center">
              <img src={IDGovLogo} alt="IDGov Logo" width="326px" height="202px"/>
              <form className="h-75 d-flex flex-column justify-content-evenly align-items-center">
                <div className="w-75">
                    <input type="number" className="form-control custom-input" name="idnumber" placeholder="Cédula" />
                </div>
                <div className="w-75">
                    <input type="email" className="form-control custom-input" name="email" placeholder="Correo" />
                </div>
                <div className="w-75">
                    <input type="tel" className="form-control custom-input" name="phone" placeholder="Teléfono" />
                </div>
                <div className="w-75">
                    <input type="password" className="form-control custom-input" name="password" placeholder="Contraseña" />
                </div>
                <div className="w-75">
                    <input type="password" className="form-control custom-input" id="password-confirmation-input" name="password2" placeholder="Confirmación de contraseña" />
                </div>
                <Link to="/verify">
                    <button className="btn btn-secondary btn-lg w-75">Entrar</button>
                </Link>
                </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

