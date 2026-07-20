"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";

type Stage = {
  status: string;
  location: string;
  icon: string;
  done: boolean;
  current: boolean;
  timestamp: string | null;
};
type TrackResult = {
  trackingNumber: string;
  mode: string;
  eta: string;
  currentStatus: string;
  timeline: Stage[];
};

function fmt(ts: string | null) {
  if (!ts) return "Pending";
  return new Date(ts).toLocaleString("en-MY", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function TrackClient() {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<TrackResult | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (value.trim().length < 4) {
      setError("Enter a valid tracking number (min 4 characters).");
      return;
    }
    setError(null);
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ trackingNumber: value.trim() }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error();
      setResult(json as TrackResult);
    } catch {
      setError("We couldn't retrieve that shipment. Please check the number.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-3 rounded-2xl border bg-white p-3 shadow-lg sm:flex-row sm:items-center"
      >
        <div className="flex flex-1 items-center gap-2 px-2">
          <Icon name="search" className="text-muted-foreground" />
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter tracking number (e.g. AP1234567)"
            className="h-11 border-0 text-base focus-visible:ring-0 focus-visible:border-0"
            aria-label="Tracking number"
          />
        </div>
        <Button
          type="submit"
          size="lg"
          disabled={loading}
          className="bg-brand text-white hover:bg-brand/90"
        >
          {loading ? "Tracking..." : "Track"}
          <Icon name="arrow_forward" size={18} />
        </Button>
      </form>

      {error && (
        <p className="flex items-center gap-2 rounded-lg bg-destructive/10 px-4 py-3 text-sm text-destructive">
          <Icon name="error" size={18} />
          {error}
        </p>
      )}

      {loading && (
        <div className="flex flex-col gap-4 rounded-2xl border p-6">
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      )}

      {result && (
        <div className="overflow-hidden rounded-2xl border shadow-sm">
          {/* Summary */}
          <div className="grid gap-4 border-b bg-secondary/40 p-6 sm:grid-cols-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Tracking number
              </p>
              <p className="font-heading text-lg font-semibold text-brand">
                {result.trackingNumber}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Mode · Status
              </p>
              <p className="font-heading text-lg font-semibold text-brand">
                {result.mode} · {result.currentStatus}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Estimated arrival
              </p>
              <p className="font-heading text-lg font-semibold text-brand">
                {new Date(result.eta).toLocaleDateString("en-MY", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>

          {/* Timeline */}
          <ol className="flex flex-col gap-0 p-6">
            {result.timeline.map((s, i) => (
              <li key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-full ring-1 transition-colors",
                      s.current
                        ? "bg-accent-brand text-accent-brand-foreground ring-accent-brand"
                        : s.done
                          ? "bg-brand text-accent-brand ring-brand"
                          : "bg-secondary text-muted-foreground ring-border",
                    )}
                  >
                    <Icon name={s.done ? s.icon : "radio_button_unchecked"} size={20} />
                  </span>
                  {i < result.timeline.length - 1 && (
                    <span
                      className={cn(
                        "my-1 w-0.5 flex-1",
                        s.done ? "bg-brand/40" : "bg-border",
                      )}
                    />
                  )}
                </div>
                <div className={cn("pb-6", !s.done && "opacity-60")}>
                  <p className="font-heading text-base font-semibold text-brand">
                    {s.status}
                  </p>
                  <p className="text-sm text-muted-foreground">{s.location}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{fmt(s.timestamp)}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
