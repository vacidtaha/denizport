import type { Metadata } from "next";
import "./globals.css";
import StructuredData from "./components/StructuredData";

export const metadata: Metadata = {
  title: {
    default: "Denizport İnşaat | Konut Projeleri ve İnşaat Hizmetleri",
    template: "%s | Denizport İnşaat"
  },
  description: "Denizport İnşaat, konut projeleri, villa satışı, inşaat ve taahhüt hizmetleri sunmaktadır. Modern ve lüks yaşam alanları ile hayalinizdeki evi gerçeğe dönüştürüyoruz. Mimari proje ve danışmanlık desteği.",
  keywords: ["inşaat", "konut projeleri", "villa satışı", "inşaat taahhüt", "konut satışı", "villa projeleri", "gayrimenkul", "Bodrum villa", "Bodrum konut", "lüks konutlar", "Denizport", "mimari proje", "iç mimarlık"],
  authors: [{ name: "Denizport İnşaat" }],
  creator: "Denizport İnşaat",
  publisher: "Denizport İnşaat",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://denizportinsaat.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Denizport İnşaat | Konut Projeleri ve Villa Satışı",
    description: "Modern ve lüks konut projeleri ile hayalinizdeki evi gerçeğe dönüştürüyoruz. Villa satışı, inşaat ve taahhüt hizmetleri. Mimari proje desteği.",
    url: 'https://denizportinsaat.com',
    siteName: 'Denizport İnşaat',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Denizport İnşaat - Konut Projeleri ve Villa Satışı',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Denizport İnşaat | Konut Projeleri ve Villa Satışı",
    description: "Modern ve lüks konut projeleri ile hayalinizdeki evi gerçeğe dönüştürüyoruz.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // Google Search Console'dan alınacak
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/icon.jpg',
    shortcut: '/icon.jpg',
    apple: '/icon.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="antialiased overflow-x-hidden">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
