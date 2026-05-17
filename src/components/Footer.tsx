const Footer = () => (
  <footer className="bg-background px-6 md:px-12 py-16 border-t border-foreground/15">
    <div className="mx-auto max-w-6xl flex flex-col md:flex-row md:items-end justify-between gap-10">
      <div>
        <p className="text-display text-3xl md:text-5xl">Emotional Visual Archive</p>
        <p className="mt-4 font-serif italic text-warm-gray text-lg">
          an archive of female emotions, silence, exhaustion and beauty.
        </p>
      </div>
      <div className="font-mono text-[10px] uppercase tracking-editorial text-warm-gray space-y-2 md:text-right">
        <p>Instagram — @emotional.visual.archive</p>
        <p>Submissions — open</p>
        <p>© MMXXVI · All silences reserved</p>
      </div>
    </div>
  </footer>
);

export default Footer;
