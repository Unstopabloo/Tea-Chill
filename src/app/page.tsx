import { bodoni } from "@/lib/fonts";

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="mt-20 py-3 min-h-screen">
      <section className="mt-16 min-h-screen">
        <div className="container flex flex-col items-center gap-12">
          <h1 className={`text-[56px] w-full text-center text-primary ${bodoni.className} leading-snug`}>Crea una pasión <br /> por el té</h1>
          <Button variant="default" size="principal">Ver tipos de té</Button>
        </div>
        <div className="w-screen flex justify-between mt-2">
          <div className="flex flex-col items-start">
            <div className="shadow-lg shadow-primary bg-[url('/te-home-1.webp')] z-10 bg-center bg-cover w-[473px] h-[160px] rounded-md"></div>
            <div className="shadow-lg shadow-primary bg-[url('/te-home-2.webp')] bg-center bg-cover w-[600px] h-[160px] rounded-md"></div>
          </div>
          <div className="flex flex-col items-end">
            <div className="shadow-lg shadow-primary bg-[url('/te-home-3.webp')] z-10 bg-center bg-cover w-[473px] h-[160px] rounded-md"></div>
            <div className="shadow-lg shadow-primary bg-[url('/te-home-4.webp')] bg-center bg-cover w-[600px] h-[160px] rounded-md"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
