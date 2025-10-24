'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';

// ⚠️ Mets ta vraie image dans /public/images/profile.jpg
// (si tu veux absolument <Image />, tu peux le remettre, mais ici on garde <img />
// pour éviter les erreurs de typage autour de next/image dans ta config actuelle.)

type NavItem = { href: `#${string}`; label: string };

const NAV_ITEMS: NavItem[] = [
  { href: '#home',       label: 'Accueil' },
  { href: '#about',      label: 'À propos' },
  { href: '#formation',  label: 'Formation' },
  { href: '#skills',     label: 'Compétences' },
  { href: '#projects',   label: 'Projets' },
  { href: '#experience', label: 'Expériences' },
  { href: '#certs',      label: 'Certifications' },
  { href: '#contact',    label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);       // menu mobile ouvert ?
  const [scrolled, setScrolled] = useState(false); // header fond/bloc après scroll
  const [active, setActive] = useState<string>('#home'); // section en focus

  // Fond du header après scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Ferme le menu mobile si on change d'ancre
  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Met à jour l’onglet actif selon la section visible (scroll spy)
  useEffect(() => {
    const ids = NAV_ITEMS.map(i => i.href.replace('#', ''));
    const sections = ids
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (!sections.length) return;

    const io = new IntersectionObserver(
      entries => {
        // On prend la section la plus visible à l'écran
        const best = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (best?.target?.id) {
          setActive(`#${best.target.id}`);
        }
      },
      {
        root: null,
        rootMargin: '-10% 0px -70% 0px', // déclenche un peu avant le centre
        threshold: [0.15, 0.33, 0.66, 0.9],
      }
    );

    sections.forEach(sec => io.observe(sec));
    return () => io.disconnect();
  }, []);

  // classes dynamiques du header (fond verre collant)
  const headerClasses = useMemo(
    () =>
      [
        'sticky top-0 z-50 transition-colors',
        'backdrop-blur supports-[backdrop-filter]:bg-black/5',
        scrolled
          ? 'border-b border-black/5 dark:border-white/10 bg-white/70 dark:bg-black/30'
          : 'bg-transparent',
      ].join(' '),
    [scrolled]
  );

  const linkBase =
    'inline-block px-1 py-2 text-sm transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 rounded';

  return (
    <header className={headerClasses} role="banner">
      {/* Lien 'skip to content' accessibilité */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 rounded-lg bg-brand px-3 py-2 text-sm text-white"
      >
        Aller au contenu
      </a>

      {/* BARRE */}
      <nav
        className="section mx-auto flex h-16 items-center justify-between px-4 sm:px-6"
        role="navigation"
        aria-label="Navigation principale"
      >
        {/* --------- LOGO / NOM --------- */}
        <Link
          href="#home"
          className="group inline-flex items-center gap-3 min-w-0"
          aria-label="Revenir à l’accueil"
        >
          <span className="relative inline-flex h-9 w-9 shrink-0 overflow-hidden rounded-full ring-1 ring-black/10 dark:ring-white/10">
            <img
              src="/images/profile.jpg"
              alt="Photo de profil d’Adam Tefor"
              className="h-full w-full object-cover"
            />
          </span>

          <span className="flex flex-col leading-tight">
            <span className="font-extrabold tracking-tight text-base sm:text-lg text-slate-900 dark:text-white">
              Adam Tefor<span className="text-brand">.</span>
            </span>
            <span className="text-[11px] sm:text-xs text-slate-600 dark:text-white/60">
              Ingénieur QA & Dev
            </span>
          </span>
        </Link>

        {/* --------- NAV DESKTOP --------- */}
        <div className="hidden items-center gap-6 md:flex">
          {/* Liens */}
          <ul className="flex items-center gap-4 text-slate-700 dark:text-white/80">
            {NAV_ITEMS.map(item => {
              const isActive = active === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={[
                      linkBase,
                      isActive
                        ? 'text-brand'
                        : 'text-slate-700 dark:text-white/80',
                    ].join(' ')}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span className="relative inline-flex flex-col items-start">
                      {item.label}
                      {/* soulignement animé sous le lien actif */}
                      <span
                        aria-hidden="true"
                        className={[
                          'block h-[2px] w-full rounded bg-brand/40 origin-left transition-all duration-300 ease-out',
                          isActive ? 'scale-x-100 bg-brand' : 'scale-x-0',
                        ].join(' ')}
                      />
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* séparation + bouton thème + bouton CV */}
          <div
            className="ml-2 h-6 w-px bg-black/10 dark:bg-white/10"
            aria-hidden="true"
          />
          <ThemeToggle />

          <a
            href="/cv/CV-ADAM-TEFOR.pdf"
            download
            className="rounded-xl border border-black/10 dark:border-white/10 px-3 py-2 text-sm font-medium text-slate-700 dark:text-white/80 hover:border-brand/60 hover:text-brand transition"
          >
            CV
          </a>
        </div>

        {/* --------- NAV MOBILE (bouton burger) --------- */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />

          <button
            type="button"
            className="rounded-xl border border-black/10 dark:border-white/10 px-3 py-2 text-sm font-medium text-slate-700 dark:text-white/80 hover:border-brand/60 hover:text-brand transition"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            onClick={() => setOpen(prev => !prev)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* --------- DRAWER MOBILE --------- */}
      {open && (
        <>
          {/* Fond noir derrière le menu mobile */}
          <button
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[1px] md:hidden"
            onClick={() => setOpen(false)}
            aria-label="Fermer le menu"
          />

          {/* Panneau latéral mobile */}
          <aside
            className="fixed inset-y-0 right-0 z-50 w-72 max-w-[85%] md:hidden
                       bg-white/85 dark:bg-black/60 backdrop-blur
                       border-l border-black/10 dark:border-white/10
                       shadow-2xl flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Menu mobile"
          >
            {/* Header du drawer */}
            <div className="flex items-center justify-between px-4 h-16 border-b border-black/5 dark:border-white/10">
              <div className="inline-flex items-center gap-3">
                <span className="relative inline-flex h-9 w-9 overflow-hidden rounded-full ring-1 ring-black/10 dark:ring-white/10">
                  <img
                    src="/images/profile.jpg"
                    alt="Photo de profil d’Adam Tefor"
                    className="h-full w-full object-cover"
                  />
                </span>
                <div className="flex flex-col leading-tight">
                  <span className="font-semibold text-slate-900 dark:text-white">
                    Adam Tefor
                  </span>
                  <span className="text-[11px] text-slate-600 dark:text-white/60">
                    Ingénieur QA & Dev
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-xl border border-black/10 dark:border-white/10 px-2 py-1 text-sm text-slate-700 dark:text-white/80 hover:border-brand/60 hover:text-brand transition"
                aria-label="Fermer le menu"
              >
                ✕
              </button>
            </div>

            {/* Liens nav dans le drawer */}
            <ul className="flex-1 overflow-y-auto px-2 pb-4 text-sm text-slate-800 dark:text-white/80">
              {NAV_ITEMS.map(item => {
                const isActive = active === item.href;
                return (
                  <li
                    key={item.href}
                    className="mx-2 border-b last:border-b-0 border-black/5 dark:border-white/10"
                  >
                    <a
                      href={item.href}
                      className={[
                        'block py-3 transition-colors',
                        isActive
                          ? 'text-brand'
                          : 'hover:text-brand text-slate-700 dark:text-white/80',
                      ].join(' ')}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}

              {/* lien CV mobile */}
              <li className="mx-2 pt-3">
                <a
                 href="/cv/CV-ADAM-TEFOR.pdf"
                  download
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-black/10 dark:border-white/10 px-3 py-2 text-sm font-medium text-slate-700 dark:text-white/80 hover:border-brand/60 hover:text-brand transition"
                >
                  Télécharger mon CV
                </a>
              </li>
            </ul>

            {/* bas du drawer (optionnel : contact direct) */}
            <div className="border-t border-black/5 dark:border-white/10 p-4 text-[11px] text-slate-600 dark:text-white/50">
              <p>
                Disponible pour Stage PFE (Février 2026)<br />
                Ingénierie QA / Automatisation / Dev Full-Stack.
              </p>
            </div>
          </aside>
        </>
      )}
    </header>
  );
}
