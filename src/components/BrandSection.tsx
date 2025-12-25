import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import fomoBackground from '@/assets/fomo-background.jpeg';

export const BrandSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fomo-purple/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
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

        <motion.div
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-fomo opacity-20 blur-[50px] scale-105 rounded-3xl" />
          
          <motion.div
            className="relative glass-strong rounded-3xl p-8 overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={fomoBackground}
              alt="FOMO Brand Variations"
              className="w-full rounded-2xl"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent rounded-3xl" />
          </motion.div>

          {/* Floating badges */}
          <motion.div
            className="absolute -top-4 -right-4 px-4 py-2 glass rounded-xl text-sm font-medium"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="gradient-text">Brand Assets</span>
          </motion.div>

          <motion.div
            className="absolute -bottom-4 -left-4 px-4 py-2 glass rounded-xl text-sm font-medium"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <span className="text-fomo-mint">Multiple Variants</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
