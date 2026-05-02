import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

export const metadataBase = new URL("https://sampleproject-1lzy.vercel.app");

export const metadata = {
  title: "Navoda Akka — Creative Web Project",
  description: "A personal portfolio and interactive gallery experience built with Next.js.",
  openGraph: {
    title: "Navoda Rajapaksha",
    description: "________________",
    type: "website",
    url: "/",
    siteName: "Navoda Rajapaksha",
    images: [
      {
        url: "/Nimg.png",
        width: 1200,
        height: 630,
        alt: "Navoda Rajapaksha",
      },
    ],
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
