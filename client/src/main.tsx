/*import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ErrorPage from './pages/errorPage.tsx'
import homePage from './pages/homePage.tsx'

const router = createBrowserRouter = ([
  {
    path:'/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <homePage />,
      },
      
      
    ]
  }
]) */

  import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import './assets/Global.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);