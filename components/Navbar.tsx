'use client';

import { useEffect, useMemo, useState, useCallback } from 'react';
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import { FiMenu, FiX } from 'react-icons/fi';

// Liens de navigation
type NavItem = { href: `#${string}`; label: string };

const NAV_ITEMS: NavItem[] = [
  { href: '#home',       label: 'Home' },
  { href: '#about',      label: 'About' },
  { href: '#skills',     label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects',   label: 'Projects' },
  { href: '#certs',      label: 'Certifications' },
  { href: '#contact',    label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);          // menu mobile ouvert ?
  const [scrolled, setScrolled] = useState(false);  // header fond blur après scroll
  const [active, setActive] = useState<string>('#home'); // lien actif

  // effet header quand on scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // scroll spy (section visible -> active)
  useEffect(() => {
    const ids = NAV_ITEMS.map(i => i.href.replace('#', ''));
    const sections = ids
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (!sections.length) return;

    const io = new IntersectionObserver(
      entries => {
        const best = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (best?.target?.id) {
          setActive(`#${best.target.id}`);
        }
      },
      {
        root: null,
        rootMargin: '-10% 0px -70% 0px',
        threshold: [0.15, 0.33, 0.66, 0.9],
      }
    );

    sections.forEach(sec => io.observe(sec));
    return () => io.disconnect();
  }, []);

  // quand j'ouvre le menu mobile, je bloque le scroll body
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [open]);

  // handler clic sur un lien
  const handleNavClick = useCallback((href: string) => {
    setActive(href);
    setOpen(false);
  }, []);

  // classes header sticky en haut
  const headerClasses = useMemo(
    () =>
      [
        'fixed left-0 top-0 z-[60] w-full',
        'transition-colors duration-300',
        scrolled
          ? 'backdrop-blur bg-slate-900/70 border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.6)]'
          : 'bg-transparent',
      ].join(' '),
    [scrolled]
  );

  const linkDesktopBase =
    'relative px-2 py-1 text-sm font-medium transition text-slate-300 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 rounded';

  return (
    <>
      {/* ===== HEADER TOP BAR ===== */}
      <header className={headerClasses} role="banner">
        {/* lien accessibilité "skip to content" */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[999] rounded-lg bg-brand px-3 py-2 text-sm text-white"
        >
          Skip to content
        </a>

        <nav
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo / Nom (gauche) */}
          <Link
            href="#home"
            className="flex min-w-0 items-center gap-3"
            aria-label="Go to home section"
            onClick={() => handleNavClick('#home')}
          >
            <div className="h-9 w-9 overflow-hidden rounded-full ring-2 ring-brand/40 shadow-md shadow-black/50">
              <img
                src="/images/adam-tefor.jpg"
                alt="Adam Tefor"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="leading-tight">
              <div className="text-[14px] font-semibold text-white">
                Adam Tefor
              </div>
              <div className="text-[12px] text-white/60">
                Ingénieur QA & Dev
              </div>
            </div>
          </Link>

          {/* NAV DESKTOP (md+) */}
          <div className="hidden items-center gap-6 md:flex">
            <ul className="flex items-center gap-4 text-white/80">
              {NAV_ITEMS.map(item => {
                const isActive = active === item.href;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className={[
                        linkDesktopBase,
                        isActive
                          ? 'text-brand'
                          : 'text-white/70 hover:text-brand',
                      ].join(' ')}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                      {isActive && (
                        <span className="absolute left-0 right-0 -bottom-1 mx-auto block h-[2px] rounded bg-brand" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* séparateur */}
            <div
              className="ml-2 h-6 w-px bg-white/20"
              aria-hidden="true"
            />

            {/* bouton thème */}
            <ThemeToggle />

            {/* bouton CV */}
            <a
              href="/cv/CV-ADAM-TEFOR.pdf"
              download
              className="rounded-xl border border-white/20 px-3 py-2 text-[13px] font-medium text-white/80 hover:text-brand hover:border-brand/60 transition"
            >
              CV
            </a>
          </div>

          {/* BOUTONS MOBILE (md-) */}
          <div className="flex items-center gap-3 md:hidden">
            {/* thème (soleil/lune) */}
            <ThemeToggle />

            {/* burger */}
            <button
              type="button"
              className="
                inline-flex h-10 w-10 items-center justify-center
                rounded-xl border border-white/20 bg-white/5
                text-white/90 hover:text-brand hover:border-brand/60
                focus:outline-none focus:ring-2 focus:ring-brand/50
              "
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <FiMenu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* SPACER pour que le hero ne passe pas sous le header fixe */}
      <div className="h-16" />

      {/* ======== MENU FULLSCREEN MOBILE ======== */}
      {open && (
        <div
          className="
            fixed inset-0 z-[80] flex flex-col
            bg-[#1c2433] text-white
            md:hidden
          "
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          {/* HEADER DU MENU FULLSCREEN */}
          <div
            className="
              flex items-start justify-between
              px-4 pt-6 pb-4
              border-b border-white/10
              relative
            "
          >
            {/* bloc avatar + nom + role */}
            <div className="flex items-start gap-3">
              <div className="h-12 w-12 overflow-hidden rounded-full ring-2 ring-brand/40 shadow-md shadow-black/70">
                <img
                  src="/images/adam-tefor.jpg"
                  alt="Adam Tefor"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="leading-tight">
                <div className="text-[18px] font-semibold text-white">
                  Adam Tefor
                </div>
                <div className="text-[14px] text-white/60">
                  Testing Engineer
                </div>
              </div>
            </div>

            {/* bloc actions droite : Theme + Close */}
            <div className="flex items-start gap-4">
              {/* ThemeToggle (soleil) */}
              <div className="pt-1">
                <ThemeToggle />
              </div>

              {/* bouton X stylé bleu/turquoise */}
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-lg bg-brand text-slate-900 font-bold
                  shadow-[0_12px_40px_rgba(0,0,0,0.6)]
                  focus:outline-none focus:ring-2 focus:ring-white/40
                "
                aria-label="Close mobile menu"
              >
                <FiX className="h-6 w-6" />
              </button>
            </div>

            {/* (optionnel) grille background légère comme sur screen */}
            <div
              className="
                pointer-events-none absolute inset-0 -z-[1]
                bg-[radial-gradient(circle_at_1px_1px,#ffffff0a_1px,transparent_0)]
                [background-size:20px_20px]
                opacity-[0.07]
              "
              aria-hidden="true"
            />
          </div>

          {/* LIENS NAVIGATION EN LISTE LARGE */}
          <ul className="flex-1 overflow-y-auto px-4 py-6 text-white">
            {NAV_ITEMS.map(item => {
              const isActive = active === item.href;
              return (
                <li key={item.href} className="mb-6 last:mb-0">
                  <a
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`
                      block text-[20px] font-medium leading-none
                      ${isActive ? 'text-white' : 'text-white'}
                    `}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}

            {/* bouton CV dans le menu */}
            <li className="mt-10">
              <a
                href="/cv/CV-ADAM-TEFOR.pdf"
                download
                onClick={() => setOpen(false)}
                className="
                  inline-flex items-center justify-center
                  rounded-xl bg-brand px-4 py-3 text-[16px] font-semibold
                  text-slate-900 shadow-[0_20px_45px_rgba(0,0,0,0.7)]
                  focus:outline-none focus:ring-2 focus:ring-white/40
                "
              >
                Télécharger mon CV
              </a>
            </li>
          </ul>

          {/* FOOTER DU MENU (optionnel, petit texte dispo PFE) */}
          <div className="border-t border-white/10 px-4 py-4 text-[13px] text-white/70 leading-relaxed">
            Disponible pour Stage PFE (Février 2026)
            <br />
            Ingénierie QA / Automatisation / Dev Full-Stack.
          </div>
        </div>
      )}
    </>
  );
}
