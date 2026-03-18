import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Rocket, Sparkles, Star } from 'lucide-react';
import { toast } from 'sonner';

const Challenge = () => {
  const { t } = useLanguage();

  return (
    <section id="challenge" className="py-24 bg-[var(--background)] transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-[#EB2D8F] to-[#F57E2E] rounded-[4rem] p-12 md:p-24 shadow-3xl text-white overflow-hidden text-center"
        >
          <div className="absolute inset-0 ethiopian-pattern opacity-10" />
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/20 text-white font-black text-xs uppercase tracking-widest mb-10 backdrop-blur-md border border-white/30 animate-float">
              <Rocket className="w-4 h-4" />
              ACTIVE CHALLENGE
            </div>
            <h2 className="text-5xl md:text-9xl font-black mb-6 tracking-tighter uppercase drop-shadow-lg leading-[0.9]">
              {t.challenge.title}
            </h2>
            <p className="text-xl md:text-3xl font-bold opacity-90 mb-20 max-w-2xl mx-auto tracking-tight">
              {t.challenge.subtitle}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {t.challenge.prompts.map((prompt, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 1 : -1 }}
                  onClick={() => toast.success('Challenge Accepted!', { description: 'Launch Dala to start building!' })}
                  className="bg-white/10 backdrop-blur-xl p-10 rounded-[3rem] border border-white/20 shadow-2xl cursor-pointer hover:bg-white/20 transition-all flex flex-col items-center justify-center group"
                >
                  <div className="w-16 h-16 bg-white rounded-[1.5rem] flex items-center justify-center mb-8 shadow-xl transform group-hover:scale-110 transition-transform">
                    <Sparkles className="w-8 h-8 text-[#EB2D8F]" />
                  </div>
                  <p className="text-lg font-black text-center tracking-tight leading-relaxed group-hover:text-white transition-colors">
                    "{prompt}"
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-10">
              {t.challenge.badges.map((badge, index) => (
                <div key={index} className="flex items-center gap-3 px-8 py-4 bg-black/20 rounded-2xl border border-white/10 shadow-lg">
                  <Star className="w-6 h-6 text-[#F57E2E] fill-[#F57E2E]" />
                  <span className="font-black text-sm md:text-lg uppercase tracking-widest">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Challenge;