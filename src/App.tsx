import { useEffect } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Guide from "./components/Guide";
import Gallery from "./components/Gallery";
import Challenge from "./components/Challenge";
import Leaderboard from "./components/Leaderboard";
import Collaborate from "./components/Collaborate";
import Hackathons from "./components/Hackathons";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import { Toaster } from "sonner";
import "./app.css";

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans selection:bg-[#EB2D8F] selection:text-white transition-colors duration-500 overflow-x-hidden">
          <Toaster position="top-center" richColors theme="system" />
          <Navbar />

          <main className="relative">
            <Hero />

            <section className="reveal">
              <Guide />
            </section>
            <section className="reveal">
              <Gallery />
            </section>
            <section className="reveal">
              <Challenge />
            </section>
            <section className="reveal">
              <Leaderboard />
            </section>
            <section className="reveal">
              <Collaborate />
            </section>
            <section className="reveal">
              <Hackathons />
            </section>
            <section className="reveal">
              <Feedback />
            </section>
          </main>

          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
