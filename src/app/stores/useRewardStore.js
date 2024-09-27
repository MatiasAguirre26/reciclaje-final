import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useRewardStore = create(
  persist(
    (set, get) => ({
      getPoints: async () => {
        const { userId } = get();
        if (!userId) {
          return
        }
        const response = await fetch(`/api/points/${userId}`);
        const data = await response.json();
        set({ userPoints: data });
      },
      setPoints: async (points) => {
        const { userId } = get();
        if (!userId) {
          return
        }
        const response = await fetch(`/api/points/${userId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(points),
        });
        const data = await response.json();
        set({ userPoints: data });
      },
      setUserId: (userId) => set({ userId }),
      userId: null,
      userPoints: null,
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
