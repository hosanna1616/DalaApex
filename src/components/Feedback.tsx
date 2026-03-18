import { useState, type FormEvent } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Send, Heart, MessageSquareText } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const Feedback = () => {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast.success(t.feedback.success);
      setLoading(false);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section
      id="feedback"
      className="py-24 bg-[var(--background)] transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#EB2D8F]/10 text-[#EB2D8F] font-black text-xs uppercase tracking-widest mb-8 border border-[#EB2D8F]/20">
              <Heart className="w-4 h-4 fill-[#EB2D8F]" />
              SHARE YOUR VOICE
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-[var(--foreground)] mb-8 tracking-tighter uppercase leading-[0.9]">
              {t.feedback.title.split(" – ").map((part, i) => (
                <span key={i} className="block">
                  {part}
                </span>
              ))}
            </h2>
            <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-bold max-w-xl leading-relaxed">
              Your ideas fuel the evolution of Dala Apex. Tell us what we should
              build next to empower Ethiopia.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-[3.5rem] p-10 md:p-14 shadow-3xl border-2 border-transparent dark:border-gray-700/50 hover-glow-orange group transition-all duration-500"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-3">
                <label className="text-sm font-black text-gray-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                  <MessageSquareText className="w-4 h-4" /> {t.feedback.q1}
                </label>
                <textarea
                  className="w-full px-8 py-6 rounded-[2rem] bg-gray-50 dark:bg-gray-900 border-2 border-transparent focus:border-[#EB2D8F] outline-none transition-all font-bold text-[var(--foreground)] h-32 resize-none"
                  placeholder="What app is missing on campus?"
                  required
                ></textarea>
              </div>
              <div className="space-y-3">
                <label className="text-sm font-black text-gray-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                  <Zap className="w-4 h-4" /> {t.feedback.q2}
                </label>
                <textarea
                  className="w-full px-8 py-6 rounded-[2rem] bg-gray-50 dark:bg-gray-900 border-2 border-transparent focus:border-[#F57E2E] outline-none transition-all font-bold text-[var(--foreground)] h-32 resize-none"
                  placeholder="How can we make Dala better for you?"
                  required
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#EB2D8F] to-[#F57E2E] text-white py-6 rounded-[2rem] font-black text-xl shadow-2xl flex items-center justify-center gap-4 hover:brightness-110 transition-all disabled:opacity-50"
              >
                {loading ? "Submitting..." : t.feedback.submit}
                <Send
                  className={`w-6 h-6 ${loading ? "animate-bounce" : ""}`}
                />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Zap = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

export default Feedback;
