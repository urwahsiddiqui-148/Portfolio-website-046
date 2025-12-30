import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, Check } from 'lucide-react';

interface Skill {
  name: string;
  endorsements: number;
  recentEndorsement?: boolean;
  category: 'industry' | 'tools' | 'interpersonal';
}

const skills: Skill[] = [
  { name: 'Object-Oriented Programming (OOP)', endorsements: 3, recentEndorsement: true, category: 'industry' },
  { name: 'C++', endorsements: 2, recentEndorsement: true, category: 'tools' },
  { name: 'Cascading Style Sheets (CSS)', endorsements: 3, recentEndorsement: true, category: 'tools' },
  { name: 'HTML', endorsements: 3, category: 'tools' },
  { name: 'Microsoft Cloud', endorsements: 3, category: 'industry' },
  { name: 'Communication', endorsements: 3, category: 'interpersonal' },
  { name: 'Networking', endorsements: 3, category: 'industry' },
  { name: 'Canva', endorsements: 3, category: 'tools' },
  { name: 'Adobe Illustrator', endorsements: 3, category: 'tools' },
  { name: 'Adobe Photoshop', endorsements: 3, category: 'tools' },
  { name: 'Cloud Computing', endorsements: 2, category: 'industry' },
  { name: 'Google Ads', endorsements: 3, category: 'tools' },
  { name: 'Graphic Design', endorsements: 3, category: 'tools' },
  { name: 'Marketing', endorsements: 2, category: 'interpersonal' },
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'industry', label: 'Industry Knowledge' },
  { id: 'tools', label: 'Tools & Technologies' },
  { id: 'interpersonal', label: 'Interpersonal Skills' },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-orb glow-orb-purple w-80 h-80 -left-40 top-1/3 opacity-40" />
        <div className="glow-orb glow-orb-pink w-64 h-64 right-0 bottom-20 opacity-30" />
      </div>

      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title gradient-text inline-block mb-4">Skills</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-primary text-primary-foreground shadow-lg shadow-primary/25'
                  : 'bg-muted/50 text-muted-foreground border border-border hover:border-primary/50 hover:text-foreground'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-foreground mb-2 leading-tight">{skill.name}</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(Math.min(skill.endorsements, 3))].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {skill.endorsements} endorsements
                    </span>
                  </div>
                  {skill.recentEndorsement && (
                    <div className="flex items-center gap-1.5 mt-2 text-xs text-accent">
                      <Check className="w-3.5 h-3.5" />
                      <span>Endorsed recently</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
