import { create } from "zustand";

const useRecycleStore = create((set) => ({
  selectedMaterials: [],
  selectedLocation: null,
  setSelectedMaterials: (materials) => set({ selectedMaterials: materials }),
  setSelectedLocation: (location) => set({ selectedLocation: location }),
}));

export default useRecycleStore;
