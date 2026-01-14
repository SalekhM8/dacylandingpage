import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dacy.ai | AI-Powered Restaurant Management",
  description: "One platform. Total control. Automatically track inventory, manage waste, and connect every POS and delivery platform — all in one intelligent dashboard.",
  keywords: "restaurant management, AI, inventory tracking, POS integration, waste management, restaurant software",
  openGraph: {
    title: "Dacy.ai | AI-Powered Restaurant Management",
    description: "One platform. Total control. The all-in-one restaurant management solution.",
    type: "website",
    url: "https://dacy.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dacy.ai | AI-Powered Restaurant Management",
    description: "One platform. Total control.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
        
        {/* Go High Level Form Embed Script */}
        <Script 
          src="https://link.surimarketing.co.uk/js/form_embed.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
