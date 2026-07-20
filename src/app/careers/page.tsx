import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/content/site";
import { PageHero } from "@/components/page-hero";
import { Icon } from "@/components/icon";
import { Reveal, Stagger } from "@/components/motion";
import { CareersClient } from "@/components/forms/careers-client";

export const metadata: Metadata = {
  title: "Careers",
  description: site.careers.lead,
};

export default function CareersPage() {
  const { careers } = site;
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Our priority is always our people"
        lead={careers.lead}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Careers" }]}
      />

      {/* Culture */}
      <section className="bg-white">
        <div className="container-px grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <Reveal className="order-2 lg:order-1">
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
              <Image
                src={careers.image}
                alt="Life at Meridian Freight"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div className="order-1 flex flex-col gap-7 lg:order-2">
            <Reveal as="h2" className="font-heading text-3xl font-semibold text-brand sm:text-4xl">
              {careers.heading}
            </Reveal>
            <Stagger className="grid gap-5 sm:grid-cols-2">
              {careers.benefits.map((b) => (
                <div key={b.title} className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-brand/15 text-accent-brand">
                    <Icon name={b.icon} size={22} />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-brand">
                      {b.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {b.text}
                    </p>
                  </div>
                </div>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* Openings + apply */}
      <section className="border-t bg-secondary/30">
        <div className="container-px py-20 lg:py-28">
          <CareersClient />
        </div>
      </section>
    </>
  );
}
