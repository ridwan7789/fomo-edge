import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Parallax } from './Parallax';
import fomoBackground from '@/assets/fomo-background.jpeg';

export const BrandSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 0.95]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  return (
    <section className="py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Parallax background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-fomo-purple/5 to-transparent"
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '10%']) }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <Parallax speed={0.2}>
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              The <span className="gradient-text">FOMO</span> Brand
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A symbol of speed, precision, and the edge that separates winners from exit liquidity.
            </p>
          </motion.div>
        </Parallax>

        <motion.div
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {/* Glow effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-fomo opacity-20 blur-[50px] scale-105 rounded-3xl"
            style={{ scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]) }}
          />
          
          <motion.div
            className="relative glass-strong rounded-3xl p-8 overflow-hidden"
            style={{ scale: imageScale, rotate: imageRotate }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <img
              src={fomoBackground}
              alt="FOMO Brand Variations"
              className="w-full rounded-2xl"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent rounded-3xl" />
          </motion.div>

          {/* Floating badges with parallax */}
          <Parallax speed={0.4} direction="down">
            <motion.div
              className="absolute -top-4 -right-4 px-4 py-2 glass rounded-xl text-sm font-medium"
              whileHover={{ scale: 1.1 }}
            >
              <span className="gradient-text">Brand Assets</span>
            </motion.div>
          </Parallax>

          <Parallax speed={0.3} direction="up">
            <motion.div
              className="absolute -bottom-4 -left-4 px-4 py-2 glass rounded-xl text-sm font-medium"
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-fomo-mint">Multiple Variants</span>
            </motion.div>
          </Parallax>
        </motion.div>
      </div>
    </section>
  );
};
