import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-68fwu5nxrddy1uk2.us.auth0.com"
      clientId="oFiMzioZ0QNF1tGM2DfmRBZAYhXZswwV"
      cacheLocation='localstorage'
      authorizationParams={{
        redirect_uri: window.location.origin
      }}>
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>
);

