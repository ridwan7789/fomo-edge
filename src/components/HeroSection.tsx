import { motion } from 'framer-motion';
import { ParticleBackground } from './ParticleBackground';
import fomoMascot from '@/assets/fomo-mascot.jpeg';
import { ChevronDown, Zap, Signal } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <ParticleBackground />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-fomo-purple/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-fomo-cyan/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-fomo-mint/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-fomo-cyan font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-2 h-2 rounded-full bg-fomo-mint animate-pulse" />
              Live on Solana
            </motion.span>

            <motion.h1
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="text-foreground">gm </span>
              <span className="gradient-text">degens</span>
              <span className="text-foreground"> 👋</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-4 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Most traders don't lose because they're wrong.
            </motion.p>
            <motion.p
              className="text-xl md:text-2xl text-foreground mb-8 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              They lose because they're <span className="gradient-text">late</span>.
            </motion.p>

            <motion.p
              className="text-muted-foreground max-w-xl mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              FOMO is a Solana memecoin utility built for speed, signal, and survival. 
              Designed for traders who want to move before the crowd, not after it.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                className="btn-primary flex items-center justify-center gap-2 text-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap size={20} />
                Enter FOMO
              </motion.button>
              <motion.button
                className="btn-secondary flex items-center justify-center gap-2 text-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Signal size={20} />
                View On-Chain Signals
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Mascot */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="relative">
              {/* Glow behind mascot */}
              <div className="absolute inset-0 bg-gradient-fomo opacity-30 blur-[60px] scale-110 rounded-full" />
              
              <motion.div
                className="relative"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src={fomoMascot}
                  alt="FOMO Mascot"
                  className="w-full max-w-md lg:max-w-lg rounded-3xl shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0 0 40px rgba(168, 85, 247, 0.4))',
                  }}
                />
                
                {/* Floating elements around mascot */}
                <motion.div
                  className="absolute -top-4 -right-4 p-3 glass rounded-xl"
                  animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-2xl">🚀</span>
                </motion.div>
                <motion.div
                  className="absolute top-1/4 -left-8 p-3 glass rounded-xl"
                  animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <span className="text-2xl">⚡</span>
                </motion.div>
                <motion.div
                  className="absolute bottom-1/4 -right-8 p-3 glass rounded-xl"
                  animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <span className="text-2xl">💎</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-muted-foreground cursor-pointer"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-sm">Scroll to explore</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};
