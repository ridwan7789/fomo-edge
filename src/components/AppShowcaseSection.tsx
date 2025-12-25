import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Play } from 'lucide-react';
import fomoPreview from '@/assets/fomo-preview.mp4';
import momoDemo from '@/assets/momo-demo.mp4';
import fomoApk from '@/assets/fomo-apk.jpeg';

export const AppShowcaseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="app" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background effects */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-fomo-purple/15 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-fomo-cyan/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full glass text-fomo-purple text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            See It In Action
          </motion.span>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Experience the{' '}
            <span className="gradient-text">FOMO Edge</span>
          </h2>

          <p className="text-muted-foreground text-lg">
            Watch how FOMO transforms your trading experience with real-time signals and lightning-fast execution.
          </p>
        </motion.div>

        {/* Videos Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Video 1 */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-fomo opacity-20 blur-[30px] scale-105 rounded-3xl" />
            <div className="relative glass-strong rounded-3xl overflow-hidden">
              <video
                src={fomoPreview}
                className="w-full aspect-video object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-display text-xl font-semibold mb-2">FOMO Preview</h3>
                <p className="text-sm text-muted-foreground">Discover how FOMO works</p>
              </div>
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-6 h-6 text-foreground ml-1" />
              </motion.div>
            </div>
          </motion.div>

          {/* Video 2 */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-fomo-cyan/20 blur-[30px] scale-105 rounded-3xl" />
            <div className="relative glass-strong rounded-3xl overflow-hidden">
              <video
                src={momoDemo}
                className="w-full aspect-video object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-display text-xl font-semibold mb-2">Live Demo</h3>
                <p className="text-sm text-muted-foreground">Real-time trading in action</p>
              </div>
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-6 h-6 text-foreground ml-1" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* App Mockup Section */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              className="relative order-2 lg:order-1"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 bg-gradient-fomo opacity-30 blur-[60px] scale-110 rounded-3xl" />
              <img
                src={fomoApk}
                alt="FOMO App"
                className="relative w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 0 40px rgba(168, 85, 247, 0.3))',
                }}
              />
            </motion.div>

            {/* Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Always in Your{' '}
                <span className="gradient-text">Pocket</span>
              </h3>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Access FOMO anywhere, anytime. Get instant notifications on token movements, 
                execute trades on the go, and never miss an opportunity again.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <motion.button
                  className="btn-primary"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download App
                </motion.button>
                <motion.button
                  className="btn-secondary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
