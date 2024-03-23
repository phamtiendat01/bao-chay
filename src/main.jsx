import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import router from './services/router/index.jsx';
import i18n from './services/i18n/i18n.js';
import AuthProvider from './context/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <I18nextProvider i18n={i18n}>
        <RouterProvider router={router} />
      </I18nextProvider>
    </AuthProvider>
  </React.StrictMode>
);
