'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FiSun, FiMoon, FiMonitor } from 'react-icons/fi';

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const current = theme === 'system' ? systemTheme : theme;

  const btn = (active: boolean) =>
    `inline-flex items-center justify-center w-9 h-9 rounded-xl border transition
     ${active ? 'border-brand text-brand bg-brand/10'
              : 'border-black/10 text-slate-700 hover:border-brand/60 dark:border-white/10 dark:text-white/80'}`;

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        className={btn(current === 'light')}
        onClick={() => setTheme('light')}
        title="Mode clair"
        aria-label="Basculer en mode clair"
      >
        <FiSun />
      </button>
      <button
        type="button"
        className={btn(current === 'dark')}
        onClick={() => setTheme('dark')}
        title="Mode sombre"
        aria-label="Basculer en mode sombre"
      >
        <FiMoon />
      </button>
      <button
        type="button"
        className={btn(theme === 'system')}
        onClick={() => setTheme('system')}
        title="Suivre le système"
        aria-label="Basculer sur le thème système"
      >
        <FiMonitor />
      </button>
    </div>
  );
}
