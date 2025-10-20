// app/layout.tsx
import './globals.css';
import type { ReactNode } from 'react';
import Script from 'next/script';
import Providers from './providers';

// Tu peux laisser sans typage strict pour éviter tes erreurs précédentes
export const metadata = {
  title: 'Adam Tefor – Portfolio',
  description:
    "Ingénieur QA & Développeur Web – Tests automatisés, Spring Boot & Angular. Certifié ISTQB® Foundation Level (CTFL).",
  metadataBase: new URL('https://ton-domaine-ou-vercel.vercel.app'),
  openGraph: {
    title: 'Adam Tefor – Portfolio',
    description:
      'QA & Dev – Robot Framework, Selenium, Jenkins, Spring Boot & Angular.',
    url: 'https://ton-domaine-ou-vercel.vercel.app',
    siteName: 'Adam Tefor',
    images: [
      {
        url: '/images/adam-tefor.jpg', // le fichier doit exister dans /public/images
        width: 1200,
        height: 630,
        alt: 'Adam Tefor',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  icons: { icon: '/favicon.ico' },
} as const;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Plausible Analytics (remplace par ton domaine de prod) */}
        <Script
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
          data-domain="https://tefor-adam-portfolio.vercel.app/"
        />
      </head>

      <body className="bg-white text-slate-900 dark:bg-[#0b1020] dark:text-white antialiased">
        <div className="min-h-screen">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
