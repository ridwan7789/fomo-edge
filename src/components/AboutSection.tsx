import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Parallax } from './Parallax';
import { Radar, Zap, Activity, Shield } from 'lucide-react';

const features = [
  {
    icon: Radar,
    title: 'Early Token Tracking',
    description: 'Real-time discovery before Twitter hype. Spot opportunities when they emerge.',
    gradient: 'from-fomo-purple to-fomo-cyan',
  },
  {
    icon: Zap,
    title: 'Fast Execution',
    description: 'Built for Solana speed. No lag. No delay. Execute when timing matters.',
    gradient: 'from-fomo-cyan to-fomo-mint',
  },
  {
    icon: Activity,
    title: 'On-Chain Signals',
    description: 'Wallet movements, volume spikes, smart money traces. Data that moves markets.',
    gradient: 'from-fomo-mint to-fomo-peach',
  },
  {
    icon: Shield,
    title: 'Risk Protection',
    description: 'Filters, warnings, and psychological guardrails. Trade with conviction, not emotion.',
    gradient: 'from-fomo-peach to-fomo-purple',
  },
];

export const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const titleY = useTransform(scrollYProgress, [0, 1], ['0px', '-30px']);

  return (
    <section id="about" className="py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Parallax background accent */}
      <motion.div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-fomo-purple/10 rounded-full blur-[150px]"
        style={{ y: backgroundY }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          style={{ y: titleY }}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full glass text-fomo-cyan text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Why FOMO?
          </motion.span>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Because most traders don't lose money by being{' '}
            <span className="gradient-text">wrong</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            They lose because they're <span className="text-foreground font-medium">late</span>. 
            FOMO exists to eliminate hesitation and delay — replacing it with data, speed, and conviction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Parallax key={feature.title} speed={0.1 * (index + 1)} direction={index % 2 === 0 ? 'up' : 'down'}>
              <motion.div
                className="feature-card group h-full"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-0.5 mb-6`}>
                  <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-foreground" />
                  </div>
                </div>
                
                <h3 className="font-display text-xl font-semibold mb-3 group-hover:gradient-text transition-all">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              </motion.div>
            </Parallax>
          ))}
        </div>
      </div>
    </section>
  );
};
