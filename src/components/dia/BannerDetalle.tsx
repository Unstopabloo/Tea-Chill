import Image from "next/image";
import { bodoni } from "@/lib/fonts";
import matcha from "../../../public/banner-matcha.png";
import te_negro from "../../../public/banner-te-negro.png";
import te_rojo_blanco from "../../../public/banner-te-rojo-blanco.png"
import te_verde from "../../../public/banner-te-verde.png";
import { Temperature, Clock, Cantidad } from "@/lib/icons";
import { DaysProps } from "./dayTypes";

export async function BannerDetalle({ day }: { day: DaysProps }) {
  let image

  if (day.index === 1) {
    image = te_negro
  } else if (day.index === 2) {
    image = te_rojo_blanco
  } else if (day.index === 3) {
    image = te_rojo_blanco
  } else if (day.index === 4) {
    image = te_verde
  } else if (day.index === 5) {
    image = matcha
  } else {
    image = te_negro
  }

  return (
    <section className="relative text-background w-full min-h-72 py-20 md:py-28">
      <Image
        src={image}
        alt="Banner de Tea Chill"
        placeholder="blur"
        fill
        quality={100}
        sizes="100vw"
        style={{ objectFit: "cover", zIndex: -2 }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 z-[-1]" />
      <div className="container relative">
        <small className={`${bodoni.className} text-base absolute -bottom-20 right-0`}>{day.country}</small>
        <h1 className={`${bodoni.className} text-7xl md:text-[96px]`}>{day.te}</h1>
        <p className="py-4 font-semibold">Preparación facil:</p>
        <div className="flex gap-8 items-center flex-wrap">
          <div aria-label="Etiqueta cualidad de té" className="flex gap-2 md:gap-4 items-center">
            <div aria-label="Icono" className="bg-primary p-3 rounded-full">
              <Temperature />
            </div>
            <div className="flex flex-col text-xs md:text-base">
              <strong>Temperatura</strong>
              <span>{day.preparation.temperature}</span>
            </div>
          </div>
          <div aria-label="Etiqueta cualidad de té" className="flex gap-2 md:gap-4 items-center">
            <div aria-label="Icono" className="bg-primary p-3 rounded-full">
              <Clock />
            </div>
            <div className="flex flex-col text-xs md:text-base">
              <strong>Tiempo</strong>
              <span>{day.preparation.time}</span>
            </div>
          </div>
          <div aria-label="Etiqueta cualidad de té" className="flex gap-2 md:gap-4 items-center">
            <div aria-label="Icono" className="bg-primary p-3 rounded-full">
              <Cantidad />
            </div>
            <div className="flex flex-col text-xs md:text-base">
              <strong>Cantidad</strong>
              <span>{day.preparation.quantity}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}