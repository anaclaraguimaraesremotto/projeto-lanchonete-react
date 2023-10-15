import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Error from './routes/Error/index.jsx'
import Home from './routes/Home/index.jsx'
import Cardapio from './routes/Cardapio/index.jsx'
import Pedidos from './routes/Pedidos/index.jsx'

const router = createBrowserRouter([
  {
    path: '/' ,
    element: <App/> ,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/cardapio',
        element: <Cardapio/>
      },
      {
        path: '/pedidos',
        element: <Pedidos/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
