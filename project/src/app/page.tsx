import { ProductType } from "@/types/productType"
import { Product } from './components/product'
import { fechProducts } from "./actions"

export default async function Home() {
  const { formatedProducts } = await fechProducts({})

  return (
    <section className='max-w-7xl mx-auto pt-8 px-8 xl:px-0'>
      <article className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
        {formatedProducts.map((product: ProductType) => (
          <Product key={product.id} product={product} />
        ))}
      </article>
    </section>
  )
}
