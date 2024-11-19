import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ReactLenis, useLenis } from "lenis/react"

const poppins = Poppins({ weight: "400",  subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Home | Python'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${poppins.className}`}>
        <ReactLenis root>
          {children}
        </ReactLenis>
      </body>
    </html> 
  );
}
