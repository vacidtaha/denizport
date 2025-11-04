import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Denizport",
  description: "Denizport Lojistik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
