"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CtaSection from "./components/CtaSection";
import FooterSection from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { useState } from "react";
import ThemeInitializer from "./theme-initializer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <html lang="en">
     <body>
        <QueryClientProvider client={queryClient}>
          <ThemeInitializer />
          <Header />
          {children}
          <CtaSection />
          <FooterSection />
        </QueryClientProvider>
      </body>
    </html>
  );
}
