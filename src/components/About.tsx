const About = () => (
  <section id="about" className="relative px-6 py-40 md:px-12 md:py-56 lg:px-24 bg-ink text-paper">
    <div className="mx-auto max-w-5xl">
      <p className="font-mono text-[10px] uppercase tracking-wider-editorial text-paper/50 mb-12">
        — Colophon / 00
      </p>
      <p className="text-display text-3xl md:text-5xl lg:text-6xl leading-[1.05] text-paper">
        This is not a portfolio.
        <br />
        <span className="text-paper/55">This is a room with the lights off,</span>
        <br />
        <span className="italic">a window left half open,</span>
        <br />
        <span className="text-paper/55">the sound of a phone vibrating</span>
        <br />
        on an empty pillow.
      </p>

      <div className="mt-20 grid gap-10 md:grid-cols-12 border-t border-paper/15 pt-12">
        <p className="md:col-span-5 font-serif italic text-xl md:text-2xl text-paper/85 leading-snug">
          The Emotional Visual Archive collects what women feel when no one is watching — the soft, the tired, the silver, the silent.
        </p>
        <div className="md:col-span-4 md:col-start-8 font-mono text-[11px] uppercase tracking-editorial text-paper/60 space-y-3">
          <p>Editor — Anonymous</p>
          <p>Direction — Film &amp; Memory</p>
          <p>Frequency — Whenever it hurts</p>
          <p>Origin — Somewhere quiet</p>
        </div>
      </div>

      <p className="mt-24 font-serif italic text-2xl md:text-3xl text-paper/70">
        “Some feelings refuse to be photographed.
        <br />
        We let them stay anyway.”
      </p>
    </div>
  </section>
);

export default About;
