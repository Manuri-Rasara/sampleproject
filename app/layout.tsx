import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Navoda Akka — Creative Web Project",
  description: "A personal portfolio and interactive gallery experience built with Next.js.",
  openGraph: {
    title: "Navoda Akka — Creative Web Project",
    description: "A personal portfolio and interactive gallery experience built with Next.js.",
    type: "website",
    url: "https://sampleproject-1lzy.vercel.app/",
    siteName: "Navoda Rajapaksha",
    images: [
      {
        url: "/og-image.PNG",
        width: 1200,
        height: 630,
        alt: "Navoda Akka project preview",
      },
    ],
  },
  twitter: {
    card: "Welcome",
    title: "Navoda Rajapaksha",
    description: "_______",
    images: ["/og-image.PNG"],
  },
};

const geist = Geist({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", geist.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
