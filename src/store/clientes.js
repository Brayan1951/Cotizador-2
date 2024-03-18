import { create } from "zustand";

export const useClientesStore = create((set) => ({
  clientes:[],
  addClientes:(client)=>set({clientes:client}),
  removeClientes: () => set({ clientes: [] }),
}));
