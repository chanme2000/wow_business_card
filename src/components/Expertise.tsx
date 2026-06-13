import { useState } from "react";

const pillars = [
  {
    id: "photo",
    num: "[01]",
    title: "Photography",
    description: "공간의 본질과 분위기를 포착하는 상업 및 건축 사진",
    tags: ["Commercial", "Space", "Interior", "Drone", "Landscape"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "design",
    num: "[02]",
    title: "Design",
    description: "브랜드의 철학을 시각화하는 로고 및 웹/앱 UI/UX 디자인",
    tags: ["Brand Identity", "Logo Design", "UI/UX Design", "Pitch Deck"],
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "insurance",
    num: "[03]",
    title: "Insurance",
    description: "개인과 기업의 리스크를 분석하여 안정적인 미래를 설계",
    tags: ["Risk Analysis", "Life Insurance", "Corporate", "Financial Planning"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "dev",
    num: "[04]",
    title: "Development",
    description: "효율적이고 확장 가능한 모던 웹 및 앱 프론트엔드 개발",
    tags: ["React / Next.js", "TypeScript", "Tailwind CSS", "API Integration"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
  },
];

export function Expertise() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="expertise" className="py-28 px-4 md:px-8 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* 헤더 타이틀 */}
        <div className="mb-20">
          <span className="text-rust-orange text-xs md:text-sm font-semibold tracking-widest uppercase block mb-4">
            02/04 • WHAT WE DO
          </span>
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase font-inter">
            Services
          </h2>
        </div>

        {/* 세로형 인터랙티브 리스트 */}
        <div className="border-t border-border">
          {pillars.map((pillar) => {
            const isHovered = hoveredId === pillar.id;
            return (
              <div
                key={pillar.id}
                onMouseEnter={() => setHoveredId(pillar.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="border-b border-border py-10 md:py-12 relative group cursor-pointer transition-colors duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  {/* 번호 및 제목 */}
                  <div className="lg:col-span-6 flex flex-col md:flex-row items-start gap-2 md:gap-6">
                    <span className="text-rust-orange font-mono text-sm md:text-base md:pt-2">
                      {pillar.num}
                    </span>
                    <div className="space-y-4">
                      <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground transition-all duration-300 group-hover:translate-x-2">
                        {pillar.title}
                      </h3>
                      <p className="text-muted-foreground text-sm md:text-base max-w-md">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  {/* 세부 카테고리 태그 및 상세 항목 */}
                  <div className="lg:col-span-3">
                    <div className="flex flex-wrap gap-2 pt-2">
                      {pillar.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-medium px-2.5 py-1 rounded-full bg-muted border border-border/60 text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 썸네일 이미지 노출 영역 */}
                  <div className="lg:col-span-3 flex justify-start lg:justify-end">
                    <div className="relative w-full max-w-[200px] h-[120px] rounded-2xl overflow-hidden bg-muted transition-all duration-500 shadow-md">
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className={`w-full h-full object-cover transition-all duration-700 ${
                          isHovered ? "scale-105 saturate-100" : "scale-100 saturate-50 brightness-90"
                        }`}
                      />
                      <div className={`absolute inset-0 bg-black/10 transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`} />
                    </div>
                  </div>
                </div>

                {/* 호버 백그라운드 효과 */}
                <div className="absolute inset-x-[-16px] inset-y-0 bg-muted/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
