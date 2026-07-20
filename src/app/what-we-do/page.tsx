import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { Stagger } from "@/components/motion";
import { Coverage } from "@/components/sections/coverage";
import { CtaBand } from "@/components/sections/cta";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Explore Meridian Freight's full range of logistics and group services — sea & air freight, warehousing, transportation, customs and more.",
};

export default function WhatWeDoPage() {
  const logistics = site.services.filter((s) => s.group === "Logistics");
  const group = site.services.filter((s) => s.group === "Group");

  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="High-quality tactical solutions"
        lead="Total logistics and supply chain solutions — plus the diversified strengths of a 17-company group — all under one trusted partner."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "What We Do" }]}
      />

      <section className="bg-white">
        <div className="container-px py-20 lg:py-28">
          <SectionHeading
            eyebrow="Our Services"
            title="Everything your supply chain needs"
            lead="From the first mile to the last — and well beyond logistics."
          />

          <div className="mt-12">
            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="logistics">Logistics</TabsTrigger>
                <TabsTrigger value="group">Group Divisions</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-10">
                <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {site.services.map((s) => (
                    <ServiceCard key={s.slug} service={s} />
                  ))}
                </Stagger>
              </TabsContent>
              <TabsContent value="logistics" className="mt-10">
                <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {logistics.map((s) => (
                    <ServiceCard key={s.slug} service={s} />
                  ))}
                </Stagger>
              </TabsContent>
              <TabsContent value="group" className="mt-10">
                <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {group.map((s) => (
                    <ServiceCard key={s.slug} service={s} />
                  ))}
                </Stagger>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <Coverage />
      <CtaBand />
    </>
  );
}
