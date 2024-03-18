import React, { useState } from 'react'
import useForm from '../../hooks/useForm'
import { obtener_Cliente_ruc } from '../../Api/getClientex'

export default function DatosCliente() {

    const [cliente, setcliente] = useState({ruc:'',razon_social:'',email:'',numero:'',direccion:''})

    const {ruc,razon_social,email,numero,direccion,changeForm}=useForm({ruc:'',razon_social:'',email:'',numero:'',direccion:''})

    const updateCliente=()=>{
        obtener_Cliente_ruc(ruc).then(({resp,clientes})=>{
            setcliente({...clientes[0]})
          })

          console.log(cliente);
    }


    return (



        <div className="datos-cliente  row g-2">

            <div className="col-12 col-md-6  ">
                <div className="input-group">
                    <div className="form-floating">
                        <input value={ruc} name='ruc' onChange={changeForm}  type="text" className="input-datos-cliente form-control" id="floatingInputGrid" placeholder="name@example.com"  />
                        <label htmlFor="floatingInputGrid">RUC</label>
                    </div>
                    <button className="btn btn-success" onClick={updateCliente} type="button">BUSCAR</button>
                </div>
            </div>


            <div className="col-12 col-md-6">
                <div className="form-floating">
                    <input type="text" value={cliente['razon_social']}  disabled  className="form-control" id="floatingInputGrid" placeholder="name@example.com"  />
                    <label htmlFor="floatingInputGrid">Razon social</label>
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="form-floating">
                    <input type="email" value={email} name='email' onChange={changeForm} className="form-control" id="floatingInputGrid" placeholder="name@example.com"  />
                    <label htmlFor="floatingInputGrid">Correo Electronico</label>
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="form-floating">
                    <input type="tel" value={numero} name='numero' onChange={changeForm} className="form-control" id="floatingInputGrid" placeholder="name@example.com"  />
                    <label htmlFor="floatingInputGrid">Numero</label>
                </div>
            </div>
          
            <div className="col ">
                <div className="form-floating">
                    <input type="text" value={direccion} name='direccion' onChange={changeForm} className="form-control" id="floatingInputGrid" placeholder="name@example.com"  />
                    <label htmlFor="floatingInputGrid">Dirección Fiscal</label>
                </div>
            </div>

        </div>




    )
}
