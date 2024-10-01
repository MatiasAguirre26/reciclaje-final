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
        // const response = await fetch(`/api/users/${userId}/points`);
        const response = await fetch(`/api/points/${userId}`);
        console.log("Response points", response);
        const data = await response.json();
        set({ userPoints: data });
      },
      setPoints: async (points) => {
        const { userId } = get();
        if (!userId) {
          return
        }
        try {
          // const response = await fetch(`/api/users/${userId}/points`, {
          const response = await fetch(`/api/points/${userId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ points }),
          });
          const data = await response.json();
          set({ userPoints: data });
          return data
        } catch (error) {
          console.log("Error al actualizar los puntos", error);
          return null
        }
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
