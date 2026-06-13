import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

export interface ProjectDetail {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  year: string;
  client: string;
  services: string[];
  gallery: string[];
}

export const projectDetails: Record<number, ProjectDetail> = {
  1: {
    id: 1,
    title: "아마추어 사진 작가 포트폴리오",
    category: "Photo",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
    description: "렌즈 너머의 세상을 정교하게 담아내는 상업 및 아티스트용 포트폴리오 프로젝트입니다. 빛의 각도와 구도를 극적으로 활용하여 공간과 인물이 가지는 정적이고도 강렬한 분위기를 극대화합니다.",
    year: "2024",
    client: "개인 사진작가 조현우",
    services: ["Commercial Photography", "Creative Direction", "Exhibition Design"],
    gallery: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200",
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1200",
      "https://images.unsplash.com/photo-1452784444945-3f422708fe5e?q=80&w=1200"
    ]
  },
  2: {
    id: 2,
    title: "카페 & 스테이 통합 브랜딩",
    category: "Design",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
    description: "로컬 비즈니스의 고유한 분위기를 살린 브랜딩 및 로고 디자인입니다. 머머는 공간(Stay)과 즐기는 음료(Cafe)가 물 흐르듯 자연스럽게 어우러지도록 모던 브랜딩 시스템을 구축했습니다.",
    year: "2024",
    client: "어반 스테이 그룹",
    services: ["Brand Strategy", "Visual Identity", "UI/UX Design", "Packaging"],
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200",
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=1200",
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200"
    ]
  },
  3: {
    id: 3,
    title: "기업 B2B 랜딩 페이지",
    category: "Web",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    description: "비즈니스 전환율 극대화를 타겟으로 설계한 반응형 B2B 랜딩 페이지입니다. React와 Tailwind CSS를 활용해 초고속 로딩 속도와 부드러운 애니메이션 효과를 구현하였으며, 복잡한 인프라 사양을 기하학적 그리드로 시각화했습니다.",
    year: "2024",
    client: "넥스트라 테크놀로지스",
    services: ["Web Frontend Dev", "UX Architecture", "SEO Optimization", "Performance Tuning"],
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200"
    ]
  },
  4: {
    id: 4,
    title: "건축 인테리어 사진",
    category: "Photo",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    description: "모던한 미니멀리즘 인테리어 공간의 구조와 깊이감을 빛을 매개로 포착한 전문 건축 사진 프로젝트입니다. 선과 면이 만나는 접점, 콘크리트 마감의 질감, 자연광의 유기적 흐름을 그대로 사진에 담았습니다.",
    year: "2023",
    client: "WOWCOM 스튜디오",
    services: ["Architecture Photography", "Space Analysis", "Lighting Art Direction"],
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=1200",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200"
    ]
  }
};

interface GalleryDetailProps {
  projectId: number;
  onClose: () => void;
  onNavigateProject: (id: number) => void;
}

export function GalleryDetail({ projectId, onClose, onNavigateProject }: GalleryDetailProps) {
  const detail = projectDetails[projectId] || projectDetails[1];

  // 페이지 진입 시 스크롤을 항상 최상단으로 리셋
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  const handleNextProject = () => {
    const totalProjects = Object.keys(projectDetails).length;
    const nextId = (projectId % totalProjects) + 1;
    onNavigateProject(nextId);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans pt-28 pb-16 px-4 md:px-8">
      {/* 상단 미니 네비게이션 */}
      <div className="max-w-7xl mx-auto flex justify-between items-center mb-12 border-b border-border pb-6">
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors cursor-pointer group bg-transparent border-0 p-0"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Main
        </button>
        <span className="text-xs font-mono text-rust-orange">
          PROJECT {detail.id} / {Object.keys(projectDetails).length}
        </span>
      </div>

      {/* 메인 스플릿 레이아웃 */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* 좌측: 세로형 대형 갤러리 이미지 영역 */}
        <div className="lg:col-span-8 space-y-8">
          {detail.gallery.map((imgUrl, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full aspect-[16/10] overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-muted border border-border shadow-md"
            >
              <img
                src={imgUrl}
                alt={`${detail.title} gallery image ${index + 1}`}
                className="w-full h-full object-cover brightness-95 hover:scale-[1.02] transition-transform duration-1000"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {/* 우측: 스티키 세부 정보 영역 */}
        <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-10 border-t lg:border-t-0 border-border pt-8 lg:pt-0">
          <div className="space-y-4">
            <span className="text-rust-orange text-xs md:text-sm font-semibold tracking-widest uppercase block">
              {detail.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight font-inter">
              {detail.title}
            </h1>
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed text-sm md:text-base border-t border-border pt-8">
            <p>{detail.description}</p>
          </div>

          {/* 메타 데이터 테이블 */}
          <div className="border-t border-border pt-8 space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-border/40 text-sm">
              <span className="font-mono text-xs text-muted-foreground">[CLIENT]</span>
              <span className="font-semibold">{detail.client}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border/40 text-sm">
              <span className="font-mono text-xs text-muted-foreground">[YEAR]</span>
              <span className="font-semibold">{detail.year}</span>
            </div>
            <div className="flex justify-between items-start py-2 text-sm">
              <span className="font-mono text-xs text-muted-foreground pt-1">[SERVICES]</span>
              <div className="flex flex-col items-end gap-1 font-semibold text-right">
                {detail.services.map((srv, idx) => (
                  <span key={idx} className="flex items-center gap-1">
                    {srv}
                    <ArrowUpRight className="w-3 h-3 text-rust-orange" />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* 하단 다음 프로젝트 내비게이션 */}
      <div className="max-w-7xl mx-auto border-t border-border mt-24 pt-12 flex justify-between items-center">
        <span className="text-xs text-muted-foreground font-mono">FINISH READING?</span>
        <button
          onClick={handleNextProject}
          className="flex items-center gap-2.5 px-8 py-4 bg-foreground text-background font-bold rounded-full hover:bg-rust-orange hover:text-white transition-all cursor-pointer shadow-md group border-0"
        >
          Next Project
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
