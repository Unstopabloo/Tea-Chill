'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Frown, Info } from 'lucide-react';
import { Price } from '@/components/Price';
import { DEFAULT_OPTION } from '@/lib/constants';
import type { Cart } from '@/lib/shopify/types';
import { createUrl } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useEffect, useRef, useState } from 'react';
import CloseCart from './close-cart';
import { DeleteItemButton } from './delete-item-button';
import { EditItemQuantityButton } from './edit-item-quantity-button';
import OpenCart from './open-cart';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type MerchandiseSearchParams = {
  [key: string]: string;
};

export default function CartModal({ cart }: { cart: Cart | undefined }) {
  const [isOpen, setIsOpen] = useState(false);
  const quantityRef = useRef(cart?.totalQuantity);
  const openCart = () => setIsOpen(true);

  const closeCart = () => setIsOpen(false);

  useEffect(() => {
    // Open cart modal when quantity changes.
    if (cart?.totalQuantity !== quantityRef.current) {
      // But only if it's not already open (quantity also changes when editing items in cart).
      if (!isOpen) {
        setIsOpen(true);
      }

      // Always update the quantity reference
      quantityRef.current = cart?.totalQuantity;
    }
  }, [isOpen, cart?.totalQuantity, quantityRef]);

  return (
    <>
      <button aria-label="Abrir carrito" onClick={openCart}>
        <OpenCart quantity={cart?.totalQuantity} />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeCart} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed bottom-0 right-0 top-0 flex h-full w-full flex-col border-l border-neutral-200 bg-white/80 p-6 text-black backdrop-blur-xl md:w-[390px] dark:border-neutral-700 dark:bg-black/80 dark:text-white">
              <header className="relative flex items-center justify-between border-b px-3 pt-7">
                <h2 className="text-lg font-normal text-primary">Detalle Carrito</h2>
                <p className='text-primary flex gap-2'><strong>{cart?.totalQuantity}</strong>{cart?.totalQuantity === 0 ? 'Producto' : 'Productos'}</p>

                <button className='absolute top-0 right-0' aria-label="Cerrar carrito" onClick={closeCart}>
                  <CloseCart />
                </button>
              </header>

              {!cart || cart.lines.length === 0 ? (
                <div className="mt-20 p-5 flex w-full flex-col items-center justify-center overflow-hidden bg-gray-200 border border-gray-300 rounded-md text-gray-600">
                  <p className="mt-6 text-center text-lg font-bold">Tu carrito esta vacío</p>
                  <Frown className="h-16" />
                </div>
              ) : (
                <div className="flex h-full flex-col justify-between overflow-hidden p-1">
                  <ul className="flex-grow overflow-auto py-4">
                    {cart.lines.map((item, i) => {
                      const merchandiseSearchParams = {} as MerchandiseSearchParams;

                      item.merchandise.selectedOptions.forEach(({ name, value }) => {
                        if (value !== DEFAULT_OPTION) {
                          merchandiseSearchParams[name.toLowerCase()] = value;
                        }
                      });

                      const merchandiseUrl = createUrl(
                        `/products/${item.merchandise.product.handle}`,
                        new URLSearchParams(merchandiseSearchParams)
                      );

                      return (
                        <li
                          key={i}
                          className="flex w-full flex-col border-b border-neutral-300 dark:border-neutral-700"
                        >
                          <div className="relative flex w-full flex-row justify-between px-1 py-4">
                            <div className="absolute z-40 -mt-2 ml-[55px]">
                              <DeleteItemButton item={item} />
                            </div>
                            <Link
                              href={merchandiseUrl}
                              onClick={closeCart}
                              className="z-30 flex flex-row space-x-4"
                            >
                              <div className="relative h-16 w-16 cursor-pointer overflow-hidden rounded-md border border-neutral-200">
                                <Image
                                  className="h-full w-full object-cover"
                                  width={64}
                                  height={64}
                                  alt={
                                    item.merchandise.product.featuredImage.altText ||
                                    item.merchandise.product.title
                                  }
                                  src={item.merchandise.product.featuredImage.url}
                                />
                              </div>

                              <div className="flex flex-1 flex-col gap-2 text-base">
                                <span className="leading-tight">
                                  {item.merchandise.product.title}
                                </span>
                                <strong className='font-normal text-accent text-sm'>
                                  <Price
                                    price={item.cost.totalAmount.amount}
                                  />
                                </strong>
                              </div>
                            </Link>
                            <div className="flex h-16 flex-col items-end justify-between">
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger><Info className='text-[#828282]' size={14} /></TooltipTrigger>
                                  <TooltipContent align='start' className='bg-gray-100'>
                                    <small className='text-xs text-[#828282]'>Descuentos se aplicaran en checkout</small>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                              <div className="ml-auto flex h-9 flex-row items-center rounded-md border border-neutral-200">
                                <EditItemQuantityButton item={item} type="minus" />
                                <p className="w-12 text-center">
                                  <span className="w-full text-sm">{item.quantity}</span>
                                </p>
                                <EditItemQuantityButton item={item} type="plus" />
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="py-4 text-sm text-neutral-500 dark:text-neutral-400">
                    <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 dark:border-neutral-700">
                      <p>Impuestos</p>
                      <Price
                        price={cart.cost.totalTaxAmount.amount}
                      />
                    </div>
                    <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                      <p>Envío</p>
                      <p className="text-right">Calculado en checkout</p>
                    </div>
                    <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                      <p>Total</p>
                      <strong className='text-accent font-semibold'>
                        <Price
                          price={cart.cost.totalAmount.amount}
                        />
                      </strong>
                    </div>
                  </div>
                  <footer className='w-full flex flex-col gap-4'>
                    <Link href={"/"} className='shadow-md block w-full rounded-md bg-secondary p-3 text-center text-sm font-medium text-primary opacity-80 hover:opacity-100'>
                      Ver carrito completo
                    </Link>
                    <a
                      href={cart.checkoutUrl}
                      className="shadow-md block w-full rounded-md bg-primary p-3 text-center text-sm font-medium text-white opacity-80 hover:opacity-100"
                    >
                      Comprar
                    </a>
                  </footer>
                </div>
              )}
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
