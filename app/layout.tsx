import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

export const metadataBase = new URL("https://sampleproject-1lzy.vercel.app");

export const metadata = {
  title: "Navoda Rajapaksha",
  description: "___________",
  openGraph: {
    title: "Navoda Rajapaksha",
    description: "________",
    type: "website",
    url: "/",
    siteName: "Navoda Rajapaksha",
    images: [
      {
        url: "/Nimg.png",
        width: 1200,
        height: 630,
        alt: "Navoda Rajapaksha preview image",
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
      <head>
        <meta property="og:title" content="Navoda Rajapaksha" />
        <meta property="og:description" content="A creative portfolio and interactive gallery built with Next.js." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sampleproject-1lzy.vercel.app/" />
        <meta property="og:image" content="https://sampleproject-1lzy.vercel.app/Nimg.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Navoda Rajapaksha preview image" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Navoda Rajapaksha" />
        <meta name="twitter:description" content="A creative portfolio and interactive gallery built with Next.js." />
        <meta name="twitter:image" content="https://sampleproject-1lzy.vercel.app/Nimg.png" />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
