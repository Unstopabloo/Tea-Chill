import { bodoni } from "@/lib/fonts";

import { Button } from "@/components/ui/button"
import Image from "next/image";
import { ArrowRight } from "lucide-react"
import { DayButton } from "./_root_components/DayButton";
import { Price } from "@/components/Price";
import { AddToCart } from "@/components/cart/add-to-cart"
import { ManchaHoja, ManchaEnvio, ManchaTarjeta } from "@/lib/icons";

import Link from "next/link";

import { getCollectionProducts } from "@/lib/shopify";

export default async function Home() {
  const accesorios = await getCollectionProducts({ collection: 'Accesorios' })
  const destacadosList = await getCollectionProducts({ collection: 'Destacado' })
  const matchaProduct = await getCollectionProducts({ collection: 'Destacado' })

  const matcha = matchaProduct.find(item => item.title === 'Matcha')
  const destacados = destacadosList.filter(item => item.title !== 'Matcha')

  const matchaIMG = matcha?.featuredImage.url || destacados[5].featuredImage.url
  const matchaAlt = matcha?.featuredImage.altText || destacados[5].featuredImage.altText
  const matchaRegularPrice = matcha?.priceRange.minVariantPrice.amount || destacados[5].priceRange.minVariantPrice.amount
  const matchaDiscountPrice = (parseInt(matchaRegularPrice) * 0.88).toString()
  const matchaVariants = matcha?.variants || destacados[5].variants

  return (
    <div className="mt-20 py-3 min-h-screen">
      <section className="mt-16">
        <div className="container flex flex-col items-center gap-12">
          <h1 className={`animate-fade-in-up text-[42px] md:text-[56px] w-full text-center text-primary ${bodoni.className} leading-snug`}>Crea una pasión <br /> por el té</h1>
          <Link href="/products">
            <Button className="animate-fade-in-up animate-delay-300" variant="default" size="principal">Todos los productos</Button>
          </Link>
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
            <ManchaHoja />
            <h3 className="text-primary font-semibold text-xl">Despacho en todo Chile</h3>
            <span className="text-[#828282] font-light max-w-[250px]">Recibe tus pedidos en tu hogar, en todo el país.</span>
          </div>
          <div className="animate-fade-in-up flex flex-col items-center text-center w-1/2 md:w-auto gap-3 p-4 md:p-10">
            <ManchaEnvio />
            <h3 className="text-primary font-semibold text-xl">Muestras gratis en cada pedido</h3>
            <span className="text-[#828282] font-light max-w-[250px]">Recibe 3 muestras gratis por parte de TeaChill. ¡Disfrutalos!</span>
          </div>
          <div className="animate-fade-in-left animate-delay-700 flex flex-col items-center text-center gap-3 p-4 md:p-10">
            <ManchaTarjeta />
            <h3 className="text-primary font-semibold text-xl">Diferentes formas de pago</h3>
            <span className="text-[#828282] font-light max-w-[250px]">Opta por tu mejor forma de pago con debito y/o crédito.</span>
          </div>
        </div>
        <Image className="animate-fade-in animate-delay-900 rotate-180" src="/divisor.png" alt="division de secciones" width={1980} height={38} />
      </section>

      <Image className="mb-44" src="/banner-despacho.webp" alt="Imagen informativa de despacho" width={1880} height={200} />

      <section className="container flex flex-col gap-28 pb-16">

        <header className="flex justify-between items-center text-center gap-10">
          <Image className="hidden md:block" src="/hoja-destacados.webp" alt="Imagen decorativa de hojas de té" width={76} height={82} />
          <div className="h-[1px] min-w-10 flex-1 bg-primary/40 opacity-80 hidden md:block"></div>
          <h2 className={`${bodoni.className} text-5xl w-full md:w-auto font-normal text-primary`}>Productos destacados</h2>
          <div className="h-[1px] min-w-10 flex-1 bg-primary/40 opacity-80 hidden md:block"></div>
          <Image className="scale-x-[-1] hidden md:block" src="/hoja-destacados.webp" alt="Imagen decorativa de hojas de té" width={76} height={82} />
        </header>

        <div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-6 gap-8">
          <div role="card" className="flex flex-col items-start rounded-md col-span-1 row-span-6">
            <figure className="relative bg-card rounded-md w-full aspect-[10/11] flex items-center justify-center">
              <div className="absolute top-3 right-3 size-10 flex items-center justify-center font-semibold text-sm rounded-full p-3 bg-warning text-warning-foreground">-12%</div>
              <Image src={destacados[0].featuredImage.url} alt={destacados[0].featuredImage.altText} width={300} height={300} />
            </figure>
            <figcaption className="flex flex-col gap-2 md:gap-0 items-start md:flex-row justify-between py-4 w-full">
              <h3 className={`${bodoni.className} text-primary text-4xl`}>{destacados[0].title}</h3>
              <div className="flex items-start flex-col md:items-end justify-between gap-4 min-w-52">
                <span className="text-[#828282] font-light">
                  <Price price={destacados[0].priceRange.minVariantPrice.amount} /> - <strong className="font-semibold text-accent"><Price price={(parseInt(destacados[0].priceRange.minVariantPrice.amount) * 0.88).toString()} /></strong>
                </span>
                {/* <Button className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2">Agregar al Carrito <ShoppingBasket size={16} /></Button> */}
                <AddToCart availableForSale={true} variants={destacados[0].variants} />
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
            <figure className="relative bg-card rounded-md h-full aspect-square flex items-center justify-center">
              <div className="absolute top-3 right-3 size-10 flex items-center justify-center font-semibold text-sm rounded-full p-3 bg-warning text-warning-foreground">-12%</div>
              <Image
                className="rounded-md h-full aspect-video object-cover"
                src={matchaIMG}
                alt={matchaAlt}
                width={200}
                height={200}
              />
            </figure>
            <figcaption className="flex flex-col items-start justify-between py-2 md:py-0 h-full md:ps-4">
              <h3 className={`${bodoni.className} text-primary text-3xl font-semibold flex flex-col`}>
                <span>TE MATCHA</span>
                <span className="hidden md:block text-primary/50">TE MATCHA</span>
                <span className="hidden md:block text-primary/30">TE MATCHA</span>
              </h3>
              <div className="flex flex-col items-start justify-between gap-3 min-w-52">
                <span className="text-[#828282] font-light">
                  <Price price={matchaRegularPrice} /> - <strong className="font-semibold text-accent"><Price price={matchaDiscountPrice} /></strong>
                </span>
                <AddToCart availableForSale={true} variants={matchaVariants} />
              </div>
            </figcaption>
          </div>

          <div role="card" className="flex flex-col items-start rounded-md col-span-1 row-span-4">
            <figure className="relative bg-card rounded-md w-full aspect-square md:aspect-video flex items-center justify-center">
              <div className="absolute top-3 right-3 size-10 flex items-center justify-center font-semibold text-sm rounded-full p-3 bg-warning text-warning-foreground">-12%</div>
              <Image src={destacados[1].featuredImage.url} alt={destacados[1].featuredImage.altText} width={150} height={150} />
            </figure>
            <figcaption className="flex flex-col md:flex-row justify-between w-full py-4">
              <h3 className={`${bodoni.className} text-primary text-4xl`}>{destacados[1].title}</h3>
              <div className="flex flex-col items-start md:items-end justify-between gap-3 md:gap-1 min-w-52">
                <span className="text-[#828282] font-light">
                  <Price price={destacados[1].priceRange.minVariantPrice.amount} /> - <strong className="font-semibold text-accent"><Price price={(parseInt(destacados[1].priceRange.minVariantPrice.amount) * 0.88).toString()} /></strong>
                </span>
                <AddToCart availableForSale={true} variants={destacados[1].variants} />
              </div>
            </figcaption>
          </div>

          <div role="card" className="flex flex-col items-start rounded-md col-span-1 row-span-4">
            <figure className="relative bg-card rounded-md w-full aspect-square md:aspect-video flex items-center justify-center">
              <div className="absolute top-3 right-3 size-10 flex items-center justify-center font-semibold text-sm rounded-full p-3 bg-warning text-warning-foreground">-12%</div>
              <Image src={destacados[3].featuredImage.url} alt={destacados[3].featuredImage.altText} width={150} height={150} />
            </figure>
            <figcaption className="flex flex-col md:flex-row justify-between py-4 w-full">
              <h3 className={`${bodoni.className} text-primary text-4xl`}>{destacados[3].title}</h3>
              <div className="flex flex-col items-start md:items-end justify-between gap-3 md:gap-1 min-w-52">
                <span className="text-[#828282] font-light">
                  <Price price={destacados[3].priceRange.minVariantPrice.amount} /> - <strong className="font-semibold text-accent"><Price price={(parseInt(destacados[3].priceRange.minVariantPrice.amount) * 0.88).toString()} /></strong>
                </span>
                <AddToCart availableForSale={true} variants={destacados[3].variants} />
              </div>
            </figcaption>
          </div>
        </div>
      </section>

      <section className="container grid grid-cols-4 grid-rows-2 gap-5 pb-24">
        <figure className="hidden md:block rounded-md col-span-1 row-span-2 bg-[url('/accesorios-banner.webp')] bg-cover bg-center bg-no-repeat"></figure>

        <div className="col-span-4 row-span-2 md:col-span-2 md:row-span-2 flex flex-col justify-between items-center gap-3">
          <h2 className={`${bodoni.className} uppercase text-primary text-3xl flex flex-col`}>
            <span>Accesorios</span>
            <span className="hidden md:block text-primary/80">Accesorios</span>
            <span className="hidden md:block text-primary/60">Accesorios</span>
            <span className="hidden md:block text-primary/40">Accesorios</span>
            <span className="hidden md:block text-primary/20">Accesorios</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-5">
            <div role="card" className="flex flex-col justify-between items-start rounded-md">
              <figure className="relative bg-card rounded-md w-full max-h-[168px] aspect-square md:aspect-video flex items-center justify-center">
                <Image src={accesorios[0].featuredImage.url} alt={accesorios[0].featuredImage.altText || `Imagen de ${accesorios[0].title}`} width={130} height={130} />
              </figure>
              <figcaption className="flex flex-col md:flex-row justify-between pt-4">
                <h3 className={`${bodoni.className} text-primary text-xl`}>{accesorios[0].title}</h3>
                <div className="flex flex-col items-start md:items-end justify-between gap-3 md:gap-2">
                  <strong className="font-semibold text-accent"><Price price={accesorios[0].priceRange.minVariantPrice.amount} /></strong>
                  <AddToCart availableForSale={true} variants={accesorios[0].variants} />
                </div>
              </figcaption>
            </div>

            <div role="card" className="flex flex-col justify-between items-start rounded-md">
              <figure className="relative bg-card rounded-md w-full max-h-[168px] aspect-square md:aspect-video flex items-center justify-center">
                <Image src={accesorios[2].featuredImage.url} alt={accesorios[2].featuredImage.altText || `Imagen de ${accesorios[2].title}`} width={130} height={130} />
              </figure>
              <figcaption className="flex flex-col md:flex-row justify-between pt-4">
                <h3 className={`${bodoni.className} text-primary text-xl`}>{accesorios[2].title}</h3>
                <div className="flex flex-col items-start md:items-end justify-between gap-3 md:gap-2">
                  <strong className="font-semibold text-accent"><Price price={accesorios[2].priceRange.minVariantPrice.amount} /></strong>
                  <AddToCart availableForSale={true} variants={accesorios[2].variants} />
                </div>
              </figcaption>
            </div>
          </div>
        </div>

        <div className="col-span-1 row-span-2 hidden md:flex md:flex-col">
          <figure className="rounded-md bg-card flex-1 flex items-center justify-center">
            <Image src={accesorios[1].featuredImage.url} alt={accesorios[1].featuredImage.altText || `Imagen de ${accesorios[1].title}`} width={250} height={250} />
          </figure>
          <figcaption className="flex flex-col md:flex-row justify-between pt-4">
            <h3 className={`${bodoni.className} text-primary text-2xl`}>{accesorios[1].title}</h3>
            <div className="flex flex-col items-start md:items-end justify-between gap-3 md:gap-1 min-w-52">
              <strong className="font-semibold text-accent"><Price price={accesorios[1].priceRange.minVariantPrice.amount} /></strong>
              <AddToCart availableForSale={true} variants={accesorios[1].variants} />
            </div>
          </figcaption>
        </div>
      </section>

      <section className="bg-secondary w-full py-12">
        <div className="container flex justify-between items-center">
          <Image src="/flor-newsletter.webp" alt="Flor decorativa de seccion de new letter" width={90} height={90} />
          <form className="flex flex-col items-center gap-7">
            <h2 className={`text-4xl ${bodoni.className} text-primary`}>Suscríbete a Newsletter de TeaChill</h2>
            <label className="text-[#828282]" htmlFor="email">Mandanos tu correo y recibe un 20% de descuento.</label>
            <div className="flex bg-white rounded-md shadow-lg w-full">
              <input
                id="email"
                type="email"
                placeholder="Escribe tu correo aquí"
                className="w-full p-2 rounded-md"
              />
              <Button className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2 rounded-e-md rounded-s-none">Enviar</Button>
            </div>
          </form>
          <Image src="/flor-newsletter.webp" alt="Flor decorativa de seccion de new letter" width={90} height={90} />
        </div>
      </section>
    </div>
  );
}
