import Link from "next/link";
import { Reveal } from "@/components/motion";
import { Eyebrow } from "@/components/section-heading";
import { Icon } from "@/components/icon";

export function PageHero({
  eyebrow,
  title,
  lead,
  breadcrumb,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  breadcrumb: { label: string; href?: string }[];
}) {
  return (
    <section className="relative -mt-20 overflow-hidden border-b bg-secondary/40 pt-20">
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent-brand/10 blur-3xl"
        aria-hidden
      />
      <div className="container-px relative py-14 lg:py-20">
        <nav className="mb-5 flex items-center gap-1.5 text-sm text-muted-foreground">
          {breadcrumb.map((b, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {i > 0 && <Icon name="chevron_right" size={16} className="opacity-50" />}
              {b.href ? (
                <Link href={b.href} className="transition-colors hover:text-brand">
                  {b.label}
                </Link>
              ) : (
                <span className="text-brand">{b.label}</span>
              )}
            </span>
          ))}
        </nav>
        <Reveal className="flex max-w-3xl flex-col gap-4">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h1 className="font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-brand sm:text-5xl">
            {title}
          </h1>
          {lead ? (
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {lead}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
