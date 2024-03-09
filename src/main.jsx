import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/Submenu-pages/Home.jsx'
import About from './components/Submenu-pages/About.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: 'about',
        element: <About/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
