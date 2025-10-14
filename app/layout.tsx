import "./globals.css";
import type { Metadata } from "next";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Adam Tefor — Portfolio",
  description: "Ingénieur QA & Développeur Web — Tests automatisés, Spring Boot & Angular.",
  metadataBase: new URL("https://ton-domaine-ou-vercel.vercel.app"),
  openGraph: {
    title: "Adam Tefor — Portfolio",
    description: "QA & Dev — Robot Framework, Selenium, Jenkins, Spring Boot & Angular.",
    url: "https://ton-domaine-ou-vercel.vercel.app",
    siteName: "Adam Tefor",
    images: [{ url: "/images/adam-tefor.jpg", width: 1200, height: 630, alt: "Adam Tefor" }],
    locale: "fr_FR",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      {/* Light = fond clair + texte foncé | Dark = fond sombre + texte clair */}
      <body className="bg-white text-slate-900 dark:bg-[#0b1020] dark:text-white antialiased">
        {/* motif/dégradé uniquement en mode sombre */}
        <div className="min-h-screen dark:gradient">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
