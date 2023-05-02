import { create } from 'zustand'

const useValidFnStore = (set) => ({
  choice: {isValid : false},
  setChoice : (isValid) => set((store)=>({choice : {isValid}}))

})



export const useStore = create(useValidFnStore)