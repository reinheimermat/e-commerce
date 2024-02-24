import { ProductType } from "@/types/productType"

async function getProducts() {
  const response = await fetch('https://fakestoreapi.com/products')

  if (!response.ok) {
    throw new Error('Falha ao buscar os produtos')
  }
  return response.json()
}
export default async function Home() {
  const products = await getProducts()

  return (
    <section className='max-w-7xl mx-auto pt-8 px-8 xl:px-0'>
      <article className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
        {products.map((product: ProductType) => {
          <aside key={product.id}>
            {product.title}
          </aside>
        })}
      </article>
    </section>
  )
}
