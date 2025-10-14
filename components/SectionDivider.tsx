'use client';

import { twMerge } from 'tailwind-merge';

type Props = {
  label?: string;
  href?: string;         // ex: "#about"
  className?: string;
};

export default function SectionDivider({ label, href, className }: Props) {
  return (
    <div
      className={twMerge(
        'relative my-10 md:my-14',
        className
      )}
      aria-label={label ? `Diviseur vers ${label}` : 'Diviseur de section'}
    >
      {/* Ligne */}
      <div className="h-px w-full bg-black/10 dark:bg-white/10" />

      {/* Pastilles décoratives */}
      <span className="absolute left-0 top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-brand/70" />
      <span className="absolute right-0 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-brand/40" />

      {/* Étiquette centrée */}
      {label && (
        <a
          href={href}
          className="
            absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
            px-4 py-1.5 rounded-full text-sm font-medium
            bg-white/80 dark:bg-black/40 backdrop-blur
            border border-black/10 dark:border-white/10
            text-slate-800 dark:text-white/90 hover:text-brand
            shadow-sm
          "
        >
          {label}
        </a>
      )}
    </div>
  );
}
