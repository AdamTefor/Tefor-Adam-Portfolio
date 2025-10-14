'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

type ExpItem = {
  org: string;
  role: string;
  period: string;
  details: string;   // texte multi-lignes -> rendu avec whitespace-pre-line
  logo: string;      // chemin depuis /public
};

const items: ExpItem[] = [
  {
    org: 'Orange Business Services — Rabat',
    role: 'Ingénieur tests QA & Automatisation',
    period: 'Juil–Septembre 2025',
    details:
      `Participation au cycle complet de test sur la plateforme Kikeoo (RH, Presta, Manager) dans un environnement Agile.

Tests fonctionnels :
• Analyse des besoins via Jira, rédaction et exécution de cas de test.
• Détection et suivi d’anomalies pour assurer la conformité des livrables.
• Collaboration avec l’équipe de dev et participation aux cérémonies Scrum (daily, sprint planning, rétrospectives).

Tests automatisés :
• Conception de scripts Robot Framework + SeleniumLibrary, mots-clés Python personnalisés.
• Intégration dans la chaîne CI/CD Jenkins et rapports Allure.
• Optimisation des suites pour réduire la régression et améliorer la stabilité.

Compétences clés : Robot Framework · Selenium · Python · Jira · Jenkins · Allure · Test Design · CI/CD · Agile · Analyse fonctionnelle`,
    logo: '/images/logos/orange.png',
  },
  {
    org: 'ReeWayy — Paris (Remote)',
    role: 'Stage en Développement Backend – Analyse & Génie Logiciel',
    period: 'Juil. 2025 (1 mois)',
    details:
      `• Participation à l’analyse fonctionnelle et technique d’une plateforme de gestion médicale des patients.
• Contribution à la rédaction de documentation technique.

Compétences : Java · API REST · Spring Boot · Analyse fonctionnelle · Documentation technique · Travail d’équipe à distance · SQL · Next.js · Gestion de projet agile · Méthodes agiles`,
    logo: '/images/logos/reewayy.png', // ajoute ce fichier
  },
  {
    org: "Haut Commissariat au Plan — Rabat",
    role: "Enquêteur Principal (RGPH 2024)",
    period: "Sept 2024",
    details:
      `• Participation au RGPH 2024 en tant qu’enquêteur principal : coordination et collecte de données terrain.
• Communication : explication des objectifs, recueil de données fiables.
• Organisation : planification des tournées, respect des délais et suivi.
• Qualité : vérification/validation des informations.
• Travail d’équipe : collaboration avec superviseurs et enquêteurs.
• Leadership & gestion du stress.

Compétences clés : Communication · Organisation · Esprit d’équipe · Leadership · Sens de l’écoute · Rigueur · Résolution de problèmes · Gestion du temps`,
    logo: '/images/logos/hcp.png',
  },
  {
    org: "Club d'Innovation EMSI Rabat — IT Developers",
    role: "Membre (Temps partiel)",
    period: "Nov. 2024 – Janv. 2025 (3 mois)",
    details:
      `• Organisation d’ateliers, hackathons et événements de réseautage.
• Création de formulaires en ligne et collecte de retours.
• Participation à des projets de développement web.
• Gestion des réseaux sociaux pour promouvoir le club.

Compétences : Leadership · Gestion d’événements · Relations de travail · Spring Data · JEE · Gestion de projet`,
    logo: '/images/logos/it-developers-club.png', // ajoute ce fichier
  },
  {
    org: 'Edgy Brain — Kénitra',
    role: 'Stagiaire Ingénierie Logicielle',
    period: 'Juil 2024',
    details:
      `• Développement et amélioration de la plateforme Tacheur (Laravel).
• Analyse fonctionnelle/technique et conception de nouvelles fonctionnalités.
• Optimisation de l’architecture (performance/maintenabilité).
• Intégration et gestion MySQL.
• Collaboration en contexte Agile et reporting régulier.

Compétences clés : Laravel · PHP · HTML/CSS · React.js · MySQL · Analyse de projets · Ingénierie logicielle · Travail d’équipe · Leadership · Rédaction de rapports`,
    logo: '/images/logos/edgybrain.png',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section py-16 md:py-24 scroll-mt-24">
      <h2 className="h2">Expériences</h2>

      <div className="mt-8 space-y-5">
        {items.map((it) => (
          <motion.div
            key={`${it.org}-${it.period}`}
            className="card p-5 md:p-6 flex flex-col gap-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {/* En-tête : Logo + Infos principales */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden ring-1 ring-black/10 dark:ring-white/10 bg-white dark:bg-white/10 flex-shrink-0">
                  <Image
                    src={it.logo}
                    alt={`Logo de ${it.org}`}
                    fill
                    className="object-contain p-1"
                    sizes="48px"
                  />
                </div>
                <div>
                  <p className="font-semibold text-[15px] md:text-base">{it.role}</p>
                  <p className="text-slate-700 dark:text-white/80 text-sm md:text-[15px]">
                    {it.org}
                  </p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-white/70 text-sm md:text-[15px] md:text-right">
                {it.period}
              </p>
            </div>

            {/* Détails multi-lignes */}
            <p className="text-slate-700 dark:text-white/80 leading-relaxed text-[15px] md:text-base pl-[3.5rem] md:pl-[4rem] whitespace-pre-line">
              {it.details}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
