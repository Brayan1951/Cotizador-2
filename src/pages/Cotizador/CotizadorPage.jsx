import React from 'react'
import './cotizador.css'
import DatosCliente from './DatosCliente.jsx'
import DatosCotizacion from './DatosCotizacion.jsx'
import ListaProductoPage from './ListaProductoPage.jsx'

export default function CotizadorPage() {
  return (
    <div className='cotizador-section col outle-coolbox row  '>
      <div className="col-9 formulario-cotizacion ">

        <DatosCliente/>
        <DatosCotizacion/>


      </div>
      




      
      <div className="producto-page col py-3">
        <ListaProductoPage/>
      </div>



    </div>
  )
}
