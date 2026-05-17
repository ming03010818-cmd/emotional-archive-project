import { useEffect, useState } from "react";

const links = [
  { href: "#low-battery", label: "电量不足" },
  { href: "#4am", label: "凌晨四点" },
  { href: "#silver", label: "银色孤独" },
  { href: "#quiet", label: "安静女性" },
  { href: "#archived", label: "归档情绪" },
  { href: "#about", label: "关于" },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled ? "bg-background/80 backdrop-blur-md py-3" : "py-6"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-12">
        <a
          href="#top"
          className="font-mono text-[10px] md:text-xs uppercase tracking-wider-editorial"
        >
          E·V·A — 第 01 期
        </a>
        <nav className="hidden lg:flex items-center gap-10 font-mono text-[10px] uppercase tracking-editorial">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-warm-gray hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="菜单"
          className="lg:hidden font-mono text-[10px] uppercase tracking-editorial"
        >
          {open ? "关闭" : "目录"}
        </button>
        <span className="hidden lg:block font-mono text-[10px] uppercase tracking-editorial text-warm-gray">
          MMXXVI
        </span>
      </div>

      {open && (
        <nav className="lg:hidden fixed inset-0 top-0 z-40 flex flex-col items-center justify-center gap-8 bg-background/95 backdrop-blur-lg">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-serif italic text-3xl"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Nav;
