"use client";
import { useCardStore } from "@/store";
import { ShoppingCartIcon } from "lucide-react";

export function Cart() {
  const useStore = useCardStore();
  return (
    <>
      <article
        className="flex items-center cursor-pointer relative"
        onClick={() => useStore.toggleCart()}
      >
        <ShoppingCartIcon />
        <span className="bg-teal-600 text-sm text-bold rounded-full h-5 w-5 flex items-center justify-center absolute left-4 bottom-3">
          2
        </span>
      </article>
      {!useStore.isOpen && (
        <article
          className="fixed w-full h-screen bg-black/25 left-0 top-0 z-50"
          onClick={() => useStore.toggleCart()}
        >
          <div
            className="absolute bg-slate-600 right-0 top-0 w-1/3 h-screen p-12 overflow-y-scroll"
            onClick={(e) => e.stopPropagation()}
          >
            <h1>Meu Carrinho</h1>
            {useStore.cart.map((item) => (
              <aside key={item.id}>{item.name}</aside>
            ))}
          </div>
        </article>
      )}
    </>
  );
}
