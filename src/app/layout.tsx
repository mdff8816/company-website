import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Navbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { SpeedInsights } from "@vercel/speed-insights/next"

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
 
export const metadata: Metadata = {
  title: "Sarkem Works",
  description: "Sarkem Works Game Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <nav>
          <Header />
        </nav>
        <main className="relative overflow-hidden">{children}
        </main>
        <SpeedInsights />
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
