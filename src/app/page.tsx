import { bodoni, bodoniNormal } from "@/lib/fonts";

import { Button } from "@/components/ui/button"
import Image from "next/image";
import { ArrowRight } from "lucide-react"
import { DayButton } from "./_root_components/DayButton";
import { ShoppingBag } from "lucide-react"

import { getProducts } from "@/lib/shopify";

export default async function Home() {
  const products = await getProducts({});
  console.log(products);

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
        <article className="flex flex-col items-center justify-center text-center col-span-2 md:col-span-1 p-4 max-w-[520px] gap-9">
          <h2 className={`animate-fade-in-up text-[42px] md:text-[56px] text-primary ${bodoni.className}`}>¿ Porque TeaChill ?</h2>
          <p className="animate-fade-in-up animate-delay-150">En TeaChill, te ofrecemos una amplia variedad de tés que no solo son deliciosos, ¡sino también beneficiosos para tu bienestar! Nuestros tés están diseñados para combatir el sobrepeso, quemar grasas saturadas y brindar beneficios para la piel, el cabello y las uñas. Además, ayudan a contrarrestar el envejecimiento gracias a sus poderosos antioxidantes y promueven la salud mental.</p>
          <Button className="animate-fade-in-up animate-delay-300 flex items-center gap-2" variant="default" size="principal">Descuento por día <ArrowRight size={20} /></Button>
        </article>

        <article className="flex flex-col col-span-2 md:col-span-1 p-4 gap-6 animate-fade-in-up animate-delay-900 duration-600">
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

      <section className="pt-16">
        <div className="container flex flex-wrap items-center justify-center pb-16">
          <div className="animate-fade-in-right animate-delay-700 flex flex-col w-1/2 md:w-auto items-center text-center gap-3 p-4 md:p-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="88" height="83" viewBox="0 0 88 83" fill="none">
              <path d="M46.643 82.2986C55.5343 82.6666 65.0525 82.7244 72.3896 77.6888C79.6576 72.7006 83.2131 63.9244 85.7261 55.475C88.0061 47.8093 87.6439 39.7938 85.9877 31.9695C84.415 24.5398 82.8932 15.837 76.4758 11.7761C70.074 7.72511 61.5676 13.6603 54.2087 11.86C47.397 10.1935 43.0977 2.90961 36.1564 1.91218C27.0985 0.61061 16.5456 -0.39456 9.49136 5.43431C2.40508 11.2896 1.04323 21.8575 0.894391 31.0487C0.755851 39.6039 4.99447 47.2419 8.68937 54.9592C12.3178 62.5379 15.4128 70.7017 22.2306 75.6128C29.2181 80.6461 38.0388 81.9425 46.643 82.2986Z" fill="#81A388" />
            </svg>
            <h3 className="text-primary font-semibold text-xl">Despacho en todo Chile</h3>
            <span className="text-[#828282] font-light max-w-[250px]">Recibe tus pedidos en tu hogar, en todo el país.</span>
          </div>
          <div className="animate-fade-in-up flex flex-col items-center text-center w-1/2 md:w-auto gap-3 p-4 md:p-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="88" height="83" viewBox="0 0 88 83" fill="none">
              <path d="M46.643 82.2986C55.5343 82.6666 65.0525 82.7244 72.3896 77.6888C79.6576 72.7006 83.2131 63.9244 85.7261 55.475C88.0061 47.8093 87.6439 39.7938 85.9877 31.9695C84.415 24.5398 82.8932 15.837 76.4758 11.7761C70.074 7.72511 61.5676 13.6603 54.2087 11.86C47.397 10.1935 43.0977 2.90961 36.1564 1.91218C27.0985 0.61061 16.5456 -0.39456 9.49136 5.43431C2.40508 11.2896 1.04323 21.8575 0.894391 31.0487C0.755851 39.6039 4.99447 47.2419 8.68937 54.9592C12.3178 62.5379 15.4128 70.7017 22.2306 75.6128C29.2181 80.6461 38.0388 81.9425 46.643 82.2986Z" fill="#81A388" />
            </svg>
            <h3 className="text-primary font-semibold text-xl">Muestras gratis en cada pedido</h3>
            <span className="text-[#828282] font-light max-w-[250px]">Recibe 3 muestras gratis por parte de TeaChill. ¡Disfrutalos!</span>
          </div>
          <div className="animate-fade-in-left animate-delay-700 flex flex-col items-center text-center gap-3 p-4 md:p-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="88" height="83" viewBox="0 0 88 83" fill="none">
              <path d="M46.643 82.2986C55.5343 82.6666 65.0525 82.7244 72.3896 77.6888C79.6576 72.7006 83.2131 63.9244 85.7261 55.475C88.0061 47.8093 87.6439 39.7938 85.9877 31.9695C84.415 24.5398 82.8932 15.837 76.4758 11.7761C70.074 7.72511 61.5676 13.6603 54.2087 11.86C47.397 10.1935 43.0977 2.90961 36.1564 1.91218C27.0985 0.61061 16.5456 -0.39456 9.49136 5.43431C2.40508 11.2896 1.04323 21.8575 0.894391 31.0487C0.755851 39.6039 4.99447 47.2419 8.68937 54.9592C12.3178 62.5379 15.4128 70.7017 22.2306 75.6128C29.2181 80.6461 38.0388 81.9425 46.643 82.2986Z" fill="#81A388" />
            </svg>
            <h3 className="text-primary font-semibold text-xl">Diferentes formas de pago</h3>
            <span className="text-[#828282] font-light max-w-[250px]">Opta por tu mejor forma de pago con debito y/o crédito.</span>
          </div>
        </div>
        <Image className="animate-fade-in animate-delay-900 rotate-180" src="/divisor.png" alt="division de secciones" width={1980} height={38} />
      </section>

      <section className="container flex flex-col gap-28 pb-16">
        <div className="bg-secondary rounded-md w-full h-48"></div>

        <header className="flex justify-between items-center text-center gap-10">
          <Image className="hidden md:block" src="/hoja-destacados.webp" alt="Imagen decorativa de hojas de té" width={76} height={82} />
          <div className="h-[1px] min-w-10 flex-1 bg-primary/40 opacity-80 hidden md:block"></div>
          <h2 className={`${bodoni.className} text-5xl w-full md:w-auto font-normal text-primary`}>Productos destacados</h2>
          <div className="h-[1px] min-w-10 flex-1 bg-primary/40 opacity-80 hidden md:block"></div>
          <Image className="scale-x-[-1] hidden md:block" src="/hoja-destacados.webp" alt="Imagen decorativa de hojas de té" width={76} height={82} />
        </header>

        <div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-6 gap-8">
          <div role="card" className="flex flex-col items-start rounded-md col-span-1 row-span-6">
            <figure className="bg-card rounded-md w-full aspect-[10/11] flex items-center justify-center">
              <Image src="/te-negro-arandano.webp" alt="Imagen de té destacado" width={300} height={300} />
            </figure>
            <figcaption className="flex flex-col gap-2 md:gap-0 items-start md:flex-row justify-between py-4">
              <h3 className={`${bodoni.className} text-primary text-4xl`}>Té negro Arandano</h3>
              <div className="flex items-start flex-col md:items-end justify-between gap-4 min-w-52">
                <span className="text-[#828282] font-light">$6.990 - <strong className="font-semibold text-accent">$4.990</strong></span>
                <Button className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2">Agregar al Carrito <ShoppingBag size={16} /></Button>
              </div>
            </figcaption>
          </div>

          <div role="card" className="flex flex-col md:flex-row md:items-center rounded-md col-span-2 row-span-2">
            <Image
              className="rounded-md h-full max-h-[208px] object-cover hidden md:block"
              src="/matcha-destacado.webp"
              alt="Imagen de Matcha destacada"
              width={495}
              height={200}
            />
            <figure className="bg-card rounded-md h-full aspect-square flex items-center justify-center">
              <Image className="rounded-md h-full aspect-video object-cover" src="/matcha-bg-destacado.webp" alt="Imagen de Matcha destacado" width={200} height={200} />
            </figure>
            <figcaption className="flex flex-col items-start justify-between py-2 md:py-0 h-full md:ps-4">
              <h3 className={`${bodoni.className} text-primary text-3xl font-semibold flex flex-col`}>
                <span>TE MATCHA</span>
                <span className="hidden md:block text-primary/50">TE MATCHA</span>
                <span className="hidden md:block text-primary/30">TE MATCHA</span>
              </h3>
              <div className="flex flex-col items-start justify-between gap-3 min-w-52">
                <span className="text-[#828282] font-light">$6.990 - <strong className="font-semibold text-accent">$4.990</strong></span>
                <Button className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2">Agregar al Carrito <ShoppingBag size={16} /></Button>
              </div>
            </figcaption>
          </div>

          <div role="card" className="flex flex-col items-start rounded-md col-span-1 row-span-4">
            <figure className="bg-card rounded-md w-full aspect-square md:aspect-video flex items-center justify-center">
              <Image src="/te-negro-arandano.webp" alt="Imagen de té destacado" width={150} height={150} />
            </figure>
            <figcaption className="flex flex-col md:flex-row justify-between py-4">
              <h3 className={`${bodoni.className} text-primary text-4xl`}>Te Blanco con berrys</h3>
              <div className="flex flex-col items-start md:items-end justify-between gap-3 md:gap-1 min-w-52">
                <span className="text-[#828282] font-light">$6.990 - <strong className="font-semibold text-accent">$4.990</strong></span>
                <Button className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2">Agregar al Carrito <ShoppingBag size={16} /></Button>
              </div>
            </figcaption>
          </div>

          <div role="card" className="flex flex-col items-start rounded-md col-span-1 row-span-4">
            <figure className="bg-card rounded-md w-full aspect-square md:aspect-video flex items-center justify-center">
              <Image src="/te-negro-arandano.webp" alt="Imagen de té destacado" width={150} height={150} />
            </figure>
            <figcaption className="flex flex-col md:flex-row justify-between py-4">
              <h3 className={`${bodoni.className} text-primary text-4xl`}>Te Verde y manzanilla</h3>
              <div className="flex flex-col items-start md:items-end justify-between gap-3 md:gap-1 min-w-52">
                <span className="text-[#828282] font-light">$6.990 - <strong className="font-semibold text-accent">$4.990</strong></span>
                <Button className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2">Agregar al Carrito <ShoppingBag size={16} /></Button>
              </div>
            </figcaption>
          </div>
        </div>
      </section>

    </div >
  );
}
