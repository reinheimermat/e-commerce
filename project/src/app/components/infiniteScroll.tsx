'use client'

import { ProductType } from "@/types/productType";
import { useCallback, useEffect, useState } from "react";
import { Product } from "./product";
import { useInView } from "react-intersection-observer";
import { fechProducts } from "../actions";

export function InfiniteScroll({
    initialProducts
}: {
    initialProducts: ProductType[]
}) {
    const [products, setProducts] = useState<ProductType[]>(initialProducts);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [ref, inView] = useInView({
        threshold: 0, // 0% of the element is visible
        triggerOnce: false,
    });

    const lastProductId = products[products.length - 1]?.id;

    const loadMoreProducts = useCallback(async () => {
        setIsLoading(true)
        const { formatedProducts, has_more } = await fechProducts({ lastProductId })

        if (formatedProducts) {
            setProducts((prevProducts) => [...prevProducts, ...formatedProducts])
            setHasMore(has_more)
        }
        setIsLoading(false)
    }, [lastProductId])

    useEffect(() => {
        if (inView && hasMore && !isLoading) {
            loadMoreProducts()
        }
    }, [inView, hasMore, isLoading])

    if (!products)
        return <div>Carregando</div>

    return (
        <>
            {products.map((product: ProductType) => (
                <Product key={product.id} product={product} />
            ))}
            {hasMore && (
                <div ref={ref}>
                    Carregando mais registros...
                </div>
            )}
        </>
    )
}