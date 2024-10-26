import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";

const poppins = Poppins({ weight: "300",  subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Home | SethPython (v1)',
  openGraph: {
    title: 'SethPython',
    description: 'Your average fullstack developer',
    images: ['/img/logo/logo_full.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  );
}
