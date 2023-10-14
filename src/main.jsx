import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'

import Error from './routes/Error/index.jsx'

const router = createBrowserRouter([
  {
    path: '/' ,
    element: <App/> ,
    errorElement: <Error/>,
    children: []
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
