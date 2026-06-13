import { useState, useEffect } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Expertise } from "./components/Expertise";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { GalleryDetail } from "./components/GalleryDetail";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // 스크롤 감지 및 플로팅 버튼 활성화
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 메뉴 클릭 시 스크롤 제어 핸들러
  const handleMenuClick = (targetId: string) => {
    if (selectedProjectId !== null) {
      // 갤러리 뷰 상태이면 메인으로 복귀 후 이동
      setSelectedProjectId(null);
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // 메인 화면 상태이면 즉시 이동
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ThemeProvider defaultTheme="system" storageKey="archi-theme">
      <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 relative">
        <Navbar onMenuClick={handleMenuClick} />
        {selectedProjectId !== null ? (
          <GalleryDetail
            projectId={selectedProjectId}
            onClose={() => setSelectedProjectId(null)}
            onNavigateProject={(id) => setSelectedProjectId(id)}
          />
        ) : (
          <main>
            <div id="hero">
              <Hero />
            </div>
            <Expertise />
            <Portfolio onSelectProject={setSelectedProjectId} />
            <Contact />
          </main>
        )}
        <Footer />

        {/* 상단 이동 버튼 */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              onClick={handleScrollToTop}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-8 right-8 z-40 p-4 rounded-full border border-border bg-background text-foreground hover:bg-rust-orange hover:text-white hover:border-rust-orange transition-all duration-300 shadow-lg cursor-pointer group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-muted-foreground group-hover:text-white group-hover:-translate-y-0.5 transition-all duration-300" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;
