import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useRewardStore = create(
  persist(
    (set) => ({
      userPoints: 1000,  // Puntos iniciales del usuario
      selectedReward: null,
      setSelectedReward: (reward) => set({ selectedReward: reward }),

      // Acción para descontar puntos
      redeemReward: (pointsCost) => set((state) => ({
        userPoints: state.userPoints - pointsCost
      })),
    }),
    {
      name: 'reward-storage', // Nombre del almacenamiento en localStorage
      getStorage: () => localStorage, // Definir el uso de localStorage
    }
  )
);

export default useRewardStore;
