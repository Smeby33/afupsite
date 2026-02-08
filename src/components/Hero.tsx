import { motion } from "framer-motion";
import { ArrowRight, Code2, Sparkles } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

export const Hero = () => {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-foreground"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0">
        {/* Green glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]"
        />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--afup-white)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--afup-white)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container-custom relative z-10 px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-primary text-sm font-medium">Basé à Libreville, Gabon</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-background leading-tight mb-6"
        >
          Transformons vos idées en
          <span className="block mt-2">
            <span className="text-gradient">solutions digitales</span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-background/60 text-lg md:text-xl max-w-2xl mx-auto mb-12"
        >
          afup Technology conçoit des logiciels web et des solutions numériques 
          innovantes pour les particuliers, les entreprises et les institutions publiques.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg transition-all duration-300 glow-green animate-pulse-glow"
          >
            Découvrir nos services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          
          <motion.a
            href="#projets"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-4 border border-background/30 text-background rounded-full font-semibold text-lg hover:bg-background/10 transition-all duration-300"
          >
            <Code2 className="w-5 h-5" />
            Voir nos projets
          </motion.a>
        </motion.div>

        {/* Stats with animated counters */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: "50+", label: "Projets réalisés" },
            { value: "30+", label: "Clients satisfaits" },
            { value: "5+", label: "Années d'expérience" },
            { value: "24+", label: "Support technique" },
          ].map((stat, index) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              label={stat.label}
              index={index}
            />
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-background/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
