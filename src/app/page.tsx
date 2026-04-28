"use client";

import { ArrowRight, Globe, Play, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/data";

const games = [
  {
    title: "Pocket Odyssey",
    genre: "캐주얼 시뮬레이션",
    summary: "작고 사랑스러운 세계관 안에서 수집과 성장의 재미를 설계한 대표 IP.",
    accent: "from-[#ffb36b] via-[#ff7aa2] to-[#ff5a5f]",
    stats: ["글로벌 출시", "누적 다운로드 1,800만+", "평점 4.8"],
  },
  {
    title: "Project Vanguard",
    genre: "미드코어 코옵 액션",
    summary: "빠른 전투 템포와 파티 플레이의 몰입감을 강화한 차세대 라이브 서비스 타이틀.",
    accent: "from-[#4fd1c5] via-[#3b82f6] to-[#1d4ed8]",
    stats: ["사전 등록 진행 중", "PvE 레이드", "크로스 플랫폼"],
  },
  {
    title: "Infinite Rooftop",
    genre: "픽셀 러너 RPG",
    summary: "복고풍 픽셀 비주얼과 경쾌한 성장 루프를 결합한 글로벌 시장 테스트작.",
    accent: "from-[#a78bfa] via-[#6366f1] to-[#312e81]",
    stats: ["소프트런칭", "8개 지역 테스트", "UGC 이벤트 운영"],
  },
];

const metrics = [
  {
    value: "715",
    unit: "억원",
    label: "2025 연결 기준 누적 매출 규모",
  },
  {
    value: "185",
    unit: "억원",
    label: "라이브 게임 운영 기반 연간 반복 매출",
  },
  {
    value: "42",
    unit: "개국",
    label: "주요 타이틀 글로벌 서비스 권역",
  },
  {
    value: "160",
    unit: "명",
    label: "개발, 아트, 사업이 함께 움직이는 팀 규모",
  },
];

const updates = [
  {
    category: "NEWS",
    title: "신작 코옵 액션 'Project Vanguard' 글로벌 티저 공개",
    body: "세계관과 핵심 전투 시스템을 담은 첫 영상 공개와 함께 커뮤니티 채널을 오픈했습니다.",
  },
  {
    category: "IR",
    title: "라이브 운영 역량을 바탕으로 안정적인 성장 구조 확보",
    body: "캐주얼 라인업의 장기 운영 성과를 토대로 신규 장르 확장과 해외 퍼블리싱을 가속화합니다.",
  },
  {
    category: "CAREER",
    title: "게임을 오래 사랑하게 만드는 사람을 찾습니다",
    body: "기획, 클라이언트, 아트, 사업 전 직군에서 사용자 경험에 집착하는 동료를 기다립니다.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f3ee] text-[#111111]">
      <section className="relative overflow-hidden bg-[#0f1017] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffd6b866,transparent_24%),radial-gradient(circle_at_65%_18%,#8fd3ff3b,transparent_30%),linear-gradient(180deg,#171824_0%,#0f1017_70%)]" />
        <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-[#fff0d4] blur-[130px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0f1017] to-transparent" />

        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-5 sm:px-8 lg:px-12 lg:pb-24">
          <header className="flex items-center justify-between gap-6 border-b border-white/10 pb-4">
            <div>
              <p className="font-[var(--font-display)] text-lg uppercase tracking-[0.24em] text-white">
                DAIN GAMES
              </p>
            </div>
            <nav className="hidden items-center gap-8 text-sm text-white/75 md:flex">
              <a href="#games" className="transition hover:text-white">
                게임
              </a>
              <a href="#business" className="transition hover:text-white">
                사업
              </a>
              <a href="#updates" className="transition hover:text-white">
                뉴스
              </a>
              <a href="#contact" className="transition hover:text-white">
                문의
              </a>
            </nav>
            <a
              href="#contact"
              className="inline-flex h-10 items-center rounded-full border border-white/15 px-4 text-sm text-white/90 transition hover:border-white/35 hover:bg-white/5"
            >
              Contact
            </a>
          </header>

          <div className="grid gap-10 pt-12 lg:grid-cols-[minmax(0,1.4fr)_360px] lg:items-end">
            <AnimatedSection className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/70">
                <Sparkles className="h-4 w-4" />
                Global Mobile Game Studio
              </div>
              <div className="max-w-4xl space-y-5">
                <h1 className="font-[var(--font-display)] text-4xl leading-[1.02] sm:text-5xl lg:text-7xl">
                  글로벌 시장을 향해
                  <br />
                  캐주얼과 미드코어를
                  <br />
                  동시에 확장합니다
                </h1>
                <p className="max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
                  {siteConfig.description}
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  href="#games"
                  className="h-12 rounded-full bg-white px-7 text-sm font-semibold text-[#12131c] hover:bg-white/90"
                >
                  대표 게임 보기
                </Button>
                <Button
                  href="#updates"
                  variant="ghost"
                  className="h-12 rounded-full border border-white/15 bg-white/5 px-7 text-sm text-white hover:bg-white/10 hover:text-white"
                >
                  최신 소식
                </Button>
              </div>
              <div className="grid max-w-3xl gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
                {[
                  ["11년", "라이브 서비스 운영 경험"],
                  ["42개국", "글로벌 퍼블리싱 권역"],
                  ["3개 라인업", "캐주얼, 코옵, 픽셀 IP"],
                ].map(([value, label]) => (
                  <div key={value}>
                    <p className="font-[var(--font-display)] text-2xl text-white">{value}</p>
                    <p className="mt-2 text-sm text-white/60">{label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15} className="grid gap-4">
              <article className="rounded-[28px] border border-white/10 bg-white/8 p-5 backdrop-blur">
                <div className="mb-14 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.18em] text-white/60">Featured</span>
                  <Play className="h-4 w-4 text-white/70" />
                </div>
                <div className="rounded-[24px] bg-[linear-gradient(145deg,#ffe5b4_0%,#c596ff55_34%,#1f2030_100%)] p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#1d1d29]/55">Next Launch</p>
                  <h2 className="mt-2 font-[var(--font-display)] text-3xl text-[#14151f]">
                    Project
                    <br />
                    Vanguard
                  </h2>
                  <p className="mt-3 max-w-[14rem] text-sm leading-6 text-[#222330]/70">
                    협동 전투, 강한 성장 루프, 시즌형 라이브 운영을 결합한 신작.
                  </p>
                </div>
              </article>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <article className="rounded-[28px] bg-white p-5 text-[#141414] shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#8d8e97]">Publishing</p>
                  <p className="mt-2 text-3xl font-semibold text-[#ff5c6d]">160+</p>
                  <p className="mt-2 text-sm leading-6 text-[#585a63]">
                    UA, CRM, ASO, 운영 분석까지 한 팀으로 움직이는 사업 조직.
                  </p>
                </article>
                <article className="rounded-[28px] border border-white/10 bg-white/5 p-5 text-white">
                  <p className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/60">
                    <Globe className="h-4 w-4" />
                    Worldwide
                  </p>
                  <p className="mt-2 text-lg font-medium">Seoul · Tokyo · Singapore</p>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    글로벌 운영 파트너십과 현지화 파이프라인을 지속 확장 중입니다.
                  </p>
                </article>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <AnimatedSection
        className="mx-auto max-w-7xl px-5 py-18 sm:px-8 lg:px-12 lg:py-24"
      >
        <div id="games" className="mb-10 flex scroll-mt-24 flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#8f8073]">Games</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#141414] sm:text-4xl">
              글로벌 시장을 선도하는
              <br />
              캐주얼 및 미드코어 게임
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[#686055] sm:text-base">
            빠르게 소비되는 콘텐츠가 아니라 오래 기억되는 플레이 경험을 목표로, 각 장르에 맞는
            감도와 운영 전략을 함께 설계합니다.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {games.map((game, index) => (
            <AnimatedSection
              key={game.title}
              delay={0.08 * index}
              className="group overflow-hidden rounded-[30px] bg-white shadow-[0_24px_70px_rgba(26,24,38,0.08)]"
            >
              <div className={`h-[320px] bg-gradient-to-br ${game.accent} p-6 text-white`}>
                <div className="flex h-full flex-col justify-between rounded-[24px] border border-white/20 bg-black/10 p-5 backdrop-blur-[2px]">
                  <div className="flex items-start justify-between">
                    <span className="rounded-full bg-white/14 px-3 py-1 text-xs uppercase tracking-[0.18em]">
                      {game.genre}
                    </span>
                    <span className="text-xs uppercase tracking-[0.18em] text-white/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-[var(--font-display)] text-3xl">{game.title}</h3>
                    <p className="mt-3 max-w-xs text-sm leading-6 text-white/80">{game.summary}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3 px-6 py-5">
                {game.stats.map((stat) => (
                  <div
                    key={stat}
                    className="flex items-center justify-between border-b border-[#ece7dd] pb-3 text-sm text-[#4b4b52]"
                  >
                    <span>{stat}</span>
                    <ArrowRight className="h-4 w-4 text-[#b8a89a] transition group-hover:text-[#22222a]" />
                  </div>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      <section id="business" className="border-y border-[#e5ddd1] bg-[#fffdf9] scroll-mt-24">
        <AnimatedSection className="mx-auto max-w-7xl px-5 py-18 sm:px-8 lg:px-12 lg:py-24">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#8f8073]">Business</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#141414] sm:text-4xl">
                안정적인 운영 수익과
                <br />
                다음 성장을 준비하는 사업 구조
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[#686055] sm:text-base">
              퍼포먼스 마케팅, 라이브 운영, 글로벌 퍼블리싱 역량이 함께 맞물리며 장기적인 포트폴리오
              가치를 키웁니다.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {metrics.map((item, index) => (
              <AnimatedSection
                key={item.label}
                delay={0.06 * index}
                className="rounded-[28px] border border-[#e7e0d6] bg-white p-6"
              >
                <div className="flex items-end gap-1 text-[#ff5c6d]">
                  <span className="font-[var(--font-display)] text-5xl leading-none sm:text-6xl">
                    {item.value}
                  </span>
                  <span className="pb-1 text-xl font-semibold">{item.unit}</span>
                </div>
                <p className="mt-6 max-w-sm text-sm leading-7 text-[#66615a]">{item.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <AnimatedSection
        className="mx-auto max-w-7xl px-5 py-18 sm:px-8 lg:px-12 lg:py-24"
      >
        <div id="updates" className="mb-10 flex scroll-mt-24 flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#8f8073]">Updates</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#141414] sm:text-4xl">
              게임, 사업, 채용의 흐름을
              <br />
              같은 속도로 공개합니다
            </h2>
          </div>
          <Button
            href="#contact"
            variant="outline"
            className="h-11 rounded-full border-[#111111] px-6 text-[#111111] hover:bg-[#111111] hover:text-white"
          >
            협업 문의
          </Button>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {updates.map((item, index) => (
            <AnimatedSection
              key={item.title}
              delay={0.08 * index}
              className="rounded-[28px] bg-[#15161f] p-6 text-white"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-white/45">{item.category}</p>
              <h3 className="mt-4 text-2xl font-semibold leading-tight">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/68">{item.body}</p>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      <section id="contact" className="bg-[#111216] text-white scroll-mt-24">
        <AnimatedSection className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/45">Contact</p>
              <h2 className="mt-4 font-[var(--font-display)] text-4xl leading-tight sm:text-5xl">
                오래 사랑받는 게임을
                <br />
                함께 만들고 싶다면
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                퍼블리싱 제안, 투자 문의, 채용, 협업 제안을 기다립니다. 브랜드와 게임의 다음 장면을
                함께 설계해 봅시다.
              </p>
            </div>
            <div className="space-y-4 rounded-[30px] border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-sm text-white/55">대표 메일</span>
                <span className="text-sm font-medium">contact@daingames.com</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-sm text-white/55">채용 문의</span>
                <span className="text-sm font-medium">careers@daingames.com</span>
              </div>
              <div className="flex items-center justify-between pb-2">
                <span className="text-sm text-white/55">본사</span>
                <span className="text-sm font-medium">Seoul, Korea</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}
