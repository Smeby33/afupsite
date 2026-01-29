import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Building2, ShoppingBag, GraduationCap } from "lucide-react";

const projects = [
  {
    icon: Building2,
    category: "Secteur Public",
    title: "Portail Administratif",
    description: "Plateforme de gestion des services publics pour une administration ministérielle.",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    icon: ShoppingBag,
    category: "E-Commerce",
    title: "Marketplace Locale",
    description: "Solution e-commerce complète pour connecter les vendeurs locaux aux consommateurs.",
    tags: ["Next.js", "Stripe", "MongoDB"],
  },
  {
    icon: GraduationCap,
    category: "Éducation",
    title: "Plateforme E-Learning",
    description: "Système de formation en ligne avec suivi des apprenants et certification.",
    tags: ["Vue.js", "Django", "AWS"],
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projets"
      ref={ref}
      className="section-padding bg-secondary/30 relative overflow-hidden"
    >
      <div className="container-custom relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nos Réalisations
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            Projets qui font la
            <span className="text-gradient"> différence</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Découvrez quelques-uns de nos projets phares qui illustrent notre 
            expertise et notre engagement envers l'excellence.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500"
            >
              {/* Project card header */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center"
                >
                  <project.icon className="w-10 h-10 text-primary" />
                </motion.div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Project card content */}
              <div className="p-6">
                <span className="text-primary text-sm font-medium">{project.category}</span>
                <h3 className="font-display text-xl font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-primary font-medium text-sm group/link"
                >
                  Voir le projet
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-primary font-medium text-sm group/link"
                >
                  Voir notre Marketplace
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
