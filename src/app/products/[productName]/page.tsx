import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Gallery } from "@/components/products/Gallery"
import { getProduct } from "@/lib/shopify";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { HIDDEN_PRODUCT_TAG } from "@/lib/constants";
import { Detail } from "@/components/products/Detail";
import { Frown } from "lucide-react";
import { Cafeina } from "@/lib/icons";
import Image from "next/image";
import { RelatedProducts } from "@/components/products/RelatedProducts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export async function generateMetadata({
  params
}: {
  params: { productName: string };
}): Promise<Metadata> {
  const product = await getProduct(params.productName);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable
      }
    },
    openGraph: url
      ? {
        images: [
          {
            url,
            width,
            height,
            alt
          }
        ]
      }
      : null
  };
}

export default async function ProductDetailPage({ params }: { params: { productName: string } }) {
  const product = await getProduct(params.productName);

  if (!product) return notFound();

  return (
    <div className="mt-28 py-3 min-h-screen">
      <div className="container py-4 flex flex-col gap-10">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/products">Productos</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{product.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <section aria-label="Detalle de producto" className="flex flex-col md:flex-row gap-16">
          <Gallery images={product.images} />
          <Detail product={product} />
        </section>

        <Tabs defaultValue="caracteristicas" className="w-full py-20">
          <TabsList>
            <TabsTrigger value="caracteristicas">Características</TabsTrigger>
            <TabsTrigger value="ingredientes">Ingredientes</TabsTrigger>
          </TabsList>
          <TabsContent value="caracteristicas" className="flex flex-col">
            <article className="flex items-center gap-4 py-4 border-b border-gray-200">
              <div className="bg-primary text-secondary flex items-center justify-center p-2 rounded-md">
                <Cafeina />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-primary font-semibold">Nivel de Cafeína</h3>
                <small>Baja</small>
              </div>
            </article>
            <article className="flex items-center gap-4 py-4 border-b border-gray-200">
              <div className="size-14 bg-primary text-secondary flex items-center justify-center p-2 rounded-md">
                <Frown size={24} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-primary font-semibold">Sabor</h3>
                <small>Dulce Frutal</small>
              </div>
            </article>
          </TabsContent>
          <TabsContent value="ingredientes">
            <article className="flex items-center gap-4 py-4 border-b border-gray-200">
              <div className="w-10 max-h-full h-14 bg-card text-secondary flex items-center justify-center p-2 rounded-md">
                <Image src={"/arandanos.webp"} alt={"Imagen de arandanos"} width={35} height={35} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-primary font-semibold">Arandanos</h3>
                <small className="max-w-96">Antioxidante, diurético, digestivo, desintoxicante, reduce el colesterol, evita el estreñimiento, previene infecciones urinarias y ayuda a la salud ocular.</small>
              </div>
            </article>
            <article className="flex items-center gap-4 py-4 border-b border-gray-200">
              <div className="w-10 max-h-full h-14 bg-card text-secondary flex items-center justify-center p-2 rounded-md">
                <Image src={"/frambuesas.webp"} alt={"Imagen de frambuesas"} width={35} height={35} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-primary font-semibold">Hoja de Frambuesa</h3>
                <small className="max-w-96">Antioxidante, diurético, digestivo, desintoxicante, reduce el colesterol, evita el estreñimiento, previene infecciones urinarias y ayuda a la salud ocular.</small>
              </div>
            </article>
          </TabsContent>
        </Tabs>
      </div>
      <div className="h-54 w-full bg-secondary"></div>
      <RelatedProducts id={product.id} />
    </div>
  )
}