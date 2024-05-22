import { bodoni } from "@/lib/fonts";
import { getProductRecommendations } from "@/lib/shopify";
import Image from "next/image";
import { ProductCard } from "./ProductCard";

export async function RelatedProducts({ id }: { id: string }) {
  const related = await getProductRecommendations(id);
  const randomThree = related.sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <div className="mt-6 container">
      <header className="flex justify-between items-center text-center gap-10 pb-20">
        <Image className="hidden md:block" src="/hoja-destacados.webp" alt="Imagen decorativa de hojas de té" width={76} height={82} />
        <div className="h-[1px] min-w-10 flex-1 bg-primary/40 opacity-80 hidden md:block"></div>
        <h2 className={`${bodoni.className} text-5xl w-full md:w-auto font-normal text-primary uppercase`}>Productos destacados</h2>
        <div className="h-[1px] min-w-10 flex-1 bg-primary/40 opacity-80 hidden md:block"></div>
        <Image className="scale-x-[-1] hidden md:block" src="/hoja-destacados.webp" alt="Imagen decorativa de hojas de té" width={76} height={82} />
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {randomThree.map((item, index) => (
          <ProductCard
            key={index}
            link={item.handle}
            image={item.featuredImage.url}
            alt={item.featuredImage.altText}
            title={item.title}
            description={item.description || 'Té'}
            price={item.priceRange.minVariantPrice.amount.toString()}
            availableForSale={item.availableForSale}
            variants={item.variants}
          />
        ))}
      </div>
    </div>
  );
}