import {create} from "zustand"



export const useProductStore=create((set)=>({

    productos:[],
    addProductos:(product)=>set((state)=>({...state,productos:product})),
    removeProductos: () => set({ productos: [] }),


}))