import React, { useState } from 'react'
import { useCotizacionStore } from '../../store/cotizacion'
import { useEffect } from 'react'
import useForm from '../../hooks/useForm'
import { leer_excel } from '../../Api/getCotizacion'

export default function DatosCotizacion() {

    const listProducts=useCotizacionStore(state=>state.productos)
    const deleteProducto=useCotizacionStore(state=>state.deleteProducto)
    const modifiProduct=useCotizacionStore(state=>state.modifiProduct)

    const { tc,changeForm,resetForm} = useForm({tc:1})
    // calcularMonto()
    const calcularMonto=()=>{
        if (listProducts.length<=0) {
            
            return 0
        }
        var monto=0
        listProducts.map((val)=>{
            const precioTotal=tc*val['precio']*val['cantidad']
            monto+=precioTotal
        })
        const montoSinIgv=Number(monto.toFixed(2))/1.18

        return {montoSinIgv,monto}
    }

    const {montoSinIgv=0,monto=0}=calcularMonto()





    const deleteListProduct=(id)=>{
        deleteProducto(id)
    }
    const changeProduct=(id,value)=>{
      

        const change={
            ...listProducts[id],
            [value.target.name]:value.target.value
        }

        modifiProduct(id,change)

    }


    const generar_excel=()=>{
        leer_excel()
    }


    return (
        <div className='datos-cotizacion'>
            <div className="row m-auto mt-0 pb-1">
                <div className="col-6 m-auto text-center">
                    <button className='btn btn-danger'>Generar PDF</button>
                    </div>
                <div className="col-6 m-auto text-center">
                    <button className='btn btn-success' onClick={()=>generar_excel()}>Generar Excel</button>
                    </div>
            </div>

            <div className="cotizacion-lista">

                <table className="table table-striped text-center">
                    <thead className='table-dark'>
                        <tr>
                            <th scope="col" className='col-3'>Codigo</th>
                            <th scope="col" className='col-4' >Producto</th>
                            <th scope="col" className='col-2'>Cantidad</th>
                            <th scope="col" className='col-2'>Precio ({(tc==1) ? ' S/ ':' $ '})</th>
                            <th scope="col" className='col-1'>#</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                             listProducts.length<=0?
                             (<tr><td colSpan={5}>No hay ningun Producto</td></tr>)
                             :( 
                            listProducts.map(({sku,descripcion,cantidad,precio},id) => {

                                return (
                                    <tr key={id}>
                                        <th >
                                            <p className='mt-3 pt-3'>{sku}</p>
                                        </th>
                                        <th >
                                            <p className='mt-3 pt-3'>{descripcion}</p>
                                        </th>
                                        <th >
                                            <input className='cotizacion_cantidad mt-3' type="number" name='cantidad' value={cantidad} onChange={(val)=>changeProduct(id,val)}/>
                                        </th>
                                        <th >
                                        <input className='cotizacion_precio mt-3' type="number" name='precio' value={precio} onChange={(val)=>changeProduct(id,val)}/>
                                           
                                        </th>
                                        <td className=''>
                                            <button onClick={()=>deleteListProduct(id)} className='mt-3 btn btn-light '>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                    )
                            }
                            ))
                        }




                    </tbody>
                </table>









            </div>

            <div className="detalle  row  mt-3">

                <div className="col-2 form-check ">
                    {/* <input className=" form-check-input " type="checkbox" value="" id="flexCheckDefault" /> */}
                    <input className='tc' name='tc' type="number" value={tc} onChange={changeForm}/>
                </div>
                <div className="col-5 row ">
                    <p className='col-8 m-auto'>Monto Inc. IGV</p>
                    <input className='col' type="text" disabled value={montoSinIgv} />
                </div>
                <div className="col-5 row ">
                    <p className='col-8 m-auto'>Monto Sin IGV ({(tc==1) ? ' S/ ':' $ '})</p>
                    <input className='col' type="text" disabled value={monto} />
                </div>
            </div>


        </div>
    )
}
