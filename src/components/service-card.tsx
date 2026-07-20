import Link from "next/link";
import { Icon } from "@/components/icon";
import type { Service } from "@/content/site";
import { cn } from "@/lib/utils";

export function ServiceCard({
  service,
  className,
}: {
  service: Service;
  className?: string;
}) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group relative flex flex-col gap-3 rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-brand/50 hover:shadow-xl",
        className,
      )}
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-brand transition-colors duration-300 group-hover:bg-accent-brand group-hover:text-accent-brand-foreground">
        <Icon name={service.icon} size={26} />
      </span>
      <h3 className="font-heading text-lg font-semibold text-brand">
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {service.summary}
      </p>
      <span className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        Learn more
        <Icon
          name="arrow_forward"
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}
