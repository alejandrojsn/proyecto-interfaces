import 'ldrs/ring';
import { useNavigate } from 'react-router-dom';
import IDGovLogo from './assets/IDGov.svg';
import { useState } from 'react';

function App() {

  let [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fakeNav = (path) => {
    setLoading(true);
    setTimeout(() => {
      navigate(path)
    }, 1000);
  }

  return (
    <div className='container'>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
            <div className='main-container'>
              <img src={IDGovLogo} alt="IDGov Logo" width="200px" />
              <p className='app-title'>IDGov</p>
              {
                loading ? (<l-ring size="60" color="#bfdff5"></l-ring>) : (
                  <>
                    <button onClick={() => fakeNav('/login')} className='btn btn-info btn-lg btn-login text-light text-nowrap'>Iniciar sesión</button>
                    <button onClick={() => fakeNav('/register')} className='btn btn-primary btn-register btn-purple btn-lg w-100'>Registrarse</button>
                  </>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
