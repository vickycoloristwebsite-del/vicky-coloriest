import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "VIKRAM KUMPATI",
  description: "Director of Photography and Colorist Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="bg-[#111111] text-[#D1D5D7] antialiased min-h-screen flex flex-col selection:bg-white/20 selection:text-white">
        <Header />
        {/* Exact width: 60% with 20% margin on desktop, full width on mobile matching .site-content */}
        <main className="flex-1 w-[60%] mx-auto max-[932px]:w-full max-[932px]:px-0 pt-[200px] max-[932px]:pt-[120px] max-[540px]:pt-[100px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
