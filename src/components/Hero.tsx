import heroImg from "@/assets/hero.jpg";

const Hero = () => (
  <section
    id="top"
    className="relative min-h-screen w-full overflow-hidden bg-ink text-paper"
  >
    <div className="absolute inset-0 vignette">
      <img
        src={heroImg}
        alt="柔和电影感光线中的女性"
        width={1080}
        height={1920}
        className="archive-img h-full w-full object-cover opacity-80 fade-in-slow"
      />
    </div>

    <div className="absolute top-0 inset-x-0 z-10 flex items-center justify-between px-6 md:px-12 pt-28 md:pt-24 font-mono text-[10px] uppercase tracking-editorial text-paper/60">
      <span>第 I 卷</span>
      <span className="hidden md:block">一本独立的视觉杂志</span>
      <span>N° 001</span>
    </div>

    <div className="relative z-10 flex min-h-screen flex-col justify-end px-6 md:px-12 pb-20 md:pb-28">
      <p className="font-mono text-[10px] uppercase tracking-wider-editorial text-paper/70 mb-8 fade-in-slow">
        — 一份电影感的档案
      </p>
      <h1 className="text-display text-paper text-[14vw] md:text-[10vw] lg:text-[9rem] leading-[0.92] fade-in-slow font-thin">
        EMOTIONAL
        <br />
        <span className="silver-text font-extralight">VISUAL</span> ARCHIVE
      </h1>
      <div className="mt-8 grid gap-6 md:grid-cols-12 fade-in-slow">
        <p className="md:col-span-5 text-base md:text-lg text-paper/80 leading-relaxed font-light">
          一份关于女性情绪、沉默、疲惫与美的档案。
        </p>
        <div className="md:col-span-4 md:col-start-9 flex md:justify-end items-end">
          <a
            href="#low-battery"
            className="group inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-wider-editorial text-paper/80 hover:text-paper"
          >
            <span className="h-px w-12 bg-paper/40 group-hover:w-20 transition-all duration-700" />
            进入档案
          </a>
        </div>
      </div>
    </div>

    <div className="absolute bottom-6 inset-x-0 z-10 overflow-hidden border-t border-paper/20 py-3">
      <div className="marquee whitespace-nowrap font-mono text-[10px] uppercase tracking-wider-editorial text-paper/50 flex gap-16">
        {Array.from({ length: 2 }).map((_, k) => (
          <div key={k} className="flex gap-16 shrink-0">
            <span>电量不足</span><span>·</span>
            <span>凌晨四点的思绪</span><span>·</span>
            <span>银色的孤独</span><span>·</span>
            <span>安静的女性气质</span><span>·</span>
            <span>归档的情绪</span><span>·</span>
            <span>一份关于女性情绪的档案</span><span>·</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
