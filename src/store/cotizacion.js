import {create} from 'zustand'

export const useCotizacionStore=create((set)=>({


    
    cliente:{ruc:'',razon_social:'',email:'',numero:'',nombre_cliente:'',direccion:''},
    productos:[],
    ejectivo:{},
    condicion:'',
    NroOC:'',


    updateCliente:(client)=>set((state)=>({cliente:{...client}})),
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
    updateOC:(oc)=>set({NroOC:oc}),
    updateCondicion:(cond)=>set({condicion:cond}),


   





}))