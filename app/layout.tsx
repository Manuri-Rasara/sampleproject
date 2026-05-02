import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadataBase = new URL("https://sampleproject-1lzy.vercel.app");

export const metadata = {
  title: "Navoda Rajapaksha",
  description: "A creative portfolio and interactive gallery built with Next.js.",
  openGraph: {
    title: "Navoda Rajapaksha",
    description: "A creative portfolio and interactive gallery built with Next.js.",
    type: "website",
    url: "https://sampleproject-1lzy.vercel.app",
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
  twitter: {
    card: "summary_large_image",
    title: "Navoda Rajapaksha",
    description: "A creative portfolio and interactive gallery built with Next.js.",
    images: ["/Nimg.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
  );
}