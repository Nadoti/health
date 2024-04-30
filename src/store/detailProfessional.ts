import { create } from "zustand";





export const useInformationProfessional = create((set) => ({
  professional: null,
  takeDetailsProfessional: (information) => {
    set({ professional: information})
  }
}))