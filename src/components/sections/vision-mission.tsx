"use client";

import { useState } from "react";
import { site } from "@/content/site";
import { Icon } from "@/components/icon";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";

type TabKey = "vision" | "mission" | "objectives" | "goal" | "values" | "quality";

const TABS: { key: TabKey; label: string; icon: string; title: string }[] = [
  { key: "vision", label: "Vision", icon: "visibility", title: "Our Vision" },
  { key: "mission", label: "Mission", icon: "flag", title: "Our Mission" },
  { key: "objectives", label: "Objectives", icon: "track_changes", title: "Our Objectives" },
  { key: "goal", label: "Corporate Goal", icon: "lightbulb", title: "Our Corporate Goal" },
  { key: "values", label: "Core Values", icon: "diamond", title: "Our Core Values" },
  { key: "quality", label: "Quality Policy", icon: "verified", title: "Quality Policy" },
];

export function VisionMission() {
  const [active, setActive] = useState<TabKey>("vision");
  const p = site.philosophy;
  const tab = TABS.find((t) => t.key === active)!;

  return (
    <section className="border-y bg-secondary/40">
      <div className="container-px py-20 lg:py-28">
        <SectionHeading
          align="center"
          eyebrow="Our Philosophy"
          title="Vision, mission & values"
          lead="The principles that define who we are and guide how we work — with our partners, our communities and one another."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {/* Tab rail */}
          <Reveal className="lg:col-span-4">
            <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
              {TABS.map((t) => {
                const isActive = t.key === active;
                return (
                  <button
                    key={t.key}
                    onClick={() => setActive(t.key)}
                    className={cn(
                      "group flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3.5 text-left transition-all lg:w-full",
                      isActive
                        ? "border-accent-brand/40 bg-white shadow-md"
                        : "border-transparent bg-white/60 hover:bg-white hover:shadow-sm",
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors",
                        isActive
                          ? "bg-accent-brand text-accent-brand-foreground"
                          : "bg-secondary text-brand group-hover:bg-accent-brand/10",
                      )}
                    >
                      <Icon name={t.icon} size={22} />
                    </span>
                    <span
                      className={cn(
                        "font-heading text-sm font-semibold",
                        isActive ? "text-brand" : "text-muted-foreground",
                      )}
                    >
                      {t.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Content panel */}
          <Reveal className="lg:col-span-8">
            <div className="relative h-full overflow-hidden rounded-3xl border bg-white p-8 shadow-sm lg:p-12">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent-brand/5 blur-2xl"
                aria-hidden
              />
              <div key={active} className="relative animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div className="mb-6 flex items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-accent-brand">
                    <Icon name={tab.icon} size={30} />
                  </span>
                  <h3 className="font-heading text-2xl font-semibold text-brand sm:text-3xl">
                    {tab.title}
                  </h3>
                </div>

                {active === "vision" && (
                  <p className="text-lg leading-relaxed text-muted-foreground">{p.vision}</p>
                )}
                {active === "goal" && (
                  <p className="text-lg leading-relaxed text-muted-foreground">{p.corporateGoal}</p>
                )}
                {active === "values" && (
                  <p className="text-lg leading-relaxed text-muted-foreground">{p.coreValues}</p>
                )}

                {active === "mission" && (
                  <ul className="flex flex-col gap-4">
                    {p.mission.map((m) => (
                      <li key={m} className="flex gap-3">
                        <Icon name="check_circle" className="mt-0.5 shrink-0 text-accent-brand" />
                        <span className="text-lg leading-relaxed text-muted-foreground">{m}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {active === "objectives" && (
                  <ul className="grid gap-4 sm:grid-cols-1">
                    {p.objectives.map((o, i) => (
                      <li key={o} className="flex items-center gap-4 rounded-xl border bg-secondary/40 p-4">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-brand font-heading text-sm font-bold text-accent-brand-foreground">
                          {i + 1}
                        </span>
                        <span className="text-base font-medium text-foreground">{o}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {active === "quality" && (
                  <div className="flex flex-col gap-4">
                    {p.qualityPolicy.map((q) => (
                      <p key={q} className="text-base leading-relaxed text-muted-foreground">
                        {q}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
