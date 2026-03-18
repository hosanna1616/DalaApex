import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Send, Users, Smartphone } from "lucide-react";

const ImpactCounter = () => {
  const { t } = useLanguage();
  const [count, setCount] = useState(0);
  const target = 247;

  useEffect(() => {
    let start = 0;
    const duration = 2500; // 2.5 seconds
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.8 }}
      className="max-w-7xl mx-auto px-4 mt-8 mb-16"
    >
      <div className="bg-white dark:bg-gray-800/50 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-white/20 dark:border-gray-700/30 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 hover-glow-orange">
        <div className="text-center md:text-left">
          <h3 className="text-[#EB2D8F] font-black text-2xl md:text-3xl uppercase tracking-tighter mb-2">
            {t.impact.title}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 font-bold text-lg">
            {t.impact.label}
          </p>
        </div>
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 bg-gradient-to-br from-[#F57E2E] to-[#EB2D8F] rounded-3xl flex items-center justify-center shadow-lg transform rotate-3">
            <Users className="w-10 h-10 text-white -rotate-3" />
          </div>
          <div className="text-7xl md:text-9xl font-black text-[var(--foreground)] tracking-tighter tabular-nums drop-shadow-sm">
            {count}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Hero = () => {
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll();

  // Smooth spring animations for the phone
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.3], [15, 0]), {
    stiffness: 100,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(scrollYProgress, [0, 0.3], [-15, 0]), {
    stiffness: 100,
    damping: 30,
  });
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.3], [0.85, 1]), {
    stiffness: 100,
    damping: 30,
  });
  const y = useSpring(useTransform(scrollYProgress, [0, 0.3], [0, -20]), {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div id="home" className="relative">
      <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 ethiopian-pattern -z-10" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#EB2D8F]/10 rounded-full blur-[120px] -z-10 animate-pulse" />
        <div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#F57E2E]/10 rounded-full blur-[120px] -z-10 animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center lg:text-left z-10"
          >
            <h1 className="text-5xl md:text-8xl font-black text-[var(--foreground)] leading-[0.95] mb-8 tracking-tighter">
              {t.hero.title.split(" ").map((word, i) => (
                <span key={i} className="inline-block mr-3">
                  {word.includes("Apex") || word.includes("ጫፍ") ? (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB2D8F] to-[#F57E2E]">
                      {word}
                    </span>
                  ) : (
                    word
                  )}
                </span>
              ))}
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-xl font-medium leading-relaxed mx-auto lg:mx-0">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <motion.a
                href="https://dala.gebeya.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#EB2D8F] text-white font-black py-6 px-10 rounded-[2rem] text-xl shadow-[0_20px_50px_-10px_rgba(235,45,143,0.5)] flex items-center justify-center gap-3 transition-all hover:brightness-110 group"
              >
                {t.hero.ctaPrimary}
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </motion.a>
              <motion.a
                href="https://t.me/gebeyadala"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white dark:bg-gray-800 text-[var(--foreground)] font-black py-6 px-10 rounded-[2rem] text-xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center justify-center gap-3 transition-all hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                {t.hero.ctaSecondary}
                <Send className="w-6 h-6 text-[#F57E2E]" />
              </motion.a>
            </div>
          </motion.div>

          {/* 3D Phone Mockup */}
          <div className="perspective-1000 relative z-10">
            <motion.div
              style={{
                rotateX,
                rotateY,
                scale,
                y,
              }}
              initial={{ opacity: 0, rotateY: -45, rotateX: 25, scale: 0.7 }}
              animate={{ opacity: 1, rotateY: -15, rotateX: 15, scale: 0.9 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative w-[280px] md:w-[340px] mx-auto"
            >
              {/* Glow Behind Phone */}
              <div className="absolute -inset-10 bg-gradient-to-br from-[#EB2D8F] to-[#F57E2E] opacity-20 blur-[60px] rounded-full" />

              {/* Phone Frame */}
              <div className="relative z-20 w-full aspect-[9/19.5] bg-black rounded-[3.5rem] p-3 shadow-[0_60px_100px_-20px_rgba(0,0,0,0.6)] border-[8px] border-gray-800 ring-4 ring-gray-900">
                {/* Speaker/Camera Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-2xl z-30" />

                {/* Screen Content - Live Dala Preview */}
                <div className="w-full h-full rounded-[2.8rem] overflow-hidden bg-white relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 pointer-events-none z-10" />
                  <iframe
                    src="https://dala.gebeya.com"
                    className="w-[300%] h-[300%] scale-[0.333] origin-top-left pointer-events-none"
                    title="Dala Preview"
                  />
                  {/* Overlay for realism */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-200/50 rounded-full z-20" />
                </div>

                {/* Physical Buttons */}
                <div className="absolute -right-2 top-32 w-1.5 h-16 bg-gray-800 rounded-l-md" />
                <div className="absolute -left-2 top-28 w-1.5 h-12 bg-gray-800 rounded-r-md" />
                <div className="absolute -left-2 top-44 w-1.5 h-12 bg-gray-800 rounded-r-md" />
              </div>

              {/* Floating UI Badges */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-12 -right-12 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 z-30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#EB2D8F] rounded-full flex items-center justify-center text-white">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-gray-400">
                      LIVE PREVIEW
                    </p>
                    <p className="text-sm font-black">Dala Apex App</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-8 -left-12 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 z-30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F57E2E] rounded-full flex items-center justify-center text-white">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-gray-400">
                      COMMUNITY
                    </p>
                    <p className="text-sm font-black">Join the Tribe</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <ImpactCounter />
    </div>
  );
};

export default Hero;
