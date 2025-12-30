import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, MapPin, Building2 } from 'lucide-react';

const experience = [
  {
    company: 'Corvit Networks',
    role: 'Cloud & Networks Internee',
    type: 'Full-time',
    duration: 'Aug 2025 - Present · 5 mos',
    location: 'Rawalpindi Pakistan · On-site',
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-orb glow-orb-purple w-80 h-80 -right-40 top-1/4 opacity-40" />
      </div>

      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text inline-block mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="relative"
            >
              <div className="glass-card">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Company Logo Placeholder */}
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="flex-shrink-0"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center">
                      <Building2 className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-muted-foreground">{exp.company}</span>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                      <span className="text-sm text-muted-foreground/80">{exp.type}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
