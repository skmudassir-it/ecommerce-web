import { create } from 'zustand';

type CartStore = {
    cartCount: number;
    addToCart: () => void;
};

export const useStore = create<CartStore>((set) => ({
    cartCount: 0,
    addToCart: () => set((state) => ({ cartCount: state.cartCount + 1 })),
}));
