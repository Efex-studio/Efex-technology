import type { Metadata } from "next";
import "./globals.css";
import AppShell from './components/AppShell'
import WhatsappChat from "./components/whatsappChat";
import BackToTop from "./components/BackToTop";

export const metadata: Metadata = {
  title: "Efex Technology",
  description: "We build  websites that drive business growth and deliver measurable results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <AppShell>{children}</AppShell>
        <WhatsappChat />
        <BackToTop />
      </body>
    </html>
  );
}
