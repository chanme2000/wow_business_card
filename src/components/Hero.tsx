import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const scrollToNext = () => {
    const expertiseSection = document.getElementById("expertise");
    if (expertiseSection) {
      expertiseSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 tracking-widest uppercase">
            Principal Architect
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 font-inter"
        >
          Design Your Life, <br className="hidden md:block" />
          <span className="text-primary">Build Your Vision</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed"
        >
          사진, 디자인, 보험 설계, 웹/앱 개발. <br className="md:hidden" />
          다각적인 전문성을 바탕으로 당신의 성공적인 비즈니스를 설계합니다.
        </motion.p>
      </div>

      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 z-10 p-4 rounded-full border border-border bg-background/50 backdrop-blur-sm hover:bg-muted transition-colors group cursor-pointer"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors animate-bounce" />
      </motion.button>
    </section>
  );
}
