import React from 'react'
import { useProductStore } from '../../store/productos'
import { useCotizacionStore } from '../../store/cotizacion'

export default function ListaProductos() {

    // const productos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const productos=useProductStore(state=>state.productos)

    const addProducto=useCotizacionStore(state=>state.addProducto)

    const addProductosCotizacion=(id)=>{
        addProducto({...productos[id]})
        
    }




    return (

        <div className="lista">
            
            {
                productos.map(({sku,tempdescripcion},id) => {
                    return (
                        <div key={id} className='productos text-center row mb-2 py-2'>
                            <div className="col-6 m-auto">
                                <p>{tempdescripcion}</p>
                            </div>
                            <div className="col m-auto">
                                <h5>{sku}</h5>
                                <button className='btn btn-outline-info ' onClick={()=>addProductosCotizacion(id)} >agregar</button>
                            </div>
                        </div>
                    )
                })
            }

            </div>

    )
}
