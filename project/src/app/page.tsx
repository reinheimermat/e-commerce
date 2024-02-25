import { ProductType } from "@/types/productType"
import { Product } from './components/product'
import Stripe from "stripe"

async function getProducts(): Promise<ProductType[]> {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2023-10-16',
  })

  const products = await stripe.products.list()
  const formatedProducts = await Promise.all(
    products.data.map(async (product) => {
      const price = await stripe.prices.list({
        product: product.id,
      })
      return {
        id: product.id,
        price: price.data[0].unit_amount,
        name: product.name,
        image: product.images[0],
        description: product.description,
        currency: price.data[0].currency,
      }
    })
  )
  return formatedProducts
}
export default async function Home() {
  const products = await getProducts()

  return (
    <section className='max-w-7xl mx-auto pt-8 px-8 xl:px-0'>
      <article className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
        {products.map((product: ProductType) => (
          <Product key={product.id} product={product} />
        ))}
      </article>
    </section>
  )
}
