import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/motion";
import { QuoteForm } from "@/components/forms/quote-form";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Request a tailored logistics quote from Meridian Freight — sea, air or land freight across ASEAN.",
};

const assurances = [
  { icon: "bolt", title: "Fast response", text: "A tailored quote within one business day." },
  { icon: "payments", title: "Competitive rates", text: "Cost-optimised across our carrier network." },
  { icon: "support_agent", title: "Dedicated team", text: "A real person to manage your shipment." },
];

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Get a Quote"
        title="Request a tailored quote"
        lead="Tell us about your shipment and our team will get back to you with the best routing and rate."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Get a Quote" }]}
      />

      <section className="bg-white">
        <div className="container-px grid gap-12 py-20 lg:grid-cols-5 lg:py-28">
          <div className="flex flex-col gap-8 lg:col-span-2">
            <Reveal as="h2" className="font-heading text-2xl font-semibold text-brand">
              Why request through us
            </Reveal>
            <div className="flex flex-col gap-5">
              {assurances.map((a) => (
                <Reveal key={a.title} className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand text-accent-brand">
                    <Icon name={a.icon} size={24} />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-brand">
                      {a.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {a.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
