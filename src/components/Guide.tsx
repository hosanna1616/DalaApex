
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Guide = () => {
  const { t } = useLanguage();

  return (
    <section id="guide" className="py-24 bg-[var(--background)] transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-8xl font-black text-[var(--foreground)] mb-6 tracking-tighter uppercase">
            {t.guide.title.split(' ').map((word, i) => (
              <span key={i} className={i === 2 ? 'text-[#EB2D8F]' : ''}>{word} </span>
            ))}
          </h2>
          <div className="h-3 w-40 bg-gradient-to-r from-[#F57E2E] to-[#EB2D8F] mx-auto rounded-full shadow-[0_5px_15px_-5px_#F57E2E]"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.guide.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="relative bg-white dark:bg-gray-800 rounded-[3rem] p-10 shadow-2xl border-2 border-[#EB2D8F]/10 dark:border-gray-700/50 hover-glow-pink group transition-all duration-500 flex flex-col items-center text-center"
            >
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-[#EB2D8F] to-[#F57E2E] rounded-[2.5rem] flex items-center justify-center text-white text-4xl font-black shadow-2xl shadow-pink-500/30 transform group-hover:rotate-12 transition-transform">
                {step.num}
              </div>
              <div className="mt-8 flex-grow">
                <p className="text-xl font-black text-[var(--foreground)] tracking-tight leading-relaxed mb-6">
                  {step.text}
                </p>
              </div>
              <div className="w-12 h-12 bg-gray-50 dark:bg-gray-900 rounded-full flex items-center justify-center text-[#EB2D8F] group-hover:bg-[#EB2D8F]/10 transition-colors">
                <ChevronRight className="w-6 h-6" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-20 text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#EB2D8F] to-[#F57E2E] uppercase tracking-widest italic"
        >
          {t.guide.motto}
        </motion.p>
      </div>
    </section>
  );
};

export default Guide;