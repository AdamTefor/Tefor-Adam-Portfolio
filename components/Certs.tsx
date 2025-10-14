
'use client';
import { motion } from 'framer-motion';

const certs = [
  { name: "ISTQB CTFL — en préparation", by: "ISTQB", link: "#" },
  { name: "Intro to Java OOP", by: "Coursera", link: "https://www.coursera.org/account/accomplishments/records/5BYPBFBWJ63W" },
  { name: "Intro to Big Data (Spark/Hadoop)", by: "IBM", link: "#" },
];

export default function Certs(){
  return (
    <section id="certs" className="section py-16 md:py-24">
      <h2 className="h2">Certifications</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map(c=>(
          <motion.div key={c.name} className="card"
            initial={{opacity:0, y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.3}}
          >
            <p className="font-semibold">{c.name}</p>
            <p className="text-white/70">{c.by}</p>
            {c.link && <a className="link mt-2 inline-block" href={c.link} target="_blank" rel="noreferrer">Voir</a>}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
