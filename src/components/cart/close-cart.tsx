import { XIcon } from 'lucide-react';
import clsx from 'clsx';

export default function CloseCart({ className }: { className?: string }) {
  return (
    <div className="relative flex items-center justify-center rounded-md text-primary">
      <XIcon size={18} className={clsx('h-6 transition-all ease-in-out hover:scale-110 ', className)} />
    </div>
  );
}
