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
    <section className="relative min-h-screen pt-24 pb-12 px-4 md:px-8 flex flex-col justify-between bg-background overflow-hidden">
      {/* 1. 상단 웅장한 아치형 이미지 영역 */}
      <div className="w-full max-w-7xl mx-auto mb-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full h-[280px] md:h-[450px] overflow-hidden rounded-[2rem] md:rounded-[3rem] relative shadow-lg"
        >
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop"
            alt="Minimalist Concrete Arch Structure"
            className="w-full h-full object-cover brightness-90 dark:brightness-75 transition-transform duration-1000 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white max-w-lg">
            <span className="text-xs uppercase tracking-widest text-rust-orange font-bold">Principal Architect</span>
            <h2 className="text-lg md:text-2xl font-light mt-2 leading-relaxed">
              Designing space, building vision, managing risks, developing future digital products.
            </h2>
          </div>
        </motion.div>
      </div>

      {/* 2. 거대한 볼드 타이틀 */}
      <div className="w-full max-w-7xl mx-auto mb-12">
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[10vw] md:text-[11vw] font-black tracking-tighter uppercase leading-none font-inter text-foreground select-none"
        >
          WOWCOM
        </motion.h1>
      </div>

      {/* 3. 비대칭 본문 레이아웃 */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        {/* 좌측: 사명/소개 텍스트 */}
        <div className="lg:col-span-7 space-y-6">
          <span className="text-rust-orange text-xs md:text-sm font-semibold tracking-widest uppercase block">
            01/04 • INTRODUCTION
          </span>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl md:text-4xl font-normal leading-relaxed md:leading-snug text-foreground tracking-tight"
          >
            At WOWCOM, we leverage our multidisciplinary expertise to advance the commercial, aesthetic, and financial interests of our clients.
          </motion.h3>
        </div>

        {/* 우측: 서브 텍스트 및 미니 이미지 */}
        <div className="lg:col-span-5 flex flex-col md:flex-row gap-6 lg:pl-8 border-t lg:border-t-0 lg:border-l border-border pt-8 lg:pt-0 lg:pl-12">
          <div className="flex-1 space-y-4">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              우리는 사진 촬영, 브랜딩 디자인, 프론트엔드 개발, 그리고 보험 및 자산 설계를 융합하여 단순한 결과물이 아닌 하나의 완성된 '구조물(Architecture)'을 짓는 철학으로 협업합니다.
            </p>
            <p className="text-xs text-muted-foreground/80 font-mono">
              [EST. 2024] WOWCOM MULTI-DISCIPLINARY STUDIO
            </p>
          </div>
          
          <div className="w-full md:w-[150px] aspect-square overflow-hidden rounded-xl bg-muted relative">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop"
              alt="Sub architectural details"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* 4. 스크롤 안내 버튼 */}
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center border-t border-border pt-6">
        <span className="text-xs text-muted-foreground font-mono">SCROLL TO SERVICES</span>
        <motion.button
          onClick={scrollToNext}
          className="p-3 rounded-full border border-border bg-background hover:bg-muted text-foreground transition-colors cursor-pointer group"
          aria-label="Scroll down"
          whileHover={{ y: 3 }}
        >
          <ArrowDown className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-all duration-300" />
        </motion.button>
      </div>
    </section>
  );
}
