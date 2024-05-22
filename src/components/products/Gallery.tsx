"use client"

import Image from "next/image"
import { Image as ImageProp } from "@/lib/shopify/types"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

export function Gallery({ images }: { images: ImageProp[] }) {
  const [principalImage, setPrincipalImage] = useState<string | null>('0')
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const handleImage = (index: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("image", index.toString())
    replace(`${pathName}?${params.toString()}`)

    const newPrincipalImage = params.get("image");
    setPrincipalImage(newPrincipalImage);
    return newPrincipalImage;
  }

  return (
    <div className="flex flex-col-reverse md:flex-row gap-10 items-start">
      <div className="w-[90%] md:w-48 flex flex-row md:flex-col gap-4 justify-between">
        {images.map((image, index) => (
          <div
            onClick={() => handleImage(index)}
            key={index}
            role="button"
            aria-label="Boton para seleccionar imagen"
            className="cursor-pointer hover:bg-primary bg-card rounded-md overflow-hidden w-full aspect-[16/14] flex items-center justify-center">
            <Image
              src={image.url}
              alt={image.altText}
              width={190}
              height={160}
            />
          </div>
        ))}
      </div>
      <div className="bg-card rounded-md min-w-full md:min-w-[500px] md:h-full h-[351px] md:max-h-[537px] overflow-hidden flex justify-center items-center">
        <Image
          className="rounded-md"
          src={images[parseInt(principalImage || '0')].url}
          alt={images[parseInt(principalImage || '0')].altText}
          width={350}
          height={350}
        />
      </div>
    </div>
  )
}