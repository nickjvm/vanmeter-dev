import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-display', // Define a CSS variable for the font
});

export const metadata: Metadata = {
  title: "Nick VanMeter | vanmeter.dev",
  description: "Nick VanMeter - Senior Front-End Engineer and React Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
