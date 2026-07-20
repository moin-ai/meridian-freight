import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";
import { Icon } from "@/components/icon";

export function Footer() {
  const year = new Date().getFullYear();
  const logistics = site.services.filter((s) => s.group === "Logistics").slice(0, 6);

  return (
    <footer className="mt-auto bg-brand text-white">
      <div className="container-px grid grid-cols-2 gap-10 py-16 md:grid-cols-4 lg:grid-cols-5">
        <div className="col-span-2 flex flex-col gap-4 lg:col-span-2">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src={site.company.logo}
              alt={`${site.company.name} logo`}
              width={36}
              height={49}
              className="h-9 w-auto"
            />
            <span className="font-heading text-lg font-semibold">
              {site.company.name}
            </span>
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-white/60">
            {site.about.lead}
          </p>
          <div className="flex gap-2 pt-1">
            {site.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-accent-brand hover:text-accent-brand"
              >
                <Icon name={s.icon} size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-brand">
            Company
          </p>
          {site.nav.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-white/70 hover:text-white">
              {l.label}
            </Link>
          ))}
          <Link href="/get-a-quote" className="text-sm text-white/70 hover:text-white">
            Get a Quote
          </Link>
          <Link href="/track" className="text-sm text-white/70 hover:text-white">
            Track Shipment
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-brand">
            Services
          </p>
          {logistics.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="text-sm text-white/70 hover:text-white"
            >
              {s.title}
            </Link>
          ))}
        </div>

        <div className="col-span-2 flex flex-col gap-3 lg:col-span-1">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-brand">
            Get in touch
          </p>
          <a href={`mailto:${site.contact.generalEmail}`} className="flex items-center gap-2 text-sm text-white/70 hover:text-white">
            <Icon name="mail" size={18} className="text-accent-brand" />
            {site.contact.generalEmail}
          </a>
          <a href={`tel:${site.contact.mainPhone}`} className="flex items-center gap-2 text-sm text-white/70 hover:text-white">
            <Icon name="call" size={18} className="text-accent-brand" />
            {site.contact.mainPhone}
          </a>
          <p className="flex items-start gap-2 text-sm text-white/70">
            <Icon name="location_on" size={18} className="text-accent-brand" />
            {site.offices[0].address}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/50 sm:flex-row">
          <p>
            © {year} {site.company.legalName}. All rights reserved.
          </p>
          <p>Reg. No. {site.company.registration}</p>
        </div>
      </div>
    </footer>
  );
}
