'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode, useEffect, useState } from 'react';

export default function Providers({ children }: { children: ReactNode }) {
  // évite les warnings d'hydratation
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <>{children}</>;

  return (
    <ThemeProvider
      attribute="class"     // applique 'dark' sur <html>
      defaultTheme="dark" // 'light' | 'dark' | 'system'
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
