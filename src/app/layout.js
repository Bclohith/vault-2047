import { IBM_Plex_Sans, Orbitron } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["600"],
});

export const metadata = {
  title: "Building the World's Cyber-Resilience",
  description: "MUMBAI, INDIA • SEPTEMBER 2026",
  openGraph: {
    title: "Building the World's Cyber-Resilience - Vault 2047",
    description: "MUMBAI, INDIA • SEPTEMBER 2026",
    url: 'https://vault2047.com',
    siteName: 'Vault 2047',
    images: [
      {
        url: '/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vault 2047 - Building the World\'s Cyber-Resilience',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Building the World's Cyber-Resilience - Vault 2047",
    description: "MUMBAI, INDIA • SEPTEMBER 2026",
    images: ['/assets/og-image.jpg'],
  },
};

import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.variable} ${orbitron.variable} font-sans antialiased bg-[#101010] overflow-x-hidden`}
      >
        <Header />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
