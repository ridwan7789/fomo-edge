import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Parallax } from './Parallax';
import psychologyChart from '@/assets/psychology-chart.jpeg';

export const PsychologySection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const contentX = useTransform(scrollYProgress, [0, 1], ['-20px', '20px']);
  const chartX = useTransform(scrollYProgress, [0, 1], ['20px', '-20px']);
  const chartRotate = useTransform(scrollYProgress, [0, 1], [0, 3]);

  return (
    <section id="psychology" className="py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Parallax background effects */}
      <motion.div 
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-fomo-cyan/10 rounded-full blur-[150px]"
        style={{ y: backgroundY }}
      />
      <motion.div 
        className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-fomo-purple/10 rounded-full blur-[120px]"
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '-20%']) }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content with parallax */}
          <motion.div
            style={{ x: contentX }}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Parallax speed={0.15}>
              <motion.span
                className="inline-block px-4 py-2 rounded-full glass text-fomo-mint text-sm font-medium mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2 }}
              >
                Understanding the Cycle
              </motion.span>

              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
                The Psychology of a{' '}
                <span className="gradient-text">Market Cycle</span>
              </h2>

              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Every cycle repeats. The crowd arrives late. Liquidity exits quietly.
                </p>
                <p className="text-lg leading-relaxed">
                  FOMO was built to detect the <span className="text-foreground font-medium">moment before</span> emotion 
                  takes over. While others chase peaks, you're already positioned.
                </p>
                <p className="text-xl text-foreground font-medium border-l-2 border-fomo-purple pl-6">
                  "You are either early — or exit liquidity."
                </p>
              </div>
            </Parallax>

            {/* Stats with staggered parallax */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              {[
                { value: '< 3s', label: 'Signal Speed' },
                { value: '24/7', label: 'Monitoring' },
                { value: '∞', label: 'Edge' },
              ].map((stat, index) => (
                <Parallax key={stat.label} speed={0.1 * (index + 1)} direction="up">
                  <div className="text-center">
                    <motion.div 
                      className="font-display text-3xl md:text-4xl font-bold gradient-text mb-2"
                      whileHover={{ scale: 1.1 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </Parallax>
              ))}
            </motion.div>
          </motion.div>

          {/* Chart with parallax */}
          <motion.div
            className="relative"
            style={{ x: chartX }}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-fomo opacity-20 blur-[40px] scale-105 rounded-3xl" />
              
              <motion.div
                className="relative glass-strong rounded-3xl p-4 overflow-hidden"
                style={{ rotate: chartRotate }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <img
                  src={psychologyChart}
                  alt="Psychology of Market Cycle"
                  className="w-full rounded-2xl"
                />
                
                {/* Pulse indicator on FOMO peak */}
                <motion.div
                  className="absolute top-[30%] left-[45%] w-4 h-4"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: [1, 1.5, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-full h-full rounded-full bg-fomo-purple animate-ping" />
                  <div className="absolute inset-0 w-full h-full rounded-full bg-fomo-purple" />
                </motion.div>
              </motion.div>

              {/* Floating decorative elements */}
              <Parallax speed={0.3} direction="down">
                <motion.div
                  className="absolute -bottom-4 -right-4 px-4 py-2 glass rounded-xl text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-fomo-mint">●</span> Live Market Data
                </motion.div>
              </Parallax>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
