import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { Icon } from "@/components/icon";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, Stagger, Parallax } from "@/components/motion";
import { Button } from "@/components/ui/button";

export function About() {
  const { about } = site;
  return (
    <section className="bg-white">
      <div className="container-px grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative aspect-4/5 overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
            <Parallax speed={8} className="absolute inset-0 scale-110">
              <Image
                src={about.image}
                alt="Meridian Freight operations"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </Parallax>
          </div>
          <div className="absolute -right-5 bottom-8 rounded-2xl border bg-white p-5 shadow-xl">
            <p className="font-heading text-3xl font-bold text-brand">
              {new Date().getFullYear() - site.company.foundedYear}+
            </p>
            <p className="text-sm text-muted-foreground">Years of excellence</p>
          </div>
        </Reveal>

        <div className="order-1 flex flex-col gap-7 lg:order-2">
          <SectionHeading
            eyebrow={about.eyebrow}
            title={about.heading}
            lead={about.lead}
          />
          <Stagger className="grid gap-5 sm:grid-cols-2">
            {about.pillars.map((p) => (
              <div key={p.title} className="flex gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-brand/15 text-accent-brand">
                  <Icon name={p.icon} size={22} />
                </span>
                <div>
                  <h4 className="font-heading text-base font-semibold text-brand">
                    {p.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {p.text}
                  </p>
                </div>
              </div>
            ))}
          </Stagger>
          <Reveal>
            <Button
              render={<Link href="/who-we-are" />}
              className="bg-brand text-white hover:bg-brand/90"
            >
              More about us
              <Icon name="arrow_forward" size={18} />
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
