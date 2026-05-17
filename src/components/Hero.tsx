import heroImg from "@/assets/hero.jpg";

const Hero = () => (
  <section
    id="top"
    className="relative min-h-screen w-full overflow-hidden bg-ink text-paper"
  >
    <div className="absolute inset-0 vignette">
      <img
        src={heroImg}
        alt="A woman in soft cinematic light"
        width={1080}
        height={1920}
        className="h-full w-full object-cover opacity-80 fade-in-slow"
      />
    </div>

    <div className="absolute top-0 inset-x-0 z-10 flex items-center justify-between px-6 md:px-12 pt-28 md:pt-24 font-mono text-[10px] uppercase tracking-editorial text-paper/60">
      <span>Vol. I</span>
      <span className="hidden md:block">An Independent Visual Journal</span>
      <span>N° 001</span>
    </div>

    <div className="relative z-10 flex min-h-screen flex-col justify-end px-6 md:px-12 pb-20 md:pb-28">
      <p className="font-mono text-[10px] uppercase tracking-wider-editorial text-paper/70 mb-8 fade-in-slow">
        — A cinematic archive
      </p>
      <h1 className="text-display text-paper text-[14vw] md:text-[10vw] lg:text-[9rem] leading-[0.88] fade-in-slow">
        Emotional
        <br />
        <span className="italic font-serif silver-text">Visual</span> Archive
      </h1>
      <div className="mt-10 grid gap-6 md:grid-cols-12 fade-in-slow">
        <p className="md:col-span-5 font-serif italic text-xl md:text-2xl text-paper/85 leading-snug">
          an archive of female emotions, silence, exhaustion and beauty.
        </p>
        <div className="md:col-span-4 md:col-start-9 flex md:justify-end items-end">
          <a
            href="#low-battery"
            className="group inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-wider-editorial text-paper/80 hover:text-paper"
          >
            <span className="h-px w-12 bg-paper/40 group-hover:w-20 transition-all duration-700" />
            Enter the archive
          </a>
        </div>
      </div>
    </div>

    <div className="absolute bottom-6 inset-x-0 z-10 overflow-hidden border-t border-paper/20 py-3">
      <div className="marquee whitespace-nowrap font-mono text-[10px] uppercase tracking-wider-editorial text-paper/50 flex gap-16">
        {Array.from({ length: 2 }).map((_, k) => (
          <div key={k} className="flex gap-16 shrink-0">
            <span>Low Battery</span><span>·</span>
            <span>4AM Thoughts</span><span>·</span>
            <span>Silver Loneliness</span><span>·</span>
            <span>Quiet Femininity</span><span>·</span>
            <span>Archived Feelings</span><span>·</span>
            <span>An archive of female emotions</span><span>·</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
