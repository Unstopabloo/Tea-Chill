import Image from "next/image";
import { ProductCard } from "@/components/products/ProductCard";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import sidebarIMG from "../../../../public/aside-dia-te.webp";
import { BannerDetalle } from "@/components/dia/BannerDetalle";
import { getCollectionProducts } from "@/lib/shopify";
import { DAYS } from "@/components/dia/dayTypes";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { bodoni } from "@/lib/fonts";

export default async function ActualDayPage({ params }: { params: { slug: string } }) {
  const dia = params.slug
  const diaActual = DAYS.find(day => day.handle === dia)

  if (!diaActual) return (
    <div className="h-screen flex flex-col gap-20 items-center justify-center">
      <h1 className={`text-bold text-6xl text-primary text-center ${bodoni.className}`}>No hay descuentos para este dia<br />te esperamos un dia de la semana </h1>
      <Button asChild className="px-10 py-4">
        <Link href={"/products"}>Ver nuestros productos</Link>
      </Button>
    </div>
  )

  const collection = diaActual.collection
  const products = await getCollectionProducts({ collection })

  return (
    <div className="mt-24">
      <BannerDetalle day={diaActual} />
      <section className="container py-10 flex flex-col gap-10">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/dia">Día</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{dia}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <section className="w-full flex flex-col md:flex-col gap-10 justify-between">
          <aside className="w-full md:max-w-56">
            <div className="relative w-full md:w-56 h-24 md:h-[400px] flex justify-center items-end py-5">
              <Image
                src={sidebarIMG}
                alt="Banner de Tea Chill"
                fill
                quality={100}
                style={{ objectFit: "cover", zIndex: -1 }}
              />
              <Button asChild>
                <Link href={"/products"}>Todos los productos</Link>
              </Button>
            </div>
          </aside>

          <div aria-label="Contenedor de productos" className="grid grid-cols-2 md:flex md:flex-1 min-h-screen md:justify-start gap-x-6 gap-y-11 flex-wrap">
            {
              products.map((product, index) => {
                return (
                  <ProductCard
                    key={index}
                    alt={product.featuredImage.altText}
                    title={product.title}
                    price={product.priceRange.maxVariantPrice.amount}
                    image={product.featuredImage.url}
                    availableForSale={product.availableForSale}
                    description={product.description}
                    link={product.handle}
                    variants={product.variants}
                  />
                )
              })
            }
          </div>

        </section>
      </section>
    </div>
  )
}