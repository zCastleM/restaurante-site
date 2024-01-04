import type { Metadata } from 'next'
import './globals.css'
import { cn } from "@/lib/utils"
import { fontSans } from '@/lib/fonts'
 

export const metadata: Metadata = {
  title: 'Modelo de site para restaurante one page',
  description: 'Este projeto é um modelo de site para restaurante one page que apresenta uma aparência moderna e responsiva.',
  authors: {
    name: "Mikael Meira",
    url: "https://github.com/zCastleM"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
            <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>{children}</body>
    </html>
  )
}
