"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogHeader, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import { Search as Magnify } from "lucide-react"
import { useDebouncedCallback } from 'use-debounce'
import { searchProducts } from "@/lib/shopify"
import { useState } from "react"
import { Product } from "@/lib/shopify/types"
import Image from "next/image"
import Link from "next/link"
import { Price } from "@/components/Price"

export function Search() {
  const [products, setProducts] = useState<Product[]>([])

  const handleSearch = useDebouncedCallback((value: string) => {
    inputSearch(value)
  }, 700)

  const inputSearch = async (search: string) => {
    const products: Product[] = await searchProducts({ query: search })
    setProducts(products)
  }


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button aria-label="Boton para busqueda de productos especificos" variant="link" size="icon">
          <Magnify size={18} />
        </Button>
      </DialogTrigger>
      <DialogContent className="min-h-[500px] max-h-[500px] overflow-hidden">
        <DialogHeader className="my-5">
          <div className="relative w-full">
            <div className="absolute left-2 top-0 mr-3 flex h-full items-center">
              <Magnify className="h-4" />
            </div>
            <input
              onChange={(e) => handleSearch(e.target.value)}
              type="text"
              name="search"
              placeholder="Buscar..."
              autoComplete="off"
              className="w-full rounded-lg border bg-white px-10 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
            />
          </div>
        </DialogHeader>
        <div>
          <ul className="flex flex-col items-start min-h-[350px] max-h-[350px] overflow-y-auto overflow-x-hidden">
            {products.map((product) => (
              <li className="w-full pr-3" key={product.id}>
                <Link
                  className="flex items-center justify-between gap-5 w-full py-3 border-b border-gray-100 hover:bg-secondary/30"
                  href={`/products/${product.handle}`}>
                  <div className="flex gap-2 items-center" aria-label="Contenedor de imagen y titulo de item">
                    <Image
                      className="rounded-md bg-card"
                      src={product.featuredImage.url}
                      alt={product.featuredImage.altText}
                      width={50}
                      height={50}
                    />
                    <h3 className="text-primary">{product.title}</h3>
                  </div>
                  <small className="text-[#727272]"><Price price={product.priceRange.maxVariantPrice.amount} /></small>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog >
  )
}