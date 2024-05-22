import Link from "next/link";

interface DayButtonProps {
  right?: boolean;
  title: string;
  day: string;
  discount: string;
  href: string;
  ariaLabel: string;
  children?: React.ReactNode;
}

export function DayButton({ right, title, day, discount, children, href, ariaLabel }: DayButtonProps) {
  return (
    <div aria-label={ariaLabel} className={`w-full flex ${right ? 'justify-end' : 'justify-start'}`}>
      <Link href={href} className="day-link flex justify-between bg-white w-[95%] md:w-[70%] rounded-md overflow-hidden hover:bg-secondary">
        <div aria-label={"Informacion de link de dia"} className="px-3 py-2 md:py-6">
          <h3 className="transition-all duration-300 text-primary font-semibold text-lg md:text-2xl">{title}</h3>
          <strong className="transition-all duration-300 text-xs md:text-lg text-accent font-semibold">{day} <span>{discount}</span></strong>
        </div>
        {children}
      </Link>
    </div>
  )
}