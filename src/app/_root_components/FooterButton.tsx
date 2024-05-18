import { Button } from "@/components/ui/button";

export function FooterButton({ text }: { text: string }) {
  return (
    <Button variant="link" className="text-[#828282] font-normal p-0 max-w-96">{text}</Button>
  )
}