import { useRef } from "react";
import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";

interface AnimatedCounterProps {
  value: string;
  label: string;
  index: number;
}

export const AnimatedCounter = ({ value, label, index }: AnimatedCounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  // Extract number and suffix from value (e.g., "50+" -> 50, "+")
  const numericValue = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/\d/g, "");
  
  const count = useCountUp(numericValue, 2000, ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
      className="text-center"
    >
      <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">
        {count}{suffix}
      </div>
      <div className="text-background/50 text-sm">{label}</div>
    </motion.div>
  );
};
