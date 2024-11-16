import { StrictMode } from 'react'
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
])