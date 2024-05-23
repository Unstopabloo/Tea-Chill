import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Products as AllProducts } from "../../components/products/Products"
import { getProducts } from "@/lib/shopify"
import { Filter } from "@/components/products/Filter"
import Image from "next/image"
import banner from "../../../public/products-banner.png"

export default async function ProductsPage({
  searchParams
}: {
  searchParams?: {
    filter?: string
  }
}) {
  const filter = searchParams?.filter
  const query = decodeURIComponent(filter?.split('&').join(' OR ') || 'te-blanco')

  const products = await getProducts({ query })

  return (
    <div className="mt-24 py-3 min-h-screen">
      <Image
        src={banner}
        alt="Banner de productos en el que se muestran variedades de especias"
        sizes="100vw"
        width={1920}
        height={200}
        quality={100}
        placeholder="blur"
      />
      <div className="container py-4 flex flex-col gap-10">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Productos</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <section className="flex gap-16">
          <div aria-label="Contendor de filtro de productos">
            <Filter />
          </div>
          <div aria-label="Contenedor de productos" className="flex flex-1 min-h-screen justify-start gap-x-10 gap-y-11 flex-wrap">
            <AllProducts data={products} />
          </div>
        </section>
      </div>
    </div>
  )
}