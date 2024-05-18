import Link from "next/link";

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
      <Link href={href} className="day-link flex justify-between bg-white w-[70%] rounded-md overflow-hidden hover:bg-secondary">
        <div className="px-3 py-6">
          <h3 className="transition-all duration-300 text-primary font-semibold text-2xl">{title}</h3>
          <strong className="transition-all duration-300 text-lg text-accent font-semibold">{day} <span>{discount}</span></strong>
        </div>
        {children}
      </Link>
    </div>
  )
}