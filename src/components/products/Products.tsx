import { Product } from "@/lib/shopify/types";
import Image from "next/image";
import { bodoni } from "@/lib/fonts";
import { Price } from "@/components/Price";
import { AddToCart } from "../cart/add-to-cart";
import Link from "next/link";
import { Suspense } from "react";
import ProductSkeleton from "./ProductSkeleton";

export async function Products({ data }: { data: Product[] }) {
  if (!data || data.length === 0) return <div>No hay productos</div>

  return (
    data &&
    data.map((item, index) => (
      <Suspense fallback={<ProductSkeleton />}>
        <div className="flex flex-col items-center product-card overflow-hidden min-w-[30%]">
          <Link
            href={`/products/${item.handle}`}
            key={index}
            aria-label="Tarjeta de producto" className="w-full">
            <figure aria-label="Contenedor de imagen" className="relative bg-card aspect-square rounded-md flex items-center justify-center">
              <Image
                className="object-center"
                src={item.featuredImage.url}
                alt={item.featuredImage.altText}
                width={180}
                height={180}
              />
            </figure>
            <figcaption aria-label="Datos de producto" className="p-4 flex flex-col gap-1 items-center bg-background">
              <h3 className={`${bodoni.className} font-semibold text-primary text-lg`}>{item.title}</h3>
              <p className={`${bodoni.className} text-[#828282] font-normal text-sm`}>{item.description || 'Té'}</p>
              <div className="mt-2 flex items-center justify-between gap-14">
                <small className="text-[#828282] font-normal">60 grs</small>
                <strong className="text-accent font-semibold text-base"><Price price={item.priceRange.minVariantPrice.amount} /></strong>
              </div>
            </figcaption>
          </Link>
          <div aria-label="Boton para añadir producto a carrito" className="z-20 translate-y-14">
            <AddToCart availableForSale={item.availableForSale} variants={item.variants} />
          </div>
        </div>
      </Suspense>

    ))
  )
}