import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

export const metadata: Metadata = {
  title: "Arvanto — Strategy. Intelligence. Transformation.",
  description:
    "Global Business Transformation & Value Creation Consultancy combining strategy, artificial intelligence, data analytics, and quantitative intelligence.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/favicon.svg",
    apple: "/icon.svg",
  },
  keywords: [
    "Arvanto",
    "Business Transformation",
    "Value Creation",
    "Corporate Strategy",
    "AI Consulting",
    "Data Analytics",
    "Quantitative Risk",
    "Kenya",
    "East Africa"
  ],
  authors: [{ name: "Arvanto" }],
  openGraph: {
    title: "Arvanto — Strategy. Intelligence. Transformation.",
    description:
      "Turning complexity into opportunity. We combine strategy, technology, data, and quantitative intelligence to help organizations build resilient businesses.",
    type: "website",
    locale: "en_US",
    siteName: "Arvanto",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-black text-dark dark:text-white antialiased transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
