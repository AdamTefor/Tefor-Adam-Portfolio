'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaUniversity, FaGlobeAmericas } from 'react-icons/fa';

type TabKey = 'about' | 'edu' | 'lang';

const TABS: { key: TabKey; label: string; icon?: JSX.Element }[] = [
  { key: 'about', label: ' Qui suis-je ?' },
  { key: 'edu',   label: ' Formation', icon: <FaUniversity className="opacity-80" /> },
  { key: 'lang',  label: ' Langues',   icon: <FaGlobeAmericas className="opacity-80" /> },
];

// ---- Données (adapte si besoin) ----
const PROFILE = {
  fullName: 'Adam Tefor',
  headline: 'ingénieur d’État en Ingénierie Informatique et Réseaux – Option MIAGE (Méthodes Informatiques Appliquées à la Gestion des Entreprises) - certifié ISTQB®',
  location: 'Rabat, Maroc',
  email: 'adamtefor37@gmail.com',   
  phone: '06 66 63 32 67',   
};

const SOFT_SKILLS = [
  'Gestion du temps',
  'Travail en équipe',
  'Résolution de problèmes',
  'Créativité',
  'Esprit d’analyse',
  'Apprentissage continu',
];

const CERTIFICATIONS = [
  'ISTQB® Foundation Level V4.0',
  'Conteneurs avec Docker, Kubernetes (COURSERA)',
  'Introduction à Git et GitHub (COURSERA)',
  'Java Spring Boot (COURSERA)',
];

const EDUCATION = [
  {
    school: 'EMSI Rabat',
    degree: 'Cycle Ingénieur – Informatique & Réseaux',
    years: '2021 – 2026',
    details:
      'Projets : QA & Automatisation (Robot Framework, Selenium, Jenkins, Python),JAVA, Spring Boot, Angular, UML, C#, .Net.',
  },
];

const LANGUAGES = [
  { label: 'Français', level: 'C1', detail: 'Professionnel' },
  { label: 'Arabe', level: 'C2', detail: 'Natif' },
  { label: 'Anglais', level: 'B1', detail: 'Technique' },
];

const card =
  'card bg-white/60 dark:bg-white/5 backdrop-blur border border-black/5 dark:border-white/10';
const fade = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.25 } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.18 } },
};

export default function About() {
    
  const [tab, setTab] = useState<TabKey>('about');

  return (
    <section id="about" className="section scroll-mt-24 relative">
    <section id="about" className="  section scroll-mt-24 relative
    bg-slate-50/60 dark:bg-slate-900/30
    ring-1 ring-black/5 dark:ring-white/10
    rounded-3xl">
      <h2 className="h2">À propos</h2>

      {/* Onglets */}
      <div className="mt-4 flex flex-wrap items-center gap-3">
        {TABS.map((t) => {
          const active = tab === t.key;
          return (
            <button
              key={t.key}
              type="button"
              onClick={() => setTab(t.key)}
              className={[
                'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition',
                active
                  ? 'bg-brand text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-white/80 hover:bg-slate-200/70 dark:hover:bg-white/15',
              ].join(' ')}
              aria-pressed={active}
            >
              {t.icon}
              {t.label}
            </button>
          );
        })}
      </div>

      {/* Contenu des onglets */}
      <div className="mt-6">
        <AnimatePresence mode="wait">
          {tab === 'about' && (
            <motion.div
              key="about"
              variants={fade}
              initial="initial"
              animate="animate"
              exit="exit"
              className="grid md:grid-cols-2 gap-6"
            >
              {/* Colonne gauche : intro + soft skills */}
              <div className={card}>
                <h3 className="text-xl font-bold">Qui suis-je ?</h3>
                <p className="mt-3 text-slate-700 dark:text-white/80 leading-relaxed">
                  Étudiant en 5ᵉ année à l’<b>EMSI Rabat</b>, spécialité Génie Informatique & Réseaux.
                  Passionné par le développement et l’assurance qualité logicielle, j’ai réalisé des
                  projets et stages (notamment chez <b>Orange Business Services</b>) en testing
                  fonctionnel et automatisé avec <b>Robot Framework</b>, <b>Selenium</b> et <b>Jenkins</b>.
                </p>
                <p className="mt-3 text-slate-700 dark:text-white/80 leading-relaxed">
                  Je développe aussi des applications web avec <b>Spring Boot</b> & <b>Angular</b>,
                  en suivant de bonnes pratiques d’architecture et d’intégration continue.
                </p>

                <h4 className="mt-5 font-semibold text-brand">Soft Skills</h4>
                <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SOFT_SKILLS.map((s) => (
                    <li key={s} className="inline-flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-brand/70" aria-hidden />
                      <span className="text-slate-700 dark:text-white/80">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Colonne droite : infos perso + certifs */}
              <div className="space-y-6">
                <div className={card}>
                  <h3 className="text-center text-brand font-semibold">Informations personnelles</h3>
                  <dl className="mt-4 grid grid-cols-3 gap-y-3 text-sm">
                    <dt className="text-slate-500 dark:text-white/60 col-span-1">Nom complet</dt>
                    <dd className="col-span-2 font-medium">{PROFILE.fullName}</dd>

                    <dt className="text-slate-500 dark:text-white/60 col-span-1">Intitulé</dt>
                    <dd className="col-span-2">{PROFILE.headline}</dd>

                    <dt className="text-slate-500 dark:text-white/60 col-span-1">Localisation</dt>
                    <dd className="col-span-2">{PROFILE.location}</dd>

                    <dt className="text-slate-500 dark:text-white/60 col-span-1">Email</dt>
                    <dd className="col-span-2 text-brand/90">{PROFILE.email}</dd>

                    <dt className="text-slate-500 dark:text-white/60 col-span-1">Téléphone</dt>
                    <dd className="col-span-2">{PROFILE.phone}</dd>
                  </dl>
                </div>

                <div className={card}>
                  <h3 className="text-brand font-semibold">Certifications</h3>
                  <ul className="mt-3 space-y-2">
                    {CERTIFICATIONS.map((c) => (
                      <li key={c} className="flex items-center gap-2">
                        <FaCheckCircle className="text-brand/80" aria-hidden />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {tab === 'edu' && (
            <motion.div
              key="edu"
              variants={fade}
              initial="initial"
              animate="animate"
              exit="exit"
              className="grid md:grid-cols-2 gap-6"
            >
              {EDUCATION.map((e) => (
                <div key={e.school + e.degree} className={card}>
                  <h3 className="text-lg font-semibold">{e.school}</h3>
                  <p className="text-sm text-slate-500 dark:text-white/60">{e.years}</p>
                  <p className="mt-2 font-medium">{e.degree}</p>
                  <p className="mt-2 text-slate-700 dark:text-white/80">{e.details}</p>
                </div>
              ))}
            </motion.div>
          )}

          {tab === 'lang' && (
            <motion.div
              key="lang"
              variants={fade}
              initial="initial"
              animate="animate"
              exit="exit"
              className="grid md:grid-cols-3 gap-6"
            >
              {LANGUAGES.map((l) => (
                <div key={l.label} className={card}>
                  <h3 className="text-lg font-semibold">{l.label}</h3>
                  <p className="text-sm text-slate-500 dark:text-white/60">{l.detail}</p>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-brand">
                    <span className="text-xs font-semibold">Niveau</span>
                    <span className="text-xs">{l.level}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      </section>
    </section>
  );
}
