
# Tefor Adam — Portfolio (Next.js + Tailwind)

Portfolio moderne inspiré des portfolios déployés sur Vercel (sections Hero, Compétences, Projets, Expériences, Certifications, Contact) avec animations Framer Motion.

## 🚀 Démarrage

```bash
# 1) Installer les dépendances
npm install

# 2) Lancer en local
npm run dev

# 3) Build & start
npm run build
npm start
```

Le site tourne par défaut sur http://localhost:5173

## 🧩 Technologies
- Next.js (App Router, TypeScript)
- Tailwind CSS
- Framer Motion
- React Icons

## 🛠️ Personnalisation rapide
- **Nom/Titre** : `components/Hero.tsx`
- **À propos** : `components/About.tsx`
- **Compétences** : `components/Skills.tsx`
- **Projets** : `components/Projects.tsx`
- **Expériences** : `components/Experience.tsx`
- **Certifications** : `components/Certs.tsx`
- **Contact** (EmailJS) : `components/Contact.tsx`

Remplace `public/cv/TEFOR-ADAM-CV.pdf` par ton CV réel.

## ☁️ Déploiement (Vercel)
1. Crée un repo GitHub et pousse ce dossier.
2. Va sur Vercel → New Project → Import depuis GitHub.
3. Build command: `next build` — Output: `.next`
4. Clique sur **Deploy**.

## 🔌 Envoi d'emails (optionnel)
Intègre [EmailJS](https://www.emailjs.com/) : ajoute ton ID de service et de template dans `Contact.tsx`.

---

Fait pour : **Tefor Adam** · EMSI Rabat · Développement & Testing (QA)
