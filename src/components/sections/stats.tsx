import { site } from "@/content/site";
import { Icon } from "@/components/icon";
import { Counter, Stagger } from "@/components/motion";

export function Stats() {
  return (
    <section className="border-y bg-secondary/40">
      <div className="container-px py-14">
        <Stagger className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {site.stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center gap-2 text-center"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-accent-brand shadow-sm ring-1 ring-black/5">
                <Icon name={s.icon} />
              </span>
              <p className="font-heading text-4xl font-bold text-brand sm:text-5xl">
                <Counter
                  value={s.value}
                  suffix={s.suffix}
                  group={s.label !== "Established Since"}
                />
              </p>
              <p className="text-sm font-medium text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
