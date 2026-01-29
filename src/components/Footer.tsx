import { motion } from "framer-motion";
import logoAfup from "@/assets/logo-afup.jpeg";

const footerLinks = {
  services: [
    { name: "Applications Web", href: "#services" },
    { name: "Applications Mobiles", href: "#services" },
    { name: "Conseil Digital", href: "#services" },
    { name: "Cybersécurité", href: "#services" },
  ],
  company: [
    { name: "À Propos", href: "#apropos" },
    { name: "Nos Projets", href: "#projets" },
    { name: "Carrières", href: "#" },
    { name: "Blog", href: "#" },
  ],
  legal: [
    { name: "Politique de confidentialité", href: "#" },
    { name: "Conditions d'utilisation", href: "#" },
    { name: "Mentions légales", href: "#" },
  ],
};

export const Footer = () => {
  const socialLinks = [
    { name: "LinkedIn", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "Facebook", href: "https://www.facebook.com/share/1815c5RhbE/" },
  ];
  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container-custom px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <motion.a
              href="#accueil"
              whileHover={{ scale: 1.05 }}
              className="inline-block mb-6"
            >
              <img
                src={logoAfup}
                alt="AFUP Technology"
                className="h-14 w-auto object-contain bg-background rounded-lg p-2"
              />
            </motion.a>
            <p className="text-background/60 mb-6 leading-relaxed">
              Votre partenaire de confiance pour la transformation digitale 
              au Gabon et en Afrique Centrale.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <span className="text-xs font-semibold">{social.name[0]}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Entreprise</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Légal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/50 text-sm">
              © 2024 AFUP Technology. Tous droits réservés.
            </p>
            <p className="text-background/50 text-sm">
              Conçu par l' équipe MNS ProblemSolver d'AFUP Technology à Libreville, Gabon
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
