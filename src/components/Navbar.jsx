import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './components.css'
import { useCotizacionStore } from '../store/cotizacion';

const Navbar = () => {
  const updateKAM = useCotizacionStore(state => state.updateKAM)


  const KAM = [
    , { nombre: "Joyce Roman", telefono: "978 438 449", correo: "jroman@rashperu.com", },
    , { nombre: "Natalia Roca", telefono: "996 192 017", correo: "nroca@rahsperu.com", },
    , { nombre: "Mayra Delgado", telefono: "945 466 728", correo: "mdelgado@rashperu.com", }
    , { nombre: "Sandra Diaz", telefono: "954 050 318", correo: "sdiaz@rahsperu.com", },
    { nombre: "Raquel Carrion", telefono: "954 050 517", correo: "rcarrion@rahsperu.com", }
    , { nombre: "Yovana Condori", telefono: "996 192 014", correo: "ycondori@rahsperu.com", }
  ]
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  const asignarKam = (event) => {

    const id = event.target.value
    updateKAM(KAM[id])
  }


  return (
    // <nav className={`menu menu-side align-items-start col-2  p--md-2 navbar navbar-expand-lg   ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
    //   <button className=" menu-boton navbar-toggler" type="button" onClick={toggleSidebar}>
    //     <span className="navbar-toggler-icon"></span>
    //   </button>

    //   <div className={`collapse menu text-center navbar-collapse pt-2 ${isOpen ? 'show' : ''}`}>

    //     <div className=''>
    //       <h2>Coolbox</h2>
    //     </div>

    //     <div className=" rutas ">
    //       <Link to={"clientes"} className='ruta '>
    //         Lista Clientes
    //       </Link>
    //       <Link to={"cotizador"} className=' ruta mt-4'>
    //         Cotizador
    //       </Link>


    //     </div>



    //   </div>
    // </nav>


    <div className={'col-2 menu'}>

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



    </div>



  );
};
export default Navbar;
