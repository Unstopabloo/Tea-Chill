import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Image from "next/image"
import {
  Bolsa, Difusor,
  Hojas, Matcha,
  Mugs, TeBlanco,
  TeNegro, TeRojo,
  Tetera
} from "@/lib/icons";
import Link from "next/link";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger className="text-primary">
        <Menu />
      </SheetTrigger>
      <SheetContent className="w-full sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>
            <Image src={"/logo.png"} alt="Logo en menu responsive" width={100} height={70} />
          </SheetTitle>
        </SheetHeader>
        <div aria-label="Cuerpo del menu" className="flex flex-col items-center gap-5 py-10 w-ful">
          <section className="w-full flex flex-col gap-2 items-center justify-center">
            <h2 className="text-primary text-center font-semibold w-full py-4 border-b border-gray-100">Tipos de té</h2>
            <ul className="flex flex-col gap-2 w-full items-start">
              <li>
                <Link className="flex gap-6 py-3" href="/dia/lunes">
                  <TeNegro /><strong className="font-normal text-primary">Té Negro</strong>
                </Link>
              </li>
              <li>
                <Link className="flex gap-6 py-3" href="/dia/martes">
                  <TeRojo /><strong className="font-normal text-primary">Té Rojo</strong>
                </Link>
              </li>
              <li>
                <Link className="flex gap-6 py-3" href="/dia/miercoles">
                  <TeBlanco /><strong className="font-normal text-primary">Té Blanco</strong>
                </Link>
              </li>
              <li>
                <Link className="flex gap-6 py-3" href="/dia/jueves">
                  <TeNegro /><strong className="font-normal text-primary">Té Verde</strong>
                </Link>
              </li>
              <li>
                <Link className="flex gap-6 py-3" href="/dia/viernes">
                  <Matcha /><strong className="font-normal text-primary">Matcha</strong>
                </Link>
              </li>
            </ul>
          </section>

          <section className="w-full flex flex-col gap-2 items-center justify-center">
            <h2 className="text-primary text-center font-semibold w-full py-4 border-b border-gray-100">Té por formato</h2>
            <ul className="flex flex-col gap-2 w-full items-start">
              <li>
                <Link className="flex gap-6 py-3" href="/products?filter=bolsa-cuadrada">
                  <Bolsa /><strong className="font-normal text-primary">Té bolsas cuadradas</strong>
                </Link>
              </li>
              <li>
                <Link className="flex gap-6 py-3" href="/products?filter=bolsa-piramide">
                  <Hojas /><strong className="font-normal text-primary">Té bolsas piramide</strong>
                </Link>
              </li>
            </ul>
          </section>

          <section className="w-full flex flex-col gap-2 items-center justify-center">
            <h2 className="text-primary text-center font-semibold w-full py-4 border-b border-gray-100">Accesorios</h2>
            <ul className="flex flex-col gap-2 w-full items-start">
              <li>
                <Link className="flex gap-6 py-3" href="/products?filter=bolsa-cuadrada">
                  <Tetera /><strong className="font-normal text-primary">Tetera de té</strong>
                </Link>
              </li>
              <li>
                <Link className="flex gap-6 py-3" href="/products?filter=bolsa-cuadrada">
                  <Difusor /><strong className="font-normal text-primary">Infusor</strong>
                </Link>
              </li>
              <li>
                <Link className="flex gap-6 py-3" href="/products?filter=bolsa-piramide">
                  <Mugs /><strong className="font-normal text-primary">Mugs y tazas</strong>
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </SheetContent>
    </Sheet>
  )
}