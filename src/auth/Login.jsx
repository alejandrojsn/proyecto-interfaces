import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import IDGovLogo from './../assets/IDGov.svg';
import { TemplateBoilerplate } from '../components/TemplateBoilerplate';
import './../scss/auth.scss';


export default function Login() {

  const navigate = useNavigate();

  return (
    <TemplateBoilerplate>
      <div className='main-container'>
        <img src={IDGovLogo} alt="IDGov Logo" width="150px" />
        <p className='login-title'>Iniciar sesión</p>
        <form className="h-25 d-flex flex-column justify-content-evenly align-items-center">
          <div className="w-100 mb-1">
            <input type="email" className="form-control custom-input" name="email" placeholder="Correo" />
          </div>
          <div className="w-100">
            <input type="password" className="form-control custom-input" name="password" placeholder="Contraseña" autoComplete='false' />
          </div>
          <span className='login-register-link'>
            ¿No tienes acceso? <Link to='/register'>Regístrate</Link>
          </span>
          <button onClick={() => navigate('/dashboard')} type="button" className="btn btn-secondary btn-md w-75 mt-3">Entrar</button>
        </form>
      </div>
    </TemplateBoilerplate>
  )
}