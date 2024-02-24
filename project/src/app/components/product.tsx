import { ProductType } from '@/types/productType'
import { ProductImage } from './productImage'

type ProductProps = {
    product: ProductType;
}

export function Product({ product } : ProductProps) {
    return (
        <article className='flex flex-col shadow-lg h-96 bg-slate-800 p-5 text-gray-300'>
            <header className='relative max-h-72 flex-1'>
                <ProductImage product={product} fill />
            </header>
            <main className='flex justify-between font-bold my-3'>
                <p className='w-40 truncate'>
                    {product.title}
                </p>
                <p className='text-md text-teal-300'>
                    {product.price?.toLocaleString('pt-br', {
                        style: 'currency',
                        currency: 'BRL'
                    })}
                </p>
            </main>
            <button className='rounded-md bg-teal-600 text-white px-3.5 py-2.5 text-sm text-center'>
                Adicionar ao carrinho
            </button>
        </article>
    )
}