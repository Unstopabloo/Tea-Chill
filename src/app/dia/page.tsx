import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Banner } from "@/components/dia/Banner";
import { bodoni } from "@/lib/fonts";
import Image from "next/image";
import { DayCard } from "@/components/dia/DayCard";
import { DAYS } from "@/components/dia/dayTypes";

export default async function DiaPage() {
  const fecha = new Date()
  const dia = fecha.getDay()
  const diaActual = DAYS[dia - 1]

  return (
    <div className="mt-24 py-3 min-h-screen">
      <div className="container py-4 flex flex-col gap-10">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Día</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Banner day={diaActual} />
        <div className="flex flex-col items-center gap-10 py-20 px-5 md:p-40">
          <h2 className={`${bodoni.className} text-4xl text-primary text-center  md:max-w-[420px]`}>Tea Chill te regala descuentos por día! Revisa acá tu día favorito.</h2>
          <Image src={"/logo.png"} alt="Logo de Tea Chill" width={150} height={55} />
        </div>
        <section className="flex flex-col w-full gap-16">
          {
            DAYS.map((day, index) => {
              const isToday = dia === day.index
              return (
                <DayCard key={index} day={day} isToday={isToday} />
              )
            })
          }
        </section>
      </div>
    </div>
  )
}