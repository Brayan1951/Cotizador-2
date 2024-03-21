import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './components.css'
import { useCotizacionStore } from '../store/cotizacion';

const Navbar = () => {
  const updateKAM = useCotizacionStore(state => state.updateKAM)


  const KAM=[
    {nombre:"Raquel",telefono:"954 050 517",correo:"rcarrion@rahsperu.com",}
    ,{nombre:"Yovana",telefono:"996 192 014",correo:"ycondori@rahsperu.com",}
    ,{nombre:"Natalia",telefono:"996 192 017",correo:"nroca@rahsperu.com",}
    ,{nombre:"Sandra",telefono:"954 050 318",correo:"sdiaz@rahsperu.com",}
    ,{nombre:"Mayra",telefono:"945 466 728",correo:"m@rahsperu.com",}
    ,{nombre:"Joyce",telefono:"978 438 449",correo:"j@rahsperu.com",}
  ]
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  const asignarKam=(event)=>{
    
    const id=event.target.value
    updateKAM(KAM[id])
  }


  return (
    <nav className={`menu-side align-items-start col-2  p--md-2 navbar navbar-expand-lg   ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <button className=" menu-boton navbar-toggler" type="button" onClick={toggleSidebar}>
          <span className="navbar-toggler-icon"></span>
        </button>

      <div className={`collapse menu text-center navbar-collapse pt-2 ${isOpen ? 'show' : ''}`}>

        <div className=''>
          <h2>Coolbox</h2>
        </div>

        <div className=" rutas ">
          <Link to={"clientes"} className='ruta '>
            Lista Clientes
          </Link>
          <Link to={"cotizador"} className=' ruta mt-4'>
            Cotizador
          </Link>


        </div>
        <div className="">
      <select onChange={asignarKam}  defaultValue={-1} className="form-select mb-3" id="floatingSelectGrid">
        <option  disabled value={-1}>Seleccion de KAM</option>
        {
          KAM.map(({nombre},id)=>{

            return(
              <option key={id} value={id}>{nombre}</option>
            )

          })
        }

      </select>
    </div>



      </div>
    </nav>
  );
};
export default Navbar;
