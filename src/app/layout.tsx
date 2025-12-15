import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ weight: "400",  subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Home | Seth',
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
      <body className={`select-none antialiased ${poppins.className}`}>
        {children}
      </body>
    </html> 
  );
}
