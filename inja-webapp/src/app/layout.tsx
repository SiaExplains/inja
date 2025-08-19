import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ContentContainer } from "@/components/layout/content-container/content-container.component";
import { Footer } from "@/components/layout/footer/footer.component";
import { Header } from "@/components/layout/header/header.component";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inja",
  description: "A platform tailored for expatriates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <div className="layout">
        <Header />
        <ContentContainer>{children}</ContentContainer>
        <Footer />
      </div>
      </body>
    </html>
  );
}
