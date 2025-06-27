"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CtaSection from "./components/CtaSection";
import FooterSection from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { useState } from "react";
import ThemeInitializer from "./theme-initializer";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient());
  const pathname = usePathname();
  const hideHeaderFooter = pathname === "/sign-in" || pathname === "/sign-up";
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (!theme) {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  document.body.classList.add(theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
     <body>
        <QueryClientProvider client={queryClient}>
          <ThemeInitializer />
          {!hideHeaderFooter && <Header />}
          {children}
          <CtaSection />
          {!hideHeaderFooter && <FooterSection />}
        </QueryClientProvider>
      </body>
    </html>
  );
}
