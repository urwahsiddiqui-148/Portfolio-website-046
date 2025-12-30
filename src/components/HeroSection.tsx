import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import profileImage from '@/assets/profile-image.png';

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="glow-orb glow-orb-purple w-96 h-96 -top-20 -left-20" />
        <div className="glow-orb glow-orb-pink w-80 h-80 top-1/4 right-0" style={{ animationDelay: '-2s' }} />
        <div className="glow-orb glow-orb-blue w-72 h-72 bottom-20 left-1/4" style={{ animationDelay: '-4s' }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="hero-image-container flex-shrink-0"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 relative z-10">
                <img
                  src={profileImage}
                  alt="Amna - Cloud & Networking Professional"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Rotating Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-rotate-slow" style={{ margin: '-10px' }} />
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent/20 animate-rotate-slow" style={{ margin: '-20px', animationDirection: 'reverse', animationDuration: '25s' }} />
            </motion.div>
          </motion.div>

          {/* Hero Text Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-sm font-medium text-primary mb-6">
                Cloud & Networking Professional
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Amna</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
            >
              AWS Certified Cloud Practitioner | Microsoft Student Ambassador | 
              Bridging traditional networking with cloud technologies
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href="#contact" className="glow-button text-primary-foreground text-center">
                Get In Touch
              </a>
              <a href="#projects" className="glow-button-outline text-center">
                View My Work
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
