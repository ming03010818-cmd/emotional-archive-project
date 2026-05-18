const About = () => (
  <section id="about" className="relative px-6 py-48 md:px-12 md:py-64 lg:px-24 bg-ink text-paper">
    <div className="mx-auto max-w-5xl">
      <p className="font-mono text-[10px] uppercase tracking-wider-editorial text-paper/50 mb-10">
        — 版本说明 / 00
      </p>
      <p className="text-display text-3xl md:text-5xl lg:text-6xl leading-[1.15] text-paper font-thin">
        这不是一份作品集。
        <br />
        <span className="text-paper/55">这是一间熄了灯的房间,</span>
        <br />
        <span className="text-paper/55">一扇半开的窗,</span>
        <br />
        <span className="text-paper/55">手机在空枕上震动的</span>
        <br />
        声音。
      </p>

      <div className="mt-24 grid gap-10 md:grid-cols-12 border-t border-paper/15 pt-12">
        <p className="md:col-span-5 text-base md:text-lg text-paper/80 leading-relaxed font-light">
          情绪视觉档案收藏着女性在无人凝视时的感受 —— 那些柔软的、疲惫的、银色的、沉默的。
        </p>
        <div className="md:col-span-4 md:col-start-8 font-mono text-[10px] uppercase tracking-editorial text-paper/60 space-y-3">
          <p>主编 — 匿名</p>
          <p>方向 — 胶片与记忆</p>
          <p>刊期 — 每当心痛之时</p>
          <p>起源 — 某个安静的地方</p>
        </div>
      </div>

      <p className="mt-28 text-lg md:text-xl text-paper/65 font-light leading-relaxed max-w-2xl">
        “有些感受拒绝被拍下。
        <br />
        我们也任由它们停留。”
      </p>
    </div>
  </section>
);

export default About;
