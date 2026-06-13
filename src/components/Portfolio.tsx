import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "아마추어 사진 작가 포트폴리오",
    category: "Photo",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
    description: "렌즈 너머의 세상을 정교하게 담아내는 상업 사진 작업 모음",
  },
  {
    id: 2,
    title: "카페 & 스테이 통합 브랜딩",
    category: "Design",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
    description: "로컬 비즈니스의 고유한 분위기를 살린 브랜딩 및 로고 디자인",
  },
  {
    id: 3,
    title: "기업 B2B 랜딩 페이지",
    category: "Web",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    description: "전환율을 높이는 반응형 웹사이트 구축 (React, Tailwind)",
  },
  {
    id: 4,
    title: "건축 인테리어 사진",
    category: "Photo",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    description: "공간의 구조와 빛을 섬세하게 포착한 건축 사진",
  },
];

interface PortfolioProps {
  onSelectProject: (id: number) => void;
}

export function Portfolio({ onSelectProject }: PortfolioProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const activeProject = projects[hoveredIndex] || projects[0];

  return (
    <section className="py-28 px-4 md:px-8 bg-background border-t border-border" id="portfolio">
      <div className="max-w-7xl mx-auto">
        {/* 헤더 */}
        <div className="mb-20">
          <span className="text-rust-orange text-xs md:text-sm font-semibold tracking-widest uppercase block mb-4">
            03/04 • SELECTED WORKS
          </span>
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase font-inter">
            Portfolio
          </h2>
        </div>

        {/* 비대칭 양방향 레이아웃 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* 좌측: 활성화된 프로젝트의 거대 이미지 뷰파인더 */}
          <div className="lg:col-span-6 relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] shadow-xl bg-muted border border-border">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeProject.id}
                src={activeProject.image}
                alt={activeProject.title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover brightness-95 dark:brightness-90"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 text-white">
              <span className="text-xs uppercase tracking-widest font-mono font-bold text-rust-orange">{activeProject.category}</span>
              <h3 className="text-xl font-bold mt-1">{activeProject.title}</h3>
            </div>
          </div>

          {/* 우측: 프로젝트 세로 리스트 */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <div className="flex flex-col border-t border-border">
              {projects.map((project, index) => {
                const isCurrent = index === hoveredIndex;
                return (
                  <div
                    key={project.id}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onClick={() => setSelectedProject(project)}
                    className="border-b border-border py-6 flex justify-between items-center cursor-pointer transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-6">
                      <span className="text-xs font-mono text-rust-orange">
                        [0{index + 1}]
                      </span>
                      <h4
                        className={`text-2xl md:text-3xl font-bold tracking-tight transition-all duration-500 ${
                          isCurrent 
                            ? "text-foreground translate-x-2" 
                            : "text-foreground/30 hover:text-foreground/60"
                        }`}
                      >
                        {project.title}
                      </h4>
                    </div>
                    
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 group-hover:text-rust-orange transition-colors">
                      {project.category}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 모달 */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-card border border-border rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 p-2.5 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors backdrop-blur-md"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="w-full md:w-3/5 aspect-video md:aspect-auto">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="w-full md:w-2/5 p-10 flex flex-col justify-center">
                <span className="text-xs font-bold text-rust-orange tracking-widest uppercase mb-2">
                  {selectedProject.category}
                </span>
                <h3 className="text-3xl font-black tracking-tight mb-4">{selectedProject.title}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {selectedProject.description}
                </p>
                <button 
                  onClick={() => {
                    onSelectProject(selectedProject.id);
                    setSelectedProject(null);
                  }}
                  className="flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-opacity w-fit cursor-pointer border-0"
                >
                  <ExternalLink className="w-4 h-4" />
                  상세 보기
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
