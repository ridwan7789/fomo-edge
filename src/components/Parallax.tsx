import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  direction?: 'up' | 'down';
}

export const Parallax = ({ 
  children, 
  speed = 0.5, 
  className = '',
  direction = 'up'
}: ParallaxProps) => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const multiplier = direction === 'up' ? -1 : 1;
  const y = useTransform(scrollYProgress, [0, 1], [100 * speed * multiplier, -100 * speed * multiplier]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
}

export const ParallaxSection = ({ children, className = '' }: ParallaxSectionProps) => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  return (
    <motion.div 
      ref={ref} 
      style={{ opacity, scale }} 
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface ParallaxBackgroundProps {
  className?: string;
  speed?: number;
}

export const ParallaxBackground = ({ className = '', speed = 0.3 }: ParallaxBackgroundProps) => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]);

  return (
    <motion.div 
      ref={ref}
      style={{ y }}
      className={`absolute inset-0 pointer-events-none ${className}`}
    />
  );
};
