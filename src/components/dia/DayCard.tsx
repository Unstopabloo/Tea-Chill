import Image from "next/image"
import { bodoni } from "@/lib/fonts"
import { Detox, Antioxidante, NoColesterol } from "@/lib/icons"
import { Flame } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { DaysProps } from "./dayTypes"

export function DayCard({ day, isToday }: { day: DaysProps, isToday: boolean }) {
  return (
    <article className={`rounded-md flex ${isToday ? 'shadow-xl' : 'border border-gray-200 opacity-70'}`}>
      <div className="relative h-full min-h-[350px] min-w-28 overflow-hidden rounded-s-md">
        <Image className="object-cover" quality={100} src={day.img} alt={day.name} fill />
      </div>
      <div className="flex gap-10 p-20">
        <div className="flex flex-col gap-5">
          <h3 className={`text-primary uppercase text-4xl ${bodoni.className}`}>{day.name}</h3>
          <p className="text-primary">El té rojo, también conocido como Pu-erh, es un té fermentado con propiedades digestivas, antioxidantes y de reducción de colesterol. Su color rojizo intenso y la presentación tradicional lo hacen visualmente atractivo. Proporciona una experiencia de calma y bienestar, tanto por sus beneficios como por su preparación ritual.</p>
        </div>
        <div className="flex flex-col items-end gap-5">
          <div className="flex gap-10">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center justify-center p-4 bg-primary rounded-md text-secondary">
                <Detox color="#D8CDEC" />
              </div>
              <strong className="text-primary text-sm text-center font-normal">Detox</strong>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center justify-center p-4 bg-primary rounded-md text-secondary">
                <Antioxidante color="#D8CDEC" />
              </div>
              <strong className="text-primary text-sm text-center font-normal">Antioxidante</strong>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center justify-center p-4 bg-primary rounded-md text-secondary">
                <Flame strokeWidth={1.5} size={22} />
              </div>
              <strong className="text-primary text-sm text-center font-normal">Quema Grasas</strong>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center justify-center p-4 bg-primary rounded-md text-secondary">
                <NoColesterol />
              </div>
              <strong className="text-primary text-sm text-center font-normal">Reduce colesterol</strong>
            </div>
          </div>
          {
            isToday && (
              <Button asChild className="px-10">
                <Link href={`/dia/${day.handle}`}>Ver descuentos</Link>
              </Button>
            )
          }
        </div>
      </div>
    </article>
  )
}