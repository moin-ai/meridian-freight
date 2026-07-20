import Image from "next/image";
import type { Metadata } from "next";
import { site, type Person } from "@/content/site";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, Stagger } from "@/components/motion";
import { VisionMission } from "@/components/sections/vision-mission";
import { CtaBand } from "@/components/sections/cta";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const metadata: Metadata = {
  title: "Who We Are",
  description: site.about.lead,
};

function initials(name: string) {
  const parts = name.replace(/\b(Mr|Ms|Mrs|Dato|Dr|Tuan|Hj|Puan|Ir)\.?\b/gi, "").trim().split(/\s+/);
  return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "")).toUpperCase();
}

function PeopleGrid({ people }: { people: Person[] }) {
  return (
    <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {people.map((p) => (
        <div
          key={p.name + p.role}
          className="flex items-center gap-4 rounded-2xl border bg-white p-5 transition-shadow hover:shadow-md"
        >
          <Avatar className="h-12 w-12 ring-2 ring-accent-brand/30">
            <AvatarFallback className="bg-brand font-heading text-sm font-semibold text-accent-brand">
              {initials(p.name)}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <p className="truncate font-heading text-sm font-semibold text-brand">
              {p.name}
            </p>
            <p className="text-xs leading-snug text-muted-foreground">{p.role}</p>
          </div>
        </div>
      ))}
    </Stagger>
  );
}

export default function WhoWeArePage() {
  const { founder, about, board, leadership } = site;
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title={about.heading}
        lead={about.lead}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Who We Are" }]}
      />

      {/* Founder */}
      <section className="bg-white">
        <div className="container-px grid items-center gap-12 py-20 lg:grid-cols-5 lg:py-28">
          <Reveal className="lg:col-span-2">
            <div className="relative mx-auto aspect-4/5 max-w-sm overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
              <Image
                src={founder.image!}
                alt={founder.name}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div className="flex flex-col gap-6 lg:col-span-3">
            <SectionHeading
              eyebrow="Meet Our Founder"
              title={founder.name}
            />
            <p className="font-heading text-lg font-medium text-accent-brand">
              {founder.role}
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              {founder.bio}
            </p>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Values */}
      <VisionMission />

      {/* Team */}
      <section className="bg-white">
        <div className="container-px py-20 lg:py-28">
          <SectionHeading
            align="center"
            eyebrow="Leadership"
            title="The people behind Meridian Freight"
            lead="A board and executive team driving the group's vision across the region."
          />
          <div className="mt-12">
            <Tabs defaultValue="board" className="items-center">
              <TabsList className="mx-auto">
                <TabsTrigger value="board">Board of Directors</TabsTrigger>
                <TabsTrigger value="leadership">Leadership Team</TabsTrigger>
              </TabsList>
              <TabsContent value="board" className="mt-10 w-full">
                <PeopleGrid people={board} />
              </TabsContent>
              <TabsContent value="leadership" className="mt-10 w-full">
                <PeopleGrid people={leadership} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
