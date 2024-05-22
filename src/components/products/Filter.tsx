"use client"

import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { Checkbox } from "@/components/ui/checkbox"
import { TeNegro, TeRojo, TeBlanco, Matcha, Bolsa, Hojas, Tetera, Difusor, Mugs } from "@/lib/icons"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from "@/components/ui/form"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "../ui/button"

const tes = [
  {
    name: "Té Negro",
    value: "te-negro",
    icon: "TeNegro"
  },
  {
    name: "Té Rojo",
    value: "te-rojo",
    icon: "TeRojo"
  },
  {
    name: "Té Verde",
    value: "te-verde",
    icon: "TeNegro"
  },
  {
    name: "Té Blanco",
    value: "te-blanco",
    icon: "TeBlanco"
  },
  {
    name: "Matcha",
    value: "matcha",
    icon: "Matcha"
  },
]

const formatos = [
  {
    name: 'Té bolsa pirámide',
    value: 'bolsa-piramide',
    icon: 'Bolsa'
  },
  {
    name: 'Té bolsa cuadrada',
    value: 'bolsa-cuadrada',
    icon: 'Hojas'
  }
]

const accesorios = [
  {
    name: 'Tetera de Té',
    value: 'tetera',
    icon: 'Tetera'
  },
  {
    name: 'Infusor',
    value: 'infusor',
    icon: 'Difusor'
  },
  {
    name: 'Mugs y Tazas',
    value: 'mug-tazas',
    icon: 'Mugs'
  }
]

const FormSchema = z.object({
  te: z.array(z.string()).optional(),
  formato: z.array(z.string()).optional(),
  accesorio: z.array(z.string()).optional()
})


export function Filter() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema)
  })

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter()

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const params = new URLSearchParams(searchParams.toString())
    const filterParam = data.te ? data.te.filter(value => value !== '').map(encodeURIComponent).join('&') : '';
    const formatoParam = data.formato ? data.formato.filter(value => value !== '').map(encodeURIComponent).join('&') : ''
    const accesorioParam = data.accesorio ? data.accesorio.filter(value => value !== '').map(encodeURIComponent).join('&') : ''

    let filters = ''

    if (filterParam) filters = filters + '&' + filterParam
    if (formatoParam) filters = filters + '&' + formatoParam
    if (accesorioParam) filters = filters + '&' + accesorioParam

    params.set('filter', filters)

    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <aside className="p-10 rounded-md border bg-white border-gray-200 min-w-64">
      <section className="flex flex-col gap-4">
        <Form {...form}>
          <form
            aria-label="Formulario para filtrar productos"
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8"
          >
            <FormField
              aria-label="Campo de formulario para seleccionar tipos de té"
              control={form.control}
              name="te"
              render={() => (
                <FormItem>
                  <div className="flex flex-col gap-2">
                    <FormLabel className="text-primary font-bold text-lg">Tipos de Té</FormLabel>
                    <div className="h-[1px] w-full bg-gray-200"></div>
                  </div>
                  {tes.map((item) => (
                    <FormField
                      key={item.value}
                      control={form.control}
                      name="te"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.value}
                            className="py-3 flex gap-6 items-center justify-between"
                          >
                            <div className="flex items-center gap-3">
                              {item.icon === "TeNegro" && <TeNegro />}
                              {item.icon === "TeRojo" && <TeRojo />}
                              {item.icon === "TeBlanco" && <TeBlanco />}
                              {item.icon === "Matcha" && <Matcha />}
                              {item.icon === "TeVerde" && <TeNegro />}
                              <FormLabel className="font-normal">
                                {item.name}
                              </FormLabel>
                            </div>
                            <FormControl>
                              <Checkbox
                                aria-label="Checkbox para seleccionar tipo de té"
                                checked={field.value?.includes(item.value)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...(field.value ?? []), item.value])
                                    : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== item.value
                                      )
                                    )
                                }}
                              />
                            </FormControl>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                </FormItem>
              )}
            />
            <FormField
              aria-label="Campo de formulario para seleccionar formato de té"
              control={form.control}
              name="formato"
              render={() => (
                <FormItem>
                  <div className="flex flex-col gap-2">
                    <FormLabel className="text-primary font-bold text-lg">Formatos de Té</FormLabel>
                    <div className="h-[1px] w-full bg-gray-200"></div>
                  </div>
                  {formatos.map((item) => (
                    <FormField
                      key={item.value}
                      control={form.control}
                      name="formato"
                      render={({ field }) => {
                        return (
                          <FormItem
                            aria-label="Campo de formulario para seleccionar formato de té"
                            key={item.value}
                            className="py-3 flex gap-6 items-center justify-between"
                          >
                            <div className="flex items-center gap-3">
                              {item.icon === "Bolsa" && <Bolsa />}
                              {item.icon === "Hojas" && <Hojas />}
                              <FormLabel className="font-normal">
                                {item.name}
                              </FormLabel>
                            </div>
                            <FormControl>
                              <Checkbox
                                aria-label="Checkbox para seleccionar formato de té"
                                checked={field.value?.includes(item.value)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...(field.value ?? []), item.value])
                                    : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== item.value
                                      )
                                    )
                                }}
                              />
                            </FormControl>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                </FormItem>
              )}
            />
            <FormField
              aria-label="Campo de formulario para seleccionar accesorios"
              control={form.control}
              name="accesorio"
              render={() => (
                <FormItem>
                  <div className="flex flex-col gap-2">
                    <FormLabel className="text-primary font-bold text-lg">Accesorios</FormLabel>
                    <div className="h-[1px] w-full bg-gray-200"></div>
                  </div>
                  {accesorios.map((item) => (
                    <FormField
                      aria-label="Campo de formulario para seleccionar accesorios"
                      key={item.value}
                      control={form.control}
                      name="accesorio"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.value}
                            className="py-3 flex gap-6 items-center justify-between"
                          >
                            <div className="flex items-center gap-3">
                              {item.icon === "Tetera" && <Tetera />}
                              {item.icon === "Difusor" && <Difusor />}
                              {item.icon === "Mugs" && <Mugs />}
                              <FormLabel className="font-normal">
                                {item.name}
                              </FormLabel>
                            </div>
                            <FormControl>
                              <Checkbox
                                aria-label="Checkbox para seleccionar accesorio"
                                checked={field.value?.includes(item.value)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...(field.value ?? []), item.value])
                                    : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== item.value
                                      )
                                    )
                                }}
                              />
                            </FormControl>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                </FormItem>
              )}
            />
            <Button className="w-full rounded-md shadow-md" type="submit">Filtrar</Button>
          </form>
        </Form>
      </section>
    </aside>
  )
}