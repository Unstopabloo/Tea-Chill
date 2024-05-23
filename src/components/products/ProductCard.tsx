import { bodoni } from "@/lib/fonts";
import { Product, ProductVariant } from "@/lib/shopify/types";
import Image from "next/image";
import Link from "next/link";
import { Price } from "../Price";
import { AddToCart } from "../cart/add-to-cart";

interface ProductCardProps {
  link: string;
  image: string;
  alt: string;
  title: string;
  description: string;
  price: string;
  availableForSale: boolean;
  variants: ProductVariant[];
}

export function ProductCard({ link, image, alt, title, description, price, availableForSale, variants }: ProductCardProps) {
  return (
    <div className="flex flex-col items-center product-card overflow-hidden min-w-[30%]">
      <Link
        href={`/products/${link}`}
        aria-label="Tarjeta de producto"
        className="w-full"
      >
        <figure aria-label="Contenedor de imagen" className="relative bg-card aspect-square rounded-md flex items-center justify-center">
          <Image
            className="object-center"
            src={image}
            alt={alt}
            width={180}
            height={180}
          />
        </figure>
        <figcaption aria-label="Datos de producto" className="p-4 flex flex-col gap-1 items-center bg-background">
          <h3 className={`${bodoni.className} font-semibold text-primary text-lg`}>{title}</h3>
          <p className={`${bodoni.className} text-primary/90 font-normal text-sm`}>{description}</p>
          <div className="mt-2 flex items-center justify-between gap-14">
            <small className="text-[#505050] font-normal">60 grs</small>
            <strong className="text-accent font-semibold text-base"><Price price={price.toString()} /></strong>
          </div>
        </figcaption>
      </Link>
      <div aria-label="Boton para añadir producto a carrito" className="z-20 text-xs md:text-base md:translate-y-14">
        <AddToCart availableForSale={availableForSale} variants={variants} />
      </div>
    </div>
  );
}