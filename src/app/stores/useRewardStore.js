import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useRewardStore = create(
  persist(
    (set) => ({
      userPoints: 1000,
      selectedReward: null,
      redeemedRewards: [],
      setSelectedReward: (reward) => set({ selectedReward: reward }),
      updateAfterRedemption: (newPoints, newReward) => set((state) => ({
        userPoints: newPoints,
        redeemedRewards: [...state.redeemedRewards, newReward]
      })),
    }),
    {
      name: 'reward-storage',
      getStorage: () => localStorage,
    }
  )
);

export default useRewardStore;
