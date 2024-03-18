import React, { useState } from 'react'
import "./clients.css"
import useForm from '../../hooks/useForm'
import { obtener_Cliente_RazonSocial, obtener_Cliente_ruc } from '../../Api/getClientex'
import { useClientesStore } from '../../store/clientes'
export default function FormFindClient() {

  const { razonSocial,ruc,changeForm,resetForm} = useForm({razonSocial:'',ruc:''})
  const [loading, setloading] = useState()

  const addClientes=useClientesStore(state=>state.addClientes)


  
  const FindClientsRazonSocial=()=>{
    
    obtener_Cliente_RazonSocial(razonSocial).then(({resp,clientes})=>{
      addClientes(clientes)
    })

    resetForm()
    
  }
  
  const FindClientsRuc=()=>{
    
    
    obtener_Cliente_ruc(ruc).then(({resp,clientes})=>{
      addClientes(clientes)
    })
  }


  return (
    <div className="buqueda-cliente   d-md-flex justify-content-md-around">
    <div className="input-group ">

      <div className=" form-floating  mb-3">
        <input value={razonSocial} onChange={changeForm} name='razonSocial' type="text" className=" form-control" id="floatingInput" placeholder="name@example.com" aria-describedby="button-addon2" />
        <label htmlFor="floatingInput">Razon Social</label>
      </div>
      <button className="btn btn-success" type="button" id="button-addon2" onClick={()=>FindClientsRazonSocial()} >buscar</button>

    </div>
    <div>
      <div className='m-3'>

        <p className='text-center'>-o-</p>
      </div>
    </div>
    <div className="input-group ">

      <div className=" form-floating  ">
        <input value={ruc} onChange={changeForm} name='ruc' type="number" min={10000000000} max={99999999999} className=" form-control" id="floatingInput" placeholder="name@example.com" aria-describedby="button-addon2" />
        <label htmlFor="floatingInput">Ruc</label>
      </div>
      <button className="btn btn-success" type="button" id="button-addon2" onClick={()=>FindClientsRuc()} >buscar</button>

    </div>

  </div>
  )
}
