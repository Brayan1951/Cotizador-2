import React, { useEffect, useState } from 'react'
import "./clients.css"
import FormFindClient from './FormFindClient';
import ListClients from './ListClients';
export default function ClientsPage() {


  // console.log(tamañoPantalla);
  return (
    <div className="col clientes-section outle-coolbox">


      {/* busqueda */}
      <FormFindClient/>

      {/* lista */}
      <ListClients/>




    </div>
  )
}
