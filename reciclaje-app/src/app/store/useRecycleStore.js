// 

import { create } from 'zustand';

const useRecycleStore = create((set) => ({
  selectedMaterials: [],
  addMaterial: (material) => set((state) => ({
    selectedMaterials: [...state.selectedMaterials, material]
  })),
  removeMaterial: (material) => set((state) => ({
    selectedMaterials: state.selectedMaterials.filter(item => item !== material)
  })),
  clearMaterials: () => set({ selectedMaterials: [] }),
}));

export default useRecycleStore;