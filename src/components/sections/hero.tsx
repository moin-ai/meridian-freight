"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { site } from "@/content/site";
import { Icon } from "@/components/icon";
import { Button } from "@/components/ui/button";
import { HeroGlobe } from "@/components/sections/hero-globe";
import { CountryBadges } from "@/components/country-badges";

gsap.registerPlugin(useGSAP);

export function Hero() {
  const root = useRef<HTMLDivElement>(null);
  const { hero, stats } = site;

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-rise", { y: 30, autoAlpha: 0, duration: 0.8, stagger: 0.1 })
        .from(
          ".hero-media",
          { scale: 0.96, autoAlpha: 0, duration: 1, ease: "power2.out" },
          "-=0.6",
        )
        .from(
          ".hero-float",
          { y: 20, autoAlpha: 0, duration: 0.7, stagger: 0.15 },
          "-=0.5",
        );
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative -mt-20 overflow-hidden bg-white pt-20">
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-120 w-120 rounded-full bg-accent-brand/10 blur-3xl"
        aria-hidden
      />
      <div className="container-px grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div className="flex flex-col gap-6">
          <span className="hero-rise inline-flex w-fit items-center gap-2 rounded-full border border-accent-brand/30 bg-accent-brand/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-brand" />
            {hero.eyebrow}
          </span>

          <h1 className="hero-rise font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-brand sm:text-5xl lg:text-6xl">
            {hero.title.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="hero-rise max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {hero.subtitle}
          </p>

          <div className="hero-rise flex flex-wrap items-center gap-3">
            <Button
              render={<Link href={hero.primaryCta.href} />}
              size="lg"
              className="bg-brand text-white hover:bg-brand/90"
            >
              {hero.primaryCta.label}
              <Icon name="arrow_forward" size={20} />
            </Button>
            <Button render={<Link href={hero.secondaryCta.href} />} size="lg" variant="outline">
              <Icon name="local_shipping" size={20} />
              {hero.secondaryCta.label}
            </Button>
          </div>

          <div className="hero-rise flex flex-wrap items-center gap-x-8 gap-y-3 pt-2">
            {stats.slice(0, 3).map((s) => (
              <div key={s.label} className="flex items-center gap-2.5">
                <Icon name={s.icon} className="text-accent-brand" />
                <div className="leading-tight">
                  <p className="font-heading text-lg font-semibold text-brand">
                    {s.value}
                    {s.suffix}
                  </p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="hero-rise pt-1">
            <CountryBadges />
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="hero-media aspect-square w-full max-w-md sm:max-w-xl lg:w-[125%] lg:max-w-none">
            <HeroGlobe />
          </div>
        </div>
      </div>
    </section>
  );
}
