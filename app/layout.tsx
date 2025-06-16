import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavbarMenu from "@/src/components/common/Navbar"; // You can also use <link> for styles
import Footer from "@/src/components/common/Footer";
import ConditionalLayout from "@/src/components/common/ConditionalLayout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap", // Optimize font loading
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap", // Optimize font loading
});

export const metadata: Metadata = {
  title: "R3al.AI - Next Generation AI",
  description: "Accelerating innovation with faster, smarter, and more reliable AI models.",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#080411" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-backgroud_color scroll-smooth`}
        suppressHydrationWarning>
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}
