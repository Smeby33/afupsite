import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Target, Lightbulb, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "Nous visons l'excellence dans chaque projet que nous réalisons.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Nous adoptons les dernières technologies pour des solutions modernes.",
  },
  {
    icon: Award,
    title: "Engagement",
    description: "Nous nous engageons à livrer des résultats qui dépassent les attentes.",
  },
];

const highlights = [
  "Équipe de développeurs expérimentés",
  "Méthodologies agiles et modernes",
  "Support et maintenance continus",
  "Respect des délais et du budget",
  "Solutions évolutives et pérennes",
  "Accompagnement personnalisé",
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="apropos"
      ref={ref}
      className="section-padding bg-foreground text-background relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              À Propos
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
              Votre partenaire digital
              <span className="text-gradient"> de confiance</span>
            </h2>
            <p className="text-background/70 text-lg mb-8 leading-relaxed">
              AFUP Technology est une startup gabonaise basée à Libreville, 
              spécialisée dans le développement de solutions digitales innovantes. 
              Notre mission est d'accompagner la transformation numérique des 
              entreprises, des particuliers et des institutions publiques au Gabon 
              et dans la sous-région.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-background/80 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right content - Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                whileHover={{ x: 10, transition: { duration: 0.3 } }}
                className="group p-6 bg-background/5 backdrop-blur-sm rounded-2xl border border-background/10 hover:border-primary/50 transition-all duration-500"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-background/60">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
