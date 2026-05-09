import { motion } from "framer-motion";
import { Camera, PenTool, ShieldCheck, Code } from "lucide-react";

const pillars = [
  {
    id: "photo",
    title: "Photography",
    description: "공간의 본질과 분위기를 포착하는 상업 및 건축 사진",
    icon: Camera,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    id: "design",
    title: "Design",
    description: "브랜드의 철학을 시각화하는 로고 및 웹/앱 UI/UX 디자인",
    icon: PenTool,
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    id: "insurance",
    title: "Insurance",
    description: "개인과 기업의 리스크를 분석하여 안정적인 미래를 설계",
    icon: ShieldCheck,
    color: "bg-emerald-500/10 text-emerald-500",
  },
  {
    id: "dev",
    title: "Development",
    description: "효율적이고 확장 가능한 모던 웹 및 앱 프론트엔드 개발",
    icon: Code,
    color: "bg-orange-500/10 text-orange-500",
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            4-Pillar Expertise
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            다양한 분야의 융합을 통해 완성도 높은 결과물을 도출합니다.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {/* Blueprint connection lines */}
          <div className="absolute inset-0 z-0 hidden md:block pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <motion.line 
                x1="50%" y1="0" x2="50%" y2="100%" 
                stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" 
                className="text-border"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                viewport={{ once: true }}
              />
              <motion.line 
                x1="0" y1="50%" x2="100%" y2="50%" 
                stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" 
                className="text-border"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                viewport={{ once: true }}
              />
            </svg>
          </div>

          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="z-10 group bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-all cursor-crosshair overflow-hidden relative"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-300" />
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${pillar.color}`}>
                <pillar.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
