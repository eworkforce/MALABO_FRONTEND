import { create } from 'zustand';

// Define the state and actions for the cart UI
interface CartState {
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
}

// Create the Zustand store
export const useCartStore = create<CartState>((set) => ({
  isOpen: false,
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
}));
