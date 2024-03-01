"use client";
import { useCartStore } from "@/store";
import { ShoppingCartIcon } from "lucide-react";
import { CartDrawer } from "./cartDrawer";

export function Cart() {
  const useStore = useCartStore();
  return (
    <>
      <article
        className="flex items-center cursor-pointer relative"
        onClick={() => useStore.toggleCart()}
      >
        <ShoppingCartIcon />
        <span className="bg-teal-600 text-sm text-bold rounded-full h-5 w-5 flex items-center justify-center absolute left-4 bottom-3">
          {useStore.cart.length}
        </span>
      </article>
      {!useStore.isOpen && (
        <CartDrawer />
      )}
    </>
  );
}
