'use client';

import { motion } from 'framer-motion';
import { FiExternalLink, FiCheckCircle } from 'react-icons/fi';

// =====================
// Types
// =====================
type Cert = {
  name: string;
  by: string;
  date?: string;
  verifyUrl: string; // lien public obligatoire
  badge: string;     // chemin logo dans /public/images/logos/...
  tag?: string;      // ex: "Qualité Logicielle", "Dev", ...
};

// =====================
// Données
// =====================
const certs: Cert[] = [
  {
    name: 'ISTQB® Certified Tester – Foundation Level (CTFL) 4.0',
    by: 'GASQ / ISTQB',
    date: '2025',
    verifyUrl:
      'https://app.skillsclub.com/credential/267180-e78e598aa30689c969da12d333dc15b2f1a1b8de520059025a3c7934ebbb44b8',
    badge: '/images/logos/istqb.png',
    tag: 'Qualité Logicielle',
  },
  {
    name: 'Introduction to Git and GitHub',
    by: 'Google',
    date: '2024',
    verifyUrl:
      'https://www.coursera.org/account/accomplishments/verify/7W356BKTX7GV',
    badge: '/images/logos/google.png',
    tag: 'Collaboration / Versioning',
  },
  {
    name: 'Introduction to Object-Oriented Programming in Java',
    by: 'University of Pennsylvania',
    date: '2024',
    verifyUrl:
      'https://www.coursera.org/account/accomplishments/verify/N19XG3V4D6SM',
    badge: '/images/logos/coursera.png',
    tag: 'Java / OOP',
  },
  {
    name: 'Introduction to Big Data (Spark / Hadoop)',
    by: 'IBM Skills Network',
    date: '2024',
    verifyUrl:
      'https://www.coursera.org/account/accomplishments/verify/7RRBKCNB9YU8',
    badge: '/images/logos/ibm.png',
    tag: 'Big Data',
  },
  {
    name: 'Software Engineering: Software Design and Project Management',
    by: 'The Hong Kong University of Science and Technology',
    date: '2024',
    verifyUrl:
      'https://www.coursera.org/account/accomplishments/verify/7W356BKTX7GV',
    badge: '/images/logos/coursera.png',
    tag: 'Gestion de projet',
  },
  {
    name: 'Programming for Everybody (Getting Started with Python)',
    by: 'University of Michigan',
    date: '2024',
    verifyUrl:
      'https://www.coursera.org/account/accomplishments/verify/YPMFD77PYWSH',
    badge: '/images/logos/python.png',
    tag: 'Python',
  },
  {
    name: 'React Basics',
    by: 'Meta',
    date: '2024',
    verifyUrl:
      'https://www.coursera.org/account/accomplishments/verify/05C9W71K2PVL',
    badge: '/images/logos/meta.png',
    tag: 'Frontend',
  },
  {
    name: 'Virtual Networks in Azure',
    by: 'Whizlabs',
    date: '2024',
    verifyUrl: 'https://www.whizlabs.com/microsoft-azure-certifications/',
    badge: '/images/logos/azure.png',
    tag: 'Cloud / Réseau',
  },
  {
    name: 'Introduction to Containers with Docker, Kubernetes & OpenShift',
    by: 'IBM Skills Network',
    date: '2024',
    verifyUrl:
      'https://www.coursera.org/account/accomplishments/verify/2L4XECV7U8G2',
    badge: '/images/logos/ibm.png',
    tag: 'DevOps / Containers',
  },
];

// =====================
// Animations
// =====================
const wrapperVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

// =====================
// Styles utilitaires
// =====================

// carte certification
const cardClass =
  [
    'group relative flex flex-col rounded-2xl',
    'border border-black/5 dark:border-white/10',
    'bg-white/60 dark:bg-slate-900/40',
    'backdrop-blur-xl p-5 md:p-6',
    'ring-1 ring-slate-900/5 dark:ring-white/5',
    'shadow-[0_18px_60px_-10px_rgba(0,0,0,0.4)] dark:shadow-black/70',
    'transition hover:shadow-[0_24px_80px_-8px_rgba(0,0,0,0.6)]',
    'hover:ring-brand/30 hover:border-brand/30',
  ].join(' ');

// mini badge “vérifiable”
const verifyChipClass =
  [
    'inline-flex items-center gap-1.5 rounded-lg',
    'border border-emerald-500/20 bg-emerald-500/10 text-emerald-600',
    'dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300',
    'px-2 py-[3px] text-[11px] font-medium leading-none',
  ].join(' ');

// tag domaine (QA, Cloud…)
const tagClass =
  [
    'inline-flex items-center rounded-md border',
    'border-black/10 bg-slate-100/60 text-slate-700',
    'dark:border-white/10 dark:bg-white/5 dark:text-white/70',
    'px-2 py-[3px] text-[11px] font-medium leading-none',
  ].join(' ');

// bouton “voir la certif”
const btnClass =
  [
    'inline-flex items-center gap-2 rounded-xl border px-3.5 py-2',
    'text-sm font-medium text-brand',
    'border-brand/30 bg-brand/10 hover:bg-brand/15',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50',
    'transition',
  ].join(' ');

// halo décoratif (accent de marque)
function Halo() {
  return (
    <div
      aria-hidden
      className="
        pointer-events-none absolute -right-10 -top-10 h-24 w-24
        rotate-45 rounded-xl bg-brand/10 opacity-0
        transition-opacity duration-300 group-hover:opacity-100
      "
    />
  );
}

// =====================
// Composant
// =====================
export default function Certs() {
  return (
    <section
      id="certs"
      className="
        section scroll-mt-24 py-16 md:py-24
        bg-gradient-to-b from-transparent to-slate-50/40
        dark:from-transparent dark:to-slate-950
      "
    >
      {/* Header de section */}
      <div className="mb-8 flex flex-col items-start gap-3 md:mb-12 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-3xl">
            Certifications
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-white/70">
            Qualité logicielle (ISTQB®), développement logiciel, cloud,
            conteneurs et gestion de projet. Toutes les formations sont
            vérifiables en ligne via leur identifiant public.
          </p>
        </div>

        {/* Légende globale de confiance */}
        <div className="flex items-center gap-2 text-[11px] font-medium text-slate-500 dark:text-white/50">
          <FiCheckCircle className="text-emerald-500 dark:text-emerald-400" />
          <span>Certificats authentifiables</span>
        </div>
      </div>

      {/* Grille des cartes */}
      <motion.div
        variants={wrapperVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {certs.map((c) => (
          <motion.article
            key={c.name}
            variants={cardVariants}
            className={cardClass}
          >
            <Halo />

            {/* Top row: logo + titre */}
            <header className="flex items-start gap-4">
              {/* Logo organisme */}
              <div
                className="
                  relative flex h-12 w-12 shrink-0 items-center justify-center
                  overflow-hidden rounded-xl
                  bg-white ring-1 ring-black/10
                  dark:bg-white/10 dark:ring-white/10
                "
              >
                <img
                  src={c.badge}
                  alt={c.by}
                  className="h-10 w-10 object-contain"
                  loading="lazy"
                />
              </div>

              {/* Texte titre */}
              <div className="min-w-0">
                {/* Nom certif */}
                <h3 className="text-[15px] font-semibold leading-snug text-slate-900 dark:text-white">
                  {c.name}
                </h3>

                {/* Organisme + année */}
                <p className="text-[13px] text-slate-600 dark:text-white/70 leading-relaxed">
                  {c.by}
                  {c.date ? ` · ${c.date}` : ''}
                </p>

                {/* Tags domaine / techno */}
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  {c.tag && <span className={tagClass}>{c.tag}</span>}
                  <span className={verifyChipClass}>
                    <FiCheckCircle className="text-emerald-500 dark:text-emerald-400" />
                    Vérifiable
                  </span>
                </div>
              </div>
            </header>

            {/* Bouton d'accès public */}
            <div className="mt-5">
              <a
                href={c.verifyUrl}
                target="_blank"
                rel="noreferrer"
                className={btnClass}
                aria-label={`Voir la certification ${c.name}`}
                title="Voir la certification"
              >
                <FiExternalLink className="text-current" />
                <span>Voir la certification</span>
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
