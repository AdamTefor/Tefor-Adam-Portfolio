'use client';

import { motion } from 'framer-motion';
import { FiExternalLink, FiCheckCircle } from 'react-icons/fi';

// ====== TYPE ======
type Cert = {
  name: string;
  by: string;
  date?: string;
  verifyUrl: string;   // lien public obligatoire
  badge?: string;      // icône/badge dans /public/images/...
};

// ====== DONNÉES ======
const certs: Cert[] = [
  {
    name: 'ISTQB® Certified Tester – Foundation Level (CTFL) 4.0',
    by: 'GASQ / ISTQB',
    date: '2025',
    verifyUrl:
      'https://app.skillsclub.com/credential/267180-e78e598aa30689c969da12d333dc15b2f1a1b8de520059025a3c7934ebbb44b8',
    badge: '/images/logos/istqb.png',
  },
  {
    name: 'Introduction to Git and GitHub',
    by: 'Google',
    date: '2024',
    verifyUrl:
      'https://www.coursera.org/account/accomplishments/verify/7W356BKTX7GV',
    badge: '/images/logos/google.png',
  },
  {
    name: 'Introduction to Object-Oriented Programming in Java',
    by: 'University of Pennsylvania',
    date: '2024',
    verifyUrl:
      'https://www.coursera.org/account/accomplishments/verify/N19XG3V4D6SM',
    badge: '/images/logos/coursera.png',
  },
  {
    name: 'Introduction to Big Data (Spark / Hadoop)',
    by: 'IBM Skills Network',
    date: '2024',
    verifyUrl:
      'https://www.coursera.org/account/accomplishments/verify/7RRBKCNB9YU8',
    badge: '/images/logos/ibm.png',
  },
  {
    name: 'Software Engineering: Software Design and Project Management',
    by: 'The Hong Kong University of Science and Technology',
    date: '2024',
    verifyUrl:
      'https://www.coursera.org/account/accomplishments/verify/7W356BKTX7GV',
    badge: '/images/logos/coursera1.png',
  },
  {
    name: 'Programming for Everybody (Getting Started with Python)',
    by: 'University of Michigan',
    date: '2024',
    verifyUrl:
      'https://www.coursera.org/account/accomplishments/verify/YPMFD77PYWSH',
    badge: '/images/logos/python.png',
  },
  {
    name: 'React Basics',
    by: 'Meta',
    date: '2024',
    verifyUrl:
      'https://www.coursera.org/account/accomplishments/verify/05C9W71K2PVL',
    badge: '/images/logos/meta.png',
  },
  {
    name: 'Virtual Networks in Azure',
    by: 'Whizlabs',
    date: '2024',
    verifyUrl: 'https://www.whizlabs.com/microsoft-azure-certifications/',
    badge: '/images/logos/azure.png',
  },
  {
    name: 'Introduction to Containers with Docker, Kubernetes & OpenShift',
    by: 'IBM Skills Network',
    date: '2024',
    verifyUrl:
      'https://www.coursera.org/account/accomplishments/verify/2L4XECV7U8G2',
    badge: '/images/logos/ibm.png',
  },
];

// ====== STYLES ======
const card =
  'group relative overflow-hidden rounded-2xl border border-black/5 dark:border-white/10 bg-white/65 dark:bg-white/5 backdrop-blur p-5 md:p-6 transition-shadow hover:shadow-lg hover:shadow-black/10';
const chip =
  'inline-flex items-center gap-2 rounded-xl bg-slate-100/70 dark:bg-white/10 px-2 py-1 text-xs text-slate-700 dark:text-white/80 border border-black/5 dark:border-white/10';
const btn =
  'inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-medium border transition border-brand/30 bg-brand/10 text-brand hover:bg-brand/15';

const fade = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

// ====== COMPOSANT ======
export default function Certs() {
  return (
    <section id="certs" className="section py-16 md:py-24 scroll-mt-24">
      <h2 className="h2">Certifications</h2>

      <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((c) => (
          <motion.article
            key={c.name}
            className={card}
            variants={fade}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Ruban décoratif au hover */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rotate-45 bg-brand/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* En-tête */}
            <header className="flex items-start gap-3">
              {c.badge && (
                <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg ring-1 ring-black/10 dark:ring-white/10 bg-white dark:bg-white/10">
                  <img
                    src={c.badge}
                    alt={c.by}
                    className="object-contain h-full w-full p-1.5"
                    loading="lazy"
                  />
                </span>
              )}
              <div className="min-w-0">
                <h3 className="font-semibold leading-snug">{c.name}</h3>
                <p className="text-sm text-slate-600 dark:text-white/70">
                  {c.by}
                  {c.date ? ` · ${c.date}` : ''}
                </p>
              </div>
            </header>

            {/* Chip “Vérifiable en ligne” */}
            <div className="mt-3">
              <span className={chip}>
                <FiCheckCircle className="text-emerald-500" />
                Vérifiable en ligne
              </span>
            </div>

            {/* Bouton d'accès */}
            <div className="mt-4">
              <a
                href={c.verifyUrl}
                target="_blank"
                rel="noreferrer"
                className={btn}
                aria-label={`Accéder à la certification ${c.name}`}
                title="Accéder à la certification"
              >
                <FiExternalLink /> Accéder à la certification
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
