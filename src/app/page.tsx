import { bodoni } from "@/lib/fonts";

import { Button } from "@/components/ui/button"
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-20 py-3 min-h-screen">
      <section className="mt-16 min-h-screen">
        <div className="container flex flex-col items-center gap-12">
          <h1 className={`animate-fade-in-up animation-duration-800 text-[56px] w-full text-center text-primary ${bodoni.className} leading-snug`}>Crea una pasión <br /> por el té</h1>
          <Button className="animate-fade-in-up animate-delay-200 animation-dura" variant="default" size="principal">Ver tipos de té</Button>
        </div>
        <div className="w-screen flex justify-between mt-2">
          <div className="flex flex-col items-start">
            <img
              src="/te-home-1.webp"
              alt="Una taza de té y hojas"
              className="animate-fade-in-right animate-duration-900 animate-delay-700 shadow-lg shadow-primary z-10 object-cover w-[533px] h-[160px] rounded-md" />
            <img
              src="/te-home-2.webp"
              alt="Tres bolsas de té"
              className="animate-fade-in-right animate-duration-900 animate-delay-900 shadow-lg shadow-primary object-cover w-[700px] h-[160px] rounded-md" />
          </div>
          <div className="flex flex-col items-end">
            <img
              src="/te-home-3.webp"
              alt="Tres cucharas con tè negro"
              className="animate-fade-in-left animate-duration-900 animate-delay-700 shadow-lg shadow-primary z-10 object-cover w-[533px] h-[160px] rounded-md" />
            <img
              src="/te-home-4.webp"
              alt="Un bowl con Matcha verde"
              className="animate-fade-in-left animate-duration-900 animate-delay-900 shadow-lg shadow-primary object-cover w-[700px] h-[160px] rounded-md" />
          </div>
        </div>
        <Image src="/divisor.png" alt="division de secciones" width={1980} height={38} />
      </section>
    </div>
  );
}
