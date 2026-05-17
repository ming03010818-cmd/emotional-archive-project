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
        title="Low Battery"
        intro="The hour when the body keeps glowing even though the screen has gone dark."
        posters={[
          {
            src: lowBattery1,
            caption: "She fell asleep mid-sentence, the phone still pressed to her cheek.",
            meta: "Plate 01 · 02%",
          },
          {
            src: lowBattery2,
            caption: "A road photographed through a dying lens — somewhere between leaving and staying.",
            meta: "Plate 02 · 07%",
          },
        ]}
      />

      <ArchiveSection
        id="4am"
        number="02 / V"
        title="4AM Thoughts"
        intro="Insomnia is its own city. She lives there alone, and she dresses well for it."
        posters={[
          {
            src: fourAm1,
            caption: "The city blinked back at her, but it did not answer.",
            meta: "Plate 03 · 04:07",
          },
          {
            src: fourAm2,
            caption: "The lamp stayed on like a small promise. Nobody came.",
            meta: "Plate 04 · 04:43",
          },
        ]}
      />

      <ArchiveSection
        id="silver"
        number="03 / V"
        title="Silver Loneliness"
        intro="Loneliness, when worn properly, becomes jewellery."
        posters={[
          {
            src: silver1,
            caption: "Light cut her in half. She decided to keep both versions.",
            meta: "Plate 05",
          },
          {
            src: silver2,
            caption: "The chains were heavy. Heavier than what she was trying to forget.",
            meta: "Plate 06",
          },
        ]}
      />

      <ArchiveSection
        id="quiet"
        number="04 / V"
        title="Quiet Femininity"
        intro="A softness that does not perform itself. A beauty that refuses to explain."
        posters={[
          {
            src: quiet1,
            caption: "She bought the flowers for herself, and that was the whole story.",
            meta: "Plate 07",
          },
          {
            src: quiet2,
            caption: "Light through old glass — the closest thing to being understood.",
            meta: "Plate 08",
          },
        ]}
      />

      <ArchiveSection
        id="archived"
        number="05 / V"
        title="Archived Feelings"
        intro="Some feelings are not deleted. They are filed away, gently, for later."
        posters={[
          {
            src: archived1,
            caption: "She kept the photographs of things she could not say out loud.",
            meta: "Plate 09",
          },
          {
            src: archived2,
            caption: "Every letter was written. None of them were sent.",
            meta: "Plate 10",
          },
        ]}
      />

      <About />
      <Footer />
    </main>
  );
};

export default Index;
