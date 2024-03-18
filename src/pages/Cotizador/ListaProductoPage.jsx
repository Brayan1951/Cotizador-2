import React from 'react'
import ListaProductos from './ListaProductos'
import useForm from '../../hooks/useForm';
import { obtener_productos_sku } from '../../Api/getArticulos';
import { useProductStore } from '../../store/productos';

export default function ListaProductoPage() {

    const {sku,changeForm,resetForm}=useForm({sku:''})

    const addProductos=useProductStore((state=>state.addProductos))



    const FindProductbySku=()=>{
        obtener_productos_sku(sku).then(({resp,productos})=>{
            addProductos(productos)
        })

    }


  return (
    <div className='lista-productos  d-flex flex-md-column justify-content-between '>

            <div className="">
                <div className="input-group">
                    <div className="form-floating">
                        <input value={sku} name='sku' onChange={changeForm} type="text" className="input-datos-cliente form-control" id="floatingInputGrid" placeholder="name@example.com" />
                        <label htmlFor="floatingInputGrid">Codigo  producto</label>
                    </div>
                    <button className="btn btn-success" onClick={FindProductbySku} type="button">BUSCAR</button>
                </div>
            </div>
            <ListaProductos/>

            <button className='btn btn-outline-success'>Agregar otro</button>


        </div>
  )
}
