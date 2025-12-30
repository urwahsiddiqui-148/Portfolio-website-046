import { motion } from 'framer-motion';
import { Linkedin, BookOpen, Heart } from 'lucide-react';

const socials = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/amna-alis/',
  },
  {
    name: 'Medium',
    icon: BookOpen,
    url: 'https://medium.com/@amna73037',
  },
];

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-orb glow-orb-purple w-64 h-64 -left-32 -bottom-32 opacity-20" />
        <div className="glow-orb glow-orb-blue w-48 h-48 right-0 -bottom-24 opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <span className="text-2xl font-bold gradient-text">Amna</span>
            <p className="text-sm text-muted-foreground mt-1">
              Cloud & Networking Professional
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex gap-4"
          >
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="social-icon"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-1 text-sm text-muted-foreground"
          >
            <span>Made with</span>
            <Heart className="w-4 h-4 text-accent fill-accent" />
            <span>© {new Date().getFullYear()}</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
