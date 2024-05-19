import { Inter, Bodoni_Moda } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
  weight: '500',
  style: 'italic'
})
export const bodoniNormal = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
  weight: '500',
  style: 'normal'
})