# ARCHI & CO 디지털 명함 프로젝트 컨텍스트 (진행 내역)

이 문서는 추후 다른 세션이나 AI 도우미와 대화할 때 현재까지의 진행 상황과 구조를 즉시 파악할 수 있도록 대화 내용을 요약한 문서입니다.

## 1. 프로젝트 개요
- **목적:** 백엔드 없이 프론트엔드(React)만으로 구동되는 반응형 디지털 브랜딩 페이지 구축
- **위치:** `d:\electronic_business_card`
- **구동 방법:** `npm run dev` / 빌드: `npm run build`

## 2. 기술 스택
- **프레임워크:** Vite, React 19, TypeScript
- **스타일링:** Tailwind CSS v4, shadcn/ui (Radix UI 기반)
- **애니메이션:** Framer Motion
- **이메일 연동:** EmailJS (`@emailjs/browser`)
- **폼 & 유효성 검사:** `react-hook-form`, `zod`
- **아이콘:** `lucide-react`

## 3. 구현 완료된 기능 및 구조
모든 기능이 정상적으로 구현되었으며, `npm run build` 오류 없이 통과된 상태입니다.

- `src/App.tsx`: 모든 페이지 컴포넌트를 모아둔 최상단 컨테이너
- `src/components/ThemeProvider.tsx`: 다크/라이트 테마 자동 인식 및 전환 토글 기능 (localStorage 연동)
- `src/components/Navbar.tsx`: 상단 내비게이션 바 및 테마 전환 버튼
- `src/components/Hero.tsx`: 메인 카피와 자동 스크롤 애니메이션이 들어간 첫 화면
- `src/components/Expertise.tsx`: 4-Pillar (사진, 디자인, 보험, 개발) 카드 리스트 및 Blueprint 애니메이션
- `src/components/Portfolio.tsx`: 포트폴리오 탭 필터링 및 클릭 시 열리는 상세 모달
- `src/components/Contact.tsx`: EmailJS 기반 폼 발송(오류 및 성공 Toast 메시지 포함) 및 카카오톡 오픈채팅 버튼 연동
- `src/components/Footer.tsx`: VCF 파일을 텍스트 기반으로 즉시 생성하고 다운로드하는 vCard 기능

## 4. 환경 변수 설정
이메일 전송을 위해 `.env` 파일에 EmailJS의 키가 등록되어 있습니다.
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`
*(추후 Vercel 등 플랫폼에 배포할 때, 호스팅 설정 화면에서 동일한 환경변수를 필수로 추가해 주어야 합니다.)*

## 5. 남은 작업 (사용자 자율)
- **포트폴리오 사진 교체:** `src/components/Portfolio.tsx` 내의 더미 이미지를 실제 호스팅된 이미지 URL로 교체
- **vCard 정보 수정:** `src/components/Footer.tsx` 내 `handleVCardDownload` 함수에 본인의 전화번호/주소 등 기입
- **카카오톡 링크:** `Contact.tsx`에 오픈채팅 링크(`https://open.kakao.com/o/s1kpM8ti`) 연동 완료

이 파일의 내용을 AI에게 전달하거나 읽도록 지시하면, 기존의 모든 설계 의도와 구조를 즉각적으로 파악하고 이어서 작업할 수 있습니다.
