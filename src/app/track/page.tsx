import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { Icon } from "@/components/icon";
import { TrackClient } from "@/components/forms/track-client";

export const metadata: Metadata = {
  title: "Track Shipment",
  description: "Track your Meridian Freight shipment in real time.",
};

export default function TrackPage() {
  return (
    <>
      <PageHero
        eyebrow="Track Shipment"
        title="Where is my cargo?"
        lead="Enter your tracking number for a live status of your shipment across our network."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Track Shipment" }]}
      />

      <section className="bg-white">
        <div className="container-px py-16 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <TrackClient />
            </Reveal>
            <p className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground">
              <Icon name="info" size={16} />
              Live carrier integration is being connected. Any reference returns a
              sample status for now.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
