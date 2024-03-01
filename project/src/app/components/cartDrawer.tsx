"use client";

import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store";
import Image from "next/image";
import { format } from "path";

export function CartDrawer() {
  const useStore = useCartStore();

  return (
    <article
      className="fixed w-full h-screen bg-black/25 left-0 top-0 z-50"
      onClick={() => useStore.toggleCart()}
    >
      <div
        className="absolute bg-slate-600 right-0 top-0 w-1/3 h-screen p-8 overflow-y-scroll"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="font-bold text-sm text-teal-600"
          onClick={() => useStore.toggleCart()}
        >
          Voltar para a loja
        </button>
        <div className="border-t border-gray-400 my-4"></div>
        {useStore.cart.map((item) => (
          <aside key={item.id} className="flex gap-4 py-4">
            <Image
              src={item.image}
              alt={item.name}
              width={120}
              height={120}
              className="object-cover w-24"
            />
            <div>
              <h2 className="w-42 truncate">{item.name}</h2>
              <h2>Quantidade: {item.quantity}</h2>
              <p className="text-teal-600 text-sm font-bold">
                {formatPrice(item.price)}
              </p>
              <button onClick={() => useStore.addProduct(item)} className="py-1 px-2 border rounded-md mt-2 text-sm mr-1">
                Adicionar
              </button>
              <button>Remover</button>
            </div>
          </aside>
        ))}
      </div>
    </article>
  );
}
