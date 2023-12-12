import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import App from './App.jsx'
import Login from './auth/Login.jsx'
import Register from './auth/Register.jsx'
import ChooseDocument from './ChooseDocument.jsx'
import Dashboard from './Dashboard.jsx'
import RegisterSuccess from './RegisterSuccess.jsx'
import TramiteDocumentacion from './TramiteDocumentation.jsx'
import TwoFactorCode from './TwoFactorCode.jsx'
import UpdateInformation from './UpdateInformation.jsx'
import VerificationMethods from './VerificationMethod.jsx'
import './scss/styles.scss'
import UploadDocuments from './UploadDocuments.jsx'
import DocumentName from './DocumentName.jsx'
import UploadSuccess from './UploadSuccess.jsx'

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
  },
  {
    path: '/register-success',
    element: <RegisterSuccess />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/update-information',
    element: <UpdateInformation />,
  },
  {
    path: '/tramite-documentation',
    element: <TramiteDocumentacion />,
  },
  {
    path: '/choose-document',
    element: <ChooseDocument />,
  },
  {
    path: '/upload-document',
    element: <UploadDocuments />,
  },
  {
    path: '/document-name',
    element: <DocumentName />,
  },
  {
    path: '/upload-success',
    element: <UploadSuccess />,
  },
],
  {
    basename: '/proyecto-interfaces/',
  });

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
}
