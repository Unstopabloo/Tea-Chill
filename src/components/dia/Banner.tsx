import { bodoni } from "@/lib/fonts"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { DaysProps } from "@/components/dia/dayTypes"
import bannerIMG from "../../../public/te-rojo-banner.webp"

export function Banner({ day }: { day: DaysProps }) {

  return (
    <section id="banner" className="flex justify-between items-center rounded-[40px] bg-card w-full overflow-hidden">
      <div className="py-24 px-28">
        <div className="relative flex flex-col gap-6 border-dashed border-2 border-primary rounded-md p-6">
          <Image className="absolute -top-8 -right-8" src="/hoja-destacados.webp" alt="Hojas decorativo de banner" width={60} height={60} />
          <h1 className={`text-5xl text-primary leading-[61px] ${bodoni.className}`}>Hoy es <br />{day.name} <br />de {day.te}!</h1>
          <p className="text-primary max-w-72">Ten un <strong>15%</strong> de descuento en todos los {day.te.toLowerCase()}, solo los días <strong>{day.name.toLowerCase()}!</strong> </p>
          <Button asChild className="max-w-52">
            <Link href={`/dia/${day.handle}`}>Ver Descuentos</Link>
          </Button>
        </div>
      </div>
      <div className="banner-img min-w-[55%] h-[563px] overflow-hidden relative">
        <Image
          src={bannerIMG}
          alt="Banner de Tea Chill"
          placeholder="blur"
          quality={100}
          sizes="100vw"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  )
}