import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ProductType } from './types/productType'

type CardState = {
    cart: ProductType[]
    /* addToCart: (product: ProductType) => void
    removeFromCart: (productId: string) => void */
    isOpen: boolean
    toggleCart: () => void
}

export const useCardStore = create<CardState>()(
    persist((set) => ({
        cart: [],
        isOpen: false,
        addToCart: false,
        toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
    }), { name: 'cart-storage' })
)