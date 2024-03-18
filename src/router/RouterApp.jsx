import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/Home/HomePage'
import ClientsPage from '../pages/Clients/ClientsPage'
import CotizadorPage from '../pages/Cotizador/CotizadorPage'

export default function RouterApp() {


    const router=createBrowserRouter([
        {path:'/',element:<HomePage/>,
        children:[
          {path:'clientes',element:<ClientsPage/>},
          {path:'cotizador',element:<CotizadorPage/>},
        ]},
        {path:'*',element:<HomePage/>}
    ])


  return (
   router
  )
}
