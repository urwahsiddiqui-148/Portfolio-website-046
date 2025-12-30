import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Home, User, Code, Languages, Heart, GraduationCap, Briefcase, FolderOpen, Mail } from 'lucide-react';
interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}
const navItems: NavItem[] = [{
  label: 'Home',
  href: '#home',
  icon: <Home className="w-4 h-4" />
}, {
  label: 'About',
  href: '#about',
  icon: <User className="w-4 h-4" />
}, {
  label: 'Skills',
  href: '#skills',
  icon: <Code className="w-4 h-4" />
}, {
  label: 'Languages',
  href: '#languages',
  icon: <Languages className="w-4 h-4" />
}, {
  label: 'Volunteering',
  href: '#volunteering',
  icon: <Heart className="w-4 h-4" />
}, {
  label: 'Education',
  href: '#education',
  icon: <GraduationCap className="w-4 h-4" />
}, {
  label: 'Experience',
  href: '#experience',
  icon: <Briefcase className="w-4 h-4" />
}, {
  label: 'Projects',
  href: '#projects',
  icon: <FolderOpen className="w-4 h-4" />
}, {
  label: 'Contact',
  href: '#contact',
  icon: <Mail className="w-4 h-4" />
}];
export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navItems.map(item => item.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <>
      <motion.nav initial={{
      y: -100
    }} animate={{
      y: 0
    }} transition={{
      duration: 0.6,
      ease: 'easeOut'
    }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-glow-purple/5' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo / Breadcrumb */}
            <motion.div className="flex items-center gap-2" whileHover={{
            scale: 1.02
          }}>
              <span className="text-xl font-bold gradient-text">Amina Ali</span>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground capitalize">{activeSection}</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map(item => <button key={item.label} onClick={() => handleNavClick(item.href)} className={`nav-link ${activeSection === item.href.replace('#', '') ? 'active' : ''}`}>
                  {item.label}
                </button>)}
            </div>

            {/* Mobile Menu Button */}
            <motion.button whileTap={{
            scale: 0.95
          }} onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-lg bg-muted/50 border border-border hover:border-primary/50 transition-colors">
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && <>
            <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} onClick={() => setIsOpen(false)} className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden" />
            <motion.div initial={{
          x: '100%'
        }} animate={{
          x: 0
        }} exit={{
          x: '100%'
        }} transition={{
          type: 'spring',
          damping: 25,
          stiffness: 200
        }} className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-card border-l border-border lg:hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xl font-bold gradient-text">Menu</span>
                  <button onClick={() => setIsOpen(false)} className="p-2 rounded-lg bg-muted/50 border border-border hover:border-primary/50 transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="space-y-2">
                  {navItems.map((item, index) => <motion.button key={item.label} initial={{
                opacity: 0,
                x: 20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: index * 0.05
              }} onClick={() => handleNavClick(item.href)} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${activeSection === item.href.replace('#', '') ? 'bg-primary/20 text-foreground border border-primary/50' : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground border border-transparent'}`}>
                      {item.icon}
                      <span>{item.label}</span>
                    </motion.button>)}
                </nav>
              </div>
            </motion.div>
          </>}
      </AnimatePresence>
    </>;
};