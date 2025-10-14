'use client';

import Image from 'next/image';
import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

// Import statique (optimisé Next.js)
import portrait from '@/public/images/adam-tefor.jpg';

// Variants d'animation
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

export default function Hero() {
  // Helpers de classes
  const ctaBase =
    'inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm md:text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 transition';

  const socialClass =
    'hover:text-brand text-slate-700 dark:text-white/80 transition';

  const scrollPulse = useMemo(
    () => ({
      animate: { y: [0, 6, 0], opacity: [0.5, 1, 0.5] },
      transition: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' },
    }),
    []
  );

  return (
    <section id="home" className="section pt-16 md:pt-24 relative overflow-hidden">
      {/* Glow décoratif (désactivé en thème clair) */}
      <motion.div
        aria-hidden
        className="hidden dark:block pointer-events-none absolute -top-28 -right-24 h-72 w-72 rounded-full bg-brand/20 blur-3xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: [0.9, 1.03, 0.98, 1] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror' }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-2 gap-10 items-center"
      >
        {/* ===== Colonne gauche : Texte ===== */}
        <div>
          <motion.p
            variants={fadeUp}
            className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-wide text-brand"
          >
            Ingénieur Informatique & Réseaux
            <span className="hidden sm:inline-block rounded-full bg-brand/10 px-2 py-0.5 text-[11px] text-brand">
              Ouvert aux opportunités PFE
            </span>
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-extrabold mt-2 leading-tight"
          >
            Salut, je suis{' '}
            <span className="text-brand">Adam Tefor</span>
            <span className="block text-slate-600 dark:text-white/70 text-2xl md:text-3xl mt-2">
              Ingénieur QA & Automatisation - Développeur Full-Stack - Certifié ISTQB®
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-slate-700 dark:text-white/80 max-w-xl"
          >
           Testing Fonctionnel & Automatisation & Développement Full-Stack | Certifié ISTQB® Foundation Level | Passionné par la Qualité Logicielle et l’Innovation | À la recherche d’un Stage PFE à partir de février 2026.
          </motion.p>

          {/* CTA principaux */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className={`${ctaBase} bg-brand text-white hover:bg-brand/90 shadow-sm`}
            >
              Me contacter →
            </a>

            <a
              href="#experience"
              className={`${ctaBase} bg-slate-900/5 dark:bg-white/5 hover:bg-slate-900/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 text-slate-800 dark:text-white/90`}
            >
              Voir mes expériences
            </a>

            <a
              href="/cv/CV-TEFOR-ADAM.pdf"
              download
              className={`${ctaBase} border border-black/10 dark:border-white/10 hover:border-brand/60 hover:text-brand`}
            >
              Télécharger mon CV
            </a>
          </motion.div>

          {/* Réseaux sociaux */}
          <motion.div
            variants={fadeUp}
            className="mt-7 flex items-center gap-5"
            aria-label="Réseaux sociaux"
          >
            <a
              className={socialClass}
              href="https://github.com/AdamTefor"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              className={socialClass}
              href="https://www.linkedin.com/in/adamtefor"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              className={socialClass}
              href="https://www.instagram.com/adamtefor"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <FaInstagram size={24} />
            </a>
          </motion.div>
        </div>

        {/* ===== Colonne droite : Portrait ===== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center md:justify-end"
        >
          {/* Cercles décoratifs doux */}
          <div
            aria-hidden
            className="absolute -top-6 -left-6 h-4 w-4 rounded-full bg-brand/40"
          />
          <div
            aria-hidden
            className="absolute top-8 -right-4 h-2 w-2 rounded-full bg-brand/40"
          />

          <motion.div
            className="relative w-72 h-72 md:w-[22rem] md:h-[22rem]"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* Anneau + halo */}
            <div
              aria-hidden
              className="absolute inset-0 rounded-full ring-4 ring-brand/30 dark:ring-brand/40 blur-[1px]"
            />
            <Image
              src={portrait}
              alt="Portrait professionnel de Adam Tefor"
              fill
              sizes="(max-width: 768px) 288px, 352px"
              className="object-cover rounded-full shadow-xl shadow-black/40"
              priority
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Indicateur de scroll */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 bottom-4 md:bottom-6 flex flex-col items-center gap-2"
        {...scrollPulse}
        aria-hidden
      >
        <div className="h-6 w-3.5 rounded-full border border-black/20 dark:border-white/20 flex items-start justify-center p-0.5">
          <span className="h-1.5 w-1 rounded-full bg-slate-500 dark:bg-white/60" />
        </div>
        <span className="text-[11px] text-slate-500 dark:text-white/50">
          Faites défiler
        </span>
      </motion.div>
    </section>
  );
}
