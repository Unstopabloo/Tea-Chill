import { bodoni } from "@/lib/fonts"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { DaysProps } from "@/components/dia/dayTypes"

import banner_blanco from "../../../public/banner-dia-blanco.png"
import banner_matcha from "../../../public/banner-dia-matcha.png"
import banner_negro from "../../../public/banner-dia-negro.png"
import banner_rojo from "../../../public/banner-dia-rojo.png"
import banner_verde from "../../../public/banner-dia-verde.png"

export function Banner({ day }: { day: DaysProps }) {
  let image

  if (day.index === 1) {
    image = banner_negro
  } else if (day.index === 2) {
    image = banner_rojo
  } else if (day.index === 3) {
    image = banner_blanco
  } else if (day.index === 4) {
    image = banner_verde
  } else if (day.index === 5) {
    image = banner_matcha
  } else {
    image = banner_rojo
  }

  return (
    <section className="relative flex justify-between items-center rounded-[40px] bg-transparent w-full overflow-hidden">
      <div className="py-8 md:py-24 px-2 md:px-28">
        <div className={`relative flex flex-col gap-3 border-dashed border-2 border-${day.index >= 3 ? 'background' : 'primary'} rounded-md p-2 md:p-6`}>
          <Image className="absolute -top-6 -right-6" src="/hoja-destacados.webp" alt="Hojas decorativo de banner" width={40} height={40} />
          <h1 className={`text-base md:text-5xl text-${day.index >= 3 ? 'background' : 'primary'} leading-6 md:leading-[61px] ${bodoni.className}`}>Hoy es <br />{day.name} <br />de {day.te}!</h1>
          <p className={`text-[10px] md:text-base text-${day.index >= 3 ? 'background' : 'primary'} max-w-56 md:max-w-72`}>Ten un <strong>15%</strong> de descuento en todos los {day.te.toLowerCase()}, solo los días <strong>{day.name.toLowerCase()}!</strong> </p>
          <Button asChild className="max-w-52 md:text-base text-sm">
            <Link href={`/dia/${day.handle}`}>Ver Descuentos</Link>
          </Button>
        </div>
      </div>
      <Image
        src={image}
        alt="Banner de Tea Chill"
        placeholder="blur"
        quality={100}
        sizes="100vw"
        fill
        style={{ objectFit: "cover", zIndex: -1 }}
      />
    </section>
  )
}