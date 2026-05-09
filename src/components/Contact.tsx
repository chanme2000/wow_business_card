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
    <section className="py-24 px-4 bg-muted/30" id="contact">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start a Project</h2>
          <p className="text-muted-foreground mb-8">
            새로운 프로젝트나 협업에 대한 문의를 남겨주세요. 최대한 빠르게 답변해 드리겠습니다.
          </p>

          <div className="space-y-4 mb-8">
            <a
              href="https://open.kakao.com/o/s1kpM8ti"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-4 bg-[#FEE500] text-black rounded-xl hover:bg-[#FEE500]/90 transition-colors font-medium"
            >
              <MessageCircle className="w-5 h-5" />
              카카오톡 오픈채팅으로 문의하기
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-card border border-border p-6 rounded-2xl shadow-sm">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">이름</label>
              <input
                {...register("name")}
                id="name"
                type="text"
                className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="홍길동"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">이메일</label>
              <input
                {...register("email")}
                id="email"
                type="email"
                className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="example@domain.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="type" className="block text-sm font-medium mb-1">문의 유형</label>
              <select
                {...register("type")}
                id="type"
                className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              >
                <option value="">유형을 선택해주세요</option>
                <option value="photo">사진 촬영</option>
                <option value="design">로고/브랜딩 디자인</option>
                <option value="insurance">보험/재무 설계</option>
                <option value="web">웹/앱 개발</option>
                <option value="other">기타</option>
              </select>
              {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type.message}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">문의 내용</label>
              <textarea
                {...register("message")}
                id="message"
                rows={4}
                className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                placeholder="프로젝트에 대해 간략히 설명해주세요."
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground p-3 rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
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
              <p className="text-green-600 dark:text-green-400 text-center text-sm font-medium mt-2">
                성공적으로 전송되었습니다!
              </p>
            )}
            {submitStatus === "error" && (
              <p className="text-red-500 text-center text-sm font-medium mt-2">
                전송에 실패했습니다. 다시 시도해주세요.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
