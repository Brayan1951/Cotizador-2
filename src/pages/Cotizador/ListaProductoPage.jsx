import React from 'react'
import ListaProductos from './ListaProductos'
import useForm from '../../hooks/useForm';
import { obtener_productos_sku } from '../../Api/getArticulos';
import { useProductStore } from '../../store/productos';
import Swal from 'sweetalert2';
import { useCotizacionStore } from '../../store/cotizacion';
import { Producto } from '../../Class/Producto';

export default function ListaProductoPage() {

    const { sku, changeForm, resetForm } = useForm({ sku: '' })

    const addProductos = useProductStore((state => state.addProductos))
    const addProducto=useCotizacionStore(state=>state.addProducto)

    const addProductosCotizacion=(sku,desc)=>{
        addProducto({...new Producto(sku,"000","-",desc)})
        
    }
    const FindProductbySku = () => {
        obtener_productos_sku(sku).then(({ resp, productos }) => {
            addProductos(productos)
        })

    }

    const addDialogProducto = async () => {

        const { value: formValues } = await Swal.fire({
            title: "Multiple inputs",
            html: `
            <div className="d-flex row">
            <label className="col-6">SKU</label>
            <input id="swal-input1" class="col-6 swal2-input" placeholder:"Ingresar Sku">
            </div>
            <div className="row">
            <label className="col-6">Descripcion</label>
            <input id="swal-input2" class="col-6 swal2-input" placeholder:"Ingresar descripcion">
            </div>
            `,
            focusConfirm: false,
            preConfirm: () => {
              return [
                document.getElementById("swal-input1").value,
                document.getElementById("swal-input2").value
              ];
            }
          });
          if (formValues) {
            console.log(formValues);
            Swal.fire(JSON.stringify(formValues));
            addProductosCotizacion(formValues[0],formValues[1])

          }
        
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
            <ListaProductos />

            <button className='btn btn-outline-success' onClick={addDialogProducto} >Agregar otro</button>


        </div>
    )
}
