import { useState, type FormEvent } from "react";
import { useLanguage } from "../context/LanguageContext";
import {
  MessageSquare,
  UserPlus,
  Users,
  Sparkles,
  Send,
  CheckCircle2,
  Share2,
  Trophy,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import confetti from "canvas-confetti";

const ReferralTracker = () => {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mt-10 p-8 bg-gradient-to-br from-[#EB2D8F]/10 to-[#F57E2E]/10 rounded-3xl border border-[#EB2D8F]/20 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden"
    >
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#EB2D8F]/10 rounded-full blur-3xl" />

      <div className="flex items-center gap-6 relative z-10">
        <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center shadow-2xl transform rotate-3">
          <Trophy className="w-8 h-8 text-[#F57E2E] -rotate-3" />
        </div>
        <div>
          <p className="font-black text-lg md:text-xl text-[var(--foreground)] leading-tight mb-2">
            {t.collaborate.form.referral}
          </p>
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-10 h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: i === 1 ? "100%" : "0%" }}
                  transition={{ delay: 0.5 + i * 0.2, duration: 1 }}
                  className="h-full bg-gradient-to-r from-[#EB2D8F] to-[#F57E2E]"
                />
              </div>
            ))}
          </div>
          <p className="text-xs font-black text-[#EB2D8F] mt-2 uppercase tracking-widest">
            1 / 3 FRIENDS JOINED
          </p>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          navigator.clipboard.writeText(
            "https://dala.gebeya.com/join/apex-builder",
          );
          toast.success("Link copied to clipboard!");
        }}
        className="flex items-center gap-3 bg-white dark:bg-gray-800 text-[var(--foreground)] px-8 py-4 rounded-[1.5rem] font-black shadow-2xl border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all relative z-10 whitespace-nowrap"
      >
        <Share2 className="w-5 h-5 text-[#EB2D8F]" />
        Share My Link
      </motion.button>
    </motion.div>
  );
};

const Collaborate = () => {
  const { t } = useLanguage();
  const [isRegistered, setIsRegistered] = useState(false);
  const [teamForm, setTeamForm] = useState({
    fullName: "",
    uni: "",
    email: "",
    phone: "",
    why: "",
  });

  const handleTeamSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsRegistered(true);

    // Confetti explosion with Gebeya colors
    const end = Date.now() + 3 * 1000;
    const colors = ["#EB2D8F", "#F57E2E", "#FFFFFF"];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();

    toast.success("Registration successful!", {
      description: "Welcome to the Dala Apex Tribe!",
    });
  };

  return (
    <section
      id="collaborate"
      className="py-24 bg-[var(--background)] transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-[#EB2D8F]/10 to-[#F57E2E]/10 rounded-[2rem] flex items-center justify-center shadow-inner ring-4 ring-white/50 dark:ring-gray-800/50">
              <Users className="w-12 h-12 text-[#EB2D8F]" />
            </div>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-[var(--foreground)] mb-6 tracking-tighter">
            {t.collaborate.title}
          </h2>
          <div className="h-3 w-40 bg-gradient-to-r from-[#EB2D8F] to-[#F57E2E] mx-auto rounded-full shadow-[0_5px_15px_-5px_#EB2D8F]"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Idea Board Side */}
          <div className="lg:col-span-7 space-y-12">
            <div className="flex items-center justify-between">
              <h3 className="text-4xl font-black text-[var(--foreground)] flex items-center gap-4 tracking-tight">
                <Sparkles className="w-10 h-10 text-[#F57E2E] animate-pulse" />
                Idea Board
              </h3>
              <div className="hidden md:flex gap-2">
                <div className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-black uppercase tracking-widest text-gray-500">
                  Latest
                </div>
                <div className="px-4 py-2 rounded-full bg-[#EB2D8F]/10 text-[#EB2D8F] text-xs font-black uppercase tracking-widest">
                  Trending
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {t.collaborate.demoIdeas.map((idea, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700/50 rounded-[2.5rem] p-8 flex flex-col h-full shadow-2xl hover-glow-pink group transition-all duration-500"
                >
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#EB2D8F] to-[#EB2D8F]/60 flex items-center justify-center text-white font-black text-xl shadow-lg transform group-hover:rotate-6 transition-transform">
                      {idea.author[0]}
                    </div>
                    <div>
                      <span className="block text-lg font-black text-[var(--foreground)] tracking-tight">
                        {idea.author}
                      </span>
                      <span className="block text-xs text-[#F57E2E] font-black uppercase tracking-widest">
                        Apex Builder
                      </span>
                    </div>
                  </div>
                  <h4 className="text-2xl font-black text-[var(--foreground)] mb-4 tracking-tight leading-tight">
                    {idea.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 font-medium mb-10 flex-grow leading-relaxed">
                    {idea.desc}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-8 border-t border-gray-100 dark:border-gray-700">
                    <button
                      onClick={() => toast.info("Comments opening soon!")}
                      className="text-sm font-black text-[#F57E2E] flex items-center gap-2 hover:translate-x-1 transition-transform"
                    >
                      <MessageSquare className="w-5 h-5" />{" "}
                      {t.collaborate.comment}
                    </button>
                    <button
                      onClick={() => toast.success("Team request sent!")}
                      className="text-sm font-black text-[#EB2D8F] flex items-center gap-2 hover:translate-x-1 transition-transform"
                    >
                      <UserPlus className="w-5 h-5" /> {t.collaborate.join}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-[#EB2D8F] to-[#F57E2E] rounded-[3rem] p-12 text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 ethiopian-pattern opacity-10 group-hover:opacity-20 transition-opacity" />
              <div className="relative z-10">
                <p className="text-4xl font-black mb-4 tracking-tighter">
                  {t.collaborate.teamFinder}
                </p>
                <p className="text-white/80 font-bold text-lg">
                  Don't build alone. Connect with the best minds in the country.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: -2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => toast.info("Team matching engine starting...")}
                className="relative z-10 bg-white text-[#EB2D8F] px-12 py-5 rounded-[1.5rem] font-black shadow-2xl hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.5)] transition-all text-lg"
              >
                Match Now
              </motion.button>
            </motion.div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 border-2 border-transparent dark:border-gray-700 rounded-[3rem] p-10 md:p-14 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] sticky top-28"
            >
              <AnimatePresence mode="wait">
                {!isRegistered ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <div className="flex items-center gap-4 mb-10">
                      <div className="w-14 h-14 bg-[#F57E2E]/10 rounded-2xl flex items-center justify-center">
                        <UserPlus className="w-8 h-8 text-[#F57E2E]" />
                      </div>
                      <h3 className="text-4xl font-black text-[var(--foreground)] tracking-tighter">
                        {t.collaborate.form.title}
                      </h3>
                    </div>

                    <form onSubmit={handleTeamSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">
                          {t.collaborate.form.fullName}
                        </label>
                        <input
                          type="text"
                          className="w-full px-6 py-5 rounded-[1.5rem] bg-gray-50 dark:bg-gray-900 border-2 border-transparent focus:border-[#EB2D8F] outline-none transition-all font-bold text-[var(--foreground)]"
                          placeholder="Abebe Bekele"
                          value={teamForm.fullName}
                          onChange={(e) =>
                            setTeamForm({
                              ...teamForm,
                              fullName: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">
                          {t.collaborate.form.university}
                        </label>
                        <input
                          type="text"
                          className="w-full px-6 py-5 rounded-[1.5rem] bg-gray-50 dark:bg-gray-900 border-2 border-transparent focus:border-[#EB2D8F] outline-none transition-all font-bold text-[var(--foreground)]"
                          placeholder="Addis Ababa University"
                          value={teamForm.uni}
                          onChange={(e) =>
                            setTeamForm({ ...teamForm, uni: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">
                            {t.collaborate.form.email}
                          </label>
                          <input
                            type="email"
                            className="w-full px-6 py-5 rounded-[1.5rem] bg-gray-50 dark:bg-gray-900 border-2 border-transparent focus:border-[#EB2D8F] outline-none transition-all font-bold text-[var(--foreground)]"
                            placeholder="abebe@dala.app"
                            value={teamForm.email}
                            onChange={(e) =>
                              setTeamForm({
                                ...teamForm,
                                email: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">
                            {t.collaborate.form.phone}
                          </label>
                          <input
                            type="tel"
                            className="w-full px-6 py-5 rounded-[1.5rem] bg-gray-50 dark:bg-gray-900 border-2 border-transparent focus:border-[#EB2D8F] outline-none transition-all font-bold text-[var(--foreground)]"
                            placeholder="+251..."
                            value={teamForm.phone}
                            onChange={(e) =>
                              setTeamForm({
                                ...teamForm,
                                phone: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">
                          {t.collaborate.form.whyJoin}
                        </label>
                        <textarea
                          className="w-full px-6 py-5 rounded-[1.5rem] bg-gray-50 dark:bg-gray-900 border-2 border-transparent focus:border-[#EB2D8F] outline-none transition-all font-bold text-[var(--foreground)] h-32 resize-none"
                          placeholder="Share your motivation with us..."
                          value={teamForm.why}
                          onChange={(e) =>
                            setTeamForm({ ...teamForm, why: e.target.value })
                          }
                          required
                        ></textarea>
                      </div>
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-[#EB2D8F] text-white py-6 rounded-[1.5rem] font-black text-xl shadow-[0_20px_50px_-10px_rgba(235,45,143,0.5)] hover:brightness-110 transition-all flex items-center justify-center gap-4"
                      >
                        {t.collaborate.form.submit}
                        <Send className="w-6 h-6" />
                      </motion.button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                      }}
                      className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-green-500/50"
                    >
                      <CheckCircle2 className="w-16 h-16 text-white" />
                    </motion.div>
                    <h3 className="text-6xl font-black text-green-500 mb-4 tracking-tighter">
                      {t.collaborate.form.registered}
                    </h3>
                    <p className="text-xl text-gray-600 dark:text-gray-400 font-black mb-12 uppercase tracking-tight">
                      Your journey to the apex starts now!
                    </p>

                    <ReferralTracker />

                    <button
                      onClick={() => setIsRegistered(false)}
                      className="mt-12 text-sm font-black text-[#EB2D8F] underline uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity"
                    >
                      Submit another application
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborate;
