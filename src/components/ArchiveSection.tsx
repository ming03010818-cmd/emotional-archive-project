import { useEffect, useRef } from "react";

interface Poster {
  src: string;
  caption: string;
  meta?: string;
}

interface ArchiveSectionProps {
  number: string;
  title: string;
  intro: string;
  posters: Poster[];
  id: string;
}

const ArchiveSection = ({ number, title, intro, posters, id }: ArchiveSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".reveal");
    if (!els) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible"));
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className="relative px-6 py-40 md:px-12 md:py-56 lg:px-24"
    >
      <header className="mx-auto mb-24 max-w-6xl md:mb-32">
        <div className="reveal flex items-baseline gap-6 border-b border-foreground/15 pb-5 text-[10px] tracking-wider-editorial uppercase text-warm-gray font-mono">
          <span>{number}</span>
          <span className="flex-1 h-px bg-foreground/10" aria-hidden />
          <span>章节</span>
        </div>
        <h2 className="reveal text-display mt-12 text-5xl md:text-7xl lg:text-[7rem] font-extralight">
          {title}
        </h2>
        <p className="reveal mt-4 max-w-xl text-sm md:text-base text-warm-gray leading-relaxed font-light">
          {intro}
        </p>
      </header>

      <div className="mx-auto grid max-w-6xl gap-x-8 gap-y-20 md:grid-cols-2 md:gap-x-10 md:gap-y-28">
        {posters.map((p, i) => (
          <figure key={i} className="reveal hover-zoom group">
            <div className="relative overflow-hidden bg-secondary aspect-[4/5]">
              <img
                src={p.src}
                alt={p.caption}
                loading="lazy"
                className="archive-img block w-full h-full object-cover"
              />
            </div>
            <figcaption className="mt-4 flex items-start justify-between gap-6">
              <p className="text-sm md:text-base font-light max-w-sm leading-snug">
                {p.caption}
              </p>
              {p.meta && (
                <span className="font-mono text-[10px] uppercase tracking-wider-editorial text-warm-gray whitespace-nowrap">
                  {p.meta}
                </span>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default ArchiveSection;
