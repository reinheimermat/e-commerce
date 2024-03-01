import { ProductType } from "@/types/productType";
import { ProductImage } from "./productImage";
import { formatPrice } from "@/lib/utils";
import AddCart from "./addCart"

type ProductProps = {
  product: ProductType;
};

export function Product({ product }: ProductProps) {
  return (
    <article className="flex flex-col shadow-lg h-96 bg-slate-800 p-5 text-gray-300">
      <header className="relative max-h-72 flex-1">
        <ProductImage product={product} fill />
      </header>
      <main className="flex justify-between font-bold my-3">
        <p className="w-40 truncate">{product.name}</p>
        <p className="text-md text-teal-300">{formatPrice(product.price)}</p>
      </main>
      <AddCart product={product} />
    </article>
  );
}