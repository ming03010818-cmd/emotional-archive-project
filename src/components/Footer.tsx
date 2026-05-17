const Footer = () => (
  <footer className="bg-background px-6 md:px-12 py-16 border-t border-foreground/15">
    <div className="mx-auto max-w-6xl flex flex-col md:flex-row md:items-end justify-between gap-10">
      <div>
        <p className="text-display text-3xl md:text-5xl">情绪视觉档案</p>
        <p className="mt-4 font-serif italic text-warm-gray text-lg">
          一份关于女性情绪、沉默、疲惫与美的档案。
        </p>
      </div>
      <div className="font-mono text-[10px] uppercase tracking-editorial text-warm-gray space-y-2 md:text-right">
        <p>Instagram — @emotional.visual.archive</p>
        <p>投稿 — 长期开放</p>
        <p>© MMXXVI · 所有沉默,保留所有权利</p>
      </div>
    </div>
  </footer>
);

export default Footer;
