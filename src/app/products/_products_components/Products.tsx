import { Product } from "@/lib/shopify/types";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { bodoni } from "@/lib/fonts";
import { Price } from "@/components/Price";

export async function Products({ data }: { data: Product[] }) {
  console.log(data)
  return (
    data &&
    data.map((item, index) => (
      <div key={index} aria-label="Tarjeta de producto" className="bg-white overflow-hidden min-w-[30%]">
        <figure aria-label="Contenedor de imagen" className="relative bg-card aspect-square rounded-md flex items-center justify-center">
          <Image
            className="object-center"
            src={item.featuredImage.url}
            alt={item.featuredImage.altText}
            width={200}
            height={200}
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
      </div>
    ))
  )
}