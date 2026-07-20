"use client";

import dynamic from "next/dynamic";
import type { GlobeConfig } from "@/components/ui/globe";

const World = dynamic(
  () => import("@/components/ui/globe").then((m) => m.World),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center">
        <div className="relative aspect-square w-3/4 max-w-100">
          <div className="absolute inset-0 animate-pulse rounded-full border border-border bg-secondary/40" />
          <div className="absolute inset-[12%] rounded-full border border-dashed border-border/70" />
          <div className="absolute inset-[30%] rounded-full border border-dashed border-border/50" />
          <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-brand" />
        </div>
      </div>
    ),
  },
);

// Brand-red accent shades for the routes (matches --accent-brand).
const RED = ["#d62839", "#e84855", "#b81d2a"];
const c = (i: number) => RED[i % RED.length];

const globeConfig: GlobeConfig = {
  pointSize: 4,
  globeColor: "#ffffff", // white sphere
  showAtmosphere: true,
  atmosphereColor: "#cbd5e1", // soft slate rim defines the white globe
  atmosphereAltitude: 0.1,
  emissive: "#f1f5f9",
  emissiveIntensity: 0.05,
  shininess: 0.25,
  polygonColor: "rgba(17,24,39,0.85)", // black land dots
  ambientLight: "#ffffff",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1100,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  // Start facing the densest node cluster (the KL / Singapore hub).
  initialPosition: { lat: 2.2, lng: 102.7 },
  autoRotate: true,
  autoRotateSpeed: 0.6,
};

// Logistics routes radiating from the ASEAN hub (KL / Singapore) to the region
// and key global gateways.
const KL = { lat: 3.139, lng: 101.6869 };
const SG = { lat: 1.3521, lng: 103.8198 };

const arcs = [
  { from: KL, to: { lat: 1.3521, lng: 103.8198 }, alt: 0.1 }, // Singapore
  { from: KL, to: { lat: 13.7563, lng: 100.5018 }, alt: 0.2 }, // Bangkok
  { from: KL, to: { lat: -6.2088, lng: 106.8456 }, alt: 0.2 }, // Jakarta
  { from: KL, to: { lat: 21.0278, lng: 105.8342 }, alt: 0.25 }, // Hanoi
  { from: KL, to: { lat: 16.8409, lng: 96.1735 }, alt: 0.2 }, // Yangon
  { from: SG, to: { lat: 11.5564, lng: 104.9282 }, alt: 0.15 }, // Phnom Penh
  { from: SG, to: { lat: 4.9031, lng: 114.9398 }, alt: 0.15 }, // Brunei
  { from: SG, to: { lat: -8.5569, lng: 125.5603 }, alt: 0.2 }, // Dili
  { from: SG, to: { lat: 35.6762, lng: 139.6503 }, alt: 0.35 }, // Tokyo
  { from: SG, to: { lat: 31.2304, lng: 121.4737 }, alt: 0.3 }, // Shanghai
  { from: KL, to: { lat: 25.2048, lng: 55.2708 }, alt: 0.4 }, // Dubai
  { from: SG, to: { lat: 51.9244, lng: 4.4777 }, alt: 0.6 }, // Rotterdam
  { from: KL, to: { lat: 51.5072, lng: -0.1276 }, alt: 0.6 }, // London
  { from: SG, to: { lat: 34.0522, lng: -118.2437 }, alt: 0.7 }, // Los Angeles
  { from: SG, to: { lat: -33.8688, lng: 151.2093 }, alt: 0.3 }, // Sydney
  { from: KL, to: { lat: 17.9757, lng: 102.6331 }, alt: 0.18 }, // Vientiane
];

const data = arcs.map((a, i) => ({
  order: (i % 6) + 1,
  startLat: a.from.lat,
  startLng: a.from.lng,
  endLat: a.to.lat,
  endLng: a.to.lng,
  arcAlt: a.alt,
  color: c(i),
}));

export function HeroGlobe() {
  return <World data={data} globeConfig={globeConfig} />;
}
