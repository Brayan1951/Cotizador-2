import {create} from 'zustand'

// const totalDetalle=(productos=[],tc=1)=>{
//     productos.map((val)=>{
//         console.log(val);
//     })
// }

export const useCotizacionStore=create((set)=>({

    // cotizacion:{
    //     cliente:{},
        
    
    // },
    
    cliente:{},
    productos:[],
    ejectivo:{},
  


    updateCliente:(client)=>set({cliente:client}),
    addProducto:(producto)=>set((state)=>{
        const tempProducto={...producto,precio:1,cantidad:1}
        
        return ({productos:[...state.productos,tempProducto]  })
    
    }),
    modifiProduct:(id,newProduct)=>set((state)=>{
        const updateProducts=[...state.productos]
        updateProducts[id]=newProduct

        return {...state,productos:updateProducts}
    }),

    deleteProducto:(productoId)=>set((state)=>({productos:state.productos.filter((val,id)=>id!==productoId ) })),
    clearProducto:()=>set((state)=>({productos:[]})),

    updateKAM:(kam)=>set({ejectivo:kam}),


   





}))