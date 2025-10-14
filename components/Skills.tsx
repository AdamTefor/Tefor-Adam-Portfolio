'use client';

import { motion } from 'framer-motion';

type Skill = { name: string; level?: 'base' | 'bon' | 'avance'; hint?: string };
type Group = { title: string; items: Skill[] };

const groups: Group[] = [
  {
    title: 'Tests fonctionnels & automatisés',
    items: [
      { name: 'Robot Framework', level: 'avance' },
      { name: 'Selenium', level: 'bon' },
      { name: 'Postman', level: 'bon' },
      { name: 'JUnit', level: 'bon' },
      { name: 'TestNG', level: 'base' },
      { name: 'TestLink', level: 'base' },
      { name: 'Mantis', level: 'base' },
    ],
  },
  {
    title: 'Outils & plateformes QA',
    items: [
      { name: 'Jira', level: 'avance' },
      { name: 'Jenkins', level: 'bon' },
      { name: 'Allure', level: 'bon' },
      { name: 'Excel Scénarios', level: 'avance' },
    ],
  },
  {
    title: 'Types de tests',
    items: [
      { name: 'Unitaire' },
      { name: 'Intégration' },
      { name: 'Système' },
      { name: 'Régression' },
      { name: 'Acceptation (UAT)' },
    ],
  },
  {
    title: 'Méthodologies QA',
    items: [
      { name: 'Agile / Scrum', level: 'bon' },
      { name: 'TDD' },
      { name: 'BDD' },
      { name: 'ATDD' },
    ],
  },
  {
    title: 'Langages de programmation',
    items: [
      { name: 'Java', level: 'bon' },
      { name: 'Python', level: 'bon' },
      { name: 'C/C++ (POO)', level: 'base' },
      { name: 'C#', level: 'base' },
    ],
  },
  {
    title: 'Frameworks & environnements',
    items: [
      { name: 'Spring Boot', level: 'bon' },
      { name: 'Angular', level: 'bon' },
      { name: 'ASP.NET Core MVC', level: 'base' },
      { name: 'Django', level: 'base' },
      { name: 'IntelliJ IDEA' },
      { name: 'VS Code' },
      { name: 'Next.js', level: 'base' },
    ],
  },
  {
    title: 'Bases de données',
    items: [
      { name: 'MySQL', level: 'bon' },
      { name: 'Oracle', level: 'base' },
      { name: 'SQL Server', level: 'base' },
      { name: 'PL/SQL', level: 'base' },
      { name: 'Transact-SQL', level: 'base' },
    ],
  },
  {
    title: 'Conception & architecture',
    items: [
      { name: 'UML', level: 'bon' },
      { name: 'Merise', level: 'base' },
      { name: 'Enterprise Architect' },
      { name: 'Architecture 3-tiers / MVC' },
      { name: 'Design Patterns', level: 'base' },
    ],
  },
  {
    title: 'Collaboration & DevOps',
    items: [
      { name: 'Git / GitHub / GitLab', level: 'bon' },
      { name: 'CI/CD', level: 'bon' },
      { name: 'Docker (containeurisation & déploiement)', level: 'base' },
    ],
  },
  {
    title: 'Systèmes d’exploitation',
    items: [
      { name: 'Unix / Linux', level: 'bon' },
      { name: 'Windows', level: 'bon' },
    ],
  },
];

// styles utilitaires
const card =
  'card p-5 md:p-6 bg-white/60 dark:bg-white/5 backdrop-blur border border-black/5 dark:border-white/10';
const badgeBase =
  'inline-flex items-center rounded-full px-2.5 py-1 text-xs md:text-[13px] font-medium border transition mr-2 mb-2';
const levels: Record<NonNullable<Skill['level']>, string> = {
  base: 'border-slate-300/60 dark:border-white/10 bg-slate-100/70 dark:bg-white/10 text-slate-700 dark:text-white/80',
  bon: 'border-brand/30 bg-brand/10 text-brand',
  avance: 'border-emerald-400/40 bg-emerald-400/10 text-emerald-600 dark:text-emerald-300',
};

const fade = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Skills() {
  return (
    <section id="skills" className="section py-16 md:py-24 scroll-mt-24">
      <div className="flex items-end justify-between gap-4">
        <h2 className="h2">Compétences</h2>
        {/* Légende niveaux */}
        <div className="hidden md:flex items-center gap-2 text-xs">
          <span className={`${badgeBase} ${levels.base}`}>Base</span>
          <span className={`${badgeBase} ${levels.bon}`}>Bon</span>
          <span className={`${badgeBase} ${levels.avance}`}>Avancé</span>
        </div>
      </div>

      <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((g) => (
          <motion.div
            key={g.title}
            className={card}
            variants={fade}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-[15px] md:text-base">{g.title}</h3>

            <div className="mt-3 -m-1.5">
              {g.items.map((it) => {
                const lvlClass = it.level ? levels[it.level] : levels.base;
                return (
                  <span
                    key={`${g.title}-${it.name}`}
                    className={`${badgeBase} ${lvlClass}`}
                    title={it.hint || it.name}
                  >
                    {it.name}
                  </span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Légende visible sur mobile */}
      <div className="mt-6 md:hidden">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className={`${badgeBase} ${levels.base}`}>Base</span>
          <span className={`${badgeBase} ${levels.bon}`}>Bon</span>
          <span className={`${badgeBase} ${levels.avance}`}>Avancé</span>
        </div>
      </div>
    </section>
  );
}
