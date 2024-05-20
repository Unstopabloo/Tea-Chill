import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Products as AllProducts } from "./_products_components/Products"
import { getCollectionProducts } from "@/lib/shopify"

export default async function ProductsPage() {

  const products = await getCollectionProducts({ collection: 'te-verde' })

  return (
    <div className="mt-24 py-3 min-h-screen">
      <div className="bg-primary h-40 w-full"></div>
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
          <aside className="p-10 rounded-md border border-gray-200 min-w-64">
            <h2>aside aside aside</h2>
          </aside>
          <div className="flex justify-between gap-x-1 gap-y-12 flex-wrap">
            <AllProducts data={products} />
          </div>
        </section>
      </div>
    </div>
  )
}