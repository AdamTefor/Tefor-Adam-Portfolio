'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import ThemeToggle from '@/components/ThemeToggle';

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
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>('#home');

  // Détecte le scroll pour l'effet de verre + bordure
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Ferme le menu quand l’ancre change (clic mobile)
  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // IntersectionObserver pour surligner la section active
  useEffect(() => {
    const ids = NAV_ITEMS.map(i => i.href.replace('#', ''));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (sections.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        // On prend l’entrée la plus visible
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio - a.intersectionRatio))[0];

        if (visible?.target?.id) setActive(`#${visible.target.id}`);
      },
      { root: null, rootMargin: '-10% 0px -70% 0px', threshold: [0.15, 0.33, 0.66, 0.9] }
    );

    sections.forEach(sec => obs.observe(sec));
    return () => obs.disconnect();
  }, []);

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
    'inline-block px-1 py-2 transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 rounded';

  return (
    <header className={headerClasses} role="banner">
      {/* Lien “skip to content” */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 rounded-lg bg-brand px-3 py-2 text-sm text-white"
      >
        Aller au contenu
      </a>

      <nav
        className="section mx-auto flex h-16 items-center justify-between px-4 sm:px-6"
        role="navigation"
        aria-label="Navigation principale"
      >
        {/* Marque + Profil */}
        <Link
          href="#home"
          className="group inline-flex items-center gap-3 min-w-0"
          aria-label="Revenir à l’accueil"
        >
          <span className="relative inline-flex h-9 w-9 shrink-0 overflow-hidden rounded-full ring-1 ring-black/10 dark:ring-white/10">
            {/* Mets ton image dans /public/profile.jpg */}
            <Image
              src="/images/profile.jpg"
              alt="Photo de profil d’Adam Tefor"
              fill
              sizes="36px"
              className="object-cover"
              priority
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-extrabold tracking-tight text-base sm:text-lg">
              Adam Tefor<span className="text-brand">.</span>
            </span>
            <span className="text-[11px] sm:text-xs text-slate-600 dark:text-white/60">
              Ingénieur QA & Dev
            </span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-4 text-sm text-slate-700 dark:text-white/80">
            {NAV_ITEMS.map((it) => {
              const isActive = active === it.href;
              return (
                <li key={it.href}>
                  <a
                    href={it.href}
                    className={[
                      linkBase,
                      isActive
                        ? 'text-brand'
                        : 'text-slate-700 dark:text-white/80',
                    ].join(' ')}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span className="relative">
                      {it.label}
                      {/* Soulignement animé pour l’actif */}
                      <span
                        className={[
                          'pointer-events-none absolute -bottom-0.5 left-0 h-[2px] w-full rounded',
                          isActive ? 'bg-brand scale-x-100' : 'bg-brand/40 scale-x-0',
                          'origin-left transition-transform duration-300 ease-out',
                        ].join(' ')}
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="ml-2 h-6 w-px bg-black/10 dark:bg-white/10" aria-hidden="true" />
          <ThemeToggle />
          
                  </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="rounded-xl border border-black/10 dark:border-white/10 px-3 py-2 text-sm hover:border-brand/60"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Drawer Mobile + Backdrop */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[1px] md:hidden"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div
            className="fixed inset-y-0 right-0 z-50 w-72 max-w-[85%] md:hidden
                       bg-white/85 dark:bg-black/60 backdrop-blur
                       border-l border-black/10 dark:border-white/10
                       shadow-2xl"
            role="dialog"
            aria-label="Menu"
          >
            <div className="flex items-center justify-between px-4 h-16">
              <div className="inline-flex items-center gap-3">
                <span className="relative inline-flex h-9 w-9 overflow-hidden rounded-full ring-1 ring-black/10 dark:ring-white/10">
                  <Image
                    src="/profile.jpg"
                    alt="Photo de profil d’Adam Tefor"
                    fill
                    sizes="36px"
                    className="object-cover"
                    priority
                  />
                </span>
                <div className="flex flex-col">
                  <span className="font-semibold leading-tight">Adam Tefor</span>
                  <span className="text-[11px] text-slate-600 dark:text-white/60">
                    Ingénieur QA & Dév
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-xl border border-black/10 dark:border-white/10 px-2 py-1 text-sm hover:border-brand/60"
                aria-label="Fermer le menu"
              >
                ✕
              </button>
            </div>

            <ul className="px-2 pb-4 text-sm text-slate-800 dark:text-white/80">
              {NAV_ITEMS.map((it) => {
                const isActive = active === it.href;
                return (
                  <li key={it.href} className="mx-2 border-b last:border-b-0 border-black/5 dark:border-white/10">
                    <a
                      href={it.href}
                      className={[
                        'block py-3',
                        isActive ? 'text-brand' : 'hover:text-brand',
                      ].join(' ')}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {it.label}
                    </a>
                  </li>
                );
              })}
              <li className="mx-2 pt-2">
                <a
                  href="/CV-Adam-Tefor.pdf"
                  className="inline-flex items-center gap-2 rounded-xl border border-black/10 dark:border-white/10 px-3 py-2 hover:border-brand/60 hover:text-brand"
                >
                  Télécharger mon CV
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </header>
  );
}
