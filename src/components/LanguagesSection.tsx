import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe } from 'lucide-react';

const languages = [
  { name: 'English', level: 'Professional' },
  { name: 'Hindi', level: 'Native' },
  { name: 'Urdu', level: 'Native' },
  { name: 'Pahari, Kashmiri', level: 'Native' },
];

export const LanguagesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="languages" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-orb glow-orb-blue w-72 h-72 right-10 top-20 opacity-40" />
      </div>

      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text inline-block mb-4">Languages</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {languages.map((language, index) => (
            <motion.div
              key={language.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card text-center"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 }}
                className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4"
              >
                <Globe className="w-7 h-7 text-primary-foreground" />
              </motion.div>
              <h3 className="text-lg font-semibold text-foreground mb-1">{language.name}</h3>
              <p className="text-sm text-muted-foreground">{language.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
