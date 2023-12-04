import React from 'react'
import ReactDOM from 'react-dom/client'
import * as bootstrap from 'bootstrap'
import App from './App.jsx'
import Login from './Login.jsx'
import './scss/styles.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Register from './Register.jsx'
import VerificationMethods from './VerificationMethod.jsx'
import TwoFactorCode from './TwoFactorCode.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />,
    id: 'login'
  },
  {
    path: '/register',
    element: <Register />,
    id: 'register'
  },
  {
    path: '/verify',
    element: <VerificationMethods />,
    id: 'verify'
  },
  {
    path: '/2fa',
    element: <TwoFactorCode />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
