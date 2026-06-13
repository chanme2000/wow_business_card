import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, MessageCircle } from "lucide-react";
import { sendEmail } from "../lib/emailjs";

const formSchema = z.object({
  name: z.string().min(2, "이름은 2글자 이상이어야 합니다."),
  email: z.string().email("유효한 이메일 주소를 입력해주세요."),
  type: z.string().min(1, "문의 유형을 선택해주세요."),
  message: z.string().min(10, "문의 내용은 10자 이상이어야 합니다."),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      await sendEmail(data);
      setSubmitStatus("success");
      reset();

      // 알림 메시지 3초 후 제거
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-28 px-4 md:px-8 bg-[#121211] text-[#f0eee9] border-t border-[#282725]" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-rust-orange text-xs md:text-sm font-semibold tracking-widest uppercase block mb-4">
            04/04 • CONNECT
          </span>
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase font-inter text-[#f0eee9]">
            Contact
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* 좌측: 타이틀 및 카톡 링크 */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-3xl md:text-4xl font-light tracking-tight leading-snug">
              Materialise <br /> your vision.
            </h3>
            <p className="text-[#9a968f] text-sm md:text-base leading-relaxed max-w-md">
              새로운 프로젝트나 협업에 대한 문의를 남겨주세요. 아이디어를 현실적인 구조물과 디지털 제품으로 설계해 드립니다.
            </p>

            <div className="pt-4">
              <a
                href="https://open.kakao.com/o/s1kpM8ti"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-6 py-4 bg-[#FEE500] text-black rounded-full hover:bg-[#FEE500]/90 transition-all font-semibold shadow-md cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                카카오톡 오픈채팅 문의하기
              </a>
            </div>
          </div>

          {/* 우측: 이메일 전송 폼 */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-[#181716] border border-[#282725] p-8 md:p-10 rounded-[2.5rem] shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold tracking-wider text-[#9a968f] uppercase mb-2">이름</label>
                  <input
                    {...register("name")}
                    id="name"
                    type="text"
                    className="w-full p-4 rounded-xl border border-[#282725] bg-[#121211] text-[#f0eee9] placeholder-[#706d64] focus:outline-none focus:ring-1 focus:ring-rust-orange transition-all text-sm"
                    placeholder="홍길동"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold tracking-wider text-[#9a968f] uppercase mb-2">이메일</label>
                  <input
                    {...register("email")}
                    id="email"
                    type="email"
                    className="w-full p-4 rounded-xl border border-[#282725] bg-[#121211] text-[#f0eee9] placeholder-[#706d64] focus:outline-none focus:ring-1 focus:ring-rust-orange transition-all text-sm"
                    placeholder="example@domain.com"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="type" className="block text-xs font-semibold tracking-wider text-[#9a968f] uppercase mb-2">문의 유형</label>
                <select
                  {...register("type")}
                  id="type"
                  className="w-full p-4 rounded-xl border border-[#282725] bg-[#121211] text-[#f0eee9] focus:outline-none focus:ring-1 focus:ring-rust-orange transition-all text-sm appearance-none"
                  style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='none' height='24' stroke='%23f0eee9' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><polyline points='6 9 12 15 18 9'></polyline></svg>")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center', backgroundSize: '16px' }}
                >
                  <option value="" className="bg-[#121211]">유형을 선택해주세요</option>
                  <option value="photo" className="bg-[#121211]">사진 촬영</option>
                  <option value="design" className="bg-[#121211]">로고/브랜딩 디자인</option>
                  <option value="insurance" className="bg-[#121211]">보험/재무 설계</option>
                  <option value="web" className="bg-[#121211]">웹/앱 개발</option>
                  <option value="other" className="bg-[#121211]">기타</option>
                </select>
                {errors.type && <p className="text-red-400 text-xs mt-1">{errors.type.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold tracking-wider text-[#9a968f] uppercase mb-2">문의 내용</label>
                <textarea
                  {...register("message")}
                  id="message"
                  rows={4}
                  className="w-full p-4 rounded-xl border border-[#282725] bg-[#121211] text-[#f0eee9] placeholder-[#706d64] focus:outline-none focus:ring-1 focus:ring-rust-orange transition-all resize-none text-sm"
                  placeholder="프로젝트에 대해 간략히 설명해주세요."
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-rust-orange hover:bg-rust-orange-hover text-white p-4 rounded-full font-bold transition-all disabled:opacity-50 cursor-pointer shadow-lg"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">전송 중...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    문의 보내기
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <p className="text-green-400 text-center text-sm font-medium mt-2">
                  성공적으로 전송되었습니다!
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-400 text-center text-sm font-medium mt-2">
                  전송에 실패했습니다. 다시 시도해주세요.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
