import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/content/site";
import { PageHero } from "@/components/page-hero";
import { Icon } from "@/components/icon";
import { Reveal, Stagger } from "@/components/motion";
import { ServiceCard } from "@/components/service-card";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return site.services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = site.services.find((s) => s.slug === slug);
  if (!service) return { title: "Service" };
  return { title: service.title, description: service.summary };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = site.services.find((s) => s.slug === slug);
  if (!service) notFound();

  const related = site.services
    .filter((s) => s.group === service.group && s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={service.group === "Logistics" ? "Logistics Service" : "Group Division"}
        title={service.title}
        lead={service.summary}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "What We Do", href: "/what-we-do" },
          { label: service.title },
        ]}
      />

      <section className="bg-white">
        <div className="container-px grid gap-12 py-20 lg:grid-cols-5 lg:py-28">
          <div className="flex flex-col gap-8 lg:col-span-3">
            <Reveal className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-accent-brand">
                <Icon name={service.icon} size={30} />
              </span>
              <h2 className="font-heading text-2xl font-semibold text-brand">
                Overview
              </h2>
            </Reveal>
            <Reveal as="p" className="text-lg leading-relaxed text-muted-foreground">
              {service.description}
            </Reveal>

            <Stagger className="grid gap-4 sm:grid-cols-1">
              {service.highlights.map((h) => (
                <div
                  key={h}
                  className="flex items-center gap-3 rounded-xl border bg-secondary/30 p-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-brand/15 text-accent-brand">
                    <Icon name="check" size={18} />
                  </span>
                  <span className="text-sm font-medium text-foreground">{h}</span>
                </div>
              ))}
            </Stagger>

            <Reveal className="flex flex-wrap gap-3 pt-2">
              <Button
                render={<Link href="/get-a-quote" />}
                className="bg-brand text-white hover:bg-brand/90"
              >
                Request a quote
                <Icon name="arrow_forward" size={18} />
              </Button>
              <Button render={<Link href="/contact" />} variant="outline">
                Talk to our team
              </Button>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-2">
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
              {service.image ? (
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-brand">
                  <Icon name={service.icon} size={96} className="text-accent-brand/80" />
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t bg-secondary/40">
          <div className="container-px py-20">
            <h2 className="mb-10 font-heading text-2xl font-semibold text-brand">
              Related services
            </h2>
            <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </Stagger>
          </div>
        </section>
      )}
    </>
  );
}
