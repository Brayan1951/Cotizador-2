import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './components.css'

const Navbar = () => {


  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

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
        {/* <div className="">
      <select className="form-select mb-3" id="floatingSelectGrid">
        <option selected disabled>Seleccion de KAM</option>
        <option value="1">Raquel</option>
        <option value="2">Yovana</option>
        <option value="3">Natalia</option>
        <option value="3">Sandra</option>
        <option value="3">Mayra</option>
        <option value="3">Joyce</option>
      </select>
    </div> */}



      </div>
    </nav>
  );
};
export default Navbar;
