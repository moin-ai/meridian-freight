import Link from "next/link";
import { site } from "@/content/site";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { Stagger } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icon";

export function ServicesPreview() {
  const featured = site.services.filter((s) => s.group === "Logistics").slice(0, 6);

  return (
    <section className="bg-white">
      <div className="container-px py-20 lg:py-28">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="What We Do"
            title="High-quality tactical solutions"
            lead="End-to-end logistics built around quality, delivery and customer experience — covering every link in your supply chain."
          />
          <Button
            render={<Link href="/what-we-do" />}
            variant="outline"
            className="shrink-0"
          >
            View all services
            <Icon name="arrow_forward" size={18} />
          </Button>
        </div>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </Stagger>
      </div>
    </section>
  );
}
