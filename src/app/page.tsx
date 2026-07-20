import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { ServicesPreview } from "@/components/sections/services-preview";
import { About } from "@/components/sections/about";
import { Why } from "@/components/sections/why";
import { Coverage } from "@/components/sections/coverage";
import { CtaBand } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesPreview />
      <About />
      <Why />
      <Coverage />
      <CtaBand />
    </>
  );
}
