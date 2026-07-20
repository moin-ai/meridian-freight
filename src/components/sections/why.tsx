import { SectionHeading } from "@/components/section-heading";
import { Icon } from "@/components/icon";
import { Stagger } from "@/components/motion";

const reasons = [
  {
    icon: "schedule",
    title: "On-time, every time",
    text: "Effective planning and live visibility keep your shipments moving to schedule.",
  },
  {
    icon: "hub",
    title: "End-to-end network",
    text: "From factory to consignee — one partner for sea, air, land, warehousing and last mile.",
  },
  {
    icon: "savings",
    title: "Cost-optimised",
    text: "Competitive rates and smart consolidation that minimise your total logistics cost.",
  },
  {
    icon: "support_agent",
    title: "People-first service",
    text: "A dedicated team that treats your cargo and your business with genuine care.",
  },
];

export function Why() {
  return (
    <section className="border-y bg-secondary/40">
      <div className="container-px py-20 lg:py-28">
        <SectionHeading
          align="center"
          eyebrow="Why Meridian Freight"
          title="Excellence with quality, at its best"
          lead="The reasons businesses across the region trust us to keep their supply chains running."
        />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="flex flex-col gap-3 rounded-2xl border bg-white p-7 transition-shadow hover:shadow-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-accent-brand">
                <Icon name={r.icon} size={26} />
              </span>
              <h3 className="font-heading text-lg font-semibold text-brand">
                {r.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {r.text}
              </p>
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
