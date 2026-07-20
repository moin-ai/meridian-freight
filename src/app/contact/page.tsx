import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageHero } from "@/components/page-hero";
import { Icon } from "@/components/icon";
import { Reveal, Stagger } from "@/components/motion";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Meridian Freight. Offices in Petaling Jaya, Butterworth and Johor Bahru.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's move your business forward"
        lead="Reach our team for quotes, partnerships or support. We're here across Malaysia and ready to help."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="bg-white">
        <div className="container-px grid gap-12 py-20 lg:grid-cols-2 lg:py-28">
          {/* Left: details */}
          <div className="flex flex-col gap-8">
            <Reveal className="flex flex-col gap-4">
              <h2 className="font-heading text-2xl font-semibold text-brand">
                Talk to us
              </h2>
              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:${site.contact.generalEmail}`}
                  className="flex items-center gap-3 text-foreground/80 hover:text-brand"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-brand/15 text-accent-brand">
                    <Icon name="mail" size={20} />
                  </span>
                  {site.contact.generalEmail}
                </a>
                <a
                  href={`tel:${site.contact.mainPhone}`}
                  className="flex items-center gap-3 text-foreground/80 hover:text-brand"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-brand/15 text-accent-brand">
                    <Icon name="call" size={20} />
                  </span>
                  {site.contact.mainPhone}
                </a>
                <div className="flex items-center gap-3 text-foreground/80">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-brand/15 text-accent-brand">
                    <Icon name="schedule" size={20} />
                  </span>
                  {site.contact.hours}
                </div>
              </div>
            </Reveal>

            <Stagger className="grid gap-4 sm:grid-cols-1">
              {site.offices.map((o) => (
                <div key={o.city} className="rounded-2xl border bg-secondary/30 p-5">
                  <div className="mb-1 flex items-center gap-2">
                    <Icon name="location_on" size={18} className="text-accent-brand" />
                    <h3 className="font-heading text-base font-semibold text-brand">
                      {o.city}
                      <span className="ml-2 text-xs font-medium text-muted-foreground">
                        {o.label}
                      </span>
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {o.address}
                  </p>
                  <a
                    href={`tel:${o.phone}`}
                    className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
                  >
                    <Icon name="call" size={16} />
                    {o.phone}
                  </a>
                </div>
              ))}
            </Stagger>
          </div>

          {/* Right: form */}
          <Reveal className="rounded-3xl border bg-white p-7 shadow-xl lg:p-9">
            <h2 className="mb-1 font-heading text-2xl font-semibold text-brand">
              Send us a message
            </h2>
            <p className="mb-6 text-sm text-muted-foreground">
              Fill in the form and we'll respond within one business day.
            </p>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="border-t">
        <div className="h-[420px] w-full overflow-hidden bg-secondary">
          <iframe
            title="Meridian Freight HQ location"
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              site.offices[0].mapQuery,
            )}&output=embed`}
          />
        </div>
      </section>
    </>
  );
}
