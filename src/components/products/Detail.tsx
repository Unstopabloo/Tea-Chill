import { Product } from "@/lib/shopify/types";
import { bodoni } from "@/lib/fonts";
import { Star, Detox, Antioxidante, TeNegro } from "@/lib/icons";
import { Price } from "../Price";
import { AddToCart } from "../cart/add-to-cart";

export async function Detail({ product }: { product: Product }) {
  return (
    <section className="flex-1 flex flex-col gap-4">
      <header className="flex flex-col gap-3">
        <h1 className={`${bodoni.className} text-primary text-3xl`}>{product.title} - {product.description}</h1>
        <strong className="flex gap-5 text-primary text-sm">
          <div className="flex gap-2 items-center">
            <Star /><Star /><Star /><Star /><Star />
          </div>
          <span>(2 Reviews)</span>|
          <span>10 Unidades</span>
        </strong>
      </header>
      <div className="flex flex-col gap-3 pb-6 border-b border-gray-200">
        <h2 className="text-accent font-semibold text-2xl"><Price price={product.priceRange.maxVariantPrice.amount} /></h2>
        <p className="text-[#626262] font-normal text-base">¡Déjate seducir por el irresistible aroma de nuestra Frutilla Blanca! Imagina el frescor ligero y dulce que se despierta con cada sorbo. Es como si las brillantes notas de fresa y la suavidad del té blanco se fusionaran en un abrazo delicioso que puedes disfrutar tanto en caliente como en helado. ¿No sientes que el aroma y el sabor ya te transportan a un lugar lleno de calma y placer?</p>
      </div>
      <div className="flex-1 flex flex-col justify-between gap-10">
        <div className="flex gap-4 items-center">
          {
            product.tags && product.tags.map(tag => (
              <div key={Math.random()} className="flex flex-col gap-2 p-2 items-center">
                {
                  tag === 'Detox' && <Detox />
                }
                {
                  tag === 'Antioxidante' && <Antioxidante />
                }
                {
                  tag.split(' ').includes('grs') && <TeNegro />
                }
                <small className="text-primary text-sm">{tag}</small>
              </div>
            ))
          }
        </div>
        <div className="w-full">
          <AddToCart availableForSale={product.availableForSale} variants={product.variants} />
        </div>
      </div>
    </section>
  )
}