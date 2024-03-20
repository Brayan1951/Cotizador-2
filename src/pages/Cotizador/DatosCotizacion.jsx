import React, { useState } from 'react'
import { useCotizacionStore } from '../../store/cotizacion'
import useForm from '../../hooks/useForm'
import { leer_excel } from '../../Api/getCotizacion'

import './cotizador.css'



export default function DatosCotizacion() {

    const listProducts = useCotizacionStore(state => state.productos)
    const deleteProducto = useCotizacionStore(state => state.deleteProducto)
    const modifiProduct = useCotizacionStore(state => state.modifiProduct)

    const { tc, changeForm, resetForm } = useForm({ tc: 1 })

    const [CambioTc, setCambioTc] = useState(false)

    // calcularMonto()  
    const calcularMontoSoles = () => {
        if (listProducts.length <= 0) {

            return 0
        }
        var montoSoles = 0
        listProducts.map((val) => {
            const precioTotal = tc * val['precio'] * val['cantidad']
            montoSoles += precioTotal
        })
        const montoSinIgvSoles = (montoSoles / 1.18).toFixed(2)


        return { montoSinIgvSoles, montoSoles }
    }
    const calcularMonto = () => {
        if (listProducts.length <= 0) {

            return 0
        }
        var monto = 0
        listProducts.map((val) => {
            const precioTotal = val['precio'] * val['cantidad']
            monto += precioTotal
        })
        const montoSinIgv = (monto / 1.18).toFixed(2)


        return { montoSinIgv, monto }
    }

    const { montoSinIgvSoles = 0, montoSoles = 0 } = calcularMontoSoles()
    const { montoSinIgv = 0, monto = 0 } = calcularMonto()





    const deleteListProduct = (id) => {
        deleteProducto(id)
    }
    const changeProduct = (id, value) => {


        const change = {
            ...listProducts[id],
            [value.target.name]: value.target.value
        }

        modifiProduct(id, change)

    }


    const generar_excel = () => {
        leer_excel(listProducts)
        // console.log(CambioTc);
    }


    return (
        <div className='datos-cotizacion'>
            <div className="row m-auto mt-0 pb-1">
                <div className="col-6 m-auto text-center">
                    <button className='btn btn-danger'>Generar PDF</button>
                </div>
                <div className="col-6 m-auto text-center">
                    <button className='btn btn-success' onClick={() => generar_excel()}>Generar Excel</button>
                </div>
            </div>

            <div className="cotizacion-lista">

                <table className="table table-striped text-center">
                    <thead className='table-dark'>
                        <tr>
                            <th scope="col" className='col-3'>Codigo</th>
                            <th scope="col" className='col-4' >Producto</th>
                            <th scope="col" className='col-2'>Cantidad</th>
                            <th scope="col" className='col-2'>Precio ({(CambioTc == false) ? ' S/ ' : ' $ '})</th>
                            <th scope="col" className='col-1'>#</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            listProducts.length <= 0 ?
                                (<tr><td colSpan={5}>No hay ningun Producto</td></tr>)
                                : (
                                    listProducts.map(({ sku, descripcion, cantidad, precio }, id) => {

                                        return (
                                            <tr key={id}>
                                                <th >
                                                    <p className='mt-3 pt-3'>{sku}</p>
                                                </th>
                                                <th >
                                                    <p className='mt-3 pt-3'>{descripcion}</p>
                                                </th>
                                                <th >
                                                    <input className='cotizacion_cantidad mt-3' type="number" name='cantidad' value={cantidad} onChange={(val) => changeProduct(id, val)} />
                                                </th>
                                                <th >
                                                    <input className='cotizacion_precio mt-3' type="number" name='precio' value={precio} onChange={(val) => changeProduct(id, val)} />

                                                </th>
                                                <td className=''>
                                                    <button onClick={() => deleteListProduct(id)} className='mt-3 btn btn-light '>
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
                <div className="col-1 pt-2">
                    <input className=" form-check-input m-auto " type="checkbox" onChange={
                        () => {

                            setCambioTc(!CambioTc)

                        }} checked={CambioTc} id="flexCheckDefault" />

                </div>
                <div className="col-2  ">
                    {/* <input className=" form-check-input " type="checkbox" value="" id="flexCheckDefault" /> */}
                    <input className='tc' name='tc' type="number" value={tc} onChange={changeForm} />
                </div>

                {/* {
                    (CambioTc == false) ?
                        (
                            <>
                                <div className="col-4 row ">
                                    <p className='col-8 m-auto'>Monto Inc. IGV</p>
                                    <input className='col' type="text" disabled value={montoSinIgvSoles} />
                                </div>
                                <div className="col-4 row ">
                                    <p className='col-8 m-auto'>Monto Sin IGV S/ </p>
                                    <input className='col' type="text" disabled value={montoSoles} />
                                </div>

                            </>
                        )
                        : (
                            <>
                                <div className="col-4 row ">
                                    <p className='col-8 m-auto'>Monto Inc. IGV</p>
                                    <input className='col' type="text" disabled value={montoSinIgv} />
                                </div>
                                <div className="col-4 row ">
                                    <p className='col-8 m-auto'>Monto Sin IGV ({(CambioTc == false) ? ' S/ ' : ' $ '})</p>
                                    <input className='col' type="text" disabled value={monto} />
                                </div>

                            </>

                        )
                } */}

                <div className="col-4 row ">
                    <p className='col-8 m-auto'>Monto Inc. IGV</p>
                    <input className='col' type="text" disabled value={montoSinIgv} />
                </div>
                <div className="col-4 row ">
                    <p className='col-8 m-auto'>Monto Sin IGV ({(CambioTc == false) ? ' S/ ' : ' $ '}) </p>
                    <input className='col' type="text" disabled value={monto} />
                </div>


            </div>


        </div>
    )
}
