'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiPhone, FiMapPin, FiAlertTriangle, FiLoader } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);

    const form = formRef.current;
    if (!form) return;

    // Honeypot anti-bot
    const hp = (form.querySelector('input[name="company"]') as HTMLInputElement | null)?.value;
    if (hp) return;

    try {
      setLoading(true);

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        form,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string }
      );

      setSent(true);
      form.reset();
    } catch (e: any) {
      console.error(e);
      setErr("L’envoi a échoué. Réessayez dans quelques minutes.");
    } finally {
      setLoading(false);
    }
  };

  const card =
    'rounded-2xl border border-black/5 dark:border-white/10 bg-white/65 dark:bg-white/5 backdrop-blur p-5 md:p-6';

  const input =
    'w-full rounded-xl bg-slate-100 text-slate-900 border border-black/10 placeholder-slate-500 ' +
    'dark:bg-white/5 dark:text-white dark:border-white/10 dark:placeholder-white/40 ' +
    'px-4 py-3 outline-none focus:border-brand/60 transition';

  const label = 'text-sm font-medium text-slate-700 dark:text-white/80';

  return (
    <section id="contact" className="section py-16 md:py-24 scroll-mt-24">
      <h2 className="h2">Contact</h2>

      <div className="mt-6 grid lg:grid-cols-2 gap-6">
        {/* Colonne gauche */}
        <div className="space-y-6">
          {/* Informations de contact */}
          <motion.div
            className={card}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-lg font-semibold">Informations de contact</h3>

            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3 rounded-xl bg-brand/5 p-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/70 dark:bg-white/10">
                  <FiMail className="text-brand" />
                </span>
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <a
                    href="mailto:adamtefor37@gmail.com"
                    className="text-slate-700 dark:text-white/80 hover:text-brand"
                  >
                    adamtefor37@gmail.com
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3 rounded-xl bg-brand/5 p-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/70 dark:bg-white/10">
                  <FiPhone className="text-brand" />
                </span>
                <div>
                  <p className="text-sm font-medium">Téléphone</p>
                  <p className="text-slate-700 dark:text-white/80">+212 6 66 63 32 67</p>
                </div>
              </li>

              <li className="flex items-center gap-3 rounded-xl bg-brand/5 p-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/70 dark:bg-white/10">
                  <FiMapPin className="text-brand" />
                </span>
                <div>
                  <p className="text-sm font-medium">Localisation</p>
                  <p className="text-slate-700 dark:text-white/80">Rabat–Salé–Kénitra, Maroc</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Réseaux sociaux */}
          <motion.div
            className={card}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-lg font-semibold">Réseaux sociaux</h3>

            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/adam-tefor-63a4b4235/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 dark:border-white/10 hover:border-brand/60 hover:text-brand"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/AdamTefor"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 dark:border-white/10 hover:border-brand/60 hover:text-brand"
              >
                <FaGithub />
              </a>
            
            </div>
          </motion.div>

          {/* Message rapide */}
          <motion.div
            className={card}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-lg font-semibold">Message rapide</h3>
            <p className="mt-2 text-slate-700 dark:text-white/80">
              Vous pouvez aussi m’écrire directement sur LinkedIn pour une réponse rapide.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/adam-tefor-63a4b4235/r"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium border border-brand/30 bg-brand/10 text-brand hover:bg-brand/15"
              >
                LinkedIn
              </a>
           
            </div>
          </motion.div>
        </div>

        {/* Colonne droite : Formulaire */}
        <motion.div
          className={card}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-lg font-semibold">Envoyez-moi un message</h3>

          {!sent ? (
            <form ref={formRef} onSubmit={handleSubmit} className="mt-4 grid gap-4">
              {/* Honeypot */}
              <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <label className={label} htmlFor="from_name">Nom complet</label>
                  <input id="from_name" name="from_name" required placeholder="Votre nom" className={input} />
                </div>
                <div>
                  <label className={label} htmlFor="from_email">Email</label>
                  <input id="from_email" name="from_email" required type="email" placeholder="votre@email.com" className={input} />
                </div>
              </div>

              <div>
                <label className={label} htmlFor="subject">Sujet</label>
                <input id="subject" name="subject" placeholder="Sujet de votre message" className={input} />
              </div>

              <div>
                <label className={label} htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Votre message…"
                  className={`${input} min-h-[140px]`}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-1 inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium text-white 
                           bg-gradient-to-r from-brand to-brand/90 hover:to-brand/80 
                           disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="inline-flex items-center gap-2">
                    <FiLoader className="animate-spin" /> Envoi…
                  </span>
                ) : (
                  'Envoyer le message'
                )}
              </button>

              {err && (
                <p className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400">
                  <FiAlertTriangle /> {err}
                </p>
              )}

              <p className="text-xs text-slate-500 dark:text-white/50">
                Vos informations ne sont utilisées que pour répondre à votre message.
              </p>
            </form>
          ) : (
            <div className="mt-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-4 text-emerald-700 dark:text-emerald-300">
              Merci, votre message a bien été envoyé. Je vous réponds rapidement.
            </div>
          )}
        </motion.div>
      </div>

      {/* Lien direct email (fallback) */}
      <p className="mt-6 text-slate-700 dark:text-white/80">
        Ou par email :{' '}
        <a className="text-brand font-medium hover:underline" href="mailto:adamtefor37@gmail.com">
          adamtefor37@gmail.com
        </a>
      </p>
    </section>
  );
}
