import { Product } from "@/lib/shopify/types";
import { Suspense } from "react";
import ProductSkeleton from "./ProductSkeleton";
import { ProductCard } from "./ProductCard";

export async function Products({ data }: { data: Product[] }) {
  if (!data || data.length === 0) return <div>No hay productos</div>

  return (
    data &&
    data.map((item, index) => (
      <Suspense key={index} fallback={<ProductSkeleton />}>
        <ProductCard
          link={item.handle}
          image={item.featuredImage.url}
          alt={item.featuredImage.altText}
          title={item.title}
          description={item.description || 'Té'}
          price={item.priceRange.minVariantPrice.amount.toString()}
          availableForSale={item.availableForSale}
          variants={item.variants}
        />
      </Suspense>

    ))
  )
}