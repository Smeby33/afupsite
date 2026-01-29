import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Smartphone, Database, Shield, Users, Building2 } from "lucide-react";
import webBg from "../assets/web-bg.svg";
import mobileBg from "../assets/mobile-bg.svg";
import systemBg from "../assets/system-bg.svg";
import securityBg from "../assets/security-bg.svg";
import consultingBg from "../assets/consulting-bg.svg";
import institutionBg from "../assets/institution-bg.svg";

const services = [
  {
    icon: Globe,
    title: "Applications Web",
    description: "Développement de sites web et applications web sur mesure, modernes et performantes.",
    image: "https://picsum.photos/id/1005/400/400",
    href: "/services/web",
  },
  {
    icon: Smartphone,
    title: "Applications Mobiles",
    description: "Création d'applications mobiles natives et hybrides pour iOS et Android.",
    image: "https://picsum.photos/id/1011/400/400",
    href: "/services/mobile",
  },
  {
    icon: Database,
    title: "Systèmes d'Information",
    description: "Conception et déploiement de systèmes d'information adaptés à vos besoins.",
    image: "https://picsum.photos/id/1025/400/400",
    href: "/services/systemes",
  },
  {
    icon: Shield,
    title: "Cybersécurité",
    description: "Audit et mise en place de solutions de sécurité pour protéger vos données.",
    image: "https://picsum.photos/id/1062/400/400",
    href: "/services/securite",
  },
  {
    icon: Users,
    title: "Conseil Digital",
    description: "Accompagnement stratégique dans votre transformation numérique.",
    image: "https://picsum.photos/id/1027/400/400",
    href: "/services/conseil",
  },
  {
    icon: Building2,
    title: "Partenariat Institutionnel",
    description: "Solutions digitales pour les administrations et institutions publiques.",
    image: "https://picsum.photos/id/1041/400/400",
    href: "/services/institutions",
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const bgList = [
    webBg,
    mobileBg,
    systemBg,
    securityBg,
    consultingBg,
    institutionBg,
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nos Services
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            Des solutions adaptées à
            <span className="text-gradient"> chaque besoin</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Que vous soyez un particulier, une entreprise ou une institution, 
            nous avons les compétences pour concrétiser vos projets digitaux.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-500"
              style={{
                backgroundImage: `url(${bgList[index]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* clickable overlay linking the whole card */}
              <a
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`En savoir plus sur ${service.title}`}
                className="absolute inset-0 z-20"
              />

              {/* small thumbnail image on top-right */}
              {service.image && (
                <img
                  src={service.image}
                  alt={`Illustration ${service.title}`}
                  className="absolute top-4 right-4 w-16 h-16 rounded-md object-cover shadow-md z-30"
                />
              )}
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
