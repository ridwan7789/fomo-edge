import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import fomoLogo from '@/assets/fomo-logo.jpeg';

interface DownloadPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadPopup = ({ isOpen, onClose }: DownloadPopupProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative glass-strong rounded-3xl p-8 max-w-md w-full overflow-hidden"
            initial={{ scale: 0.8, rotateY: 90 }}
            animate={{
              scale: 1,
              rotateY: 0,
              rotateX: 0
            }}
            exit={{ scale: 0.8, rotateY: -90 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 300,
              duration: 0.6
            }}
            onClick={(e) => e.stopPropagation()}
            style={{
              transformStyle: 'preserve-3d',
              perspective: '1000px',
            }}
          >
            {/* 3D Card Effect */}
            <div className="absolute inset-0 bg-gradient-fomo opacity-20 blur-xl -z-10" />

            {/* Close Button */}
            <button
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted/50 transition-colors"
              onClick={onClose}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="text-center py-6">
              <motion.div
                className="mx-auto w-20 h-20 rounded-full bg-gradient-fomo p-1 mb-6"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <img
                    src={fomoLogo}
                    alt="FOMO Logo"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
              </motion.div>

              <h3 className="font-display text-2xl font-bold mb-4">
                FOMO App is <span className="gradient-text">Optimizing</span>
              </h3>

              <p className="text-muted-foreground mb-6">
                We're enhancing your trading experience with cutting-edge features.
                The optimized version will be available soon!
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span>Performance Boost</span>
                  <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-fomo-purple rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.2, duration: 1.5 }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span>Speed Enhancement</span>
                  <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-fomo-cyan rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "95%" }}
                      transition={{ delay: 0.4, duration: 1.5 }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span>Security Upgrade</span>
                  <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-fomo-mint rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "85%" }}
                      transition={{ delay: 0.6, duration: 1.5 }}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-2">
                  Explore our documentation while you wait:
                </p>
                <a
                  href="https://docs.fomoofchain.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fomo-cyan hover:text-fomo-mint transition-colors text-sm underline"
                >
                  docs.fomoofchain.xyz
                </a>
              </div>

              <motion.button
                className="btn-secondary w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClose}
              >
                Stay Updated
              </motion.button>
            </div>

            {/* Floating particles for 3D effect */}
            <motion.div
              className="absolute top-4 left-4 w-2 h-2 bg-fomo-purple rounded-full"
              animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-8 right-6 w-1.5 h-1.5 bg-fomo-cyan rounded-full"
              animate={{ y: [0, 10, 0], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div
              className="absolute top-1/3 right-4 w-1 h-1 bg-fomo-mint rounded-full"
              animate={{ x: [0, 5, 0], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: 0.8 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};