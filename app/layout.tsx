// app/layout.tsx
import './globals.css';
import type { ReactNode } from 'react';
import Providers from './providers';

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
        url: '/images/adam-tefor.jpg', // assure-toi que le fichier existe sous /public/images/
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
      <body className="bg-white text-slate-900 dark:bg-[#0b1020] dark:text-white antialiased">
        <div className="min-h-screen">
          <Providers>{children}</Providers>
          {/* Si tu n'as pas de Providers, remplace par simplement {children} */}
        </div>
      </body>
    </html>
  );
}
