import { ShoppingBasket } from 'lucide-react';

export default function OpenCart({
  quantity
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex h-11 w-11 items-center justify-center text-primary">
      <ShoppingBasket
        strokeWidth={1.75}
        size={20}
      />

      {quantity ? (
        <div className="absolute right-0 top-1 h-4 w-4 rounded-full bg-warning text-[11px] font-medium text-black">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
