import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import "./globals.css";
import Cart from "@/components/cart";
import { Search } from "@/app/_root_components/Search";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown, Clock,
  Heart, Mailbox, User, Instagram
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Bolsa, Difusor,
  Hojas, Matcha,
  Mugs, TeBlanco,
  TeNegro, TeRojo,
  Tetera, Whatsapp,
  BanderaChile, Tiktok,
  Logo
} from "@/lib/icons";
import { MobileMenu } from "./_root_components/MobileMenu";

import { FooterButton } from "@/app/_root_components/FooterButton";

import Image from "next/image";
import Link from "next/link";

import { DAYS } from "@/components/dia/dayTypes";

export const metadata: Metadata = {
  title: "Tea Chill",
  description: "Los mejor en té para armonizar cada dia de tu semana",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const date = new Date()
  const day = date.getDay()
  const actualDay = DAYS.find(d => d.index === day)
  const handle = actualDay?.handle

  return (
    <html lang="es">
      <body className={`relative mx-auto overflow-x-hidden ${inter.className}`}>
        <header className="z-50 bg-background py-8 fixed top-0 left-0 w-full max-h-[122px] border-b border-primary/10">
          <nav className="hidden md:flex justify-between container">
            <ul className="flex gap-4">
              <li>
                <Link aria-label="Link para ir a sitio principal de Tea chill" href={"/"}>
                  <Logo />
                </Link>
              </li>
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="link" className="flex gap-3 items-center">
                      <span>Tipos de té</span>
                      <ChevronDown size={16} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem className="flex gap-3">
                      <TeNegro /><strong className="text-primary">Té Negro</strong>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex gap-3">
                      <TeRojo /><strong className="text-primary">Té Rojo</strong>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex gap-3">
                      <TeBlanco /><strong className="text-primary">Té Blanco</strong>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex gap-3 text-primary">
                      <TeNegro /><strong className="text-primary">Té Verde</strong>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex gap-3 text-primary">
                      <Matcha /><strong className="text-primary">Matcha</strong>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="link" className="flex gap-3 items-center">
                      <span>Té por formato</span>
                      <ChevronDown size={16} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Link href={"/products?filter=bolsa-piramide"} className="flex gap-3">
                        <Bolsa /><strong className="text-primary hover:text-secondary">Té en bolsas</strong>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link href={"products?filter=bolsa-cuadrada"} className="flex gap-3">
                        <Hojas /><strong className="text-primary hover:text-secondary">Té en hojas</strong>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="link" className="flex gap-3 items-center">
                      <span>Accesorios</span>
                      <ChevronDown size={16} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                      <Link href={"/products?filter=tetera"} className="flex gap-3">
                        <Tetera /><strong className="text-primary">Tetera de té</strong>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href={"/products?filter=infusor"} className="flex gap-3">
                        <Difusor /><strong className="text-primary">Difusor</strong>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href={"/products?filter=mug-tazas"} className="flex gap-3">
                        <Mugs /><strong className="text-primary">Mugs y Tazas</strong>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>

                </DropdownMenu>
              </li>
              <li>
                <Button asChild variant="link" className="flex gap-3 items-center">
                  <Link href={`/dia/${handle}`}>
                    Descuento del día
                  </Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="flex gap-3 items-center">
                  <Link href={"/products"}>
                    Nuestros productos
                  </Link>
                </Button>
              </li>
            </ul>

            <ul className="flex gap-3">
              <li>
                <Search />
              </li>
              <li>
                <Cart />
              </li>
              <li>
                <Button aria-label="Perfil de usuario" variant="link" size="icon">
                  <User size={18} />
                </Button>
              </li>
            </ul>
          </nav>
          <nav className="flex md:hidden">
            <ul className="flex items-center justify-between px-2 gap-4 w-full">
              <li>
                <Link aria-label="Link para ir a sitio principal de Tea chill" href={"/"}>
                  <Logo />
                </Link>
              </li>
              <li>
                <MobileMenu />
              </li>
            </ul>
          </nav>
        </header>
        <main>
          {children}
        </main>
        <footer className="flex flex-wrap items-start justify-between gap-10 px-2 py-10 container">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Atención a cliente</h2>
            <ul className="flex flex-col gap-3 max-w-96">
              <li className="flex flex-col items-start">
                <h3 className="text-primary flex gap-2 items-center"><Whatsapp /> +56 9 8888 8888</h3>
                <FooterButton text="Mensaje de Whatsapp" />
              </li>
              <li className="flex flex-col items-start">
                <h3 className="text-primary flex gap-2 items-center"><Mailbox strokeWidth={1} /> bothuiweb@gmail.com</h3>
                <FooterButton text="Envíanos un mail" />
              </li>
              <li className="flex flex-col gap-3">
                <h3 className="text-primary flex gap-2 items-center"><Clock strokeWidth={1} /> Horarios de Atención</h3>
                <Button aria-label="Nuestros horarios" variant="link" className="text-[#6a6a6a] font-normal p-0 flex flex-col items-start">
                  <span>Lunes a Viernes 9:00am a 17:00pm</span>
                  <span>Sábado 9:00am a 13:00pm</span>
                  <span>Domingo Cerrado</span>
                </Button>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Tienda Online</h2>
            <ul className="flex flex-col max-w-96">
              <li>
                <FooterButton text="Contáctanos" />
              </li>
              <li>
                <FooterButton text="Preguntas Frecuentes" />
              </li>
              <li>
                <FooterButton text="Cambios y Devoluciones" />
              </li>
              <li>
                <FooterButton text="Medios de pago" />
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Tea Chill</h2>
            <ul className="flex flex-col max-w-96">
              <li>
                <FooterButton text="Términos y Condiciones" />
              </li>
              <li>
                <FooterButton text="Política y Privacidad" />
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <ul className="flex flex-col gap-3 max-w-96">
              <li className="text-primary font-normal">Somos una tienda 100% Segura</li>
              <li aria-label="Posicion geografica" className="text-primary font-normal flex gap-2">Compra en Chile <BanderaChile /></li>
              <li aria-label="Metodos de pago" className="text-primary font-normal flex flex-col gap-1">
                Paga con: <Image src={'/creditos.png'} alt="Imagen de metodos de pago" width={244} height={34} />
              </li>
              <li aria-label="Metodos de envío" className="text-primary font-normal flex flex-col gap-1">
                Envíos: <Image src={'/chileexpress.png'} alt="Imagen de chileexpress" width={244} height={34} />
              </li>
              <li aria-label="Nuestras redes sociales" className="text-primary font-normal flex flex-col gap-1">
                Síguenos en: <div className="flex gap-2"><Instagram strokeWidth={1} /> <Tiktok /></div>
              </li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
}
