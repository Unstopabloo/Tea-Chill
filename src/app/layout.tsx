import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import "./globals.css";

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
  Heart, Mailbox,
  Search, ShoppingBag,
  User, Instagram
} from "lucide-react";
import {
  Bolsa, Difusor,
  Hojas, Matcha,
  Mugs, TeBlanco,
  TeNegro, TeRojo,
  Tetera, Whatsapp,
  BanderaChile, Tiktok
} from "@/lib/icons";

import { FooterButton } from "@/app/_root_components/FooterButton";

import Image from "next/image";

export const metadata: Metadata = {
  title: "Tea Chill",
  description: "Tea Chill es una tienda de té online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="es">
      <body className={`relative mx-auto ${inter.className}`}>
        <header className="z-50 bg-background py-8 fixed top-0 left-0 w-full max-h-[122px]">
          <nav className="flex justify-between container">
            <ul className="flex gap-4">
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
                    <DropdownMenuItem className="flex gap-3">
                      <Bolsa /><strong className="text-primary">Té en bolsas</strong>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex gap-3">
                      <Hojas /><strong className="text-primary">Té en hojas</strong>
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
                    <DropdownMenuItem className="flex gap-3">
                      <Tetera /><strong className="text-primary">Tetera de té</strong>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex gap-3">
                      <Difusor /><strong className="text-primary">Difusor</strong>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex gap-3">
                      <Mugs /><strong className="text-primary">Mugs y Tazas</strong>
                    </DropdownMenuItem>
                  </DropdownMenuContent>

                </DropdownMenu>
              </li>
              <li>
                <Button variant="link" className="flex gap-3 items-center">
                  Descuento del día
                </Button>
              </li>
              <li>
                <Button variant="link" className="flex gap-3 items-center">
                  SALE
                </Button>
              </li>
            </ul>

            <ul className="flex gap-3">
              <li>
                <Button variant="link" size="icon">
                  <Search size={18} />
                </Button>
              </li>
              <li>
                <Button variant="link" size="icon">
                  <ShoppingBag size={18} />
                </Button>
              </li>
              <li>
                <Button variant="link" size="icon">
                  <Heart size={18} />
                </Button>
              </li>
              <li>
                <Button variant="link" size="icon">
                  <User size={18} />
                </Button>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          {children}
        </main>
        <footer className="flex items-start justify-between gap-10 px-2 py-5 container">
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
                <Button variant="link" className="text-[#828282] font-normal p-0 flex flex-col items-start">
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
              <li className="text-primary font-normal flex gap-2">Compra en Chile <BanderaChile /></li>
              <li className="text-primary font-normal flex flex-col gap-1">
                Paga con: <Image src={'/creditos.png'} alt="Imagen de metodos de pago" width={244} height={34} />
              </li>
              <li className="text-primary font-normal flex flex-col gap-1">
                Envíos: <Image src={'/chileexpress.png'} alt="Imagen de chileexpress" width={244} height={34} />
              </li>
              <li className="text-primary font-normal flex flex-col gap-1">
                Síguenos en: <div className="flex gap-2"><Instagram strokeWidth={1} /> <Tiktok /></div>
              </li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
}
