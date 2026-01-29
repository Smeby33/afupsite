import { ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
  zIndex: number;
}

export const ScrollSection = ({ children, className = "", zIndex }: ScrollSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Create shadow that appears as section scrolls
  const boxShadow = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["0 -20px 60px rgba(0,0,0,0)", "0 -20px 60px rgba(0,0,0,0.3)"]
  );

  // Fade in effect
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0.8]
  );

  // Slight scale effect for depth
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2],
    [0.95, 1]
  );

  return (
    <motion.div
      ref={ref}
      style={{ 
        zIndex,
        boxShadow,
        opacity,
        scale,
        position: "relative"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
