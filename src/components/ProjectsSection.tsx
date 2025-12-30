import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, FileCode, Cloud, Container, Server, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Build a Chatbot with Amazon Lex',
    icon: Cloud,
    link: 'https://medium.com/@amna73037/build-a-chatbot-with-amazon-lex-34df80ebcb8b',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Event Announcement Website Project using AWS services',
    icon: Globe,
    link: 'https://medium.com/@amna73037/event-announcement-website-project-using-aws-services-f33120fdfe5e',
    color: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Deploy your first Docker container on AWS ECS Fargate',
    icon: Container,
    link: 'https://medium.com/@amna73037/deploy-your-first-docker-container-on-aws-ecs-forgate-1dfcdb49a181',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Learn Docker and how container runs your apps anywhere',
    icon: FileCode,
    link: 'https://medium.com/@amna73037/learn-docker-and-how-container-runs-your-apps-anywhere-0d90370ae4dd',
    color: 'from-cyan-500 to-teal-500',
  },
  {
    title: 'HOST STATIC WEBSITE ON AWS S3',
    icon: Server,
    link: 'https://medium.com/@amna73037/host-static-website-on-aws-s3-70d00ac8cd1f',
    color: 'from-violet-500 to-purple-500',
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-orb glow-orb-blue w-96 h-96 -left-48 top-1/3 opacity-30" />
        <div className="glow-orb glow-orb-pink w-72 h-72 right-0 bottom-20 opacity-30" />
      </div>

      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text inline-block mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-card group block"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  <span>Read on Medium</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
