'use client';

import { ShoppingBasket } from 'lucide-react';
import clsx from 'clsx';
import { addItem } from '@/components/cart/actions';
import LoadingDots from '@/components/loading-dots';
import { ProductVariant } from '@/lib/shopify/types';
import { useSearchParams } from 'next/navigation';
import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '../ui/button';

function SubmitButton({
  availableForSale,
  selectedVariantId
}: {
  availableForSale: boolean;
  selectedVariantId: string | undefined;
}) {
  const { pending } = useFormStatus();
  const buttonClasses =
    'relative bg-primary w-full hover:bg-primary/90 text-white flex items-center justify-center gap-1 md:gap-2 py-2 px-4 rounded-md transition-opacity duration-200';
  const disabledClasses = 'cursor-not-allowed opacity-60 hover:opacity-60';

  if (!availableForSale) {
    return (
      <Button aria-disabled disabled={true} className="bg-primary/60 text-center hover:bg-primary/50 cursor-default text-white flex items-center gap-2">
        Fuera de stock
        <ShoppingBasket size={16} />
      </Button>
    );
  }

  if (!selectedVariantId) {
    return (
      <button
        aria-label="Por favor selecciona una opción"
        aria-disabled
        className="bg-primary hover:bg-primary/90 text-white text-center flex items-center gap-2 w-full"
      >
        Agregar a carrito
        <ShoppingBasket size={16} />
      </button>
    );
  }

  return (
    <button
      onClick={(e: React.FormEvent<HTMLButtonElement>) => {
        if (pending) e.preventDefault();
      }}
      aria-label="Añadir a carrito"
      aria-disabled={pending}
      className={clsx(buttonClasses, {
        'hover:opacity-90': true,
        [disabledClasses]: pending
      })}
    >
      Agregar a carrito
      <div>
        {pending ? <LoadingDots className="mb-3 bg-white" /> : <ShoppingBasket size={16} />}
      </div>
    </button>
  );
}

export function AddToCart({
  variants,
  availableForSale
}: {
  variants: ProductVariant[];
  availableForSale: boolean;
}) {
  const [message, formAction] = useFormState(addItem, null);
  const searchParams = useSearchParams();
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  const variant = variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every(
      (option) => option.value === searchParams.get(option.name.toLowerCase())
    )
  );
  const selectedVariantId = variant?.id || defaultVariantId;
  const actionWithVariant = formAction.bind(null, selectedVariantId);

  return (
    <form action={actionWithVariant}>
      <SubmitButton availableForSale={availableForSale} selectedVariantId={selectedVariantId} />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
