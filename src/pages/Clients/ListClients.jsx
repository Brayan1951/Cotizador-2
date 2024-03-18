import React, { useEffect, useState } from 'react'
import "./clients.css"
import { useClientesStore } from '../../store/clientes'


export default function ListClients() {

  const [window_width, setWindow_width] = useState(window.innerWidth)

  const clientes = useClientesStore(state => state.clientes)


  useEffect(() => {
    const actualizarTamañoPantalla = () => {
      setWindow_width(window.innerWidth);
    };
    window.addEventListener('resize', actualizarTamañoPantalla);

    // Limpia el evento de cambio de tamaño cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', actualizarTamañoPantalla);
    };
  }, [window.innerWidth])


  // useEffect(() => {
  //   // console.log(clientes);

  // }, [clientes])


  return (

    <div className="lista-clientes">

      <table className="clientes-table table text-center">
        <thead>
          <tr>
            {
              (window_width > 800)
                ? (<th scope="col">Ruc</th>)
                : (<></>)
            }

            <th scope="col" >Razon Social</th>

            {
              (window_width > 800)
                ? (<th scope="col">Linea de credito</th>)
                : (<></>)
            }




            {/* <th scope="col">#</th> */}
          </tr>
        </thead>

      <tbody>

          {
            clientes.length<=0?
            (<tr><td colSpan={3}>No hay ningun cliente</td></tr>)
            :( 
              clientes.map((val,id)=>(
                <tr key={id}>
                    {
                      (window_width > 800)
                        ? (<td>
                          <p className="pt-3">
                            {val["ruc"]}
                          </p>
                        </td>)
                        : (<></>)
                    }
                    <td >

                      <p className='pt-3'>

                      {val["razon_social"]}  
                      </p>
                    </td>

                    {
                      (window_width > 800)
                        ? (<td>
                          <p className='pt-3'> {val["linea_credito"]}</p>
                        </td>)
                        : (<></>)
                    }

                    {/* <td className='pt-1'>
                      <button className='btn btn-light '>
                        cotizar
                      </button>
                    </td>
                   */}
                  
                  
                  
                  </tr>

              ))
                
              



            )
          }

          </tbody>

      </table>




    </div>
  )
}
