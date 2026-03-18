import { useLanguage } from "../context/LanguageContext";
import {
  Trophy,
  Award,
  User,
  ArrowUpRight,
  Star,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

const Leaderboard = () => {
  const { t } = useLanguage();

  const getBadgeIcon = (badge: string) => {
    if (badge === t.leaderboard.badges.igniter)
      return <Trophy className="w-5 h-5 text-[#F57E2E]" />;
    return <Award className="w-5 h-5 text-[#EB2D8F]" />;
  };

  return (
    <section
      id="leaderboard"
      className="py-24 bg-[var(--background)] transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-[#EB2D8F]/10 text-[#EB2D8F] font-black text-xs uppercase tracking-widest mb-6 border border-[#EB2D8F]/20">
            <Star className="w-4 h-4 fill-[#EB2D8F]" />
            TOP BUILDERS
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-[var(--foreground)] mb-6 tracking-tighter">
            {t.leaderboard.title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium">
            {t.leaderboard.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden border-2 border-transparent dark:border-gray-700/50 transition-all hover-glow-orange group"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50 dark:bg-gray-900/50 border-b border-gray-100 dark:border-gray-700 transition-colors">
                  <th className="px-10 py-8 font-black uppercase text-xs tracking-[0.2em] text-gray-400">
                    {t.leaderboard.columns.rank}
                  </th>
                  <th className="px-10 py-8 font-black uppercase text-xs tracking-[0.2em] text-gray-400">
                    {t.leaderboard.columns.builder}
                  </th>
                  <th className="px-10 py-8 font-black uppercase text-xs tracking-[0.2em] text-gray-400">
                    {t.leaderboard.columns.impact}
                  </th>
                  <th className="px-10 py-8 font-black uppercase text-xs tracking-[0.2em] text-gray-400">
                    {t.leaderboard.columns.badge}
                  </th>
                </tr>
              </thead>
              <tbody>
                {t.leaderboard.demoData.map((builder, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="border-b border-gray-50 dark:border-gray-700/50 hover:bg-gray-50/80 dark:hover:bg-gray-900/80 transition-all group"
                  >
                    <td className="px-10 py-8">
                      <span
                        className={`flex items-center justify-center w-14 h-14 rounded-2xl font-black text-2xl transition-all group-hover:scale-110 ${
                          index === 0
                            ? "bg-[#F57E2E] text-white shadow-[0_15px_30px_-10px_#F57E2E]"
                            : index === 1
                              ? "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                              : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                        }`}
                      >
                        {index + 1}
                      </span>
                    </td>
                    <td className="px-10 py-8">
                      <div className="flex items-center space-x-6">
                        <div className="w-16 h-16 rounded-[1.5rem] bg-gradient-to-br from-[#EB2D8F]/10 to-[#EB2D8F]/20 flex items-center justify-center transition-all group-hover:rotate-12">
                          <User className="w-8 h-8 text-[#EB2D8F]" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-black text-[var(--foreground)] text-xl tracking-tight leading-tight">
                            {builder.name}
                          </span>
                          <span className="text-xs font-black text-[#F57E2E] uppercase tracking-widest mt-1">
                            Apex Explorer
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-10 py-8">
                      <div className="flex flex-col">
                        <span className="text-gray-600 dark:text-gray-300 font-black text-lg tracking-tight">
                          {builder.impact}
                        </span>
                        <div className="flex items-center gap-1 mt-1 text-green-500">
                          <TrendingUp className="w-4 h-4" />
                          <span className="text-xs font-black uppercase tracking-widest">
                            +12% vs last week
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-10 py-8">
                      <div className="flex items-center space-x-3 bg-gray-50 dark:bg-gray-900 px-6 py-3 rounded-2xl w-fit border-2 border-transparent group-hover:border-[#EB2D8F]/20 transition-all shadow-sm">
                        {getBadgeIcon(builder.badge)}
                        <span className="text-sm font-black text-[var(--foreground)] uppercase tracking-wider">
                          {builder.badge}
                        </span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-12 md:p-16 bg-gradient-to-br from-[#EB2D8F] to-[#F57E2E] rounded-[4rem] text-white flex flex-col md:flex-row items-center justify-between gap-12 shadow-3xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 ethiopian-pattern opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <p className="font-black text-4xl md:text-5xl mb-4 tracking-tighter">
              {t.leaderboard.cta}
            </p>
            <p className="text-xl text-white/80 font-bold leading-relaxed">
              Join the elite builders of the Dala Apex community and show
              Ethiopia what you've got.
            </p>
          </div>
          <motion.a
            href="#feedback"
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.9 }}
            className="relative z-10 flex items-center space-x-4 bg-white text-[#EB2D8F] px-12 py-6 rounded-[2rem] font-black text-xl shadow-2xl transition-all"
          >
            <span>Get Started</span>
            <ArrowUpRight className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Leaderboard;
