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
      className="relative px-6 py-32 md:px-12 md:py-48 lg:px-24"
    >
      <header className="mx-auto mb-20 max-w-6xl md:mb-32">
        <div className="reveal flex items-baseline gap-6 border-b border-foreground/15 pb-6 text-xs tracking-wider-editorial uppercase text-warm-gray font-mono">
          <span>{number}</span>
          <span className="flex-1 h-px bg-foreground/10" aria-hidden />
          <span>Chapter</span>
        </div>
        <h2 className="reveal text-display mt-10 text-5xl md:text-7xl lg:text-[8rem]">
          {title}
        </h2>
        <p className="reveal mt-8 max-w-xl font-serif italic text-lg md:text-2xl text-warm-gray leading-relaxed">
          {intro}
        </p>
      </header>

      <div className="mx-auto grid max-w-6xl gap-x-8 gap-y-24 md:grid-cols-12 md:gap-y-40">
        {posters.map((p, i) => {
          const layouts = [
            "md:col-span-7 md:col-start-1",
            "md:col-span-5 md:col-start-8 md:mt-32",
          ];
          return (
            <figure
              key={i}
              className={`reveal hover-zoom group ${layouts[i % 2]}`}
            >
              <div className="relative overflow-hidden bg-secondary">
                <img
                  src={p.src}
                  alt={p.caption}
                  loading="lazy"
                  className="block w-full h-auto"
                />
              </div>
              <figcaption className="mt-6 flex items-start justify-between gap-6 border-t border-foreground/15 pt-4">
                <p className="font-serif italic text-base md:text-lg max-w-sm leading-snug">
                  {p.caption}
                </p>
                {p.meta && (
                  <span className="font-mono text-[10px] uppercase tracking-wider-editorial text-warm-gray whitespace-nowrap">
                    {p.meta}
                  </span>
                )}
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
};

export default ArchiveSection;
