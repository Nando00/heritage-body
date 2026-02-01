import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.heritagepaintbody.com"),
  title: "Heritage Paint & Body | Houston Auto Repair",
  description: "Houston's premier auto body shop offering expert collision repair, painting, and insurance assistance.",
  icons: {
    icon: "/favicon.png",
    apple: "/trasnparent-heritage-logo.png",
  },
  openGraph: {
    title: "Heritage Paint & Body | Houston Auto Repair",
    description: "Houston's premier auto body shop offering expert collision repair, painting, and insurance assistance.",
    url: "https://www.heritagepaintbody.com",
    siteName: "Heritage Paint & Body",
    images: [
      {
        url: "/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Heritage Paint & Body Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
