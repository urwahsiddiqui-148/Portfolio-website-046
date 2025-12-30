import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Award } from 'lucide-react';

const volunteering = [
  {
    organization: 'GDSC MUST',
    role: 'Cloud team member',
    type: 'Science and Technology',
    description: '',
    logo: '🌐',
    link: '',
    duration: '',
  },
  {
    organization: 'Microsoft',
    role: 'Microsoft Student Ambassador',
    type: 'Science and Technology',
    duration: 'Jul 2024 - Present · 1 yr 6 mos',
    description: 'Student Ambassadors are a global group of campus leaders who are eager to help fellow students, create robust tech communities and develop technical and career skills for the future.',
    logo: '🪟',
    link: 'https://mvp.microsoft.com/studentambassadors/certificate/ea58d67d-702c-4a01-9cfe-6673382875bb',
  },
  {
    organization: 'MLSA MUST',
    role: 'Microsoft Student Ambassador',
    type: 'Science and Technology',
    description: '',
    logo: '🎓',
    link: '',
    duration: '',
  },
  {
    organization: 'AWS Cloud Club Pakistan',
    role: 'Vice lead AWS learning Club MUST Operation & Community Engagement',
    type: 'Education',
    duration: 'Nov 2024 - Present · 1 yr 2 mos',
    description: '',
    logo: '☁️',
    link: '',
  },
  {
    organization: 'AWS Cloud Club MUST',
    role: 'Vice-Lead',
    type: 'Science and Technology',
    duration: 'Jan 2025 - Present · 1 yr',
    description: '🔹 Event Planning & Execution – Supports the Cloud Club Captain in organizing and running AWS-related events.\n🔹 Community Engagement – Manages member interactions, gathers feedback, and encourages active participation.\n🔹 Leadership Support – Takes on leadership duties when the Cloud Club Leader is unavailable.',
    logo: '⚡',
    link: '',
  },
];

export const VolunteeringSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="volunteering" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-orb glow-orb-pink w-80 h-80 -left-40 top-1/4 opacity-30" />
        <div className="glow-orb glow-orb-purple w-64 h-64 right-0 bottom-1/4 opacity-40" />
      </div>

      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text inline-block mb-4">Volunteering</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="hidden md:block timeline-line" />

          <div className="space-y-8">
            {volunteering.map((item, index) => (
              <motion.div
                key={`${item.organization}-${item.role}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative md:pl-16"
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-0 top-6 w-12 h-12 rounded-full bg-gradient-primary items-center justify-center text-2xl z-10">
                  {item.logo}
                </div>

                <div className="glass-card">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="md:hidden w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center text-2xl flex-shrink-0">
                      {item.logo}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{item.role}</h3>
                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-primary hover:text-accent transition-colors"
                          >
                            <Award className="w-4 h-4" />
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                      <p className="text-muted-foreground mb-1">{item.organization}</p>
                      {item.duration && (
                        <p className="text-sm text-muted-foreground/80 mb-2">{item.duration}</p>
                      )}
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                        {item.type}
                      </span>
                      {item.description && (
                        <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
