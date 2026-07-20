import Link from "next/link";
import { site } from "@/content/site";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/motion";
import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="bg-white">
      <div className="container-px py-16 lg:py-20">
        <Reveal className="relative overflow-hidden rounded-3xl bg-brand px-8 py-14 text-center shadow-2xl sm:px-14">
          <div
            className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-accent-brand/20 blur-3xl"
            aria-hidden
          />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-brand/15 text-accent-brand">
              <Icon name="contract" size={30} />
            </span>
            <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl">
              Ready to move your cargo?
            </h2>
            <p className="text-base text-white/70 sm:text-lg">
              Get a tailored quote in minutes, or speak with our team about your
              supply chain. We respond fast — because your shipment cannot wait.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                render={<Link href="/get-a-quote" />}
                size="lg"
                className="bg-accent-brand text-accent-brand-foreground hover:bg-accent-brand/90"
              >
                Get a Quote
                <Icon name="arrow_forward" size={20} />
              </Button>
              <Button
                render={<a href={`tel:${site.contact.mainPhone}`} />}
                size="lg"
                variant="outline"
                className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <Icon name="call" size={20} />
                {site.contact.mainPhone}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
