import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';

const education = [
  {
    institution: 'Mirpur University of Science & Technology (MUST)',
    degree: 'Computer System Engineering',
    field: 'Computer Systems Networking and Telecommunications',
    year: '2022',
  },
];

const certifications = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    issued: 'Sep 2025',
    expires: 'Sep 2028',
    hasCredential: true,
  },
];

export const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-orb glow-orb-blue w-72 h-72 right-20 top-20 opacity-40" />
      </div>

      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text inline-block mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>

            {education.map((item, index) => (
              <motion.div
                key={item.institution}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card"
              >
                <h4 className="text-lg font-semibold text-foreground mb-2">{item.institution}</h4>
                <p className="text-muted-foreground mb-1">{item.degree}</p>
                <p className="text-sm text-muted-foreground/80 mb-2">{item.field}</p>
                <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-medium">
                  {item.year}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-secondary flex items-center justify-center">
                <Award className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
            </div>

            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card group cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-muted-foreground mb-2">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground/80">
                      Issued {cert.issued} · Expires {cert.expires}
                    </p>
                  </div>
                  {cert.hasCredential && (
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <span>Credential</span>
                        <ExternalLink className="w-3 h-3" />
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
