'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

type Link = { href: string; label: string };
type Project = {
  title: string;
  period?: string;
  org?: string;
  logo?: string;      // chemin /public
  desc: string;
  bullets?: string[]; // fonctionnalités clés
  tech: string[];
  links?: Link[];
};

const projects: Project[] = [
  // QA / Test Automation
  {
    title: 'Kikeoo – Tests fonctionnels & automatisés',
    period: '2025',
    org: 'Orange Business Services',
    logo: '/images/logos/orange.png',
    desc:
      'Campagne de tests fonctionnels et automatisés sur Kikeoo (RH, Presta, Manager) avec intégration CI/CD et reporting qualité.',
    bullets: [
      'Rédaction et exécution de cas de test, suivi des anomalies (Jira).',
      'Automatisation Robot Framework + SeleniumLibrary, keywords Python.',
      'Pipelines Jenkins, rapports Allure, optimisation des suites de régression.',
    ],
    tech: ['Robot Framework', 'Selenium', 'Python', 'Jenkins', 'Allure', 'Jira'],
    links: [{ href: '#', label: 'Résumé' }],
  },

  // PFA E-commerce Spring Boot + Thymeleaf
  {
    title: 'E-commerce – PFA (Spring Boot + Thymeleaf)',
    period: 'Juin 2025 – Juil. 2025',
    org: 'EMSI Rabat',
    logo: '/images/logos/emsi.png',
    desc:
      'Application e-commerce complète multi-rôles (visiteur, client, vendeur, administrateur) avec paiement simulé et back-office.',
    bullets: [
      'Catalogue, panier, commandes, gestion vendeurs et administration.',
      'Architecture 3-tiers, sécurité, séparation des rôles, design responsive.',
      'UI soignée, bonnes pratiques d’accessibilité et de performances.',
    ],
    tech: ['Java', 'Spring Boot', 'Thymeleaf', 'Spring MVC', 'MySQL', 'Spring Security', 'Maven'],
    links: [],
  },

  // Bankati / MyBanque Spring Boot + Thymeleaf
  {
    title: 'Bankati – Gestion bancaire web',
    period: 'Mai 2025 – Juin 2025',
    org: 'EMSI Rabat',
    logo: '/images/logos/emsi.png',
    desc:
      'Application bancaire simplifiée avec profils Client et Administrateur : gestion utilisateurs et demandes de crédit.',
    bullets: [
      'Client : authentification, profil, solde, conversion devises, demandes de crédit.',
      'Admin : CRUD clients, suivi et décision sur demandes, export PDF.',
      'Architecture MVC, sécurité, JPA/Hibernate, MySQL.',
    ],
    tech: ['Spring Boot', 'Spring MVC', 'Spring Security', 'Spring Data JPA', 'Thymeleaf', 'MySQL'],
    links: [
      {
        href: 'https://github.com/AdamTefor/Banque_APP_SpringBoot',
        label: 'GitHub',
      },
    ],
  },

  // Android Stock app Java + Room
  {
    title: 'Gestion de stock – Application Android',
    period: 'Avr. 2025 – Mai 2025',
    org: 'EMSI Rabat',
    logo: '/images/logos/emsi.png',
    desc:
      'Application mobile de gestion de stock (CRUD produits, recherche temps réel, stats).',
    bullets: [
      'CRUD produits, recherche instantanée.',
      'Authentification locale et tableau de statistiques (camembert).',
      'Architecture MVC, UI moderne (XML + Material).',
    ],
    tech: ['Java', 'Android Studio', 'Room (SQLite)', 'MPAndroidChart', 'MVC'],
    links: [
      {
        href: 'https://github.com/AdamTefor/GestionStockApp',
        label: 'GitHub',
      },
    ],
  },

  // DentalSoft Pro Java Swing
  {
    title: 'DentalSoft Pro – Cabinet dentaire (Desktop)',
    period: 'Nov. 2024 – Janv. 2025',
    org: 'EMSI Rabat',
    logo: '/images/logos/emsi.png',
    desc:
      'Application desktop de gestion de cabinet dentaire : patients, rendez-vous, factures et utilisateurs.',
    bullets: [
      'Gestion des patients, rendez-vous, factures et paiements.',
      'Gestion des accès et rôles, interface Java Swing.',
      'Organisation dossier, MVC, fichiers persistants.',
    ],
    tech: ['Java', 'Swing', 'MVC', 'POO'],
    links: [
      {
        href: 'https://github.com/AdamTefor/cabinet-dentaire',
        label: 'GitHub',
      },
    ],
  },

  // Tacheur Laravel – Edgy Brain
  {
    title: 'Tacheur – Amélioration plateforme (Laravel)',
    period: 'Juil. 2023 – Sept. 2023',
    org: 'Edgy Brain',
    logo: '/images/logos/edgybrain.png',
    desc:
      'Améliorations sur la plateforme de gestion de tâches (inspirée Taskrabbit) : UX, perf et sécurité.',
    bullets: [
      'Modernisation UI et nouvelles fonctionnalités côté gestion des tâches/utilisateurs.',
      'Optimisation performance et sécurité, bonnes pratiques MVC.',
      'Collaboration Agile, usages Git et revue de code.',
    ],
    tech: ['Laravel', 'PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Git'],
    links: [],
  },

  // Publications scientifiques – Django
  {
    title: 'Gestion des publications scientifiques (Django)',
    period: 'Mai 2023 – Août 2023',
    org: 'EMSI Rabat',
    logo: '/images/logos/emsi.png',
    desc:
      'Application web pour gérer les publications scientifiques : soumission, relecture, recherche et indexation.',
    bullets: [
      'Auth et gestion des utilisateurs, workflow de relecture.',
      'Soumission, édition et consultation d’articles.',
      'Recherche avancée et indexation.',
    ],
    tech: ['Python', 'Django', 'UML'],
    links: [],
  },
];

const card =
  'card p-5 md:p-6 bg-white/60 dark:bg-white/5 backdrop-blur border border-black/5 dark:border-white/10';
const badge =
  'inline-flex items-center rounded-full px-2.5 py-1 text-xs md:text-[13px] font-medium border mr-2 mb-2 border-slate-300/60 dark:border-white/10 bg-slate-100/70 dark:bg-white/10 text-slate-700 dark:text-white/80';
const fade = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Projects() {
  return (
    <section id="projects" className="section py-16 md:py-24 scroll-mt-24">
      <h2 className="h2">Projets</h2>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <motion.article
            key={`${p.title}-${p.period ?? ''}`}
            className={card}
            variants={fade}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Header: logo + titre + période */}
            <header className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                {p.logo && (
                  <div className="relative w-10 h-10 shrink-0 rounded-lg overflow-hidden ring-1 ring-black/10 dark:ring-white/10 bg-white dark:bg-white/10">
                    <Image
                      src={p.logo}
                      alt={p.org ? `Logo ${p.org}` : 'Logo'}
                      fill
                      sizes="40px"
                      className="object-contain p-1"
                    />
                  </div>
                )}
                <div className="min-w-0">
                  <h3 className="text-[15px] md:text-base font-semibold leading-snug">
                    {p.title}
                  </h3>
                  {(p.org || p.period) && (
                    <p className="text-slate-600 dark:text-white/70 text-sm truncate">
                      {p.org}
                      {p.org && p.period ? ' · ' : ''}
                      {p.period}
                    </p>
                  )}
                </div>
              </div>
            </header>

            {/* Description */}
            <p className="mt-3 text-slate-700 dark:text-white/80 leading-relaxed">
              {p.desc}
            </p>

            {/* Bullets */}
            {p.bullets && p.bullets.length > 0 && (
              <ul className="mt-3 list-disc pl-5 space-y-1 text-slate-700 dark:text-white/80">
                {p.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}

            {/* Tech badges */}
            <div className="mt-3 -m-1.5">
              {p.tech.map((t) => (
                <span key={`${p.title}-${t}`} className={badge}>
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            {p.links && p.links.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-3">
                {p.links.map((l) => (
                  <a
                    key={l.href}
                    className="inline-flex items-center gap-1 rounded-xl border border-black/10 dark:border-white/10 px-3 py-2 text-sm hover:border-brand/60 hover:text-brand transition"
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={l.label}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
