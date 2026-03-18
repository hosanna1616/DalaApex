import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { Menu, X, Globe, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.guide, href: "#guide" },
    { name: t.nav.gallery, href: "#gallery" },
    { name: t.nav.challenge, href: "#challenge" },
    { name: t.nav.leaderboard, href: "#leaderboard" },
    { name: t.nav.collaborate, href: "#collaborate" },
    { name: t.nav.hackathons, href: "#hackathons" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-[var(--background)]/70 dark:bg-gray-900/70 backdrop-blur-2xl rounded-[2.5rem] border border-white/20 dark:border-gray-800/50 shadow-2xl h-20 px-8 flex items-center justify-between transition-all duration-500">
          <div className="flex items-center space-x-4">
            <motion.img
              src="/dala-apex-logo.png"
              alt="Dala Apex logo"
              whileHover={{ rotate: 360, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-12 h-12 rounded-2xl object-contain shadow-xl"
            />
            <span className="font-black text-[var(--foreground)] text-2xl tracking-tighter uppercase">
              Dala <span className="text-[#EB2D8F]">Apex</span>
            </span>
          </div>

          <div className="hidden xl:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[var(--foreground)]/60 hover:text-[#EB2D8F] font-black text-xs uppercase tracking-widest transition-all"
              >
                {item.name}
              </a>
            ))}

            <div className="flex items-center space-x-4 border-l border-gray-200 dark:border-gray-700 pl-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleLanguage}
                className="flex items-center space-x-2 px-5 py-2.5 rounded-2xl bg-gray-100 dark:bg-gray-800 hover:bg-[#EB2D8F]/10 transition-colors border border-transparent hover:border-[#EB2D8F]/20"
              >
                <Globe className="w-4 h-4 text-[#EB2D8F]" />
                <span className="font-black text-[#EB2D8F] text-xs uppercase">
                  {language === "en" ? "English" : "\u12a0\u121b\u122d\u129b"}
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1, rotate: 12 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-3 rounded-2xl bg-gray-100 dark:bg-gray-800 text-[var(--foreground)] hover:bg-[#F57E2E]/10 transition-all shadow-md"
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  <Moon className="w-5 h-5 text-indigo-500" />
                ) : (
                  <Sun className="w-5 h-5 text-[#F57E2E]" />
                )}
              </motion.button>
            </div>
          </div>

          <div className="xl:hidden flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-3 rounded-2xl bg-gray-100 dark:bg-gray-800"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-indigo-500" />
              ) : (
                <Sun className="w-5 h-5 text-[#F57E2E]" />
              )}
            </button>
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 rounded-2xl bg-gray-100 dark:bg-gray-800 text-xs font-black text-[#EB2D8F]"
            >
              {language === "en" ? "EN" : "\u12a0\u121b"}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-2xl bg-gray-100 dark:bg-gray-800 text-[var(--foreground)]"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="xl:hidden fixed top-32 left-4 right-4 z-[99]"
          >
            <div className="bg-[var(--background)]/95 dark:bg-gray-900/95 backdrop-blur-2xl rounded-[3rem] p-10 shadow-3xl border border-white/20 dark:border-gray-800/50 space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-3xl font-black text-[var(--foreground)] hover:text-[#EB2D8F] tracking-tighter uppercase"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
