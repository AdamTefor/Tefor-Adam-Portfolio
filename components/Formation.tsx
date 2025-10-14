'use client';
import { motion } from 'framer-motion';

const studies = [
  {
    title: "Cycle d’ingénieur en Informatique et Réseaux" + "– Option MIAGE",
    school: "École Marocaine des Sciences de l’Ingénieur (EMSI) – Rabat",
    date: "2023 – 2026",
    description:
      "Formation d’ingénieur orientée développement logiciel, réseaux, systèmes distribués et assurance qualité logicielle.",
  },
  {
    title: "Classes préparatoires intégrées",
    school: "École Marocaine des Sciences de l’Ingénieur (EMSI) – Rabat",
    date: "2021 – 2023",
    description:
      "Études approfondies en mathématiques, algorithmique et ingénierie informatique, préparant au cycle d’ingénieur.",
  },
  {
    title: "Baccalauréat Sciences Physiques – Option Internationale (BIOF)",
    school: "-",
    date: "2020 – 2021",
    description:
      "Formation scientifique solide, avec spécialisation en physique et mathématiques appliquées.",
  },
];

export default function Formation() {
  return (
    <section id="formation" className="section py-16 md:py-24">
      <h2 className="h2">Formation</h2>

      <div className="space-y-6">
        {studies.map((f) => (
          <motion.div
            key={f.title}
            className="card"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-white">
              🎓 {f.title}
            </h3>
            <p className="text-sm text-slate-700 dark:text-white/70 mt-1">
              {f.school}
            </p>
            <p className="text-xs text-brand mt-1 font-medium">{f.date}</p>
            <p className="text-slate-700 dark:text-white/80 mt-2">
              {f.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
