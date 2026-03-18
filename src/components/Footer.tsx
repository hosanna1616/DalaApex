import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { Github, Twitter, Instagram, ArrowUp } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--background)] pt-32 pb-16 transition-colors duration-500 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center mb-20">
          <h2 className="text-6xl md:text-9xl font-black text-[var(--foreground)] tracking-tighter uppercase mb-12 text-center">
            Dala <span className="text-[#EB2D8F]">Apex</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-12">
            {["Home", "Guide", "Gallery", "Leaderboard", "Hackathons"].map(
              (link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-lg font-black text-gray-400 hover:text-[#EB2D8F] uppercase tracking-widest transition-colors"
                >
                  {link}
                </a>
              ),
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center pt-20 border-t border-gray-100 dark:border-gray-800">
          <div className="text-center md:text-left">
            <p className="text-xl font-black text-[var(--foreground)] uppercase tracking-tighter mb-2">
              {t.footer.powered}
            </p>
            <p className="text-gray-400 font-bold">
              © {new Date().getFullYear()} Dala Apex. All rights reserved.
            </p>
          </div>

          <div className="flex justify-center md:justify-end gap-6">
            <motion.button
              whileHover={{ y: -5 }}
              onClick={scrollToTop}
              className="w-14 h-14 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center text-[var(--foreground)] shadow-xl hover:bg-[#EB2D8F] hover:text-white transition-all"
            >
              <ArrowUp className="w-6 h-6" />
            </motion.button>
            {[Twitter, Instagram, Github].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -5 }}
                className="w-14 h-14 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center text-[var(--foreground)] shadow-xl hover:bg-[#F57E2E] hover:text-white transition-all"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
