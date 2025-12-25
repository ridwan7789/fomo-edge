import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Parallax } from './Parallax';
import fomoLogo from '@/assets/fomo-logo.jpeg';

export const Footer = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"]
  });

  const logoScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['50px', '0px']);

  return (
    <footer id="footer" className="relative py-20 overflow-hidden" ref={sectionRef}>
      {/* Top glow line */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-fomo-purple to-transparent"
        style={{ scaleX: useTransform(scrollYProgress, [0, 0.5], [0, 1]) }}
      />

      {/* Parallax Background */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-fomo-purple/10 rounded-full blur-[150px]"
        style={{ y: useTransform(scrollYProgress, [0, 1], ['50%', '0%']) }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center text-center"
          style={{ y: contentY }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo with parallax scale */}
          <motion.div style={{ scale: logoScale }}>
            <motion.img
              src={fomoLogo}
              alt="FOMO"
              className="w-24 h-24 rounded-full mb-8 shadow-lg"
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                filter: 'drop-shadow(0 0 30px rgba(168, 85, 247, 0.4))',
              }}
            />
          </motion.div>

          <Parallax speed={0.1}>
            <motion.h2
              className="font-display text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <span className="gradient-text">FOMO</span>
            </motion.h2>

            <motion.p
              className="text-xl text-muted-foreground mb-10 max-w-md"
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Be early. Or be <span className="text-foreground">exit liquidity</span>.
            </motion.p>
          </Parallax>

          {/* Social Links */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <motion.a
              href="https://x.com/FomoofChain"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 glass rounded-xl hover:border-fomo-purple/50 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span className="font-medium">Twitter / X</span>
            </motion.a>

            <motion.a
              href="https://t.me/Fomoofchain"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 glass rounded-xl hover:border-fomo-cyan/50 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
              </svg>
              <span className="font-medium">Telegram</span>
            </motion.a>

            <motion.a
              href="https://docs.fomoofchain.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 glass rounded-xl hover:border-fomo-cyan/50 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5.242 6.4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4.4l-2 2V18c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V8.4c0-.6.4-1 1-1h.242c.56 0 1.029-.448 1-1-.03-.552-.44-.982-1-.982zM21 3c0 .6-.4 1-1 1h-5c-.6 0-1-.4-1-1s.4-1 1-1h4V.5c0-.3.2-.5.5-.5s.5.2.5.5V3zm-5.5 4c-.3 0-.5.2-.5.5v5c0 .3.2.5.5.5h5c.3 0 .5-.2.5-.5v-5c0-.3-.2-.5-.5-.5h-5zm-9 6c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2h-5zm.5 2h4c.3 0 .5.2.5.5v4c0 .3-.2.5-.5.5h-4c-.3 0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5z" />
              </svg>
              <span className="font-medium">Docs</span>
            </motion.a>
          </motion.div>

          {/* Divider */}
          <motion.div
            className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          {/* Copyright */}
          <motion.p
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            © {new Date().getFullYear()} FOMO. Engineered for the edge.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};
