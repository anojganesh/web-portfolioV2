import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "../globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import RadialGradient from '@/components/RadialGradient';

// Font configurations
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "My Portfolio!",
  description: "Made with <3 by Anoj Ganesh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body className="min-h-screen bg-light dark:bg-dark text-dark dark:text-light">
        <RadialGradient />
        <ThemeProvider>
        <Navbar />
        <main className="pt-16"> {/* Padding for fixed navbar */}
          {children}
        </main>
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}