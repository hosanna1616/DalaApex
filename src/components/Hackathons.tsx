import { FormEvent, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import {
  Calendar,
  Trophy,
  Rocket,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

const Hackathons = () => {
  const { t } = useLanguage();
  const [showPropose, setShowPropose] = useState(false);
  const [regForm, setRegForm] = useState({ name: "", uni: "", idea: "" });

  const handleRegister = (e: FormEvent) => {
    e.preventDefault();
    toast.success(t.hackathons.success);
    setRegForm({ name: "", uni: "", idea: "" });
  };

  const handlePropose = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Theme proposed!", {
      description: "Our team will review your proposal soon.",
    });
    setShowPropose(false);
  };

  const pastWinners = [
    {
      title: "Solar Monitoring AI",
      team: "Team Addis Solar",
      prize: "1st Place",
      img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9c577e3-cb35-4ba7-a95e-da82946157e6/hackathon-winner-1-54bcd822-1773841765847.webp",
    },
    {
      title: "EduShare Ethiopia",
      team: "Apex Innovators",
      prize: "2nd Place",
      img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/d9c577e3-cb35-4ba7-a95e-da82946157e6/hackathon-winner-2-d69b53cb-1773841759947.webp",
    },
  ];

  return (
    <section
      id="hackathons"
      className="py-24 bg-[var(--background)] transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center md:text-left"
        >
          <h2 className="text-5xl md:text-7xl font-black text-[var(--foreground)] mb-6 tracking-tighter">
            <span className="text-[#EB2D8F]">Dala-Powered</span>{" "}
            <span className="text-[#F57E2E]">Hackathons</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl font-medium">
            {t.hackathons.intro}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 border-2 border-[#EB2D8F]/10 dark:border-gray-700/50 rounded-[3rem] p-10 md:p-12 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] hover-glow-pink group transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-3 font-black text-xl text-[#EB2D8F] tracking-tighter">
                  <Calendar className="w-7 h-7" /> {t.hackathons.upcoming}
                </div>
                <span className="bg-[#F57E2E]/10 text-[#F57E2E] px-6 py-2 rounded-full text-xs font-black tracking-widest border border-[#F57E2E]/20 animate-pulse">
                  SOON
                </span>
              </div>

              <div className="space-y-6 mb-12">
                <div>
                  <p className="text-[#F57E2E] text-xs font-black uppercase tracking-widest mb-2">
                    {t.hackathons.theme}
                  </p>
                  <p className="text-4xl font-black text-[var(--foreground)] tracking-tighter leading-tight">
                    Innovate the Future
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-8 pt-4">
                  <div>
                    <p className="text-gray-400 text-xs font-black uppercase tracking-widest mb-1">
                      {t.hackathons.date}
                    </p>
                    <p className="text-xl font-black text-[var(--foreground)]">
                      Late 2024
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-black uppercase tracking-widest mb-1">
                      {t.hackathons.prizes}
                    </p>
                    <p className="text-xl font-black text-[#EB2D8F]">
                      {t.hackathons.prizeDetails}
                    </p>
                  </div>
                </div>
              </div>

              <h4 className="text-2xl font-black mb-6 flex items-center gap-3 text-[var(--foreground)] tracking-tight">
                <CheckCircle2 className="w-6 h-6 text-[#F57E2E]" />{" "}
                {t.hackathons.registerTitle}
              </h4>

              <form onSubmit={handleRegister} className="space-y-4">
                <input
                  type="text"
                  placeholder={t.hackathons.regName}
                  value={regForm.name}
                  onChange={(e) =>
                    setRegForm({ ...regForm, name: e.target.value })
                  }
                  className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-900 border-2 border-transparent focus:border-[#EB2D8F] outline-none rounded-2xl font-bold transition-all text-[var(--foreground)]"
                  required
                />
                <input
                  type="text"
                  placeholder={t.hackathons.regUni}
                  value={regForm.uni}
                  onChange={(e) =>
                    setRegForm({ ...regForm, uni: e.target.value })
                  }
                  className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-900 border-2 border-transparent focus:border-[#EB2D8F] outline-none rounded-2xl font-bold transition-all text-[var(--foreground)]"
                  required
                />
                <textarea
                  placeholder={t.hackathons.regIdea}
                  value={regForm.idea}
                  onChange={(e) =>
                    setRegForm({ ...regForm, idea: e.target.value })
                  }
                  className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-900 border-2 border-transparent focus:border-[#EB2D8F] outline-none rounded-2xl font-bold transition-all text-[var(--foreground)] h-32 resize-none"
                  required
                ></textarea>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#EB2D8F] text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:brightness-110 transition-all shadow-xl shadow-pink-500/20"
                >
                  {t.hackathons.regSubmit}{" "}
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              onClick={() => setShowPropose(true)}
              className="flex items-center gap-3 text-[#F57E2E] font-black text-lg mx-auto md:mx-0 tracking-tight"
            >
              <div className="w-10 h-10 bg-[#F57E2E]/10 rounded-xl flex items-center justify-center">
                <Rocket className="w-5 h-5" />
              </div>
              {t.hackathons.proposeTitle}
            </motion.button>
          </div>

          <div>
            <h3 className="text-3xl font-black mb-10 flex items-center gap-4 text-[var(--foreground)] tracking-tight">
              <Trophy className="w-8 h-8 text-[#F57E2E]" />{" "}
              {t.hackathons.pastWinners}
            </h3>
            <div className="grid gap-8">
              {pastWinners.map((winner, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className="relative h-64 rounded-[2.5rem] overflow-hidden shadow-2xl group border-4 border-white dark:border-gray-800"
                >
                  <img
                    src={winner.img}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    alt={winner.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-10 flex flex-col justify-end">
                    <div className="bg-white/20 backdrop-blur-md w-fit px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white mb-2">
                      PREVIOUS WINNER
                    </div>
                    <p className="text-white font-black text-3xl leading-tight tracking-tight">
                      {winner.title}
                    </p>
                    <p className="text-[#F57E2E] text-lg font-black tracking-tight">
                      {winner.prize} — {winner.team}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showPropose && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/80 backdrop-blur-xl">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white dark:bg-gray-800 rounded-[3rem] p-10 md:p-12 w-full max-w-lg shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-2 border-transparent dark:border-gray-700"
            >
              <h3 className="text-4xl font-black mb-8 text-[var(--foreground)] tracking-tighter">
                {t.hackathons.proposeTitle}
              </h3>
              <form onSubmit={handlePropose} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">
                    Theme Title
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. AI for Health"
                    className="w-full px-6 py-5 bg-gray-50 dark:bg-gray-900 rounded-[1.5rem] border-2 border-transparent focus:border-[#EB2D8F] outline-none font-bold text-[var(--foreground)]"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">
                    Why this theme?
                  </label>
                  <textarea
                    placeholder="Describe the impact..."
                    className="w-full px-6 py-5 bg-gray-50 dark:bg-gray-900 rounded-[1.5rem] border-2 border-transparent focus:border-[#EB2D8F] outline-none font-bold text-[var(--foreground)] h-32 resize-none"
                    required
                  ></textarea>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowPropose(false)}
                    className="flex-1 py-5 font-black text-gray-500 uppercase tracking-widest text-sm"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-[#F57E2E] to-[#EB2D8F] text-white py-5 rounded-[1.5rem] font-black shadow-2xl hover:brightness-110 transition-all text-lg"
                  >
                    {t.hackathons.proposeBtn}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hackathons;
