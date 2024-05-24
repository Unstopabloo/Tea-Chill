import { Button } from "@/components/ui/button";

export function FooterButton({ text }: { text: string }) {
  return (
    <Button aria-label="Boton de redireccion externa" variant="link" className="text-[#828282] hover:text-[#2e2e2e] transition-colors duration-150 font-normal p-0 max-w-96">{text}</Button>
  )
}