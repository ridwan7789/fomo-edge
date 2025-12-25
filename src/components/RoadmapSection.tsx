import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Parallax } from './Parallax';
import { Rocket, Signal, Bot, Globe } from 'lucide-react';

const phases = [
  {
    phase: 'Phase 1',
    title: 'Genesis',
    icon: Rocket,
    items: ['Core bot development', 'Solana integration', 'Private testing'],
    status: 'completed',
  },
  {
    phase: 'Phase 2',
    title: 'Signal Layer',
    icon: Signal,
    items: ['Advanced on-chain analytics', 'Wallet behavior tracking', 'Early sniper alerts'],
    status: 'active',
  },
  {
    phase: 'Phase 3',
    title: 'Automation',
    icon: Bot,
    items: ['Smart execution tools', 'Risk modules', 'Adaptive strategies'],
    status: 'upcoming',
  },
  {
    phase: 'Phase 4',
    title: 'Expansion',
    icon: Globe,
    items: ['Multi-feature ecosystem', 'Community-driven signals', 'Continuous optimization'],
    status: 'upcoming',
  },
];

export const RoadmapSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const lineProgress = useTransform(scrollYProgress, [0.2, 0.8], ['0%', '100%']);

  return (
    <section id="roadmap" className="py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Parallax Background */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-fomo-purple/5 rounded-full blur-[150px]"
        style={{ y: backgroundY }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <Parallax speed={0.15}>
          <motion.div
            className="text-center max-w-2xl mx-auto mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block px-4 py-2 rounded-full glass text-fomo-peach text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              The Path Forward
            </motion.span>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Roadmap</span>
            </h2>
            
            <p className="text-muted-foreground text-lg">
              Building the future of on-chain intelligence, one phase at a time.
            </p>
          </motion.div>
        </Parallax>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Animated connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block overflow-hidden">
            <motion.div 
              className="w-full bg-gradient-to-b from-fomo-purple via-fomo-cyan to-fomo-mint"
              style={{ height: lineProgress }}
            />
          </div>

          <div className="space-y-12 lg:space-y-0">
            {phases.map((phase, index) => (
              <Parallax 
                key={phase.phase} 
                speed={0.1 * (index + 1)} 
                direction={index % 2 === 0 ? 'up' : 'down'}
              >
                <motion.div
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-12 items-center mb-16 ${
                    index % 2 === 0 ? '' : 'lg:direction-rtl'
                  }`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center justify-center z-10">
                    <motion.div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        phase.status === 'completed'
                          ? 'bg-fomo-mint'
                          : phase.status === 'active'
                          ? 'bg-gradient-fomo animate-pulse'
                          : 'glass border-2 border-border'
                      }`}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <phase.icon className={`w-5 h-5 ${
                        phase.status === 'upcoming' ? 'text-muted-foreground' : 'text-background'
                      }`} />
                    </motion.div>
                  </div>

                  {/* Content card */}
                  <div className={`${index % 2 === 0 ? 'lg:pr-20 lg:text-right' : 'lg:col-start-2 lg:pl-20'}`}>
                    <motion.div
                      className={`feature-card ${
                        phase.status === 'active' ? 'border-fomo-purple/50 glow-purple' : ''
                      }`}
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                        <div className={`lg:hidden w-10 h-10 rounded-full flex items-center justify-center ${
                          phase.status === 'completed'
                            ? 'bg-fomo-mint'
                            : phase.status === 'active'
                            ? 'bg-gradient-fomo'
                            : 'glass border border-border'
                        }`}>
                          <phase.icon className={`w-4 h-4 ${
                            phase.status === 'upcoming' ? 'text-muted-foreground' : 'text-background'
                          }`} />
                        </div>
                        <div>
                          <span className="text-fomo-cyan text-sm font-medium">{phase.phase}</span>
                          <h3 className="font-display text-2xl font-bold">{phase.title}</h3>
                        </div>
                      </div>

                      <ul className={`space-y-2 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                        {phase.items.map((item, i) => (
                          <motion.li
                            key={i}
                            className="text-muted-foreground flex items-center gap-2"
                            style={{ justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start' }}
                            initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.4 + index * 0.1 + i * 0.05 }}
                          >
                            {index % 2 !== 0 && (
                              <span className={`w-1.5 h-1.5 rounded-full ${
                                phase.status === 'completed' ? 'bg-fomo-mint' : 'bg-fomo-purple'
                              }`} />
                            )}
                            {item}
                            {index % 2 === 0 && (
                              <span className={`w-1.5 h-1.5 rounded-full ${
                                phase.status === 'completed' ? 'bg-fomo-mint' : 'bg-fomo-purple'
                              }`} />
                            )}
                          </motion.li>
                        ))}
                      </ul>

                      {phase.status === 'active' && (
                        <motion.div 
                          className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fomo-purple/20 text-fomo-purple text-sm"
                          animate={{ scale: [1, 1.02, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <span className="w-2 h-2 rounded-full bg-fomo-purple animate-pulse" />
                          In Progress
                        </motion.div>
                      )}
                    </motion.div>
                  </div>

                  {/* Empty column for alternating layout */}
                  <div className={`hidden lg:block ${index % 2 === 0 ? 'lg:col-start-2' : ''}`} />
                </motion.div>
              </Parallax>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
