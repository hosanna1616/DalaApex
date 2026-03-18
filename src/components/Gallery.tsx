import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { ExternalLink, Flame } from "lucide-react";

const Gallery = () => {
  const { t } = useLanguage();

  return (
    <section
      id="gallery"
      className="py-24 bg-[var(--background)] transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
        >
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F57E2E]/10 text-[#F57E2E] font-black text-xs uppercase tracking-widest mb-6 border border-[#F57E2E]/20">
              <Flame className="w-4 h-4 fill-[#F57E2E]" />
              TRENDING NOW
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-[var(--foreground)] tracking-tighter uppercase">
              {t.gallery.title.split(" ").map((word, i) => (
                <span key={i} className="block md:inline-block md:mr-4">
                  {word}{" "}
                </span>
              ))}
            </h2>
          </div>
          <div className="h-3 w-40 bg-gradient-to-r from-[#EB2D8F] to-[#F57E2E] rounded-full hidden md:block"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {t.gallery.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="group relative h-[450px] rounded-[3.5rem] overflow-hidden shadow-3xl bg-gray-900 border-4 border-white dark:border-gray-800 transition-all duration-500"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-12 flex flex-col justify-end">
                <div className="bg-[#EB2D8F] w-fit px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white mb-4">
                  {item.title.split(" ")[0]}
                </div>
                <h3 className="text-3xl font-black text-white mb-4 tracking-tight leading-tight group-hover:text-[#F57E2E] transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/70 font-medium mb-10 line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-[1.5rem] font-black text-sm uppercase tracking-widest group-hover:bg-[#F57E2E] group-hover:text-white transition-all shadow-xl"
                >
                  {item.btn} <ExternalLink className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
