import { bodoni } from "@/lib/fonts";

import { Button } from "@/components/ui/button"
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="mt-20 py-3 min-h-screen">
      <section className="mt-16">
        <div className="container flex flex-col items-center gap-12">
          <h1 className={`animate-fade-in-up text-[42px] md:text-[56px] w-full text-center text-primary ${bodoni.className} leading-snug`}>Crea una pasión <br /> por el té</h1>
          <Button className="animate-fade-in-up animate-delay-300" variant="default" size="principal">Ver tipos de té</Button>
        </div>
        <div className="w-screen flex justify-between mt-8 md:mt-2">
          <div className="flex flex-col items-start">
            <img
              src="/te-home-1.webp"
              alt="Una taza de té y hojas"
              className="animate-fade-in-right animate-delay-700 shadow-none md:shadow-lg shadow-primary z-10 object-cover w-[173px] h-[70px] sm:w-[233px] sm:h-[100px] md:w-[333px] md:h-[130px] lg:w-[433px] lg:h-[160px] rounded-md" />
            <img
              src="/te-home-2.webp"
              alt="Tres bolsas de té"
              className="animate-fade-in-right animate-delay-800 shadow-none md:shadow-lg shadow-primary object-cover w-[200px] h-[70px] sm:w-[300px] sm:h-[100px] md:w-[430px] md:h-[150px] lg:w-[700px] lg:h-[160px] rounded-md" />
          </div>
          <div className="flex flex-col items-end">
            <img
              src="/te-home-3.webp"
              alt="Tres cucharas con tè negro"
              className="animate-fade-in-left animate-delay-700 shadow-none md:shadow-lg shadow-primary z-10 object-cover w-[173px] h-[70px] sm:w-[233px] sm:h-[100px] md:w-[333px] md:h-[130px] lg:w-[433px] lg:h-[160px] rounded-md" />
            <img
              src="/te-home-4.webp"
              alt="Un bowl con Matcha verde"
              className="animate-fade-in-left animate-delay-800 shadow-none md:shadow-lg shadow-primary w-[200px] h-[70px] sm:w-[300px] sm:h-[100px] md:w-[430px] md:h-[150px] lg:w-[700px] lg:h-[160px] object-cover rounded-md" />
          </div>
        </div>
        <Image className="animate-fade-in animate-delay-900" src="/divisor.png" alt="division de secciones" width={1980} height={38} />
      </section>

      <section className="container relative grid grid-cols-2 py-28">
        <img src="/ilustracion-hojas.webp" alt="hojas de fondo" className="absolute top-10 left-32 -z-10 ilustracion" />
        <article className="flex flex-col items-center justify-center text-center col-span-1 p-4 max-w-[520px] gap-9">
          <h2 className={`animate-fade-in-up text-[42px] md:text-[56px] text-primary ${bodoni.className}`}>¿ Porque TeaChill ?</h2>
          <p className="animate-fade-in-up animate-delay-150">En TeaChill, te ofrecemos una amplia variedad de tés que no solo son deliciosos, ¡sino también beneficiosos para tu bienestar! Nuestros tés están diseñados para combatir el sobrepeso, quemar grasas saturadas y brindar beneficios para la piel, el cabello y las uñas. Además, ayudan a contrarrestar el envejecimiento gracias a sus poderosos antioxidantes y promueven la salud mental.</p>
          <Button className="animate-fade-in-up animate-delay-300 flex items-center gap-2" variant="default" size="principal">Descuento por día <ArrowRight size={20} /></Button>
        </article>

        <article className="flex flex-col col-span-1 p-4 gap-6">
          <DayButton
            title="Té Negro"
            day="Lunes"
            discount="-20%"
            href="/dia-chill/lunes"
          >
            <div
              role="img"
              className={`day-image w-[60%] h-full overflow-hidden bg-zoom bg-no-repeat bg-center bg-[url('/te-negro.webp')] transition-all duration-300`}
            ></div>
          </DayButton>
          <DayButton
            right
            title="Té Rojo"
            day="Martes"
            discount="-15%"
            href="/dia-chill/martes"
          >
            <div
              role="img"
              className={`day-image w-[60%] h-full bg-zoom overflow-hidden bg-no-repeat bg-center bg-[url('/te-rojo.webp')] transition-all duration-300`}
            ></div>
          </DayButton>
          <DayButton
            title="Té Blanco"
            day="Miercoles"
            discount="-20%"
            href="/dia-chill/miercoles"
          >
            <div
              role="img"
              className={`day-image w-[60%] h-full overflow-hidden bg-zoom bg-no-repeat bg-center bg-[url('/te-blanco.webp')] transition-all duration-300`}
            ></div>
          </DayButton>
          <DayButton
            right
            title="Té Verde"
            day="Jueves"
            discount="-20%"
            href="/dia-chill/jueves"
          >
            <div
              role="img"
              className={`day-image w-[60%] h-full overflow-hidden bg-zoom bg-no-repeat bg-center bg-[url('/te-verde.webp')] transition-all duration-300`}
            ></div>
          </DayButton>
          <DayButton
            title="Matcha"
            day="Viernes"
            discount="-25%"
            href="/dia-chill/viernes"
          >
            <div
              role="img"
              className={`day-image w-[60%] h-full overflow-hidden bg-zoom bg-no-repeat bg-center bg-[url('/te-matcha.webp')] transition-all duration-300`}
            ></div>
          </DayButton>
        </article>
      </section>
    </div>
  );
}

interface DayButtonProps {
  right?: boolean;
  title: string;
  day: string;
  discount: string;
  href: string;
  children?: React.ReactNode;
}

export function DayButton({ right, title, day, discount, children, href }: DayButtonProps) {
  return (
    <div className={`w-full flex ${right ? 'justify-end' : 'justify-start'}`}>
      <Link href={href} className="day-link flex justify-between bg-white w-[70%] rounded-md overflow-hidden hover:bg-secondary animate-fade-in-up duration-600">
        <div className="px-3 py-6">
          <h3 className="transition-all duration-300 text-primary font-semibold text-2xl">{title}</h3>
          <strong className="transition-all duration-300 text-lg text-accent font-semibold">{day} <span>{discount}</span></strong>
        </div>
        {children}
      </Link>
    </div>
  )
}
