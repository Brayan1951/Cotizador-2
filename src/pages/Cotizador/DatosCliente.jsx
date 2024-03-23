import React, { useState } from 'react'
import useForm from '../../hooks/useForm'
import { useCotizacionStore } from '../../store/cotizacion'
import { obtener_Cliente_ruc } from '../../Api/getClientex'

export default function DatosCliente() {
    const updateCliente = useCotizacionStore(state => state.updateCliente)

    const {ruc,razon_social,email,numero,nombre_cliente,direccion,changeFormClient,completeData}=useForm({ruc:'',razon_social:'',email:'',numero:'',nombre_cliente:'',direccion:''})


    const completeCliente=()=>{
        obtener_Cliente_ruc(ruc).then(({resp,clientes})=>{
            const tempCLiente={
                ruc:clientes[0]["ruc"],
                razon_social:clientes[0]["razon_social"],
                email:clientes[0]["email"],
                numero:clientes[0]["telefono"],
                direccion:clientes[0]["direccion"]
            }
            completeData(tempCLiente)

          })

          updateCliente({ruc,razon_social,nombre_cliente,email,numero,direccion})
          
    }


    return (



        <div className="datos-cotizacion  row g-2">

            <div className="col-12 col-md-6  ">
                <div className="input-group">
                    <div className="form-floating">
                        <input value={ruc} name='ruc' onChange={changeFormClient}  type="text" className="input-datos-cliente form-control" id="floatingInputGrid" placeholder="name@example.com"  />
                        <label htmlFor="floatingInputGrid">RUC</label>
                    </div>
                    <button className="btn btn-success" onClick={completeCliente} type="button">BUSCAR</button>
                </div>
            </div>


            <div className="col-12 col-md-6">
                <div className="form-floating">
                    <input type="text" value={razon_social} name='razon_social'  onChange={changeFormClient}   className="form-control" id="floatingInputGrid" placeholder="name@example.com"  />
                    <label htmlFor="floatingInputGrid">Razon social</label>
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="form-floating">
                    <input type="tel" value={nombre_cliente} name='nombre_cliente' onChange={changeFormClient} className="form-control" id="floatingInputGrid" placeholder="name@example.com"  />
                    <label htmlFor="floatingInputGrid">Nombre</label>
                </div>
            </div>
       
            <div className="col-12 col-md-6">
                <div className="form-floating">
                    <input type="tel" value={numero} name='numero' onChange={changeFormClient} className="form-control" id="floatingInputGrid" placeholder="name@example.com"  />
                    <label htmlFor="floatingInputGrid">Telefono</label>
                </div>
            </div>
       
            <div className="col-12 col-md-6">
                <div className="form-floating">
                    <input type="email" value={email} name='email' onChange={changeFormClient} className="form-control" id="floatingInputGrid" placeholder="name@example.com"  />
                    <label htmlFor="floatingInputGrid">Correo Electronico</label>
                </div>
            </div>
            <div className="col ">
                <div className="form-floating">
                    <input type="text" value={direccion} name='direccion' onChange={changeFormClient} className="form-control" id="floatingInputGrid" placeholder="name@example.com"  />
                    <label htmlFor="floatingInputGrid">Dirección Fiscal</label>
                </div>
            </div>

        </div>




    )
}
