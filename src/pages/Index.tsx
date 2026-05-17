import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ArchiveSection from "@/components/ArchiveSection";
import About from "@/components/About";
import Footer from "@/components/Footer";

import lowBattery1 from "@/assets/low-battery-1.jpg";
import lowBattery2 from "@/assets/low-battery-2.jpg";
import fourAm1 from "@/assets/4am-1.jpg";
import fourAm2 from "@/assets/4am-2.jpg";
import silver1 from "@/assets/silver-1.jpg";
import silver2 from "@/assets/silver-2.jpg";
import quiet1 from "@/assets/quiet-1.jpg";
import quiet2 from "@/assets/quiet-2.jpg";
import archived1 from "@/assets/archived-1.jpg";
import archived2 from "@/assets/archived-2.jpg";

const Index = () => {
  return (
    <main className="grain relative bg-background text-foreground">
      <Nav />
      <Hero />

      <ArchiveSection
        id="low-battery"
        number="01 / V"
        title="电量不足"
        intro="屏幕已经熄灭,身体却仍在发光的那个时刻。"
        posters={[
          {
            src: lowBattery1,
            caption: "她在说话说到一半时睡着,手机仍贴着脸颊。",
            meta: "图版 01 · 02%",
          },
          {
            src: lowBattery2,
            caption: "透过一只即将熄灭的镜头拍下的道路 —— 介于离开与停留之间。",
            meta: "图版 02 · 07%",
          },
        ]}
      />

      <ArchiveSection
        id="4am"
        number="02 / V"
        title="凌晨四点的思绪"
        intro="失眠是一座独立的城市。她独自住在那里,并且穿戴得体。"
        posters={[
          {
            src: fourAm1,
            caption: "城市朝她眨了眨眼,却没有回答。",
            meta: "图版 03 · 04:07",
          },
          {
            src: fourAm2,
            caption: "那盏灯像一个小小的承诺,亮着。没有人来。",
            meta: "图版 04 · 04:43",
          },
        ]}
      />

      <ArchiveSection
        id="silver"
        number="03 / V"
        title="银色的孤独"
        intro="孤独,若佩戴得宜,便成了首饰。"
        posters={[
          {
            src: silver1,
            caption: "光把她切成两半。她决定把两个版本都留下。",
            meta: "图版 05",
          },
          {
            src: silver2,
            caption: "链子很重。比她想要忘记的事更重。",
            meta: "图版 06",
          },
        ]}
      />

      <ArchiveSection
        id="quiet"
        number="04 / V"
        title="安静的女性气质"
        intro="一种不必表演的柔软。一种拒绝解释的美。"
        posters={[
          {
            src: quiet1,
            caption: "她为自己买了花,这就是故事的全部。",
            meta: "图版 07",
          },
          {
            src: quiet2,
            caption: "光穿过旧玻璃 —— 最接近被理解的瞬间。",
            meta: "图版 08",
          },
        ]}
      />

      <ArchiveSection
        id="archived"
        number="05 / V"
        title="归档的情绪"
        intro="有些感受不会被删除。它们被温柔地存放,留到日后。"
        posters={[
          {
            src: archived1,
            caption: "她保留了那些无法说出口之物的照片。",
            meta: "图版 09",
          },
          {
            src: archived2,
            caption: "每一封信都写好了,却没有一封寄出。",
            meta: "图版 10",
          },
        ]}
      />

      <About />
      <Footer />
    </main>
  );
};

export default Index;
