'use client';

import { useCartStore } from "@/store";
import { ProductType } from "@/types/productType";

export default function Product({ product }: { product: ProductType }) {
  const { addProduct } = useCartStore();
  return (
    <button
      className="rounded-md bg-teal-600 text-white px-3.5 py-2.5 text-sm text-center"
      onClick={() => addProduct(product)}
    >
      Adicionar ao carrinho
    </button>
  );
}
