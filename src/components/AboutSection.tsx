import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cloud, Network, Server } from 'lucide-react';

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-orb glow-orb-blue w-64 h-64 top-1/4 -right-20 opacity-50" />
      </div>

      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text inline-block mb-4">About</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Icons/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-6"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="glass-card flex items-center justify-center w-24 h-24"
            >
              <Cloud className="w-12 h-12 text-primary" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="glass-card flex items-center justify-center w-24 h-24 mt-12"
            >
              <Network className="w-12 h-12 text-accent" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="glass-card flex items-center justify-center w-24 h-24"
            >
              <Server className="w-12 h-12 text-secondary" />
            </motion.div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Cloud and networking enthusiast, currently preparing for the AWS Solutions Architect Associate exam. I have hands-on experience with AWS services, including EC2, S3, and CloudWatch, along with expertise in networking concepts like switching, routing, and network configurations. Additionally, I have practical experience with Cisco Packet Tracer for network simulations. Passionate about bridging the gap between traditional networking and cloud technologies, I aim to deepen my expertise and contribute to the cloud community through continuous learning and innovation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
