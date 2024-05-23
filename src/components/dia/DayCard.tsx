import Image from "next/image"
import { bodoni } from "@/lib/fonts"
import { Detox, Antioxidante, NoColesterol, Energia, Piel, Relax } from "@/lib/icons"
import { Flame } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { DaysProps } from "./dayTypes"

export function DayCard({ day, isToday }: { day: DaysProps, isToday: boolean }) {
  return (
    <article className={`rounded-md flex ${isToday ? 'shadow-xl' : 'border border-gray-200 opacity-70'}`}>
      <div className="relative h-full min-h-[400px] md:min-h-[350px] min-w-28 overflow-hidden rounded-s-md">
        <Image className="object-cover" quality={100} src={day.img} alt={day.name} fill />
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 px-10 py-5 md:p-20">
        <div className="flex flex-col gap-2 md:gap-5">
          <h3 className={`text-primary uppercase text-2xl md:text-4xl ${bodoni.className}`}>{day.name}</h3>
          <p className="text-primary text-sm md:text-base">{day.description}</p>
        </div>
        <div className="flex flex-col items-start md:items-end gap-5">
          <div className="flex gap-4 md:gap-10">
            {
              day.properties.map(prop => {
                return (
                  <div key={Math.random()} className="flex flex-col items-center gap-2">
                    <div className="flex items-center justify-center p-3 md:p-4 bg-primary rounded-md text-secondary">
                      {prop === 'Detox' && <Detox color="#D8CDEC" />}
                      {prop === 'Antioxidante' && <Antioxidante color="#D8CDEC" />}
                      {prop === 'Quema grasa' && <Flame className="text-background" strokeWidth={1} size={20} />}
                      {prop === 'Energía' && <Energia />}
                      {prop === 'Cuidado de piel' && <Piel />}
                      {prop === 'Reduce problemas cardiacos' && <NoColesterol />}
                      {prop === 'Reduce colesterol' && <NoColesterol />}
                      {prop === 'Relax' && <Relax />}
                    </div>
                    <strong className="text-primary text-xs md:text-sm text-center font-normal max-w-16">{prop}</strong>
                  </div>
                )
              })
            }
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