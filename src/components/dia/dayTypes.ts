export const DAYS: DaysProps[] = [
  {
    index: 1,
    name: "Lunes",
    te: "Té Negro",
    img: "/te-negro-dia.webp",
    handle: "lunes",
    collection: "te-negro"
  },
  {
    index: 2,
    name: "Martes",
    te: "Té Rojo",
    img: "/te-rojo-banner.webp",
    handle: "martes",
    collection: "te-rojo"
  },
  {
    index: 3,
    name: "Miércoles",
    te: "Té Blanco",
    img: "/te-blanco-dia.webp",
    handle: "miercoles",
    collection: "te-blanco"
  },
  {
    index: 4,
    name: "Jueves",
    te: "Té Verde",
    img: "/te-verde-dia.webp",
    handle: "jueves",
    collection: "te-verde"
  },
  {
    index: 5,
    name: "Viernes",
    te: "Matcha",
    img: "/matcha-dia.webp",
    handle: "viernes",
    collection: "matcha"
  }
]

export interface DaysProps {
  index: number;
  name: string;
  te: string;
  img: string;
  handle: string;
  collection: string;
}