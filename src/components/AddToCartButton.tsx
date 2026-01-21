"use client";
import { useStore } from "@/store";

export function AddToCartButton() {
    const addToCart = useStore((state) => state.addToCart);
    const count = useStore((state) => state.cartCount);

    return (
        <div className="flex items-center gap-4">
            <button
                onClick={addToCart}
                className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition shadow-md active:scale-95"
            >
                Add to Cart
            </button>
            <span className="font-medium">Cart: {count}</span>
        </div>
    );
}
