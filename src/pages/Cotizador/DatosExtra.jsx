import React from 'react'
import useForm from '../../hooks/useForm'
import { useCotizacionStore } from '../../store/cotizacion'

export default function DatosExtra() {
  const NroOC = useCotizacionStore(state => state.NroOC)
  const updateKAM = useCotizacionStore(state => state.updateKAM)
  const updateOC = useCotizacionStore(state => state.updateOC)
  const updateCondicion = useCotizacionStore(state => state.updateCondicion)
  // const { NroOC, changeForm } = useForm({ NroOC: '' })


  const KAM = [
    , { nombre: "Joyce Roman", telefono: "978 438 449", correo: "jroman@rashperu.com", },
    , { nombre: "Natalia Roca", telefono: "996 192 017", correo: "nroca@rahsperu.com", },
    , { nombre: "Mayra Delgado", telefono: "945 466 728", correo: "mdelgado@rashperu.com", }
    , { nombre: "Sandra Diaz", telefono: "954 050 318", correo: "sdiaz@rahsperu.com", },
    { nombre: "Raquel Carrion", telefono: "954 050 517", correo: "rcarrion@rahsperu.com", }
    , { nombre: "Yovana Condori", telefono: "996 192 014", correo: "ycondori@rahsperu.com", }
  ]

  const CondicionPago = [
     "Contado",
     "Credito 07 dias",
     "Credito 15 dias",
     "Credito 30 dias",
     "Credito 45 dias",
     "Credito 60 dias",
     "Credito 90 dias",
    // { condicion: "Contado" },
    // { condicion: "Credito 07 dias" },
    // { condicion: "Credito 15 dias" },
    // { condicion: "Credito 30 dias" },
    // { condicion: "Credito 45 dias" },
    // { condicion: "Credito 60 dias" },
    // { condicion: "Credito 90 dias" },
  ]


  const asignarKam = (event) => {

    const id = event.target.value
    updateKAM(KAM[id])
  }
  const asignarCondicion = (event) => {

    const id = event.target.value
    updateCondicion(CondicionPago[id])
  }
  const asignarNroOC= (event) => {

    const oc = event.target.value
    updateOC(oc)
  }

  return (
    <div className='datos-cotizacion mt-4 d-flex justify-content-around'>
      <div className="kam pt-3">
        <select onChange={asignarKam} defaultValue={-1} className="form-select mb-3" id="floatingSelectGrid">
          <option disabled value={-1}>Seleccion de KAM</option>
          {
            KAM.map(({ nombre }, id) => {
              return (<option key={id} value={id}>{nombre}</option>)
            })
          }

        </select>
      </div>
      <div className="condicion-pago pt-3">
        <select onChange={asignarCondicion} defaultValue={-1} className="form-select mb-3" id="floatingSelectGrid">
          <option disabled value={-1}>Seleccion condicion de pago</option>
          {
            CondicionPago.map((val, id) => {
              return (<option key={`c-${id}`} value={id}>{val}</option>)
            })
          }

        </select>
      </div>
      <div className="NroOC pt-2">
        <div className="input-group">
          <div className="form-floating">
            <input value={NroOC} name='sku' onChange={asignarNroOC} type="text" className="input-datos-cliente form-control" id="floatingInputGrid" placeholder="name@example.com" />
            <label htmlFor="floatingInputGrid">Nro OC</label>
          </div>
        </div>
      </div>



    </div>
  )
}
