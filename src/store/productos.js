import {create} from "zustand"



export const useProductStore=create((set)=>({

    productos:[],
    addProductos:(product)=>{set({productos:product})},
    removeProductos: () => set({ productos: [] }),


}))