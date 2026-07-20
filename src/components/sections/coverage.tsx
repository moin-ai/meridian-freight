import Image from "next/image";
import { site } from "@/content/site";
import { SectionHeading } from "@/components/section-heading";
import { Stagger } from "@/components/motion";

export function Coverage() {
  return (
    <section className="relative overflow-hidden bg-brand">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden
      />
      <div className="container-px relative py-20 lg:py-28">
        <SectionHeading
          align="center"
          invert
          eyebrow="Connected Globally"
          title="One network across 10 ASEAN nations"
          lead="Invested locally, connected globally — moving cargo seamlessly across South East Asia and beyond."
        />
        <Stagger className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {site.countries.map((c) => (
            <div
              key={c.code}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3.5 backdrop-blur transition-colors hover:border-accent-brand/40 hover:bg-white/10"
            >
              <Image
                src={`https://flagcdn.com/w80/${c.code}.png`}
                alt={`${c.name} flag`}
                width={32}
                height={21}
                className="h-5 w-8 rounded-sm object-cover ring-1 ring-white/20"
              />
              <span className="text-sm font-medium text-white">{c.name}</span>
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
