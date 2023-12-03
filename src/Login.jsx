import IDGovLogo from './assets/IDGov.svg'

export default function Login() {
  return (
    <>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-6">
            <div className="vh-100 d-flex flex-column justify-content-evenly align-items-center">
              <img src={IDGovLogo} alt="IDGov Logo" width="326px" height="202px"/>
              <form className="h-50 d-flex flex-column justify-content-evenly align-items-center">
                <div className="w-75">
                    <input type="email" className="form-control custom-input" name="email" placeholder="Correo" />
                </div>
                <div className="w-75">
                    <input type="password" className="form-control custom-input" name="password" placeholder="Contraseña" />
                </div>
                <button type="submit" className="btn btn-secondary btn-lg w-75">Entrar</button>
                </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

